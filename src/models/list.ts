import ZidAPI from "../helper/zidAPI";
import logger from "../console/logger";

const list = async (): Promise<void> => {
    ZidAPI.getThemes()
        .then((themes) => {

            if (themes.items == undefined) {return}

            if (themes.items.length == 0) {
                logger.error("You Don't have any themes yet.")
                return;
            }

            // @ts-ignore
            let arrNoIndex = themes.items.reduce((acc, {id, price, publishing_date, status, update_status, ...x}) => { acc[id] = x; return acc; }, {})
            console.table(arrNoIndex);
        }).catch((error) => {
            console.log('error', error);
        });
}


export default list