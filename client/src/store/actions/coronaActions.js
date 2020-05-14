import * as actions from './coronaActionsConst';
import { connectToServer } from '../../services/coronaService';

export const connect = dispatch => () => {
    const connection = connectToServer();
    connection.onopen = () => {
        dispatch({type:actions.CONNECTED_TO_SERVER});
    }
    connection.addEventListener("message", (event) => {
        const payload = JSON.parse(event.data);
        dispatch({type:actions.DATA_RECEIVED, payload});
    })
    connection.addEventListener('update', (event) => {
        let payload = JSON.parse(event.data);
        dispatch({type:actions.DATA_UPDATE_RECEIVED, payload});
    })   
}
