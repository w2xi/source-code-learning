# dotenv

读取 <code>.env</code> 文件并解析其中的键值对，并赋值到 <code>process.env</code>

## 解析步骤

1. 读取 .env 文件
2. 解析 .env 文件拆成键值对的对象形式
3. 赋值到 process.env 上

## 待优化

- [x] 去除键值对前后的空格
- [x] 忽略空行
- [x] 忽略以 '#' 开头的注释