import zip_theme from "../helper/zip_theme";
import ZidAPI from "../helper/zidAPI";
import logger from "../console/logger";

export type TArguments = {
    theme_id: string;
    change_type: 'major' | 'minor' | 'patch';
    release_notes: string;
}

const update = async ({theme_id, change_type, release_notes}: TArguments) => {
    // build theme in the current dir.
    const currentDir = process.cwd();

    // TODO: change to current path only instead of `/theme`
    await zip_theme(currentDir + '/theme', currentDir + '/theme');

    // upload the theme to the store
    const themePath = currentDir + '/theme.zip';

    const res = await ZidAPI.updateTheme(theme_id, themePath, change_type, release_notes);

    logger.log(res['message']['description']);
}

export default update;
