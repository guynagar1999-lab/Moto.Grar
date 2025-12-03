'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { generateWhatsAppLink } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'שלום! אני בוט MotoGrar 🤖\n\nאני כאן לעזור לך עם שירותי גרירה וחילוץ. מה תרצה לדעת?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const businessPhone = '0524823435'

  const quickReplies = [
    'מחירי שירותים',
    'זמני הגעה',
    'אזורי כיסוי',
    'צור קשר'
  ]

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Emergency keywords
    if (message.includes('חירום') || message.includes('מיידי') || message.includes('דחוף')) {
      return `🚨 שירות חירום זמין 24/7!\n\nהתקשר עכשיו: 052-482-3435\n\nאנחנו מגיעים מהר לכל מקום בארץ עם ציוד מתמחה לחילוץ אופנועים, ATV ו-RZR/UTV.`
    }

    // Price inquiries
    if (message.includes('מחיר') || message.includes('עלות') || message.includes('כמה')) {
      if (message.includes('אופנוע')) {
        return `מחירי גרירת אופנועים:\n• חילוץ משטחים: ₪250-₪550\n• גרירה: ₪150-₪350\n• הובלה: ₪15-₪25 לק״מ\n\nצור קשר לתמחור מדויק!`
      }
      if (message.includes('atv') || message.includes('טרקטורון')) {
        return `מחירי גרירת ATV:\n• חילוץ משטחים: ₪350-₪650\n• גרירה: ₪250-₪450\n• הובלה: ₪20-₪35 לק״מ\n\nמותאם לציוד כבד ומשטחים.`
      }
      if (message.includes('rzr') || message.includes('ראזר')) {
        return `מחירי גרירת RZR/UTV:\n• חילוץ משטחים: ₪450-₪750\n• גרירה: ₪350-₪550\n• הובלה: ₪25-₪40 לק״מ\n\nציוד מיוחד לכלי רב-נוסעים.`
      }
      return `המחירים משתנים לפי סוג הרכב והשירות:\n• אופנועים: ₪150-₪550\n• ATV: ₪250-₪650\n• RZR/UTV: ₪350-₪750\n\nצור קשר לקבלת הצעת מחיר מדויקת!`
    }

    // Location inquiries
    if (message.includes('איפה') || message.includes('אזור') || message.includes('כיסוי')) {
      return `אנחנו פועלים בכל רחבי הארץ!\n\n📍 כיסוי ארצי מלא\n⏱️ זמן הגעה ממוצע: 15-45 דקות\n🕐 זמינות 24/7\n\nמתמחים בחילוץ אופנועים, ATV ו-RZR/UTV מכל מקום.`
    }

    // Time inquiries
    if (message.includes('זמן') || message.includes('כמה זמן') || message.includes('מתי')) {
      return `זמני הגעה משתנים לפי המיקום:\n\n🚀 שירות חירום: 10-20 דקות\n🏍️ גרירת אופנועים: 15-30 דקות\n🚜 חילוץ ATV/RZR: 20-45 דקות\n\nאנחנו זמינים 24/7 כולל שבתות וחגים!`
    }

    // Equipment inquiries
    if (message.includes('ציוד') || message.includes('מיוחד') || message.includes('כלים')) {
      return `יש לנו ציוד מתמחה לכל סוגי הרכבים:\n\n🏍️ אופנועים: משאיות מיוחדות עם רמפות\n🚜 ATV: ציוד כבד לחילוץ משטחים\n🏎️ RZR/UTV: משאיות עם הרמה הידראולית\n\nכל הציוד מבוטח ומתוחזק מקצועית.`
    }

    // Contact inquiries
    if (message.includes('צור קשר') || message.includes('התקשר') || message.includes('טלפון')) {
      return `צור קשר איתנו עכשיו:\n\n📞 טלפון: 052-482-3435\n👤 בעלים: גיא נגר\n💬 WhatsApp: ישלח לך הודעה ישירה\n\nאנחנו זמינים 24/7!`
    }

    // Reviews inquiries
    if (message.includes('ביקורת') || message.includes('חוות דעת') || message.includes('לקוחות')) {
      return `לקריאת ביקורות מלקוחותינו, לחץ על הכפתור למטה:`
    }

    // Default response
    return `שלום! אני כאן כדי לעזור לך עם שירותי MotoGrar.\n\nאנחנו מתמחים בגרירה וחילוץ:\n• אופנועים\n• ATV וטרקטורונים\n• RZR וכלי רב-נוסעים\n\nמה אתה צריך עזרה איתו?`
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `msg-${messages.length + 1}`,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: `msg-${messages.length + 2}`,
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-linear-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg neon-glow"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 left-6 w-80 max-w-[calc(100vw-3rem)] z-50"
            >
              <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 shadow-2xl">
                {/* Header */}
                <CardHeader className="border-b border-orange-500/20 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-sm moto-gradient-text">בוט MotoGrar</CardTitle>
                        <p className="text-xs text-green-400">מחובר</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="p-0">
                  <div className="h-80 overflow-y-auto p-4 space-y-3">
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                            message.sender === 'user'
                              ? 'bg-linear-to-r from-orange-500 to-red-600 text-white'
                              : 'bg-gray-700 text-gray-100'
                          }`}>
                            <p className="whitespace-pre-line">{message.text}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString('he-IL', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-700 rounded-lg px-3 py-2">
                          <div className="flex space-x-1 space-x-reverse">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Quick Replies */}
                  {messages.length === 1 && (
                    <div className="px-4 pb-2">
                      <p className="text-xs text-gray-400 mb-2 text-center">שאלות נפוצות:</p>
                      <div className="flex flex-wrap gap-1">
                        {quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs px-2 py-1 h-auto border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="border-t border-orange-500/20 p-4">
                    <div className="flex space-x-2 space-x-reverse">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="הקלד את השאלה שלך..."
                        className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 text-sm"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        size="sm"
                        className="neon-glow"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Contact Options */}
                    <div className="flex justify-center space-x-2 space-x-reverse mt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                        className="text-xs px-2 py-1 h-auto border-green-500/30 text-green-400 hover:bg-green-500/10"
                      >
                        📞 התקשר
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני צריך עזרה עם גרירת רכב'), '_blank')}
                        className="text-xs px-2 py-1 h-auto border-green-500/30 text-green-400 hover:bg-green-500/10"
                      >
                        💬 WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}