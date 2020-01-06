export class tool {

    public static getIp():any{
        return new Promise(async (resolve, reject) => {

            let ipList:any[] = []
            let res = await import('os')
            let intefaces = res.networkInterfaces()
            for (let i in intefaces) {
                intefaces[i].map((v) => {
                    if (v.family === 'IPv4' && !v.internal) {
                        ipList.push(v)
                    }
                })
            }
            resolve(ipList)
        })
    }

}
