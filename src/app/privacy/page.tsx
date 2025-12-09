import { Metadata } from 'next'
import { Lock, Eye, Database, Shield, UserCheck, Mail } from 'lucide-react'

export const metadata: Metadata = {
    title: 'מדיניות פרטיות | MotoGrar',
    description: 'מדיניות הפרטיות של MotoGrar - כיצד אנו מגנים על המידע שלכם',
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl mb-6">
                        <Lock className="w-8 h-8 text-purple-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        מדיניות <span className="text-purple-500">פרטיות</span>
                    </h1>
                    <p className="text-gray-400">עודכן לאחרונה: דצמבר 2024</p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Intro */}
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            ב-MotoGrar אנחנו מחויבים להגנה על פרטיותכם. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <Database className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">מידע שאנו אוספים</h2>
                        </div>
                        <div className="text-gray-300 space-y-4">
                            <p>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 rounded-xl p-4">
                                    <h3 className="font-semibold text-white mb-2">מידע אישי</h3>
                                    <ul className="text-sm space-y-1 text-gray-400">
                                        <li>• שם מלא</li>
                                        <li>• מספר טלפון</li>
                                        <li>• כתובת אימייל</li>
                                        <li>• כתובת למשלוח</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-xl p-4">
                                    <h3 className="font-semibold text-white mb-2">מידע טכני</h3>
                                    <ul className="text-sm space-y-1 text-gray-400">
                                        <li>• כתובת IP</li>
                                        <li>• סוג דפדפן</li>
                                        <li>• עוגיות (Cookies)</li>
                                        <li>• מיקום גאוגרפי</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">כיצד אנו משתמשים במידע</h2>
                        </div>
                        <div className="text-gray-300 space-y-3">
                            <p>המידע שנאסף משמש למטרות הבאות:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    מתן שירותי גרירה וחילוץ
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    יצירת קשר עם לקוחות
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    שיפור השירות והחוויה
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    שליחת עדכונים ומבצעים (באישור)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">הגנה על המידע</h2>
                        </div>
                        <div className="text-gray-300 space-y-4">
                            <p>אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם:</p>
                            <div className="grid gap-3">
                                <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl">
                                    <Shield className="w-5 h-5 text-orange-400" />
                                    <span>הצפנת SSL לכל התקשורת</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl">
                                    <Shield className="w-5 h-5 text-orange-400" />
                                    <span>גישה מוגבלת למידע לעובדים מורשים בלבד</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl">
                                    <Shield className="w-5 h-5 text-orange-400" />
                                    <span>גיבויים מאובטחים ומוצפנים</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                                <UserCheck className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">הזכויות שלכם</h2>
                        </div>
                        <div className="text-gray-300 space-y-3">
                            <p>על פי חוק הפרטיות, עומדות לכם הזכויות הבאות:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    זכות לעיין במידע שנאסף עליכם
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    זכות לתקן מידע שגוי
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    זכות לבקש מחיקת המידע
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    זכות להסרה מרשימות דיוור
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">יצירת קשר</h2>
                        </div>
                        <p className="text-gray-300">
                            לשאלות בנוגע למדיניות הפרטיות או לבקשות הנוגעות למידע האישי שלכם, אנא פנו אלינו:
                        </p>
                        <div className="mt-4 text-gray-400">
                            <p><strong className="text-white">טלפון:</strong> 052-482-3435</p>
                            <p><strong className="text-white">אימייל:</strong> privacy@motogar.co.il</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
