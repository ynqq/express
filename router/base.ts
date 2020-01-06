import express from "express"

const router = express.Router()

router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Headers","Content-Type");
    res.header("Content-Type", "application/json");
    next()
})

export {
    router  
}