import Api from '../utilities/api.rest';
import fs from "fs";
import path from 'path';
import FormData from 'form-data';
import logger from "../console/logger"; // Node.js FormData

class ZidAPI {
    public static getPartnerData(): Promise<TPartner> {
        const api = new Api();
        return api
            .addRoute('/market/partner')
            .addUserToken()
            .get()
            .send() as Promise<TPartner>;
    };

    public static getThemes(): Promise<TThemesResponse> {
        const api = new Api();
        return api
            .addRoute('/pd/themes')
            .addUserToken()
            .get()
            .send() as Promise<TThemesResponse>;
    }

    public static getDevStores(): Promise<TDevStoresResponse> {
        const api = new Api();
        return api
            .addRoute('/market/dev-stores')
            .addUserToken()
            .get()
            .send() as Promise<TDevStoresResponse>;
    }

    public static async uploadTheme(store_email: string, themePath: string): Promise<any> {
        const api = new Api();
        const form = new FormData();
        const fileStream = fs.createReadStream(themePath);

        return new Promise((resolve, reject) => {
            fileStream.on('error', (err) => {
                logger.error('File stream error');
                reject(err); // Reject promise on stream error
            });

            fileStream.on('open', () => {
                form.append('theme_file', fileStream, path.basename(themePath));
                form.append('store_email', store_email);

                api.addRoute('/partners/themes/preview')
                    .addUserToken()
                    .addFormData(form)
                    .post()
                    .send()
                    .then(resolve)
                    .catch((err) => {
                        logger.error('Error during API call');
                        reject(err); // Reject promise on API error
                    });
            });
        });
    }

    public static async updateTheme(
        theme_id: string,
        theme_path: string,
        change_type: string,
        release_notes: string,
    ): Promise<any> {
        const api = new Api();
        const form = new FormData();
        const fileStream = fs.createReadStream(theme_path);

        return new Promise((resolve, reject) => {
            fileStream.on('error', (err) => {
                logger.error('File stream error');
                reject(err); // Reject promise on stream error
            });

            fileStream.on('open', () => {
                form.append('theme_file', fileStream, path.basename(theme_path));
                form.append('change_type', change_type);
                form.append('release_notes', release_notes);

                api.addRoute(`/partners/themes/cli_update/${theme_id}`)
                    .addUserToken()
                    .addFormData(form)
                    .post()
                    .send()
                    .then(resolve)
                    .catch((err) => {
                        logger.error('Error during API call');
                        reject(err); // Reject promise on API error
                    });
            });
        });

    }
}
export default ZidAPI;
