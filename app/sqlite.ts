import * as SQLite from "expo-sqlite";

export interface Item {
  id: number;
  name: string;
  price: number;
}

const createDb = async () => {
  const db = await SQLite.openDatabaseAsync("myDb");

  await db.execAsync(`
        PRAGMA journal_mode = WAL;
        
        CREATE TABLE IF NOT EXISTS articles (
          id INTEGER PRIMARY KEY NOT NULL, 
          name TEXT NOT NULL,
          details TEXT NULL,
          qty REAL NOT NULL,
          price REAL NOT NULL,
          total REAL NOT NULL
        );`);
};

export const SQLsave = async (
  name: String,
  details: String,
  qty?: Number,
  price?: Number,
  total?: Number
): Promise<void> => {
  createDb();

  const db = await SQLite.openDatabaseAsync("myDb");

  const statement = await db.prepareAsync(
    "INSERT INTO articles (name, details, qty, price, total) VALUES ($name, $details, $qty, $price, $total)"
  );
  try {
    await statement.executeAsync({
      $name: (name ?? "").toString(),
      $details: (details ?? "").toString(),
      $qty: (qty ?? 0).toFixed(2),
      $price: (price ?? 0).toFixed(2),
      $total: (total ?? 0).toFixed(2),
    });
  } finally {
    await statement.finalizeAsync();
  }
};

export const SQLselect = async (): Promise<Item[]> => {
  createDb();

  const db = await SQLite.openDatabaseAsync("myDb");

  try {
    const results = await db.getAllAsync<Item>("SELECT * FROM articles");
    return results;
  } catch {
    return [];
  }
};
