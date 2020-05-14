import React, {useContext, useReducer} from 'react';

export default (reducer, actions, initialState, stateName='state') => {
    const context = React.createContext();

    const Provider = ({children}) => {
        
        const [state, dispatch] = useReducer(reducer, initialState);

        const actionDispatcher = {}
        for(let key in actions){
            actionDispatcher[key] = actions[key](dispatch);
        }

        return (
            <context.Provider value={{[stateName]:state, ...actionDispatcher}}>
                {children}
            </context.Provider>
        )
    }

    const withContext = (Component) => {
        return (props) => {
            const data = useContext(context);
            return <Component {...props} {...data} />
        }
    }

    return {context, withContext, Provider}
}