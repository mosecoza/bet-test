import { render, screen } from '@testing-library/react';
import AuthPage from "./AuthPage";
test('renders learn react link', () => {
  render(<AuthPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
