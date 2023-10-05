import { r as registerInstance, e as createEvent, h, f as Host, g as getAssetPath, i as getElement } from './index-0c4dc1bb.js';
import { D as DefaultChartActions, S as Slot, I as Ia } from './interfaces-f9f0dded.js';
import './_commonjsHelpers-b08b522c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
/**
 * Creates a new tooltip object and adds it to the DOM
 * @param innerHTML HTML to be displayed inside tooltip
 * @param referenceElement Element for which the tooltip will be shown
 * @returns The tooltip object that was created
 */
function createTooltip(innerHTML, referenceElement) {
  const tooltip = document.createElement("calcite-tooltip");
  tooltip.innerHTML = innerHTML;
  tooltip.style.setProperty("opacity", "1");
  if (referenceElement !== undefined)
    tooltip.referenceElement = referenceElement;
  document.body.appendChild(tooltip);
  return tooltip;
}
/**
 * Destroys tooltip by removing it from the DOM
 * @param tooltip The tooltip to be destroyed
 * @returns Null return for caller to easily reset tooltip object to null
 */
function destroyTooltip(tooltip) {
  tooltip === null || tooltip === void 0 ? void 0 : tooltip.remove();
  return null;
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const HTMLClasses = {
  actionBar: "action-bar"
};

const arcgisChartsActionBarCss = ".action-bar{display:flex;flex-direction:column;height:100%;border-right:1px solid var(--calcite-ui-border-2);overflow-x:hidden}";

const ArcGISChartsActionBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisChartsDefaultActionSelect = createEvent(this, "arcgisChartsDefaultActionSelect", 7);
    this.arcgisChartsActionBarToggle = createEvent(this, "arcgisChartsActionBarToggle", 7);
    /**
     * Element reference for expand action in calciteActionBar
     * @category Private
     */
    this.expandAction = null;
    /**
     * Handler for default action click event
     * @category Event handler
     * @param e Event payload from click
     */
    this.handleDefaultActionClick = (e) => {
      const action = e.target;
      const payload = {
        actionId: action.id,
        actionActive: false
      };
      switch (action.id) {
        case DefaultChartActions.Legend:
          // Legend clicked behavior
          this.activateLegend = this.activateLegend === false;
          payload.actionActive = this.activateLegend;
          break;
        case DefaultChartActions.RotateChart:
          // Rotate Chart clicked behavior
          this.activateRotateChart = this.activateRotateChart === false;
          payload.actionActive = this.activateRotateChart;
          break;
        case DefaultChartActions.FilterBySelection:
          // Filter by Selection clicked behavior
          this.activateFilterBySelection = this.activateFilterBySelection === false;
          payload.actionActive = this.activateFilterBySelection;
          break;
        case DefaultChartActions.FilterByExtent:
          // Filter by Extent clicked behavior
          this.activateFilterByExtent = this.activateFilterByExtent === false;
          payload.actionActive = this.activateFilterByExtent;
          break;
        case DefaultChartActions.Selection:
          // Selection clicked behavior
          this.activateSelection = true;
          this.activateZoom = false;
          payload.actionActive = this.activateSelection;
          break;
        case DefaultChartActions.Zoom:
          // Zoom clicked behavior
          this.activateSelection = false;
          this.activateZoom = true;
          payload.actionActive = this.activateZoom;
          break;
        case DefaultChartActions.ClearSelection:
          // Clear Selection clicked behavior
          this.disableClearSelection = true;
          payload.actionActive = this.activateClearSelection;
          break;
        default:
          break;
      }
      this.arcgisChartsDefaultActionSelect.emit(payload);
    };
    /**
     * Handler for calciteActionBarToggle event
     * @category Event handler
     */
    this.handleCalciteActionBarToggle = () => {
      this.expanded = this.calciteActionBar.expanded;
      this.setCustomActionsExpanded();
      this.arcgisChartsActionBarToggle.emit(this.expanded);
    };
    /**
     * Handler for mouseOver event that creates a tooltip for the hovered action
     * @category Event handler
     * @param e Event payload from mouse over
     */
    this.handleMouseOver = (e) => {
      // Only show tooltip if action bar in not expanded
      if (this.calciteActionBar.expanded === false) {
        const element = e.target;
        if (this.actionTooltip !== undefined) {
          this.actionTooltip = destroyTooltip(this.actionTooltip);
        }
        // Find action from target element or its child
        let action;
        if ((element === null || element === void 0 ? void 0 : element.tagName) === "CALCITE-ACTION") {
          action = element;
        }
        else if ((element === null || element === void 0 ? void 0 : element.tagName) === "DIV") {
          action = element.firstChild;
        }
        if (action !== undefined) {
          this.actionTooltip = createTooltip(action.text, action);
          this.actionTooltip.open = true;
        }
      }
      else {
        this.actionTooltip = destroyTooltip(this.actionTooltip);
      }
    };
    /**
     * Handler for mouseOut event that destroys current action tooltip
     * @category Event handler
     */
    this.handleMouseOut = () => {
      if (this.actionTooltip !== null) {
        this.actionTooltip = destroyTooltip(this.actionTooltip);
      }
    };
    /**
     * Handler for `slotchange` event to set custom action event handlers dynamically
     * @category Event handler
     */
    this.handleSlotChange = (e) => {
      const slot = e.target;
      const customActions = slot.assignedElements();
      for (const action of customActions) {
        action.onmouseover = this.handleMouseOver;
      }
    };
    this.forceDisableActions = false;
    this.activateLegend = false;
    this.disableLegend = false;
    this.legendTitle = undefined;
    this.activateRotateChart = false;
    this.disableRotateChart = false;
    this.rotateChartTitle = undefined;
    this.activateFilterBySelection = false;
    this.disableFilterBySelection = true;
    this.filterBySelectionTitle = undefined;
    this.activateFilterByExtent = false;
    this.disableFilterByExtent = false;
    this.filterByExtentTitle = undefined;
    this.activateSelection = false;
    this.disableSelection = false;
    this.selectionTitle = undefined;
    this.activateZoom = false;
    this.disableZoom = false;
    this.zoomTitle = undefined;
    this.activateFullExtent = false;
    this.disableFullExtent = false;
    this.fullExtentTitle = undefined;
    this.activateClearSelection = false;
    this.disableClearSelection = false;
    this.clearSelectionTitle = undefined;
    this.activateSwitchSelection = false;
    this.disableSwitchSelection = false;
    this.switchSelectionTitle = undefined;
    this.expanded = false;
    this.actionBarHideActionsProps = undefined;
    this.actionTooltip = null;
  }
  /**
   * Renders default actions
   * @category Private
   */
  renderDefaultActions() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
    return [
      ((_a = this.actionBarHideActionsProps) === null || _a === void 0 ? void 0 : _a.hideLegend) !== true ||
        ((_b = this.actionBarHideActionsProps) === null || _b === void 0 ? void 0 : _b.hideRotateChart) !== true ? (h("calcite-action-group", null, ((_c = this.actionBarHideActionsProps) === null || _c === void 0 ? void 0 : _c.hideLegend) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.Legend, text: (_d = this.legendTitle) !== null && _d !== void 0 ? _d : (_e = this.strings) === null || _e === void 0 ? void 0 : _e.legend, active: this.activateLegend, disabled: this.disableLegend || this.forceDisableActions, onClick: this.handleDefaultActionClick }, h("calcite-icon", { icon: "legend", scale: "s", flipRtl: true })))) : null, ((_f = this.actionBarHideActionsProps) === null || _f === void 0 ? void 0 : _f.hideRotateChart) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.RotateChart, icon: "rotate", text: (_g = this.rotateChartTitle) !== null && _g !== void 0 ? _g : (_h = this.strings) === null || _h === void 0 ? void 0 : _h.rotateChart, active: this.activateRotateChart, disabled: this.disableRotateChart || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null)) : null,
      ((_j = this.actionBarHideActionsProps) === null || _j === void 0 ? void 0 : _j.hideFilterBySelection) !== true ||
        ((_k = this.actionBarHideActionsProps) === null || _k === void 0 ? void 0 : _k.hideFilterByExtent) !== true ? (h("calcite-action-group", null, ((_l = this.actionBarHideActionsProps) === null || _l === void 0 ? void 0 : _l.hideFilterBySelection) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.FilterBySelection, icon: "selection-filter", text: (_m = this.filterBySelectionTitle) !== null && _m !== void 0 ? _m : (_o = this.strings) === null || _o === void 0 ? void 0 : _o.filterBySelection, active: this.activateFilterBySelection, disabled: this.disableFilterBySelection || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null, ((_p = this.actionBarHideActionsProps) === null || _p === void 0 ? void 0 : _p.hideFilterByExtent) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.FilterByExtent, icon: "extent-filter", text: (_q = this.filterByExtentTitle) !== null && _q !== void 0 ? _q : (_r = this.strings) === null || _r === void 0 ? void 0 : _r.filterByExtent, active: this.activateFilterByExtent, disabled: this.disableFilterByExtent || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null)) : null,
      ((_s = this.actionBarHideActionsProps) === null || _s === void 0 ? void 0 : _s.hideSelection) !== true ||
        ((_t = this.actionBarHideActionsProps) === null || _t === void 0 ? void 0 : _t.hideZoom) !== true ||
        ((_u = this.actionBarHideActionsProps) === null || _u === void 0 ? void 0 : _u.hideFullExtent) !== true ||
        ((_v = this.actionBarHideActionsProps) === null || _v === void 0 ? void 0 : _v.hideClearSelection) !== true ||
        ((_w = this.actionBarHideActionsProps) === null || _w === void 0 ? void 0 : _w.hideSwitchSelection) !== true ? (h("calcite-action-group", null, ((_x = this.actionBarHideActionsProps) === null || _x === void 0 ? void 0 : _x.hideZoom) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.Zoom, icon: "magnifying-glass", text: (_y = this.zoomTitle) !== null && _y !== void 0 ? _y : (_z = this.strings) === null || _z === void 0 ? void 0 : _z.zoom, active: this.activateZoom, disabled: this.disableZoom || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null, ((_0 = this.actionBarHideActionsProps) === null || _0 === void 0 ? void 0 : _0.hideSelection) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.Selection, icon: "cursor-selection", text: (_1 = this.selectionTitle) !== null && _1 !== void 0 ? _1 : (_2 = this.strings) === null || _2 === void 0 ? void 0 : _2.selection, active: this.activateSelection, disabled: this.disableSelection || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null, ((_3 = this.actionBarHideActionsProps) === null || _3 === void 0 ? void 0 : _3.hideClearSelection) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.ClearSelection, icon: "erase", text: (_4 = this.clearSelectionTitle) !== null && _4 !== void 0 ? _4 : (_5 = this.strings) === null || _5 === void 0 ? void 0 : _5.clearSelection, active: this.activateClearSelection, disabled: this.disableClearSelection || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null, ((_6 = this.actionBarHideActionsProps) === null || _6 === void 0 ? void 0 : _6.hideFullExtent) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.FullExtent, icon: "zoom-out-fixed", text: (_7 = this.fullExtentTitle) !== null && _7 !== void 0 ? _7 : (_8 = this.strings) === null || _8 === void 0 ? void 0 : _8.fullExtent, active: this.activateFullExtent, disabled: this.disableFullExtent || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null, ((_9 = this.actionBarHideActionsProps) === null || _9 === void 0 ? void 0 : _9.hideSwitchSelection) !== true ? (h("div", { onMouseOver: this.handleMouseOver }, h("calcite-action", { id: DefaultChartActions.SwitchSelection, icon: "arrow-right-left", text: (_10 = this.switchSelectionTitle) !== null && _10 !== void 0 ? _10 : (_11 = this.strings) === null || _11 === void 0 ? void 0 : _11.switchSelection, active: this.activateSwitchSelection, disabled: this.disableSwitchSelection || this.forceDisableActions, onClick: this.handleDefaultActionClick }))) : null)) : null
    ];
  }
  /**
   * Sets whether text is expanded on all custom actions
   * @category Private
   */
  setCustomActionsExpanded() {
    this.el.querySelectorAll("calcite-action").forEach((action) => {
      const calciteAction = action;
      calciteAction.textEnabled = this.expanded;
    });
  }
  /**
   * @category Lifecycle
   */
  render() {
    return (h(Host, null, h("calcite-action-bar", { class: HTMLClasses.actionBar, onCalciteActionBarToggle: this.handleCalciteActionBarToggle, onMouseOut: this.handleMouseOut, expanded: this.expanded, ref: (ref) => {
        this.calciteActionBar = ref;
      }, messageOverrides: { expand: this.strings.expand, collapse: this.strings.collapse }, "overflow-actions-disabled": true }, h("slot", { name: Slot.customActionTop, onSlotchange: this.handleSlotChange }), this.renderDefaultActions(), h("slot", { name: Slot.customActionBelow, onSlotchange: this.handleSlotChange }))));
  }
  /**
   * @category Lifecycle
   */
  async componentWillLoad() {
    ({ strings: this.strings } = await Ia(this.el, getAssetPath(`.`)));
  }
  /**
   * @category Lifecycle
   */
  componentDidRender() {
    this.handleExpandTooltip();
  }
  /**
   * @category Lifecycle
   */
  disconnectedCallback() {
    var _a;
    (_a = this.actionTooltip) === null || _a === void 0 ? void 0 : _a.remove();
  }
  /**
   * handle creation and deletion of the expand tooltip
   * @category Private
   */
  handleExpandTooltip() {
    var _a, _b;
    if (this.expandAction === null) {
      this.expandAction = (_b = (_a = this.calciteActionBar.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("calcite-action")) !== null && _b !== void 0 ? _b : null;
      if (this.expandAction !== null) {
        this.expandAction.addEventListener("mouseenter", () => {
          var _a;
          // add expand tooltip only iff
          // a. calcite action bar is collapsed (not expanded)
          // b. document body have calcite tooltip as its last child
          //
          if (((_a = this.calciteActionBar) === null || _a === void 0 ? void 0 : _a.expanded) === false &&
            this.expandAction !== null &&
            document.body.contains(this.actionTooltip) === false) {
            this.actionTooltip = createTooltip(this.strings.expand, this.expandAction);
            this.actionTooltip.open = true;
          }
        });
        this.expandAction.addEventListener("mouseleave", () => {
          var _a;
          if (((_a = this.calciteActionBar) === null || _a === void 0 ? void 0 : _a.expanded) === false && this.actionTooltip !== null) {
            this.actionTooltip = destroyTooltip(this.actionTooltip);
          }
        });
        this.expandAction.addEventListener("click", () => {
          var _a;
          // destroy tooltip when the user clicks on expand action
          if (((_a = this.calciteActionBar) === null || _a === void 0 ? void 0 : _a.expanded) === true && this.actionTooltip !== null) {
            this.actionTooltip = destroyTooltip(this.actionTooltip);
          }
        });
      }
    }
  }
  static get assetsDirs() { return ["t9n"]; }
  get el() { return getElement(this); }
};
ArcGISChartsActionBar.style = arcgisChartsActionBarCss;

export { ArcGISChartsActionBar as arcgis_charts_action_bar };

//# sourceMappingURL=arcgis-charts-action-bar.entry.js.map