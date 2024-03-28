import { type ReactNode } from "react";

import Home from "../screens/Home";
import Quiz from "../screens/Quiz";

type RouteType = {
  path: string;
  compoennt: () => ReactNode;
};

type RoutesType = RouteType[];

const Routes: RoutesType = [
  {
    path: "Home",
    compoennt: Home,
  },
  {
    path: "Quiz",
    compoennt: Quiz,
  },
] as const;

export { Routes };
