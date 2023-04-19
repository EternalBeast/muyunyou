import './header.css';
import 'icons/iconfont.css';

import Header from 'components/header';

const scrollContainer = document.getElementById('details-page');
const headerEl = scrollContainer.querySelector('.header');

new Header(headerEl, 0, scrollContainer);