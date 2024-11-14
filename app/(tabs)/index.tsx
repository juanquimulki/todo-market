import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { colors, fontSizes } from "../theme";
import TextBox from "../components/text-box";
import { useState } from "react";

export default function Index() {
  const [totalValue, setTotalValue] = useState<Number>();
  const [textQtyValue, setTextQtyValue] = useState<Number>();
  const [textPriceValue, setTextPriceValue] = useState<Number>();

  function textChangeQty(val: String) {
    let value = val.toString().replace(",", ".");
    setTextQtyValue(parseFloat(value));

    let var1 = parseFloat(value || "0");
    let var2 = parseFloat(textPriceValue?.toString() || "0");

    setTotalValue(var1 * var2);
  }

  function textChangePrice(val: String) {
    let value = val.toString().replace(",", ".");
    setTextPriceValue(parseFloat(value));

    let var1 = parseFloat(value || "0");
    let var2 = parseFloat(textQtyValue?.toString() || "0");

    setTotalValue(var1 * var2);
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={[{ flex: 1 }]}
    >
      <ScrollView
        style={[
          {
            flex: 1,
            flexDirection: "column",
            backgroundColor: colors.background,
            padding: 30,
          },
        ]}
        contentContainerStyle={[{ alignItems: "center", flexGrow: 1 }]}
      >
        <View style={[{ width: "100%" }]}>
          <TextBox label={"Artículo"} keyboardType={"default"}></TextBox>
        </View>
        <View style={[{ marginTop: 20, width: "100%" }]}>
          <TextBox label={"Detalles"} keyboardType={"default"}></TextBox>
        </View>
        <View style={[{ flexDirection: "row", gap: 20, marginTop: 20 }]}>
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
            ${" "}
            {Number.isNaN(totalValue) || !totalValue
              ? "0.00"
              : totalValue?.toFixed(2).toString()}
          </Text>
        </View>
        <View style={[{ flex: 1 }]}></View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: colors.secondary,
              opacity: pressed ? 0.7 : 1,
              width: "100%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginTop: 20,
              shadowColor: pressed ? colors.background : '#000',
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              transform: [{scale: pressed ? 0.97 : 1}]
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
