import React from 'react';
import { render } from '@testing-library/react';
import { Note } from '../src/Note';

describe('Note', function () {
  it('renders', () => {
    const tree = render(<Note>hello world</Note>);

    expect(tree).toBeTruthy();
  });
});
