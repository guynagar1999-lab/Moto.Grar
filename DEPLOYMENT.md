# 🚀 מדריך פריסה - MotoGrar ל-Vercel

## תצורה מלאה לפריסה ב-Vercel

### 1. הגדרות Vercel Panel

#### Framework Preset
- **Framework Preset**: Next.js
- **Root Directory**: ./
- **Build Command**: npm run build
- **Install Command**: npm install
- **Output Directory**: השאר ריק (ניהול אוטומטי)

#### Environment Variables (חובה)
```env
# חובה - OpenAI API
OPENAI_API_KEY=sk-your-openai-key

# הערה: הפרויקט משתמש כעת בנתונים סטטיים ב-JSON במקום CMS חיצוני
# אין צורך ב-Strapi http://localhost:3002  או Supabase

# חובה - URL האתר
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 2. משתני סביבה מלאים

#### משתני סביבה חובה:
- `OPENAI_API_KEY` - מפתח OpenAI API
- `STRAPI_URL` - כתובת Strapi CMS
- ` ` - כתובת Strapi CMS (לקוח)
- `NEXT_PUBLIC_SUPABASE_URL` - כתובת Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - מפתח Supabase

#### משתני סביבה אופציונליים:
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics
- `NEXT_PUBLIC_HOTJAR_ID` - Hotjar Analytics
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - שירות אימייל

### 3. תהליך הפריסה

#### שלב 1: הכנת הקוד
```bash
# התקנת תלויות
npm install

# בניית הפרויקט
npm run build

# בדיקת TypeScript
npm run type-check
```

#### שלב 2: העלאה ל-GitHub
```bash
# יצירת repository חדש
git init
git add .
git commit -m "Initial commit - MotoGrar website"
git branch -M main
git remote add origin https://github.com/your-username/motogar.git
git push -u origin main
```

#### שלב 3: פריסה ב-Vercel
1. התחבר ל-[Vercel](https://vercel.com)
2. לחץ "Import Project"
3. בחר את ה-repository מ-GitHub
4. הגדר את הפרויקט:
   - **Name**: motogar-alfa-website
   - **Framework**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Install Command**: npm install
5. הוסף משתני סביבה
6. לחץ "Deploy"

### 4. בדיקות לאחר פריסה

#### בדיקות בסיסיות:
- [ ] טעינת דף הבית (/)
- [ ] טעינת דפי שירותים (/services/*)
- [ ] טעינת דף צור קשר (/contact)
- [ ] טעינת דף ביקורות (/testimonials)
- [ ] טעינת גלריה (/gallery)

#### בדיקות API:
- [ ] API Health: /api/health
- [ ] Sitemap: /sitemap.xml
- [ ] Robots.txt: /robots.txt

#### בדיקות פונקציונליות:
- [ ] טופס צור קשר
- [ ] צ'אטבוט AI
- [ ] משחק Traffic Weaving
- [ ] ניווט מובייל
- [ ] תמיכה בעברית (RTL)

#### בדיקות SEO:
- [ ] מטא תגים
- [ ] Open Graph
- [ ] Structured Data
- [ ] Sitemap
- [ ] Robots.txt

### 5. פתרון בעיות נפוצות

#### שגיאת "routes-manifest.json" לא נמצא:
```json
// vercel.json - ודא שיש לך:
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ]
}
```

#### בעיות עם תמונות:
- ודא שתמונות ב-public/ נכונות
- בדוק remotePatterns ב-next.config.ts

#### בעיות עם סביבה:
- ודא שכל משתני הסביבה החובה מוגדרים
- בדוק שה-OPENAI_API_KEY תקף

### 6. מוניטורינג ותחזוקה

#### Vercel Analytics:
- צפה בביצועים
- עקב אחר שגיאות
- נתוני משתמשים

#### Google Search Console:
- הגש sitemap
- עקב אחר אינדוקס
- ניטור SEO

#### שיפורים עתידיים:
- הוספת PWA features
- Service Worker ל-cache
- Analytics מתקדם

### 7. עדכונים ובנייה מחדש

#### עדכון קוד:
```bash
# עדכון קוד
git add .
git commit -m "Update: [תיאור השינוי]"
git push origin main

# Vercel יבנה אוטומטית
```

#### עדכון משתני סביבה:
1. כנס ל-Vercel Dashboard
2. בחר את הפרויקט
3. Settings → Environment Variables
4. עדכן ערכים
5. Redeploy

---

## ✅ רשימת משימות להשלמה

- [x] יצירת vercel.json מלא
- [x] עדכון .env.example עם כל המשתנים
- [x] אופטימיזציה של next.config.ts
- [x] בדיקת build ו-TypeScript
- [x] יצירת הוראות פריסה
- [ ] פריסה בפועל ב-Vercel
- [ ] בדיקות פונקציונליות בסביבת ייצור

**הפרויקט מוכן לפריסה מיידית! 🎉**