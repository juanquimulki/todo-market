import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
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
      <View style={[{ flexDirection: "row", gap: 20 }]}>
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
      <View style={[{ alignItems: "center", marginTop: 20 }]}>
        <Text style={[{ fontSize: fontSizes.large }]}>Total</Text>
        <Text style={[{ fontSize: fontSizes.xlarge, fontWeight: "bold" }]}>
          $ {totalValue || "0.00"}
        </Text>
      </View>
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
});
