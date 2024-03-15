import Header from './component/Header'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Main from './component/Main'
import Footer from './component/Footer'

function App(){
    
    return (
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
    );
}

export default App;