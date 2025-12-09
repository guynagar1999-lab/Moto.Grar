import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { generateArticleStructuredData } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock, User, Share2 } from 'lucide-react'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) return {}

    // ... rest of metadata
    return {
        title: `${post.title} | Grar Alfa Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    }
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    const structuredData = generateArticleStructuredData({
        title: post.title,
        description: post.excerpt,
        url: `https://grar-alfa.co.il/blog/${post.slug}`,
        publishedTime: post.date,
        author: post.author,
        image: `https://grar-alfa.co.il${post.image}`,
    })

    return (
        <article className="min-h-screen bg-black pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="container mx-auto px-4 max-w-3xl">
                <Link href="/blog">
                    <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
                        <ArrowRight className="w-4 h-4 ml-2" />
                        חזרה לבלוג
                    </Button>
                </Link>

                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-orange-400 mb-4">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <User className="w-4 h-4" />
                        <span>מאת: {post.author}</span>
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-orange-500 prose-a:text-orange-400 hover:prose-a:text-orange-300">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                        <Share2 className="w-4 h-4 ml-2" />
                        שתף מאמר
                    </Button>
                </div>
            </div>
        </article>
    )
}
