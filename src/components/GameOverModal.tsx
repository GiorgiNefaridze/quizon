import { useState } from "react";
import { View, Text } from "react-native";
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
        <View className="p-10 w-[70%] flex-row gap-x-5 mx-auto items-center justify-center bg-white">
          <Text>Score: {score}</Text>
          <Text
            onPress={() => {
              navigation.navigate("Home");
              setIsVisible(false);
            }}
          >
            Restart game
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default GameOverModal;
