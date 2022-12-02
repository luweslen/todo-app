import { View } from "react-native";
import { listItemStyles } from "./styles";

export type ListItemProps = {};

export function ListItem({ }: ListItemProps) {
  return (
    <View style={listItemStyles.container}>
    </View>
  );
}