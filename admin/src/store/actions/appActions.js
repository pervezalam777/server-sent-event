import * as actions from './appActionsConst';
import { fetchCountryList } from '../../services/appService';

export const addCountry = dispatch => (country) => {
    dispatch({type:actions.ADD_COUNTRY_STATS, payload:country});
}

export const updateCountry = dispatch => (country) => {
    dispatch({type:actions.UPDATE_COUNTRY_STATS, payload:country})
}

export const removeCountry = dispatch => (countryId) => {
    dispatch({type:actions.REMOVE_COUNTRY_STATS, payload:countryId})
}

export const getCountriesList = dispatch => async () => {
    dispatch({type:actions.APP_LOADING_STATE, payload:true})

    const payload = await fetchCountryList();
    dispatch({type:actions.GET_COUNTRIES_LIST, payload})
}