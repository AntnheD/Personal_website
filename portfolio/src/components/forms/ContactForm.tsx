const ContactForm = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#1b1e27] px-4 py-3 rounded-lg text-white"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
