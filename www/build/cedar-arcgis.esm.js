import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-0c4dc1bb.js';
export { s as setNonce } from './index-0c4dc1bb.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.22.3 | MIT Licensed | https://stenciljs.com
 */
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-64053c71.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            var _a;
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                // Apply CSP nonce to the script tag if it exists
                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                if (nonce != null) {
                    script.setAttribute('nonce', nonce);
                }
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"cedar-telemetry-report\",[[1,\"cedar-telemetry-report\",{\"chartTitle\":[1,\"chart-title\"],\"scope\":[1],\"startDate\":[1537,\"start-date\"],\"endDate\":[1537,\"end-date\"],\"metric\":[1],\"cedarUrl\":[1,\"cedar-url\"],\"report\":[32],\"features\":[32]}]]],[\"cedar-dashboard\",[[1,\"cedar-dashboard\",{\"webmapId\":[1,\"webmap-id\"],\"charts\":[1040]}]]],[\"arcgis-charts-action-bar\",[[1,\"arcgis-charts-action-bar\",{\"forceDisableActions\":[516,\"force-disable-actions\"],\"activateLegend\":[1540,\"activate-legend\"],\"disableLegend\":[516,\"disable-legend\"],\"legendTitle\":[513,\"legend-title\"],\"activateRotateChart\":[1540,\"activate-rotate-chart\"],\"disableRotateChart\":[516,\"disable-rotate-chart\"],\"rotateChartTitle\":[513,\"rotate-chart-title\"],\"activateFilterBySelection\":[1540,\"activate-filter-by-selection\"],\"disableFilterBySelection\":[516,\"disable-filter-by-selection\"],\"filterBySelectionTitle\":[513,\"filter-by-selection-title\"],\"activateFilterByExtent\":[1540,\"activate-filter-by-extent\"],\"disableFilterByExtent\":[516,\"disable-filter-by-extent\"],\"filterByExtentTitle\":[513,\"filter-by-extent-title\"],\"activateSelection\":[1540,\"activate-selection\"],\"disableSelection\":[516,\"disable-selection\"],\"selectionTitle\":[513,\"selection-title\"],\"activateZoom\":[1540,\"activate-zoom\"],\"disableZoom\":[516,\"disable-zoom\"],\"zoomTitle\":[513,\"zoom-title\"],\"activateFullExtent\":[516,\"activate-full-extent\"],\"disableFullExtent\":[516,\"disable-full-extent\"],\"fullExtentTitle\":[513,\"full-extent-title\"],\"activateClearSelection\":[516,\"activate-clear-selection\"],\"disableClearSelection\":[516,\"disable-clear-selection\"],\"clearSelectionTitle\":[513,\"clear-selection-title\"],\"activateSwitchSelection\":[516,\"activate-switch-selection\"],\"disableSwitchSelection\":[516,\"disable-switch-selection\"],\"switchSelectionTitle\":[513,\"switch-selection-title\"],\"expanded\":[1540],\"actionBarHideActionsProps\":[16],\"actionTooltip\":[32]}]]],[\"arcgis-charts-bar-line-chart\",[[1,\"arcgis-charts-bar-line-chart\",{\"config\":[1040],\"inlineData\":[16],\"rotation\":[4],\"actionMode\":[1,\"action-mode\"],\"legendPosition\":[1,\"legend-position\"],\"legendVisibility\":[4,\"legend-visibility\"],\"view\":[16],\"layer\":[16],\"selectionData\":[16],\"returnSelectionOIDs\":[4,\"return-selection-o-i-ds\"],\"returnSelectionIndexes\":[4,\"return-selection-indexes\"],\"returnFeaturesExtent\":[4,\"return-features-extent\"],\"filterBySelection\":[4,\"filter-by-selection\"],\"disableInteractions\":[516,\"disable-interactions\"],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"placeholder\":[1],\"selectionTheme\":[16],\"chartLimits\":[16],\"ignoreSmoothRenderingLimit\":[4,\"ignore-smooth-rendering-limit\"],\"tooltipFormatter\":[16],\"dataLabelFormatter\":[16],\"guideTooltipFormatter\":[16],\"xAxisLabelFormatter\":[16],\"yAxisLabelFormatter\":[16],\"noDataOptions\":[16],\"disableTogglingLegendItems\":[4,\"disable-toggling-legend-items\"],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"resetZoom\":[64],\"switchSelection\":[64],\"clearSelection\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSLegendItemVisibilityChange\",\"handleLegendItemVisibilityChanged\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"arcgisChartsJSSeriesColorChange\",\"handleSeriesColorsChange\"],[0,\"arcgisChartsJSSelectionComplete\",\"handleSelection\"],[0,\"arcgisChartsJSTooManySelectedElements\",\"handleTooManySelectedElements\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"],[0,\"arcgisChartsJSAxesMinMaxChange\",\"handleAxesMinMaxChange\"]]]]],[\"arcgis-charts-gauge\",[[1,\"arcgis-charts-gauge\",{\"config\":[16],\"inlineData\":[16],\"view\":[16],\"layer\":[16],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"featureIndex\":[2,\"feature-index\"],\"placeholder\":[1],\"chartLimits\":[16],\"axisLabelFormatter\":[16],\"gaugeInnerLabelFormatter\":[16],\"noDataOptions\":[16],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"chartWillRender\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"]]]]],[\"arcgis-charts-histogram\",[[1,\"arcgis-charts-histogram\",{\"config\":[1040],\"inlineData\":[16],\"actionMode\":[1,\"action-mode\"],\"legendPosition\":[1,\"legend-position\"],\"legendVisibility\":[4,\"legend-visibility\"],\"view\":[16],\"layer\":[16],\"selectionData\":[16],\"returnSelectionOIDs\":[4,\"return-selection-o-i-ds\"],\"returnSelectionIndexes\":[4,\"return-selection-indexes\"],\"filterBySelection\":[4,\"filter-by-selection\"],\"noDataOptions\":[16],\"disableInteractions\":[516,\"disable-interactions\"],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"placeholder\":[1],\"selectionTheme\":[16],\"tooltipFormatter\":[16],\"dataLabelFormatter\":[16],\"guideTooltipFormatter\":[16],\"xAxisLabelFormatter\":[16],\"yAxisLabelFormatter\":[16],\"disableTogglingLegendItems\":[4,\"disable-toggling-legend-items\"],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"resetZoom\":[64],\"switchSelection\":[64],\"clearSelection\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSLegendItemVisibilityChange\",\"handleLegendItemVisibilityChanged\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"arcgisChartsJSSeriesColorChange\",\"handleSeriesColorsChange\"],[0,\"arcgisChartsJSAxesMinMaxChange\",\"handleAxesMinMaxChange\"],[0,\"arcgisChartsJSSelectionComplete\",\"handleSelection\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"]]]]],[\"arcgis-identity\",[[1,\"arcgis-identity\",{\"token\":[1],\"apiUrl\":[1,\"api-url\"]}]]],[\"cedar-configuration-chooser\",[[1,\"cedar-configuration-chooser\",{\"configurations\":[1040]},[[0,\"calciteDropdownSelect\",\"calciteDropdownSelected\"]]]]],[\"cedar-table\",[[1,\"cedar-table\",{\"data\":[8]}]]],[\"arcgis-charts-bar-chart\",[[1,\"arcgis-charts-bar-chart\",{\"config\":[1040],\"inlineData\":[16],\"rotation\":[4],\"actionMode\":[1,\"action-mode\"],\"legendPosition\":[1,\"legend-position\"],\"legendVisibility\":[4,\"legend-visibility\"],\"view\":[16],\"layer\":[16],\"selectionData\":[16],\"returnSelectionOIDs\":[4,\"return-selection-o-i-ds\"],\"returnSelectionIndexes\":[4,\"return-selection-indexes\"],\"returnFeaturesExtent\":[4,\"return-features-extent\"],\"filterBySelection\":[4,\"filter-by-selection\"],\"disableInteractions\":[516,\"disable-interactions\"],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"placeholder\":[1],\"selectionTheme\":[16],\"chartLimits\":[16],\"tooltipFormatter\":[16],\"dataLabelFormatter\":[16],\"guideTooltipFormatter\":[16],\"xAxisLabelFormatter\":[16],\"yAxisLabelFormatter\":[16],\"noDataOptions\":[16],\"disableTogglingLegendItems\":[4,\"disable-toggling-legend-items\"],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"resetZoom\":[64],\"switchSelection\":[64],\"clearSelection\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSLegendItemVisibilityChange\",\"handleLegendItemVisibilityChanged\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"arcgisChartsJSSeriesColorChange\",\"handleSeriesColorsChange\"],[0,\"arcgisChartsJSSelectionComplete\",\"handleSelection\"],[0,\"arcgisChartsJSTooManySelectedElements\",\"handleTooManySelectedElements\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"],[0,\"arcgisChartsJSAxesMinMaxChange\",\"handleAxesMinMaxChange\"]]]]],[\"arcgis-charts-line-chart\",[[1,\"arcgis-charts-line-chart\",{\"config\":[1040],\"inlineData\":[16],\"rotation\":[4],\"actionMode\":[1,\"action-mode\"],\"legendPosition\":[1,\"legend-position\"],\"legendVisibility\":[4,\"legend-visibility\"],\"view\":[16],\"layer\":[16],\"selectionData\":[16],\"returnSelectionOIDs\":[4,\"return-selection-o-i-ds\"],\"returnSelectionIndexes\":[4,\"return-selection-indexes\"],\"returnFeaturesExtent\":[4,\"return-features-extent\"],\"filterBySelection\":[4,\"filter-by-selection\"],\"disableInteractions\":[516,\"disable-interactions\"],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"placeholder\":[1],\"tooltipFormatter\":[16],\"dataLabelFormatter\":[16],\"guideTooltipFormatter\":[16],\"xAxisLabelFormatter\":[16],\"yAxisLabelFormatter\":[16],\"setTimeBinningInfoWhenNotProvided\":[516,\"set-time-binning-info-when-not-provided\"],\"selectionTheme\":[16],\"chartLimits\":[16],\"ignoreSmoothRenderingLimit\":[4,\"ignore-smooth-rendering-limit\"],\"noDataOptions\":[16],\"disableTogglingLegendItems\":[4,\"disable-toggling-legend-items\"],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"resetZoom\":[64],\"switchSelection\":[64],\"clearSelection\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSLegendItemVisibilityChange\",\"handleLegendItemVisibilityChanged\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"arcgisChartsJSSeriesColorChange\",\"handleSeriesColorsChange\"],[0,\"arcgisChartsJSSelectionComplete\",\"handleSelection\"],[0,\"arcgisChartsJSTooManySelectedElements\",\"handleTooManySelectedElements\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"],[0,\"arcgisChartsJSAxesMinMaxChange\",\"handleAxesMinMaxChange\"]]]]],[\"arcgis-charts-pie-chart\",[[1,\"arcgis-charts-pie-chart\",{\"config\":[1040],\"inlineData\":[16],\"actionMode\":[1,\"action-mode\"],\"legendPosition\":[1,\"legend-position\"],\"legendVisibility\":[4,\"legend-visibility\"],\"view\":[16],\"layer\":[16],\"selectionData\":[16],\"returnSelectionOIDs\":[4,\"return-selection-o-i-ds\"],\"returnSelectionIndexes\":[4,\"return-selection-indexes\"],\"returnFeaturesExtent\":[4,\"return-features-extent\"],\"filterBySelection\":[4,\"filter-by-selection\"],\"disableInteractions\":[516,\"disable-interactions\"],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"placeholder\":[1],\"tooltipFormatter\":[16],\"dataLabelFormatter\":[16],\"legendValueLabelFormatter\":[16],\"selectionTheme\":[16],\"chartLimits\":[16],\"noDataOptions\":[16],\"disableTogglingLegendItems\":[4,\"disable-toggling-legend-items\"],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"chartWillRender\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"switchSelection\":[64],\"clearSelection\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSLegendItemVisibilityChange\",\"handleLegendItemVisibilityChanged\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"arcgisChartsJSSeriesColorChange\",\"handleSeriesColorsChange\"],[0,\"arcgisChartsJSSelectionComplete\",\"handleSelection\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"]]]]],[\"arcgis-charts-scatter-plot\",[[1,\"arcgis-charts-scatter-plot\",{\"config\":[1040],\"inlineData\":[16],\"actionMode\":[1,\"action-mode\"],\"legendPosition\":[1,\"legend-position\"],\"legendVisibility\":[4,\"legend-visibility\"],\"view\":[16],\"layer\":[16],\"selectionData\":[16],\"returnSelectionOIDs\":[4,\"return-selection-o-i-ds\"],\"returnSelectionIndexes\":[4,\"return-selection-indexes\"],\"filterBySelection\":[4,\"filter-by-selection\"],\"disableInteractions\":[516,\"disable-interactions\"],\"disableTogglingLegendItems\":[4,\"disable-toggling-legend-items\"],\"queueChartCreation\":[516,\"queue-chart-creation\"],\"useAnimatedCharts\":[516,\"use-animated-charts\"],\"hideLicenceWatermark\":[516,\"hide-licence-watermark\"],\"enableResponsiveFeatures\":[516,\"enable-responsive-features\"],\"autoDisposeChart\":[516,\"auto-dispose-chart\"],\"placeholder\":[1],\"selectionTheme\":[16],\"ignoreSmoothRenderingLimit\":[4,\"ignore-smooth-rendering-limit\"],\"tooltipFormatter\":[16],\"dataLabelFormatter\":[16],\"guideTooltipFormatter\":[16],\"xAxisLabelFormatter\":[16],\"yAxisLabelFormatter\":[16],\"noDataOptions\":[16],\"hideLoaderAnimation\":[4,\"hide-loader-animation\"],\"runtimeDataFilters\":[16],\"usePopupTemplateFieldsInfo\":[4,\"use-popup-template-fields-info\"],\"showNotifyPanel\":[32],\"notify\":[64],\"errorAlert\":[64],\"resetZoom\":[64],\"switchSelection\":[64],\"clearSelection\":[64],\"refresh\":[64]},[[0,\"arcgisChartsJSDataProcessComplete\",\"handleChartOutputDataChange\"],[0,\"arcgisChartsJSLegendItemVisibilityChange\",\"handleLegendItemVisibilityChanged\"],[0,\"arcgisChartsJSUpdateComplete\",\"handleUpdateCompleted\"],[0,\"arcgisChartsJSAxesMinMaxChange\",\"handleAxesMinMaxChange\"],[0,\"arcgisChartsJSSelectionComplete\",\"handleSelection\"],[0,\"arcgisChartsJSTooManySelectedElements\",\"handleTooManySelectedElements\"],[0,\"calciteAlertClose\",\"handleAlertClosed\"]]]]],[\"cedar-chart\",[[1,\"cedar-chart\",{\"configUrl\":[1,\"config-url\"],\"cedarUrl\":[1,\"cedar-url\"],\"data\":[8],\"chartTitle\":[1,\"chart-title\"],\"config\":[1040],\"cedar\":[1544],\"chartType\":[32],\"chartConfig\":[32]},[[0,\"arcgisChartsDataProcessComplete\",\"loadingComplete\"],[0,\"arcgisChartsDataProcessError\",\"dataError\"],[0,\"arcgisChartsUpdateComplete\",\"updateComplete\"]]]]]]"), options);
});

//# sourceMappingURL=cedar-arcgis.esm.js.map