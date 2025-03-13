import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import "dotenv/config"; // Ensure environment variables are loaded
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    secret: process.env.PAYLOAD_SECRET || 'your-secure-secret-key', // 🔥 Add this line
    collections: [],
    routes: {
        admin: '/sell'
    },
    admin: {
        user: 'admins',
        meta: {
            titleSuffix: "- DigiPanda",
            favicon:'/favicon.ico',
           
        }
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname,"payload.types.ts")
    }
});
