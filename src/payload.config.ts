import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { Users } from "./collections/Users";
import dotenv from "dotenv";

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users],
    routes: {
        admin: '/sell'
    },
    admin: {
        user:"users",
        bundler:webpackBundler(),
        meta: {
            titleSuffix: "- DigiPanda",
            favicon:'/favicon.ico',
            ogImage:"/cute-panda.png"
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url:process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile:path.resolve(__dirname,"payload-types.ts"),
    }
})
