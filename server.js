const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Pusher = require("pusher");
const morgan = require("morgan");
const cors = require("cors")

const pusher = new Pusher({
  appId: "442198",
  key: "7ac61b5276042e637516",
  secret: "585bb9f0bcd0f3948c95",
  cluster: "mt1",
  encrypted: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'))
app.use(cors({origin: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.use('/static', express.static('./build'))
app.use('/static', express.static('./build/static'))

app.post("/message/send", (req, res) => {
  pusher.trigger("private-reactchat", "messages", {
    message: req.body.message,
    username: req.body.username
  });
  res.sendStatus(200);
});

app.post("/pusher/auth", (req, res) => {
  console.log("POST to /pusher/auth");
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
