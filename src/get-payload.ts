
import dotenv from "dotenv"
import path from "path"
import payload, { Payload } from "payload"
import type { InitOptions } from "payload/config"

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if(!cached) {
    cached = (global as any).payload = {
        client:null,
        promise:null,
    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}
//@ts-ignore
export const getPayloadClient = async ({initOptions,}: Args = {}): Promise<Payload> => {
if(!process.env.PAYLOAD_SECRET) {
    throw new Error(`PAYLOAD_SECRET is missing `)
}


if(cached.client) {
    return cached.client
}

if(!cached.client) {
    cached.promise = payload.init({
        secret: process.env.PAYLOAD_SECRET,
        local: initOptions?.express ? false : true,
        ...(initOptions || {}),
    })
}

try {
   cached.client = await cached.promise 
} catch (e: unknown) {
    cached.promise = null
    throw e
}
return cached.client
}