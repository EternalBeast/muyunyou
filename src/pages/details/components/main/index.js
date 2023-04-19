import './main.css';

import { getData } from 'api/getData';

import render from './main.art';

import { URL, LAYOUT_ID } from './config';

const mainEl = document.getElementById(LAYOUT_ID);

 

const getId = () => {
    const para = window.location.search;
    if (URLSearchParams) {
        const usp = new URLSearchParams(para);
        return usp.get('id');
    } else {
        const reg = new RegExp("\\?id=([^&$]+)");
        return reg.exec(para)[1];
    }
};

const id = getId();

getData(`${URL}/${id}`).then(data => {
    mainEl.innerHTML = render({
        items: data
    });
});