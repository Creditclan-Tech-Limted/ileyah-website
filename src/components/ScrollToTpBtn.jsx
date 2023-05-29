import React from "react";

function ScrollToTopBtn({handleScrollTop, scrollTop}) {
    return (
        <div onClick={handleScrollTop} className={`${ scrollTop >=200 ? 'opacity-100': 'opacity-0'} fixed bg-secondary bottom-4 right-4 h-[50px] w-[50px] rounded-full p-4 cursor-pointer z-50`}>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
            </svg>
        </div>
    );
}

export default ScrollToTopBtn;
