import express from "express";
import { startDatabase } from "./database";
import usersRoutes from "./routers/users.routers";

const app = express()

app.use(express.json());
app.use("/", usersRoutes)

app.listen(3000, () => {
    startDatabase();
});

