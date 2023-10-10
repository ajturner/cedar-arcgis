import { r as registerInstance, h, f as Host } from './index-0c4dc1bb.js';

const arcgisChartsComponentsCss = ":root{--arcgis-charts-curtain-opacity:1;--arcgis-charts-popup-ol-padding:2em;--arcgis-charts-popup-body-padding-left:0;--arcgis-charts-default-width:100%;--arcgis-charts-default-height:100%}";

/**
 * This script will convert Cedar chart definitions into ArcGIS Chart specifications.
 *
 * Not all chart types or functionality is supported yet. This script is an initial version that will progressively add more conversion capabilities.
 */
// @ts-ignore - where to get Color type?
const cedarColors = {
  blue: [0, 121, 193, 255],
  gray: [128, 128, 128, 200],
  red: [255, 0, 0, 200],
  white: [255, 255, 255, 255]
};
/**
 * Draft function for converting Cedar bar charts to ArcGIS Charts
 * @param cedar
 * @returns
 */
function convertCedar(cedar, title = "") {
  const json = {
    //@ts-ignore
    version: "1.0.0",
    type: "chart",
    dataSource: convertData(cedar),
    id: "Chart",
    background: cedarColors.white,
    cursorCrosshair: {
      type: "cursorCrosshair",
      style: {
        type: "esriSLS",
        style: "esriSLSDash",
        color: cedarColors.red,
        width: 1,
      },
      horizontalLineVisible: true,
      verticalLineVisible: true,
    },
    title: {
      type: "chartText",
      content: {
        type: "esriTS",
        color: cedarColors.gray,
        text: title,
        font: {
          size: 20,
        },
      },
    },
    series: [],
    // @ts-ignore // we'll add this below
    axes: [],
  };
  json.axes = convertAxes(cedar);
  cedar.series.map((set, index) => {
    json.series.push(convertSet(cedar, set, index));
  });
  json.legend = convertLegend(cedar);
  return json;
}
/**
 * Creates an ArcGIS Charts legend from Cedar definition
 * @param cedar Cedar definition
 * @returns
 */
function convertLegend(cedar) {
  return {
    type: "chartLegend",
    visible: true,
    title: {
      type: "chartText",
      visible: true,
      content: {
        type: "esriTS",
        color: cedarColors.white,
        text: cedar.series[0].category.label,
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    body: {
      type: "esriTS",
      color: cedarColors.white,
      font: {
        size: 12,
      },
    },
    position: "right",
  };
}
/**
 * Creates an ArcGIS Charts Set (a single Series) from Cedar definition
 * @param cedar Cedar definition
 */
function convertSet(cedar, set, index) {
  return {
    type: convertChartType(cedar),
    id: set.source || `chart${index}`,
    name: set.value.label,
    query: cedar.datasets[0].query || {},
    x: set.category.field,
    y: set.value.field,
    colorType: "singleColor",
    // stackedType: "sideBySide",
    markerSymbol: {
      type: "esriSMS",
      style: "esriSMSCircle",
      size: 5
    },
    fillSymbol: {
      type: "esriSFS",
      color: [0, 121, 193, 200],
      outline: {
        type: "esriSLS",
        color: cedarColors.white,
        width: 1,
      },
    },
    lineSymbol: {
      type: "esriSLS",
      width: 1
    },
    dataLabels: {
      type: "chartText",
      visible: false,
      content: {
        type: "esriTS",
        color: cedarColors.blue,
        font: {
          size: 14,
        },
      },
    },
  };
}
/**
 * Creates an ArcGIS Charts axis pair from Cedar definition
 * @param cedar Cedar definition
 * @returns Dependent and independent axes based on category, number, or time
 */
function convertAxes(cedar) {
  return [
    {
      type: "chartAxis",
      visible: axesVisible(cedar),
      title: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          text: cedar.series[0].category.label,
          font: convertFontSize(cedar)
        }
      },
      labels: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          font: convertFontSize(cedar)
        }
      },
      valueFormat: convertValueFormat(cedar.series[0].category),
      lineSymbol: {
        type: "esriSLS",
        color: cedarColors.gray,
        width: 2
      }
    },
    {
      type: "chartAxis",
      visible: axesVisible(cedar),
      title: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          text: cedar.series[0].value.label,
          font: convertFontSize(cedar)
        }
      },
      labels: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          font: convertFontSize(cedar)
        }
      },
      valueFormat: convertValueFormat(cedar.series[0].value),
      grid: {
        type: "esriSLS",
        color: cedarColors.gray,
        width: 1
      },
      lineSymbol: {
        type: "esriSLS",
        color: cedarColors.gray,
        width: 2
      }
    }
  ];
}
/**
 * Creates an ArcGIS Charts data source for feature layer in inline from the Cedar definition
 * @param cedar Cedar definition
 * @returns
 */
function convertData(cedar) {
  let dataSource = {};
  // Dynamic data
  if (!!cedar.datasets[0].url) {
    dataSource = {
      type: "layer",
      layer: {
        layerType: "ArcGISFeatureLayer",
        id: "",
        url: cedar.datasets[0].url,
      },
    };
  }
  // Inline data
  if (!!cedar.datasets[0].data) {
    dataSource = {
      type: "inline",
      processed: true,
      data: {
        dataItems: cedar.datasets[0].data.features.map((f) => {
          return f.attributes;
        }),
      },
    };
  }
  return dataSource;
}
/**
 * Convert Cedar axis config to ArcGIS charts axis config
 * Defaults to Category
 * @param seriesConfig
 * @returns
 */
function convertValueFormat(seriesConfig) {
  if ((seriesConfig === null || seriesConfig === void 0 ? void 0 : seriesConfig.type) === "timestamp") {
    return {
      type: "date",
      intlOptions: {}
    };
  }
  else if (seriesConfig.type === "number") {
    return {
      type: "number",
      intlOptions: {
        style: "decimal",
        notation: "compact",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    };
  }
  else {
    return {
      type: "category",
      characterLimit: 11,
      intlOptions: {}
    };
  }
}
function convertChartType(cedar) {
  switch (cedar.type) {
    case 'sparkline': {
      return 'lineSeries';
    }
    case 'line': {
      return 'lineSeries';
    }
    case 'bar': {
      return 'barSeries';
    }
  }
}
function convertFontSize(_cedar) {
  return ({
    size: 14
  });
}
function axesVisible(cedar) {
  return cedar.type !== 'sparkline';
}

const cedarChartCss = ":host{display:block}.chart{height:100%}.source{display:none;z-index:1000;overflow:auto;height:300px;border:1px solid gray;grid-template-columns:50% 50%;grid-column-gap:0px}.source-cedar{grid-column:1;overflow:auto}.source-chart{grid-column:2;overflow:auto}.source.visible{display:grid}";

const CedarChart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.configUrl = null;
    this.cedarUrl = null;
    this.data = null;
    this.chartTitle = "";
    this.config = null;
    this.cedar = null;
    this.chartType = 'bar';
    this.chartConfig = null;
  }
  async componentWillLoad() {
    await this.loadChart();
  }
  componentWillRender() {
    console.debug("cedar-chart: componentWillRender()");
  }
  async loadChart() {
    var _a;
    if (!!this.configUrl) {
      console.debug("cedar-chart: loadChart(configUrl)", this.configUrl);
      const response = await fetch(this.configUrl);
      this.chartConfig = await response.json();
    }
    else if (!!this.cedarUrl) {
      console.debug("cedar-chart: loadChart(cedarUrl)", this.cedarUrl);
      const response = await fetch(this.cedarUrl);
      this.cedar = await response.json();
      // TODO: move this to check the final ArcGIS chart type.
      this.chartType = (_a = this.cedar) === null || _a === void 0 ? void 0 : _a.type;
      // If component is sending in specific data
      // e.g. telemetry data
      if (!!this.data) {
        this.cedar.datasets[0].data.features = this.data;
      }
      console.debug("cedar-chart: Chart cedar converting...", {
        cedar: this.cedar,
      });
      this.chartConfig = convertCedar(this.cedar, this.chartTitle);
    }
    else if (!!this.cedar) {
      console.debug("cedar-chart: loadChart(cedar)", this.cedar);
      this.chartConfig = convertCedar(this.cedar, this.chartTitle || "");
    }
    else if (!!this.config) {
      console.debug("cedar-chart: loadChart(config)", this.cedar);
      this.chartConfig = this.config;
    }
    else {
      console.debug("cedar-chart: no load option?");
    }
    console.debug("cedar-chart: Chart config loaded", {
      cedar: this.cedar,
      configUrl: this.configUrl,
      cedarUrl: this.cedarUrl,
      config: this.config,
      json: JSON.stringify(this.config)
    });
  }
  loadingComplete(evt) {
    console.debug("arcgisChartsDataProcessComplete", evt);
  }
  dataError(evt) {
    console.error("arcgisChartsDataProcessError", evt);
  }
  updateComplete(evt) {
    console.debug("arcgisChartsUpdateComplete", evt);
  }
  render() {
    console.debug("cedar-chart: Rendering chart", { config: this.chartConfig });
    let content = null;
    if (!!this.chartConfig) {
      content = this.renderChart(this.chartConfig);
    }
    return (h(Host, null, h("slot", null), content));
  }
  renderSource() {
    return ([
      h("a", { onClick: (_ev) => this.sourceEl.classList.toggle('visible') }, "source"),
      h("div", { class: "source", ref: (el) => this.sourceEl = el }, h("code", { class: "source-cedar" }, "Cedar", JSON.stringify(this.cedar)), h("code", { class: "source-chart" }, "ArcGIS Charts", JSON.stringify(this.config)))
    ]);
  }
  renderChart(config) {
    const type = config.chartType || config.series[0].type.replace(/Series/, '');
    console.debug("cedar-chart: renderChart", { type, config });
    switch (type) {
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
        return (h("strong", null, "`", type, "` is not a recognized chart type"));
      }
    }
  }
  renderPieChart(config) {
    return ([
      h("h3", null, "Pie Chart"),
      h("arcgis-charts-pie-chart", { id: "chart", class: "chart", config: config })
    ]);
  }
  renderScatterChart(config) {
    return ([
      h("h3", null, "Scatter Plot"),
      h("arcgis-charts-scatter-plot", { id: "chart", class: "chart", config: config })
    ]);
  }
  renderLineChart(config) {
    return ([
      h("h3", null, "Line Chart"),
      h("arcgis-charts-line-chart", { id: "chart", class: "chart", config: config })
    ]);
  }
  renderBarChart(config) {
    console.debug("rendering Bar Chart", { config });
    return ([
      h("h3", null, "Bar Chart"),
      h("arcgis-charts-bar-chart", { id: "chart", class: "chart", config: config })
    ]);
  }
  static get watchers() { return {
    "cedar": ["loadChart"],
    "cedarUrl": ["loadChart"],
    "data": ["loadChart"],
    "config": ["loadChart"]
  }; }
};
CedarChart.style = cedarChartCss;

export { CedarChart as cedar_chart };

//# sourceMappingURL=cedar-chart.entry.js.map