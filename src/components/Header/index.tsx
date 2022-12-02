import { View } from "react-native";
import { headerStyles } from "./styles";

export type HeaderProps = {};

export function Header({ }: HeaderProps) {
  return (
    <View style={headerStyles.container}>
    </View>
  );
}