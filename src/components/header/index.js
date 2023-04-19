import './header.css'

import Scroll from 'utils/scroll';


const CHANGED_CLASSS_NAME = 'header-transition';


class Header {
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
        this.el = el;

        new Scroll({
            critical_point,
            change: () => {
                this.change();
            },
            reset: () => {
                this.reset();
            }
        },
        scrollContainer,
        eventEl
    );

    }


    // 变化
    change() {
        this.el.classList.add(CHANGED_CLASSS_NAME);
    }

    // 还原
    reset() {
        this.el.classList.remove(CHANGED_CLASSS_NAME);
    }
}

export default Header;