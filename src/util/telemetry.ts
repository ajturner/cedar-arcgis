import { COMMON_METRICS, IContentIdScope, IHostnameScope, ITelemetryRequestOptions, ITelemetryResponse, TIME_DIMENSIONS, getTelemetryReport } from '@esri/telemetry-reporting-client';
import state from './state';

const requestParams = {
    scope: null,
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
      token: '',
    },
    hubApiUrl: 'https://hubqa.arcgis.com'
};


export function getCedarUrl(metricType: string ):string {
  console.debug("getCedarUrl", {metricType});
  switch(metricType) {
    case 'page-views:count': {
      return '/data/telemetry_views_bar.json';
    }
    case 'session-activity:average':{
      return '/data/telemetry_sessions.json';
    }
  }
}
function getScope(scope: string): IHostnameScope | IContentIdScope {
  const itemIDPattern = /^[0-9a-fA-F]{32}$/;

  if (itemIDPattern.test(scope)) {
    return {contentId: scope};;
  } else {
    return {hostname: scope};
  } 
}

export async function fetchTelemetry(
      scope: string,
      metrics:COMMON_METRICS[] = null,
      startDate,
      endDate
  ) {
    // TODO: consider if we should do this in a function
    requestOptions.authentication.token = state.token;
    requestOptions.hubApiUrl = state.apiUrl;
    
    if(!!scope) {
      requestParams.scope = getScope(scope)
    }
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