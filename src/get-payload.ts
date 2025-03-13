import dotenv from 'dotenv';
import path from 'path';
import type { InitOptions } from 'payload';

// Load environment variables
dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

let payload: any; // Explicitly type as 'any' or the correct type from Payload
(async () => {
    try {
        payload = await import('payload');  // Dynamically import payload
    } catch (error) {
        console.error('Failed to import payload:', error);
    }
})();

let cached = (global as any).payload;

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    };
}

interface Args {
    initOptions?: Partial<InitOptions>;
}

// The actual function to get the Payload client
export const getPayloadClient = async ({ initOptions }: Args = {}) => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is missing');
    }

    if (cached.client) {
        return cached.client;  // Return the existing client if it exists
    }

    // If no existing promise, initialize it
    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions ? false : true,
            ...initOptions,  // Corrected spread here
        });
    }

    try {
        cached.client = await cached.promise;  // Wait for the payload client
        return cached.client;
    } catch (e: unknown) {
        cached.promise = null;
        throw e;  // Re-throw the error if the initialization fails
    }
};
