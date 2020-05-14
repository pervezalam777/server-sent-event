import * as actions from './appActionsConst';
import { 
    fetchCountryList, 
    publishCountryStats, 
    updateCountryPublishedStats 
} from '../../services/appService';

export const addCountry = dispatch => async (country) => {
    try {
        await publishCountryStats(country);
        dispatch({type:actions.ADD_COUNTRY_STATS, payload:country});
    } catch(e){
        console.log("Error: Add country failed: ", e.message)
    }
}

export const updateCountry = dispatch => async (country) => {
    try{
        await updateCountryPublishedStats(country);
        dispatch({type:actions.UPDATE_COUNTRY_STATS, payload:country})
    } catch(e){
        console.log("Error: update country failed: ", e.message);
    }
}

export const removeCountry = dispatch => (countryId) => {
    dispatch({type:actions.REMOVE_COUNTRY_STATS, payload:countryId})
}

export const getCountriesList = dispatch => async () => {
    dispatch({type:actions.APP_LOADING_STATE, payload:true})

    const payload = await fetchCountryList();
    dispatch({type:actions.GET_COUNTRIES_LIST, payload})
}