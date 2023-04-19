import 'swiper/swiper-bundle.min.css';
import './slider.css';

// If you want to import Swiper with all modules (bundle) then it should be imported from swiper/bundle
// 如果你想导入带有所有模块（bundle）的 Swiper 那么它应该从 swiper/bundle 导入
import Swiper from 'swiper/bundle';

import config, {
    SWIPER_CONTAINER_CLASS,
    URL,
    LAYOUT_ID
} from './config';

import render from './slider.art';
import { getData } from 'api/getData';

const $indexSlider = document.getElementById(LAYOUT_ID);

getData(URL).then(data => {
    $indexSlider.innerHTML = render({
        ...config,
        imgs: data
    });

    new Swiper(SWIPER_CONTAINER_CLASS, config);
});

