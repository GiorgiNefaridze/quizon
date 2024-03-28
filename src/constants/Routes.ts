import { type ReactNode } from "react";

import Home from "../screens/Home";
import Quiz from "../screens/Quiz";

import { type ScreenType } from "../types/GlobalScreenTypes";

type RouteType = {
  path: "Home" | "Quiz";
  component: ({}: ScreenType & unknown) => ReactNode;
};

type RoutesType = RouteType[];

const Routes: RoutesType = [
  {
    path: "Home",
    component: Home,
  },
  {
    path: "Quiz",
    component: Quiz,
  },
] as const;

export { Routes };
