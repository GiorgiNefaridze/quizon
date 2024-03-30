import { useState } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";

import { useGetCategories } from "../hooks/categories/useGetCategories";
import { useGetDfficulties } from "../hooks/difficulties/useGetDfficulties";
import { ScreenType } from "../types/GlobalScreenTypes";
import Dropdown from "../components/SelectDropdown";

import Layer from "../assets/layers.png";

const Home = ({ navigation }: ScreenType) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const { data: categories, isLoading } = useGetCategories();
  const difficulties = useGetDfficulties();

  const handleNavigation = () => {
    navigation?.navigate("Quiz");
  };

  return (
    <View className="flex-1 bg-[#E5C287] items-center justify-center">
      <Text className="text-[40px] font-bold text-white mb-10">QUIZON</Text>
      <TouchableOpacity className="bg-white p-2 rounded-xl w-1/2">
        <Button title="Start" onPress={handleNavigation} />
      </TouchableOpacity>

      {!isLoading ? (
        <View className="w-60 h-20 justify-between p-2 items-center flex-col">
          <Dropdown
            data={categories ?? []}
            label="Select categories"
            handleChange={setCategory}
          />
          <Dropdown
            data={difficulties}
            label="Select difficulties"
            handleChange={setDifficulty}
          />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      <Image source={Layer} className="absolute opacity-20 z-[-1]" />
    </View>
  );
};

export default Home;
