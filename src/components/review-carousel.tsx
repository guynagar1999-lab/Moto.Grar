"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import reviewsData from "@/data/reviews.json"

export function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-20 bg-linear-to-b from-gray-900 to-black overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        לקוחות <span className="text-orange-500">ממליצים</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        אלפי רוכבים כבר סומכים עלינו. הנה מה שהם אומרים.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-0"
                        >
                            <Card className="bg-gray-800/50 backdrop-blur-md border-orange-500/20 h-full">
                                <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center text-center h-full relative">
                                    <Quote className="absolute top-8 left-8 w-12 h-12 text-orange-500/20 rotate-180" />
                                    <Quote className="absolute bottom-8 right-8 w-12 h-12 text-orange-500/20" />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-6 h-6 ${i < reviewsData[currentIndex].rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-600"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic">
                                        &quot;{reviewsData[currentIndex].text}&quot;
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <h4 className="text-lg font-bold text-white mb-1">
                                            {reviewsData[currentIndex].author}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="text-orange-400">{reviewsData[currentIndex].source}</span>
                                            <span>•</span>
                                            <span>{reviewsData[currentIndex].date}</span>
                                            <CheckCircle className="w-4 h-4 text-green-500 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {reviewsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
