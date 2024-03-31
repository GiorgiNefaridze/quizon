const ShuffleArray = <T>(arr: T[], args?: T[]): T[] => {
  return [...arr, ...(args ?? [])].sort(() => Math.random() - 0.5);
};

export { ShuffleArray };
