const Landing = () => {
    return (
        <div data-scroll-section id="home">
            <div className="p-8 h-screen flex flex-col justify-between">
                <div>
                    <h2 className="text-6xl font-light uppercase dark:text-white">
                        Hello there! I'm a
                    </h2>
                </div>
                <div>
                    <div className="flex flex-col text-9xl uppercase font-[1000] tracking-wide leading-[6rem] font-['Cabinet_Grotesk'] dark:text-white">
                        <span>Design</span>
                        <span>Minded</span>
                        <span>Full-stack</span>
                        <span>Developer</span>
                    </div>
                    <span className="text-2xl ml-1 mt-2 dark:text-white">
                        Wanna see more? just check my <a href="#" className="text-orange-600">resume.</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Landing;