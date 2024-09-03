import ZidAPI from "../helper/zidAPI";
import zip_theme from "../helper/zip_theme";
import logger from "../console/logger";

const preview = async (store_email: string): Promise<void> => {
    logger.log('preview command called with store_email:', store_email);

    const isValidStore = await validateDevStore(store_email);
    if (!isValidStore) {
        return;
    }

    // build theme in the current dir.
    const currentDir = process.cwd();

    // TODO: change to current path only instead of `/theme`
    await zip_theme(currentDir + '/theme',  currentDir + '/theme');

    // upload the theme to the store
    const themePath = currentDir + '/theme.zip';

    const ss = await ZidAPI.uploadTheme(store_email, themePath);

    logger.log(ss['message']['description']);
}

export default preview;

const validateDevStore = async (store_email: string): Promise<boolean> => {
    try {
        let devStores = await ZidAPI.getDevStores();
        const devStore = devStores.payload.find((devStore) => devStore.email === store_email);
        if (!devStore) {
            logger.error(`Dev store with email ${store_email} not found`);
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
}
