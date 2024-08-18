import ZidAPI from "../helper/zidAPI";

const list = async (): Promise<void> => {
    ZidAPI.getThemes()
        .then((themes) => {
            console.table(themes.items, [
                'id', 'name', 'version', 'created_at'
            ]);
        }).catch((error) => {
            console.log('error', error);
        });
}


export default list