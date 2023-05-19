import { Component, Host, Prop, h } from '@stencil/core';
// import { fetchTelemetry } from '../../util/telemetry';
// import { ITelemetryResponse } from '@esri/telemetry-reporting-client';

@Component({
  tag: 'cedar-table',
  styleUrl: 'cedar-table.css',
  shadow: true,
})
export class CedarTable {

  @Prop() data:any;

  // @State() report:ITelemetryResponse;

  // async componentWillLoad() {
  //   this.report = await fetchTelemetry();
  //   console.log("telemetry response", this.report)
  // }
  render() {
    return (
      <Host>
        <slot></slot>
        {this.renderTable()}
        
      </Host>
    );
  }

  renderTable() {
    return([
      <thead>
        <tr>
          {Object.keys(this.data[0]).map((column) => {
            return <th>{column}</th>
          })}
        </tr>
      </thead>,
      <tbody>
        {this.data.map(row => {
          return (<tr>
          {Object.keys(row).map((column) => {
              return (<th>{row[column]}</th>)
            })}
          </tr>)
        })}

      </tbody>
    ])
  }

}
