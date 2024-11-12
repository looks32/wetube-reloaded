import express from "express";

const PORT = 4000;
const app = express();

const handleHome = () => console.log('누군가 home에 왔다.')

app.get("/", handleHome);

const handleListening = () => console.log(`Go to http://localhost:${PORT}`);
app.listen(PORT, handleListening)