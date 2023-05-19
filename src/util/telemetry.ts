import { COMMON_METRICS, ITelemetryRequestOptions, ITelemetryResponse, TIME_DIMENSIONS, getTelemetryReport } from '@esri/telemetry-reporting-client';


const requestParams = {
    scope: {
      hostname: 'brollywood.hikes.dev',
    },
    startDate: '2023-05-11T13:42:32.396Z',
    endDate: '2023-05-18T13:42:32.396Z',
    timeDimension: TIME_DIMENSIONS.day,
    metrics: [
      'page-views:count' as COMMON_METRICS
    ],
  };

  const requestOptions = {
    httpMethod: 'POST',
    params: {},
    authentication: {
      token: 'ZrSWSnRi930pcisdSlXrdvsWE69LVtZmy9O_6vQ0M1zIH9OaZVdILwF6uwqVKUsYJis_leP3S2KqDDxL4MKVlVfWJnsCnLUH4vglU1mXwZCZDPfAn-oqzgyyYh8EL8D_CEPcXJ08SQaY3O-lZBmFPH3Uy5icYwbhWi0AtvVJ4rbr8GgN0LlsO4905k_LbQq4x7qbBRAq0_lxSjnSvtkFN1RyMeTFfYrxUgW7z9tBbWw.',
    },
    hubApiUrl: 'https://hubqa.arcgis.com'
};

export async function fetchTelemetry(
        metrics:COMMON_METRICS[] = null,
        startDate,
        endDate
    ) {
    if(!!metrics) {
        requestParams.metrics = metrics
    }
    if(!!startDate && !!endDate) {
        requestParams.startDate = startDate;
        requestParams.endDate = endDate;
    }
    const report = await getTelemetryReport(requestParams, requestOptions as ITelemetryRequestOptions);
    return report;
}

export async function fetchTelemetryFeatureSet(
    metrics:COMMON_METRICS[] = null,
    startDate,
    endDate
) {
    // TOD clean up this code
    const report = await fetchTelemetry(metrics, startDate, endDate);
    return convertTelemetryReportToFeatureSet(report);
}

/**
 * Converts an ArcGIS Telemetry report into FeatureSet
 {
  "data": [
    { "page-views:count": 32, "timestamp": "2023-05-11T00:00:00.000Z" },
    { "page-views:count": 6, "timestamp": "2023-05-12T00:00:00.000Z" },
    { "page-views:count": 1, "timestamp": "2023-05-13T00:00:00.000Z" },
    { "page-views:count": 89, "timestamp": "2023-05-15T00:00:00.000Z" },
    { "page-views:count": 54, "timestamp": "2023-05-16T00:00:00.000Z" },
    { "page-views:count": 80, "timestamp": "2023-05-17T00:00:00.000Z" },
    { "page-views:count": 2, "timestamp": "2023-05-18T00:00:00.000Z" }
  ]
}

 * TODO: import FeatureSet type
 * @param _report 
 */
export function convertTelemetryReportToFeatureSet(report:ITelemetryResponse) {
    const features = report.data.map((measure) => {
        return({ attributes: measure })
    });

    return features;
}