import { StyleSheet } from "react-native";
import InfoCard from "../components/info-card";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import ItemCard from "../components/item-card";

export default function Index() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58695a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58623a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58612a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <GestureHandlerRootView style={[{ padding: 10 }]}>
      <InfoCard></InfoCard>

      <FlatList
        style={[{ paddingHorizontal: 10 }]}
        data={DATA}
        renderItem={({ item }) => <ItemCard></ItemCard>}
        keyExtractor={(item) => item.id}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
