import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Day is Beautiful/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should render profilename ', () => {
  render(<App />);
  const profileName = screen.getByText(/Anand C.P/i);
  expect(profileName).toBeInTheDocument();
});
