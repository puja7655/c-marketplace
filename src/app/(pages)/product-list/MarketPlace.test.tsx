import { render, screen } from '@testing-library/react';
import { GlobalContextProvider } from '@/app/Context/store';
import MarketPlace from './page';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock('../../../components/Search', () => {
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

        expect(screen.getByText('Mini Marketplace')).toBeInTheDocument();
    });

    it('renders Mini Marketplace header', () => {
        render(<MarketPlace searchParams={{}} />);
        expect(screen.getByText('Mini Marketplace')).toBeInTheDocument();
    });
});
