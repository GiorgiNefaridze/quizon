import { useEffect, useMemo, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
  const { data: quiz, refetch } = useGetQuizzes({
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
    <View className="flex-1 bg-[#E5C287] justify-evenly items-center relative">
      <View className="w-full absolute top-20 pr-5 pl-5 flex items-center flex-row justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={24} color="black" />
        </TouchableOpacity>
        <Text>Score: {score}</Text>
      </View>
      <Text className="font-bold text-lg text-center">{quiz?.question}</Text>
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
      <View className="w-full flex-row items-center justify-center gap-x-5">
        <View className="w-1/2 bg-white p-2 rounded-lg">
          <Button
            title="Submit answer"
            onPress={handleSubmit}
            disabled={Boolean(!selected || checkAnswer)}
          />
        </View>
        {checkAnswer && isCorrectAnswer && (
          <View className="w-1/5 bg-white p-2 rounded-lg">
            <Button title="Next" onPress={reset} />
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
