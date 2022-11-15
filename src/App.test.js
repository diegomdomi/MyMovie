import { render, screen,create } from '@testing-library/react';
import App from './App';
import ApiMovie from './components/ApiMovie'
test('renders learn react link', () => {
  render(<App />);
  const linkElement = create(<ApiMovie/>);
  expect(linkElement).toBeInTheDocument();
});
