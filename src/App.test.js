// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Lens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Lens/i);
    expect(titleElement).toBeInTheDocument();
});
