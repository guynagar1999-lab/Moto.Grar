import { Metadata } from 'next'
import Link from 'next/link'
import { Map, Home, Wrench, FileText, Phone, BookOpen, Users, Camera, Gamepad2, HelpCircle, Shield, Lock, Accessibility as AccessibilityIcon } from 'lucide-react'

export const metadata: Metadata = {
    title: 'מפת האתר | MotoGrar',
    description: 'מפת האתר של MotoGrar - כל הדפים והקישורים באתר',
}

const siteLinks = [
    {
        category: 'ראשי',
        icon: Home,
        color: 'orange',
        links: [
            { name: 'דף הבית', href: '/', description: 'עמוד הבית של MotoGrar' },
            { name: 'אודותינו', href: '/about', description: 'מי אנחנו והסיפור שלנו' },
            { name: 'צור קשר', href: '/contact', description: 'דרכים ליצור איתנו קשר' },
        ]
    },
    {
        category: 'שירותים',
        icon: Wrench,
        color: 'blue',
        links: [
            { name: 'גרירת אופנועים', href: '/services/motorcycle', description: 'שירות גרירה לכל סוגי האופנועים' },
            { name: 'גרירת ATV', href: '/services/atv', description: 'שירות גרירה לטרקטורונים ו-ATV' },
            { name: 'גרירת RZR/UTV', href: '/services/rzr', description: 'שירות גרירה לרכבי RZR ו-UTV' },
            { name: 'קריאת שירות', href: '/service-call', description: 'הזמנת שירות גרירה מיידי' },
        ]
    },
    {
        category: 'תוכן',
        icon: BookOpen,
        color: 'green',
        links: [
            { name: 'בלוג', href: '/blog', description: 'טיפים ומידע שימושי לרוכבים' },
            { name: 'ביקורות', href: '/testimonials', description: 'מה הלקוחות אומרים עלינו' },
            { name: 'גלריה', href: '/gallery', description: 'תמונות מפעילות החברה' },
        ]
    },
    {
        category: 'מיוחד',
        icon: Gamepad2,
        color: 'purple',
        links: [
            { name: 'Pro Garage', href: '/pro-garage', description: 'שירותי מוסך מתקדמים' },
            { name: 'צ׳אטבוט', href: '/chatbot', description: 'עוזר וירטואלי חכם' },
        ]
    },
    {
        category: 'מידע ושימוש',
        icon: FileText,
        color: 'yellow',
        links: [
            { name: 'שאלות נפוצות', href: '/faq', description: 'תשובות לשאלות נפוצות' },
            { name: 'תנאי שימוש', href: '/terms', description: 'תנאי השימוש באתר ובשירותים' },
            { name: 'מדיניות פרטיות', href: '/privacy', description: 'איך אנחנו מגנים על המידע שלכם' },
            { name: 'הצהרת נגישות', href: '/accessibility', description: 'מחויבות לנגישות דיגיטלית' },
        ]
    },
]

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30' },
}

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
                        <Map className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        מפת <span className="text-cyan-500">האתר</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        מצאו בקלות את כל הדפים והשירותים שלנו
                    </p>
                </div>

                {/* Site Map */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteLinks.map((section) => {
                        const colors = colorClasses[section.color]
                        return (
                            <div
                                key={section.category}
                                className={`bg-gray-900/50 border ${colors.border} rounded-2xl overflow-hidden`}
                            >
                                <div className={`flex items-center gap-3 p-4 border-b border-gray-800 ${colors.bg}`}>
                                    <section.icon className={`w-5 h-5 ${colors.text}`} />
                                    <h2 className="font-bold text-white">{section.category}</h2>
                                </div>
                                <div className="p-4 space-y-3">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="block group"
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg} group-hover:scale-150 transition-transform`}></span>
                                                <div>
                                                    <span className="text-white group-hover:text-orange-400 transition-colors font-medium">
                                                        {link.name}
                                                    </span>
                                                    <p className="text-gray-500 text-sm">{link.description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Quick Contact */}
                <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
                    <Phone className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">צריכים עזרה?</h2>
                    <p className="text-gray-400 mb-6">אנחנו כאן בשבילכם 24/7</p>
                    <a
                        href="tel:0524823435"
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        052-482-3435
                    </a>
                </div>
            </div>
        </div>
    )
}
