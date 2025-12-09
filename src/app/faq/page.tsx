'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Phone, Clock, Shield, Truck, CreditCard, MapPin } from 'lucide-react'

const faqs = [
    {
        category: 'שירות וזמינות',
        icon: Clock,
        questions: [
            {
                q: 'מהם שעות הפעילות שלכם?',
                a: 'אנחנו זמינים 24 שעות ביממה, 7 ימים בשבוע, 365 ימים בשנה. לא משנה באיזה שעה נתקעתם - אנחנו כאן בשבילכם.'
            },
            {
                q: 'כמה זמן לוקח לכם להגיע?',
                a: 'זמן ההגעה הממוצע שלנו הוא 15-45 דקות, תלוי במיקום ובתנאי התנועה. באזור המרכז זמן ההגעה קצר יותר.'
            },
            {
                q: 'באילו אזורים אתם פועלים?',
                a: 'אנחנו מספקים שירות בכל רחבי הארץ - מאילת ועד מטולה, כולל יהודה ושומרון והרמה הסורית.'
            }
        ]
    },
    {
        category: 'סוגי רכבים',
        icon: Truck,
        questions: [
            {
                q: 'אילו סוגי אופנועים אתם גוררים?',
                a: 'אנחנו גוררים את כל סוגי האופנועים - מקטנועים קלים ועד אופנועי כביש כבדים, אופנועי שטח, וכלי רכב מיוחדים.'
            },
            {
                q: 'האם אתם גוררים גם ATV ו-RZR/UTV?',
                a: 'בהחלט! יש לנו ציוד מיוחד לגרירת כלי שטח כבדים כמו ATV, טרקטורונים, RZR ו-UTV. הצוות שלנו מאומן לטיפול בכלים אלו.'
            },
            {
                q: 'מה לגבי אופנועים קלאסיים או אספנות?',
                a: 'אנחנו מתמחים בגרירת אופנועים יקרי ערך. יש לנו רצועות קשירה מיוחדות ומשטחים מרופדים למניעת נזק.'
            }
        ]
    },
    {
        category: 'מחירים ותשלום',
        icon: CreditCard,
        questions: [
            {
                q: 'כמה עולה שירות גרירה?',
                a: 'המחיר תלוי במרחק ובסוג הכלי. התקשרו לקבלת הצעת מחיר מדויקת. אנחנו מחויבים לשקיפות מלאה ללא הפתעות.'
            },
            {
                q: 'האם אפשר לשלם בכרטיס אשראי?',
                a: 'כן, אנחנו מקבלים את כל אמצעי התשלום: מזומן, כרטיסי אשראי, העברות בנקאיות, ואפליקציות תשלום כמו ביט ופייבוקס.'
            },
            {
                q: 'האם יש תעריף שונה בלילה/סופ"ש?',
                a: 'התעריפים שלנו קבועים ושקופים. אין תוספת על שירות לילה או סופי שבוע - המחיר זהה תמיד.'
            }
        ]
    },
    {
        category: 'ביטוח ובטיחות',
        icon: Shield,
        questions: [
            {
                q: 'האם יש לכם ביטוח?',
                a: 'כן, יש לנו ביטוח סחורה בהעברה מלא. כל רכב שאנחנו גוררים מכוסה מרגע העמסתו ועד פריקתו ביעד.'
            },
            {
                q: 'מה קורה אם נגרם נזק במהלך הגרירה?',
                a: 'במקרה הנדיר של נזק, הביטוח שלנו מכסה את התיקון. אנחנו מתעדים את מצב הכלי לפני ואחרי הגרירה.'
            },
            {
                q: 'איך אתם מבטיחים שהאופנוע לא ייפול?',
                a: 'אנחנו משתמשים ברצועות קשירה מקצועיות, מתקני קיבוע לגלגל קדמי, ושיטות קשירה מאושרות. הצוות מאומן בהתאם לסטנדרטים בינלאומיים.'
            }
        ]
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-2xl mb-6">
                        <HelpCircle className="w-8 h-8 text-orange-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        שאלות <span className="text-orange-500">נפוצות</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        מצאו תשובות לשאלות הנפוצות ביותר על שירותי הגרירה שלנו
                    </p>
                </motion.div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqs.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden"
                        >
                            <div className="flex items-center gap-3 p-6 border-b border-gray-800">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                                    <category.icon className="w-5 h-5 text-orange-400" />
                                </div>
                                <h2 className="text-xl font-bold text-white">{category.category}</h2>
                            </div>

                            <div className="divide-y divide-gray-800">
                                {category.questions.map((faq, index) => {
                                    const itemId = `${catIndex}-${index}`
                                    const isOpen = openIndex === itemId

                                    return (
                                        <div key={index} className="group">
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : itemId)}
                                                className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-800/50 transition-colors"
                                            >
                                                <span className="text-white font-medium pr-4">{faq.q}</span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-6">לא מצאתם תשובה לשאלה שלכם?</p>
                    <a
                        href="tel:0524823435"
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        התקשרו עכשיו
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
