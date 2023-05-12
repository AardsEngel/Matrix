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
 import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
 import '@polymer/paper-button/paper-button.js';
 import './shared-styles.js';
 
 class ConFaucet extends PolymerElement {
   static get template() {
     return html`
       <style include="shared-styles">
         :host {
           display: block;
 
           padding: 10px;
         }
         .flex-horizontal {
           @apply --layout-horizontal;
           @apply --layout-center-justified;
         }
         .flex-vertical {
           @apply --layout-vertical;
           @apply --layout-center;
         }
         .flex-vertical {
           @apply --layout-vertical;
           @apply --layout-center;
         }
         .flex {
           @apply --layout-flex;
         }
         .card2 {
           font-family: 'Dosis', sans-serif;
           padding: 6px;
           color: #eeeeee;
           border-radius: 5px;
           background-color: #042138;
           box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
           text-shadow: #000 0.1em 0.1em 0.2em;
         }
         paper-button {
           font-family: 'Dosis', sans-serif;
           text-shadow: #000 0.1em 0.1em 0.2em;
         }
         p {
           text-shadow: #000 0.1em 0.1em 0.2em;
         }
       </style>
     `;
   }
 }
 
 window.customElements.define('con-faucet', ConFaucet);
 