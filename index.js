import "dotenv/config";
import db from "./src/database/database.js";
import app from "./src/app.js";

let PORT = /* process.env.PORT || */ 3000;

const main = async () => {
  try {
    await db.connect();
    console.log("Conectado a base de datos");
    app.listen(PORT, () => {
      console.log("Servidor escuchando en puerto: " + PORT);
    });
  } catch (error) {
    console.log("Error al conectarse a la base de datos", error);
  }
};

main();