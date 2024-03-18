import { useState } from 'react';
// Component
import Header from './component/Header';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import Footer from './component/Footer';
// Context
import {CommonContext} from './component/CommonContext';

function App(){
    const [nameList,setNameList] = useState([]);

    function addToSidebar(name){
        setNameList((prev)=>[...prev,name])
    }

    function deleteFromSidebar(index){
        const updateList = nameList.filter((item) => item !== nameList[index])
        setNameList(updateList);
    }

    return (
        <CommonContext.Provider value={{nameList,addToSidebar,deleteFromSidebar}}>
            <div className="App">
                <Header />
                <Navbar />
                <div style={{display:'grid', gridTemplateColumns:'300px 1fr 300px', gap:'10px'}}>
                    <Sidebar />
                    <Main />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        </CommonContext.Provider>
    );
}

export default App;