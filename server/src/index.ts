import app from "./app";
import { config } from "dotenv";
config();

const PORT = process.env.SERVER_PORT ?? 4000;

app.listen(PORT, () => {

});