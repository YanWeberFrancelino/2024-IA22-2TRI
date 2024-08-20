import express from 'express'
import cors from 'cors'
import { connect } from './database'

const port = 3333
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/../public'))

app.get('/users', async (req, res) => {
  console.log('GET /users request received');
  const db = await connect()
  const users = await db.all('SELECT * FROM users')
  console.log('Users fetched:', users);
  res.json(users)
})

app.post('/users', async (req, res) => {
  console.log('POST /users request received:', req.body);
  const db = await connect()
  const { name, email } = req.body
  const result = await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email])
  console.log('User inserted with ID:', result.lastID);
  const user = await db.get('SELECT * FROM users WHERE id = ?', [result.lastID])
  console.log('New user fetched:', user);
  res.json(user)
})

app.put('/users/:id', async (req, res) => {
  console.log('PUT /users/:id request received:', req.body, req.params.id);
  const db = await connect()
  const { name, email } = req.body
  const { id } = req.params
  await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id])

  const user = await db.get('SELECT * FROM users WHERE id = ?', [id])

  if (user) {
    console.log('Updated user fetched:', user);
    res.json(user)
  } else {
    console.log('User not found after update:', id);
    res.status(404).json({ message: 'User not found' })
  }
})


app.delete('/users/:id', async (req, res) => {
  console.log('DELETE /users/:id request received:', req.params.id);
  const db = await connect()
  const { id } = req.params
  await db.run('DELETE FROM users WHERE id = ?', [id])
  console.log('User deleted with ID:', id);
  res.json({ message: 'User deleted' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
