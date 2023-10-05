import { r as registerInstance, h, f as Host } from './index-0c4dc1bb.js';

const cedarTableCss = ":host{display:block}table{font-weight:400}thead{border-bottom:1px solid gray}";

const CedarTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = undefined;
  }
  // @State() report:ITelemetryResponse;
  // async componentWillLoad() {
  //   this.report = await fetchTelemetry();
  //   console.log("telemetry response", this.report)
  // }
  render() {
    return (h(Host, null, h("slot", null), h("table", null, this.renderTable())));
  }
  renderTable() {
    return ([
      h("thead", null, h("tr", null, Object.keys(this.data[0]).map((column) => {
        return h("th", null, column);
      }))),
      h("tbody", null, this.data.map(row => {
        return (h("tr", null, Object.keys(row).map((column) => {
          return (h("th", null, row[column]));
        })));
      }))
    ]);
  }
};
CedarTable.style = cedarTableCss;

export { CedarTable as cedar_table };

//# sourceMappingURL=cedar-table.entry.js.map