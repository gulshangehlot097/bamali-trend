import { LockKeyhole, Gift, Database, Cookie, UserRoundCheck, PhoneCall } from 'lucide-react'
import { PolicyPage } from './Terms'

const privacyData = [
  {
    id: 'info',
    heading: '1. Information We Collect',
    icon: LockKeyhole,
    shortText: 'Personal details required for processing customized orders.',
    details: 'We collect essential personal information including your full name, phone number, email address, delivery address, and customization details (such as engraved names or photos uploaded for Rakhis).'
  },
  {
    id: 'usage',
    heading: '2. How We Use Data',
    icon: Gift,
    shortText: 'Used exclusively for order fulfillment & delivery updates.',
    details: 'Your information is used solely to process personalized orders, print shipping labels, send order tracking updates via WhatsApp/SMS, and continuously improve our website experience.'
  },
  {
    id: 'protection',
    heading: '3. Data Protection',
    icon: Database,
    shortText: 'Strict security measures with zero third-party selling.',
    details: 'We implement industry-standard encryption protocols to safeguard your data. We never sell, rent, or share your personal details with unrelated third parties or marketing agencies.'
  },
  {
    id: 'cookies',
    heading: '4. Cookies & Analytics',
    icon: Cookie,
    shortText: 'Session cookies to remember cart items and preferences.',
    details: 'We use functional cookies to enhance your browsing experience, keep track of items in your shopping bag, and collect anonymous traffic insights to optimize website speed.'
  },
  {
    id: 'rights',
    heading: '5. Your Data Rights',
    icon: UserRoundCheck,
    shortText: 'Full control to request data updates or account deletion.',
    details: 'You have the right to access, modify, or request the complete deletion of your personal contact details from our records at any time by contacting our support team.'
  },
  {
    id: 'contact',
    heading: '6. Privacy Concerns',
    icon: PhoneCall,
    shortText: 'Dedicated support for privacy & security questions.',
    details: 'If you have any questions or concerns regarding our privacy practices, please contact us directly at +91 6367077048 or email support@bamalitrendz.com.'
  }
]

export default function Privacy() {
  return <PolicyPage title="Privacy Policy" items={privacyData} />
}