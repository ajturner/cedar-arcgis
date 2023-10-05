
export const feature_layer_chart = {
    "version": "1.0.0",
    "type": "chart",
    "dataSource": {
      "type": "layer",
      "layer": {
        "layerType": "ArcGISFeatureLayer",
        "id": "",
        "layerDefinition": {
          "id": 0,
          "drawingInfo": {
            "renderer": {
              "type": "uniqueValue",
              "visualVariables": [
                {
                  "type": "sizeInfo",
                  "valueExpression": "$view.scale",
                  "stops": [
                    {
                      "size": 7.5,
                      "value": 4513.988705
                    },
                    {
                      "size": 6,
                      "value": 36111.909643
                    },
                    {
                      "size": 3,
                      "value": 288895.277144
                    },
                    {
                      "size": 1.5,
                      "value": 2311162.217155
                    }
                  ]
                }
              ],
              "field1": "Primary_Ty",
              "legendOptions": {},
              "uniqueValueInfos": [
                {
                  "label": "ROBBERY",
                  "symbol": {
                    "type": "esriSMS",
                    "color": [
                      253,
                      127,
                      111,
                      255
                    ],
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "size": 6,
                    "style": "esriSMSCircle",
                    "outline": {
                      "type": "esriSLS",
                      "color": [
                        26,
                        26,
                        26,
                        64
                      ],
                      "width": 0.75,
                      "style": "esriSLSSolid"
                    }
                  },
                  "value": "ROBBERY"
                },
                {
                  "label": "BATTERY",
                  "symbol": {
                    "type": "esriSMS",
                    "color": [
                      126,
                      176,
                      213,
                      255
                    ],
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "size": 6,
                    "style": "esriSMSCircle",
                    "outline": {
                      "type": "esriSLS",
                      "color": [
                        26,
                        26,
                        26,
                        64
                      ],
                      "width": 0.75,
                      "style": "esriSLSSolid"
                    }
                  },
                  "value": "BATTERY"
                },
                {
                  "label": "ASSAULT",
                  "symbol": {
                    "type": "esriSMS",
                    "color": [
                      178,
                      224,
                      97,
                      255
                    ],
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "size": 6,
                    "style": "esriSMSCircle",
                    "outline": {
                      "type": "esriSLS",
                      "color": [
                        26,
                        26,
                        26,
                        64
                      ],
                      "width": 0.75,
                      "style": "esriSLSSolid"
                    }
                  },
                  "value": "ASSAULT"
                }
              ]
            }
          }
        },
        "url": "https://servicesdev.arcgis.com/f126c8da131543019b05e4bfab6fc6ac/arcgis/rest/services/ChicagoCr/FeatureServer/0"
      }
    },
    "id": "Bar Chart 1",
    "background": [
      34,
      34,
      34,
      255
    ],
    "cursorCrosshair": {
      "type": "cursorCrosshair",
      "style": {
        "type": "esriSLS",
        "style": "esriSLSDash",
        "color": [
          255,
          0,
          0,
          200
        ],
        "width": 1
      },
      "horizontalLineVisible": true,
      "verticalLineVisible": true
    },
    "title": {
      "type": "chartText",
      "content": {
        "type": "esriTS",
        "color": [
          255,
          255,
          255,
          255
        ],
        "text": "Comparison of Beat sum by Year",
        "font": {
          "size": 20
        }
      }
    },
    "series": [
      {
        "type": "barSeries",
        "id": "Assault",
        "name": "Assault",
        "query": {
          "where": "Primary_Ty = 'ASSAULT'",
          "groupByFieldsForStatistics": [
            "Year"
          ],
          "outStatistics": [
            {
              "onStatisticField": "Beat",
              "statisticType": "sum",
              "outStatisticFieldName": "fd97def572d1f40bc92605bff92e12d83"
            }
          ],
          "orderByFields": [
            "Year ASC"
          ]
        },
        "x": "Year",
        "y": "fd97def572d1f40bc92605bff92e12d83",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            116,
            184,
            223,
            200
          ],
          "outline": {
            "type": "esriSLS",
            "color": [
              255,
              255,
              255,
              200
            ],
            "width": 1
          }
        },
        "dataLabels": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              116,
              184,
              223,
              255
            ],
            "font": {
              "size": 14
            }
          }
        }
      },
      {
        "type": "barSeries",
        "id": "Battery",
        "name": "Battery",
        "query": {
          "where": "Primary_Ty = 'BATTERY'",
          "groupByFieldsForStatistics": [
            "Year"
          ],
          "outStatistics": [
            {
              "onStatisticField": "Beat",
              "statisticType": "sum",
              "outStatisticFieldName": "f78742fea6afc48f7b16e55f0775e39db"
            }
          ],
          "orderByFields": [
            "Year ASC"
          ]
        },
        "x": "Year",
        "y": "f78742fea6afc48f7b16e55f0775e39db",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            106,
            115,
            225,
            200
          ],
          "outline": {
            "type": "esriSLS",
            "color": [
              255,
              255,
              255,
              200
            ],
            "width": 1
          }
        },
        "dataLabels": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              106,
              115,
              225,
              255
            ],
            "font": {
              "size": 14
            }
          }
        }
      },
      {
        "type": "barSeries",
        "id": "Robbery",
        "name": "Robbery",
        "query": {
          "where": "Primary_Ty = 'ROBBERY'",
          "groupByFieldsForStatistics": [
            "Year"
          ],
          "outStatistics": [
            {
              "onStatisticField": "Beat",
              "statisticType": "sum",
              "outStatisticFieldName": "f9d9c177c514f4b5788c12fce11a82f58"
            }
          ],
          "orderByFields": [
            "Year ASC"
          ]
        },
        "x": "Year",
        "y": "f9d9c177c514f4b5788c12fce11a82f58",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            159,
            105,
            224,
            200
          ],
          "outline": {
            "type": "esriSLS",
            "color": [
              255,
              255,
              255,
              200
            ],
            "width": 1
          }
        },
        "dataLabels": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              159,
              105,
              224,
              255
            ],
            "font": {
              "size": 14
            }
          }
        }
      }
    ],
    "legend": {
      "type": "chartLegend",
      "visible": true,
      "title": {
        "type": "chartText",
        "visible": true,
        "content": {
          "type": "esriTS",
          "color": [
            255,
            255,
            255,
            255
          ],
          "text": "Primary type",
          "font": {
            "size": 14,
            "weight": "bold"
          }
        }
      },
      "body": {
        "type": "esriTS",
        "color": [
          255,
          255,
          255,
          255
        ],
        "font": {
          "size": 12
        }
      },
      "position": "right"
    },
    "axes": [
      {
        "type": "chartAxis",
        "visible": true,
        "title": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              255,
              255,
              255,
              255
            ],
            "text": "Year",
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
            "color": [
              255,
              255,
              255,
              255
            ],
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
          "color": [
            255,
            255,
            255,
            255
          ],
          "width": 2
        },
        "guides": [
          {
            "type": "chartGuide",
            "above": false,
            "start": 2014,
            "style": {
              "type": "esriSLS",
              "color": [
                255,
                255,
                255,
                200
              ],
              "width": 2
            },
            "name": "string1",
            "visible": true,
            "label": {
              "type": "esriTS",
              "color": [
                255,
                255,
                255,
                255
              ],
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
            "color": [
              255,
              255,
              255,
              255
            ],
            "text": "Sum of Beat",
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
            "color": [
              255,
              255,
              255,
              255
            ],
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
          "color": [
            128,
            128,
            128,
            200
          ],
          "width": 1
        },
        "lineSymbol": {
          "type": "esriSLS",
          "color": [
            255,
            255,
            255,
            255
          ],
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
              "color": [
                255,
                255,
                255,
                200
              ]
            },
            "name": "string1",
            "visible": true,
            "label": {
              "type": "esriTS",
              "color": [
                34,
                34,
                34,
                255
              ],
              "text": "11000-11500",
              "font": {
                "size": 14
              }
            }
          }
        ]
      }
    ]
  }
  
export const inline_chart_data = {
    "processed": true,
    "inputData": {
      "timeIntervalInfo": {},
      "dataItems": [
        {
          "f49b4c75070664646a8b9ce6aa33e53fd": 379,
          "f2317c3cc83fd405ebf3b70f40b00ec03": 9559,
          "f22f1f78cee844429b4554a867ddd312d": 13199,
          "f4e38821ba44a4329a5ebcc99cf5e2870": 2096,
          "f64bcf951637a4e6a9b9c3fcf2a846613": 176,
          "room_type": "Entire home/apt",
          "neighbourhood_group": "Staten Island"
        },
        {
          "f49b4c75070664646a8b9ce6aa33e53fd": 652,
          "f2317c3cc83fd405ebf3b70f40b00ec03": 10132,
          "f22f1f78cee844429b4554a867ddd312d": 7982,
          "f4e38821ba44a4329a5ebcc99cf5e2870": 3372,
          "f64bcf951637a4e6a9b9c3fcf2a846613": 188,
          "room_type": "Private room",
          "neighbourhood_group": "Staten Island"
        },
        {
          "f49b4c75070664646a8b9ce6aa33e53fd": 60,
          "f2317c3cc83fd405ebf3b70f40b00ec03": 413,
          "f22f1f78cee844429b4554a867ddd312d": 480,
          "f4e38821ba44a4329a5ebcc99cf5e2870": 198,
          "f64bcf951637a4e6a9b9c3fcf2a846613": 9,
          "room_type": "Shared room",
          "neighbourhood_group": "Staten Island"
        }
      ]
    }
  }
export const inline_chart = {
    "version": "1.0.0",
    "type": "chart",
    "dataSource": {
      "type": "inline",
      "processed": true,
      "data": {
        "timeIntervalInfo": {},
        "dataItems": [
          {
            "f49b4c75070664646a8b9ce6aa33e53fd": 379,
            "f2317c3cc83fd405ebf3b70f40b00ec03": 9559,
            "f22f1f78cee844429b4554a867ddd312d": 13199,
            "f4e38821ba44a4329a5ebcc99cf5e2870": 2096,
            "f64bcf951637a4e6a9b9c3fcf2a846613": 176,
            "room_type": "Entire home/apt",
            "neighbourhood_group": "Staten Island"
          },
          {
            "f49b4c75070664646a8b9ce6aa33e53fd": 652,
            "f2317c3cc83fd405ebf3b70f40b00ec03": 10132,
            "f22f1f78cee844429b4554a867ddd312d": 7982,
            "f4e38821ba44a4329a5ebcc99cf5e2870": 3372,
            "f64bcf951637a4e6a9b9c3fcf2a846613": 188,
            "room_type": "Private room",
            "neighbourhood_group": "Staten Island"
          },
          {
            "f49b4c75070664646a8b9ce6aa33e53fd": 60,
            "f2317c3cc83fd405ebf3b70f40b00ec03": 413,
            "f22f1f78cee844429b4554a867ddd312d": 480,
            "f4e38821ba44a4329a5ebcc99cf5e2870": 198,
            "f64bcf951637a4e6a9b9c3fcf2a846613": 9,
            "room_type": "Shared room",
            "neighbourhood_group": "Staten Island"
          }
        ]
      }
    },
    "id": "Bar Chart 3",
    "title": {
      "type": "chartText",
      "content": {
        "type": "esriTS",
        "color": [
          68,
          68,
          68,
          255
        ],
        "font": {
          "size": 20,
          "weight": "bold"
        },
        "text": "[Inline] Split Series"
      }
    },
    "series": [
      {
        "type": "barSeries",
        "id": "Bronx",
        "name": "Bronx",
        "x": "room_type",
        "y": "f49b4c75070664646a8b9ce6aa33e53fd",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            166,
            206,
            227,
            255
          ]
        },
        "dataLabels": {
          "type": "chartText",
          "content": {
            "type": "esriTS",
            "color": [
              166,
              206,
              227,
              255
            ]
          },
          "visible": true
        }
      },
      {
        "type": "barSeries",
        "id": "Brooklyn",
        "name": "Brooklyn",
        "x": "room_type",
        "y": "f2317c3cc83fd405ebf3b70f40b00ec03",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            31,
            120,
            180,
            255
          ]
        },
        "dataLabels": {
          "type": "chartText",
          "content": {
            "type": "esriTS",
            "color": [
              31,
              120,
              180,
              255
            ]
          },
          "visible": true
        }
      },
      {
        "type": "barSeries",
        "id": "Manhattan",
        "name": "Manhattan",
        "x": "room_type",
        "y": "f22f1f78cee844429b4554a867ddd312d",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            178,
            223,
            138,
            255
          ]
        },
        "dataLabels": {
          "type": "chartText",
          "content": {
            "type": "esriTS",
            "color": [
              178,
              223,
              138,
              255
            ]
          },
          "visible": true
        }
      },
      {
        "type": "barSeries",
        "id": "Queens",
        "name": "Queens",
        "x": "room_type",
        "y": "f4e38821ba44a4329a5ebcc99cf5e2870",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            51,
            160,
            44,
            255
          ]
        },
        "dataLabels": {
          "type": "chartText",
          "content": {
            "type": "esriTS",
            "color": [
              51,
              160,
              44,
              255
            ]
          },
          "visible": true
        }
      },
      {
        "type": "barSeries",
        "id": "Staten",
        "name": "Staten Island",
        "x": "room_type",
        "y": "f64bcf951637a4e6a9b9c3fcf2a846613",
        "colorType": "singleColor",
        "stackedType": "sideBySide",
        "fillSymbol": {
          "type": "esriSFS",
          "color": [
            251,
            154,
            153,
            255
          ]
        },
        "dataLabels": {
          "type": "chartText",
          "content": {
            "type": "esriTS",
            "color": [
              251,
              154,
              153,
              255
            ]
          },
          "visible": true
        }
      }
    ],
    "legend": {
      "type": "chartLegend",
      "visible": true,
      "body": {
        "type": "esriTS",
        "color": [
          68,
          68,
          68,
          255
        ],
        "font": {
          "size": 12
        }
      },
      "position": "bottom",
      "roundMarkers": true
    },
    "axes": [
      {
        "type": "chartAxis",
        "visible": true,
        "title": {
          "type": "chartText",
          "visible": false,
          "content": {
            "type": "esriTS",
            "color": [
              68,
              68,
              68,
              255
            ],
            "font": {
              "weight": "bold"
            },
            "text": "Room Type"
          }
        },
        "labels": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              68,
              68,
              68,
              255
            ],
            "font": {
              "size": 12
            }
          }
        },
        "valueFormat": {
          "type": "category"
        },
        "lineSymbol": {
          "type": "esriSLS",
          "color": [
            170,
            170,
            170,
            255
          ],
          "width": 1.5
        },
        "grid": {
          "type": "esriSLS",
          "color": [
            119,
            119,
            119,
            255
          ],
          "width": 0.1
        }
      },
      {
        "type": "chartAxis",
        "visible": true,
        "title": {
          "type": "chartText",
          "visible": false,
          "content": {
            "type": "esriTS",
            "color": [
              68,
              68,
              68,
              255
            ],
            "font": {
              "weight": "bold"
            },
            "text": "Count"
          }
        },
        "labels": {
          "type": "chartText",
          "visible": true,
          "content": {
            "type": "esriTS",
            "color": [
              68,
              68,
              68,
              255
            ],
            "font": {
              "size": 12
            }
          }
        },
        "valueFormat": {
          "type": "number",
          "intlOptions": {
            "notation": "standard",
            "minimumFractionDigits": 0,
            "maximumFractionDigits": 0
          }
        },
        "lineSymbol": {
          "type": "esriSLS",
          "color": [
            170,
            170,
            170,
            255
          ],
          "width": 1.5
        },
        "grid": {
          "type": "esriSLS",
          "color": [
            119,
            119,
            119,
            255
          ],
          "width": 0.1
        }
      }
    ]
  }