'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html lang="he" dir="rtl">
            <body className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="text-center p-8">
                    <h2 className="text-3xl font-bold mb-4">שגיאה קריטית במערכת</h2>
                    <Button onClick={() => reset()}>נסה שוב</Button>
                </div>
            </body>
        </html>
    )
}
