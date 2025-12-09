import { Metadata } from 'next'
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'תנאי שימוש | MotoGrar',
    description: 'תנאי השימוש באתר ובשירותי הגרירה של MotoGrar - גרר אלפא',
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        תנאי <span className="text-blue-500">שימוש</span>
                    </h1>
                    <p className="text-gray-400">עודכן לאחרונה: דצמבר 2024</p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <Shield className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-white mt-0 mb-2">קבלת התנאים</h2>
                                <p className="text-gray-400 m-0">
                                    בעצם השימוש באתר זה ובשירותי הגרירה של MotoGrar (להלן: &quot;החברה&quot;), אתה מסכים לתנאי שימוש אלה במלואם.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">1</span>
                            הגדרות
                        </h2>
                        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-gray-300">
                            <ul className="space-y-2 list-none p-0 m-0">
                                <li><strong className="text-white">&quot;האתר&quot;</strong> - אתר האינטרנט של MotoGrar וכל הדפים הקשורים אליו.</li>
                                <li><strong className="text-white">&quot;השירותים&quot;</strong> - שירותי גרירה, חילוץ והעברת כלי רכב דו-גלגליים.</li>
                                <li><strong className="text-white">&quot;הלקוח&quot;</strong> - כל אדם או גוף המשתמש בשירותי החברה.</li>
                                <li><strong className="text-white">&quot;כלי הרכב&quot;</strong> - אופנועים, קטנועים, טרקטורונים, ATV, RZR/UTV וכלים דומים.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">2</span>
                            תיאור השירותים
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>החברה מספקת שירותי גרירה וחילוץ מקצועיים לכלי רכב דו-גלגליים, הכוללים:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 bg-gray-900/30 p-3 rounded-lg border border-gray-800">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>גרירת אופנועים מכל הסוגים</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-900/30 p-3 rounded-lg border border-gray-800">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>חילוץ משטח ותקלות דרך</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-900/30 p-3 rounded-lg border border-gray-800">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>העברות בין מוסכים</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-900/30 p-3 rounded-lg border border-gray-800">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>שירות 24/7 בכל הארץ</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">3</span>
                            אחריות החברה
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>החברה מתחייבת לספק שירות מקצועי ואמין, ובכלל זה:</p>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>טיפול זהיר בכלי הרכב של הלקוח</li>
                                <li>ביטוח סחורה בהעברה לכל כלי רכב</li>
                                <li>הגעה בזמן סביר למיקום הלקוח</li>
                                <li>שימוש בציוד מקצועי ומאושר</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">4</span>
                            אחריות הלקוח
                        </h2>
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
                                <div className="text-gray-300">
                                    <p className="font-medium text-yellow-400 mb-2">הלקוח מתחייב:</p>
                                    <ul className="list-disc pr-4 space-y-1 text-sm">
                                        <li>לספק מידע מדויק על מיקום ומצב הרכב</li>
                                        <li>להודיע על כל נזק קיים בכלי הרכב טרם הגרירה</li>
                                        <li>להיות נוכח או לשלוח נציג מוסמך בעת האיסוף/מסירה</li>
                                        <li>לשלם את התשלום המוסכם במועד</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">5</span>
                            מדיניות ביטולים
                        </h2>
                        <div className="text-gray-300 space-y-4">
                            <p>ניתן לבטל הזמנה ללא עלות עד שהגרר יוצא לדרך. לאחר מכן:</p>
                            <ul className="list-disc pr-6 space-y-2">
                                <li>ביטול לאחר יציאה לדרך - תשלום עלות נסיעה</li>
                                <li>ביטול לאחר הגעה למיקום - תשלום מלא</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 text-sm font-bold">6</span>
                            יצירת קשר
                        </h2>
                        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-gray-300">
                            <p>לשאלות בנוגע לתנאי שימוש אלה, ניתן לפנות אלינו:</p>
                            <p className="mt-2">
                                <strong className="text-white">טלפון:</strong> 052-482-3435<br />
                                <strong className="text-white">אימייל:</strong> info@motogar.co.il
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
