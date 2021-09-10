import { render, fireEvent, screen } from './test';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/my profile/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  it('renders page correctly', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('it loads "Rockets" on first render', async () => {
    render(<App />);
    expect(await screen.findByText('Rockets')).toBeInTheDocument();
  });

  it('navigates to Missions and displays missions', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'Missions' }));
    expect(await screen.findByText('Description')).toBeInTheDocument();
  });

  it('navigates to "Profile" and displays user bookings', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'My Profile' }));
    expect(await screen.findByText('NO MISSIONS JOINED YET')).toBeInTheDocument();
    expect(await screen.findByText('NO ROCKET BOOKED YET')).toBeInTheDocument();
  });

  it('displays "Reserve Rocket" button', async () => {
    render(<App />);
    expect(await screen.findByText('My Rockets')).toBeInTheDocument();
  });
});
