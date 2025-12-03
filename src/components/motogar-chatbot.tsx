'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Send, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const knowledgeBase = {
  services: {
    motorcycle: {
      towing: 'גרירת אופנועים: ₪150-₪350',
      roadside: 'עזרה בדרך: ₪250-₪450',
      recovery: 'חילוץ משטחים: ₪350-₪650'
    },
    atv: {
      towing: 'גרירת ATV: ₪250-₪450',
      recovery: 'חילוץ משטחים: ₪450-₪750'
    },
    rzr: {
      towing: 'גרירת RZR/UTV: ₪350-₪550',
      recovery: 'חילוץ משטחים: ₪550-₪850'
    }
  },
  coverage: {
    areas: 'כיסוי ארצי מלא - צפון, מרכז, דרום',
    response: 'זמן הגעה ממוצע: 15-45 דקות',
    hours: 'זמינות 24/7 כולל שבתות וחגים'
  },
  contact: {
    owner: 'גיא נגר',
    phone: '0524823435'
  },
  quickActions: {
    call: { text: '📞 התקשר עכשיו', action: 'call' },
    whatsapp: { text: '💬 WhatsApp', action: 'whatsapp' },
    services: { text: '📋 שירותים', action: 'services' },
    testimonials: { text: '⭐ ביקורות', action: 'testimonials' }
  }
}

export default function MotoGrarChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `שלום! אני בוט MotoGrar 🤖

אני כאן לעזור לך עם:
• 💰 מחירי שירותים
• 📍 אזורי כיסוי
• ⏰ זמני הגעה
• 📞 צור קשר
• ⭐ ביקורות לקוחות

מה תרצה לדעת?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): { text: string; quickActions?: typeof knowledgeBase.quickActions[keyof typeof knowledgeBase.quickActions][] } => {
    const message = userMessage.toLowerCase()

    // Advanced context analysis
    const context = {
      emergency: message.includes('חירום') || message.includes('מיידי') || message.includes('דחוף') || message.includes('בעיה') || message.includes('תקלה') || message.includes('לא עובד'),
      location: message.includes('איפה') || message.includes('מיקום') || message.includes('עיר') || message.includes('רחוב') || message.includes('כביש'),
      price: message.includes('מחיר') || message.includes('עלות') || message.includes('כמה') || message.includes('שקל') || message.includes('יקר'),
      vehicle: {
        motorcycle: message.includes('אופנוע') || message.includes('קטנוע'),
        atv: message.includes('atv') || message.includes('טרקטורון') || message.includes('quad'),
        rzr: message.includes('rzr') || message.includes('ראזר') || message.includes('utv')
      },
      time: message.includes('זמן') || message.includes('מתי') || message.includes('מתי מגיעים') || message.includes('כמה זמן'),
      contact: message.includes('צור קשר') || message.includes('טלפון') || message.includes('פלאפון') || message.includes('התקשר'),
      reviews: message.includes('ביקורת') || message.includes('חוות דעת') || message.includes('לקוחות') || message.includes('דירוג'),
      services: message.includes('שירות') || message.includes('מה עושים') || message.includes('מה מציעים'),
      greeting: message.includes('שלום') || message.includes('היי') || message.includes('מה קורה'),
      thanks: message.includes('תודה') || message.includes('תודות') || message.includes('מקסים')
    }

    // Intelligent emergency response
    if (context.emergency) {
      let response = `🚨 **שירות חירום זמין 24/7!**\n\n`

      if (context.location) {
        response += `📍 **כיסוי ארצי מלא** - צפון, מרכז, דרום, ירושלים והסביבה\n\n`
      }

      if (context.vehicle.motorcycle || context.vehicle.atv || context.vehicle.rzr) {
        response += `🏍️ **ציוד מתמחה** לחילוץ אופנועים, ATV ו-RZR/UTV\n\n`
      }

      if (context.time) {
        response += `⚡ **זמן הגעה ממוצע: 15-45 דקות**\n\n`
      }

      response += `📞 **התקשר עכשיו:** ${formatPhone('0524823435')}\n\n`
      response += `💬 **או שלח הודעה לוואטסאפ**\n\n`
      response += `🔧 **אנחנו כאן לעזור לך 24/7!**`

      return {
        text: response,
        quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.whatsapp]
      }
    }

    // Price inquiries
    if (message.includes('מחיר') || message.includes('עלות') || message.includes('כמה')) {
      if (message.includes('אופנוע')) {
        return {
          text: `מחירי גרירת אופנועים:
${knowledgeBase.services.motorcycle.towing}
${knowledgeBase.services.motorcycle.roadside}

צור קשר לתמחור מדויק!`,
          quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.whatsapp, knowledgeBase.quickActions.services]
        }
      }
      if (message.includes('atv') || message.includes('טרקטורון')) {
        return {
          text: `מחירי גרירת ATV:
${knowledgeBase.services.atv.towing}
${knowledgeBase.services.atv.recovery}

צור קשר לתמחור מדויק!`,
          quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.whatsapp]
        }
      }
      if (message.includes('rzr') || message.includes('ראזר')) {
        return {
          text: `מחירי גרירת RZR/UTV:
${knowledgeBase.services.rzr.towing}
${knowledgeBase.services.rzr.recovery}

צור קשר לתמחור מדויק!`,
          quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.whatsapp]
        }
      }
      return {
        text: `המחירים משתנים לפי סוג הרכב והשירות:
• אופנועים: ₪150-₪450
• ATV: ₪250-₪650
• RZR/UTV: ₪350-₪750

צור קשר לקבלת הצעת מחיר מדויקת!`,
        quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.whatsapp]
      }
    }

    // Location/Time inquiries
    if (message.includes('איפה') || message.includes('אזור') || message.includes('כיסוי')) {
      return {
        text: `${knowledgeBase.coverage.areas}

${knowledgeBase.coverage.response}

${knowledgeBase.coverage.hours}

מתמחים בחילוץ אופנועים, ATV ו-RZR/UTV מכל מקום.`,
        quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.services]
      }
    }

    // Contact inquiries
    if (message.includes('צור קשר') || message.includes('טלפון') || message.includes('פלאפון')) {
      return {
        text: `צור קשר עם ${knowledgeBase.contact.owner}:`,
        quickActions: [knowledgeBase.quickActions.call, knowledgeBase.quickActions.whatsapp]
      }
    }

    // Reviews/Testimonials
    if (message.includes('ביקורת') || message.includes('חוות דעת') || message.includes('לקוחות')) {
      return {
        text: `לקריאת ביקורות מלקוחותינו, לחץ על הכפתור למטה:`,
        quickActions: [knowledgeBase.quickActions.testimonials]
      }
    }


    // Default response with quick actions
    return {
      text: `שלום! אני בוט MotoGrar 🤖

אני כאן לעזור לך עם:
• 💰 מחירי שירותים
• 📍 אזורי כיסוי
• ⏰ זמני הגעה
• 📞 צור קשר
• ⭐ ביקורות לקוחות

מה תרצה לדעת?`,
      quickActions: [
        knowledgeBase.quickActions.services,
        knowledgeBase.quickActions.testimonials,
        knowledgeBase.quickActions.call
      ]
    }
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
      const response = generateResponse(inputValue)
      const botMessage: Message = {
        id: `msg-${messages.length + 2}`,
        text: response.text,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'call':
        window.open(`tel:0524823435`, '_blank')
        break
      case 'whatsapp':
        window.open(generateWhatsAppLink('0524823435', 'שלום, אני צריך עזרה עם גרירת רכב'), '_blank')
        break
      case 'services':
        window.location.href = '/#services'
        break
      case 'testimonials':
        window.location.href = '/testimonials'
        break
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center mb-4"
          >
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center neon-glow">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4">
            בוט
            <span className="moto-gradient-text"> MotoGrar</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            עוזר וירטואלי זמין 24/7 לעזור לך עם כל השאלות על שירותי הגרירה והחילוץ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="chatbot-container h-[600px] flex flex-col">
            {/* Header */}
            <CardHeader className="border-b border-orange-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">בוט MotoGrar</CardTitle>
                    <CardDescription>זמין 24/7 לעזור לך</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>מחובר</span>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 space-x-reverse max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-linear-to-br from-orange-500 to-red-600' : 'bg-linear-to-br from-blue-500 to-cyan-600'}`}>
                        {message.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      <div className={`rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-linear-to-r from-orange-500 to-red-600 text-white' : 'bg-gray-700 text-gray-100'}`}>
                        <p className="whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString('he-IL', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
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
                  <div className="bg-gray-700 rounded-lg px-4 py-2">
                    <div className="flex space-x-1 space-x-reverse">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input */}
            <div className="border-t border-orange-500/20 p-4">
              <div className="flex space-x-2 space-x-reverse">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="הקלד את השאלה שלך..."
                  className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="neon-glow"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Contact Options */}
              <div className="flex justify-center space-x-4 space-x-reverse mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction('call')}
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                >
                  <Phone className="w-4 h-4 ml-1" />
                  התקשר
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction('whatsapp')}
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                >
                  <MessageCircle className="w-4 h-4 ml-1" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}