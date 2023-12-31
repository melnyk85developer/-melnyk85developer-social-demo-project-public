import React from "react";
import AppContent from ".";
import { useDispatch, useSelector } from "react-redux";
import { setInitializeAppContent } from "store/AppContentReducer/appContentSelector";
import { initializeAppContent } from 'store/AppContentReducer/appContentReducer';
import { TypedDispatch } from "store/reduxStore";

export type DispatchPropsType = {
    initializeAppContent: () => void
}
export type PropsType = {
    initialized: boolean

}

const AppContainerContent: React.FC = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const initialized = useSelector(setInitializeAppContent)
    const initializedAppContent = () => {
        dispatch(initializeAppContent()) 
    }
    return (
        <AppContent 
            initializeAppContent={initializedAppContent} 
            initialized={initialized}/>
    )
}
export default AppContainerContent;