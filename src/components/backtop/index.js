import './backtop.css';
import 'icons/iconfont.css';

import Scroll from 'utils/scroll';

const CHANGED_CLASSS_NAME = 'backtop-hidden';


class Backtop {
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
        this.el = el;
        this.critical_point = critical_point;
        // 滚动条所在元素
        this.scrollContainer = scrollContainer;
        // 监听滚动事件的元素
        this.eventEl = eventEl;

        new Scroll({
                critical_point,
                change: () => {
                    this.show();
                },
                reset: () => {
                    this.hide();
                }
            },
            scrollContainer,
            eventEl
        );

        this.bindEvent();
    }

    // 绑定事件
    bindEvent() {
        this.el.addEventListener('click', () => {
            this.scrollTo();
        }, false);
    }

    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior: 'smooth'
        })
    }

    // 显示
    show() {
        this.el.classList.remove(CHANGED_CLASSS_NAME);
    }
    // 隐藏
    hide() {
        this.el.classList.add(CHANGED_CLASSS_NAME);
    }
}

export default Backtop;