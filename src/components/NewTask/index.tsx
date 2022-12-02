import { View } from "react-native";
import { newTaskStyles } from "./styles";

export type NewTaskProps = {};

export function NewTask({ }: NewTaskProps) {
  return (
    <View style={newTaskStyles.container}>
    </View>
  );
}