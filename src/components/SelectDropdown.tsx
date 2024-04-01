import { Dispatch, SetStateAction, useState, memo, useEffect } from "react";
import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import { OptionType } from "../contexts/QuizOptionsContext";

type DropdownType = {
  data: any[];
  label: string;
  handleChange: Dispatch<SetStateAction<OptionType>>;
};

const Dropdown = ({ data, label, handleChange }: DropdownType) => {
  const [value, setValue] = useState<OptionType>(data[0]);

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        setValue(selectedItem);
        handleChange(selectedItem);
      }}
      renderButton={(selectedItem, isOpened) => (
        <View>
          <Text className="text-[#f8c367] text-lg font-bold mb-4">
            {label + ": " + value?.name}
          </Text>
        </View>
      )}
      renderItem={(item, index) => (
        <View>
          <Text className="text-white text-lg font-bold p-2 bg-[#f8c367] m-3">
            {item?.name}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default memo(Dropdown);
