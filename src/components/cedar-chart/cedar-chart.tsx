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
  @Prop({mutable: true, reflect: true}) cedar:any = null;

  @State() chartType: 'bar' | 'line' | 'sparkline' = 'bar';
  
  /**
   * Final stored state to render.
   * Prevents circular updates with the config Prop
   */
  @State() chartConfig: WebChart = null;
  
  async componentWillLoad() {
    await this.loadChart();
  }
  
  componentWillRender() {
    console.debug("cedar-chart: componentWillRender()");
  }

  
  // @Watch('cedar')
  // @Watch('cedarUrl')
  // @Watch('data')
  // @Watch('config')
  async loadChart() {
    if(!!this.configUrl) {
      console.debug("cedar-chart: loadChart(configUrl)", this.configUrl);
      const response = await fetch(this.configUrl);
      this.chartConfig = await response.json();
    } else if (!!this.cedarUrl) {
      console.debug("cedar-chart: loadChart(cedarUrl)", this.cedarUrl);
      const response = await fetch(this.cedarUrl);
      this.cedar = await response.json();
      
      // TODO: move this to check the final ArcGIS chart type.
      this.chartType = this.cedar?.type;

      // If component is sending in specific data
      // e.g. telemetry data
      if(!!this.data) {
        this.cedar.datasets[0].data.features = this.data;
      }
      console.debug("cedar-chart: Chart cedar converting...", {
        cedar: this.cedar,
      });
      this.chartConfig = convertCedar( this.cedar, this.chartTitle );
    } else if (!!this.cedar) {
      console.debug("cedar-chart: loadChart(cedar)", this.cedar);

      this.chartConfig = convertCedar( this.cedar, this.chartTitle || "" );
    } else if (!!this.config) {
      console.debug("cedar-chart: loadChart(config)", this.cedar);
      this.chartConfig = this.config;
    } else {
      console.debug("cedar-chart: no load option?");

    }
    console.debug("cedar-chart: Chart config loaded", {
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
    console.debug("cedar-chart: Rendering chart", {config: this.chartConfig})
    let content = null;
    if(!!this.chartConfig) {
     content = this.renderChart(this.chartConfig)
    }
    return (
      <Host>
        <slot></slot>
        {content}
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
    const type = config.chartType || config.series[0].type.replace(/Series/,'');
    console.debug("cedar-chart: renderChart", {type, config})

    switch(type) {
      case 'bar': {
        return this.renderBarChart(config);
      }
      case 'line': {
        return this.renderLineChart(config);
      }
      case 'sparkline': {
        return this.renderLineChart(config);
      }
      case 'pie': {
        return this.renderPieChart(config);
      }
      case 'scatter': {
        return this.renderScatterChart(config);
      }      
      default: {
        return (<strong>`{type}` is not a recognized chart type</strong>)
      }
    }
  }


  renderPieChart(config) {
    return ([
      <h3>Pie Chart</h3>,
      <arcgis-charts-pie-chart 
          id="chart" 
          class="chart" 
          config={config as WebChart}
      ></arcgis-charts-pie-chart>
    ]
    )
  }


  renderScatterChart(config) {
    return ([
      <h3>Scatter Plot</h3>,
      <arcgis-charts-scatter-plot 
          id="chart" 
          class="chart" 
          config={config as WebChart}
      ></arcgis-charts-scatter-plot>
    ]
    )
  }  

  renderLineChart(config) {
    return ([
      <h3>Line Chart</h3>,
      <arcgis-charts-line-chart 
          id="chart" 
          class="chart" 
          config={config as WebChart}
      ></arcgis-charts-line-chart>
    ]
      
    )
  }


  renderBarChart(config) {
    console.debug("rendering Bar Chart", {config})
    return ([
      <h3>Bar Chart</h3>,
      <arcgis-charts-bar-chart 
          id="chart" 
          class="chart" 
          config={config as WebChart}
      ></arcgis-charts-bar-chart>
    ]
    )
  }

}
