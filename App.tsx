import { NavigationContainer } from "@react-navigation/native";

import QueryClientWrapper from "./QueryClientWrapper";
import StackNavigation from "./src/navigations/StackNavigation";

const App = () => {
  return (
    <QueryClientWrapper>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </QueryClientWrapper>
  );
};

export default App;
