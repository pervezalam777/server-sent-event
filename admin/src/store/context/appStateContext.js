import contextBuilder from "./contextBuilder";
import appReducer, {initialState} from "../reducers/appReducer";
import * as actions from "../actions/appActions"

export const {
    context:appStateContext, 
    withContext:withAppStateContext, 
    Provider:AppStateProvider
} = contextBuilder( appReducer, {...actions}, initialState, "appState");