import { StyleSheet } from "react-native";
import InfoCard from "../components/info-card";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import ItemCard from "../components/item-card";
import { Item, SQLselect } from "../sqlite";
import { useEffect, useState } from "react";

export default function Index() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data: Item[] = await SQLselect();
        setItems(data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    loadItems();
  }, []);

  return (
    <GestureHandlerRootView style={[{ padding: 10, flex: 1 }]}>
      <InfoCard></InfoCard>

      <FlatList
        style={[{ paddingHorizontal: 10 }]}
        data={items}
        renderItem={({ item }) => <ItemCard item={item}></ItemCard>}
        keyExtractor={(item) => item.id.toString()}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
