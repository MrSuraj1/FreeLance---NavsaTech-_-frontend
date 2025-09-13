import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <img src="/djk" alt="NavsaTech Logo" className="w-20 mb-3" />
          <p className="text-sm">
            NavsaTech provides modern tech solutions to grow your business.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1B98gHfRFb/" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://youtube.com/@navsatech?si=sSXQr0D15KtiQ2nG" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.instagram.com/navsatech?igsh=c3pnaWY4aHUxaDJn" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} NavsaTech. All rights reserved.</p>
        <p className="mt-1">Developed by <span className="text-white">Suraj</span></p>
      </div>
    </footer>
  );
}
