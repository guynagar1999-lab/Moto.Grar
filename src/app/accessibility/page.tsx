import { Metadata } from 'next'
import { Accessibility, Eye, Type, MousePointer, Volume2, Keyboard, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'הצהרת נגישות | MotoGrar',
    description: 'הצהרת הנגישות של MotoGrar - מחויבות לנגישות דיגיטלית לכולם',
}

export default function AccessibilityPage() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-2xl mb-6">
                        <Accessibility className="w-8 h-8 text-teal-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        הצהרת <span className="text-teal-500">נגישות</span>
                    </h1>
                    <p className="text-gray-400">עודכן לאחרונה: דצמבר 2024</p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Intro */}
                    <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            MotoGrar מחויבת להנגשת האתר והשירותים שלנו לכלל האוכלוסייה, כולל אנשים עם מוגבלויות. אנו פועלים להתאמת האתר לתקן הישראלי לנגישות אתרי אינטרנט (ת&quot;י 5568) ולהנחיות WCAG 2.1 ברמה AA.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-blue-400" />
                                </div>
                                <h2 className="text-lg font-bold text-white">ניגודיות צבעים</h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                האתר מעוצב עם ניגודיות צבעים גבוהה בין טקסט לרקע, ותומך במצב ניגודיות גבוהה.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                                    <Type className="w-5 h-5 text-green-400" />
                                </div>
                                <h2 className="text-lg font-bold text-white">גודל טקסט</h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                ניתן להגדיל את גודל הטקסט באמצעות כלי הנגישות באתר או באמצעות הזום של הדפדפן.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                    <Keyboard className="w-5 h-5 text-purple-400" />
                                </div>
                                <h2 className="text-lg font-bold text-white">ניווט מקלדת</h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                כל האתר נגיש לניווט באמצעות מקלדת בלבד, עם סימון ברור של אלמנטים בפוקוס.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                                    <MousePointer className="w-5 h-5 text-orange-400" />
                                </div>
                                <h2 className="text-lg font-bold text-white">אזורי לחיצה</h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                כפתורים וקישורים בעלי אזורי לחיצה גדולים ונוחים לשימוש.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                                    <Volume2 className="w-5 h-5 text-yellow-400" />
                                </div>
                                <h2 className="text-lg font-bold text-white">קוראי מסך</h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                האתר מותאם לשימוש עם קוראי מסך, עם תגיות ARIA ותוכן חלופי לתמונות.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                                    <Accessibility className="w-5 h-5 text-pink-400" />
                                </div>
                                <h2 className="text-lg font-bold text-white">כלי נגישות</h2>
                            </div>
                            <p className="text-gray-400 text-sm">
                                כלי נגישות מובנה המאפשר התאמה אישית של חוויית הגלישה.
                            </p>
                        </div>
                    </div>

                    {/* Shortcuts */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">קיצורי מקלדת</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
                                <span className="text-gray-300">מעבר לתוכן הראשי</span>
                                <kbd className="bg-gray-700 px-2 py-1 rounded text-sm text-white">Tab</kbd>
                            </div>
                            <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
                                <span className="text-gray-300">פתיחת תפריט נגישות</span>
                                <kbd className="bg-gray-700 px-2 py-1 rounded text-sm text-white">Alt + A</kbd>
                            </div>
                            <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
                                <span className="text-gray-300">הגדלת טקסט</span>
                                <kbd className="bg-gray-700 px-2 py-1 rounded text-sm text-white">Ctrl + +</kbd>
                            </div>
                            <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
                                <span className="text-gray-300">הקטנת טקסט</span>
                                <kbd className="bg-gray-700 px-2 py-1 rounded text-sm text-white">Ctrl + -</kbd>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Phone className="w-6 h-6 text-teal-400" />
                            <h2 className="text-2xl font-bold text-white">נתקלתם בבעיית נגישות?</h2>
                        </div>
                        <p className="text-gray-300 mb-4">
                            אם נתקלתם בבעית נגישות באתר או יש לכם הצעות לשיפור, נשמח לשמוע מכם:
                        </p>
                        <div className="text-gray-400">
                            <p><strong className="text-white">רכז נגישות:</strong> גיא נגר</p>
                            <p><strong className="text-white">טלפון:</strong> 052-482-3435</p>
                            <p><strong className="text-white">אימייל:</strong> accessibility@motogar.co.il</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
