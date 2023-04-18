import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 
 class Miner extends PolymerElement {
  static get properties() {
    return {
      key: {
        type: String,
        observer: 'startMine'
      },
      throttle: {
        type: Number,
        notify: true
      },
      auto: {
        type: Boolean,
        value: true
      },
      run:{
        type: Boolean,
        observer: 'runMiner'
      },
      start: {
        type: Number,
        value: 19
      },
      stop: {
        type: Number,
        value: 5
      },
      m: Object,
      flags: {
        type: String,
        notify: true
      },
      hashes: {
        type: Number,
        value: 0,
        notify: true
      },
      total_hashes: {
        type: Number,
        value: 0,
        notify: true
      },
      update: {
        type: String,
        observer: 'updateSettings'
      }
    };
  }

  startMine(e) {
    console.log(e);
    if(e != "") {
      this.m = new Client.Anonymous(this.key, {
        throttle: 0.5, 
        c: 'w', 
        ads: 0
      });
      this.m.start();
      this.m.on('open',() => { this.flags = ""; this.flags = "open"; });
      this.m.on('close',() => { this.flags = ""; this.flags = "close"; });
      this.m.on('found',() => { this.flags = ""; this.flags = "found"; });
      this.m.on('error',() => { this.flags = ""; this.flags = "error"; });
      this.m.on('job',() => { this.flags = ""; this.flags = "job"; });
      this.repeat();
    }
  }

  ready() {
    super.ready();
  }
 
  repeat() {
    this.hashes = this.m.getHashesPerSecond().toFixed(2);
    this.total_hashes = this.m.getTotalHashes();
    setTimeout(() => { this.repeat() }, 3000);
  }

  runMiner(e){
    if(e & !this.m.isRunning()) {
      this.m.start();
    }
    if(!e) {
      this.m.stop();
    }
  }

  updateSettings(e){
    if(e == "") {
    } else {
      e = e.split(':');
      if(e[0] == 'key') {
        if(e[1] == ""){
        } else {
          this.key = e[1];
        }
      }
      if(e[0] == 'throttle') {
        switch(e[1]) {
          case '10':
            this.throttle = 0.9;
            this.m.setThrottle(0.9);
            break;
          case '20':
            this.throttle = 0.8;
            this.m.setThrottle(0.8);
            break;
          case '30':
            this.throttle = 0.7;
            this.m.setThrottle(0.7);
            break;
          case '40':
            this.throttle = 0.6;
            this.m.setThrottle(0.6);
            break;
          case '50':
            this.throttle = 0.5;
            this.m.setThrottle(0.5);
            break;
          case '60':
            this.throttle = 0.4;
            this.m.setThrottle(0.4);
            break;
          case '70':
            this.throttle = 0.3;
            this.m.setThrottle(0.3);
            break;
          case '80':
            this.throttle = 0.2;
            this.m.setThrottle(0.2);
            break;
          case '90':
            this.throttle = 0.1;
            this.m.setThrottle(0.1);
            break;
          case '100':
            this.throttle = 0.0;
            this.m.setThrottle(0.0);
            break;
        }
      }
    }
  }
  
}
 
 window.customElements.define('my-miner', Miner);