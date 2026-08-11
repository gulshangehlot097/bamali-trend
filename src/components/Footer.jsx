import { Link } from 'react-router-dom'
import logo from '../assets/bamali-logo.png'

export default function Footer() {
  return (
    <footer className="bg-ink px-0 pb-4 pt-10 text-white">
      <div className="mx-auto grid w-[94%] max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr_1fr] lg:gap-9">
        <div>
          <img src={logo} alt="Bamali Trendz" className="h-[65px] w-[115px] object-contain" />
          <p className="mt-2 max-w-xs text-[10px] leading-6 text-[#aaa]">Personalized stainless-steel gifts, custom name &amp; photo engraving, made with love in India.</p>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-bold text-[#d9ae63]">Quick Links</h4>
          <Link className="mb-2 block text-[10px] text-[#aaa] hover:text-white" to="/">Home</Link>
          <Link className="mb-2 block text-[10px] text-[#aaa] hover:text-white" to="/contact">Contact Us</Link>
          <Link className="mb-2 block text-[10px] text-[#aaa] hover:text-white" to="/terms">Terms &amp; Conditions</Link>
          <Link className="mb-2 block text-[10px] text-[#aaa] hover:text-white" to="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-bold text-[#d9ae63]">Contact</h4>
          <a className="mb-2 block text-[10px] text-[#aaa] hover:text-white" href="tel:+916367077048">+91 6367077048</a>
          <a className="mb-2 block text-[10px] text-[#aaa] hover:text-white" href="mailto:support@bamalitrendz.com">support@bamalitrendz.com</a>
          <p className="text-[10px] leading-5 text-[#aaa]">47, Vishwa Nagar, New Sanganer,<br />Jaipur, Rajasthan – 302019</p>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-bold text-[#d9ae63]">Store Hours</h4>
          <p className="text-[10px] leading-5 text-[#aaa]">9:00 AM – 10:00 PM<br />(Daily)</p>
        </div>
      </div>
      <div className="mx-auto mt-7 w-[94%] max-w-[1200px] border-t border-[#34302c] pt-3 text-center text-[9px] text-[#777]">© 2026 Bamali Trendz. All rights reserved. Made with ♥ in India.</div>
    </footer>
  )
}
