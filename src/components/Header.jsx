import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, MapPin, Phone, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import logo from '../assets/bamali-logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Open hone par background scroll lock karein
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  // NavLink Active State styling function
  const getNavLinkClass = ({ isActive }) =>
    `relative py-3 md:py-1.5 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-200 
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#c3892b] after:transition-all after:duration-300
     ${
       isActive
         ? 'text-[#c3892b] after:w-full font-bold'
         : 'text-gray-800 after:w-0 hover:text-[#c3892b] hover:after:w-full'
     }`

  const anchorClass =
    "relative py-3 md:py-1.5 text-xs md:text-sm font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-[#c3892b] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#c3892b] after:transition-all after:duration-300 hover:after:w-full"

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Top Banner - Responsive for Mobile & Desktop */}
      <div className="bg-gradient-to-r from-[#b77b22] via-[#c3892b] to-[#d2a153] text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles size={13} className="shrink-0" />
            <span className="truncate">Personalized Gifts that make every bond special</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="shrink-0" />
              <span>47, Vishwa Nagar, New Sanganer, Jaipur</span>
            </span>
            <a href="tel:+916367077048" className="flex items-center gap-1 hover:underline">
              <Phone size={12} className="shrink-0" />
              <span>6367077048</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="border-b border-[#eee4d9] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Section - Increased size for clear visibility */}
          <Link to="/" className="flex items-center shrink-0 py-1" onClick={close}>
            <img
              src={logo}
              alt="Bamali Trendz"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain max-w-[180px] sm:max-w-[240px] md:max-w-[280px]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <NavLink to="/" className={getNavLinkClass} end onClick={close}>
              Home
            </NavLink>
            <a href="/products" className={anchorClass} onClick={close}>
              Products
            </a>
            <a href="/#about" className={anchorClass} onClick={close}>
              About Us
            </a>
            <NavLink to="/contact" className={getNavLinkClass} onClick={close}>
              Contact Us
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full text-gray-700 transition hover:bg-[#faf4eb] hover:text-[#c3892b]"
            >
              <Search size={20} />
            </button>

            <button
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full text-gray-700 transition hover:bg-[#faf4eb] hover:text-[#c3892b]"
            >
              <ShoppingCart size={20} />
              <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-[#c3892b] text-[9px] font-bold text-white">
                0
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="grid h-10 w-10 place-items-center rounded-full text-gray-700 md:hidden hover:bg-[#faf4eb]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={close}
        />
      )}

      {/* Mobile Navigation Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 top-full z-50 w-full bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          open
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col divide-y divide-gray-100 px-6 py-3">
          <NavLink to="/" className={getNavLinkClass} end onClick={close}>
            Home
          </NavLink>
          <a href="/#products" className={anchorClass} onClick={close}>
            Products
          </a>
          <a href="/#about" className={anchorClass} onClick={close}>
            About Us
          </a>
          <NavLink to="/contact" className={getNavLinkClass} onClick={close}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}