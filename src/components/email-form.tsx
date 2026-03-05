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
    
    // Astro actions return an object with { data, error }
    const { data, error } = await actions.subscribe(values);
    
    setIsPending(false);

    if (error) {
      // Handle server-side validation or runtime errors
      alert(`Error: ${error.message}`);
      return;
    }

    if (data?.success) {
      // Use the message we defined in the backend for the alert
      alert(data.message || "Welcome to the waitlist!");
      
      // Only reset the form if it was a brand new subscription
      if (data.newSubscriber) {
        form.reset();
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-3 max-w-sm w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="name@domain.com" 
                  disabled={isPending}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="" disabled={isPending}>
          {isPending ? "joining..." : "Join now"}
        </Button>
      </form>
    </Form>
  )
}