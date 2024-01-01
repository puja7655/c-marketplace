import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './page';

import { Project } from "@/data/projects";

const mockCartData = [
  { project: { id: 1, name: 'Project 1', image: 'project1.jpg', description: 'Description 1' } as Project, volume: 5 },
  { project: { id: 2, name: 'Project 2', image: 'project2.jpg', description: 'Description 2' } as Project, volume: 10 },
];

describe('Cart Component', () => {
  beforeEach(() => {
    //(useGlobalContext as jest.Mock).mockReturnValue({ cartData: mockCartData });
  });

  test('displays Back to Marketplace link', () => {
    render(<Cart />);

    const backButton = screen.getByText('Back to Marketplace');
    expect(backButton).toBeInTheDocument();
  });
});
