import { View, Text, Image, Button, TouchableOpacity } from "react-native";

import { ScreenType } from "../types/GlobalScreenTypes";

import Layer from "../assets/layers.png";

const Home = ({ navigation }: ScreenType) => {
  const handleQuizNavigation = () => {
    navigation?.navigate("Quiz");
  };

  return (
    <View className="flex-1 bg-[#E5C287] relative items-center justify-center">
      <Text className="text-[40px] font-bold text-white mb-10">QUIZON</Text>
      <View className="gap-y-8 w-full items-center">
        <TouchableOpacity className="bg-white p-2 rounded-xl w-1/2">
          <Button title="Start" onPress={handleQuizNavigation} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-2 rounded-xl w-1/2">
          <Button title="Options" />
        </TouchableOpacity>
      </View>
      <Image source={Layer} className="absolute opacity-20 z-[-1]" />
    </View>
  );
};

export default Home;
