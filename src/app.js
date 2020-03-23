const express = require('express')
const {
  getAccount,
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount
} = require('./controller')

const app = express()
app.locals.dataFilePath = "./data.json"

const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('<h1>Hi, Welcome!</h1>'))

// 返回所有任务
app.get("/api/tasks", getAllAccounts)
// 创建一个新的任务
app.post("/api/tasks", createAccount)
//返回一个指定id的任务
app.get("/api/tasks/:id", getAccount)
//删除一个任务
app.delete("/api/tasks/:id", deleteAccount)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports.app = app
