import { render, screen } from '@testing-library/react';
import { GlobalContextProvider } from '@/app/Context/store';
import MarketPlace from './page';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

// Mock the next/link component to avoid issues
jest.mock('next/link', () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);


jest.mock('@/components/Search', () => {
    return {
        __esModule: true,
        default: jest.fn(() => <div data-testid="mocked-search">Mocked Search Component</div>),
    };
});

const renderComponent = () => {
    render(
        <GlobalContextProvider>
            <MarketPlace searchParams={{}} />
        </GlobalContextProvider>
    );
};

describe('MarketPlace Component', () => {
    it('renders MarketPlace component correctly', () => {
        renderComponent();

        // Use screen queries to assert the presence of elements
        expect(screen.getByText('Mini Marketplace')).toBeInTheDocument();
        // Add more assertions based on your component structure
    });

    it('renders Mini Marketplace header', () => {
        render(<MarketPlace searchParams={{}} />);
        expect(screen.getByText('Mini Marketplace')).toBeInTheDocument();
    });
});
