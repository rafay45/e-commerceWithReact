export default function Contact() {
  return (
      <section className="bg-gray-100 py-16 px-4" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact <span className="text-pink-600">Us</span></h2>
            <p className="text-gray-600 mb-6">
              Have a question, concern, or just want to say hello? We're here to help! Fill out the form or reach us directly using the info below.
            </p>

            <div className="space-y-4 text-gray-700 text-sm">
              <p><strong>📍 Address:</strong> Husna HQ, Main Boulevard, Karachi, Pakistan</p>
              <p><strong>📞 Phone:</strong> +92 300 1234567</p>
              <p><strong>📧 Email:</strong> support@husna.com</p>
              <p><strong>🕒 Hours:</strong> Mon - Sat: 9:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-md space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Your Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 hover:bg-transparent hover:text-pink-600 hover:border-2 hover:py-1.5 hover:px-5.5 cursor-pointer text-white py-2 px-6 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
  );
}
