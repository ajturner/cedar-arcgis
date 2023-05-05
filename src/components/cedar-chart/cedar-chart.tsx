import { Component, Host, h, State } from '@stencil/core';
import { inline_chart, inline_chart_data } from '../../data/charts';

// import "arcgis-charts-components";
import '@arcgis/charts-components';
import { setAssetPath  } from "@arcgis/charts-components/dist/components";
import { WebChart } from '@arcgis/charts-spec';
import "@arcgis/charts-components/dist/components/arcgis-charts-bar-chart";

import "@arcgis/charts-components/dist/arcgis-charts-components/arcgis-charts-components.css";


// import "@arcgis/charts-components/dist/components/arcgis-charts-scatter-plot";
// import "@arcgis/charts-components/dist/components/arcgis-charts-histogram";
// TODO: load charts only when chart used: https://stackoverflow.com/questions/60633526/how-to-use-an-external-third-party-library-in-stencil-js

@Component({
  tag: 'cedar-chart',
  styleUrl: 'cedar-chart.css',
  shadow: true,
})
export class CedarChart {
  chartEl: HTMLArcgisChartsBarChartElement; 

  componentWillLoad() {
    setAssetPath(location.href);
    this.config = inline_chart;
    this.data = inline_chart_data;
  }
  componentDidLoad() {
  }
  @State() config = {}
  @State() data = {}

  render() {
    return (
      <Host>
        <slot></slot>
        <arcgis-charts-barchart 
          ref={(el: HTMLArcgisChartsBarChartElement) => this.chartEl = el} 
          id="bar_chart" 
          class="chart" 
          config={this.config as WebChart}
          inlineData={this.data}
        ></arcgis-charts-barchart>

      </Host>
    );
  }

}
