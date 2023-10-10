import { r as registerInstance, e as createEvent, h, f as Host } from './index-0c4dc1bb.js';

const cedarConfigurationChooserCss = ":host{display:block}";

const CedarConfigurationChooser = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.configurationSelected = createEvent(this, "configurationSelected", 7);
    this.configurations = [];
  }
  async calciteDropdownSelected(_event) {
    console.debug("cedar-configuration-chooser: configurationSelected", {
      selected: this.dropdownEl.selectedItems
    });
    console.debug("cedar-configuration-chooser: configurationSelected", {
      url: this.dropdownEl.selectedItems[0].dataset.url
    });
    const url = this.dropdownEl.selectedItems[0].dataset.url;
    const response = await fetch(url);
    const config = await response.json();
    this.configurationSelected.emit(config);
  }
  componentWillLoad() {
    this.configurations = [
      {
        url: "./data/311_cedar.json",
        name: "311 Dataset",
        type: "dataset",
        id: "311_cedar",
        format: "cedar"
      },
      {
        url: "./data/bar.json",
        name: "Bar",
        type: "dataset",
        id: "Bar",
        format: "cedar"
      }, {
        url: "./data/line.json",
        name: "Line",
        type: "dataset",
        id: "line",
        format: "cedar"
      }, {
        url: "./data/tree_cedar.json",
        name: "Trees Dataset",
        type: "dataset",
        id: "tree_cedar",
        format: "cedar"
      }
    ];
  }
  render() {
    return (h(Host, null, h("slot", null), h("calcite-dropdown", { ref: (el) => { this.dropdownEl = el; }, width: "m", "close-on-select-disabled": true }, h("calcite-button", { slot: "trigger", scale: "l", kind: "inverse", appearance: "outline-fill", "icon-start": "classify-pixels" }, "Chart Options"), h("calcite-dropdown-group", { "selection-mode": "single", "group-title": "Basic" }, this.configurations.map((config) => {
      return (h("calcite-dropdown-item", { "data-id": config.id, "data-url": config.url }, config.name));
    })))));
  }
};
CedarConfigurationChooser.style = cedarConfigurationChooserCss;

export { CedarConfigurationChooser as cedar_configuration_chooser };

//# sourceMappingURL=cedar-configuration-chooser.entry.js.map