import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./src/navigations/StackNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
