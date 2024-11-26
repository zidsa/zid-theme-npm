import express from "express";
import cors from "cors";
import { setToken } from "../helper/auth";
import logger from "../console/logger";


const login = async (
    port: number = 4444,
): Promise<void> => {
    const open = eval("require")('open');
    logger.log('Starting authentication process...');
    const authUrl = `https://partner.zid.sa/cli/authorized`;
    logger.log('Opening Zid Partner Dashboard in your default browser...');
    await open(authUrl);

    const app = express();
    app.use(cors());
    const server = app.listen(port, () => {
        logger.log(`Listening for authentication callback on http://localhost:${port}/auth/callback`);
    });

    let result: boolean = false;
    app.get('/auth/callback', (req, res) => {
        const authToken = req.query.token;
        if (authToken && typeof authToken === 'string') {
            if (!setToken(authToken)) {
                res.send('Failed to save token.');
                server.close();
                return;
            }
            result = true;
            res.send('Authentication successful! You can close this window.');
        } else {
            res.send('Authentication failed.');
        }

        server.close();
    });

    if (result) {
        logger.log('Successfully authenticated! You can now use zid-theme commands.');
    } else {
        logger.error('Authentication failed.');
    }
}

export default login