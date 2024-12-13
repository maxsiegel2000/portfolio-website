"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy, ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const payload = {
      access_key: "438a19f9-88c8-4203-a0d0-0a0d935fd310",
      ...values,
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Message sent!",
          {
            style: {
              borderRadius: '10px',
              background: '#0f172a',
              color: '#fff',
              border: "1px solid white"
            }, 
          }
        )
        form.reset();
      } else {
        throw new Error("Failed to send the message");
      }
    } catch (error) {
      toast.error("Submission failed",
        {
          style: {
            borderRadius: '10px',
            background: '#0f172a',
            color: '#fff',
            border: "1px solid white"
          }
        })
    } finally {
      setIsSubmitting(false);
    }
  }

  const copyEmail = () => {
    const email = "siegelmax026@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Email copied!",
          {
            style: {
              borderRadius: '10px',
              background: '#0f172a',
              color: '#fff',
              border: "1px solid white"
            }, 
          })
      })
      .catch(() => {
        toast.error("Copy failed",
          {
            style: {
              borderRadius: '10px',
              background: '#0f172a',
              color: '#fff',
              border: "1px solid white"
            }
          })
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-slate-900">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-900">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="border-slate-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-900">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  {...field}
                  className="border-slate-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-900">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  {...field}
                  className="border-slate-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white hover:bg-slate-700"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            type="button"
            onClick={copyEmail}
            className="w-full bg-slate-900 text-white hover:bg-slate-700"
          >
            Copy Email
            <Copy className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </Form>
  );
}