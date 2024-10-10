import CustomButton from "@/components/CustomButton";
import { View, Text } from "react-native";

const OAuth = () => (
  <View>
    <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
      <View className="flex-1 h-[1px] bg-general-100" />
      <Text>Or</Text>
      <View className="flex-1 h-[1px] bg-general-100" />
    </View>

    <CustomButton title="Log In with Google" />
  </View>
);

export default OAuth;
