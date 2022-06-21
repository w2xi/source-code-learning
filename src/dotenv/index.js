const fs = require('fs');
const path = require('path');

function parse(src) {
  const obj = {};
  console.log(src.toString().split('\n'))
  console.log(src.toString().split('\n')[1] === '')
  src.toString().split('\n').forEach(line => {
    const [key, val] = line.split('=');
    obj[key.trim()] = val.trim();
  });
  return obj;
}

// 1. 读取 .env 文件
// 2. 解析 .env 文件拆成键值对的对象形式
// 3. 赋值到 process.env 上
// 4. 最后返回解析后得到的对象

function config() {
  const filename = path.resolve(__dirname, '.env');
  const contents = fs.readFileSync(filename, 'utf-8');
  const result = parse(contents);
  const keys = Reflect.ownKeys(result);

  for (let key of keys) {
    if (!Reflect.has(process.env, key)) {
      process.env[key] = result[key];
    }
  }
}

config();