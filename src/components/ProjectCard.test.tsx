// ProjectCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/projects';

// Mocking next/image to avoid issues with its usage in tests
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />);

describe('ProjectCard Component', () => {
    const mockProject: Project = {
        id: 1,
        name: 'Test Project',
        description: 'Test Description',
        image: 'test-image.jpg',
    };

    it('renders ProjectCard component correctly', () => {
        render(<ProjectCard project={mockProject} onAddToCart={jest.fn()} />);

        expect(screen.getByText('Project Name')).toBeInTheDocument();
        expect(screen.getByText(mockProject.name)).toBeInTheDocument();
        // Add more assertions based on your component structure
    });

    xit('calls onAddToCart function when "Add to Cart" button is clicked', () => {
        const mockOnAddToCart = jest.fn();
        render(<ProjectCard project={mockProject} onAddToCart={mockOnAddToCart} />);

        //userEvent to simulate user interactions
        userEvent.type(screen.getByPlaceholderText('Enter volume'), '10');
        userEvent.click(screen.getByText('Add to Cart'));

        // Verify that the onAddToCart function is called with the expected arguments
        expect(mockOnAddToCart).toHaveBeenCalledWith('10', mockProject);
    });
});
