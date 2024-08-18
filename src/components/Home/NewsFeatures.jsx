import { Link } from "react-router-dom";
import Container from "../shared/Container";
import img from "../../assets/news&feature.jpg";
import { FaArrowRight } from "react-icons/fa";

const NewsFeatures = () => {
    return (
        <div className="py-12 md:py-16 lg:py-24">
            <Container>
                <div className="mb-8 lg:mb-10 flex justify-between items-center flex-wrap">
                    <h3 className="text-3xl md:text-4xl font-semibold mb-3">News and Features</h3>
                    <Link className="opacity-80 text-[#055b8e] font-medium hover:text-orange-600 duration-300">All News & Features <FaArrowRight className="inline" /></Link>
                    
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                    <Link className="w-full lg:w-1/2 group">
                        <div className="bg-gray-200 p-5 rounded shadow lg:translate-x-10">
                            <p className="mb-4 opacity-80">2024-04-29</p>
                            <h3 className="text-xl lg:text-2xl font-medium text-[#055b8e] group-hover:text-orange-600 mb-4">বেগম রোকেয়া বিশ্ববিদ্যালয়ের নতুন ওয়েবসাইটের উদ্বোধন</h3>
                            <p className="opacity-80">তথ্য ও যোগাযোগ প্রযুক্তির অগ্রগতির সঙ্গে মিল রেখে বেগম রোকেয়া বিশ্ববিদ্যালয়, রংপুরে আরো আধুনিক, গতিশীল ও সহজে ব্যবহার উপযোগী নতুন ওয়েবসাইট চালু করা হয়েছে। আজ সোমবার....</p>
                        </div>
                    </Link>
                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                        <img src={img} alt="" className="w-full h-full" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewsFeatures;