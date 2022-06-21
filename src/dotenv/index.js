const fs = require('fs');
const path = require('path');

function parse(src) {
  const obj = {};
  const arr = src.toString().split('\n');
  
  for (let line of arr) {
    // 忽略空行，忽略注释, 忽略没有 '=' 的行
    if (!line || line.startsWith('#') || !line.includes('=')) {
      continue;
    }
    const [key, val] = line.split('=');
    // 去掉键值对首尾空格
    obj[key.trim()] = val.trim();
  }

  return obj;
}

function config() {
  const filename = path.resolve(__dirname, '.env');
  const contents = fs.readFileSync(filename, 'utf-8');
  const result = parse(contents);
  const keys = Reflect.ownKeys(result);

  console.log(result);

  for (let key of keys) {
    if (!Reflect.has(process.env, key)) {
      process.env[key] = result[key];
    }
  }
}

config();