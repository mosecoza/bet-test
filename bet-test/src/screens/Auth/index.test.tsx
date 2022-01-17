import { render, screen } from '@testing-library/react';
import AuthPage from "./AuthPage";
test('AuthPage', () => {
  render(<AuthPage />);
  const element = screen.getByText(/login/i);
  expect(element).toBeInTheDocument();
});
