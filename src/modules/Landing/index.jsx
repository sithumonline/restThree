const Landing = () => {
    return (
        <>
            <div className="p-8 h-screen flex flex-col justify-between">
                <div>
                    <h2 className="text-6xl font-light uppercase">
                        Hello there! I'm a
                    </h2>
                </div>
                <div>
                    <div className="flex flex-col text-9xl uppercase font-[650] tracking-wide leading-[6rem] font-['Clash_Display']">
                        <span>Design</span>
                        <span>Minded</span>
                        <span>Full-stack</span>
                        <span>Developer</span>
                    </div>
                    <span className="text-2xl ml-1 mt-2">
                        Wanna see more? just check my <a href="#" className="text-red-600">resume.</a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Landing;