import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

// Mock the API response
const mockProperties = [
  {
    id: 1,
    title: 'Test Property',
    description: 'This is a test property',
    price: 100000,
    image: 'test-image.jpg',
  },
];

// Mock axios
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProperties),
  })
) as jest.Mock;

describe('Home Page', () => {
  it('renders the main heading', async () => {
    render(await Page());
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Available Properties');
  });

  it('displays property cards when data is loaded', async () => {
    render(await Page());
    expect(await screen.findByText('Test Property')).toBeInTheDocument();
    expect(screen.getByText('This is a test property')).toBeInTheDocument();
    expect(screen.getByText('$100,000')).toBeInTheDocument();
  });
});
