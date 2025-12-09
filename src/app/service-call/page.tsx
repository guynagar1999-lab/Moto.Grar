'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MessageCircle, MapPin, User, Upload, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { generateWhatsAppLink, sanitizeInput, sanitizePhone, limitLength } from '@/lib/utils'
import Head from 'next/head'

interface ServiceRequest {
  id: string
  customerName: string
  phone: string
  email: string
  vehicleType: string
  location: string
  description: string
  images: File[]
  ipAddress: string
  sessionId: string
  timestamp: Date
  status: 'pending' | 'contacted' | 'in_progress' | 'completed'
}

interface FormData {
  customerName: string
  phone: string
  email: string
  vehicleType: string
  location: string
  description: string
}


export default function ServiceCallPage() {
  const [images, setImages] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [ipAddress, setIpAddress] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    defaultValues: {
      customerName: '',
      phone: '',
      email: '',
      vehicleType: '',
      location: '',
      description: ''
    }
  })

  const businessPhone = '0524823435'
  const businessEmail = 'contact@motogar.co.il'

  useEffect(() => {
    // Generate session ID
    const session = crypto.randomUUID()
    setSessionId(session)

    // Get IP address (client-side approximation)
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress('unknown'))
  }, [])

  // Israeli phone validation - must start with 05X and have 10 digits total
  const phoneRegex = /^0[5-9]\d{8}$/
  // Security: Maximum input lengths
  const MAX_NAME_LENGTH = 100
  const MAX_EMAIL_LENGTH = 254
  const MAX_LOCATION_LENGTH = 200
  const MAX_DESCRIPTION_LENGTH = 1000

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    // Security: Validate file type strictly and limit size (10MB max per image)
    const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
    const validImages = files.filter(file =>
      file.type.startsWith('image/') &&
      file.size <= MAX_FILE_SIZE &&
      ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)
    )
    setImages(prev => [...prev, ...validImages].slice(0, 5)) // Max 5 images
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Security: Sanitize all user inputs before processing
      const sanitizedData = {
        customerName: limitLength(sanitizeInput(data.customerName), MAX_NAME_LENGTH),
        phone: sanitizePhone(data.phone),
        email: limitLength(data.email.toLowerCase().trim(), MAX_EMAIL_LENGTH),
        vehicleType: sanitizeInput(data.vehicleType),
        location: limitLength(sanitizeInput(data.location), MAX_LOCATION_LENGTH),
        description: limitLength(sanitizeInput(data.description), MAX_DESCRIPTION_LENGTH)
      }

      const requestData: ServiceRequest = {
        id: crypto.randomUUID(),
        ...sanitizedData,
        images,
        ipAddress,
        sessionId,
        timestamp: new Date(),
        status: 'pending'
      }

      // Send to WhatsApp with sanitized data
      const whatsappMessage = `שלום, בקשת שירות חדשה:

👤 שם: ${sanitizedData.customerName}
📞 טלפון: ${sanitizedData.phone}
📧 אימייל: ${sanitizedData.email}
🚗 סוג רכב: ${sanitizedData.vehicleType}
📍 מיקום: ${sanitizedData.location}
📝 תיאור: ${sanitizedData.description}

Session ID: ${sessionId}
IP: ${ipAddress}
זמן: ${new Date().toLocaleString('he-IL')}`

      window.open(generateWhatsAppLink(businessPhone, whatsappMessage), '_blank')

      // Send email (server-side would be implemented here)
      await sendEmail(requestData)

      // Store in localStorage for session persistence
      const existingRequests = JSON.parse(localStorage.getItem('serviceRequests') || '[]')
      existingRequests.push(requestData)
      localStorage.setItem('serviceRequests', JSON.stringify(existingRequests))

      setSubmitted(true)

      // Reset form
      reset()
      setImages([])

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('אירעה שגיאה בשליחת הטופס. אנא נסה שוב.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendEmail = async (requestData: ServiceRequest) => {
    // In production, this would call a backend API
    // For now, we'll use mailto as a fallback
    const subject = `בקשת שירות חדשה - ${requestData.customerName}`
    const body = `
שלום,

בקשת שירות חדשה התקבלה:

פרטי הלקוח:
שם: ${requestData.customerName}
טלפון: ${requestData.phone}
אימייל: ${requestData.email}

פרטי השירות:
סוג רכב: ${requestData.vehicleType}
מיקום: ${requestData.location}
תיאור: ${requestData.description}

Session ID: ${requestData.sessionId}
IP: ${requestData.ipAddress}
זמן: ${requestData.timestamp.toLocaleString('he-IL')}

בברכה,
מערכת MotoGrar
    `.trim()

    // Open mailto link
    window.open(`mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)

    return Promise.resolve()
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="bg-linear-to-br from-green-900 to-green-800 border-green-500/30">
              <CardContent className="p-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-white mb-4">הבקשה נשלחה בהצלחה!</h1>
                <p className="text-green-200 mb-6">
                  הבקשה שלך התקבלה ונשלחה לוואטסאפ שלנו. נחזור אליך תוך 5 דקות.
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open(generateWhatsAppLink(businessPhone, 'שלום, אני רוצה לבדוק את סטטוס הבקשה שלי'), '_blank')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    צור קשר בוואטסאפ
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                  >
                    חזור לדף הבית
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>קריאת שירות דחופה | MotoGrar - גרירה מיידית 24/7</title>
        <meta name="description" content="מלא פרטי קריאת שירות ונגיע אליך תוך 15-45 דקות בכל מקום בארץ. שירות גרירה דחוף לאופנועים, ATV ו-RZR/UTV עם ציוד מתמחה." />
        <meta name="keywords" content="קריאת שירות, גרירה דחופה, עזרה בדרך, חילוץ אופנועים, שירות 24/7, MotoGrar" />
        <meta property="og:title" content="קריאת שירות דחופה | MotoGrar" />
        <meta property="og:description" content="מלא פרטי קריאת שירות ונגיע אליך תוך 15-45 דקות בכל מקום בארץ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://motogar.co.il/service-call" />
        <link rel="canonical" href="https://motogar.co.il/service-call" />
      </Head>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
              קריאת
              <span className="moto-gradient-text"> שירות</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              מלא את הפרטים ונגיע אליך תוך 15-45 דקות בכל מקום בארץ
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-2xl moto-gradient-text text-center">
                  פרטי הבקשה
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  כל השדות הם חובה למעט העלאת תמונות
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Customer Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        שם מלא *
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          {...register('customerName', {
                            required: 'שם מלא הוא שדה חובה',
                            minLength: { value: 2, message: 'שם חייב להכיל לפחות 2 תווים' }
                          })}
                          className={`text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 ${errors.customerName ? 'border-red-500' : ''}`}
                          placeholder="ישראל ישראלי"
                        />
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      </div>
                      {errors.customerName && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 ml-1" />
                          {errors.customerName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        טלפון *
                      </label>
                      <div className="relative">
                        <Input
                          type="tel"
                          {...register('phone', {
                            required: 'טלפון הוא שדה חובה',
                            pattern: {
                              value: phoneRegex,
                              message: 'מספר טלפון לא תקין'
                            }
                          })}
                          className={`text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="054-1234567"
                        />
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 ml-1" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                      אימייל *
                    </label>
                    <div className="relative">
                      <Input
                        type="email"
                        {...register('email', {
                          required: 'אימייל הוא שדה חובה',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'כתובת אימייל לא תקינה'
                          }
                        })}
                        className={`text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="israel@example.com"
                      />
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 ml-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        סוג רכב *
                      </label>
                      <select
                        {...register('vehicleType', {
                          required: 'סוג רכב הוא שדה חובה'
                        })}
                        className={`w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent text-right ${errors.vehicleType ? 'border-red-500' : ''}`}
                      >
                        <option value="">בחר סוג רכב</option>
                        <option value="אופנוע">אופנוע</option>
                        <option value="ATV">ATV</option>
                        <option value="RZR/UTV">RZR/UTV</option>
                        <option value="טרקטורון">טרקטורון</option>
                        <option value="אחר">אחר</option>
                      </select>
                      {errors.vehicleType && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 ml-1" />
                          {errors.vehicleType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                        מיקום *
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          {...register('location', {
                            required: 'מיקום הוא שדה חובה',
                            minLength: { value: 3, message: 'מיקום חייב להכיל לפחות 3 תווים' }
                          })}
                          className={`text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 ${errors.location ? 'border-red-500' : ''}`}
                          placeholder="עיר, רחוב ומספר בית"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      </div>
                      {errors.location && (
                        <p className="text-red-400 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 ml-1" />
                          {errors.location.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                      תיאור הבעיה *
                    </label>
                    <Textarea
                      {...register('description', {
                        required: 'תיאור הבעיה הוא שדה חובה',
                        minLength: { value: 10, message: 'תיאור חייב להכיל לפחות 10 תווים' }
                      })}
                      className={`text-right bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 min-h-[100px] ${errors.description ? 'border-red-500' : ''}`}
                      placeholder="תאר את הבעיה ואת מצב הרכב..."
                    />
                    {errors.description && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 ml-1" />
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-right text-gray-300">
                      העלאת תמונות (אופציונלי)
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 mb-4">גרור תמונות לכאן או לחץ לבחירה</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                          בחר תמונות
                        </Button>
                      </label>
                      <p className="text-xs text-gray-500 mt-2">עד 5 תמונות, מקסימום 10MB כל אחת</p>
                    </div>

                    {/* Image Preview */}
                    {images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative">
                            <Image
                              src={URL.createObjectURL(image)}
                              alt={`תמונה ${index + 1}`}
                              width={200}
                              height={96}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Session Info */}
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Clock className="w-4 h-4 ml-2" />
                      מידע טכני (לצורכי מעקב)
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Session ID: {sessionId}</div>
                      <div>IP Address: {ipAddress}</div>
                      <div>זמן: {new Date().toLocaleString('he-IL')}</div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold neon-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                        שולח...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 ml-2" />
                        שלח בקשה מיידית
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    הבקשה תישלח לוואטסאפ ומייל. נחזור אליך תוך 5 דקות.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}