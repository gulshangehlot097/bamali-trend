import { useState, useEffect } from 'react'
import { 
  Eye, X, ChevronLeft, ChevronRight, MessageSquare, 
  Sparkles, ShieldCheck, Heart, Share2, ZoomIn, Check 
} from 'lucide-react'
import { products as initialProducts } from '../data/products'

// Fallback products if data file is empty
const fallbackProducts = [
  {
    id: 1,
    name: "Custom Stainless Steel Name Rakhi",
    category: "Name Rakhi",
    image: "https://images.unsplash.com/photo-1627916607164-7b20241db935?w=800&auto=format&fit=crop&q=60",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Personalized Photo Frame Rakhi",
    category: "Photo Rakhi",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=800&auto=format&fit=crop&q=60",
    badge: "New"
  },
  {
    id: 3,
    name: "Royal Golden Metal Engraved Rakhi",
    category: "Metal Rakhi",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=60",
    badge: "Popular"
  },
  {
    id: 4,
    name: "Multi-Purpose Keychain Rakhi",
    category: "Keychain Rakhi",
    image: "https://images.unsplash.com/photo-1611591475281-8d282322b7f0?w=800&auto=format&fit=crop&q=60",
    badge: "Reusable"
  }
]

export default function Products() {
  const allProducts = initialProducts && initialProducts.length > 0 ? initialProducts : fallbackProducts
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [previewIndex, setPreviewIndex] = useState(null)
  const [copied, setCopied] = useState(false)

  // Categories extraction
  const categories = ['All', ...new Set(allProducts.map(p => p.category || 'Custom Rakhis'))]

  // Filtered Products
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => (p.category || 'Custom Rakhis') === selectedCategory)

  // Navigation handlers for Lightbox
  const handlePrev = () => {
    setPreviewIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setPreviewIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1))
  }

  // Keyboard Arrow controls for preview modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (previewIndex === null) return
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setPreviewIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previewIndex, filteredProducts])

  const activeProduct = previewIndex !== null ? filteredProducts[previewIndex] : null

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] py-8 px-4 sm:px-8 lg:px-[42px]">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ink via-[#231e19] to-gold-dark p-8 text-white shadow-xl mb-8">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-[600px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold border border-gold/30">
              <Sparkles size={12} /> Premium Handcrafted Rakhis
            </span>
            <h1 className="mt-3 font-display text-[28px] sm:text-[38px] font-bold leading-tight">
              Exclusive Product Gallery
            </h1>
            <p className="mt-2 text-[12px] sm:text-[13px] text-gray-300 leading-relaxed">
              Explore our range of personalized laser-engraved stainless steel Rakhis. Click any product to view full-screen preview.
            </p>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setPreviewIndex(null)
              }}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-gold text-white shadow-md scale-105' 
                  : 'bg-white text-ink border border-gray-200/80 hover:border-gold hover:text-gold-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-4">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id || idx}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/30"
            >
              {/* Image Container */}
              <div 
                onClick={() => setPreviewIndex(idx)}
                className="relative aspect-square w-full overflow-hidden bg-[#fbf7f2] cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {product.badge}
                  </span>
                )}

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold text-ink shadow-lg backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ZoomIn size={14} className="text-gold" /> Preview
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gold">
                    {product.category || 'Custom Rakhi'}
                  </span>
                  <h3 className="mt-1 line-clamp-2 text-[12px] font-semibold text-ink leading-snug">
                    {product.name}
                  </h3>
                </div>

                {/* WhatsApp Order CTA */}
                <a
                  href={`https://wa.me/916367077048?text=${encodeURIComponent(`Hello Bamali Trendz! I want to order: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-[10px] font-bold text-white transition hover:bg-[#20ba5a] shadow-2xs"
                >
                  <MessageSquare size={13} /> Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Fullscreen Lightbox Preview Modal with NEXT / PREV Navigation */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 transition-all duration-300">
          
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10 px-2 sm:px-6">
            <span className="text-[11px] font-medium tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              {previewIndex + 1} / {filteredProducts.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold transition cursor-pointer backdrop-blur-md"
                title="Share link"
              >
                <Share2 size={16} />
              </button>
              <button
                onClick={() => setPreviewIndex(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-red-600 transition cursor-pointer backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:bg-gold hover:scale-110 cursor-pointer border border-white/10"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:bg-gold hover:scale-110 cursor-pointer border border-white/10"
            title="Next (Right Arrow)"
          >
            <ChevronRight size={26} />
          </button>

          {/* Lightbox Content Card */}
          <div className="relative max-w-[900px] w-full rounded-3xl bg-white overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
            
            {/* Modal Image Display */}
            <div className="md:col-span-7 relative bg-[#fbf7f2] flex items-center justify-center min-h-[280px] sm:min-h-[400px] p-4">
              <img 
                key={activeProduct.id || previewIndex}
                src={activeProduct.image} 
                alt={activeProduct.name} 
                className="h-full max-h-[60vh] w-full object-contain transition-all duration-300 animate-in fade-in zoom-in-95"
              />
              {activeProduct.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {activeProduct.badge}
                </span>
              )}
            </div>

            {/* Modal Details Side */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                  {activeProduct.category || 'Bamali Exclusive'}
                </span>
                <h2 className="mt-1 font-display text-[20px] sm:text-[24px] font-bold text-ink leading-snug">
                  {activeProduct.name}
                </h2>

                <div className="mt-4 space-y-2 text-[11px] text-[#555] border-t border-b border-gray-100 py-4">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-gold" />
                    <span>Premium HD Laser Engraving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-gold" />
                    <span>304 Rustproof Stainless Steel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-gold" />
                    <span>Converts to Reusable Keychain</span>
                  </div>
                </div>
              </div>

              {/* Order via WhatsApp Button */}
              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/916367077048?text=${encodeURIComponent(`Hello Bamali Trendz! I want to order:\nProduct: ${activeProduct.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-[11px] font-bold text-white shadow-md transition hover:bg-[#20ba5a]"
                >
                  <MessageSquare size={16} /> Order Directly on WhatsApp
                </a>

                {/* Keyboard Hint */}
                <p className="text-center text-[9px] text-[#888]">
                  Tip: Use <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-700 font-mono">←</kbd> <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-700 font-mono">→</kbd> arrow keys to switch images
                </p>
              </div>

            </div>

          </div>

        </div>
      )}
    </main>
  )
}