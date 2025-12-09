import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'
import { generateSEO, pageSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO(pageSEO.blog)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            הבלוג <span className="text-orange-500">שלנו</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            טיפים, מדריכים וחדשות מעולם האופנועים והחילוץ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-gray-900 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                {/* Placeholder for image - in real app would be next/image */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <span className="text-4xl opacity-20 font-bold">MotoGrar</span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-orange-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2 text-gray-400">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Link href={`/blog/${post.slug}`} className="w-full">
                  <Button className="w-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    קרא עוד
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}