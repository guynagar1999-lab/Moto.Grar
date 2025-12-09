import type { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import MotoGrarChatbot from '@/components/motogar-chatbot'

export const metadata: Metadata = generateSEO({
  title: 'צ\'אטבוט AI - Grar Alfa',
  description: 'שאל שאלות על שירותי הגרירה והחילוץ שלנו. הצ\'אטבוט החכם זמין 24/7 לענות על כל השאלות.',
  keywords: ['צ\'אטבוט', 'AI', 'שאלות', 'שירות לקוחות', 'גרירה']
})

export default function ChatbotPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <MotoGrarChatbot />
    </div>
  )
}