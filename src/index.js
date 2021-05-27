/* global chrome */

import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import App from './views/Popup/App';
import './assets/fonts/paladinscond.ttf';
import 'normalize.css';
import './variables.css';

console.log(chrome);

chrome.tabs.query(
  { active: true, currentWindow: true },
  function (tab) {
    //Get Url Before render, and pass it to router
    let isPropertyPage = false;
    const currentUrl = tab[0].url;
    const isIncludeDomain = currentUrl.includes(
      'realestate.com.au/property',
    );
    const isSepcificHouse = !!currentUrl
      .split('-')
      ?.pop()
      .match(/^-?\d+$/);

    if (isIncludeDomain && isSepcificHouse) {
      isPropertyPage = true;
    }

    ReactDOM.render(
      <React.StrictMode>
        <MemoryRouter>
          <App isPropertyPage={isPropertyPage} />
        </MemoryRouter>
      </React.StrictMode>,
      document.getElementById('root'),
    );
  },
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
