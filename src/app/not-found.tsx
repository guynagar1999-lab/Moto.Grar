"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Home, Phone } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black" />
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" className="tire-spin">
                        <defs>
                            <pattern id="tirePattern404" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#ff6b35" strokeWidth="2" />
                                <path d="M50 10 L50 90 M10 50 L90 50" stroke="#ff6b35" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#tirePattern404)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600 mb-4">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        אופס! נראה שנתקעת בשטח...
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        הדף שחיפשת לא נמצא. אל דאגה, אנחנו נחלץ אותך מפה ונחזיר אותך למסלול.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/">
                        <Button size="xl" className="w-full sm:w-auto neon-glow">
                            <Home className="w-5 h-5 ml-2" />
                            חזרה לדף הבית
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size="xl"
                        className="w-full sm:w-auto border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                        onClick={() => window.open('tel:0524823435', '_blank')}
                    >
                        <Phone className="w-5 h-5 ml-2" />
                        צריך חילוץ אמיתי?
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}
