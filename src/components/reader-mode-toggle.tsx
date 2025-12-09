"use client"

import * as React from "react"
import { BookOpen, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ReaderModeToggle() {
    const [isReaderMode, setIsReaderMode] = React.useState(false)

    React.useEffect(() => {
        // Check session storage on mount
        const stored = sessionStorage.getItem("reader-mode")
        if (stored === "true") {
            setIsReaderMode(true)
            document.documentElement.classList.add("reader-mode")
        }
    }, [])

    const toggleReaderMode = () => {
        const newState = !isReaderMode
        setIsReaderMode(newState)
        sessionStorage.setItem("reader-mode", String(newState))

        if (newState) {
            document.documentElement.classList.add("reader-mode")
        } else {
            document.documentElement.classList.remove("reader-mode")
        }
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleReaderMode}
            className="relative"
            title={isReaderMode ? "Disable Reader Mode" : "Enable Reader Mode"}
        >
            <AnimatePresence mode="wait">
                {isReaderMode ? (
                    <motion.div
                        key="active"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                    >
                        <X className="w-5 h-5 text-orange-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="inactive"
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -90 }}
                    >
                        <BookOpen className="w-5 h-5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Button>
    )
}
