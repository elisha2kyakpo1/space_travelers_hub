import React from 'react';
import { Missions } from '../Missions';
import { render, screen } from '../../../test';

describe('Missions', () => {
  it('renders page correctly', () => {
    const tree = render(<Missions />);
    expect(tree).toMatchSnapshot();
  });

  it('updates the UI with loaded missions', async () => {
    render(<Missions />);
    expect(await screen.findByText('Mission Name')).toBeInTheDocument();
  });

  it('notifies the user of the mission join status', async () => {
    render(<Missions />);
    expect(await screen.findByText('Status')).toBeInTheDocument();
  });

  it('Shows the description', async () => {
    render(<Missions />);
    expect(await screen.findByText('Description')).toBeInTheDocument();
  });
});
