import open from "open";
import express from "express";
import cors from "cors";
import { setToken } from "../helper/auth";


const login = async (
    port: number = 4444,
): Promise<void> => {
    const authUrl = `https://partner.zid.sa/cli/authorized`;
    console.log("Opening your browser to login...");
    await open(authUrl);

    const app = express();
    app.use(cors());
    const server = app.listen(port, () => {
        console.log(`Listening for authentication callback on http://localhost:${port}/auth/callback`);
    });

    app.get('/auth/callback', (req, res) => {
        const authToken = req.query.token;

        if (authToken && typeof authToken === 'string') {
            if (!setToken(authToken)) {
                console.log('Failed to save token.');
                res.send('Failed to save token.');
                server.close();
                return;
            }

            console.log('Authentication successful! Token saved.');
            res.send('Authentication successful! You can close this window.');
        } else {
            console.log('Authentication failed.');
            res.send('Authentication failed.');
        }

        server.close();
    });
}

export default login