import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 
class FaucetContract extends PolymerElement {
    static get properties() {
        return {
          provider: { 
              type: Object,
              observer: 'webLoad'
          },
          contract: {
              type: Object,
              notify: true
          },
          name: String,
          supply: { 
              type: Number,
              notify: true
          },
          address: String
        };
      }
    
    async webLoad(web3) {     
        var faucet_contract = faucet_abi;
        this.contract = await new web3.eth.Contract(faucet_contract, this.address);

        this.autoUpdate(web3);
    }

    async autoUpdate(web3) {
               
        var utils = web3.utils; var balance;
        
        await this.contract.methods.getFaucetBalance().call(function (err, bal) { 
            if(err) { console.error(err) }
            if(bal) { balance = (utils.fromWei(bal, 'microether')) }
        });

        this.supply = Number(balance).toLocaleString();

        setTimeout(() => { this.autoUpdate(web3) }, 60000);
    }
}
 
window.customElements.define('faucet-contract', FaucetContract);