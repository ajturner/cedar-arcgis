import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
// import { feature_layer_chart } from '../../data/charts';

// import "arcgis-charts-components";
import '@arcgis/charts-components';
// import "arcgis-charts-components/dist/components/index";
// import { setAssetPath  } from "@arcgis/charts-components/dist/components";
import { WebChart } from '@arcgis/charts-spec';

// import "@arcgis/charts-components/dist/components/arcgis-charts-bar-chart";
// import "@arcgis/charts-components/dist/components/arcgis-charts-scatter-plot";
// import "@arcgis/charts-components/dist/components/arcgis-charts-histogram";

import "@arcgis/charts-components/dist/arcgis-charts-components/arcgis-charts-components.css";
import { convertCedar } from '../../util/converter';

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

  @Prop() configUrl:string = null;
  @Prop() cedarUrl:string = null;

  async componentWillLoad() {
    // this.config = feature_layer_chart;

    if(!!this.configUrl) {
      const response = await fetch(this.configUrl);
      this.config = await response.json();
    } else if (!!this.cedarUrl) {
      const response = await fetch(this.cedarUrl);
      const cedar = await response.json();
      this.config = convertCedar( cedar );
    }
    console.debug("Chart config loaded", {
      configUrl: this.configUrl,
      cedarUrl: this.cedarUrl,
      config: this.config
    })
    // this.data = inline_chart_data;
  }
  componentDidLoad() {
    // setAssetPath(location.href);
  }
  @State() config = null;
  @State() data = null;

  @Listen('arcgisChartsDataProcessComplete')
  loadingComplete(evt)  {
    console.debug("arcgisChartsDataProcessComplete", evt);
  }

  @Listen('arcgisChartsDataProcessError')
  dataError(evt) {
    console.error("arcgisChartsDataProcessError", evt);
  }

  @Listen('arcgisChartsUpdateComplete')
  updateComplete(evt) {
    console.debug("arcgisChartsUpdateComplete", evt);
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
        <code>
          {this.config}
        </code>
      </Host>
    );
  }

}
