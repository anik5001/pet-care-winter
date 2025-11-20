import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h2>
          <p>📍 45 Green Avenue, Dhaka, Bangladesh</p>
          <p>📞 +880 1810232106</p>
          <p>✉️ aniksarker@gmail.com</p>
          <p>🕒 Mon - Sat | 9:00 AM - 8:00 PM</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
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

        {/* Privacy Policy */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Privacy Policy
          </h2>
          <p>
            © 2025 <span className="text-white font-semibold">PetCare </span>.
            All rights reserved.
          </p>
          <p className="mt-2">
            We care about your privacy. Your personal information will never be
            shared without your consent.
          </p>
          <a
            // href="#"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            Read our Privacy Policy
          </a>
        </div>
      </div>

      <div
        className="border-t border-gray-700 mt-8 pt-4 text-center text-sm
       text-gray-200"
      >
        Made with ❤️ by PetCare Anik
      </div>
    </footer>
  );
};

export default Footer;
