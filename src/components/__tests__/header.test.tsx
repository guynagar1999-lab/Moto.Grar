import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../header'

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
}))

describe('Header', () => {
  beforeEach(() => {
    // Mock window.innerWidth for desktop view
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  it('renders the logo and navigation', () => {
    render(<Header />)

    expect(screen.getByText('MotoGrar')).toBeTruthy()
    expect(screen.getByText('בית')).toBeTruthy()
    expect(screen.getByText('שירותים')).toBeTruthy()
  })

  it('shows mobile menu button on small screens', () => {
    // Mock mobile screen
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })

    render(<Header />)

    expect(screen.getByTestId('menu-icon')).toBeTruthy()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })

    render(<Header />)

    const menuButton = screen.getByTestId('menu-icon')
    fireEvent.click(menuButton)

    // Menu should be open
    expect(screen.getByText('קריאת שירות')).toBeTruthy()
  })

  it('shows contact buttons', () => {
    render(<Header />)

    expect(screen.getByText('052-482-3435')).toBeTruthy()
    expect(screen.getByText('WhatsApp')).toBeTruthy()
  })
})