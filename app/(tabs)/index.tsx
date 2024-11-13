import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  Pressable,
} from "react-native";
import { colors, fontSizes } from "../theme";
import TextBox from "../components/text-box";
import { useState } from "react";

export default function Index() {
  const [totalValue, setTotalValue] = useState<String>();
  const [textQtyValue, setTextQtyValue] = useState<String>();
  const [textPriceValue, setTextPriceValue] = useState<String>();

  function textChangeQty(val: String) {
    setTextQtyValue(val);

    let value = val.toString().replace(",", ".");

    let var1 = parseFloat(value || "0");
    let var2 = parseFloat(textPriceValue?.toString() || "0");

    setTotalValue((var1 * var2).toFixed(2).toString());
  }

  function textChangePrice(val: String) {
    setTextPriceValue(val);

    let value = val.toString().replace(",", ".");

    let var1 = parseFloat(value || "0");
    let var2 = parseFloat(textQtyValue?.toString() || "0");

    setTotalValue((var1 * var2).toFixed(2).toString());
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <TextBox label={"Artículo"} keyboardType={"default"}></TextBox>
      <TextBox label={"Detalles"} keyboardType={"default"}></TextBox>
      <View style={styles.viewNumbers}>
        <View style={[{ flex: 1 }]}>
          <TextBox
            label={"Cantidad"}
            keyboardType={"numeric"}
            textChange={(val: String) => textChangeQty(val)}
          ></TextBox>
        </View>
        <View style={[{ flex: 1 }]}>
          <TextBox
            label={"Precio Unitario"}
            keyboardType={"numeric"}
            textChange={(val: String) => textChangePrice(val)}
          ></TextBox>
        </View>
      </View>
      <View style={styles.viewTotal}>
        <Text style={styles.labelTotal}>Total</Text>
        <Text style={styles.valueTotal}>$ {totalValue || "0.00"}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            position: "absolute",
            bottom: 20,
            backgroundColor: pressed ? colors.primary : colors.secondary,
            width: "100%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          },
        ]}
        onPress={() => {
          console.log("pressed");
        }}
      >
        <Text
          style={[
            {
              color: colors.textLight,
              fontWeight: "bold",
              fontSize: fontSizes.normal,
            },
          ]}
        >
          GUARDAR
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    gap: 20,
  },
  viewNumbers: { flexDirection: "row", gap: 20 },
  viewTotal: { alignItems: "center", marginTop: 20 },
  valueTotal: { fontSize: fontSizes.xlarge, fontWeight: "bold" },
  labelTotal: { fontSize: fontSizes.large },
});
