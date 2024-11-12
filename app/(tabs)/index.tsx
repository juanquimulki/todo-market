import { View, StyleSheet } from "react-native";
import { colors } from "../theme";
import TextBox from "../components/text-box";

export default function Index() {
  return (
    <View style={styles.container}>
      <TextBox label={'Artículo'}></TextBox>
      <TextBox label={'Detalles'}></TextBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    gap: 20
  },
});
