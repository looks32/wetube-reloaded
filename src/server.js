import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("");

// const logger = (req, res, next) => {
// 	console.log(`${req.method} ${req.url}`);
// 	next();
// }

// const privateMiddleware = (req, res, next) => {
// 	const url = req.url;
// 	if (url === "/protected"){
// 		return res.send("<h1>NOT ALLOWED</h1>")
// 	}
// 	console.log('통과');
// 	next();
// }

// const handleHome = () => console.log('누군가 home에 왔다.')
const handleHome = (req, res) => {
	// console.log(req);
	// console.log(res);
	return res.send('I still love you');
}

const handleLogin = (req, res) => {
	return res.send('Login here');
}

// const handleProtected = (req, res) => {
// 	return res.send('welcome to the private lounge.')
// }

// app.use(logger);
// app.use(privateMiddleware);
app.use(logger);

// app.get("/", logger, handleHome);
app.get("/", handleHome);
app.get("/login", handleLogin);
// app.get("/protected", handleProtected);

const handleListening = () => console.log(`Go to http://localhost:${PORT}`);
app.listen(PORT, handleListening);