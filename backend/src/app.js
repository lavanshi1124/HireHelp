const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


const authRouter = require("./routes/auth_routes");
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter)

app.use((error, req, res, next) => {
    if (error.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "Resume must be 3MB or smaller." })
    }

    if (error.message === "Only PDF resume files are supported.") {
        return res.status(400).json({ message: error.message })
    }

    next(error)
})


module.exports = app;