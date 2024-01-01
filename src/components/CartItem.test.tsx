// CartItem.test.tsx
import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import { Project } from '@/data/projects';

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
    expect(screen.getByText(`${mockProject.name} - ${mockItem.volume} units`)).toBeInTheDocument();
  });
});
