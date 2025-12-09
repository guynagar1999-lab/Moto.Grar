'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

export default function Error({
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
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="text-center max-w-md mx-auto p-8 bg-gray-900 border border-red-500/30 rounded-2xl shadow-2xl">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                    משהו השתבש...
                </h2>

                <p className="text-gray-400 mb-8">
                    נתקלנו בבעיה לא צפויה. הצוות הטכני שלנו כבר בודק את זה.
                </p>

                <Button
                    onClick={reset}
                    className="w-full neon-glow bg-red-600 hover:bg-red-700"
                >
                    <RefreshCcw className="w-4 h-4 ml-2" />
                    נסה שוב
                </Button>
            </div>
        </div>
    )
}
