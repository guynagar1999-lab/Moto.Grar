"use client"

import * as React from "react"
import { Phone, Flame } from "lucide-react"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SmartContactButtonProps extends ButtonProps {
    phoneNumber: string
    showIcon?: boolean
}

export function SmartContactButton({
    phoneNumber,
    className,
    children,
    showIcon = true,
    ...props
}: SmartContactButtonProps) {
    const [isEmergencyHours, setIsEmergencyHours] = React.useState(false)

    React.useEffect(() => {
        const checkTime = () => {
            const hour = new Date().getHours()
            // Emergency hours: 20:00 - 06:00
            setIsEmergencyHours(hour >= 20 || hour < 6)
        }

        checkTime()
        const timer = setInterval(checkTime, 60000) // Check every minute
        return () => clearInterval(timer)
    }, [])

    return (
        <Button
            className={cn(
                "relative overflow-hidden transition-all duration-500",
                isEmergencyHours && "animate-pulse shadow-red-500/50 shadow-lg border-red-500/50",
                className
            )}
            onClick={() => window.open(`tel:${phoneNumber}`, '_blank')}
            {...props}
        >
            {isEmergencyHours && (
                <span className="absolute inset-0 bg-red-500/20 animate-pulse pointer-events-none" />
            )}

            <div className="relative z-10 flex items-center justify-center gap-2">
                {showIcon && (
                    isEmergencyHours ? (
                        <Flame className="w-5 h-5 text-red-400 animate-bounce" />
                    ) : (
                        <Phone className="w-5 h-5" />
                    )
                )}
                <span>{children || (isEmergencyHours ? "חילוץ חירום 24/7" : "התקשר עכשיו")}</span>
            </div>
        </Button>
    )
}
