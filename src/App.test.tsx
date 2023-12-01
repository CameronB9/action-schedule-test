import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { test, expect, describe } from 'vitest'
import '@testing-library/jest-dom'
import App from './App';

function setup() {
    return render(
        <App />
    )
}

describe('App.tsx', () => {
    test('App renders correctly', () => {
        const { getByText } = setup();
        expect(getByText('Vite + React')).toBeInTheDocument()
    });

    test('Count starts at 0', () => {
        const { getByText } = setup();
        expect(getByText('count is 0')).toBeInTheDocument();
    });

    test('Count increments correctly when button is clicked', async () => {
        const { getByText } = setup();
        userEvent.click(getByText('count is 0'));
        await waitFor(() => {
            expect(getByText('count is 1')).toBeInTheDocument();
        })
    });

    test('Count increases when button is clicked multiple times', async () => {
        const { getByText } = setup();
        for (let i = 0; i < 10; i++) {
            userEvent.click(getByText(/^count is/))
        }

        await waitFor(() => {
            expect(getByText('count is 10')).toBeInTheDocument();
        })
    });
})

