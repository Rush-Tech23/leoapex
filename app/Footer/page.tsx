import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link';



export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=" text-white py-12  w-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LeoApex</h3>
            <p className="text-gray-400"> Transforming ideas into digital experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#Home" className="block hover:text-blue-500 transition"  > Home </Link>
              <Link href="#Partners" className="block hover:text-blue-500 transition"  > Partners </Link>
              <Link href="#Ourservices" className="block hover:text-blue-500 transition"  > Ourservices </Link>
              
              <Link href="#Home" className="block hover:text-blue-500 transition"  > Contact </Link>
              {/* <a href="#Hero" className="block hover:text-blue-500 transition">Home</a> */}
              {/* <a href="/services" className="block hover:text-blue-500 transition">Services</a>
              <a href="/portfolio" className="block hover:text-blue-500 transition">Portfolio</a> */}
              {/* <a href="/contact" className="block hover:text-blue-500 transition">Contact</a> */}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile App Design</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p>Email: contact@leoapex.com</p>
              <p>Phone: +91 9767417427</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-blue-500 transition">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-blue-500 transition">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/leoapex.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-blue-500 transition">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-blue-500 transition">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © {currentYear} LeoApex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

