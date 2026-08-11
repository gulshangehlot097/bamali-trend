import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Truck,
  ShieldCheck,
  Sparkles,
  Package,
  HeartHandshake,
  KeyRound,
  Camera,
  PackageCheck,
  Headphones,
  Star
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import heroImage from '../assets/products/hero.png'
import giftBox from '../assets/products/gift-box.jpg'

export default function Home() {
  const [showAllProducts, setShowAllProducts] = useState(false)
  const visibleProducts = showAllProducts ? products : products.slice(0, 5)

  return (
    <main className="bg-[#faf9f6] min-h-screen text-gray-800 selection:bg-[#c3892b] selection:text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#fffaf5] via-[#fef7ee] to-[#f7eedf] border border-[#eee2d3] shadow-xs">

          {/* Content Column */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-6 lg:px-12 lg:py-16">
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-[#e5d3bd] bg-white/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#ad7b2d] backdrop-blur-xs shadow-2xs">
              <Sparkles size={13} className="text-[#c3892b]" />
              <span>Make It Personal • Make It Special</span>
            </div>

            <h1 className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-gray-900 tracking-tight">
              A Rakhi Made <br />
              <span className="italic font-normal text-[#ad7b2d]">Just For You</span>
            </h1>

            <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-gray-600 font-normal">
              Celebrate the beautiful bond of love with personalized Rakhis, crafted with your special name, photo, and precious memories.
            </p>

            {/* Feature Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-[#eae2d7] bg-white/90 px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-2xs">
                <Sparkles size={13} className="text-[#c3892b]" /> Personalized Designs
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-[#eae2d7] bg-white/90 px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-2xs">
                <ShieldCheck size={13} className="text-[#c3892b]" /> Premium Finish
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-[#eae2d7] bg-white/90 px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-2xs">
                <Package size={13} className="text-[#c3892b]" /> Made in India
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c3892b] px-7 py-3.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#a67220] hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Rakhis
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-xs font-bold text-gray-800 transition-all duration-300 hover:border-[#c3892b] hover:text-[#c3892b] hover:shadow-xs"
              >
                View Collection
              </a>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="group relative min-h-[320px] sm:min-h-[420px] lg:col-span-6 lg:min-h-full overflow-hidden bg-[#efe3d8]">
            <img
              src={heroImage}
              alt="Personalized engraved Rakhis"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 lg:hidden" />
          </div>

        </div>
      </section>

      {/* Benefits Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-2xs">
          <Benefit icon={<ShieldCheck />} title="Premium Steel" text="Rustproof & Durable" />
          <Benefit icon={<Sparkles />} title="Custom Engraving" text="Name & Photo Lasered" />
          <Benefit icon={<KeyRound />} title="Reusable Design" text="Use as Keychain Later" />
          <Benefit icon={<Truck />} title="Fast Shipping" text="Express Pan India" />
        </div>
      </section>

      {/* Products Collection */}
      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-8 lg:p-10 shadow-xs">

          {/* Section Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c3892b]">
                BAMALI TRENDZ
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-gray-900">
                Our Exclusive Collection
              </h2>
            </div>

            <button
              onClick={() => setShowAllProducts(v => !v)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#c3892b] transition hover:text-[#a67220] hover:translate-x-1 cursor-pointer w-fit"
            >
              {showAllProducts ? 'Show Less' : 'View All Products'}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {visibleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Product Count Indicator */}
          {products.length > 5 && (
            <div className="mt-8 pt-4 border-t border-gray-50 text-center text-xs font-medium text-gray-500">
              {showAllProducts
                ? `Showing all ${products.length} products`
                : `${products.length - 5} more products available`}
            </div>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="rounded-3xl border border-[#eee0d4] bg-gradient-to-br from-white via-[#fdfbf7] to-[#fbf5ee] p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">

            {/* Left Box Image */}
            <div className="group relative h-[260px] sm:h-[320px] overflow-hidden rounded-2xl border border-[#eee0d4] shadow-sm md:col-span-5 lg:col-span-5">
              <img
                src={giftBox}
                alt="Bamali Trendz premium Rakhi gift box"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Middle Info Column */}
            <div className="flex flex-col justify-center md:col-span-7 lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c3892b]">
                About Us
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                Why Choose Bamali Trendz?
              </h2>

              <ul className="my-6 space-y-3">
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c3892b]/15 text-[#c3892b]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  High Quality Stainless Steel
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c3892b]/15 text-[#c3892b]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Laser Engraved for Perfect Finish
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c3892b]/15 text-[#c3892b]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Personalized for Your Loved Ones
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c3892b]/15 text-[#c3892b]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Made with <span className="text-red-500 font-bold px-0.5">♥</span> in India
                </li>
              </ul>

              <a
                href="#products"
                className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#c3892b] px-6 py-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#a67220] hover:shadow-md"
              >
                Explore More
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Stats Cards */}
            <div className="grid grid-cols-2 gap-3.5 md:col-span-12 lg:col-span-3 lg:grid-cols-1">
              <Stat
                icon={<HeartHandshake size={22} className="text-[#c3892b]" />}
                value="50000+"
                label="Happy Customers"
              />
              <Stat
                icon={<Star size={22} className="text-[#c3892b] fill-[#c3892b]/20" />}
                value="4.8 / 5"
                label="Customer Rating"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Footer Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 rounded-2xl bg-zinc-900 px-6 py-4 text-white shadow-md">
          <Trust
            icon={<Camera size={18} />}
            title="Follow Us On Instagram"
            value="@bamalitrendz"
          />
          <Trust
            icon={<PackageCheck size={18} />}
            title="Secure Packaging"
            value="Safe & Elegant Delivery"
          />
          <Trust
            icon={<Headphones size={18} />}
            title="Need Help?"
            value="+91 6367077048"
          />
        </div>
      </section>
    </main>
  )
}

// Sub-components
function Benefit({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 p-2">
      <span className="shrink-0 text-[#c3892b] bg-[#c3892b]/10 p-2.5 rounded-xl [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <div>
        <h4 className="text-xs font-bold text-gray-900">{title}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5">{text}</p>
      </div>
    </div>
  )
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-[#eee0d4]/80 bg-white/80 shadow-2xs transition-transform duration-300 hover:-translate-y-1">
      <div>{icon}</div>
      <strong className="mt-2 text-xl font-bold text-gray-900">{value}</strong>
      <span className="text-xs font-medium text-gray-500">{label}</span>
    </div>
  )
}

function Trust({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 py-3 sm:py-2 sm:px-4 first:pl-0 last:pr-0">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-zinc-800 text-[#c3892b] border border-zinc-700/50">
        {icon}
      </span>
      <div>
        <p className="text-[11px] text-zinc-400 font-medium">{title}</p>
        <strong className="block text-xs sm:text-sm font-semibold text-white mt-0.5">{value}</strong>
      </div>
    </div>
  )
}