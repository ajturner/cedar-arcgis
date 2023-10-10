import { r as registerInstance, e as createEvent, g as getAssetPath, h, f as Host, i as getElement } from './index-0c4dc1bb.js';
import { u as updateLegendPosition, a as updateLegendVisibility, r as resetAxesBounds, p as promise, g as gatherComponentOptions, b as gatherComponentGlobalOptions, m as maximumNumberOfSimultaneousUpdates, W as WebChartTypes, i as isValidDataSource, A as ArcgisChartsNotifyPanel, c as addLayerFilterListener, d as addLayerRendererListener, e as addExtentChangeListener, f as WebChartVersionStatus, U as Uj } from './config-update-89e29a27.js';
import { I as Ia, v as vp, m as ml, S as Slot, p as pp, C as Ca } from './interfaces-f9f0dded.js';
import './utils-3c908942.js';
import './utils-6e0c5e09.js';
import './colorUtils-3c42b70c.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './TileStrategy-7487a7f8.js';
import './vec2-c2da03bd.js';
import './TileStore-178dd7b2.js';
import './TileKey-4c2c49c7.js';
import './quickselect-cc68e3d5.js';
import './webStyleSymbolUtils-0542add6.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './_commonjsHelpers-b08b522c.js';
import './statsWorker-e4850868.js';
import './quantizationUtils-33eaa35c.js';
import './utils-9b101bd7.js';
import './generateRendererUtils-ef8214c8.js';
import './Basemap-0d067aec.js';
import './loadAll-dc49c260.js';
import './writeUtils-3dcfa57f.js';
import './executeQuery-dca07954.js';
import './infoFor3D-0047d262.js';
import './executeQueryJSON-a16aae69.js';
import './normalizeUtils-6257e368.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './executeQueryPBF-24a7740f.js';
import './featureConversionUtils-da87b7fc.js';
import './AttachmentInfo-fac6a5e9.js';
import './CollectionFlattener-78984a9a.js';
import './TablesMixin-e984f376.js';
import './Cyclical-5ec65b13.js';
import './TileInfo-4a28547b.js';
import './Scheduler-1e6f0e40.js';
import './GraphicsCollection-a0dc229c.js';
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './vec2f64-25ab05ca.js';
import './mat3-eb290db7.js';
import './mat3f32-1cfc4913.js';
import './vec2f32-cdd4dd4e.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './contextUtils-e38d5070.js';

const arcgisChartsHistogramCss = ".hide{display:none}.show{display:block}.notifyPanel{flex:0 1 auto}.histogramSeries{flex-grow:1}.histogramSeries>div{justify-content:center;align-items:center}.histogramSeries .arcgis-charts-modal-inside{padding:1em;padding-left:0}.histogramSeries .arcgis-charts-modal-inside ol{padding-left:2em}.histogramSeries .arcgis-charts-modal-curtain{width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:2001;background-color:white;opacity:0.5;opacity:1}.histogramSeries .arcgis-charts-modal-content{background:rgba(255, 255, 255, 0.8);color:black;display:inline-block;position:absolute;top:0px;left:0px;max-width:90%;max-height:90%;overflow:auto;z-index:2002;position:absolute;max-width:90%;max-height:90%;width:auto !important;height:auto !important;margin:auto !important;inset:auto !important;left:auto !important;top:auto !important}.histogramSeries .arcgis-charts-modal-header{display:block;width:100%;min-height:1.8em;background:rgba(0, 0, 0, 0.05)}.histogramSeries .arcgis-charts-modal-close{display:block;position:absolute;top:0.3em;right:0.3em;background:url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ0NS4yIDEwOS4ybC00Mi40LTQyLjRMMjU2IDIxMy42IDEwOS4yIDY2LjhsLTQyLjQgNDIuNEwyMTMuNiAyNTYgNjYuOCA0MDIuOGw0Mi40IDQyLjRMMjU2IDI5OC40bDE0Ni44IDE0Ni44IDQyLjQtNDIuNEwyOTguNCAyNTYiLz48L3N2Zz4=\") center center/80% no-repeat rgba(100, 100, 100, 0.1);width:1.2em;height:1.2em;cursor:pointer}.histogramSeries .arcgis-charts-modal-title{font-weight:bold;font-size:110%;padding:0.5em 1.2em 0.5em 1em}:host{width:var(--arcgis-charts-histogram-width, var(--arcgis-charts-default-width));height:var(--arcgis-charts-histogram-height, var(--arcgis-charts-default-height));display:flex;flex-direction:row}";

const ArcGISChartsHistogram = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisChartsDataProcessError = createEvent(this, "arcgisChartsDataProcessError", 7);
    this.arcgisChartsDataProcessComplete = createEvent(this, "arcgisChartsDataProcessComplete", 7);
    this.arcgisChartsLegendItemVisibilityChange = createEvent(this, "arcgisChartsLegendItemVisibilityChange", 7);
    this.arcgisChartsUpdateComplete = createEvent(this, "arcgisChartsUpdateComplete", 7);
    this.arcgisChartsSeriesColorChange = createEvent(this, "arcgisChartsSeriesColorChange", 7);
    this.arcgisChartsAxesMinMaxChange = createEvent(this, "arcgisChartsAxesMinMaxChange", 7);
    this.arcgisChartsSelectionComplete = createEvent(this, "arcgisChartsSelectionComplete", 7);
    /**
     * Property to be used to skip the next round of update
     * @category Private
     */
    this.skipNextUpdate = false;
    /**
     * List of props which should not trigger a render when changed
     * @category Private
     */
    this.noRenderProps = ["legendPosition", "legendVisibility", "view"];
    /**
     * List of props which should trigger a data update
     * @category Private
     */
    this.dataUpdateNeededProps = ["forceDataUpdate", "runtimeDataFilters", "inlineData", "returnFeaturesExtent"];
    /**
     * List of all the properties updated since the last update. Useful when multiple properties are updated
     * within the same time frame, while some of them require some extra logic to be applied.
     * @category Private
     */
    this.updatedProps = new Set();
    this.config = undefined;
    this.inlineData = undefined;
    this.actionMode = undefined;
    this.legendPosition = undefined;
    this.legendVisibility = undefined;
    this.view = undefined;
    this.layer = undefined;
    this.selectionData = undefined;
    this.returnSelectionOIDs = undefined;
    this.returnSelectionIndexes = undefined;
    this.filterBySelection = undefined;
    this.noDataOptions = undefined;
    this.disableInteractions = undefined;
    this.queueChartCreation = undefined;
    this.useAnimatedCharts = undefined;
    this.hideLicenceWatermark = undefined;
    this.enableResponsiveFeatures = undefined;
    this.autoDisposeChart = undefined;
    this.placeholder = undefined;
    this.selectionTheme = undefined;
    this.tooltipFormatter = undefined;
    this.dataLabelFormatter = undefined;
    this.guideTooltipFormatter = undefined;
    this.xAxisLabelFormatter = undefined;
    this.yAxisLabelFormatter = undefined;
    this.disableTogglingLegendItems = undefined;
    this.hideLoaderAnimation = undefined;
    this.runtimeDataFilters = undefined;
    this.usePopupTemplateFieldsInfo = undefined;
    this.showNotifyPanel = false;
  }
  /**
   * Listener on event coming from the chart container indicating the chart data has been processed
   * emitting an event carrying the data
   * @param event The event carrying the chart data processed by the core
   * @category Custom-event handler
   */
  handleChartOutputDataChange(event) {
    this.arcgisChartsDataProcessComplete.emit(event.detail);
  }
  /**
   * Listener on event coming from the chart container indicating a legend item visibility has been changed
   * Emitting an event carrying the item id and its new visibility
   * @param event The event carrying the item id and its new visibility
   * @category Custom-event handler
   */
  handleLegendItemVisibilityChanged(event) {
    this.arcgisChartsLegendItemVisibilityChange.emit(event.detail);
  }
  /**
   * Listener on event coming from the chart container indicating a chart is updated
   * @param event The event carrying the ValidationStatus
   * @category Custom-event handler
   */
  handleUpdateCompleted(event) {
    this.arcgisChartsUpdateComplete.emit(event.detail);
  }
  /**
   * Listener on event coming from the chart container indicating the chart series color
   * have been assigned
   * @param event The event carrying the series colors
   * @category Custom-event handler
   */
  handleSeriesColorsChange(event) {
    this.arcgisChartsSeriesColorChange.emit(event.detail);
  }
  /**
   * Listener on event coming from the chart container indicating the chart axes
   * min and max values have been computed
   * @param event The event carrying the axes min and max
   * @category Custom-event handler
   */
  handleAxesMinMaxChange(event) {
    this.arcgisChartsAxesMinMaxChange.emit(event.detail);
  }
  /**
   * Listener on event coming from the chart container
   * on selection of one or multiple columns
   * @param event The event carrying the selected elements
   * @category Custom-event handler
   */
  handleSelection(event) {
    this.arcgisChartsSelectionComplete.emit(event.detail);
  }
  /**
   * Listener on event coming from the closure of a calcite-alert.
   * The handler helps keeping in sync the boolean `showNotifyPanel` with the panel's state.
   * @param event
   * @category Custom-event handler
   */
  handleAlertClosed(event) {
    // If the calcite-alert (notify panel) from this component is getting closed, we flag it
    if (event.target === this.el) {
      // we don't want the component to re-render so we skip the next update
      this.skipNextUpdate = true;
      this.showNotifyPanel = false;
    }
  }
  /**
   * Called every time the view prop is updated.
   * Add a listener to it to keep the chart in sync.
   * @category Watch handler
   */
  async viewChange(newView, oldView) {
    await this.addExtentChangeListener();
    // The "view" property is flagged as a non-render prop to avoid an unnecessary update when the
    // view is assigned to the component (the update will happen through the view listeners), so we
    // only need to explicitly ask for a refresh when the view is removed from the component
    if (oldView !== undefined && newView === undefined) {
      await this.refresh();
    }
  }
  /**
   * Called every time the layer prop is updated.
   * Adds listeners to it to keep the chart in sync.
   * @category Watch handler
   */
  async layerChange() {
    await this.addLayerListeners();
  }
  /**
   * Called every time the position of the legend is updated
   * @param newLegendPosition The new position of the legend
   * @category Watch handler
   */
  legendPositionChange(newLegendPosition) {
    this.config = updateLegendPosition(newLegendPosition, this.config);
  }
  /**
   * Called every time the visibility of the legend is updated
   * @param newLegendVisibility The new visibility of the legend
   * @category Watch handler
   */
  legendVisibilityChange(newLegendVisibility) {
    this.config = updateLegendVisibility(newLegendVisibility, this.config);
  }
  /**
   * Called every time the filter by selection is updated.
   * Resets the axes min/max.
   * @category Watch handler
   */
  filterBySelectionChanged() {
    this.config = resetAxesBounds(this.config);
  }
  /**
   * Notify method allows passing external messages to the chart component.
   * It can be used to pass validation or information messages.
   * In a situation where a config update is overriding your notification modal,
   * consider waiting for the `arcgisChartsUpdateComplete` event.
   * @category Public
   */
  async notify(message, heading, options) {
    if (this.chart !== undefined) {
      this.chart.notify(message, heading, options);
    }
    return Promise.resolve(undefined);
  }
  /**
   * Triggers an alert to display an error message.
   * @category Public
   * @param errorMessage
   */
  async errorAlert(errorMessage) {
    this.notifyHeading = this.strings.errorHeading;
    this.notifyMessage = errorMessage;
    this.notifyOptions = {
      kind: "danger",
      autoClose: true,
      active: true
    };
    this.showNotifyPanel = true;
  }
  /**
   * Resets the chart zoom to bring it back to full extent
   * @category Public
   */
  async resetZoom() {
    if (this.chart !== undefined)
      this.chart.resetZoom();
    return Promise.resolve(undefined);
  }
  /**
   * Switches the selection on the chart.
   * @category Public
   */
  async switchSelection() {
    // for now we don't allow the switch selection when the filter by selection is on
    if (this.chart !== undefined && this.filterBySelection !== true)
      await this.chart.switchSelection();
  }
  /**
   * Clears all selection on the chart.
   * @category Public
   */
  async clearSelection() {
    if (this.chart !== undefined) {
      this.chart.clearSelection();
      // to handle the full data reset we call the componentDidUpdate to trigger a chart update
      if (this.filterBySelection === true) {
        await this.refresh();
      }
    }
  }
  /**
   * Re-render the chart.
   * @param props.updateData Indicates whether to fetch new data. Default: true.
   * @param props.updateExtent Indicates whether the view's extent is to update. Default: false.
   * @param props.resetAxesBounds Option to reset the axes bounds along with the refresh.
   * @category Public
   */
  async refresh(props) {
    var _a, _b, _c, _d, _e, _f;
    const { updateData = true, resetAxesBounds = false, updateExtent = false } = props !== null && props !== void 0 ? props : {};
    ;
    this.viewExtentUpdated = updateExtent;
    if (updateData === true)
      this.dataUpdateIsNeeded();
    // Resetting the axes bounds
    if (resetAxesBounds === true) {
      (_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.axes) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? true : delete _c.minimum;
      (_f = (_e = (_d = this.config) === null || _d === void 0 ? void 0 : _d.axes) === null || _e === void 0 ? void 0 : _e[1]) === null || _f === void 0 ? true : delete _f.maximum;
    }
    await this.componentDidUpdate();
    // reset the boolean for the next update 
    this.viewExtentUpdated = false;
  }
  /**
   * Prevents render for noRenderProps
   * @category Lifecycle
   */
  componentShouldUpdate(...args) {
    const [, , propName] = args;
    // Flagging the property. This list will be used when the chart update is actually called.
    this.updatedProps.add(propName);
    const shouldUpdate = this.skipNextUpdate === false && this.noRenderProps.includes(propName) === false;
    this.skipNextUpdate = false;
    return shouldUpdate;
  }
  /**
   * @category Lifecycle
   */
  async componentWillLoad() {
    ({ strings: this.strings } = await Ia(this.el, getAssetPath(`.`)));
    // We define the function that will be called to update the chart. We use the external library fastq to queue the updates
    // to make sure only one update is executed at a time
    this.debouncedChartUpdate = promise(async () => {
      if (this.chart !== undefined) {
        const updatedProps = Array.from(this.updatedProps);
        // if one of the properties updated require a data update, we flag it
        // multiple properties can be updated within the same time frame, which will trigger only one Stencil lifecycle
        const dataUpdateNeeded = updatedProps.some((updatedProp) => this.dataUpdateNeededProps.includes(updatedProp));
        // clearing the list for the next update
        this.updatedProps.clear();
        return await this.chart.update({
          newChartConfig: this.config,
          updateOptions: gatherComponentOptions({ component: this, dataUpdated: dataUpdateNeeded, viewExtentUpdated: this.viewExtentUpdated }),
          updateGlobalOptions: gatherComponentGlobalOptions(this)
        });
      }
    }, maximumNumberOfSimultaneousUpdates);
  }
  /**
   * @category Lifecycle
   */
  async componentDidLoad() {
    if (this.chartRef !== undefined) {
      await this.createChartInstance();
    }
  }
  /**
   * @category Lifecycle
   */
  async componentDidUpdate() {
    var _a;
    // If this.chartCreationProcessing is still running we need to wait for it to be done before updating the chart
    if (this.chart === undefined && this.chartCreationProcessing !== undefined)
      await this.chartCreationProcessing;
    // Controlling the series type to display a console error if the type is not the expected one
    // We still proceed to the update to let the config validator deal with the invalid config
    await vp([WebChartTypes.HistogramSeries], this.config);
    if (this.config !== undefined && this.chart !== undefined && this.showNotifyPanel === false) {
      try {
        const dataSource = (_a = this.config) === null || _a === void 0 ? void 0 : _a.dataSource;
        // Calling for the chart update if the data source is valid and the debounce function exists
        if (isValidDataSource(this.inlineData, dataSource) && this.debouncedChartUpdate !== undefined) {
          await this.debouncedChartUpdate.push({});
        }
      }
      catch (e) {
        if (this.chartRef !== undefined && this.config !== undefined) {
          if (e.name === ml.ChartDisposed) {
            this.chart.dispose();
            this.chartRef.innerHTML = "";
            await this.createChartInstance(false);
          }
          else {
            this.errorAlert(e === null || e === void 0 ? void 0 : e.message);
            if (e.name === ml.QueryFeaturesError) {
              // sending an event if a query failed.
              // We don't automatically recreate the chart in that scenario as it would lead to the same result.
              this.arcgisChartsDataProcessError.emit(e.details);
            }
          }
        }
      }
    }
    else if (this.chart === undefined &&
      this.chartCreationProcessing === undefined &&
      this.showNotifyPanel === false) {
      await this.createChartInstance();
    }
  }
  /**
   * @category Lifecycle
   */
  async disconnectedCallback() {
    if (this.chart !== undefined) {
      this.removeLayerListeners();
      this.removeExtentChangeListener();
      this.chart.dispose();
    }
  }
  /**
   * @category Lifecycle
   */
  render() {
    var _a;
    const notifyPanel = this.showNotifyPanel === true ? (h(ArcgisChartsNotifyPanel, { heading: this.notifyHeading, message: this.notifyMessage, options: this.notifyOptions })) : null;
    // TODO: implement stronger way to know when to keep the chart visible
    const chartStyles = this.showNotifyPanel === true && ((_a = this.notifyOptions) === null || _a === void 0 ? void 0 : _a.kind) === "danger"
      ? "hide"
      : `${WebChartTypes.HistogramSeries} show`;
    const notifyStyles = this.showNotifyPanel === true ? "show notifyPanel" : "hide";
    return (h(Host, null, h("slot", { name: Slot.actionBar }), h("div", { class: chartStyles, ref: (el) => {
        this.chartRef = el;
      } }), h("div", { class: notifyStyles }, notifyPanel)));
  }
  /**
   * Util function that can be used to trigger a data update next time the chart is updated
   * @category Private
   */
  dataUpdateIsNeeded() {
    this.updatedProps.add("forceDataUpdate");
  }
  /**
   * Adds the listener to listen to the layer definitionExpression and renderer changes
   * @category Private
   */
  async addLayerListeners() {
    // removing existing listeners before adding new ones
    this.removeLayerListeners();
    this.layerFilterListener = await addLayerFilterListener({
      layer: this.layer,
      component: this
    });
    this.layerRendererListener = await addLayerRendererListener({
      layer: this.layer,
      component: this
    });
  }
  /**
   * Adds a listener to listen to the view's extent change
   * @category Private
   */
  async addExtentChangeListener() {
    // removing existing listeners before adding new ones
    this.removeExtentChangeListener();
    this.extentChangeListener = await addExtentChangeListener({
      view: this.view,
      layer: this.layer,
      component: this
    });
  }
  /**
   * Removes the listeners added to listen to the layer definitionExpression and renderer changes
   * @category Private
   */
  removeLayerListeners() {
    if (this.layerFilterListener !== undefined)
      this.layerFilterListener.remove();
    if (this.layerRendererListener !== undefined)
      this.layerRendererListener.remove();
  }
  /**
   * Removes the listener added to listen to the view's extent change
   * @category Private
   */
  removeExtentChangeListener() {
    if (this.extentChangeListener !== undefined)
      this.extentChangeListener.remove();
  }
  /**
   * If the chart config version is newer than the current one, display a message in a popup.
   * @category Private
   */
  checkForIncompatibleChartVersion() {
    var _a;
    const chartVersion = (_a = this.config) === null || _a === void 0 ? void 0 : _a.version;
    if (pp(chartVersion).versionStatus === WebChartVersionStatus.Newer) {
      this.notifyHeading = this.strings.incompatibleChartVersion.title;
      this.notifyMessage = Ca(this.strings.incompatibleChartVersion.message, {
        chartVersion: chartVersion !== null && chartVersion !== void 0 ? chartVersion : ""
      });
      this.notifyOptions = {
        kind: "warning",
        autoClose: true,
        active: true
      };
      this.showNotifyPanel = true;
    }
  }
  /**
   * creates arcgis chart instance
   * @param firstCreation Indicates whether it's the first time the component is created
   * @category Private
   */
  async createChartInstance(firstCreation = true) {
    var _a, _b;
    // Controlling the series type to display a console error if the type is not the expected one
    // We still proceed to the creation to let the config validator deal with the invalid config
    await vp([WebChartTypes.HistogramSeries], this.config);
    this.checkForIncompatibleChartVersion();
    this.updatedProps.clear();
    try {
      const dataSource = (_a = this.config) === null || _a === void 0 ? void 0 : _a.dataSource;
      if (isValidDataSource(this.inlineData, dataSource)) {
        this.chartCreationProcessing = Uj({
          chartContainer: this.chartRef,
          chartConfig: this.config,
          options: gatherComponentOptions({ component: this }),
          globalOptions: gatherComponentGlobalOptions(this)
        });
      }
      this.chart = await this.chartCreationProcessing;
      // after creating the chart we add listeners on the feature layer and view
      // only adding them if it's the first component creation. `createChartInstance()` can be called
      // when an update failed, and in that case we don't need to add again the listeners given the view
      // or layer didn't change
      if (firstCreation === true) {
        await this.addLayerListeners();
        await this.addExtentChangeListener();
      }
    }
    catch (e) {
      // sending an event if a query failed
      if (e.name === ml.QueryFeaturesError) {
        this.arcgisChartsDataProcessError.emit(e.details);
      }
      // displaying the error
      this.errorAlert(e === null || e === void 0 ? void 0 : e.message);
      // disposing the chart
      (_b = this.chart) === null || _b === void 0 ? void 0 : _b.dispose();
      this.chartCreationProcessing = undefined;
      this.chart = undefined;
    }
  }
  static get assetsDirs() { return ["t9n"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "view": ["viewChange"],
    "layer": ["layerChange"],
    "legendPosition": ["legendPositionChange"],
    "legendVisibility": ["legendVisibilityChange"],
    "filterBySelection": ["filterBySelectionChanged"]
  }; }
};
ArcGISChartsHistogram.style = arcgisChartsHistogramCss;

export { ArcGISChartsHistogram as arcgis_charts_histogram };

//# sourceMappingURL=arcgis-charts-histogram.entry.js.map