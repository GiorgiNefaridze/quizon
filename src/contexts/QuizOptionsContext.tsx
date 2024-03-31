import {
  createContext,
  useContext,
  type PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type OptionType = {
  id: number;
  name: string;
};

type QuizOptionsType = {
  category: OptionType;
  setCategory: Dispatch<SetStateAction<OptionType>>;
  difficulty: OptionType;
  setDifficulty: Dispatch<SetStateAction<OptionType>>;
};

const quizOptions = createContext<QuizOptionsType>({} as QuizOptionsType);

export const QuizOptionsContext = () => {
  return useContext(quizOptions);
};

const QuizOptionsContextWrapper = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState<OptionType>({} as OptionType);
  const [difficulty, setDifficulty] = useState<OptionType>({} as OptionType);

  return (
    <quizOptions.Provider
      value={{ setCategory, category, setDifficulty, difficulty }}
    >
      {children}
    </quizOptions.Provider>
  );
};

export default QuizOptionsContextWrapper;
