import { Text, View, StyleSheet } from "react-native";
import { fontSizes, colors } from "../theme";

export default function ItemCard() {
  return (
    <View
      style={[
        {
          backgroundColor: colors.textLight,
          borderColor: colors.accent,
          borderWidth: 3,
          borderRadius: 7,
          padding: 10,
          marginTop: 10,
        },
      ]}
    >
      <Text
        style={[
          {
            fontSize: fontSizes.large,
            fontWeight: "bold",
            color: colors.primary,
          },
        ]}
      >
        Papel Higiénico
      </Text>
      <Text
        style={[
          {
            fontSize: fontSizes.normal,
            color: colors.textMedium,
            marginTop: -2,
          },
        ]}
      >
        Higienol de 100mts x 4
      </Text>
      <Text style={[{ fontSize: fontSizes.small, marginTop: 10 }]}>
        Cantidad: <Text style={[{ fontWeight: "500" }]}>99</Text>
      </Text>
      <Text style={[{ fontSize: fontSizes.small, marginTop: 2 }]}>
        Precio Unitario: <Text style={[{ fontWeight: "500" }]}>$999.99</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
