import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const PORT = 4000;
const http = http.Server(app);

app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
