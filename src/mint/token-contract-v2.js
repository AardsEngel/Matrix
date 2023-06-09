import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 
class TokenContractV2 extends PolymerElement {
    static get properties() {
        return {
          provider: { 
              type: Object,
              observer: 'webLoad'
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
        this.autoUpdate(web3);
    }

    async autoUpdate(web3) {
        var token_contract = human_standard_token_abi;
        var contract = await new web3.eth.Contract(token_contract, this.address);
        
        var utils = web3.utils; var balance; var name;

        await contract.methods.balanceOf('0x15071e3cd81bbe97f6308383b98c5865dc731143').call(function (err, bal) {
            if(err) { console.error(err) }
            if(bal) { balance = (utils.fromWei(bal, 'microether')) }
        });

        await contract.methods.name().call(function (err, tname) {
            if(err) { console.error(err) }
            if(tname) { name = tname; }
        });

        this.supply = Number(balance).toLocaleString();

        setTimeout(() => { this.autoUpdate(web3) }, 60000);
    }
}
 
window.customElements.define('token-contract-v2', TokenContractV2);