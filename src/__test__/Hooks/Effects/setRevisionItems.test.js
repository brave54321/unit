import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { prettyDOM } from '@testing-library/dom';
import { server } from '../../Mocks/server.js';
import RequestsRevision from '../../../pages/ManagePermissions';

// Mock server: Fake REST-API calls -> Tests remain unitary (Integration/e2e: Cypress)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Testing Effects", () => {
    test('Requests are initially loaded', async () => {
        /*render(<RequestsRevision/>)
        const kk = await screen
        console.log("kk")
        console.log(prettyDOM(kk)) */
    })
})