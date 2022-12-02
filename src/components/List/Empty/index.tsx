import { View } from "react-native";
import { listEmptyStyles } from "./styles";

export type ListEmptyProps = {};

export function ListEmpty({ }: ListEmptyProps) {
  return (
    <View style={listEmptyStyles.container}>
    </View>
  );
}