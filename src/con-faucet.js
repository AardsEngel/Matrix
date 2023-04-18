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
           background-color: #424242;
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
 
       <div class="card flex-horizontal" style="font-family: 'Dosis', sans-serif; font-weight: bold; background-color: #9fa4a6;">
        <div class="card2 flex-vertical">
          <img src="./images/continental.png" width="135px" height="135px">
          <p>Continental</p>
          <paper-button style="font-size: 10px;" on-click="addToken">Add token to MetaMask</paper-button>
        </div>
         <div class="flex"></div>
         <div class="flex-vertical">
           <img src="{{levelimg}}" width="115px" height="115px">
           <p>User Level: {{userlevel}}</p>
           <paper-button on-click="buy" raised style="background-color: #424242; color: #eeeeee;">Buy Level (25 MintMe)</paper-button>
         </div>
         <div class="flex"></div>
         <div class="flex-vertical">
           <p style="font-size: 14px;">Times Collected: {{dripcount}}</p>
           <p style="font-size: 14px;">Collection Interval: {{usertime}} minutes</p>
           <p style="font-size: 10px;">Last Collected: {{lasttime}}</p>
           <p style="font-size: 14px;">Collection Allowance: {{userallowace}} /// Continental</p>
           <p style="font-size: 14px;">Collection Ready: {{isfaucetready}}</p>
         </div>
         <div class="flex"></div>
         <div class="flex-vertical">
           <img src="{{chestimg}}" width="145px" height="145px">
           <paper-button on-click="useFaucet" raised style="margin-top: 30px; background-color: #424242; color: #eeeeee;">Collect Continental</paper-button>
         </div>
       </div>
       <center>
       <div class="card flex-vertical" style="background-color: #9fa4a6;">
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">25 MintMe to buy a level.</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">After each level the collection count resets.</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Maximum level is 16.</p>
          <div class="flex"></div>
        </div>
        <hr style="color: #424242; width: 100%;">
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 1</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 2</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 3</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 4</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 5</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 6</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 7</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 8</p>
          <div class="flex"></div>
        </div>
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">1 Token</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">2 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">3 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">4 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">5 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">6 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">7 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">8 Tokens</p>
          <div class="flex"></div>
        </div>
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">60 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">59 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">58 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">57 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">56 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">55 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">54 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">53 Minutes</p>
          <div class="flex"></div>
        </div>
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">10 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">50 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">100 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">150 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">200 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">250 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">300 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">350 Collections =></p>
          <div class="flex"></div>
        </div>
        <hr style="color: #424242; width: 100%;">
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 9</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 10</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 11</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 12</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 13</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 14</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 15</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Level 16</p>
          <div class="flex"></div>
        </div>
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">9 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">10 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">15 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">20 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">25 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">30 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">40 Tokens</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">50 Tokens</p>
          <div class="flex"></div>
        </div>
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">52 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">51 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">50 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">49 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">48 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">47 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">46 Minutes</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">45 Minutes</p>
          <div class="flex"></div>
        </div>
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">400 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">500 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">1000 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">1000 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">1000 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">1000 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">1000 Collections =></p>
          <div class="flex"></div>
          <p style="font-size: 12px;">MAX LEVEL</p>
          <div class="flex"></div>
        </div>
       </div>
       </center>
     `;
   }
 
   static get properties() {
     return {
       provider: { 
         type: Object
       },
       contract: {
         type: Object
       },
       account: {
         type: Object,
         observer: 'loadFaucetUI'
       },
       lasttime: {
         type: String,
         value: "N/A"
       }
     };
   }
 
   ready() {
     super.ready();
 
     this.levelimg = './images/con_badges/1.png';
     this.chestimg = './images/con_chest/10.png';
   }

   async addToken() {
    var type = "ERC20"; var symbol = "Continental"; var decimals = "12"; var image = "https://i.imgur.com/VhvOAkk.png";
    var address = "0x8D71f14aF3c689f60d554E51e1bf3015281B0B29";
    if (true) {
      window.ethereum
        .request({
          method: "wallet_watchAsset",
          params: {
            type: type,
            options: {
              address: address,
              symbol: symbol,
              decimals: decimals,
              image: image,
            },
          },
        })
        .then((success) => {
          if (success) {
            console.log(
              "Success Token " + symbol + " added to MetaMask."
            );
          } else {
            console.log("Error Something went wrong.");
          }
        })
        .catch(console.error);
    }
    
  }
 
   async buy() {
     var utils = this.provider.utils;
     await this.contract.methods.buyLevel()
     .send({
       from: this.provider.eth.defaultAccount,
       value: utils.toWei("25", "ether")
     });
     this.dripcount = await this.contract.methods.getDripCount()
     .call({from: this.provider.eth.defaultAccount});
 
     this.userlevel = await this.contract.methods.getLevel()
     .call({from: this.provider.eth.defaultAccount});
 
     if(this.userlevel == 1) {
       this.levelimg = './images/con-badges/1.png';
       this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 2) {
        this.levelimg = './images/con-badges/1.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 3) {
        this.levelimg = './images/con-badges/1.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 4) {
        this.levelimg = './images/con-badges/1.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 5) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 6) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 7) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 8) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel == 9) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/10.png';
     }
     if(this.userlevel >= 10) {
        this.levelimg = './images/con-badges/3.png';
        this.chestimg = './images/con-chest/10.png';
     }
 
     this.usertime = await this.contract.methods.getTimeInterval()
     .call({from: this.provider.eth.defaultAccount});
 
     this.usertime = this.usertime / 60;
 
     this.userallowace = await this.contract.methods.getTokenAllowance()
     .call({from: this.provider.eth.defaultAccount});
     this.userallowace = utils.fromWei(this.userallowace, 'microether');
 
     this.isfaucetready= await this.contract.methods.isFaucetReady()
     .call({from: this.provider.eth.defaultAccount});
   }
 
   async loadFaucetUI() {
 
     var utils = this.provider.utils;
 
     this.dripcount = await this.contract.methods.getDripCount()
     .call({from: this.provider.eth.defaultAccount});
 
     this.userlevel = await this.contract.methods.getLevel()
     .call({from: this.provider.eth.defaultAccount});
 
     if(this.userlevel == 1) {
        this.levelimg = './images/con-badges/1.png';
        this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 2) {
         this.levelimg = './images/con-badges/1.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 3) {
         this.levelimg = './images/con-badges/1.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 4) {
         this.levelimg = './images/con-badges/1.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 5) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 6) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 7) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 8) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 9) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel >= 10) {
         this.levelimg = './images/con-badges/3.png';
         this.chestimg = './images/con-chest/10.png';
      }
 
     this.usertime = await this.contract.methods.getTimeInterval()
     .call({from: this.provider.eth.defaultAccount});
 
     this.usertime = this.usertime / 60;
 
     this.userallowace = await this.contract.methods.getTokenAllowance()
     .call({from: this.provider.eth.defaultAccount});
     this.userallowace = utils.fromWei(this.userallowace, 'microether');
 
     this.isfaucetready= await this.contract.methods.isFaucetReady()
     .call({from: this.provider.eth.defaultAccount});
 
     setTimeout(() => { this.loadFaucetUI(); }, 60000);
   }
 
   async useFaucet() {
 
     var utils = this.provider.utils;
 
     this.isfaucetready = await this.contract.methods.isFaucetReady()
     .call({from: this.provider.eth.defaultAccount});
     
     if(this.isfaucetready) {
       await this.contract.methods.faucetDrip()
       .send({from: this.provider.eth.defaultAccount});
       var current = new Date();
       this.lasttime = current.toLocaleTimeString();
     } else {
       this.lasttime = this.lasttime;
     } 
 
     this.dripcount = await this.contract.methods.getDripCount()
     .call({from: this.provider.eth.defaultAccount});
 
     this.userlevel = await this.contract.methods.getLevel()
     .call({from: this.provider.eth.defaultAccount});
 
     if(this.userlevel == 1) {
        this.levelimg = './images/con-badges/1.png';
        this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 2) {
         this.levelimg = './images/con-badges/1.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 3) {
         this.levelimg = './images/con-badges/1.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 4) {
         this.levelimg = './images/con-badges/1.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 5) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 6) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 7) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 8) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel == 9) {
         this.levelimg = './images/con-badges/2.png';
         this.chestimg = './images/con-chest/10.png';
      }
      if(this.userlevel >= 10) {
         this.levelimg = './images/con-badges/3.png';
         this.chestimg = './images/con-chest/10.png';
      }
 
     this.usertime = await this.contract.methods.getTimeInterval()
     .call({from: this.provider.eth.defaultAccount});
 
     this.usertime = this.usertime / 60;
 
     this.userallowace = await this.contract.methods.getTokenAllowance()
     .call({from: this.provider.eth.defaultAccount});
     this.userallowace = utils.fromWei(this.userallowace, 'microether');
 
     this.isfaucetready= await this.contract.methods.isFaucetReady()
     .call({from: this.provider.eth.defaultAccount});
     
   }
 }
 
 window.customElements.define('con-faucet', ConFaucet);
 