import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll";
import { useRef } from "react";
import Navbar from "../../component/Navbar";
import Contact from "../../modules/Contact";
import Landing from "../../modules/Landing"
import WorkReel from "../../modules/WorkReel";
import Footer from "../../component/Footer";

const Home = () => {

    const containerRef = useRef(null);
    const scroll = useLocomotiveScroll();

    return (
        <>
            <Navbar />
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    multiplier: 1,
                }}
                watch={[
                    scroll
                ]}
                containerRef={containerRef}
            >
                <div data-scroll-container ref={containerRef} >
                    <Landing />
                    <WorkReel />
                    <Contact />
                    <Footer />
                </div>
            </LocomotiveScrollProvider>
        </>
    )
}

export default Home;