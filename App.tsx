import { NavigationContainer } from "@react-navigation/native";

import QueryClientWrapper from "./QueryClientWrapper";
import StackNavigation from "./src/navigations/StackNavigation";
import QuizOptionsContextWrapper from "./src/contexts/QuizOptionsContext";

const App = () => {
  return (
    <QueryClientWrapper>
      <QuizOptionsContextWrapper>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </QuizOptionsContextWrapper>
    </QueryClientWrapper>
  );
};

export default App;
