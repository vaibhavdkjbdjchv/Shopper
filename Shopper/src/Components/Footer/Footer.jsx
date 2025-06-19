import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="h-full bg-gray-900 text-gray-300 py-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-5">
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Shopper</h1>
          <p className="text-sm">
            Your go-to destination for the latest trends, styles, and deals in
            fashion. Shop smarter, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/feedback" className="hover:text-white">
                Feedback
              </a>
            </li>
            <li>
              <a href="/Aboutus" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to get updates on new arrivals and offers.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-5 pt-6 text-sm text-center flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Shopper. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
