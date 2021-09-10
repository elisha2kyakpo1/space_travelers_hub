import React from 'react';
import { render, fireEvent, screen } from '../../../test';
import Rockets from '../Rockets';

describe('Rockets', () => {
  it('renders page correctly', () => {
    const tree = render(<Rockets />);
    expect(tree).toMatchSnapshot();
  });

  it('updates the UI with loaded Rockets', async () => {
    render(<Rockets />);
    expect(await screen.findByTitle(/Rockets-div/i)).toBeInTheDocument();
  });

  it('displays "Reserve Rocket" button', async () => {
    render(<Rockets />);
    expect(await screen.findByText('Reserve rocket')).toBeInTheDocument();
  });

  it('turns Reserve Rocket button to Cancel Reservation button after click', async () => {
    render(<Rockets />);
    expect(await screen.findByTitle('Rockets-div')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Reserve rocket/i }));
    expect(await screen.findByTitle('title')).toBeInTheDocument();
  });
});
