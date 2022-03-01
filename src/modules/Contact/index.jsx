import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
    return (
        <div data-scroll-section>
            <div className="p-8 h-screen items-stretch flex flex-row gap-4 dark:text-white">
                <div className="w-7/12">
                    <h1 className="text-8xl tracking-tight font-light leading-[5.5rem] uppercase">
                        I<br />
                        would<br />
                        love<br />
                        to<br />
                        hear<br />
                        from<br />
                        you.
                    </h1>
                </div>
                <div className="flex flex-col self-center gap-10">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-2xl font-semibold">Say Hello!</h4>
                        <p className="text-xl leading-6">
                            Wadugama Road<br />
                            Nehinna<br />
                            Dodangoda<br />
                            Kalutara<br />
                            Sri Lanka
                        </p>
                        <div className="flex flex-col gap-1">
                            <a className="text-xl font-semibold" href="mailto:miyurupriyawadan@gmail.com">
                                miyurupriyawadan@gmail.com
                            </a>
                            <a className="text-xl font-semibold" href="tel:+94776424889">
                                +94 77 642 4889
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xl">See me on</h4>
                        <div className="flex flex-row gap-8">
                            <a href="https://www.linkedin.com/in/miyurugunarathna/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                            <a href="https://github.com/miyurugunarathna" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                            <a href="https://twitter.com/miyurugunarathn" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;