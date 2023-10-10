import { Component, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';
import { ICedarFile } from '../../util/types';

@Component({
  tag: 'cedar-configuration-chooser',
  styleUrl: 'cedar-configuration-chooser.css',
  shadow: true,
})
export class CedarConfigurationChooser {

  @Prop({mutable: true, reflect: true}) configurations: Array<ICedarFile> = [];

  @Listen('calciteDropdownSelect')
  async calciteDropdownSelected(_event) {
    console.debug("cedar-configuration-chooser: configurationSelected", {
      selected: this.dropdownEl.selectedItems
    })
    console.debug("cedar-configuration-chooser: configurationSelected", {

      url: this.dropdownEl.selectedItems[0].dataset.url
    })

    const url = this.dropdownEl.selectedItems[0].dataset.url;

    const response = await fetch( url );
    const config = await response.json();

    this.configurationSelected.emit(config)
  }

  @Event() configurationSelected: EventEmitter<ICedarFile>;


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
      },{
        url: "./data/line.json",
        name: "Line",
        type: "dataset",
        id: "line",
        format: "cedar"
      },{
        url: "./data/tree_cedar.json",
        name: "Trees Dataset",
        type: "dataset",
        id: "tree_cedar",
        format: "cedar"
      }
    ]
  }

  private dropdownEl;

  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-dropdown ref={(el) => {this.dropdownEl = el}} width="m" close-on-select-disabled>
            <calcite-button slot="trigger" scale="l" kind="inverse" appearance="outline-fill" icon-start="classify-pixels">
                Chart Options
            </calcite-button>
            <calcite-dropdown-group selection-mode="single" group-title="Basic">
            {this.configurations.map((config) => {
              return (<calcite-dropdown-item data-id={config.id} data-url={config.url}>{config.name}</calcite-dropdown-item>)
            })}
            </calcite-dropdown-group>
        </calcite-dropdown>
      </Host>
    );
  }

}
