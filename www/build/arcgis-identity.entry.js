import { r as registerInstance, h, f as Host } from './index-0c4dc1bb.js';
import { s as state } from './state-333c7f55.js';

const ArcgisIdentity = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.token = null;
    this.apiUrl = "https://hubqa.arcgis.com";
  }
  componentWillLoad() {
    this.updateState();
  }
  updateState() {
    state.token = this.token;
    state.apiUrl = this.apiUrl;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get watchers() { return {
    "token": ["updateState"],
    "apiUrl": ["updateState"]
  }; }
};

export { ArcgisIdentity as arcgis_identity };

//# sourceMappingURL=arcgis-identity.entry.js.map