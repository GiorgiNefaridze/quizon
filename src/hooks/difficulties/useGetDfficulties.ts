const difficulties = [
  {
    id: 1,
    name: "easy",
  },
  {
    id: 2,
    name: "medium",
  },
  {
    id: 3,
    name: "hard",
  },
] as const;

const difficultiesNames = difficulties.map((dif) => dif?.name);
type DifficultiesNames = (typeof difficultiesNames)[number];

const useGetDfficulties = () => {
  return difficulties;
};

export { useGetDfficulties, type DifficultiesNames };
