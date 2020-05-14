import React from 'react'
import {
    AppStateProvider
} from '../store/context/appStateContext';
import CoronaList from '../component/corona/list'
function CoronaPage(){
    return (
        <AppStateProvider>
            <CoronaList />
        </AppStateProvider>
    )
}
export default CoronaPage