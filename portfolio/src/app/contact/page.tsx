'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to email API (e.g., EmailJS, Nodemailer)
    console.log('Form submitted:', form);
    alert('Message sent!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out,
        and I&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
