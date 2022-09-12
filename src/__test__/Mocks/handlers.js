import { rest } from 'msw';

const { REACT_APP_DAC_PORTAL_API_URL, REACT_APP_PERMISSIONS_URL } = process.env

export const handlers = [
    rest.get(`${REACT_APP_DAC_PORTAL_API_URL}/dac/requests/accepted`, (req, res, ctx) => {
        return res(
            ctx.json([{
                _id: "a",
                user: "a",
                fileId: "003",
                resource: "nc:172.21.0.1:7080:003",
                comment: "i need access",
                status: "Accepted"
            }])
        )
    }),
    rest.get(`${REACT_APP_PERMISSIONS_URL}/permissions`, (req, res, ctx) => {
        return res(
            ctx.json([{
                sub: "a",
                asserted: "b",
                by: "dac",
                source: "https://test-url/source-dac",
                type: "ControlledAccessGrants",
                value: "nc:172.21.0.1:7080:003"
            }])
        )
    }),
    rest.get(`${REACT_APP_DAC_PORTAL_API_URL}/user/status`, (req, res, ctx) => {
        return res(
            ctx.json([{
                fileId: "003",
                resource: "nc:172.21.0.1:7080:003",
                comment: "i need access",
                status: "Accepted"
            }])
        )
    }),
    rest.delete(`${REACT_APP_PERMISSIONS_URL}/permissions`, (req, res, ctx) => {
        return res(
            ctx.json([])
        )
    })
]