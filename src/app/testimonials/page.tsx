'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

import type { Metadata } from 'next'
import { generateSEO, pageSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO(pageSEO.testimonials)

const testimonials = [
  {
    id: 1,
    name: 'דני כהן',
    service: 'גרירת אופנוע',
    rating: 5,
    text: 'שירות מעולה! הגיעו תוך 20 דקות וגררו את האופנוע שלי בבטחה. המחיר הוגן והצוות מקצועי מאוד.',
    date: '2024-11-15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'שרה לוי',
    service: 'חילוץ ATV',
    rating: 5,
    text: 'נתקעתי בבוץ עם ה-ATV שלי. גיא והצוות הגיעו במהירות עם ציוד מתאים וחילצו אותי ללא בעיה. מומלץ בחום!',
    date: '2024-11-10',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'מיכאל רוזן',
    service: 'גרירת RZR',
    rating: 5,
    text: 'שירות מקצועי ומהיר. הגיעו עם קרון מיוחד ל-RZR והכל עבר חלק. ביטוח מלא ושקט נפשי. תודה רבה!',
    date: '2024-11-05',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'יעל גולדברג',
    service: 'גרירת אופנוע',
    rating: 5,
    text: 'התקשרתי בשבת בערב והם הגיעו תוך שעה. שירות 24/7 אמיתי. הצוות אדיב ומקצועי.',
    date: '2024-10-28',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'אבי שמעון',
    service: 'חילוץ משטח',
    rating: 5,
    text: 'חילוץ מושלם משטח קשה. הציוד המתקדם והניסיון של הצוות הצילו לי את היום. שירות ברמה הגבוהה ביותר.',
    date: '2024-10-20',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'רחל אברהם',
    service: 'גרירת ATV',
    rating: 5,
    text: 'שירות מהיר ואמין. הגיעו בזמן, גררו בבטחה וגם עזרו עם טיפ קטן לתחזוקה. מומלץ מאוד!',
    date: '2024-10-15',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-orange-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-4"
          >
            ביקורות וחוות דעת
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            מה הלקוחות שלנו אומרים על השירות
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center gap-4"
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0/5</span>
            <span className="text-lg">({testimonials.length} ביקורות)</span>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="w-8 h-8 text-orange-400 mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover mr-3 border-2 border-orange-500/30"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {new Date(testimonial.date).toLocaleDateString('he-IL')}
                      </p>
                    </div>
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
          <Card className="bg-linear-to-br from-orange-600 to-red-600 border-none">
            <CardContent className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">הלקוח הבא שלנו?</h2>
              <p className="text-xl mb-6">
                הצטרף למאות לקוחות מרוצים שכבר נהנו מהשירות המקצועי שלנו
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:0524823435"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  התקשר עכשיו
                </a>
                <a
                  href={`https://wa.me/972524823435?text=${encodeURIComponent('שלום, אני מעוניין בשירות גרירה')}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}