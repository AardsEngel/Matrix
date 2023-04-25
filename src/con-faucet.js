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
 
       <div class="card flex-horizontal" style="font-family: 'Dosis', sans-serif; font-weight: bold; background-color: #225277;">
        <div class="card2 flex-vertical">
          <img src="./images/logo.png" width="135px" height="135px">
          <p>Dirty Money</p>
          <paper-button style="font-size: 10px;" on-click="addToken">Add token to MetaMask</paper-button>
        </div>
         <div class="flex"></div>
         <div class="flex-vertical">
           <img src="{{levelimg}}" width="115px" height="115px">
           <p>User Level: {{userlevel}}</p>
           <paper-button on-click="buy" raised style="background-color: #042138; color: #fff;">Buy Level</paper-button>
         </div>
         <div class="flex"></div>
         <div class="flex-vertical">
           <p style="font-size: 14px;">Times Collected: {{dripcount}}</p>
           <p style="font-size: 14px;">Collection Interval: {{usertime}} minutes</p>
           <p style="font-size: 10px;">Last Collected: {{lasttime}}</p>
           <p style="font-size: 14px;">Collection Allowance: {{userallowace}} /// Crypto Matrix</p>
           <p style="font-size: 14px;">Collection Ready: {{isfaucetready}}</p>
         </div>
         <div class="flex"></div>
         <div class="flex-vertical">
           <img src="{{chestimg}}" width="145px" height="145px">
           <paper-button on-click="useFaucet" raised style="margin-top: 30px; background-color: #042138; color: #eeeeee;">Collect</paper-button>
         </div>
       </div>
       <center>
       <div class="card flex-vertical" style="background-color: #225277;">
        <div class="flex-horizontal" style="width: 100%;">
          <div class="flex"></div>
          <p style="font-size: 12px;">100 MintMe to buy a level.</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Timer decreases as you rank up.</p>
          <div class="flex"></div>
          <p style="font-size: 12px;">Maximum level is 10.</p>
          <div class="flex"></div>
        </div>
        <hr style="color: #225277; width: 100%;">
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
     this.chestimg = './images/con_chest/1.png';
   }

   async addToken() {
    var type = "ERC20"; var symbol = "$DM"; var decimals = "8"; var image = "https://i.imgur.com/8zi3OUL.png";
    var address = "0x15071e3cd81bbe97f6308383b98c5865dc731143";
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
       value: utils.toWei("100", "ether")
     });
     this.dripcount = await this.contract.methods.getDripCount()
     .call({from: this.provider.eth.defaultAccount});
 
     this.userlevel = await this.contract.methods.getLevel()
     .call({from: this.provider.eth.defaultAccount});
 
     if(this.userlevel == 1) {
       this.levelimg = './images/con-badges/1.png';
       this.chestimg = './images/con-chest/1.png';
     }
     if(this.userlevel == 2) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/2.png';
     }
     if(this.userlevel == 3) {
        this.levelimg = './images/con-badges/3.png';
        this.chestimg = './images/con-chest/3.png';
     }
     if(this.userlevel == 4) {
        this.levelimg = './images/con-badges/4.png';
        this.chestimg = './images/con-chest/4.png';
     }
     if(this.userlevel == 5) {
        this.levelimg = './images/con-badges/5.png';
        this.chestimg = './images/con-chest/5.png';
     }
     if(this.userlevel == 6) {
        this.levelimg = './images/con-badges/6.png';
        this.chestimg = './images/con-chest/6.png';
     }
     if(this.userlevel == 7) {
        this.levelimg = './images/con-badges/7.png';
        this.chestimg = './images/con-chest/7.png';
     }
     if(this.userlevel == 8) {
        this.levelimg = './images/con-badges/8.png';
        this.chestimg = './images/con-chest/8.png';
     }
     if(this.userlevel == 9) {
        this.levelimg = './images/con-badges/9.png';
        this.chestimg = './images/con-chest/9.png';
     }
     if(this.userlevel >= 10) {
        this.levelimg = './images/con-badges/10.png';
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
      this.chestimg = './images/con-chest/1.png';
    }
    if(this.userlevel == 2) {
       this.levelimg = './images/con-badges/2.png';
       this.chestimg = './images/con-chest/2.png';
    }
    if(this.userlevel == 3) {
       this.levelimg = './images/con-badges/3.png';
       this.chestimg = './images/con-chest/3.png';
    }
    if(this.userlevel == 4) {
       this.levelimg = './images/con-badges/4.png';
       this.chestimg = './images/con-chest/4.png';
    }
    if(this.userlevel == 5) {
       this.levelimg = './images/con-badges/5.png';
       this.chestimg = './images/con-chest/5.png';
    }
    if(this.userlevel == 6) {
       this.levelimg = './images/con-badges/6.png';
       this.chestimg = './images/con-chest/6.png';
    }
    if(this.userlevel == 7) {
       this.levelimg = './images/con-badges/7.png';
       this.chestimg = './images/con-chest/7.png';
    }
    if(this.userlevel == 8) {
       this.levelimg = './images/con-badges/8.png';
       this.chestimg = './images/con-chest/8.png';
    }
    if(this.userlevel == 9) {
       this.levelimg = './images/con-badges/9.png';
       this.chestimg = './images/con-chest/9.png';
    }
    if(this.userlevel >= 10) {
       this.levelimg = './images/con-badges/10.png';
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
       this.chestimg = './images/con-chest/1.png';
     }
     if(this.userlevel == 2) {
        this.levelimg = './images/con-badges/2.png';
        this.chestimg = './images/con-chest/2.png';
     }
     if(this.userlevel == 3) {
        this.levelimg = './images/con-badges/3.png';
        this.chestimg = './images/con-chest/3.png';
     }
     if(this.userlevel == 4) {
        this.levelimg = './images/con-badges/4.png';
        this.chestimg = './images/con-chest/4.png';
     }
     if(this.userlevel == 5) {
        this.levelimg = './images/con-badges/5.png';
        this.chestimg = './images/con-chest/5.png';
     }
     if(this.userlevel == 6) {
        this.levelimg = './images/con-badges/6.png';
        this.chestimg = './images/con-chest/6.png';
     }
     if(this.userlevel == 7) {
        this.levelimg = './images/con-badges/7.png';
        this.chestimg = './images/con-chest/7.png';
     }
     if(this.userlevel == 8) {
        this.levelimg = './images/con-badges/8.png';
        this.chestimg = './images/con-chest/8.png';
     }
     if(this.userlevel == 9) {
        this.levelimg = './images/con-badges/9.png';
        this.chestimg = './images/con-chest/9.png';
     }
     if(this.userlevel >= 10) {
        this.levelimg = './images/con-badges/10.png';
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
 