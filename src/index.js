import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ user: {
        name: 'Huan',
        age: 12
    }})
})

app.listen(5000, () => {
    console.log('Port run: 5000')
})