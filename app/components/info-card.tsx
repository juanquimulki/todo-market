import { Text, View, StyleSheet } from "react-native";
import { fontSizes, colors } from "../theme";

export default function TextBox() {
  return (
    <View>
      <View
        style={[
          {
            flexDirection: "column",
            backgroundColor: colors.secondary,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        ]}
      >
        <View
          style={[
            {
              position: "absolute",
              top: 20,
              right: 20,
              backgroundColor: colors.textLight,
              width: 44,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              padding: 0,
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            },
          ]}
        >
          <Text
            style={[
              {
                color: colors.secondary,
                fontSize: fontSizes.xlarge,
                textAlign: "center",
                marginTop: -3,
                marginLeft: 2,
              },
            ]}
          >
            +
          </Text>
        </View>
        <Text style={[{ color: colors.textLight, fontSize: fontSizes.small }]}>
          Presupuesto: $9999.99
        </Text>
        <Text
          style={[
            {
              color: colors.textLight,
              fontSize: fontSizes.large,
              marginTop: 20,
            },
          ]}
        >
          Total:
        </Text>
        <Text
          style={[
            {
              color: colors.textLight,
              fontSize: fontSizes.xlarge,
              fontWeight: "bold",
            },
          ]}
        >
          $9999.99
        </Text>
      </View>
      <View
        style={[
          {
            backgroundColor: colors.secondaryDark,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
            height: 55,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        ]}
      >
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text
            style={[{ color: colors.textLight, fontSize: fontSizes.xsmall }]}
          >
            0%
          </Text>
          <Text
            style={[{ color: colors.textLight, fontSize: fontSizes.xsmall }]}
          >
            #Items 9999
          </Text>
          <Text
            style={[{ color: colors.textLight, fontSize: fontSizes.xsmall }]}
          >
            100%
          </Text>
        </View>

        <View>
          <View
            style={[
              {
                height: 1,
                backgroundColor: colors.textLight,
                marginTop: 7,
                width: "100%",
              },
            ]}
          ></View>
          <View
            style={[
              {
                height: 5,
                backgroundColor: colors.textLight,
                marginTop: -3,
                width: "75%",
              },
            ]}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
