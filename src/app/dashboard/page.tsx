'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, User, FileText, Clock, CheckCircle, AlertCircle, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { generateWhatsAppLink, formatPhone } from '@/lib/utils'

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

interface StoredServiceRequest {
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
  timestamp: string
  status: 'pending' | 'contacted' | 'in_progress' | 'completed'
}

const statusConfig = {
  pending: { label: 'ממתין', color: 'bg-yellow-500/20 text-yellow-400', icon: Clock },
  contacted: { label: 'נוצר קשר', color: 'bg-blue-500/20 text-blue-400', icon: MessageCircle },
  in_progress: { label: 'בטיפול', color: 'bg-orange-500/20 text-orange-400', icon: AlertCircle },
  completed: { label: 'הושלם', color: 'bg-green-500/20 text-green-400', icon: CheckCircle }
}

export default function DashboardPage() {
  const [requests, setRequests] = useState<ServiceRequest[]>([])
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    // Load requests from localStorage (in production, this would be from a database)
    const loadRequests = () => {
      const storedRequests = JSON.parse(localStorage.getItem('serviceRequests') || '[]')
      const parsedRequests = storedRequests.map((req: StoredServiceRequest) => ({
        ...req,
        timestamp: new Date(req.timestamp)
      }))
      setRequests(parsedRequests)
    }

    loadRequests()
  }, [])

  const updateRequestStatus = (id: string, status: ServiceRequest['status']) => {
    const updatedRequests = requests.map(req =>
      req.id === id ? { ...req, status } : req
    )
    setRequests(updatedRequests)
    localStorage.setItem('serviceRequests', JSON.stringify(updatedRequests))
  }

  const filteredRequests = filter === 'all'
    ? requests
    : requests.filter(req => req.status === filter)

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    contacted: requests.filter(r => r.status === 'contacted').length,
    in_progress: requests.filter(r => r.status === 'in_progress').length,
    completed: requests.filter(r => r.status === 'completed').length
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-black text-white mb-2">
            לוח בקרת
            <span className="moto-gradient-text"> בעל העסק</span>
          </h1>
          <p className="text-gray-300">ניהול בקשות שירות ולקוחות</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          <Card className="bg-linear-to-br from-gray-900 to-black border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-sm text-gray-400">סה״כ בקשות</div>
            </CardContent>
          </Card>
          <Card className="bg-linear-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
              <div className="text-sm text-yellow-400">ממתינות</div>
            </CardContent>
          </Card>
          <Card className="bg-linear-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{stats.contacted}</div>
              <div className="text-sm text-blue-400">נוצר קשר</div>
            </CardContent>
          </Card>
          <Card className="bg-linear-to-br from-orange-900/20 to-orange-800/20 border-orange-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">{stats.in_progress}</div>
              <div className="text-sm text-orange-400">בטיפול</div>
            </CardContent>
          </Card>
          <Card className="bg-linear-to-br from-green-900/20 to-green-800/20 border-green-500/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
              <div className="text-sm text-green-400">הושלמו</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {[
            { key: 'all', label: 'הכל' },
            { key: 'pending', label: 'ממתינות' },
            { key: 'contacted', label: 'נוצר קשר' },
            { key: 'in_progress', label: 'בטיפול' },
            { key: 'completed', label: 'הושלמו' }
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(key)}
              className={filter === key ? 'neon-glow' : 'border-gray-600 text-gray-300 hover:bg-gray-700'}
            >
              {label}
            </Button>
          ))}
        </motion.div>

        {/* Requests List */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Requests List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredRequests.length === 0 ? (
              <Card className="bg-linear-to-br from-gray-900 to-black border-gray-700">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">אין בקשות שירות</p>
                </CardContent>
              </Card>
            ) : (
              filteredRequests.map((request, index) => {
                const statusInfo = statusConfig[request.status]
                const StatusIcon = statusInfo.icon

                return (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      className={`bg-linear-to-br from-gray-900 to-black border-gray-700 cursor-pointer hover:border-orange-500/50 transition-colors ${
                        selectedRequest?.id === request.id ? 'ring-2 ring-orange-500' : ''
                      }`}
                      onClick={() => setSelectedRequest(request)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="text-right flex-1">
                            <CardTitle className="text-lg text-white mb-1">{request.customerName}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Phone className="w-4 h-4" />
                              {formatPhone(request.phone)}
                            </div>
                          </div>
                          <Badge className={statusInfo.color}>
                            <StatusIcon className="w-3 h-3 ml-1" />
                            {statusInfo.label}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-4 h-4 ml-2 text-gray-400" />
                            {request.location}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-4 h-4 ml-2 text-gray-400" />
                            {request.timestamp.toLocaleString('he-IL')}
                          </div>
                          <p className="text-gray-400 line-clamp-2">{request.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })
            )}
          </div>

          {/* Request Details */}
          <div className="lg:col-span-1">
            {selectedRequest ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-xl moto-gradient-text">פרטי הבקשה</CardTitle>
                    <CardDescription>מזהה: {selectedRequest.id.slice(0, 8)}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Customer Info */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 ml-2" />
                        <span className="text-white font-medium">{selectedRequest.customerName}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 ml-2" />
                        <a href={`tel:${selectedRequest.phone}`} className="text-orange-400 hover:text-orange-300">
                          {formatPhone(selectedRequest.phone)}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-gray-400 ml-2" />
                        <a href={`mailto:${selectedRequest.email}`} className="text-orange-400 hover:text-orange-300">
                          {selectedRequest.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 ml-2" />
                        <span className="text-gray-300">{selectedRequest.location}</span>
                      </div>
                    </div>

                    {/* Vehicle & Description */}
                    <div className="border-t border-gray-700 pt-4">
                      <Badge variant="outline" className="mb-3">{selectedRequest.vehicleType}</Badge>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedRequest.description}</p>
                    </div>

                    {/* Technical Info */}
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">מידע טכני</h4>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>Session: {selectedRequest.sessionId.slice(0, 8)}</div>
                        <div>IP: {selectedRequest.ipAddress}</div>
                        <div>זמן: {selectedRequest.timestamp.toLocaleString('he-IL')}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="border-t border-gray-700 pt-4 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(statusConfig).map(([status, config]) => (
                          <Button
                            key={status}
                            size="sm"
                            variant={selectedRequest.status === status ? 'default' : 'outline'}
                            onClick={() => updateRequestStatus(selectedRequest.id, status as ServiceRequest['status'])}
                            className={selectedRequest.status === status ? 'neon-glow' : 'border-gray-600 text-gray-300 hover:bg-gray-700'}
                          >
                            {config.label}
                          </Button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Button
                          size="sm"
                          onClick={() => window.open(`tel:${selectedRequest.phone}`, '_blank')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Phone className="w-4 h-4 ml-2" />
                          התקשר
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => window.open(generateWhatsAppLink(selectedRequest.phone, `שלום ${selectedRequest.customerName}, אני מתקשר לגבי הבקשה שלך`), '_blank')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <MessageCircle className="w-4 h-4 ml-2" />
                          WhatsApp
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`mailto:${selectedRequest.email}`, '_blank')}
                          className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                        >
                          <Mail className="w-4 h-4 ml-2" />
                          שלח מייל
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <Card className="bg-linear-to-br from-gray-900 to-black border-gray-700">
                <CardContent className="p-8 text-center">
                  <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">בחר בקשה לצפייה בפרטים</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}