import { defineAction } from "astro:actions";
import { drizzle } from 'drizzle-orm/d1';
import { subscribers, subscriberSchema } from "@/db/schema";
import { count } from "drizzle-orm";

export const server = {
    subscribe: defineAction({
        
        input: subscriberSchema as any,

        handler: async (input, context) => {
            try {
                const runtime = context.locals.runtime;
                if (!runtime) throw new Error("Cloudflare runtime not found");

                const db = drizzle(runtime.env.DB);

                await db.insert(subscribers).values({
                    email: input.email,
                }).returning();

                const totalEmails = await db
                    .select({ value: count() })
                    .from(subscribers);

                return { success: true, data: { totalSubscribers: totalEmails[0].value } };
            } catch (err) {
                return { success: false, error: (err as any).message };
            }
        },
    }),
};