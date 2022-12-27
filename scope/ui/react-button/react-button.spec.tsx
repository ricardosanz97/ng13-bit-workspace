import React from 'react';
import { render } from '@testing-library/react';
import { BasicReactButton } from './react-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicReactButton />);
  const rendered = getByText('React-Click me!');
  expect(rendered).toBeTruthy();
});
