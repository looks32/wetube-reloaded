import mongoose from "mongoose";

mongoose.connect("mongodb+srv://looks32:pYoCJQwBumcTp6mJ@wetube.rppp1.mongodb.net/wetube?retryWrites=true&w=majority&appName=wetube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);