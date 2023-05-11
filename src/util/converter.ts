import { WebChart } from "@arcgis/charts-spec";

export function convertCedar(cedar) {
  if (cedar.type === "bar") {
    return convertBarSeries(cedar);
  }
}

/**
 * Draft function for converting Cedar bar charts to ArcGIS Charts
 * @param cedar
 * @returns
 */
function convertBarSeries(cedar) {
  const json: WebChart = {
    version: "6.2.1",
    type: "chart",
    dataSource: {
      type: "layer",
      layer: {
        layerType: "ArcGISFeatureLayer",
        id: "",
        url: cedar.datasets[0].url,
      },
    },
    id: "Bar Chart 1",
    background: [255, 255, 255, 255],
    cursorCrosshair: {
      type: "cursorCrosshair",
      style: {
        type: "esriSLS",
        style: "esriSLSDash",
        color: [255, 0, 0, 200],
        width: 1,
      },
      horizontalLineVisible: true,
      verticalLineVisible: true,
    },
    title: {
      type: "chartText",
      content: {
        type: "esriTS",
        color: [128, 128, 128, 255],
        text: "Cedar Chart",
        font: {
          size: 20,
        },
      },
    },
    series: [],
    // @ts-ignore // we'll add this below
    axes: [],
  };
  json.axes = [
    {
      "type": "chartAxis",
      "visible": true,
      "title": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [128, 128, 128, 255],
          "text": "CATEGORY LABEL HERE",
          "font": {
            "size": 14
          }
        }
      },
      "labels": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [128, 128, 128, 255],
          "font": {
            "size": 14
          }
        }
      },
      "valueFormat": {
        "type": "category",
        "characterLimit": 11
      },
      "lineSymbol": {
        "type": "esriSLS",
        "color": [128, 128, 128, 255],
        "width": 2
      },
      "guides": [
        {
          "type": "chartGuide",
          "above": false,
          "start": 2014,
          "style": {
            "type": "esriSLS",
            "color": [128, 128, 128, 200],
            "width": 2
          },
          "name": "string1",
          "visible": true,
          "label": {
            "type": "esriTS",
            "color": [128, 128, 128, 255],
            "text": "2014",
            "font": {
              "size": 14
            }
          }
        }
      ]
    },
    {
      "type": "chartAxis",
      "visible": true,
      "title": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [128, 128, 128, 255],
          "text": "VALUE LABEL HERE",
          "font": {
            "size": 14
          }
        }
      },
      "labels": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [255, 255, 255, 255],
          "font": {
            "size": 14
          }
        }
      },
      "valueFormat": {
        "type": "number",
        "intlOptions": {
          "style": "decimal",
          "notation": "compact",
          "minimumFractionDigits": 0,
          "maximumFractionDigits": 1
        }
      },
      "grid": {
        "type": "esriSLS",
        "color": [128, 128, 128, 200],
        "width": 1
      },
      "lineSymbol": {
        "type": "esriSLS",
        "color": [255, 255, 255, 255],
        "width": 2
      },
      "guides": [
        {
          "type": "chartGuide",
          "above": false,
          "start": 11000,
          "end": 11500,
          "style": {
            "type": "esriSFS",
            "color": [255, 255, 255, 200]
          },
          "name": "string1",
          "visible": true,
          "label": {
            "type": "esriTS",
            "color": [34, 34, 34, 255],
            "text": "11000-11500",
            "font": {
              "size": 14
            }
          }
        }
      ]
    }
  ]
  cedar.series.map((set, index) => {
    json.series.push({
      type: "barSeries",
      id: set.source,
      name: set.source,
      query: cedar.datasets[index].query,
      x: set.category.field,
      y: set.value.field,
      colorType: "singleColor",
      stackedType: "sideBySide",
      fillSymbol: {
        type: "esriSFS",
        color: [0, 121, 193, 200],
        outline: {
          type: "esriSLS",
          color: [255, 255, 255, 200],
          width: 1,
        },
      },
      dataLabels: {
        type: "chartText",
        visible: true,
        content: {
          type: "esriTS",
          color: [0, 121, 193, 255],
          font: {
            size: 14,
          },
        },
      },
    });

    // json.axes.push(
    //   {
    //     type: "chartAxis",
    //     visible: true,
    //     title: {
    //       type: "chartText",
    //       visible: true,
    //       content: {
    //         type: "esriTS",
    //         color: [255, 255, 255, 255],
    //         text: set.category.label,
    //         font: {
    //           size: 14,
    //         },
    //       },
    //     },
    //     labels: {
    //       type: "chartText",
    //       visible: true,
    //       content: {
    //         type: "esriTS",
    //         color: [120, 120, 120, 255],
    //         font: {
    //           size: 14,
    //         },
    //       },
    //     },
    //     valueFormat: {
    //       type: "category",
    //       characterLimit: 11,
    //     },
    //     lineSymbol: {
    //       type: "esriSLS",
    //       color: [120, 120, 120, 255],
    //       width: 2,
    //     },
    //   },
    //   {
    //     type: "chartAxis",
    //     visible: true,
    //     title: {
    //       type: "chartText",
    //       visible: true,
    //       content: {
    //         type: "esriTS",
    //         color: [120, 120, 120, 255],
    //         text: set.value.label,
    //         font: {
    //           size: 14,
    //         },
    //       },
    //     },
    //     labels: {
    //       type: "chartText",
    //       visible: true,
    //       content: {
    //         type: "esriTS",
    //         color: [120, 120, 120, 255],
    //         font: {
    //           size: 14,
    //         },
    //       },
    //     },
    //     valueFormat: {
    //       type: "number",
    //       intlOptions: {
    //         style: "decimal",
    //         notation: "compact",
    //         minimumFractionDigits: 0,
    //         maximumFractionDigits: 1,
    //       },
    //     },
    //     grid: {
    //       type: "esriSLS",
    //       color: [128, 128, 128, 200],
    //       width: 1,
    //     },
    //     lineSymbol: {
    //       type: "esriSLS",
    //       color: [120, 120, 120, 255],
    //       width: 2,
    //     },
    //   }
    // )
    });

  json.legend = {
    type: "chartLegend",
    visible: true,
    title: {
      type: "chartText",
      visible: true,
      content: {
        type: "esriTS",
        color: [255, 255, 255, 255],
        text: "Primary type",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    body: {
      type: "esriTS",
      color: [255, 255, 255, 255],
      font: {
        size: 12,
      },
    },
    position: "right",
  };

  return json;
}
