import { Component, Host, h, State, Listen, Prop, Watch } from '@stencil/core';
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
  
  /** 
   * URL to an ArcGIS Charts config
   */
  @Prop() configUrl:string = null;

  /**
   * URL to an ArcGIS Cedar Config
   */
  @Prop() cedarUrl:string = null;

  /**
   * Optional inline data override to cedar
   * This is a FeatureSet, for cedar
   * If a general array is used, it will need to drop 'attributes'
   */
  @Prop() data:any = null

  /**
   * Optional Chart title
   */
  @Prop() chartTitle:string = "";

  /** 
   * ArcGIS Charts Config
   */
  @Prop({mutable: true, reflect: true}) config: WebChart = null;

  /**
   * ArcGIS Cedar Config
   */
  @Prop({mutable: true, reflect: true}) cedar:any = {};

  @State() chartType: 'bar' | 'line' | 'sparkline' = 'bar';

  async componentWillLoad() {
    await this.loadChart();
  }

  @Watch('cedarUrl')
  @Watch('data')
  async loadChart() {
    if(!!this.configUrl) {
      const response = await fetch(this.configUrl);
      this.config = await response.json();
    } else if (!!this.cedarUrl) {
      const response = await fetch(this.cedarUrl);
      this.cedar = await response.json();
      
      // TODO: move this to check the final ArcGIS chart type.
      this.chartType = this.cedar?.type;

      // If component is sending in specific data
      // e.g. telemetry data
      if(!!this.data) {
        this.cedar.datasets[0].data.features = this.data;
      }
      console.debug("Chart cedar converting...", {
        cedar: this.cedar,
      });
      this.config = convertCedar( this.cedar, this.chartTitle );
    }
    console.debug("Chart config loaded", {
      cedar: this.cedar,
      configUrl: this.configUrl,
      cedarUrl: this.cedarUrl,
      config: this.config,
      json: JSON.stringify(this.config)
    })
  }

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
        {this.renderChart(this.config)}
        {/* {this.renderSource()} */}
      </Host>
    );
  }

  private sourceEl;
  renderSource() {
    return( [
      <a onClick={(_ev) => this.sourceEl.classList.toggle('visible')}>source</a>
      ,
      <div class="source" ref={(el) => this.sourceEl = el}>
        <code class="source-cedar">
          Cedar
          {JSON.stringify(this.cedar)}
        </code>
        <code class="source-chart">
          ArcGIS Charts
          {JSON.stringify(this.config)}
        </code>
      </div>]
    )
  }
  renderChart(config) {
    switch(this.chartType) {
      case 'bar': {
        return this.renderBarChart(config);
      }
      case 'line': {
        return this.renderLineChart(config);
      }
      case 'sparkline': {
        return this.renderLineChart(config);
      }
      default: {
        return (<strong>`{this.chartType}` is not a recognized chart type</strong>)
      }
    }
  }

  renderLineChart(config) {
    return (
      <arcgis-charts-line-chart 
          id="chart" 
          class="chart" 
          config={config as WebChart}
      ></arcgis-charts-line-chart>
    )
  }


  renderBarChart(config) {
    console.debug("rendering Bar Chart", {config})
    return (
      <arcgis-charts-bar-chart 
          id="chart" 
          class="chart" 
          config={config as WebChart}
      ></arcgis-charts-bar-chart>
    )
  }

}
