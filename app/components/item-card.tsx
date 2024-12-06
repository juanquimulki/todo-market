import { Text, View, StyleSheet } from "react-native";
import { fontSizes, colors } from "../theme";
import { Item } from "../sqlite";

export default function ItemCard(props: { item: Item }) {
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
        {props.item.name}
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
        {props.item.details}
      </Text>
      <Text style={[{ fontSize: fontSizes.small, marginTop: 10 }]}>
        Cantidad: <Text style={[{ fontWeight: "500" }]}>{props.item.qty}</Text>
      </Text>
      <Text style={[{ fontSize: fontSizes.small, marginTop: 2 }]}>
        Precio Unitario:{" "}
        <Text style={[{ fontWeight: "500" }]}>
          ${props.item.price.toFixed(2)}
        </Text>
      </Text>
      <Text
        style={[
          {
            position: "absolute",
            bottom: 10,
            right: 10,
            fontSize: fontSizes.large,
            fontWeight: "bold",
            color: colors.primary,
          },
        ]}
      >
        ${props.item.total.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
