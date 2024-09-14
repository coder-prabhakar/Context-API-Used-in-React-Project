import { createContext, useState } from 'react';

export const CommonContext = createContext();

function ContextProvider({ children }){
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

export default ContextProvider;