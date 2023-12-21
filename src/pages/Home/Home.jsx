import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits/Benefits";
import Footer from "../../components/shared/Footer/Footer";

const Home = () => {
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Benefits></Benefits>
            <Footer></Footer>
        </div>
    );
};

export default Home;