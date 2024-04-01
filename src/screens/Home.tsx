import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import OptionsModal from "../components/OptionsModal";
import { ScreenType } from "../types/GlobalScreenTypes";

import Layer from "../assets/layers.png";

const Home = ({ navigation }: ScreenType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = () => {
    navigation?.navigate("Quiz");
  };

  return (
    <View className="flex-1 bg-[#d979f6] items-center justify-center gap-y-10">
      <Image source={Layer} />
      <Text className="text-[40px] font-bold text-white mb-10">QUIZON</Text>

      <View className="w-full flex-col items-center gap-y-4">
        <Pressable
          className="p-4 px-6 w-1/2 flex-row items-center justify-between bg-white rounded-xl"
          onPress={handleNavigation}
        >
          <Text className="text-[#f8c367] text-xl font-bold">Start</Text>
          <MaterialCommunityIcons name="run" size={24} color="#f8c367" />
        </Pressable>
        <Pressable
          onPress={() => setIsModalOpen(true)}
          className="p-4 px-6 w-1/2 flex-row items-center justify-between bg-white rounded-xl"
        >
          <Text className="text-[#f8c367] text-xl font-bold">Options</Text>
          <Ionicons name="settings" size={24} color="#f8c367" />
        </Pressable>
      </View>

      {isModalOpen && (
        <OptionsModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </View>
  );
};

export default Home;
