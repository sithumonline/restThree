const Footer = () => {
    return (
        <div data-scroll-section>
            <div className="w-full h-24 border-t border-black/10 dark:border-white/5 flex items-center justify-center bg-white dark:bg-black dark:text-white">
                <div className="flex flex-col items-center gap-3 text-sm text-neutral-400">
                    <span>Copyright © 2022 Miyuru Gunarathna.</span>
                    <img src="../../../src/assets/icons/favicon.svg" width="26px" />
                </div>
            </div>
        </div>
    )
}

export default Footer;