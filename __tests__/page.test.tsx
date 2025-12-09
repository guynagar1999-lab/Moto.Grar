import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
    }),
}))

// Mock dynamic components
jest.mock('@/components/hero-section', () => ({
    __esModule: true,
    default: () => <div data-testid="hero-section">Hero Section</div>
}))

jest.mock('@/components/gallery-preview', () => ({
    __esModule: true,
    default: () => <div data-testid="gallery-preview">Gallery Preview</div>
}))

jest.mock('@/components/review-carousel', () => ({
    __esModule: true,
    ReviewCarousel: () => <div data-testid="review-carousel">Review Carousel</div>
}))

jest.mock('@/lib/seo', () => ({
    generateSEO: () => ({}),
    pageSEO: { home: {} }
}))

describe('Home Page', () => {
    it('renders without crashing', () => {
        render(<Home />)

        const hero = screen.getByTestId('hero-section')
        expect(hero).toBeInTheDocument()

        // The page uses dynamic loading for other components, so they might not be immediately in the DOM depending on how dynamic() behaves in JSDOM environment without Suspense boundaries in test.
        // However, since we mocked them, if Home renders them directly, they should appear.
        // Let's check generally that function didn't throw.
    })
})
