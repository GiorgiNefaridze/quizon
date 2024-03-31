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
      className="m-1 w-[70%] p-3 rounded-lg flex-row items-center gap-x-2"
      style={{
        backgroundColor: pressed
          ? isCorrectAnswer
            ? "green"
            : "#c7c7c7"
          : "white",
      }}
    >
      <MaterialIcons name="radio-button-unchecked" size={20} />
      <Text>{answer}</Text>
    </TouchableOpacity>
  );
};

export default memo(Btn);
