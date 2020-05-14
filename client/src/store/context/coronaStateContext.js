import contextBuilder from "./contextBuilder";
import appReducer, {initialState} from "../reducers/coronaReducer";
import * as actions from "../actions/coronaActions"

export const {
    context:coronaContext, 
    withContext:withCoronaContext, 
    Provider:CoronaProvider
} = contextBuilder( appReducer, {...actions}, initialState, "coronaState");