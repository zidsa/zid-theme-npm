type TPartner = {
    id: number;
    name: string;
    email: string;
}

type TThemesResponse = {
    items: TTheme[];
}

type TTheme = {
    id: string;
    name: string;
    version: string;
    status: number;
    update_status: number;
    publishing_date?: string;
    price?: number;
}

type TDevStoresResponse = {
    payload: TDevStore[];
}

type TDevStore = {
    id: number;
    name: string;
    email: string;
    link: number;
}