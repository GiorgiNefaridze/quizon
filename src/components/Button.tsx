import { Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonProps = {
  answer: string;
  setSelected: Dispatch<SetStateAction<string>>;
  selected: string;
  checkAnswer: boolean;
  correctAnswer: string;
};

const Btn = ({
  answer,
  setSelected,
  selected,
  checkAnswer,
  correctAnswer,
}: ButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  useEffect(() => {
    setPressed(selected === answer);
  }, [selected, answer]);

  useEffect(() => {
    setIsCorrectAnswer(checkAnswer && selected === correctAnswer);
  }, [checkAnswer]);

  const handleSelect = () => {
    !checkAnswer && setSelected(answer);
  };

  return (
    <TouchableOpacity
      onPress={handleSelect}
      className="m-[1.5%] w-[80%] p-3 rounded-lg flex-row items-center gap-x-2"
      style={{
        backgroundColor: pressed
          ? isCorrectAnswer
            ? "#0dff0d"
            : "#f8c367"
          : "white",
      }}
    >
      <MaterialIcons name="radio-button-unchecked" size={20} />
      <Text className="text-lg">{answer}</Text>
    </TouchableOpacity>
  );
};

export default memo(Btn);
