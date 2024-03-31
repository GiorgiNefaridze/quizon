import { useEffect, useMemo, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import Btn from "../components/Button";

import { useGetQuizzes } from "../hooks/quizzes/useGetQuizzes";
import { ShuffleArray } from "../utils/ShuffleArray";
import { QuizOptionsContext } from "../contexts/QuizOptionsContext";
import { ScreenType } from "../types/GlobalScreenTypes";

export type AnswerChecked = {
  status: boolean;
  selectedAnswer: string;
};

const Quiz = ({ navigation }: ScreenType) => {
  const [selected, setSelected] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setCheckAnswer(false);
  }, [isFocused]);

  const { category, difficulty } = QuizOptionsContext();
  const { data: quiz, refetch } = useGetQuizzes({
    categoryId: category?.id,
    difficulty: difficulty?.name,
  });

  const ShuffledArray = useMemo(
    () => ShuffleArray<string>([quiz?.correct_answer], quiz?.incorrect_answers),
    [quiz?.correct_answer]
  );

  return (
    <View className="flex-1 bg-[#E5C287] justify-evenly items-center relative">
      <TouchableOpacity
        className="absolute left-5 top-20"
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="leftcircle" size={24} color="black" />
      </TouchableOpacity>
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

      <View className="w-1/2 bg-white p-2 rounded-lg">
        <Button
          title="Submit answer"
          onPress={() => setCheckAnswer(true)}
          disabled={Boolean(!selected || checkAnswer)}
        />
      </View>
    </View>
  );
};

export default Quiz;
