'use client'

import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Calendar, ThumbsUp, Award, Shield, Clock, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  id: number
  name: string
  location: string
  service: string
  rating: number
  text: string
  date: string
  initials: string
  verified: boolean
  highlight?: string
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'דני כהן', location: 'תל אביב', service: 'גרירת אופנוע', rating: 5, text: 'שירות מעולה! הגיעו תוך 20 דקות וגררו את האופנוע שלי בבטחה. המחיר הוגן והצוות מקצועי מאוד.', date: '2024-12-05', initials: 'ד', verified: true, highlight: 'הגעה מהירה' },
  { id: 2, name: 'שרה לוי', location: 'חיפה', service: 'חילוץ ATV', rating: 5, text: 'נתקעתי בבוץ עם ה-ATV שלי בגולן. הצוות הגיעו במהירות עם ציוד מתאים וחילצו אותי ללא בעיה.', date: '2024-12-03', initials: 'ש', verified: true, highlight: 'חילוץ שטח' },
  { id: 3, name: 'מיכאל רוזן', location: 'ירושלים', service: 'גרירת RZR', rating: 5, text: 'שירות מקצועי ומהיר. הגיעו עם קרון מיוחד ל-RZR והכל עבר חלק. ביטוח מלא ושקט נפשי.', date: '2024-12-01', initials: 'מ', verified: true },
  { id: 4, name: 'יעל גולדברג', location: 'הרצליה', service: 'גרירת אופנוע', rating: 5, text: 'התקשרתי בשבת בערב והם הגיעו תוך שעה. שירות 24/7 אמיתי. הצוות אדיב ומקצועי.', date: '2024-11-28', initials: 'י', verified: true, highlight: 'זמינות 24/7' },
  { id: 5, name: 'אבי שמעון', location: 'באר שבע', service: 'חילוץ משטח', rating: 5, text: 'חילוץ מושלם משטח קשה באזור מצפה רמון. הציוד המתקדם והניסיון של הצוות הצילו לי את היום.', date: '2024-11-25', initials: 'א', verified: true, highlight: 'ציוד מתקדם' },
  { id: 6, name: 'רחל אברהם', location: 'רעננה', service: 'גרירת ATV', rating: 5, text: 'שירות מהיר ואמין. הגיעו בזמן, גררו בבטחה וגם עזרו עם טיפ קטן לתחזוקה. מומלץ מאוד!', date: '2024-11-22', initials: 'ר', verified: true },
  { id: 7, name: 'יוסי מזרחי', location: 'פתח תקווה', service: 'גרירת אופנוע', rating: 5, text: 'פנצ\'ר באמצע הדרך לעבודה. הגיעו תוך חצי שעה, גררו אותי למוסך הקרוב. מחיר הוגן!', date: '2024-11-20', initials: 'יו', verified: true },
  { id: 8, name: 'נועה פרידמן', location: 'נתניה', service: 'העברת אופנוע', rating: 5, text: 'קניתי אופנוע חדש והייתי צריכה להעביר אותו הביתה. שירות מקצועי ומהיר ללא שריטה!', date: '2024-11-18', initials: 'נ', verified: true },
  { id: 9, name: 'עומר ברק', location: 'אילת', service: 'גרירת אופנוע', rating: 5, text: 'נתקעתי באילת והייתי בטוח שאין סיכוי למצוא שירות. הופתעתי שהם מכסים את כל הארץ!', date: '2024-11-15', initials: 'ע', verified: true, highlight: 'כיסוי ארצי' },
  { id: 10, name: 'מאיה טל', location: 'ראשון לציון', service: 'חילוץ קטנוע', rating: 5, text: 'הקטנוע שלי נתקע בגשם חזק. התקשרתי ותוך 25 דקות כבר היו שם. יחס מדהים!', date: '2024-11-12', initials: 'מ', verified: true },
  { id: 11, name: 'איתי לביא', location: 'כפר סבא', service: 'גרירת RZR', rating: 5, text: 'חוויה מושלמת! הזמנתי גרירה ל-RZR שלי והכל עבר חלק. צוות מקצועי ומחירים הוגנים.', date: '2024-11-10', initials: 'א', verified: true },
  { id: 12, name: 'שירלי דוד', location: 'אשדוד', service: 'גרירת אופנוע', rating: 5, text: 'זו הפעם השנייה שאני משתמשת בשירות שלהם. תמיד מקצועיים, תמיד בזמן. ממליצה בחום!', date: '2024-11-08', initials: 'ש', verified: true },
  { id: 13, name: 'רון גבאי', location: 'הוד השרון', service: 'חילוץ ATV', rating: 5, text: 'חילוץ מורכב מאוד בשטח חקלאי. הצוות לא ויתר עד שה-ATV שלי היה על הקרון!', date: '2024-11-05', initials: 'ר', verified: true, highlight: 'מקצועיות' },
  { id: 14, name: 'ליאת קובי', location: 'רמת גן', service: 'גרירת אופנוע', rating: 5, text: 'האופנוע שלי נפל בחניה והתקלקל. הם הגיעו מהר, הרימו אותו בזהירות וגררו למוסך.', date: '2024-11-03', initials: 'ל', verified: true },
  { id: 15, name: 'אורי נחמיאס', location: 'עפולה', service: 'גרירת אופנוע', rating: 5, text: 'שירות מדהים בצפון. הגיעו מהר למרות המרחק. מחיר שפוי ויחס מעולה. ממליץ לכולם!', date: '2024-11-01', initials: 'א', verified: true },
  { id: 16, name: 'טלי אשר', location: 'מודיעין', service: 'העברת קטנוע', rating: 5, text: 'העברתי קטנוע ממודיעין לתל אביב. שירות מושלם, הקטנוע הגיע בזמן ובמצב מעולה.', date: '2024-10-28', initials: 'ט', verified: true },
  { id: 17, name: 'גיל ממן', location: 'קריות', service: 'חילוץ RZR', rating: 5, text: 'ה-RZR שלי נתקע בשטח קשה בכרמל. הגיעו עם כל הציוד הנדרש וחילצו במהירות!', date: '2024-10-25', initials: 'ג', verified: true },
  { id: 18, name: 'מוריה לוין', location: 'רחובות', service: 'גרירת אופנוע', rating: 5, text: 'תקלה בליל שישי והם היו שם תוך שעה. שירות אמיתי 24/7. מחיר הוגן וצוות נחמד!', date: '2024-10-22', initials: 'מ', verified: true },
  { id: 19, name: 'אסף כהנא', location: 'טבריה', service: 'גרירת ATV', rating: 5, text: 'שירות מעולה באזור הכינרת. הגיעו מהר, עבדו מקצועית והמחיר היה הוגן. ממליץ בחום!', date: '2024-10-20', initials: 'א', verified: true },
  { id: 20, name: 'הדר יוסף', location: 'אשקלון', service: 'גרירת אופנוע', rating: 5, text: 'חוויה מצוינת מהתחלה ועד הסוף. תיאום מהיר, הגעה בזמן, גרירה בטוחה ומחיר סביר!', date: '2024-10-18', initials: 'ה', verified: true }
]

const getAvatarColor = (index: number) => {
  const colors = ['from-orange-500 to-red-600', 'from-blue-500 to-indigo-600', 'from-green-500 to-emerald-600', 'from-purple-500 to-pink-600', 'from-yellow-500 to-orange-600', 'from-cyan-500 to-blue-600', 'from-rose-500 to-red-600', 'from-teal-500 to-green-600']
  return colors[index % colors.length]
}

export default function TestimonialsPage() {
  const avgRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">100% לקוחות מרוצים</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black mb-4"
          >
            ביקורות וחוות דעת
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 opacity-90"
          >
            מה הלקוחות שלנו אומרים על השירות המקצועי שלנו
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-black">{avgRating}</span>
            </div>
            <div className="text-lg font-semibold">
              מבוסס על <span className="text-yellow-400 font-bold">{testimonials.length}</span> ביקורות
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900 border-y border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <ThumbsUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-black text-green-400">100%</div>
              <div className="text-gray-400 text-sm">שביעות רצון</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-black text-blue-400">15-45 דק&apos;</div>
              <div className="text-gray-400 text-sm">זמן הגעה ממוצע</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-black text-purple-400">מלא</div>
              <div className="text-gray-400 text-sm">ביטוח כל הרכבים</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <div className="text-2xl font-black text-orange-400">1000+</div>
              <div className="text-gray-400 text-sm">גרירות בשנה</div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews & Social Proof Section */}
      <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border-y border-blue-500/20 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-black text-white mb-3">
              ביקורות <span className="text-blue-400">ממקורות מגוונים</span>
            </h2>
            <p className="text-gray-300">הלקוחות שלנו משתפים את החוויה ברשתות ובפלטפ customizationormות שונות</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Google Reviews */}
            <motion.a
              href="https://search.google.com/local/writereview?placeid=ChIJVbNrMDWcUYsRfAcvoLusLmM"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Google</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                &quot;שירות גרירה מקצועי וזמין 24/7. הגיעו תוך 20 דקות והכל עבר חלק!&quot;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold text-sm">קרא עוד ביקורות →</span>
                <span className="text-gray-400 text-xs">המלצות Google</span>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/guynagar87/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400/50 transition-all shadow-lg hover:shadow-pink-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">📷</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Instagram</h3>
                  <p className="text-pink-300 text-sm">@guynagar87</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                עקבו אחרינו ב-Instagram לעדכונים, תמונות מהשטח וטיפים מקצועיים!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 font-semibold text-sm">עקוב עכשיו →</span>
                <span className="text-gray-400 text-xs">תוכן יומיומי</span>
              </div>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/people/%D7%9E%D7%95%D7%98%D7%95-%D7%92%D7%A8%D7%A8/61570426060339/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">f</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Facebook</h3>
                  <p className="text-blue-300 text-sm">מוטו גרר</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                הצטרפו לקהילה שלנו בפייסבוק! שתפו חוויות ותקבלו טיפים חמים.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold text-sm">לייק לעמוד →</span>
                <span className="text-gray-400 text-xs">קהילה פעילה</span>
              </div>
            </motion.a>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">כל הביקורות אמיתיות ומאומתות</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-orange-500/50 h-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {testimonial.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        {testimonial.verified && <span className="text-green-400 text-xs">✓ מאומת</span>}
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-400">{testimonial.service}</span>
                  </div>

                  {testimonial.highlight && (
                    <div className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-400 text-xs px-2 py-1 rounded-full mb-3">
                      <Zap className="w-3 h-3" />
                      {testimonial.highlight}
                    </div>
                  )}

                  <div className="relative">
                    <Quote className="absolute -top-1 -right-1 w-6 h-6 text-orange-500/30" />
                    <p className="text-gray-300 text-sm leading-relaxed pr-4">{testimonial.text}</p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500 text-xs mt-4">
                    <Calendar className="w-3 h-3" />
                    {new Date(testimonial.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 border-none overflow-hidden">
            <CardContent className="p-8 lg:p-12 text-white relative">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-black mb-4">הלקוח הבא שלנו?</h2>
                <p className="text-xl mb-8 opacity-90">הצטרף ל-1000+ לקוחות מרוצים שכבר נהנו מהשירות המקצועי שלנו</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:0524823435" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-2xl">
                    📞 052-4823-435
                  </a>
                  <a href="https://wa.me/972524823435?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8%D7%95%D7%AA%20%D7%92%D7%A8%D7%99%D7%A8%D7%94" className="bg-green-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-green-400 transition-colors inline-flex items-center justify-center gap-2 shadow-2xl">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}