'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Clock, Star, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Difficulty = 'beginner' | 'intermediate' | 'advanced'

interface RepairGuide {
  id: number
  title: string
  category: string
  difficulty: Difficulty
  estimatedTime: string
  parts: string[]
  content: string
  tags: string[]
}

const repairGuides: RepairGuide[] = [
  // אופנועים
  {
    id: 1,
    title: 'החלפת שמן במנוע אופנוע - מדריך מקצועי',
    category: 'אופנועים',
    difficulty: 'beginner',
    estimatedTime: '30 דקות',
    parts: ['שמן מנוע 10W-40 API SJ או JASO MA', 'מסנן שמן OEM', 'אטם מסנן שמן', 'מפתח פקק ניקוז', 'משפך שמן', 'מכל שמן ישן'],
    content: `
## מדוע חשוב להחליף שמן באופנוע?

שמן המנוע הוא "דם" של האופנוע. הוא מספק סיכה, מקרר את המנוע, מונע חלודה ומנקה פסולת. החלפה בזמן מונעת בלאי מוקדם של המנוע.

## הכנה מקצועית

### כלים נדרשים:
- מפתח פקק ניקוז (14mm או 17mm)
- מפתח מסנן שמן
- משפך שמן
- כפפות עבודה
- רגלית או עמוד תמיכה

### בדיקות מקדימות:
1. חמם את המנוע לטמפרטורה עבודה (5-10 דקות)
2. כבה את המנוע והנח על משטח ישר
3. בדוק רמת שמן קיימת
4. הכן אזור עבודה נקי

## תהליך ההחלפה המקצועי

### שלב 1: ניקוז השמן הישן
1. הנח מכל מתחת לפקק הניקוז
2. פתח את פקק הניקוז (היזהר משמן חם!)
3. תן לשמן לנקז לחלוטין (5-10 דקות)
4. בדוק את השמן: אם הוא שחור ומבושם - החלפה בזמן

### שלב 2: החלפת מסנן השמן
1. הסר את מסנן השמן הישן
2. מרח אטם סיליקון על מסנן החדש
3. התקן את המסנן החדש (מומנט 18-20Nm)
4. נקה את משטח ההתקנה

### שלב 3: מילוי שמן חדש
1. התקן את פקק הניקוז (מומנט 20-25Nm)
2. מלא שמן חדש דרך פתח המילוי
3. בדוק רמת שמן עם מד השמן
4. התנע את המנוע ובדוק דליפות

## טיפים מקצועיים

### בחירת שמן:
- **4T מנועים**: שמן 10W-40 API SJ
- **מנועים מודרניים**: שמן 5W-40 fully synthetic
- **אופנועי ספורט**: שמן 15W-50 racing grade

### תדירות החלפה:
- אופנועי כביש: כל 6,000-8,000 ק"מ
- אופנועי שטח: כל 3,000-5,000 ק"מ
- אופנועי ספורט: כל 4,000-6,000 ק"מ

### סימני אזהרה:
- רעשי מנוע חריגים
- ירידה בביצועים
- צריכת שמן מוגברת
- עשן מהמפלט

## בטיחות ואיכות

⚠️ **אזהרת בטיחות**: עבוד על מנוע חם בזהירות!
🛠️ **איכות**: השתמש תמיד בחלקים OEM או מקבילים איכותיים
♻️ **איכות סביבה**: מסור שמן ישן למיחזור
    `,
    tags: ['מנוע', 'שמן', 'תחזוקה', 'אופנועים', 'מנוע 4T']
  },
  {
    id: 2,
    title: 'החלפת בלמים קדמיים באופנוע - מדריך בטיחות',
    category: 'אופנועים',
    difficulty: 'intermediate',
    estimatedTime: '45 דקות',
    parts: ['רפידות בלם קדמיות OEM', 'דיסק בלם (אם נדרש)', 'נוזל בלם DOT 4', 'משאבת ואקום', 'כף בלם', 'כלי מומנט'],
    content: `
## מערכת הבלמים באופנוע - הבסיס

מערכת הבלמים היא המערכת החשובה ביותר לבטיחות. 70% מהבלימה מתבצעת בגלגל הקדמי.

## אבחון בעיות בלמים

### סימני בלאי:
- רעש צווחה בבלימה
- ידית בלם מגיעה לקצה
- בלימה לא אחידה
- רטט בידית הבלם

### מדידת עובי רפידות:
- עובי מינימלי: 2mm
- עובי אופטימלי: 4-5mm
- החלף לפני 2mm

## תהליך החלפה מקצועי

### הכנה:
1. הרם את האופנוע על עמוד תמיכה
2. הסר את הגלגל הקדמי
3. תמוך את האופנוע ביציבות

### פירוק קליפר הבלם:
1. נקה את האזור מאבק
2. פתח את ברגי הקליפר (2-4 ברגים)
3. הסר את הקליפר בעדינות
4. הוצא את הרפידות הישנות

### התקנת רפידות חדשות:
1. נקה את משטחי הקליפר
2. מרח גריז על הנעצים
3. התקן רפידות חדשות
4. הרכב את הקליפר

### מילוי נוזל בלם:
1. שאב אוויר מהמערכת
2. מלא נוזל בלם טרי
3. שאב אוויר עד אין בועות
4. בדוק רמת נוזל במיכל

## בדיקות לאחר ההחלפה

### בדיקות בטיחות:
1. בלימה הדרגתית - בדוק תגובה
2. בלימה חזקה - בדוק יציבות
3. בלימה במהירות - בדוק רטט
4. בדוק דליפות

### מדידות טכניות:
- מרחק בלם: 20-30mm
- לחץ קליפר: 8-12 bar
- טמפרטורת בלם: <300°C

## טיפים מקצועיים

### בחירת רפידות:
- **כביש רטוב**: רפידות semi-metallic
- **כביש יבש**: רפידות organic
- **שטח**: רפידות sintered

### תחזוקה שוטפת:
- בדוק רפידות כל 5,000 ק"מ
- החלף נוזל בלם כל 2 שנים
- נקה דיסקים מלכלוך

### בעיות נפוצות:
- אוויר במערכת - שאב אוויר
- רפידות לא מחליקות - נקה משטחים
- רעש בבלימה - רפידות לא מתאימות

## בטיחות קיצונית

🚨 **אזהרה**: בלמים לקויים = סכנת חיים!
🛑 **עצור**: אם אינך בטוח - פנה למקצועי
⚡ **מהירות**: בדוק בלמים לפני כל נסיעה
    `,
    tags: ['בלמים', 'בטיחות', 'גלגל קדמי', 'אופנועים', 'קליפר']
  },
  {
    id: 3,
    title: 'כוונון מתלים אחוריים באופנוע - אופטימיזציה מקצועית',
    category: 'אופנועים',
    difficulty: 'advanced',
    estimatedTime: '60 דקות',
    parts: ['כלי כוונון מתלים', 'מד לחץ אוויר', 'משקל מדויק', 'רשימת מפרטי יצרן', 'גריז סיליקון'],
    content: `
## פיזיקת מתלים באופנוע

המתלים משפיעים על 4 פרמטרים קריטיים:
1. **יציבות** - שליטה בכביש
2. **נוחות** - ספיגת זעזועים
3. **בטיחות** - אחיזת כביש
4. **ביצועים** - העברת כוח

## אבחון בעיות מתלים

### סימני בעיה:
- האופנוע "קופץ" על מהמורות
- איבוד אחיזה בפניות
- רטט יתר בכביש משובש
- שקיעה לא סימטרית

### מדידות בסיסיות:
- גובה רכב: 80-90cm (לפי דגם)
- מהלך כיווץ: 100-120mm
- לחץ אוויר: 1.2-1.8 bar

## תהליך כוונון מקצועי

### שלב 1: מדידת משקל
1. שקול רוכב עם ציוד מלא
2. הוסף משקל ממוצע נוסע (80kg)
3. חשב התפלגות משקל (60% אחורי)

### שלב 2: כוונון קפיציות
1. התחל מכוונון יצרן
2. הגדל/הקטן ב-1-2 קליקים
3. בדוק התנהגות בכביש

### שלב 3: כוונון טרום מתח
1. השתמש בכלי כוונון
2. כוון לפי מפרט יצרן
3. התאם למשקל רוכב

### שלב 4: בדיקת גובה
1. מדוד גובה רכב
2. התאם ללא עומס
3. בדוק עם עומס מלא

## כוונון מתקדם לפי סגנון רכיבה

### רכיבה ספורטיבית:
- מתלים קשיחים יותר
- טרום מתח גבוה
- מהלך מוגבל

### רכיבה תיוריסטית:
- מתלים רכים יותר
- טרום מתח בינוני
- נוחות מקסימלית

### רכיבה שטח:
- מתלים רכים מאוד
- טרום מתח נמוך
- מהלך מלא

## בדיקות מקצועיות

### מבחני כביש:
1. **נסיעה איטית**: בדוק נוחות
2. **מהירות בינונית**: בדוק יציבות
3. **בלימה**: בדוק צלילה
4. **פניות**: בדוק הטיה

### מדידות טכניות:
- תדר רטט: 1.5-2.5Hz
- קצב כיווץ: 2.5-3.5 m/s
- קצב החזרה: 1.8-2.8 m/s

## טיפים מקצועיים

### תחזוקה שוטפת:
- בדוק לחץ אוויר שבועי
- נקה בוכנות מאבק
- מרח גריז על חלקים חשופים

### שדרוגים מומלצים:
- בוכנות מוגדלות (46mm)
- קפיצים מתקדמים
- שסתומים מתכווננים

### בעיות נפוצות:
- דליפת אוויר - בדוק אטמים
- רעשי חריקה - מרח גריז
- תגובה איטית - בדוק שמנים

## בטיחות ודיוק

⚠️ **דיוק**: שינויים קטנים משפיעים מאוד
🛠️ **מקצועיות**: השתמש בכלי מדויק
📊 **תיעוד**: רשום כל שינוי לבדיקה
🔄 **בדיקה**: חזור על הכוונון לאחר זמן
    `,
    tags: ['מתלים', 'כוונון', 'ביצועים', 'אופנועים', 'פיזיקה']
  },
  // רכבים
  {
    id: 4,
    title: 'טיפול במערכת קירור רכב - מניעת התחממות יתר',
    category: 'רכבים',
    difficulty: 'intermediate',
    estimatedTime: '90 דקות',
    parts: ['נוזל קירור G12/G13', 'מסנן קירור', 'תרמוסטט', 'משאבת מים', 'צינורות סיליקון', 'כלי פתיחה'],
    content: `
## חשיבות מערכת הקירור

מערכת הקירור מונעת התחממות יתר של המנוע. טמפרטורה מוגברת פוגעת בביצועים וגורמת לבלאי מוקדם.

## אבחון בעיות קירור

### סימני אזהרה:
- מד טמפרטורה עולה
- עשן לבן מהמפלט
- ריח מתוק באוויר
- צריכת נוזל מוגברת

### בדיקות בסיסיות:
- רמת נוזל קירור
- מצב תרמוסטט
- לחץ במערכת
- זרימת אוויר לרדיאטור

## תהליך החלפה מקצועי

### שלב 1: ניקוי המערכת
1. נקה את הרדיאטור מבחוץ
2. שאב נוזל ישן
3. שטוף עם חומר ניקוי
4. שטוף עם מים נקיים

### שלב 2: החלפת רכיבים
1. החלף תרמוסטט (פותח ב-85-90°C)
2. החלף מסנן קירור
3. בדוק צינורות לבלאי
4. החלף אם נדרש

### שלב 3: מילוי נוזל חדש
1. ערבב נוזל קירור עם מים (1:1)
2. מלא בהדרגה
3. הפעל מנוע ומלא מחדש
4. בדוק טמפרטורה

## טיפים מקצועיים

### סוגי נוזל קירור:
- **G11**: ירוק, עד 1996
- **G12**: אדום, עד 2008
- **G13**: ורוד, מ-2008

### תחזוקה שוטפת:
- בדוק רמה חודשי
- החלף כל 2-3 שנים
- בדוק טמפרטורה תמיד

### בעיות נפוצות:
- תרמוסטט תקוע - החלף
- רדיאטור סתום - נקה או החלף
- משאבה חלשה - החלף

## בטיחות ואיכות

⚠️ **זהירות**: נוזל קירור רעיל!
🔥 **טמפרטורה**: אל תעבוד על מנוע חם
🛠️ **איכות**: השתמש בחלקים OEM
    `,
    tags: ['קירור', 'מנוע', 'רכבים', 'תרמוסטט', 'רדיאטור']
  },
  // RZR
  {
    id: 5,
    title: 'תחזוקת מערכת הנעה RZR - ביצועים מקסימליים',
    category: 'RZR',
    difficulty: 'advanced',
    estimatedTime: '120 דקות',
    parts: ['שמן דיפרנציאל', 'מסנן אוויר', 'רצועת טיימינג', 'שסתומי גז', 'חיישני חמצן', 'כלי מיוחדים'],
    content: `
## מערכת ההנעה ב-RZR

RZR מצויד במנוע Rotax תלת-גלילי עם הנעה 4x4 מתקדמת.

## אבחון בעיות הנעה

### סימני בעיה:
- איבוד כוח במהירות גבוהה
- צריכת דלק מוגברת
- רעשי מנוע חריגים
- אור Check Engine

### בדיקות אלקטרוניות:
- קודי שגיאה ב-ECU
- מתח חשמלי
- חיישני חמצן
- חיישני טמפרטורה

## תהליך שדרוג מקצועי

### שלב 1: אופטימיזציה אוויר
1. החלף מסנן אוויר ביצועים
2. התקן intake קר
3. כוון חיישן MAP
4. בדוק זרימת אוויר

### שלב 2: מערכת דלק
1. נקה הזרקות דלק
2. החלף מסנן דלק
3. בדוק לחץ דלק
4. כוון תערובת אוויר-דלק

### שלב 3: מערכת פליטה
1. התקן מפלט ביצועים
2. כוון ECU למיפוי חדש
3. בדוק חיישני Lambda
4. התקן קטליזטור ספורט

## שדרוגים מומלצים

### ערכת ביצועים 1:
- מסנן אוויר K&N
- מפלט SuperTrapp
- מיפוי ECU

### ערכת ביצועים 2:
- טורבו קטן
- intercooler
- שדרוג ECU מלא

### ערכת ביצועים 3:
- מגדש על
- שדרוג מתלים
- בלמים משודרגים

## בדיקות מקצועיות

### מדידות ביצועים:
- הספק: 110-180HP
- מומנט: 140-200Nm
- צריכת דלק: 12-18L/100km

### בדיקות דינמיות:
- תאוצה 0-100km/h
- מהירות מרבית
- בלימה חירום

## טיפים מקצועיים

### תחזוקה שוטפת:
- החלף שמן כל 5,000km
- בדוק רצועות כל 50,000km
- נקה מסננים כל 10,000km

### בעיות נפוצות:
- חימום יתר - בדוק קירור
- איבוד כוח - בדוק חיישנים
- רעשים - בדוק רצועות

## בטיחות מקצועית

⚠️ **סכנה**: שינויים משפיעים על בטיחות
🛠️ **מקצועי**: עבוד עם מכונאי מוסמך
📊 **תיעוד**: שמור רשומות שינויים
🔧 **אחריות**: בדוק אחריות יצרן
    `,
    tags: ['RZR', 'הנעה', 'ביצועים', 'מנוע Rotax', 'שדרוגים']
  },
  // טרקטורונים
  {
    id: 6,
    title: 'תיקון מערכת חשמל בטרקטורון - אבחון ואיתור תקלות',
    category: 'טרקטורונים',
    difficulty: 'intermediate',
    estimatedTime: '75 דקות',
    parts: ['סוללה חדשה', 'אלטרנטור', 'מתנע', 'חוטי חשמל', 'פקקי נורות', 'כלי חשמל'],
    content: `
## מערכת חשמל בטרקטורון

מערכת 12V DC עם אלטרנטור וסוללה. חיונית להתנעה ובטיחות.

## אבחון בעיות חשמל

### סימני בעיה:
- קושי בהתנעה
- אורות חלשים
- רעשי מנוע חשמליים
- אור אזהרה בסוללה

### בדיקות בסיסיות:
- מתח סוללה (12.6V טעונה)
- זרם אלטרנטור (13.5-14.5V)
- חיבורי קרקע
- מצב רצועות

## תהליך תיקון מקצועי

### שלב 1: בדיקת סוללה
1. מדוד מתח פתוח
2. בדוק חומצה (אם רטובה)
3. בדוק קיבולת
4. החלף אם נדרש

### שלב 2: בדיקת אלטרנטור
1. בדוק רצועה (מתח 10mm)
2. מדוד זרם יציאה
3. בדוק דיודות
4. החלף אם תקול

### שלב 3: בדיקת מערכת התנעה
1. בדוק מתנע (זרם <150A)
2. נקה חיבורים
3. בדוק כבלים
4. החלף רכיבים פגומים

## טיפים מקצועיים

### תחזוקה שוטפת:
- בדוק סוללה חודשי
- נקה חיבורים מוקשים
- בדוק רצועות

### בעיות נפוצות:
- סוללה חלשה - טען או החלף
- אלטרנטור תקול - החלף יחידה
- חיבורים רופפים - נקה והדק

### שדרוגים מומלצים:
- סוללת AGM
- אלטרנטור משודרג
- מערכת התנעה דיגיטלית

## בטיחות חשמלית

⚡ **מתח**: 12V לא מסוכן אך זהירות
🔋 **סוללה**: חומצה מסוכנת
🛠️ **כלים**: השתמש בכלי מבודדים
🔍 **בדיקה**: כבה מערכת לפני עבודה
    `,
    tags: ['טרקטורונים', 'חשמל', 'סוללה', 'אלטרנטור', 'התנעה']
  },
  // ציוד מקצועי
  {
    id: 7,
    title: 'כיול כלי הרמה הידראוליים - דיוק מקצועי',
    category: 'ציוד מקצועי',
    difficulty: 'advanced',
    estimatedTime: '180 דקות',
    parts: ['משאבת הידראולית', 'צילינדרים', 'שסתומים', 'חיישנים', 'שמן הידראולי', 'כלי כיול'],
    content: `
## עקרון עבודה הידראולי

כוח נוזל לא דחוס. שמן הידראולי מעביר כוח בלחץ גבוה.

## אבחון בעיות הידראוליות

### סימני בעיה:
- הרמה איטית או חלשה
- רעשים הידראוליים
- דליפות שמן
- טמפרטורה גבוהה

### בדיקות מקצועיות:
- לחץ מערכת (2000-3000psi)
- זרימת שמן (גלון/דקה)
- טמפרטורת שמן (<60°C)
- רמת שמן

## תהליך כיול מקצועי

### שלב 1: בדיקת יסוד
1. בדוק רמת שמן
2. בדוק דליפות
3. נקה מסננים
4. בדוק רצועות

### שלב 2: כיול לחץ
1. התקן מד לחץ
2. הפעל משאבה
3. כוון שסתום relief
4. תעד ערכים

### שלב 3: כיול זרימה
1. מדוד זמן הרמה
2. חשב קצב זרימה
3. כוון שסתומים
4. בדוק יציבות

## טיפים מקצועיים

### סוגי שמן:
- AW32: כללי
- AW46: כבד
- AW68: כבד מאוד

### תחזוקה שוטפת:
- החלף שמן שנתי
- נקה מסננים חודשי
- בדוק לחצים יומי

### בעיות נפוצות:
- אוויר במערכת - דהר
- שמן מלוכלך - החלף
- שסתומים תקועים - נקה

## בטיחות הידראולית

⚠️ **לחץ**: 3000psi = סכנת פיצוץ
🛡️ **הגנה**: השתמש במשקפי בטיחות
🛠️ **כלים**: כלי מיוחדים בלבד
📋 **תיעוד**: רשום כל כיול
    `,
    tags: ['ציוד מקצועי', 'הידראולי', 'כיול', 'הרמה', 'שמן']
  },
  // מדריכי תיקון כלליים
  {
    id: 8,
    title: 'אבחון תקלות מנוע - שיטתיות מקצועית',
    category: 'מדריכי תיקון כלליים',
    difficulty: 'advanced',
    estimatedTime: '60 דקות',
    parts: ['סורק OBD-II', 'מד מתח', 'אוסצילוסקופ', 'כלי מדידה', 'חוברת שירות', 'מחשב אבחון'],
    content: `
## מתודולוגיית אבחון

אבחון שיטתי = 80% מהצלחה. בצע לפי סדר.

## שלבי אבחון מקצועי

### שלב 1: ראיון לקוח
1. תאר את הבעיה בדיוק
2. מתי זה קורה?
3. באיזה תנאים?
4. שינויים אחרונים?

### שלב 2: בדיקה חזותית
1. בדוק נוזלים (שמן, קירור, דלק)
2. חפש דליפות
3. בדוק חיבורים רופפים
4. האזן לרעשים

### שלב 3: בדיקות חשמליות
1. בדוק סוללה (12.6V+)
2. בדוק חוטי קרקע
3. סרוק קודי שגיאה
4. בדוק חיישנים

### שלב 4: בדיקות מכניות
1. בדוק רצועות
2. האזן למנוע
3. בדוק רעידות
4. מדוד לחצים

## כלי אבחון מקצועיים

### סורק OBD-II:
- קודי DTC
- פרמטרים בזמן אמת
- בדיקות אקטיביות
- ניקוי קודים

### אוסצילוסקופ:
- גלי חשמל
- אותות חיישנים
- בדיקות הזרקה
- ניתוח הצתה

### כלי מדידה:
- מד לחץ דלק
- מד זרימת אוויר
- מד טמפרטורה
- מד מתח

## בעיות נפוצות לפי סימפטום

### מנוע לא מתניע:
- סוללה חלשה
- התנע תקול
- חיישן מצב מנוע
- בעיית דלק

### מנוע רועד:
- מצתים פגומים
- חוטי הצתה
- חיישני חמצן
- בעיית דלק

### צריכת דלק גבוהה:
- מסנן אוויר סתום
- חיישני חמצן
- לחץ דלק נמוך
- הזרקות דלק

## טיפים מקצועיים

### גישה שיטתית:
- התחל מהפשוט
- אל תנחש
- תעד הכל
- בצע בדיקות

### כללי זהב:
- בדוק חשמל תחילה
- אל תתעלם מסימפטומים
- השווה לצד שני
- השתמש בחוברות שירות

## בטיחות ואתיקה

🛡️ **בטיחות**: כבה מנוע לפני עבודה
📚 **למידה**: המשך ללמוד
🤝 **יושר**: אל תגבה על תיקונים לא נחוצים
📋 **תיעוד**: רשום כל ממצא
    `,
    tags: ['אבחון', 'מנוע', 'שיטתיות', 'OBD-II', 'תקלות']
  }
]

const difficultyColors = {
  beginner: 'bg-green-500/20 text-green-400',
  intermediate: 'bg-yellow-500/20 text-yellow-400',
  advanced: 'bg-red-500/20 text-red-400'
}

const difficultyLabels = {
  beginner: 'מתחיל',
  intermediate: 'בינוני',
  advanced: 'מתקדם'
}

export default function ProGaragePage() {
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'all',
    'אופנועים',
    'רכבים',
    'RZR',
    'טרקטורונים',
    'ציוד מקצועי',
    'מדריכי תיקון כלליים'
  ]

  const filteredGuides = repairGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory
    const matchesSearch = searchTerm === '' ||
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      guide.content.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleGuide = (id: number) => {
    setExpandedGuide(expandedGuide === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-red-600 to-orange-600 py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <Wrench className="w-16 h-16 text-orange-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-black mb-4"
          >
            Pro Garage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            מדריכי תיקונים מקצועיים חינמיים - למתחילים ומקצוענים
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Wrench className="w-4 h-4 ml-2" />
              חינם ופתוח
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Star className="w-4 h-4 ml-2" />
              מקצועי ואיכותי
            </Badge>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="חפש מדריכים, תגים או תוכן..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg'
                        : 'bg-gray-700 text-white border-2 border-gray-600 hover:bg-gray-600 font-semibold'}
                    >
                      {category === 'all' ? 'הכל' : category}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                נמצאו {filteredGuides.length} מדריכים מתוך {repairGuides.length}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Repair Guides */}
        <div className="space-y-6">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleGuide(guide.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="text-right flex-1">
                      <CardTitle className="text-xl text-white mb-2">{guide.title}</CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge className="bg-blue-500/20 text-blue-400">{guide.category}</Badge>
                        <Badge className={difficultyColors[guide.difficulty]}>
                          {difficultyLabels[guide.difficulty]}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 ml-1" />
                          {guide.estimatedTime}
                        </div>
                        <div className="flex items-center">
                          <Wrench className="w-4 h-4 ml-1" />
                          {guide.parts.length} חלקים
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {expandedGuide === guide.id ? (
                        <ChevronUp className="w-6 h-6 text-orange-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-orange-400" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {expandedGuide === guide.id && (
                  <CardContent className="pt-0">
                    <div className="border-t border-gray-700 pt-6">
                      {/* Tags */}
                      <div className="flex gap-2 mb-6">
                        {guide.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Parts Required */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">חלקים נדרשים:</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {guide.parts.map((part, partIndex) => (
                            <div key={partIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                              {part}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="prose prose-invert max-w-none">
                        <div
                          className="text-gray-300 leading-relaxed text-right"
                          dangerouslySetInnerHTML={{
                            __html: guide.content.replace(/\n/g, '<br>').replace(/^## (.+)$/gm, '<h3 class="text-orange-400 font-semibold mt-6 mb-3">$1</h3>')
                          }}
                        />
                      </div>

                      {/* Safety Notice */}
                      {guide.difficulty === 'advanced' && (
                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                          <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 ml-2 mt-0.5" />
                            <div className="text-right">
                              <h4 className="font-semibold text-yellow-400 mb-1">אזהרת בטיחות</h4>
                              <p className="text-yellow-200 text-sm">
                                מדריך זה מיועד למקצוענים עם ניסיון. אם אינך בטוח ביכולותיך,
                                פנה למכונאי מוסמך כדי למנוע נזק או סכנת בטיחות.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
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
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 border-none">
            <CardContent className="p-8 text-white">
              <Wrench className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">צריך עזרה מקצועית?</h2>
              <p className="text-xl mb-6">
                המדריכים שלנו חינמיים, אבל אם אתה צריך עזרה מקצועית - אנחנו כאן בשבילך
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => window.location.href = '/service-call'}
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 font-black text-lg"
                >
                  בקש שירות מקצועי
                </Button>
                <Button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 px-8 py-3 font-black text-lg"
                  onClick={() => window.open('tel:0524823435', '_blank')}
                >
                  📞 התקשר לייעוץ
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Newsletter & External Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500/30">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Newsletter Signup */}
                <div className="text-center lg:text-right">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-4">
                    📧 הרשמה לניוזלטר
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">קבל עדכונים חמים!</h3>
                  <p className="text-gray-300 mb-4">
                    הירשם וקבל מדריכים חדשים, טיפים מקצועיים וקישורים לאתרי תיקונים מתקדמים ישירות למייל
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="הזן את האימייל שלך..."
                      className="flex-1 px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    />
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 font-bold hover:from-blue-400 hover:to-purple-500">
                      הירשם עכשיו
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">* לאחר ההרשמה תקבל גישה לקישורים המובילים בתחום</p>
                </div>

                {/* External Resources */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">🔧 משאבים מומלצים</h3>

                  <a
                    href="https://www.startmycar.com/search?query=motorcycle&originalQuery=motorcycle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-orange-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏍️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors">StartMyCar - מדריכי אופנועים</h4>
                        <p className="text-sm text-gray-400">סרטונים ומדריכי תיקון מפורטים לאופנועים מכל הסוגים</p>
                      </div>
                      <span className="text-gray-400 group-hover:text-orange-400">→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.ifixit.com/Device/Car_and_Truck"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">iFixit - תיקון רכבים ומשאיות</h4>
                        <p className="text-sm text-gray-400">מדריכים מקצועיים לתיקון כל סוגי הרכבים</p>
                      </div>
                      <span className="text-gray-400 group-hover:text-blue-400">→</span>
                    </div>
                  </a>

                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
                    <p className="text-green-400 text-sm font-medium">✅ הירשם לניוזלטר וקבל גישה למאגר מלא של משאבים מתקדמים!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}