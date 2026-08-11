import { useState, useRef } from 'react'
import { 
  Pencil, Gift, WalletCards, Truck, RotateCcw, PhoneCall, 
  MapPin, ShieldCheck, Mail, AlertTriangle, FileText, ChevronRight 
} from 'lucide-react'
import logo from '../assets/bamali-logo.png'

const termsData = [
  {
    id: 'general',
    heading: '1. General & Acceptance',
    icon: Pencil,
    shortText: 'By using Bamali Trendz, you agree to these legal conditions.',
    details: 'By accessing or placing an order on Bamali Trendz, you confirm that you agree to be bound by these Terms & Conditions. These terms apply to all visitors, users, and others who access or use the service.'
  },
  {
    id: 'products',
    heading: '2. Product & Customization',
    icon: Gift,
    shortText: 'Handcrafted items with precision laser engraving.',
    details: 'All products listed are custom-made and personalized according to customer input (e.g., photo, name). Please review spelling and image clarity before confirming orders. Slight variations in color or texture may occur due to natural materials and monitor displays.'
  },
  {
    id: 'payments',
    heading: '3. Payments & Security',
    icon: WalletCards,
    shortText: '100% secure pre-paid payment processing.',
    details: 'We require 100% upfront payment before initiating the customization or laser engraving process for any order. All online transactions are processed securely through encryption protocols.'
  },
  {
    id: 'shipping',
    heading: '4. Shipping & Delivery',
    icon: Truck,
    shortText: 'Pan-India shipping with real-time tracking.',
    details: 'We aim to ship products within 2-4 business days. Delivery times usually range between 4-7 days depending on your location. Bamali Trendz is not liable for shipping delays caused by carrier disruptions or incorrect addresses.'
  },
  {
    id: 'returns',
    heading: '5. Cancellation & Returns',
    icon: RotateCcw,
    shortText: 'Non-returnable due to custom personalization.',
    details: 'Because all products are custom-engraved, we do not accept returns or cancellations once processing begins. However, if your product arrives damaged or defective, we will issue a free replacement upon receiving unboxing video proof within 48 hours.'
  },
  {
    id: 'contact',
    heading: '6. Support & Inquiries',
    icon: PhoneCall,
    shortText: 'Dedicated support via WhatsApp, Call, and Email.',
    details: 'If you have any questions regarding these terms, payment status, or bulk corporate queries, feel free to contact our support team directly through our official channels.'
  }
]

export default function Terms() {
  return <PolicyPage title="Terms & Conditions" items={termsData} />
}

export function PolicyPage({ title, items }) {
  const [activeTab, setActiveTab] = useState(0)
  const itemRefs = useRef([])

  const handleTabClick = (index) => {
    setActiveTab(index)
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-8 sm:px-6 lg:px-[42px] lg:py-12">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-10 text-center shadow-xs border border-[#eee0d3]/60">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
          <img src={logo} alt="Bamali Trendz" className="mx-auto h-12 w-auto object-contain" />
          <h1 className="mt-3 font-display text-[28px] font-bold text-ink sm:text-[34px]">{title}</h1>
          <p className="mt-1 text-[11px] text-[#888]">
            Home <span className="mx-1 text-gold">/</span> {title}
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#fbf5ee] px-4 py-1.5 text-[10px] font-medium text-gold-dark border border-gold/20">
            <ShieldCheck size={14} /> Last Updated: August 2026
          </div>
        </div>

        {/* Customization Notice */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 text-amber-900 shadow-2xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <AlertTriangle size={18} />
          </div>
          <div className="text-[11px] leading-relaxed">
            <strong className="font-bold">Important Customization Policy:</strong> Since all our products are personalized with custom names and photos, orders cannot be canceled or returned once processing begins unless damaged upon arrival.
          </div>
        </div>

        {/* Mobile Quick Horizontal Scroll Navigation */}
        <div className="mt-6 flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-none">
          {items.map((item, index) => {
            const Icon = item.icon
            const isActive = activeTab === index
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(index)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-[11px] font-semibold transition cursor-pointer ${
                  isActive 
                    ? 'bg-gold text-white shadow-xs' 
                    : 'bg-white text-ink border border-gray-100'
                }`}
              >
                <Icon size={14} />
                <span>{item.heading.split('. ')[1]}</span>
              </button>
            )
          })}
        </div>

        {/* Main Content Layout */}
        <div className="mt-6 lg:mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:col-span-4 lg:block sticky top-6 rounded-2xl bg-white p-3 shadow-xs border border-gray-100">
            <div className="p-3 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-[#888] flex items-center gap-2">
              <FileText size={14} className="text-gold" /> Quick Navigation
            </div>
            <div className="mt-2 space-y-1">
              {items.map((item, index) => {
                const Icon = item.icon
                const isActive = activeTab === index
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(index)}
                    className={`w-full flex items-center justify-between rounded-xl p-3 text-left transition cursor-pointer ${
                      isActive 
                        ? 'bg-gold/10 text-gold-dark font-bold' 
                        : 'text-ink hover:bg-gray-50 text-[11px]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} className={isActive ? 'text-gold' : 'text-gray-400'} />
                      <span className="text-[11px] truncate">{item.heading}</span>
                    </div>
                    <ChevronRight size={14} className={isActive ? 'text-gold' : 'opacity-0'} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Details Container */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <article 
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`scroll-mt-6 rounded-2xl bg-white p-6 shadow-xs border transition-all duration-300 ${
                    activeTab === index 
                      ? 'border-gold/50 ring-2 ring-gold/10' 
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="font-display text-[16px] font-bold text-ink">{item.heading}</h2>
                      <p className="text-[10px] text-[#888]">{item.shortText}</p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-[11.5px] leading-relaxed text-[#555]">
                    {item.details}
                  </p>
                </article>
              )
            })}
          </div>

        </div>

        {/* Footer Info Bar */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-[#1d1a16] p-4 sm:p-6 text-white shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            
            <div className="flex items-center gap-2.5 text-[11px] text-gray-300">
              <MapPin size={16} className="shrink-0 text-gold" />
              <span>47, Vishwa Nagar, New Sanganer, Jaipur, RJ – 302019</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <a href="tel:+916367077048" className="flex items-center gap-1.5 font-semibold text-white transition hover:text-gold">
                <PhoneCall size={14} className="text-gold" /> +91 6367077048
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a href="mailto:support@bamalitrendz.com" className="flex items-center gap-1.5 font-semibold text-white transition hover:text-gold">
                <Mail size={14} className="text-gold" /> support@bamalitrendz.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}