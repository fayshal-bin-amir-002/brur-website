import Banner from "../components/Home/Banner";
import NoticeMarque from "../components/Home/NoticeMarque";
import Divider from "../components/shared/Divider";
import NavBar from "../components/shared/NavBar";

const Home = () => {
    return (
        <>
            <div className="w-full h-2 mainBg"></div>
            <NavBar></NavBar>
            <Divider></Divider>
            <Banner></Banner>
            <NoticeMarque></NoticeMarque>
        </>
    );
};

export default Home;