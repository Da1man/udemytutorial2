import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase('post.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXIST posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}
