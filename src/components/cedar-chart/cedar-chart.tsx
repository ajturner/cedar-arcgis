import { Component, Host, h, State, Listen } from '@stencil/core';
import { feature_layer_chart } from '../../data/charts';

// import "arcgis-charts-components";
import '@arcgis/charts-components';
// import "arcgis-charts-components/dist/components/index";
import { setAssetPath  } from "@arcgis/charts-components/dist/components";
import { WebChart } from '@arcgis/charts-spec';

import "@arcgis/charts-components/dist/components/arcgis-charts-bar-chart";
// import "@arcgis/charts-components/dist/components/arcgis-charts-scatter-plot";
// import "@arcgis/charts-components/dist/components/arcgis-charts-histogram";

import "@arcgis/charts-components/dist/arcgis-charts-components/arcgis-charts-components.css";

// import { defineCustomElements } from "@arcgis/charts-components/dist/loader";
// // Local assets
// defineCustomElements(window);

// TODO: load charts only when chart used: https://stackoverflow.com/questions/60633526/how-to-use-an-external-third-party-library-in-stencil-js

@Component({
  tag: 'cedar-chart',
  styleUrl: 'cedar-chart.css',
  shadow: true,
})
export class CedarChart {
  chartEl: HTMLArcgisChartsBarChartElement; 

  componentWillLoad() {
    this.config = feature_layer_chart;
    // this.data = inline_chart_data;
  }
  componentDidLoad() {
    setAssetPath(location.href);

    console.debug("Chart El Config", {
      chartEl: this.chartEl, 
      legendVisibility: this.chartEl.legendVisibility, 
      chartElConfig: this.chartEl.config
    })

    console.debug("Custom Elements", [
      customElements.get( 'arcgis-charts-bar-chart' )
    ])
  }
  @State() config = {}
  @State() data = {}

  @Listen('arcgisChartsDataProcessComplete')
  loadingComplete(evt)  {
    console.log("arcgisChartsDataProcessComplete", evt);
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <arcgis-charts-bar-chart 
          ref={(el: HTMLArcgisChartsBarChartElement) => this.chartEl = el} 
          id="bar_chart" 
          class="chart" 
          config={this.config as WebChart}
        ></arcgis-charts-bar-chart>

      </Host>
    );
  }

}
