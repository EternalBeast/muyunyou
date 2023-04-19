import './tab.css';

import {
    getData
} from 'api/getData';
import {
    URL,
    TAB_ITEM_CLASS,
    TAB_ACTIVE_ITEM_CLASS_NAME
} from './config';

class Tab {
    constructor(el) {
        this.$items = el.querySelectorAll(TAB_ITEM_CLASS);
    }

    setActiveItem(index) {
        for (const item of this.$items) {
            item.classList.remove(TAB_ACTIVE_ITEM_CLASS_NAME);
        }

        this.$items[index].classList.add(TAB_ACTIVE_ITEM_CLASS_NAME);
    }

    to(index) {
        // 取消上一次的请求
        if (this.dataPromise && this.dataPromise.xhr) {
            this.dataPromise.xhr.abort();
        }
        this.setActiveItem(index);

        this.dataPromise = getData(`${URL}/${this.$items[index].dataset.id}`);

        return this.dataPromise;
    }
}

export default Tab;