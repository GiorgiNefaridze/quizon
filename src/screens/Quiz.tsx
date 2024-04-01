import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import Btn from "../components/Button";
import GameOverModal from "../components/GameOverModal";

import { useGetQuizzes } from "../hooks/quizzes/useGetQuizzes";
import { ShuffleArray } from "../utils/ShuffleArray";
import { scoreSystem } from "../constants/Score";
import { QuizOptionsContext } from "../contexts/QuizOptionsContext";
import { ScreenType } from "../types/GlobalScreenTypes";

const Quiz = ({ navigation }: ScreenType) => {
  const [selected, setSelected] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const isFocused = useIsFocused();

  useEffect(() => {
    setCheckAnswer(false);
  }, [isFocused]);

  const { category, difficulty } = QuizOptionsContext();
  const {
    data: quiz,
    refetch,
    isFetching,
  } = useGetQuizzes({
    categoryId: category?.id,
    difficulty: difficulty?.name,
  });

  const isCorrectAnswer = selected === quiz?.correct_answer;
  const ShuffledArray = useMemo(
    () => ShuffleArray<string>([quiz?.correct_answer], quiz?.incorrect_answers),
    [quiz?.correct_answer]
  );

  const handleSubmit = () => {
    setCheckAnswer(true);
    if (isCorrectAnswer) {
      setScore((score) => score + scoreSystem[difficulty?.name]);
    }
  };

  const reset = () => {
    setCheckAnswer(false);
    setSelected("");
    refetch();
  };

  return (
    <View className="flex-1 bg-[#d979f6] pt-20 justify-evenly items-center relative px-5">
      <View className="w-full absolute top-20 flex items-center flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border p-1 rounded-2xl border-white"
        >
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
        <Text className="font-bold text-lg text-white">
          Score: {isFetching ? ".." : score}
        </Text>
      </View>

      {isFetching ? (
        <ActivityIndicator color={"white"} size={"large"} />
      ) : (
        <>
          <Text className="font-bold text-xl text-center text-white">
            {quiz?.question}
          </Text>
          <View className="w-full items-center justify-center">
            {ShuffledArray?.map((answer, idx) => (
              <Btn
                answer={answer}
                setSelected={setSelected}
                selected={selected}
                checkAnswer={checkAnswer}
                correctAnswer={quiz?.correct_answer}
                key={idx}
              />
            ))}
          </View>
        </>
      )}
      <View className="w-full flex-row items-center justify-center  mx-auto">
        <View className="w-[55%] bg-white p-2 rounded-lg">
          <Button
            title="Submit answer"
            onPress={handleSubmit}
            disabled={Boolean(!selected || checkAnswer)}
            color={"black"}
          />
        </View>
        {checkAnswer && isCorrectAnswer && (
          <View className="w-1/5 bg-white p-2 ml-[5%] rounded-lg">
            <Button title="Next" onPress={reset} color={"black"} />
          </View>
        )}
        {checkAnswer && !isCorrectAnswer && (
          <GameOverModal navigation={navigation} score={score} />
        )}
      </View>
    </View>
  );
};

export default Quiz;
