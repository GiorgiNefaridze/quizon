import { Dispatch, SetStateAction, useState, memo } from "react";
import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type DropdownType = {
  data: any[];
  label: string;
  handleChange: Dispatch<SetStateAction<string>>;
};

const Dropdown = ({ data, label, handleChange }: DropdownType) => {
  const [value, setValue] = useState<string>(data[0]?.name ?? "");

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        const value = selectedItem?.name;
        setValue(value);
        handleChange(value);
      }}
      renderButton={(selectedItem, isOpened) => (
        <View>
          <Text>{label + ": " + value || ""}</Text>
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
