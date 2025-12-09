# 🚀 מדריך פריסה - MotoGrar

## אירוח חינמי מומלץ

### Vercel (הכי מומלץ)
Vercel מספק אירוח חינמי עם תכונות מתקדמות.

#### התקנה
```bash
# התקנת Vercel CLI
npm install -g vercel

# התחברות
vercel login

# פריסה
vercel --prod
```

#### הגדרות Environment
```env
NEXT_PUBLIC_SITE_URL=https://motogar.vercel.app
OPENAI_API_KEY=your-openai-key
```

### Netlify
אלטרנטיבה טובה עם CDN גלובלי.

```bash
# התקנת Netlify CLI
npm install -g netlify-cli

# התחברות
netlify login

# פריסה
netlify deploy --prod --dir=.next
```

### Render
אירוח חינמי עם persistent disks.

```yaml
# render.yaml
services:
  - type: web
    name: motogar
    env: node
    buildCommand: npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

## התקנת Strapi CMS

### התקנה מקומית
```bash
# יצירת פרויקט Strapi חדש
npx create-strapi-app@latest motogar-cms --quickstart

# כניסה לתיקייה
cd motogar-cms

# הרצה
npm run develop
```

### הגדרת תוכן
1. צור Content Types:
   - **Services** (שירותים)
   - **Reviews** (ביקורות)
   - **Articles** (מאמרים)
   - **Images** (תמונות)

2. הגדר API endpoints
3. הוסף תוכן בעברית

### חיבור ל-Next.js
```typescript
// src/lib/strapi.ts
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

export async function getServices() {
  const res = await fetch(`${STRAPI_URL}/api/services`)
  return res.json()
}
```

## פריסת Strapi

### Railway (חינמי)
```bash
# פריסה ל-Railway
railway login
railway init
railway up
```

### PlanetScale + Vercel
```bash
# התקנת PlanetScale CLI
npm install -g @planetscale/cli

# יצירת מסד נתונים
pscale database create motogar-cms
```

## אופטימיזציה לייצור

### Next.js Config
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'strapi-production.up.railway.app'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
OPENAI_API_KEY=sk-your-openai-key
NEXT_PUBLIC_SITE_URL=https://motogar.vercel.app
DATABASE_URL=mysql://user:pass@host:port/db
```

## בדיקות לפני פריסה

### בדיקות אוטומטיות
```bash
# בדיקת קוד
npm run lint

# בנייה לייצור
npm run build

# בדיקת ביצועים
npm run start
```

### בדיקות ידניות
- [ ] כל הדפים נטענים ללא שגיאות
- [ ] טפסים עובדים כראוי
- [ ] תצוגה מותאמת למובייל
- [ ] קישורים פנימיים עובדים
- [ ] תמונות נטענות
- [ ] Chatbot עובד
- [ ] משחק נטען
- [ ] SEO מותאם

## מוניטורינג

### Vercel Analytics
- תנועה בזמן אמת
- Core Web Vitals
- Performance metrics

### Google Search Console
- הגשת Sitemap
- בדיקת אינדוקס
- ניטור SEO

### Strapi Admin
- ניהול תוכן
- גיבויים אוטומטיים
- לוגים

## גיבויים

### קוד
```bash
# GitHub
git add .
git commit -m "Deploy production"
git push origin main
```

### מסד נתונים
```bash
# Strapi export
npm run strapi export -- --file backup.tar.gz

# PlanetScale backup
pscale database dump motogar-cms --output backup.sql
```

## תחזוקה שוטפת

### עדכונים
```bash
# עדכון תלות
npm update

# בנייה מחדש
npm run build

# פריסה
vercel --prod
```

### ניטור ביצועים
- Core Web Vitals
- Lighthouse scores
- User feedback
- Error logs

## פתרון בעיות נפוצות

### שגיאת בנייה
```bash
# ניקוי cache
rm -rf .next .vercel
npm run build
```

### בעיות ביצועים
- בדוק Core Web Vitals
- אופטימיזציה של תמונות
- השתמש ב-CDN

### בעיות SEO
- וודא שיש meta tags
- בדוק Sitemap
- הגש ל-Google Search Console

### בעיות Chatbot
```bash
# בדיקת OpenAI API
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
  https://api.openai.com/v1/models
```

## עלויות

### חינמי לחלוטין
- **Vercel:** 100GB bandwidth/month
- **Railway:** 512MB RAM, 1GB storage
- **PlanetScale:** 1 database, 1GB storage
- **OpenAI:** $18 credit for new accounts

### שדרוגים (כשנצטרך)
- **Vercel Pro:** $20/month
- **Railway:** $5-10/month per service
- **PlanetScale:** $29/month

## אבטחה

### HTTPS
- Vercel מספק SSL אוטומטי
- כל התקשורת מוצפנת

### API Keys
- שמור ב-Environment Variables
- אל תחשוף לקוד הלקוח
- רוטציה תקופתית

### Rate Limiting
```javascript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Rate limiting logic
}
```

## תמיכה

לשאלות ותמיכה:
- 📧 info@motogar.co.il
- 📱 052-482-3435
- 🌐 https://motogar.co.il

## 🚀 פריסה סופית

1. **בדוק הכל מקומית**
2. **פרוס Strapi ל-Railway**
3. **פרוס Next.js ל-Vercel**
4. **הגדר domain**
5. **הגש ל-Google Search Console**
6. **צור קמפיין שיווקי**

**בהצלחה!** 🎉