import { render, screen, fireEvent, act } from '@testing-library/react'
import Header from '../header'
import { LanguageProvider } from '@/lib/i18n'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <header {...props}>{children}</header>,
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren<Record<string, unknown>>) => <>{children}</>,
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  X: () => <div data-testid="close-icon">X</div>,
  Phone: () => <div data-testid="phone-icon">Phone</div>,
  MessageCircle: () => <div data-testid="message-icon">Message</div>,
  Truck: () => <div data-testid="truck-icon">Truck</div>,
  ChevronDown: () => <div data-testid="chevron-icon">Chevron</div>,
  Home: () => <div data-testid="home-icon">Home</div>,
  Info: () => <div data-testid="info-icon">Info</div>,
  Briefcase: () => <div data-testid="briefcase-icon">Briefcase</div>,
  BookOpen: () => <div data-testid="book-open-icon">BookOpen</div>,
  MapPin: () => <div data-testid="map-pin-icon">MapPin</div>,
  Zap: () => <div data-testid="zap-icon">Zap</div>,
  Image: () => <div data-testid="image-icon">Image</div>,
  Languages: () => <div data-testid="languages-icon">Languages</div>,
  Check: () => <div data-testid="check-icon">Check</div>
}))

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {ui}
    </LanguageProvider>
  )
}

describe('Header', () => {
  beforeEach(() => {
    // Mock window.innerWidth for desktop view by default
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })

    // Dispatch resize event to update state
    window.dispatchEvent(new Event('resize'))
  })

  it('renders the logo and navigation', async () => {
    await act(async () => {
      renderWithProviders(<Header />)
    })

    expect(screen.getByText('MotoGrar')).toBeTruthy()
    // Use getAllByText because text might be present in both desktop and mobile menus if rendered
    expect(screen.getAllByText(/בית/i)[0]).toBeTruthy()
  })

  it('shows mobile menu button on small screens', async () => {
    // Mock mobile screen
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })
    window.dispatchEvent(new Event('resize'))

    await act(async () => {
      renderWithProviders(<Header />)
    })

    expect(screen.getByTestId('menu-icon')).toBeTruthy()
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })
    window.dispatchEvent(new Event('resize'))

    await act(async () => {
      renderWithProviders(<Header />)
    })

    const menuButton = screen.getByTestId('menu-icon')

    await act(async () => {
      fireEvent.click(menuButton)
    })

    // Menu should be open, check for a menu item
    expect(screen.getAllByText(/קריאת שירות/i)[0]).toBeTruthy()
  })
})