// Component
import Header from './component/Header';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import Footer from './component/Footer';

// Context
import ContextProvider from './ContextAPI/ContextAPI';

function App(){
    return (
        <div className="App">
            <Header />
            <Navbar />
            <ContextProvider>
            <div style={{display:'grid', gridTemplateColumns:'300px 1fr 300px', gap:'10px'}}>
                <Sidebar />
                <Main />
                <Sidebar />
            </div>
            </ContextProvider>
            <Footer />
        </div>
    );
}

export default App;