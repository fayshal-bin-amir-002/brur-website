import Container from "../shared/Container";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-[#15669d] w-full min-h-[500px] my-20">
            <Container>
                <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3 -translate-y-10">
                    <div className="col-span-1 lg:col-span-2">
                        <Link to={""} className="group">
                            <div className="w-full h-[450px] relative overflow-hidden">
                                <img src={img1} alt="" className="w-full h-full object-cover group-hover:scale-105 duration-1000" />
                                <h3 className="text-lg lg:text-xl font-semibold main2Color bg-white px-4 lg:px-6 py-3 lg:py-4 absolute left-0 bottom-0 group-hover:bg-[#29abe2] group-hover:text-white duration-300">বেগম রোকেয়া বিশ্ববিদ্যালয়ের নতুন ওয়েবসাইটে উদ্বোধন</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1 space-y-7">
                        <div>
                            <Link to={""} className="group">
                                <div className="w-full h-[250px] relative overflow-hidden">
                                    <img src={img2} alt="" className="w-full h-full group-hover:scale-105 duration-1000" />
                                    <h3 className="text-lg lg:text-xl font-semibold main2Color bg-white px-3 lg:px-4 py-2 lg:py-3 absolute left-0 bottom-0 group-hover:bg-[#29abe2] group-hover:text-white w-[90%]">Anand Shobhayatra on the occasion of the anniver...</h3>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to={""} className="group">
                                <div className="w-full h-[250px] relative overflow-hidden">
                                    <img src={img3} alt="" className="w-full h-full group-hover:scale-105 duration-1000" />
                                    <h3 className="text-lg lg:text-xl font-semibold main2Color bg-white px-3 lg:px-4 py-2 lg:py-3 absolute left-0 bottom-0 group-hover:bg-[#29abe2] group-hover:text-white w-[90%]">Discussion meeting and publication unveiling cerem...</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;