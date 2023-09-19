import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">
            <Header />
            <Outlet></Outlet>
            <Footer/>
            </div>
        </div>
    );
};

export default Home;