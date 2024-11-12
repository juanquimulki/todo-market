import { Text, TextInput, View, StyleSheet } from "react-native";
import { fontSizes, colors } from "../theme";

export default function TextBox(props: { label: String }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.text}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    fontSize: fontSizes.small,
    fontWeight: 500,
    color: colors.textMedium,
    marginBottom: 3,
  },
  text: {
    borderColor: colors.accent,
    borderWidth: 3,
    width: "100%",
    height: 50,
    backgroundColor: colors.textLight,
    fontSize: fontSizes.normal,
    paddingLeft: 15,
    borderRadius: 5,
  },
});
