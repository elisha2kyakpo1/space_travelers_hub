import React from 'react';
import { Missions } from '../Missions';
import { render, fireEvent, screen } from '../../../test';

describe('Missions', () => {
  it('renders page correctly', () => {
    const tree = render(<Missions />);
    expect(tree).toMatchSnapshot();
  });

  it('updates the UI with loaded missions', async () => {
    render(<Missions />);
    expect(await screen.findByText('Thaicom is the name of a series of communications')).toBeInTheDocument();
  });

  it('notifies the user of the mission join status', async () => {
    render(<Missions />);
    expect(await screen.findByText(/NOT A MEMBER/i)).toBeInTheDocument();
  });

  it('updates the mission join status when the user clicks on the "Join Mission" button', async () => {
    render(<Missions />);
    expect(await screen.findByText('NOT A MEMBER')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Join Mission/i }));
    expect(await screen.findByText('Active Member')).toBeInTheDocument();
  });

  it('updates the mission join status when the user clicks on the "Leave Mission" button', async () => {
    render(<Missions />);
    expect(await screen.findByText('NOT A MEMBER')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Join Mission/i }));
    expect(await screen.findByText('Active Member')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Leave Mission' }));
    expect(await screen.findByText('NOT A MEMBER')).toBeInTheDocument();
  });
});
