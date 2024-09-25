import { useNavigate } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center md:mt-10">
            <h1 className="text-4xl font-medium text-black mt-3">Unlock Premium Reads: <span className="text-green-500 font-semibold">Discover Your Next Favorite Book!</span></h1>
            <p className="md:mt-7 mt-5 text-lg tracking-tighter leading-1">Our curated selection of paid books offers something special for every reader. From bestsellers to hidden gems, these titles are handpicked to inspire, educate, and entertain. Whether you're seeking thrilling adventures, timeless classics, or the latest in fiction and non-fiction, our premium collection is sure to captivate. Invest in your reading experience today and unlock stories that will stay with you for a lifetime!</p>
            <button onClick={() => navigate(-1)} className="btn btn-error text-white mt-3 md:mt-8 text-lg">Back</button>
            <hr className="my-6 md:my-14 w-full bg-zinc-600" />
            <div className="courses-container flex gap-6 justify-center flex-wrap">
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    )
}

export default Courses;