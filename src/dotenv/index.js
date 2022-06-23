const fs = require('fs');
const path = require('path');
const os = require('os');

// 可由用户自定义路径
// 可由用户自定义解析编码规则
// 添加 debug 模式
// 完善报错输出，用户写的 env 文件自由度比较大，所以需要容错机制。

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

function config(options) {
  options || (options = {});
  
  let filename = options.path ? resolveHome(path) : path.resolve(process.cwd(), '.env');
  let encoding = options.encoding || 'utf-8';
  // debug 模式，输出提示信息
  let debug = !!options.debug || false;

  try {
    const contents = fs.readFileSync(filename, { encoding }, { debug });
    const result = parse(contents);
    const keys = Reflect.ownKeys(result)
    
    // 将键值对赋值到 process.env 但是忽略已经存在的键
    for (let key of keys) {
      if (!Reflect.has(process.env, key)) {
        process.env[key] = result[key];
      } else if (debug) {
        console.error(`"${key}" is already defined in \`process.env\` and will not be overwritten`);
      }
    }

    return result;
  } catch (error) {
    return { error };
  }
}

function resolveHome(envPath) {
  envPath[0] === '~' ? path.resolve(os.homedir(), envPath.slice(1)) : envPath;
}

console.log(config({ debug: true }))
console.log(process.env)

module.exports.config = config;
module.exports.parse = parse;
