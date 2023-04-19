import './product.css';

import { getData } from 'api/getData';
import { URL, LAYOUT_ID } from './config';

import render from './items.art';

const $productItems = document.getElementById(LAYOUT_ID);

getData(URL).then(data => {
    $productItems.innerHTML = render({
        items: data
    });
});