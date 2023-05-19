import { Component, Host, Prop, State, h } from '@stencil/core';
import { convertTelemetryReportToFeatureSet, fetchTelemetry } from '../../util/telemetry';
import { COMMON_METRICS, ITelemetryResponse } from '@esri/telemetry-reporting-client';
import { getDaysAgo, parseISODate } from '../../util/time';

@Component({
  tag: 'cedar-telemetry-report',
  styleUrl: 'cedar-telemetry-report.css',
  shadow: true,
})
export class CedarTelemetryReport {

  /** 
   * Which itemId or hostname to get metrics
   */
  @Prop() itemId:string = null;

  /** 
   * Start date as ISO-8601 string. Default to 30 days ago
   */
  @Prop({ mutable: true, reflect: true }) startDate:string = null;

  /**
   * End date as ISO-8601 sting. Default to today.
   */
  @Prop({ mutable:true, reflect: true }) endDate:string = null;


  /**
   * Which metric to fetch: page-views:count, ...
   */
  @Prop() metric:COMMON_METRICS = null;

  /** 
   * URL to cedar config for this metric. Optional
   * TODO: provide interal lookup
   */
  @Prop() cedarUrl:string = null;

  @State() report:ITelemetryResponse;
  
  /**
   * cached conversion from Report to FeatureSet
   * TODO: import FeatureSet type definition
   */
  @State() features:any;

  private getStartDate(isoDate?: string): string {
    const referenceDate = isoDate ? parseISODate(isoDate) : new Date();
    return getDaysAgo(referenceDate, 30).toISOString();
  }
  
  private getEndDate(isoDate?: string): string {
    const endDate = isoDate ? parseISODate(isoDate) : new Date();
    return endDate.toISOString();
  }
    
  async componentWillLoad() {
    this.startDate = this.getStartDate(this.startDate);
    this.endDate = this.getEndDate(this.endDate);
    
    this.report = await fetchTelemetry(
      [ this.metric ],
      this.startDate,
      this.endDate 
    );
    this.features = convertTelemetryReportToFeatureSet(this.report);

    console.log("telemetry response", {
      report: this.report, 
      features: this.features, 
      json: JSON.stringify(this.report)
    })
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <cedar-chart
          cedar-url={this.cedarUrl}
          chart-title="Sessions over time"
          data={this.features}
        ></cedar-chart>
        <cedar-table
          data={this.report.data}
        ></cedar-table>
      </Host>
    );
  }

}
