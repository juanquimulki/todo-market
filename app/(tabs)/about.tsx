import { Text, View, StyleSheet } from "react-native";
import { colors } from "../theme";

// export default function AboutScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>JMMA</Text>
//       <Text style={styles.text}>(c)2004</Text>
//       </View>
//   );
// }

import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("myDb");

export default function App() {
    useDrizzleStudio(db);

    return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.textDark,
  },
});
