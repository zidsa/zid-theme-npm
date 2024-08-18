import Api from '../utilities/api.rest';

class ZidAPI {
    public static getPartnerData (): Promise<TPartner>  {
        const api = new Api();
        return api
            .addRoute('/market/partner')
            .addUserToken()
            .get()
            .send() as Promise<TPartner>;
    };

    public static getThemes (): Promise<TThemesResponse>  {
        const api = new Api();
        return api
            .addRoute('/pd/themes')
            .addUserToken()
            .get()
            .send() as Promise<TThemesResponse>;
    }
}

export default ZidAPI;
