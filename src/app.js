const express = require("express")
const morgan = require("morgan")
const json = require("morgan-json")

const testRouter = require("./routes/test")
const probesRouter = require("./routes/probes")

const app = express()

const format = json({
  method: ":method",
  url: ":url",
  statusCode: ":status",
  length: ":res[content-length]",
  "response-time": ":response-time ms",
})

app.use(morgan(format))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/test", testRouter)
app.use("/probes", probesRouter)

module.exports = app
