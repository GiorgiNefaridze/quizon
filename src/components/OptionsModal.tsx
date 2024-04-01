import { Dispatch, SetStateAction } from "react";
import { View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

import SelectDropdown from "./SelectDropdown";

import { useGetCategories } from "../hooks/categories/useGetCategories";
import { useGetDfficulties } from "../hooks/difficulties/useGetDfficulties";
import { QuizOptionsContext } from "../contexts/QuizOptionsContext";

type OptionsModalType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const OptionsModal = ({ isModalOpen, setIsModalOpen }: OptionsModalType) => {
  const { setCategory, setDifficulty } = QuizOptionsContext();

  const { data: categories, isLoading } = useGetCategories();
  const difficulties = useGetDfficulties();

  return (
    <View>
      <Modal isVisible={isModalOpen}>
        <View className="p-5 w-[70%] mx-auto bg-white rounded-lg gap-y-3">
          {!isLoading ? (
            <View className="w-full justify-between p-2 items-start flex-col">
              <SelectDropdown
                data={categories ?? []}
                label="Categories"
                handleChange={setCategory}
              />
              <SelectDropdown
                data={difficulties}
                label="Difficulties"
                handleChange={setDifficulty}
              />
            </View>
          ) : (
            <Text>Loading...</Text>
          )}

          <Pressable
            className="p-3 w-full bg-[#f8c367] flex-row items-center justify-around rounded-xl"
            onPress={() => setIsModalOpen(false)}
          >
            <Text className="text-white text-xl font-bold">Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default OptionsModal;
