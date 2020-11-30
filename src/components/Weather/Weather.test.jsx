import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render sunny", async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={"10"} state="sunny" />)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})

test("Weather render cloud", async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={"10"} state="cloud" />)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})


