import { DifficultiesNames } from "../hooks/difficulties/useGetDfficulties";

const scoreSystem: Record<DifficultiesNames, number> = {
  easy: 5,
  medium: 10,
  hard: 20,
};

export { scoreSystem };
