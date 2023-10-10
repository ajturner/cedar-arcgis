import { p as proxyCustomElement, H, J as createEvent, l as h, s as toAriaBoolean, O as slotChangeHasAssignedElement, y as getElementDir, q as Host } from './messageBundle-251c02f0.js';
import { c as connectInteractive, u as updateHostInteraction, d as disconnectInteractive, a as defineCustomElement$4 } from './loader-fc4f5566.js';
import { a as getDepth, C as CSS$1, I as ICONS$1, S as SLOTS, g as getListItemChildren, u as updateListItemChildren } from './utils3-bb03c824.js';
import { a as connectMessages, c as connectLocalized, s as setUpMessages, b as disconnectMessages, d as disconnectLocalized, u as updateMessages } from './t9n-5ff39294.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-bd375668.js';
import { d as defineCustomElement$5 } from './action-0c62abc9.js';
import { d as defineCustomElement$3 } from './icon-927a6d1d.js';
import './interfaces-f9f0dded.js';
import './_commonjsHelpers-b08b522c.js';
import './uuid-d7a4b2f1.js';
import './index-0c4dc1bb.js';
import './observers-cbe7e92f.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.0
 */

const CSS = {
  handle: "handle",
  handleActivated: "handle--activated",
};
const ICONS = {
  drag: "drag",
};

const handleCss = ":host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([hidden]){display:none}[hidden]{display:none}";

const Handle = /*@__PURE__*/ proxyCustomElement(class extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteHandleNudge = createEvent(this, "calciteHandleNudge", 6);
    this.calciteInternalHandleChange = createEvent(this, "calciteInternalHandleChange", 6);
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case " ":
          this.activated = !this.activated;
          event.preventDefault();
          break;
        case "ArrowUp":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({ direction: "up" });
          break;
        case "ArrowDown":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({ direction: "down" });
          break;
      }
    };
    this.handleBlur = () => {
      this.activated = false;
    };
    this.activated = false;
    this.dragHandle = undefined;
    this.messages = undefined;
    this.setPosition = undefined;
    this.setSize = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handleAriaTextChange() {
    const message = this.getAriaText("live");
    if (message) {
      this.calciteInternalHandleChange.emit({
        message,
      });
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectMessages(this);
    connectLocalized(this);
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  disconnectedCallback() {
    disconnectMessages(this);
    disconnectLocalized(this);
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await componentFocusable(this);
    this.handleButton?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getAriaText(type) {
    const { setPosition, setSize, label, messages, activated } = this;
    if (!messages || !label || typeof setSize !== "number" || typeof setPosition !== "number") {
      return null;
    }
    const text = type === "label"
      ? activated
        ? messages.dragHandleChange
        : messages.dragHandleIdle
      : activated
        ? messages.dragHandleActive
        : messages.dragHandleCommit;
    const replacePosition = text.replace("{position}", setPosition.toString());
    const replaceLabel = replacePosition.replace("{itemLabel}", label);
    return replaceLabel.replace("{total}", setSize.toString());
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
    // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
    h("span", { "aria-label": this.getAriaText("label"), "aria-pressed": toAriaBoolean(this.activated), class: { [CSS.handle]: true, [CSS.handleActivated]: this.activated }, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, role: "button", tabindex: "0", title: this.messages?.dragHandle,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => {
        this.handleButton = el;
      } }, h("calcite-icon", { icon: ICONS.drag, scale: "s" })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messages": ["handleAriaTextChange"],
    "label": ["handleAriaTextChange"],
    "activated": ["handleAriaTextChange"],
    "setPosition": ["handleAriaTextChange"],
    "setSize": ["handleAriaTextChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return handleCss; }
}, [1, "calcite-handle", {
    "activated": [1540],
    "dragHandle": [513, "drag-handle"],
    "messages": [16],
    "setPosition": [2, "set-position"],
    "setSize": [2, "set-size"],
    "label": [1],
    "messageOverrides": [16],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-handle", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Handle);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
  } });
}
defineCustomElement$2();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.0
 */

const listItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
const ListItem = /*@__PURE__*/ proxyCustomElement(class extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemSelect = createEvent(this, "calciteListItemSelect", 6);
    this.calciteListItemClose = createEvent(this, "calciteListItemClose", 6);
    this.calciteInternalListItemSelect = createEvent(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemActive = createEvent(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = createEvent(this, "calciteInternalFocusPreviousItem", 6);
    this.calciteInternalListItemChange = createEvent(this, "calciteInternalListItemChange", 6);
    this.closeClickHandler = () => {
      this.closed = true;
      this.calciteListItemClose.emit();
    };
    this.handleContentSlotChange = (event) => {
      this.hasCustomContent = slotChangeHasAssignedElement(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = slotChangeHasAssignedElement(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = slotChangeHasAssignedElement(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = slotChangeHasAssignedElement(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = slotChangeHasAssignedElement(event);
    };
    this.handleDefaultSlotChange = (event) => {
      this.handleOpenableChange(event.target);
    };
    this.toggleOpen = () => {
      this.open = !this.open;
    };
    this.itemClicked = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      this.toggleSelected();
      this.calciteInternalListItemActive.emit();
    };
    this.toggleSelected = () => {
      const { selectionMode, selected } = this;
      if (this.disabled) {
        return;
      }
      if (selectionMode === "multiple" || selectionMode === "single") {
        this.selected = !selected;
      }
      else if (selectionMode === "single-persist") {
        this.selected = true;
      }
      this.calciteListItemSelect.emit();
    };
    this.handleItemKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { key } = event;
      const composedPath = event.composedPath();
      const { containerEl, contentEl, actionsStartEl, actionsEndEl, open, openable } = this;
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
      if (key === "Enter" &&
        !composedPath.includes(actionsStartEl) &&
        !composedPath.includes(actionsEndEl)) {
        event.preventDefault();
        this.toggleSelected();
      }
      else if (key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (currentIndex === -1) {
          if (!open && openable) {
            this.open = true;
            this.focusCell(null);
          }
          else if (cells[0]) {
            this.focusCell(cells[0]);
          }
        }
        else if (cells[currentIndex] && cells[nextIndex]) {
          this.focusCell(cells[nextIndex]);
        }
      }
      else if (key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (currentIndex === -1) {
          this.focusCell(null);
          if (open && openable) {
            this.open = false;
          }
          else {
            this.calciteInternalFocusPreviousItem.emit();
          }
        }
        else if (currentIndex === 0) {
          this.focusCell(null);
          containerEl.focus();
        }
        else if (cells[currentIndex] && cells[prevIndex]) {
          this.focusCell(cells[prevIndex]);
        }
      }
    };
    this.focusCellNull = () => {
      this.focusCell(null);
    };
    this.focusCell = (focusEl, saveFocusIndex = true) => {
      const { contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
      if (saveFocusIndex) {
        focusMap.set(parentListEl, null);
      }
      [actionsStartEl, contentEl, actionsEndEl].filter(Boolean).forEach((tableCell, cellIndex) => {
        const tabIndexAttr = "tabindex";
        if (tableCell === focusEl) {
          tableCell.setAttribute(tabIndexAttr, "0");
          saveFocusIndex && focusMap.set(parentListEl, cellIndex);
        }
        else {
          tableCell.removeAttribute(tabIndexAttr);
        }
      });
      focusEl?.focus();
    };
    this.active = false;
    this.closable = false;
    this.closed = false;
    this.description = undefined;
    this.disabled = false;
    this.dragHandle = false;
    this.label = undefined;
    this.metadata = undefined;
    this.open = false;
    this.setSize = null;
    this.setPosition = null;
    this.selected = false;
    this.value = undefined;
    this.selectionMode = null;
    this.selectionAppearance = null;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.level = null;
    this.visualLevel = null;
    this.parentListEl = undefined;
    this.openable = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasCustomContent = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
  }
  activeHandler(active) {
    if (!active) {
      this.focusCell(null, false);
    }
  }
  handleClosedChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleDisabledChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleSelectedChange() {
    this.calciteInternalListItemSelect.emit();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleCalciteInternalListDefaultSlotChanges(event) {
    event.stopPropagation();
    this.handleOpenableChange(this.defaultSlotEl);
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectInteractive(this);
    connectLocalized(this);
    connectMessages(this);
    const { el } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = getDepth(el) + 1;
    this.visualLevel = getDepth(el, true);
    this.setSelectionDefaults();
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this, "managed");
  }
  disconnectedCallback() {
    disconnectInteractive(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await componentFocusable(this);
    const { containerEl, contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
    const focusIndex = focusMap.get(parentListEl);
    if (typeof focusIndex === "number") {
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      if (cells[focusIndex]) {
        this.focusCell(cells[focusIndex]);
      }
      else {
        containerEl?.focus();
      }
      return;
    }
    containerEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const { selected, selectionMode, selectionAppearance } = this;
    if (selectionMode === "none" || selectionAppearance === "border") {
      return null;
    }
    return (h("td", { class: CSS$1.selectionContainer, key: "selection-container", onClick: this.itemClicked }, h("calcite-icon", { icon: selected
        ? selectionMode === "multiple"
          ? ICONS$1.selectedMultiple
          : ICONS$1.selectedSingle
        : ICONS$1.unselected, scale: "s" })));
  }
  renderDragHandle() {
    return this.dragHandle ? (h("td", { class: CSS$1.dragContainer, key: "drag-handle-container" }, h("calcite-handle", { label: this.label, setPosition: this.setPosition, setSize: this.setSize }))) : null;
  }
  renderOpen() {
    const { el, open, openable, parentListEl } = this;
    const dir = getElementDir(el);
    return openable ? (h("td", { class: CSS$1.openContainer, key: "open-container", onClick: this.toggleOpen }, h("calcite-icon", { icon: open ? ICONS$1.open : dir === "rtl" ? ICONS$1.closedRTL : ICONS$1.closedLTR, scale: "s" }))) : parentListEl?.openable ? (h("td", { class: CSS$1.openContainer, key: "open-container", onClick: this.itemClicked }, h("calcite-icon", { icon: ICONS$1.blank, scale: "s" }))) : null;
  }
  renderActionsStart() {
    const { label, hasActionsStart } = this;
    return (h("td", { "aria-label": label, class: CSS$1.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.actionsStartEl = el) }, h("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { label, hasActionsEnd, closable, messages } = this;
    return (h("td", { "aria-label": label, class: CSS$1.actionsEnd, hidden: !(hasActionsEnd || closable), key: "actions-end-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.actionsEndEl = el) }, h("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), closable ? (h("calcite-action", { appearance: "transparent", icon: ICONS$1.close, key: "close-action", label: messages.close, onClick: this.closeClickHandler, text: messages.close })) : null));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return (h("div", { class: CSS$1.contentStart, hidden: !hasContentStart }, h("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderCustomContent() {
    const { hasCustomContent } = this;
    return (h("div", { class: CSS$1.customContent, hidden: !hasCustomContent }, h("slot", { name: SLOTS.content, onSlotchange: this.handleContentSlotChange })));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return (h("div", { class: CSS$1.contentEnd, hidden: !hasContentEnd }, h("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  renderContentProperties() {
    const { label, description, hasCustomContent } = this;
    return !hasCustomContent && (!!label || !!description) ? (h("div", { class: CSS$1.content, key: "content" }, label ? (h("div", { class: CSS$1.label, key: "label" }, label)) : null, description ? (h("div", { class: CSS$1.description, key: "description" }, description)) : null)) : null;
  }
  renderContentContainer() {
    const { description, label, selectionMode, hasCustomContent } = this;
    const hasCenterContent = hasCustomContent || !!label || !!description;
    const content = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderContentProperties(),
      this.renderContentEnd(),
    ];
    return (h("td", { "aria-label": label, class: {
        [CSS$1.contentContainer]: true,
        [CSS$1.contentContainerSelectable]: selectionMode !== "none",
        [CSS$1.contentContainerHasCenterContent]: hasCenterContent,
      }, key: "content-container", onClick: this.itemClicked, role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.contentEl = el) }, content));
  }
  render() {
    const { openable, open, level, setPosition, setSize, active, label, selected, selectionAppearance, selectionMode, closed, } = this;
    const showBorder = selectionMode !== "none" && selectionAppearance === "border";
    const borderSelected = showBorder && selected;
    const borderUnselected = showBorder && !selected;
    return (h(Host, null, h("tr", { "aria-expanded": openable ? toAriaBoolean(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": toAriaBoolean(selected), "aria-setsize": setSize, class: {
        [CSS$1.container]: true,
        [CSS$1.containerBorderSelected]: borderSelected,
        [CSS$1.containerBorderUnselected]: borderUnselected,
      }, hidden: closed, onFocus: this.focusCellNull, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${this.visualLevel}` }, tabIndex: active ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (el) => (this.containerEl = el) }, this.renderDragHandle(), this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), h("div", { class: {
        [CSS$1.nestedContainer]: true,
        [CSS$1.nestedContainerHidden]: openable && !open,
      } }, h("slot", { onSlotchange: this.handleDefaultSlotChange, ref: (el) => (this.defaultSlotEl = el) }))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  emitCalciteInternalListItemChange() {
    this.calciteInternalListItemChange.emit();
  }
  setSelectionDefaults() {
    const { parentListEl, selectionMode, selectionAppearance } = this;
    if (!parentListEl) {
      return;
    }
    if (!selectionMode) {
      this.selectionMode = parentListEl.selectionMode;
    }
    if (!selectionAppearance) {
      this.selectionAppearance = parentListEl.selectionAppearance;
    }
  }
  handleOpenableChange(slotEl) {
    if (!slotEl) {
      return;
    }
    const { parentListEl } = this;
    const listItemChildren = getListItemChildren(slotEl);
    updateListItemChildren(listItemChildren);
    const openable = !!listItemChildren.length;
    if (openable && parentListEl && !parentListEl.openable) {
      parentListEl.openable = true;
    }
    this.openable = openable;
    if (!openable) {
      this.open = false;
    }
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "active": ["activeHandler"],
    "closed": ["handleClosedChange"],
    "disabled": ["handleDisabledChange"],
    "selected": ["handleSelectedChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return listItemCss; }
}, [1, "calcite-list-item", {
    "active": [4],
    "closable": [516],
    "closed": [1540],
    "description": [1],
    "disabled": [516],
    "dragHandle": [4, "drag-handle"],
    "label": [1],
    "metadata": [16],
    "open": [1540],
    "setSize": [2, "set-size"],
    "setPosition": [2, "set-position"],
    "selected": [1540],
    "value": [8],
    "selectionMode": [1025, "selection-mode"],
    "selectionAppearance": [1025, "selection-appearance"],
    "messageOverrides": [1040],
    "messages": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "level": [32],
    "visualLevel": [32],
    "parentListEl": [32],
    "openable": [32],
    "hasActionsStart": [32],
    "hasActionsEnd": [32],
    "hasCustomContent": [32],
    "hasContentStart": [32],
    "hasContentEnd": [32],
    "setFocus": [64]
  }, [[0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"], [0, "calciteInternalListDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list-item", "calcite-action", "calcite-handle", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteListItem = ListItem;
const defineCustomElement = defineCustomElement$1;

export { CalciteListItem, defineCustomElement };

//# sourceMappingURL=calcite-list-item-b58a9c7b.js.map