const bunyan = require("bunyan")
const config = require("config")

const logLevel = config.get("server.logLevel")
const logSrc = config.get("server.logSrc")

const logger = (name) => {
  const log = bunyan.createLogger({ name, level: logLevel, src: logSrc })
  return log
}

module.exports = logger
