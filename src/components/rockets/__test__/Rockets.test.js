import React from 'react';
import { render, screen } from '../../../test';
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
});
