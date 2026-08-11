import { useState } from 'react'
import { 
  Mail, MapPin, Phone, Clock, MessageSquare, ExternalLink, 
  Sparkles, ShieldCheck, HeartHandshake, ChevronDown, Building2 
} from 'lucide-react'
import contactImage from '../assets/products/contact-rakhi.jpg'

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: "How can I share custom details (Name/Photo) for my order?",
      a: "Once you place an order, you can WhatsApp us your order ID along with your high-res photo or custom name text at +91 6367077048."
    },
    {
      q: "What is the average delivery time?",
      a: "Standard Pan-India delivery takes 4-7 business days. We also offer express shipping options during peak festival seasons."
    },
    {
      q: "Do you offer corporate or bulk discounts?",
      a: "Yes! For orders above 20+ pieces, please connect directly with our support team on WhatsApp or Call for special bulk pricing."
    }
  ]

  return (
    <main className="bg-[#fcfbfa] min-h-screen py-10 px-4 sm:px-8 lg:px-[42px]">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* Top Hero Banner Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ink via-[#211d18] to-gold-dark p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-[600px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold border border-gold/30">
              <Sparkles size={12} /> We'd Love To Hear From You
            </span>
            <h1 className="mt-3 font-display text-[32px] sm:text-[42px] font-bold leading-tight">
              Let's Connect & Celebrate
            </h1>
            <p className="mt-2 text-[12px] sm:text-[13px] text-gray-300 leading-relaxed">
              Have questions about customized Rakhis, order tracking, or bulk corporate orders? Our team is always here to help you make your gifts special.
            </p>
          </div>
        </div>

        {/* Contact Info Cards Row */}
        <div className="-mt-6 relative z-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 px-4">
          
          {/* Card 1: Phone */}
          <a href="tel:+916367077048" className="group rounded-2xl bg-white p-5 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
              <Phone size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-[#888]">Call Us Directly</span>
            <strong className="text-[13px] font-bold text-ink group-hover:text-gold-dark transition">+91 6367077048</strong>
            <p className="mt-1 text-[9px] text-[#625c56]">Mon - Sun (9 AM to 10 PM)</p>
          </a>

          {/* Card 2: WhatsApp */}
          <a href="https://wa.me/916367077048" target="_blank" rel="noopener noreferrer" className="group rounded-2xl bg-white p-5 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#25D366]/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
              <MessageSquare size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-[#888]">WhatsApp Support</span>
            <strong className="text-[13px] font-bold text-ink group-hover:text-[#25D366] transition">Chat on WhatsApp</strong>
            <p className="mt-1 text-[9px] text-[#625c56]">Instant response for customization</p>
          </a>

          {/* Card 3: Email */}
          <a href="mailto:support@bamalitrendz.com" className="group rounded-2xl bg-white p-5 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
              <Mail size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-[#888]">Email Support</span>
            <strong className="text-[12px] font-bold text-ink group-hover:text-gold-dark transition truncate block">support@bamalitrendz.com</strong>
            <p className="mt-1 text-[9px] text-[#625c56]">24/7 Mail support</p>
          </a>

          {/* Card 4: Working Hours */}
          <div className="group rounded-2xl bg-white p-5 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Clock size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-[#888]">Working Hours</span>
            <strong className="text-[12px] font-bold text-ink">9:00 AM – 10:00 PM</strong>
            <p className="mt-1 text-[9px] text-[#625c56]">Open 7 Days a week</p>
          </div>

          {/* Card 5: GST Details */}
          <div className="group rounded-2xl bg-white p-5 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Building2 size={20} />
            </div>
            <span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-[#888]">GST Registered</span>
            <strong className="text-[11px] font-bold text-ink tracking-tight block">08HGJPS2353L1ZQ</strong>
            <p className="mt-1 text-[9px] text-[#625c56]">Prop. SONU SHARMA</p>
          </div>

        </div>

        {/* Main Section: Store & Visual Banner */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Store Location & Interactive Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
            <div>
              <div className="flex items-center gap-2 text-gold font-bold text-[11px] uppercase tracking-wider">
                <MapPin size={16} /> Physical Store
              </div>
              <h2 className="mt-2 font-display text-[24px] font-semibold text-ink sm:text-[28px]">
                Visit Our Store in Jaipur
              </h2>
              <p className="mt-2 text-[12px] leading-relaxed text-[#625c56]">
                Experience our handcrafted premium products in person. Feel free to stop by or get in touch for direct store pick-ups.
              </p>

              <div className="mt-6 space-y-2.5 rounded-2xl bg-[#faf7f3] p-4 border border-[#eee0d3]/50">
                <div className="flex items-center justify-between">
                  <b className="text-[12px] font-bold text-ink block">BAMALI TRENDZ</b>
                  <span className="rounded-md bg-gold/10 px-2 py-0.5 text-[9px] font-bold text-gold-dark">
                    GSTIN: 08HGJPS2353L1ZQ
                  </span>
                </div>
                <p className="text-[10px] text-gray-500 font-medium">Legal Name: SONU SHARMA</p>
                <p className="text-[11px] text-[#555] leading-relaxed border-t border-gray-200/60 pt-2">
                  47, Vishwa Nagar, New Sanganer Road,<br />
                  Jaipur, Rajasthan – 302019, India
                </p>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-inner h-[200px] relative">
              <iframe
                title="Bamali Trendz Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.887201887376!2d75.7600!3d26.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzI0LjAiTiA3NcKwNDUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <a 
                href="https://maps.google.com/?q=47+Vishwa+Nagar+New+Sanganer+Jaipur+Rajasthan+302019" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-gold px-3 py-1.5 text-[10px] font-bold text-white shadow-md hover:bg-gold-dark transition"
              >
                Open in Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Feature Showcase Banner */}
          <div className="relative lg:col-span-6 overflow-hidden rounded-3xl min-h-[400px] shadow-sm border border-gray-100 group">
            <img 
              src={contactImage} 
              alt="Bamali Trendz Premium Collection" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <span className="inline-block rounded-md bg-gold/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white mb-2">
                Handcrafted With Love
              </span>
              <h3 className="font-display text-[22px] sm:text-[26px] font-semibold leading-tight">
                Personalized Laser Engraved Rakhis
              </h3>
              <p className="mt-2 text-[11px] text-gray-200 max-w-[450px]">
                High-quality stainless steel, completely reusable, rustproof, and created specifically for your loved ones.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-4 pt-2 border-t border-white/20 text-[10px] text-gray-300">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-gold" /> 100% Quality Assurance</span>
                <span className="flex items-center gap-1.5"><HeartHandshake size={14} className="text-gold" /> Trusted by 5000+ Customers</span>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-16 rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-gray-100">
          <div className="text-center max-w-[500px] mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Got Questions?</span>
            <h2 className="mt-1 font-display text-[24px] font-semibold text-ink sm:text-[28px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 max-w-[800px] mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-gray-100 bg-[#faf9f7] overflow-hidden transition">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-[12px] text-ink cursor-pointer hover:text-gold transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-[11px] text-[#625c56] leading-relaxed border-t border-gray-200/50 pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}