import { createContext, useContext, useState } from 'react';

export const CommonContext = createContext();

export default function ContextProvider({ children }){
    const [nameList,setNameList] = useState([]);

    function addToSidebar(name){
        if(!nameList.includes(name)){
            setNameList((prev)=>[...prev,name])
        }
    }

    function deleteFromSidebar(value){
        const updateList = nameList.filter((item) => item !== value)
        setNameList(updateList);
    }

    return (
        <CommonContext.Provider value={{nameList,addToSidebar,deleteFromSidebar}}>
            {children}
        </CommonContext.Provider>
    )
}

// custom hooks
export const useCommonContext = () => {
    const context = useContext(CommonContext);
    return context;
}