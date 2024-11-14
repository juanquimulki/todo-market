import { Text, TextInput, View, StyleSheet } from "react-native";
import { fontSizes, colors } from "../theme";

export default function TextBox(props: {
  label: String;
  keyboardType: any;
  textChange?: Function;
}) {
  function textChange(val: any) {
    if (props.textChange) props.textChange(val);
  }

  return (
    <View
      style={[
        {
          alignItems: "flex-start",
          width: "100%",
        },
      ]}
    >
      <Text
        style={[
          {
            fontSize: fontSizes.small,
            fontWeight: "500",
            color: colors.textMedium,
            marginBottom: 3,
          },
        ]}
      >
        {props.label}
      </Text>
      <TextInput
        style={[
          {
            borderColor: colors.accent,
            borderWidth: 3,
            width: "100%",
            height: 50,
            backgroundColor: colors.textLight,
            fontSize: fontSizes.normal,
            paddingLeft: 15,
            borderRadius: 5,
          },
        ]}
        keyboardType={props.keyboardType}
        returnKeyType="done"
        onChangeText={(val) => textChange(val)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({});
