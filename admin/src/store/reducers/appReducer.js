import * as actions from '../actions/appActionsConst';

//TODO: explore map / set / Object
// See which one is faster.. (https://gist.github.com/Chunlin-Li/2606bd813df88eaeee2d)

export const initialState = {
    countries:{},
    loading:false
}

const countriesAdaptor = inputCountries => {
    return inputCountries.reduce((countries, country) => {
        countries[country.id] = country;
        return countries
    }, {})
}

export default (state, {type, payload}) => {
    switch(type){
        case actions.GET_COUNTRIES_LIST:
            return {countries:countriesAdaptor(payload), loading:false};

        case actions.ADD_COUNTRY_STATS:
        case actions.UPDATE_COUNTRY_STATS:
            return {...state, countries:{...state.countries, [payload.id]:payload}}

        case actions.REMOVE_COUNTRY_STATS:
            let countries = {...state.countries};
            delete countries[payload];
            return {...state, countries};
        case actions.APP_LOADING_STATE: 
            return {...state, loading:payload}
        default:
            return state;
    }
} 