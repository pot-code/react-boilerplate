import React from 'react'
import { render, cleanup } from '@testing-library/react'

import serve from './mock'
import App from './app'

beforeEach(() => {
  serve()
})

afterEach(cleanup)

it('App crashing', () => {
  render(<App />)
})
