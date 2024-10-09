import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

const allData = [
  { 
    "name": "Jane Coder",
    "id": 1
  },{ 
    "name": "Fred Coder",
    "id": 2
  }
];

describe('Home', () => {
  it('renders a link', () => {
    render(<Home allData={allData} />);
 
    const aLink = screen.getByRole('link', {
      name: /Jane Coder/i,
    });
 
    expect(aLink).toBeInTheDocument()
  });
})

/*
describe('Home', () => {
  it('renders a link', () => {
    render(<Link />)

    const heading = screen.getByRole('link', {
      name: /South Park Characters/i,
    })
    expect(aLink).toBeInTheDocument()
  })
})
  */