import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../constants/Routes";

const Stack = createStackNavigator();

const initialRouteName = "Home";

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ header: () => null }}
    >
      {Routes.map(({ path, compoennt }) => {
        return <Stack.Screen name={path} component={compoennt} />;
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
