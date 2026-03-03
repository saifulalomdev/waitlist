import { defineAction } from "astro:actions";
import { drizzle } from 'drizzle-orm/d1';
import { subscribers, subscriberSchema } from "@/db/schema";

export const server = {
    subscribe: defineAction({
        input: subscriberSchema as any,

        handler: async (input, context) => {
            const runtime = context.locals.runtime;
            if (!runtime) throw new Error("Cloudflare runtime not found");

            const db = drizzle(runtime.env.DB);

            const result = await db.insert(subscribers).values({
                email: input.email,
            }).returning();

            return { success: true, data: result[0] };
        },
    }),
};