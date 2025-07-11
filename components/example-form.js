"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";


// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Using Formspree to send the email
      const response = await fetch("https://formspree.io/f/mvoeqyov", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.description,
          _replyto: "someone@example.com",
          _subject: "New Contact Form Submission",
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-right",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto p-6  rounded-lg shadow-md mt-5">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Your message here..."
            rows={4}
            className={`w-full px-3 py-2 border rounded-md ${
              form.formState.errors.description
                ? "border-red-500"
                : "border-gray-300"
            }`}
            {...form.register("description")}></textarea>
          {form.formState.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-400 dark:hover:bg-gray-400"
          }`}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
}
