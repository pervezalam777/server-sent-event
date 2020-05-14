import * as actions from '../actions/coronaActionsConst';

export const initialState = {
    countries:[],
    loading:false
}

export default (state, {type, payload}) => {
    switch(type){
        case actions.DATA_RECEIVED:{
            let countries = state.countries.concat(payload)
            return {countries, loading:false};
        }
        case actions.DATA_UPDATE_RECEIVED:{
            let countries = [...state.countries];
            let index = countries.findIndex((c) => c.id === payload.id);
            countries[index] = payload;
            return {countries, loading:false}
        }
        default:
            return state;
    }
} 