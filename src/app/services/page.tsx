import type { Metadata } from 'next'
import { generateSEO, pageSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  ...pageSEO.services,
  title: 'שירותי הגררה | Grar Alfa',
  description: 'שירותי הגררה מקצועיים לכלי רכב שונים - אופנועים, אטווים, RZR ועוד',
})

export default function ServicesPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="bg-linear-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">שירותי הגררה</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            שירותי גרירה מקצועיים וזמינים 24/7 לכל סוגי כלי הרכב
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 7a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 11-2 0 1 1 0 012 0zm-3 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">אופנועים</h3>
            <p className="text-gray-600 mb-4">גרירה בטוחה ומקצועית של אופנועים כל הסוגים</p>
            <a href="/services/motorcycle" className="text-orange-600 hover:text-orange-800 font-medium">
              למידע נוסף ←
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">אטווים (ATV)</h3>
            <p className="text-gray-600 mb-4">שירות מיוחד לגרירת ATV וכלי חקלאיים</p>
            <a href="/services/atv" className="text-orange-600 hover:text-orange-800 font-medium">
              למידע נוסף ←
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">RZR</h3>
            <p className="text-gray-600 mb-4">גרירה מיוחדת לרכבי RZR וספורט</p>
            <a href="/services/rzr" className="text-orange-600 hover:text-orange-800 font-medium">
              למידע נוסף ←
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">למה לבחור ב-Grar Alfa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600">זמינות מלאה</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15 דק'</div>
              <p className="text-gray-600">זמן תגובה ממוצע</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600">ביטוח מלא</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5★</div>
              <p className="text-gray-600">דירוג לקוחות</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/service-call" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            הזמן שירות עכשיו
          </a>
        </div>
      </div>
    </div>
  )
}