import { describe, it, expect } from 'bun:test';
import { Counter } from './counter';

import { render } from "@testing-library/react"

describe('Counter', () => {
  it('renders the button', () => {
    const a = render(<Counter />);

    expect(a.getByText('click me')).toBeTruthy();
  });
})

