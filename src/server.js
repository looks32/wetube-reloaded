import express from "express";

const PORT = 4000;
const app = express();

// const handleHome = () => console.log('누군가 home에 왔다.')
const handleHome = (req, res) => {
	// console.log(req);
	// console.log(res);
	return res.send('I still love you');
}

const handleLogin = (req, res) => {
	return res.send('Login here');
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Go to http://localhost:${PORT}`);
app.listen(PORT, handleListening);