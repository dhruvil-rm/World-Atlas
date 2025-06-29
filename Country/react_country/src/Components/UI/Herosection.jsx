import { FaLongArrowAltRight } from "react-icons/fa";

export const Herosetion = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Exploring a World, One Country at a Time
                    </h1>
                    <p className="paragraph">
                        Discover the History, Culture and Beauty of every nation, sort, search and filter through to find the details you need
                    </p>
                    <button className="btn">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="world beauty" className="banner-image"/>
                </div>
            </div>  
        </main>
    );
};