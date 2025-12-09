'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Truck,
    Clock,
    CheckCircle,
    Phone,
    MapPin,
    User,
    AlertCircle,
    Loader2,
    RefreshCw,
    MessageCircle,
    X,
    Shield,
    Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { generateWhatsAppLink } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

type ServiceStatus = 'pending' | 'approved' | 'en-route' | 'completed' | 'cancelled'

interface ServiceCall {
    id: string
    customerName: string
    phone: string
    vehicleType: string
    location: string
    description: string
    timestamp: string
    status: ServiceStatus
    eta?: string
    ownerNotes?: string
}

const statusConfig: Record<ServiceStatus, { label: string; color: string; icon: React.ElementType; bgColor: string }> = {
    pending: { label: 'ממתין לאישור', color: 'text-yellow-400', icon: Clock, bgColor: 'bg-yellow-500/20' },
    approved: { label: 'אושר - מתחילים לצאת', color: 'text-blue-400', icon: CheckCircle, bgColor: 'bg-blue-500/20' },
    'en-route': { label: 'הגרר בדרך אליך!', color: 'text-orange-400', icon: Truck, bgColor: 'bg-orange-500/20' },
    completed: { label: 'הושלם בהצלחה', color: 'text-green-400', icon: CheckCircle, bgColor: 'bg-green-500/20' },
    cancelled: { label: 'בוטל', color: 'text-red-400', icon: X, bgColor: 'bg-red-500/20' }
}

function ServiceStatusContent() {
    const searchParams = useSearchParams()
    const [serviceCall, setServiceCall] = useState<ServiceCall | null>(null)
    const [isOwnerMode, setIsOwnerMode] = useState(false)
    const [loading, setLoading] = useState(true)
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

    const businessPhone = '0524823435'
    const ownerAccessCode = searchParams.get('owner') === 'true'

    const loadServiceCall = useCallback(() => {
        try {
            // Load from localStorage
            const requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]')
            const sessionId = searchParams.get('sid') || localStorage.getItem('lastSessionId')

            // Find the most recent request for this session, or just the latest
            let found = sessionId
                ? requests.find((r: ServiceCall) => r.id === sessionId)
                : requests[requests.length - 1]

            if (found) {
                // Check for owner updates
                const statusData = localStorage.getItem(`status_${found.id}`)
                if (statusData) {
                    const parsed = JSON.parse(statusData)
                    found = { ...found, ...parsed }
                }
                setServiceCall(found)
                localStorage.setItem('lastSessionId', found.id)
            }

            setLastUpdate(new Date())
        } catch (e) {
            console.error('Error loading service call:', e)
        } finally {
            setLoading(false)
        }
    }, [searchParams])

    useEffect(() => {
        loadServiceCall()

        // Poll for updates every 30 seconds
        const interval = setInterval(loadServiceCall, 30000)
        return () => clearInterval(interval)
    }, [loadServiceCall])

    const updateStatus = (status: ServiceStatus, eta?: string, notes?: string) => {
        if (!serviceCall) return

        const update = {
            status,
            eta: eta || serviceCall.eta,
            ownerNotes: notes || serviceCall.ownerNotes
        }

        localStorage.setItem(`status_${serviceCall.id}`, JSON.stringify(update))
        setServiceCall({ ...serviceCall, ...update })
        setLastUpdate(new Date())
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <Loader2 className="w-12 h-12 text-orange-400 animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">טוען את פרטי הקריאה...</p>
                </motion.div>
            </div>
        )
    }

    if (!serviceCall) {
        return (
            <div className="min-h-screen bg-black pt-20">
                <div className="container mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <Card className="bg-gray-900/50 border-gray-800">
                            <CardContent className="p-8">
                                <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                                <h1 className="text-2xl font-bold text-white mb-4">לא נמצאה קריאת שירות</h1>
                                <p className="text-gray-400 mb-6">
                                    לא מצאנו קריאת שירות פעילה. ייתכן שהסשן פג תוקף או שעדיין לא הגשתם בקשה.
                                </p>
                                <Button
                                    onClick={() => window.location.href = '/service-call'}
                                    className="bg-orange-500 hover:bg-orange-600"
                                >
                                    צור קריאת שירות חדשה
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        )
    }

    const currentStatus = statusConfig[serviceCall.status]
    const StatusIcon = currentStatus.icon

    return (
        <div className="min-h-screen bg-black pt-20 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        סטטוס קריאת שירות
                    </h1>
                    <p className="text-gray-400">
                        מעקב בזמן אמת אחר קריאת השירות שלך
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Status Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Card className={`${currentStatus.bgColor} border-2 ${currentStatus.color.replace('text-', 'border-')}`}>
                            <CardContent className="p-8 text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-block mb-4"
                                >
                                    <StatusIcon className={`w-20 h-20 ${currentStatus.color}`} />
                                </motion.div>
                                <h2 className={`text-3xl font-bold ${currentStatus.color} mb-2`}>
                                    {currentStatus.label}
                                </h2>
                                {serviceCall.eta && serviceCall.status === 'en-route' && (
                                    <p className="text-xl text-white">
                                        ⏱️ זמן הגעה משוער: <span className="font-bold">{serviceCall.eta}</span>
                                    </p>
                                )}
                                {serviceCall.ownerNotes && (
                                    <p className="text-gray-300 mt-4 italic">
                                        📝 הערה: {serviceCall.ownerNotes}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Call Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-gray-900/50 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-orange-400" />
                                    פרטי הקריאה
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
                                        <User className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <p className="text-gray-400 text-sm">שם</p>
                                            <p className="text-white font-medium">{serviceCall.customerName}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
                                        <Phone className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <p className="text-gray-400 text-sm">טלפון</p>
                                            <p className="text-white font-medium">{serviceCall.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
                                        <Truck className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <p className="text-gray-400 text-sm">סוג רכב</p>
                                            <p className="text-white font-medium">{serviceCall.vehicleType}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
                                        <MapPin className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <p className="text-gray-400 text-sm">מיקום</p>
                                            <p className="text-white font-medium">{serviceCall.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                    <p className="text-gray-400 text-sm mb-1">תיאור הבעיה</p>
                                    <p className="text-white">{serviceCall.description}</p>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>קוד קריאה: {serviceCall.id.slice(0, 8)}</span>
                                    <span>עדכון אחרון: {lastUpdate.toLocaleTimeString('he-IL')}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            onClick={loadServiceCall}
                            variant="outline"
                            className="border-gray-700 text-gray-300 hover:bg-gray-800"
                        >
                            <RefreshCw className="w-4 h-4 ml-2" />
                            רענן סטטוס
                        </Button>
                        <Button
                            onClick={() => window.open(generateWhatsAppLink(businessPhone, `שלום, אני רוצה לבדוק את סטטוס קריאה ${serviceCall.id.slice(0, 8)}`), '_blank')}
                            className="bg-green-600 hover:bg-green-700"
                        >
                            <MessageCircle className="w-4 h-4 ml-2" />
                            צור קשר בוואטסאפ
                        </Button>
                        <Button
                            onClick={() => window.open(`tel:${businessPhone}`, '_blank')}
                            className="bg-orange-500 hover:bg-orange-600"
                        >
                            <Phone className="w-4 h-4 ml-2" />
                            התקשר עכשיו
                        </Button>
                    </motion.div>

                    {/* Owner Controls (Hidden unless owner mode) */}
                    {ownerAccessCode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Card className="bg-purple-900/30 border-purple-500/30">
                                <CardHeader>
                                    <CardTitle className="text-purple-400 flex items-center gap-2">
                                        <Settings className="w-5 h-5" />
                                        פאנל בעל העסק
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        <Button
                                            onClick={() => updateStatus('pending')}
                                            variant={serviceCall.status === 'pending' ? 'default' : 'outline'}
                                            className="text-xs"
                                        >
                                            ממתין
                                        </Button>
                                        <Button
                                            onClick={() => updateStatus('approved')}
                                            variant={serviceCall.status === 'approved' ? 'default' : 'outline'}
                                            className="text-xs"
                                        >
                                            אושר
                                        </Button>
                                        <Button
                                            onClick={() => updateStatus('en-route')}
                                            variant={serviceCall.status === 'en-route' ? 'default' : 'outline'}
                                            className="text-xs"
                                        >
                                            בדרך
                                        </Button>
                                        <Button
                                            onClick={() => updateStatus('completed')}
                                            variant={serviceCall.status === 'completed' ? 'default' : 'outline'}
                                            className="text-xs"
                                        >
                                            הושלם
                                        </Button>
                                    </div>

                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="זמן הגעה (לדוגמה: 15 דקות)"
                                            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    updateStatus(serviceCall.status, (e.target as HTMLInputElement).value)
                                                }
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="הערה ללקוח"
                                            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    updateStatus(serviceCall.status, undefined, (e.target as HTMLInputElement).value)
                                                }
                                            }}
                                        />
                                    </div>

                                    <Button
                                        onClick={() => updateStatus('cancelled')}
                                        variant="destructive"
                                        className="w-full"
                                    >
                                        ביטול קריאה
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {/* Toggle Owner Mode (Hidden toggle) */}
                    <div
                        className="text-center cursor-pointer opacity-10 hover:opacity-50 transition-opacity"
                        onClick={() => setIsOwnerMode(!isOwnerMode)}
                    >
                        <span className="text-xs text-gray-600">🔧</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default function ServiceStatusPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center pt-20">
                <Loader2 className="w-12 h-12 text-orange-400 animate-spin" />
            </div>
        }>
            <ServiceStatusContent />
        </Suspense>
    )
}
