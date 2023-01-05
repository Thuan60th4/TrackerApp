import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, color, name, size }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && { opacity: 0.7 },
        { marginRight: 15 },
      ]}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;
