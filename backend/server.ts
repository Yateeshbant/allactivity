import activity from "./model/activity"
import express from "express"
import cors from "cors"
import path from "path"
import envconfig from "./envconfig"
const app = express()

var corsOptions = {
    origin: envconfig._DOMAIN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const staticfiles = path.join(__dirname, 'client');
app.use(express.static(staticfiles))

app.get("/api/allactivity", async (req, res) => {
    try {
        const r = await activity.findMany()
        return res.send(r)
    }
    catch {
        return res.send({ response: "failed", result: "" })
    }
})



app.post("/api/delete", async (req, res) => {
    try {
        const r = await activity.deleteById(req.body.id)
        return res.send(r)
    }
    catch {
        return res.send({ response: "failed", result: "" })
    }
})


app.post("/api/create", async (req, res) => {
    try {
        const r = await activity.createOne(req.body.startdate, req.body.enddate, req.body.description)
        return res.send(r)
    }
    catch {
        return res.send({ response: "failed", result: "" })
    }
})

app.post("/api/update", async (req, res) => {
    try {
        const r = await activity.updateOneById(req.body.startdate, req.body.enddate, req.body.description, req.body.id)
        return res.send(r)
    }
    catch {
        return res.send({ response: "failed", result: "" })
    }
})


app.get("/api/activitybyid", async (req, res) => {
    try {
        const r = await activity.findOneById(Number(req.query.id))
        return res.send(r)
    }
    catch {
        return res.send({ response: "failed", result: "" })
    }
})
var client = path.join(__dirname, 'client');

app.get('*', function (req, res) {
    res.sendFile(path.join(client, 'index.html'));
});


app.listen(envconfig._PORT, () => console.log("started"))