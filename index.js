import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'

let port = process.env.PORT || 2004

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use(cors())

app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: 'http://localhost:8083',
    credentials: true
}))

app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(port, () => {
    console.log('http://localhost:' +port)
})



