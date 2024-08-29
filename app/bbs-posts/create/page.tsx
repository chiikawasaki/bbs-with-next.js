"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateBBSPage = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: "ユーザー名は2文字以上で入力してください。" }),
    title: z
      .string()
      .min(2, { message: "タイトルは2文字以上で入力してください。" }),
    content: z
      .string()
      .min(10, { message: "本文は10文字以上で入力してください。" })
      .max(140, { message: "本文は140字以内で入力してください" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  });

  async function onSubmit() {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateBBSPage;
