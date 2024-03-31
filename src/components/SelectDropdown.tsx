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
          <Text>{label + ": " + value?.name || ""}</Text>
        </View>
      )}
      renderItem={(item, index) => (
        <View>
          <Text>{item?.name}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default memo(Dropdown);
