'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        alert('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('error');
      alert('An unexpected error occurred.');
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        I am always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out,
        and I&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1c1e24] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
