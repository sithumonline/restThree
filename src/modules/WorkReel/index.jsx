import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';


const WorkReel = () => {
    return (
        <div data-scroll-section>
            <div className="p-8 h-screen flex flex-col justify-between dark:text-white">
                <div>
                    <h1 className="text-8xl tracking-tight font-light">
                        Work Reel
                    </h1>
                </div>
                <div className="mt-5 flex flex-col">
                    <div className="flex flex-row items-center gap-3 py-6 border-b">
                        <div className="basis-7/12">
                            <h3 className="text-3xl font-semibold tracking-tight">
                                Aspire - Learning Management System
                            </h3>
                        </div>
                        <div className="basis-3/12 flex flex-row gap-2">
                            <span>Angular,</span>
                            <span>Spring Boot,</span>
                            <span>MySQL</span>
                        </div>
                        <div className="basis-2/12 flex flex-row gap-4 justify-end">
                            <a href="#">
                                <FontAwesomeIcon icon={faExternalLinkSquare} size="lg" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center py-6 border-b">
                        <div className="basis-7/12">
                            <h3 className="text-3xl font-semibold tracking-tight">
                                Dstock - Stock Management App
                            </h3>
                        </div>
                        <div className="basis-3/12 flex flex-row gap-2">
                            <span>Java</span>
                            <span>SqlLite</span>
                        </div>
                        <div className="basis-2/12 flex flex-row gap-4 justify-end">
                            <a href="#">
                                <FontAwesomeIcon icon={faExternalLinkSquare} size="lg" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 py-6">
                        <div className="basis-7/12">
                            <h3 className="text-3xl font-semibold tracking-tight">
                                Online Music Store
                            </h3>
                        </div>
                        <div className="basis-3/12 flex flex-row gap-2">
                            <span>JSP,</span>
                            <span>Java,</span>
                            <span>MySQL</span>
                        </div>
                        <div className="basis-2/12 flex flex-row gap-4 justify-end">
                            <a href="#">
                                <FontAwesomeIcon icon={faExternalLinkSquare} size="lg" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkReel;