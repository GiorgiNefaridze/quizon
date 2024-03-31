import { useQuery } from "react-query";

import networkClient from "../../../network";
import { getSessionToken } from "../../../network";
import { quizQueries } from "./query";
import { QuizResponse } from "../../types/cuizzes/Quizzes";

type GetQuizzesType = {
  difficulty: string;
  categoryId: number;
};

const getQuizzes = async ({ categoryId, difficulty }: GetQuizzesType) => {
  const token = await getSessionToken();
  const { data } = await networkClient<QuizResponse>(
    `/api.php?amount=1&difficulty=${difficulty}&category=${categoryId}&token=${token}`
  );

  return data.results[0];
};

const useGetQuizzes = (options: GetQuizzesType) => {
  return useQuery({
    queryKey: quizQueries.all,
    queryFn: () => getQuizzes(options),
    enabled: Boolean(options.categoryId && options.difficulty),
  });
};

export { useGetQuizzes };
