import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 
class BlockProvider extends PolymerElement {
    static get properties() {
        return {
          provider: { 
              type: Object,
              notify: true
          },
          metamask: {
              type: Boolean,
              notify: true
          }
        };
      }
    
    async ready() {
        super.ready();

        var metam = false; var temp_web3;
        if (typeof window.ethereum !== 'undefined' && ethereum.isMetaMask) {
          metam = true;
          temp_web3 = new Web3(web3.currentProvider);
        } else {
          temp_web3 = new Web3();
          temp_web3.setProvider(new temp_web3.providers.HttpProvider('https://node1.mintme.com')); 
        }  

        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x609E" }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x609E",
                    chainName: "MintMe",
                    nativeCurrency: {
                      name: "mintme",
                      symbol: "MINTME",
                      decimals: 18,
                    },
                    rpcUrls: [
                      "https://node1.mintme.com:443",
                      "https://node2.mintme.com:443",
                    ],
                    blockExplorerUrls: ["https://www.mintme.com/explorer/"],
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }

        this.metamask = metam;
        this.provider = temp_web3;
    }
}
 
window.customElements.define('block-provider', BlockProvider); 