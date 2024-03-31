import { DifficultiesNames } from "../../hooks/difficulties/useGetDfficulties";

type Quiz = {
  type: string;
  difficulty: DifficultiesNames;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Quizzes = Quiz[];

type QuizResponse = {
  response_code: number;
  results: Quizzes;
};

export { type QuizResponse, type Quiz };
