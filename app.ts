import express from "express"
import router from "./router/index"
import { tool } from "./public/util"


async function start(){
    const port = 3030
    const app = express()
    const ip = await tool.getIp()
    app.use('/demo', router)
    
    app.listen(port, () => {
        console.log(`run in http://localhost:${port}`)
        ip.map((v:any) => {
            console.log(`run in http://${v.address}:${port}`)
        })
    })
}

start()