import { r as registerInstance, h, f as Host } from './index-0c4dc1bb.js';
import { g as getItemData } from './index-5c48e1ee.js';

const cedarDashboardCss = ":host{display:block}";

const CedarDashboard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.webmapId = null;
    this.charts = [];
  }
  componentWillLoad() {
    this.loadWebmap(this.webmapId);
  }
  async loadWebmap(newWebmapId) {
    const webmapData = await getItemData(newWebmapId);
    this.charts = webmapData.operationalLayers
      .map((layer) => {
      return layer.charts || [];
    })
      .flat();
    console.debug("cedar-dashboard: loadWebmap", this.charts);
  }
  render() {
    return (h(Host, null, h("slot", null), this.charts.map((chart) => {
      return (h("cedar-chart", { config: chart }));
    })));
  }
  static get watchers() { return {
    "webmapId": ["loadWebmap"]
  }; }
};
CedarDashboard.style = cedarDashboardCss;

export { CedarDashboard as cedar_dashboard };

//# sourceMappingURL=cedar-dashboard.entry.js.map