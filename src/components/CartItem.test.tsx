import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import { Project } from '@/data/projects';

// Mocking next/image to avoid issues with its usage in tests
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />);

describe('CartItem Component', () => {
  const mockProject: Project = {
    id: 1,
    name: 'Test Project',
    description: 'Test Description',
    image: 'test-image.jpg',
  };

  const mockItem = { project: mockProject, volume: 5 };

  it('renders CartItem component correctly', () => {
    render(<CartItem item={mockItem} />);

    //screen queries are used to assert the presence of elements
    expect(screen.getByText(`Quantity : ${mockItem.volume}`)).toBeInTheDocument();
  });
});
