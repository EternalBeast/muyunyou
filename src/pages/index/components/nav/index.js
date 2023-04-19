import './nav.css';

import { getData } from 'api/getData';
import { URL, LAYOUT_ID } from './config';

import render from './nav.art'

const $navLayout = document.getElementById(LAYOUT_ID);

getData(URL).then(data => {
    $navLayout.innerHTML = render({
        items: data
    });
});