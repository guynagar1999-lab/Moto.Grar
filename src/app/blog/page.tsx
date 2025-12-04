'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Pin, Calendar, User, ArrowRight, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const pinnedPost = {
  id: 'angelos-platform',
  title: 'Angel0S-Platform – Business & Personal Promotion Services',
  excerpt: 'Professional web development, business promotion, and digital marketing services. Transform your business with cutting-edge technology and strategic marketing solutions.',
  content: `
    <h3>🚀 Why Choose Angel0S-Platform?</h3>
    <p>Angel0S-Platform specializes in creating stunning, high-performance websites and digital marketing solutions that drive real business results. Our expertise spans from modern web development to comprehensive business promotion strategies.</p>

    <h3>💼 Our Services Include:</h3>
    <ul>
      <li><strong>Custom Website Development</strong> - Next.js, React, and modern frameworks</li>
      <li><strong>Business Promotion</strong> - SEO optimization and digital marketing</li>
      <li><strong>E-commerce Solutions</strong> - Complete online store setups</li>
      <li><strong>Mobile App Development</strong> - iOS and Android applications</li>
      <li><strong>Brand Strategy</strong> - Complete brand identity and positioning</li>
      <li><strong>Content Creation</strong> - Professional copywriting and multimedia</li>
    </ul>

    <h3>🌟 Success Stories</h3>
    <p>We've helped numerous businesses achieve their digital goals, from local service providers to international brands. Our MotoGrar website is just one example of our commitment to excellence and innovation.</p>

    <h3>📞 Ready to Transform Your Business?</h3>
    <p>Contact us today to discuss your project and discover how we can help you achieve your digital marketing goals.</p>
  `,
  author: 'Angel0S Team',
  date: '2024-12-04',
  readTime: '3 min read',
  category: 'Business Promotion',
  tags: ['Web Development', 'Digital Marketing', 'Business Growth', 'SEO'],
  featured: true,
  image: '/images/gallery/equipment-1.jpg',
  externalUrl: 'https://angel0s-platform.vercel.app'
}

const blogPosts = [
  {
    id: 'motorcycle-maintenance',
    title: 'Essential Motorcycle Maintenance Tips',
    excerpt: 'Keep your motorcycle running smoothly with these professional maintenance tips from our expert technicians.',
    author: 'Guy Nagar',
    date: '2024-11-15',
    readTime: '5 min read',
    category: 'Maintenance',
    tags: ['Motorcycle', 'Maintenance', 'Tips'],
    featured: false
  },
  {
    id: 'atv-safety',
    title: 'ATV Safety Guidelines for Off-Road Adventures',
    excerpt: 'Essential safety tips and guidelines for safe ATV riding in various terrains and conditions.',
    author: 'Guy Nagar',
    date: '2024-11-10',
    readTime: '4 min read',
    category: 'Safety',
    tags: ['ATV', 'Safety', 'Off-Road'],
    featured: false
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Business Promotion', 'Maintenance', 'Safety']


  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-orange-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-4"
          >
            הבלוג שלנו
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            טיפים, עצות וחדשות מהעולם של גרירת אופנועים
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white neon-glow'
                  : 'bg-black/50 backdrop-blur border-orange-500/30 text-orange-400 hover:bg-orange-500/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Pinned Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-linear-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 border-blue-500/30 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
                  <Pin className="w-4 h-4 ml-2" />
                  פוסט מוצמד - שירותים מקצועיים
                </Badge>
              </div>
              <CardTitle className="text-3xl moto-gradient-text text-center">
                {pinnedPost.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-300 mt-4">
                {pinnedPost.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Post Meta */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 ml-2" />
                  {pinnedPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 ml-2" />
                  {new Date(pinnedPost.date).toLocaleDateString('he-IL')}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 ml-2" />
                  {pinnedPost.readTime}
                </div>
              </div>

              {/* Content Preview */}
              <div
                className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-right prose prose-invert"
                dangerouslySetInnerHTML={{
                  __html: pinnedPost.content.substring(0, 500) + '...'
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {pinnedPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-blue-500/30 text-blue-400">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center pt-6">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open(pinnedPost.externalUrl, '_blank')}
                >
                  <ExternalLink className="w-5 h-5 ml-3" />
                  בקר באתר Angel0S-Platform
                  <ArrowRight className="w-5 h-5 mr-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="bg-linear-to-br from-gray-900 to-black border-orange-500/30 h-full hover:border-orange-500/60 transition-all duration-300 card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-orange-500/20 text-orange-400">
                      {post.category}
                    </Badge>
                    <div className="text-sm text-gray-400">
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white hover:text-orange-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 ml-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-2" />
                      {new Date(post.date).toLocaleDateString('he-IL')}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-linear-to-br from-orange-600 to-red-600 border-none">
            <CardContent className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">יש לך שאלות על גרירת אופנועים?</h2>
              <p className="text-xl mb-6">
                כתב לנו בבלוג או צור קשר לשאלות מקצועיות
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                    צור קשר
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
                  onClick={() => window.open('tel:0524823435', '_blank')}
                >
                  התקשר עכשיו
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}