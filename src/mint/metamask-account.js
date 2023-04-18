import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
 
class MetamaskAccount extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                display: block;
        
                padding: 10px;
                }
                p {
                    color: #eeeeee;
                }
                
            </style>
            
            <template is="dom-if" if="{{!metamask}}">
                <p style="color: #eeeeee; font-family: 'Dosis', sans-serif;">MetaMask is not installed!</p>
            </template>
            
        `;
      }

    static get properties() {
        return {
            provider: { 
                type: Object,
                observer: 'webLoad'
            },
            metamask: {
                type: Boolean
            },
            web3: Object,
            account: {
                type: Object,
                notify: true
            }
        };
    }

    async webLoad(web3) {     
        this.web3 = web3;
        this.account = await web3.eth.getAccounts(function(err, accounts){
            if (err != null) {
                console.log(err);
            } else if (accounts.length === 0) {
                ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
                    location.reload();
                });
            }
        });  
        this.web3.eth.defaultAccount = this.account[0];      
    }
}
 
window.customElements.define('metamask-account', MetamaskAccount); 