import * as fs from "fs";
import {configPath} from "../cli";

const getToken = () => {
    if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        if (config.access_token) {
            return config.access_token;
        }
    }
    console.log('No session found. Please login first.');
    return null;
}

const setToken = (token: string) => {
    fs.writeFile(configPath, JSON.stringify({ access_token: token }), (err) => {
        if (err) {
            console.log('Failed to save token:', err);
            return false;
        }
    });
    return true;
}

export {getToken, setToken}