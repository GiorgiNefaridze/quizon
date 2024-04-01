import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

import { ScreenType } from "../types/GlobalScreenTypes";

type GameOverModalType = ScreenType & {
  score: number;
};

const GameOverModal = ({ navigation, score }: GameOverModalType) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View>
      <Modal isVisible={isVisible}>
        <View className="p-10 pb-5 w-[70%] rounded-lg mx-auto bg-white gap-y-5">
          <Text className="text-center text-xl">Score: {score} 🥂</Text>
          <Pressable
            className="p-3 w-full bg-[#f8c367] flex-row items-center justify-around rounded-xl"
            onPress={() => {
              navigation.navigate("Home");
              setIsVisible(false);
            }}
          >
            <Text className="text-white text-xl font-bold">Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default GameOverModal;
