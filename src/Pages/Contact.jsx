import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-slate-100 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">
          Contact Us
        </h2>

        <p className="text-lg text-center max-w-2xl mx-auto text-slate-700 mb-12">
          We’d love to hear from you! Whether you have questions, feedback, or
          need help with our pet care services, feel free to reach out anytime.
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>
                <strong>📍 Address:</strong> 45 Green Avenue, Dhaka, Bangladesh
              </li>
              <li>
                <strong>📞 Phone:</strong> +880 1810232106
              </li>
              <li>
                <strong>✉️ Email:</strong> aniksarker@gmail.com
              </li>
              <li>
                <strong>🕒 Hours:</strong> Mon - Sat | 9:00 AM - 8:00 PM
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Follow Us
              </h4>
              <div className="flex space-x-4 text-xl">
                <a
                  // href="https://facebook.com/petcarebd"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  // href="https://instagram.com/petcarebd"
                  target="_blank"
                  className="hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
                <a
                  // href="https://twitter.com/petcarebd"
                  target="_blank"
                  className="hover:text-sky-400"
                >
                  <FaTwitter />
                </a>
                <a
                  // href="https://youtube.com/@petcarebd"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Send Us a Message
            </h3>

            <form className="space-y-5  ">
              <div>
                <label className="font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full mt-1 bg-white"
                />
              </div>

              <div>
                <label className="font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full mt-1 bg-white"
                />
              </div>

              <div>
                <label className="font-medium">Your Message</label>
                <textarea
                  className="textarea textarea-bordered w-full mt-1 h-28 bg-white"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">
            Find Us on Map
          </h3>
          <div className="w-full h-72 bg-slate-300 rounded-xl shadow">
            <iframe
              title="map"
              className="w-full h-full rounded-xl"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9021798274657!2d90.391548!3d23.750915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5000000001%3A0xaeff123456789!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
