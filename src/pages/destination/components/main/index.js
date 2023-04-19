import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';
import {
    get,
    set
} from 'utils/sessionStorage';

const tabEl = document.querySelector('.tab');
const contentEl = document.getElementById('destination-content');
const tab = new Tab(tabEl);
const content = new Content(contentEl);

const itemEls = tabEl.querySelectorAll('.tab-item');

tabEl.addEventListener('click', evt => {
    const itemEl = evt.target;

    if (itemEl.classList.contains('tab-item')) {
        const index = itemEl.dataset.id - 1;

        const storageName = `destination_content_${index}`;
        const storageContent = get(storageName);

        if (storageContent) {
            tab.setActiveItem(index);
            content.set(storageContent);
        } else {
            const tabPromise = tab.to(index);

            content.setLoading();

            tabPromise.then(data => {
                content.set(data);
                // 快速切换时，有可能出现将undefined数据存入sessionStorage中，添加判断防止此时发生
                if (data !== undefined) {
                    set(storageName, data);
                }
            });
        }


    }
}, false);

itemEls[0].click();