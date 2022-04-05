const curry = require('lodash/curry')

const log = curry(recordLog)

log(new Date(), "DEBUG", "some debug")
log(new Date())("DEBUG")("some debug")

// logNow 会是带有固定第一个参数的日志的偏函数
let logNow = log(new Date());

// 使用它
logNow("INFO", "message"); // [HH:mm] INFO message

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message

function recordLog(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] [${importance}] ${message}`);
}

