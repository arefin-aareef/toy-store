import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Gallary from "../Gallary/Gallary";
import Header from "../Header/Header";
import useTitle from "../hooks/useTitle";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Gallary></Gallary>
            <ShopCategory></ShopCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;