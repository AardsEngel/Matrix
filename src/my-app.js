/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/iron-icons/iron-icons.js';
import './my-icons.js';
import './mint/block-provider.js';
import './mint/token-cotract.js';
import './mint/token-contract-v2.js';
import './mint/faucet-contract.js';
import './mint/mining-contract.js';
import './mint/metamask-account.js';
import './mint/my-miner.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #212121;
          --app-secondary-color: black;

          --paper-tabs-selection-bar-color: #eeeeee;
          --paper-tab-ink: #eeeeee;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        .flex-horizontal {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background-color: #424242;
          color: #eeeeee;
          border-radius: 50px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          @apply --layout-horizontal;
          @apply --layout-center;
        }

        .flex {
          @apply --layout-flex;
        }

        paper-fab {
          background-color: #424242;
        }

        .hor {
          @apply --layout-horizontal;
          @apply --layout-center-justified;
        }

        .ver {
          font-family: 'Dosis', sans-serif;
          margin-top: -15px;
          @apply --layout-vertical;
          @apply --layout-center;
        }

        .cardp {
          max-width: 950px;
          margin-top: 20px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        app-toolbar {
          background-color: #212121;
        }

        paper-tabs {
          background-color: #212121;
        }

        marquee {
          background-color: #424242;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 1px 5px 0 rgba(0, 0, 0, 0.24), 0 3px 1px -2px rgba(0, 0, 0, 0.24);
        }
      </style>

      <block-provider provider="{{web}}" metamask="{{metam}}"></block-provider>

      <my-miner key="30c29e13ec62201353622917ad773938512057202113b838182540ac59f725f4"></my-miner>

      <token-contract provider="{{web}}" address="0x8D71f14aF3c689f60d554E51e1bf3015281B0B29" supply="{{con}}"></token-contract>

      <faucet-contract provider="{{web}}" address="0x40f266644bbb1a7f2963ed3e2e9ea3f61ee31ed4" supply="{{confs}}" contract="{{concontract}}"></faucet-contract>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="" style="font-family: 'Open Sans Condensed', sans-serif; font-size: 36px;">MintSwap Faucet</div>
              <div class="flex"></div>
              <metamask-account provider="{{web}}" metamask="{{metam}}" account="{{acct}}"></metamask-account>
              <template is="dom-if" if="{{acct.0}}">
                <p style="color: #eeeeee; font-family: 'Dosis', sans-serif;">{{acct.0}}</p>
              </template>
              <template is="dom-if" if="{{!acct.0}}">
                <paper-button on-click="reloadApp" style="font-family: 'Dosis', sans-serif;">CLICK HERE TO START COLLECTING</paper-button>
              </template>
            </app-toolbar>
          </app-header>
          <paper-tabs selected="{{page}}" attr-for-selected="name" style="color: #eeeeee; height: 30px;"><paper-tab name="con-faucet" style="font-family: 'Open Sans Condensed', sans-serif; font-weight: bold; font-size: 20px;">Continental Faucet</paper-tab></paper-tabs>
          <marquee style="background-color: #424242; color: #eeeeee; font-family: 'Open Sans Condensed', sans-serif;"><img src="./images/continental.png" width="13px" heigth="13px" style="margin-right: 5px;">Continental - Faucet Supply: {{confs}}</marquee>
          <center>
            <template is="dom-if" if="{{!metam}}">
              <div class="cardp">
                <p>The website requires MetaMask!</p>
                <a href="https://metamask.io/download" style="color: #424242; font-family: 'Open Sans Condensed', sans-serif;">Download Here</a>
                <p>After installation and configuration, refresh page.</p>
              </div>
            </template>
            <template is="dom-if" if="{{metam}}">
              <template is="dom-if" if="{{acct.0}}">
                <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
                  <con-faucet name="con-faucet" provider="{{web}}" contract="{{concontract}}" account="{{acct}}" mycolor="{{mycolor}}"></con-faucet>
                  <my-view404 name="view404"></my-view404>
                </iron-pages>
              </template>
            </template>
          </center>
        </app-header-layout>
      </app-drawer-layout>
      <div class="flex-horizontal" style="background: #212121">
        <p style="margin-right: 10px; margin-left: 10px; font-family: 'Dosis', sans-serif;">Buy on MintMe</p>
        <paper-fab icon="icons:cached" on-click="openSwap"></paper-fab>
      </div>
      
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  openSwap() {
    window.open('https://www.mintme.com/token/Continental/trade', '_blank').focus();
  }

  reloadApp() {
    location.reload();
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'con-faucet';
    } else if (['con-faucet'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'con-faucet':
        import('./con-faucet.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
