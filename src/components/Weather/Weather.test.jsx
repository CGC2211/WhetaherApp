import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render sunny", async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={10} state="clear" />)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent(1)
})

test("Weather render cloud", async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={10} state="clouds" />)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent(10)
})


