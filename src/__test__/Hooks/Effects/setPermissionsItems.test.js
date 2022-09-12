import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { prettyDOM } from '@testing-library/dom';
import ManagePermissions from '../../../pages/ManagePermissions';
import { server } from '../../Mocks/server.js';

// Mock server: Fake REST-API calls -> Tests remain unitary (Integration/e2e: Cypress)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Testing Effects", () => {
    test('Permissions are initially loaded', async () => {
        render(<ManagePermissions/>)
        //const kk = await screen.getByText("No permissions have been assigned on datasets controlled by your DAC")
    })
})