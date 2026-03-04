// src/components/MyForm.tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { subscriberSchema, type Subscriber } from "@/db/schema";
import { actions } from "astro:actions"
import { useState } from "react"

export function EmailForm() {
  const [isPending, setIsPending] = useState(false);
  const form = useForm<Subscriber>({
    resolver: zodResolver(subscriberSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: Subscriber) {
    setIsPending(true);
    const {data, error } = await actions.subscribe(values);
    setIsPending(false);
    console.log(data?.success , error)

    if (data?.success) {
      // form.setError("email", { message: error.message });
    } else {
      alert("Welcome to the waitlist!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jon@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </Form>
  )
}