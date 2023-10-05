/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Checks parameters to see if we should use FormData to send the request
 * @param params The object whose keys will be encoded.
 * @return A boolean indicating if FormData will be required.
 */
function requiresFormData(params) {
    return Object.keys(params).some((key) => {
        let value = params[key];
        if (!value) {
            return false;
        }
        if (value && value.toParam) {
            value = value.toParam();
        }
        const type = value.constructor.name;
        switch (type) {
            case "Array":
                return false;
            case "Object":
                return false;
            case "Date":
                return false;
            case "Function":
                return false;
            case "Boolean":
                return false;
            case "String":
                return false;
            case "Number":
                return false;
            default:
                return true;
        }
    });
}
/**
 * Converts parameters to the proper representation to send to the ArcGIS REST API.
 * @param params The object whose keys will be encoded.
 * @return A new object with properly encoded values.
 */
function processParams(params) {
    const newParams = {};
    Object.keys(params).forEach((key) => {
        var _a, _b;
        let param = params[key];
        if (param && param.toParam) {
            param = param.toParam();
        }
        if (!param &&
            param !== 0 &&
            typeof param !== "boolean" &&
            typeof param !== "string") {
            return;
        }
        const type = param.constructor.name;
        let value;
        // properly encodes objects, arrays and dates for arcgis.com and other services.
        // ported from https://github.com/Esri/esri-leaflet/blob/master/src/Request.js#L22-L30
        // also see https://github.com/Esri/arcgis-rest-js/issues/18:
        // null, undefined, function are excluded. If you want to send an empty key you need to send an empty string "".
        switch (type) {
            case "Array":
                // Based on the first element of the array, classify array as an array of arrays, an array of objects
                // to be stringified, or an array of non-objects to be comma-separated
                // eslint-disable-next-line no-case-declarations
                const firstElementType = (_b = (_a = param[0]) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
                value =
                    firstElementType === "Array"
                        ? param // pass thru array of arrays
                        : firstElementType === "Object"
                            ? JSON.stringify(param) // stringify array of objects
                            : param.join(","); // join other types of array elements
                break;
            case "Object":
                value = JSON.stringify(param);
                break;
            case "Date":
                value = param.valueOf();
                break;
            case "Function":
                value = null;
                break;
            case "Boolean":
                value = param + "";
                break;
            default:
                value = param;
                break;
        }
        if (value ||
            value === 0 ||
            typeof value === "string" ||
            Array.isArray(value)) {
            newParams[key] = value;
        }
    });
    return newParams;
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Encodes keys and parameters for use in a URL's query string.
 *
 * @param key Parameter's key
 * @param value Parameter's value
 * @returns Query string with key and value pairs separated by "&"
 */
function encodeParam(key, value) {
    // For array of arrays, repeat key=value for each element of containing array
    if (Array.isArray(value) && value[0] && Array.isArray(value[0])) {
        return value
            .map((arrayElem) => encodeParam(key, arrayElem))
            .join("&");
    }
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
}
/**
 * Encodes the passed object as a query string.
 *
 * @param params An object to be encoded.
 * @returns An encoded query string.
 */
function encodeQueryString(params) {
    const newParams = processParams(params);
    return Object.keys(newParams)
        .map((key) => {
        return encodeParam(key, newParams[key]);
    })
        .join("&");
}

var browserPonyfill$1 = {
  FormData: globalThis.FormData,
  File: globalThis.File,
  Blob: globalThis.Blob
};

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Encodes parameters in a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in browsers or in a [FormData](https://github.com/form-data/form-data) in Node.js
 *
 * @param params An object to be encoded.
 * @returns The complete [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.
 */
function encodeFormData(params, forceFormData) {
    // see https://github.com/Esri/arcgis-rest-js/issues/499 for more info.
    const useFormData = requiresFormData(params) || forceFormData;
    const newParams = processParams(params);
    if (useFormData) {
        const formData = new browserPonyfill$1.FormData();
        Object.keys(newParams).forEach((key) => {
            if (typeof Blob !== "undefined" && newParams[key] instanceof Blob) {
                /* To name the Blob:
                 1. look to an alternate request parameter called 'fileName'
                 2. see if 'name' has been tacked onto the Blob manually
                 3. if all else fails, use the request parameter
                */
                const filename = newParams["fileName"] || newParams[key].name || key;
                formData.append(key, newParams[key], filename);
            }
            else {
                formData.append(key, newParams[key]);
            }
        });
        return formData;
    }
    else {
        return encodeQueryString(params);
    }
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * This represents a generic error from an ArcGIS endpoint. There will be details about the error in the {@linkcode ArcGISRequestError.message},  {@linkcode ArcGISRequestError.originalMessage} properties on the error. You
 * can also access the original server response at  {@linkcode ArcGISRequestError.response} which may have additional details.
 *
 * ```js
 * request(someUrl, someOptions).catch(e => {
 *   if(e.name === "ArcGISRequestError") {
 *     console.log("Something went wrong with the request:", e);
 *     console.log("Full server response", e.response);
 *   }
 * })
 * ```
 */
class ArcGISRequestError extends Error {
    /**
     * Create a new `ArcGISRequestError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options and parameters of the request
     */
    constructor(message, code, response, url, options) {
        // 'Error' breaks prototype chain here
        super(message);
        // restore prototype chain, see https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        // we don't need to check for Object.setPrototypeOf as in the answers because we are ES2017 now.
        // Also see https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
        const actualProto = new.target.prototype;
        Object.setPrototypeOf(this, actualProto);
        message = message || "UNKNOWN_ERROR";
        code = code || "UNKNOWN_ERROR_CODE";
        this.name = "ArcGISRequestError";
        this.message =
            code === "UNKNOWN_ERROR_CODE" ? message : `${code}: ${message}`;
        this.originalMessage = message;
        this.code = code;
        this.response = response;
        this.url = url;
        this.options = options;
    }
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Method used internally to surface messages to developers.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn.apply(console, [message]);
    }
}

var getFetch = function getFetch() {
  return Promise.resolve({
    fetch: globalThis.fetch,
    Headers: globalThis.Headers,
    Response: globalThis.Response,
    Request: globalThis.request
  });
};

var browserPonyfill = {
	getFetch: getFetch
};

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
const NODEJS_DEFAULT_REFERER_HEADER = `@esri/arcgis-rest-js`;
/**
 * Sets the default options that will be passed in **all requests across all `@esri/arcgis-rest-js` modules**.
 *
 * ```js
 * import { setDefaultRequestOptions } from "@esri/arcgis-rest-request";
 *
 * setDefaultRequestOptions({
 *   authentication: ArcGISIdentityManager // all requests will use this session by default
 * })
 * ```
 *
 * You should **never** set a default `authentication` when you are in a server side environment where you may be handling requests for many different authenticated users.
 *
 * @param options The default options to pass with every request. Existing default will be overwritten.
 * @param hideWarnings Silence warnings about setting default `authentication` in shared environments.
 */
function setDefaultRequestOptions(options, hideWarnings) {
    if (options.authentication && !hideWarnings) {
        warn("You should not set `authentication` as a default in a shared environment such as a web server which will process multiple users requests. You can call `setDefaultRequestOptions` with `true` as a second argument to disable this warning.");
    }
    globalThis.DEFAULT_ARCGIS_REQUEST_OPTIONS = options;
}
function getDefaultRequestOptions() {
    return (globalThis.DEFAULT_ARCGIS_REQUEST_OPTIONS || {
        httpMethod: "POST",
        params: {
            f: "json"
        }
    });
}
/**
 * This error is thrown when a request encounters an invalid token error. Requests that use {@linkcode ArcGISIdentityManager} or
 * {@linkcode ApplicationCredentialsManager} in the `authentication` option the authentication manager will automatically try to generate
 * a fresh token using either {@linkcode ArcGISIdentityManager.refreshCredentials} or
 * {@linkcode ApplicationCredentialsManager.refreshCredentials}. If the request with the new token fails you will receive an `ArcGISAuthError`
 * if refreshing the token fails you will receive an instance of {@linkcode ArcGISTokenRequestError}.
 *
 * ```js
 * request(someUrl, {
 *   authentication: identityManager,
 *   // some additional options...
 * }).catch(e => {
 *   if(e.name === "ArcGISAuthError") {
 *     console.log("Request with a new token failed you might want to have the user authorize again.")
 *   }
 *
 *   if(e.name === "ArcGISTokenRequestError") {
 *     console.log("There was an error refreshing the token you might want to have the user authorize again.")
 *   }
 * })
 * ```
 */
class ArcGISAuthError extends ArcGISRequestError {
    /**
     * Create a new `ArcGISAuthError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options of the request
     */
    constructor(message = "AUTHENTICATION_ERROR", code = "AUTHENTICATION_ERROR_CODE", response, url, options) {
        super(message, code, response, url, options);
        this.name = "ArcGISAuthError";
        this.message =
            code === "AUTHENTICATION_ERROR_CODE" ? message : `${code}: ${message}`;
        // restore prototype chain, see https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        // we don't need to check for Object.setPrototypeOf as in the answers because we are ES2017 now.
        // Also see https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
        const actualProto = new.target.prototype;
        Object.setPrototypeOf(this, actualProto);
    }
    retry(getSession, retryLimit = 1) {
        let tries = 0;
        const retryRequest = (resolve, reject) => {
            tries = tries + 1;
            getSession(this.url, this.options)
                .then((session) => {
                const newOptions = Object.assign(Object.assign({}, this.options), { authentication: session });
                return internalRequest(this.url, newOptions);
            })
                .then((response) => {
                resolve(response);
            })
                .catch((e) => {
                if (e.name === "ArcGISAuthError" && tries < retryLimit) {
                    retryRequest(resolve, reject);
                }
                else if (e.name === this.name &&
                    e.message === this.message &&
                    tries >= retryLimit) {
                    reject(this);
                }
                else {
                    reject(e);
                }
            });
        };
        return new Promise((resolve, reject) => {
            retryRequest(resolve, reject);
        });
    }
}
/**
 * Checks for errors in a JSON response from the ArcGIS REST API. If there are no errors, it will return the `data` passed in. If there is an error, it will throw an `ArcGISRequestError` or `ArcGISAuthError`.
 *
 * @param data The response JSON to check for errors.
 * @param url The url of the original request
 * @param params The parameters of the original request
 * @param options The options of the original request
 * @returns The data that was passed in the `data` parameter
 */
function checkForErrors(response, url, params, options, originalAuthError) {
    // this is an error message from billing.arcgis.com backend
    if (response.code >= 400) {
        const { message, code } = response;
        throw new ArcGISRequestError(message, code, response, url, options);
    }
    // error from ArcGIS Online or an ArcGIS Portal or server instance.
    if (response.error) {
        const { message, code, messageCode } = response.error;
        const errorCode = messageCode || code || "UNKNOWN_ERROR_CODE";
        if (code === 498 || code === 499) {
            if (originalAuthError) {
                throw originalAuthError;
            }
            else {
                throw new ArcGISAuthError(message, errorCode, response, url, options);
            }
        }
        throw new ArcGISRequestError(message, errorCode, response, url, options);
    }
    // error from a status check
    if (response.status === "failed" || response.status === "failure") {
        let message;
        let code = "UNKNOWN_ERROR_CODE";
        try {
            message = JSON.parse(response.statusMessage).message;
            code = JSON.parse(response.statusMessage).code;
        }
        catch (e) {
            message = response.statusMessage || response.message;
        }
        throw new ArcGISRequestError(message, code, response, url, options);
    }
    return response;
}
/**
 * This is the internal implementation of `request` without the automatic retry behavior to prevent
 * infinite loops when a server continues to return invalid token errors.
 *
 * @param url - The URL of the ArcGIS REST API endpoint.
 * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 * @internal
 */
function internalRequest(url, requestOptions) {
    const defaults = getDefaultRequestOptions();
    const options = Object.assign(Object.assign(Object.assign({ httpMethod: "POST" }, defaults), requestOptions), {
        params: Object.assign(Object.assign({}, defaults.params), requestOptions.params),
        headers: Object.assign(Object.assign({}, defaults.headers), requestOptions.headers)
    });
    const { httpMethod, rawResponse } = options;
    const params = Object.assign({ f: "json" }, options.params);
    let originalAuthError = null;
    const fetchOptions = {
        method: httpMethod,
        signal: options.signal,
        /* ensures behavior mimics XMLHttpRequest.
        needed to support sending IWA cookies */
        credentials: options.credentials || "same-origin"
    };
    // the /oauth2/platformSelf route will add X-Esri-Auth-Client-Id header
    // and that request needs to send cookies cross domain
    // so we need to set the credentials to "include"
    if (options.headers &&
        options.headers["X-Esri-Auth-Client-Id"] &&
        url.indexOf("/oauth2/platformSelf") > -1) {
        fetchOptions.credentials = "include";
    }
    let authentication;
    // Check to see if this is a raw token as a string and create a IAuthenticationManager like object for it.
    // Otherwise this just assumes that options.authentication is an IAuthenticationManager.
    if (typeof options.authentication === "string") {
        const rawToken = options.authentication;
        authentication = {
            portal: "https://www.arcgis.com/sharing/rest",
            getToken: () => {
                return Promise.resolve(rawToken);
            }
        };
        /* istanbul ignore else - we don't need to test NOT warning people */
        if (!options.authentication.startsWith("AAPK") && // doesn't look like an API Key
            !options.suppressWarnings && // user doesn't want to suppress warnings for this request
            !globalThis.ARCGIS_REST_JS_SUPPRESS_TOKEN_WARNING // we havn't shown the user this warning yet
        ) {
            warn(`Using an oAuth 2.0 access token directly in the token option is discouraged. Consider using ArcGISIdentityManager or Application session. See https://esriurl.com/arcgis-rest-js-direct-token-warning for more information.`);
            globalThis.ARCGIS_REST_JS_SUPPRESS_TOKEN_WARNING = true;
        }
    }
    else {
        authentication = options.authentication;
    }
    // for errors in GET requests we want the URL passed to the error to be the URL before
    // query params are applied.
    const originalUrl = url;
    return (authentication
        ? authentication.getToken(url).catch((err) => {
            /**
             * append original request url and requestOptions
             * to the error thrown by getToken()
             * to assist with retrying
             */
            err.url = url;
            err.options = options;
            /**
             * if an attempt is made to talk to an unfederated server
             * first try the request anonymously. if a 'token required'
             * error is thrown, throw the UNFEDERATED error then.
             */
            originalAuthError = err;
            return Promise.resolve("");
        })
        : Promise.resolve(""))
        .then((token) => {
        if (token.length) {
            params.token = token;
        }
        if (authentication && authentication.getDomainCredentials) {
            fetchOptions.credentials = authentication.getDomainCredentials(url);
        }
        // Custom headers to add to request. IRequestOptions.headers with merge over requestHeaders.
        const requestHeaders = {};
        if (fetchOptions.method === "GET") {
            // Prevents token from being passed in query params when hideToken option is used.
            /* istanbul ignore if - window is always defined in a browser. Test case is covered by Jasmine in node test */
            if (params.token &&
                options.hideToken &&
                // Sharing API does not support preflight check required by modern browsers https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
                typeof window === "undefined") {
                requestHeaders["X-Esri-Authorization"] = `Bearer ${params.token}`;
                delete params.token;
            }
            // encode the parameters into the query string
            const queryParams = encodeQueryString(params);
            // dont append a '?' unless parameters are actually present
            const urlWithQueryString = queryParams === "" ? url : url + "?" + encodeQueryString(params);
            if (
            // This would exceed the maximum length for URLs specified by the consumer and requires POST
            (options.maxUrlLength &&
                urlWithQueryString.length > options.maxUrlLength) ||
                // Or if the customer requires the token to be hidden and it has not already been hidden in the header (for browsers)
                (params.token && options.hideToken)) {
                // the consumer specified a maximum length for URLs
                // and this would exceed it, so use post instead
                fetchOptions.method = "POST";
                // If the token was already added as a Auth header, add the token back to body with other params instead of header
                if (token.length && options.hideToken) {
                    params.token = token;
                    // Remove existing header that was added before url query length was checked
                    delete requestHeaders["X-Esri-Authorization"];
                }
            }
            else {
                // just use GET
                url = urlWithQueryString;
            }
        }
        /* updateResources currently requires FormData even when the input parameters dont warrant it.
    https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm
        see https://github.com/Esri/arcgis-rest-js/pull/500 for more info. */
        const forceFormData = new RegExp("/items/.+/updateResources").test(url);
        if (fetchOptions.method === "POST") {
            fetchOptions.body = encodeFormData(params, forceFormData);
        }
        // Mixin headers from request options
        fetchOptions.headers = Object.assign(Object.assign({}, requestHeaders), options.headers);
        // This should have the same conditional for Node JS as ArcGISIdentityManager.refreshWithUsernameAndPassword()
        // to ensure that generated tokens have the same referer when used in Node with a username and password.
        /* istanbul ignore next - karma reports coverage on browser tests only */
        if ((typeof window === "undefined" ||
            (window && typeof window.document === "undefined")) &&
            !fetchOptions.headers.referer) {
            fetchOptions.headers.referer = NODEJS_DEFAULT_REFERER_HEADER;
        }
        /* istanbul ignore else blob responses are difficult to make cross platform we will just have to trust the isomorphic fetch will do its job */
        if (!requiresFormData(params) && !forceFormData) {
            fetchOptions.headers["Content-Type"] =
                "application/x-www-form-urlencoded";
        }
        /**
         * Check for a global fetch first and use it if available. This allows us to use the default
         * configuration of fetch-mock in tests.
         */
        /* istanbul ignore next coverage is based on browser code and we don't test for the absence of global fetch so we can skip the else here. */
        return globalThis.fetch
            ? globalThis.fetch(url, fetchOptions)
            : getFetch().then(({ fetch }) => {
                return fetch(url, fetchOptions);
            });
    })
        .then((response) => {
        // the request got back an error status code (4xx, 5xx)
        if (!response.ok) {
            // we need to determine if the server returned a JSON body with more details.
            // this is the format used by newer services such as the Places and Style service.
            return response
                .json()
                .then((jsonError) => {
                // The body can be parsed as JSON
                const { status, statusText } = response;
                const { message, details } = jsonError.error;
                const formattedMessage = `${message}. ${details ? details.join(" ") : ""}`.trim();
                throw new ArcGISRequestError(formattedMessage, `HTTP ${status} ${statusText}`, jsonError, url, options);
            })
                .catch((e) => {
                // if we already were about to format this as an ArcGISRequestError throw that error
                if (e.name === "ArcGISRequestError") {
                    throw e;
                }
                // server responded w/ an actual error (404, 500, etc) but we could not parse it as JSON
                const { status, statusText } = response;
                throw new ArcGISRequestError(statusText, `HTTP ${status}`, response, url, options);
            });
        }
        if (rawResponse) {
            return response;
        }
        switch (params.f) {
            case "json":
                return response.json();
            case "geojson":
                return response.json();
            case "html":
                return response.text();
            case "text":
                return response.text();
            /* istanbul ignore next blob responses are difficult to make cross platform we will just have to trust that isomorphic fetch will do its job */
            default:
                return response.blob();
        }
    })
        .then((data) => {
        // Check for an error in the JSON body of a successful response.
        // Most ArcGIS Server services will return a successful status code but include an error in the response body.
        if ((params.f === "json" || params.f === "geojson") && !rawResponse) {
            const response = checkForErrors(data, originalUrl, params, options, originalAuthError);
            if (originalAuthError) {
                /* If the request was made to an unfederated service that
                didn't require authentication, add the base url and a dummy token
                to the list of trusted servers to avoid another federation check
                in the event of a repeat request */
                const truncatedUrl = url
                    .toLowerCase()
                    .split(/\/rest(\/admin)?\/services\//)[0];
                options.authentication.federatedServers[truncatedUrl] = {
                    token: [],
                    // default to 24 hours
                    expires: new Date(Date.now() + 86400 * 1000)
                };
                originalAuthError = null;
            }
            return response;
        }
        else {
            return data;
        }
    });
}
/**
 * Generic method for making HTTP requests to ArcGIS REST API endpoints.
 *
 * ```js
 * import { request } from '@esri/arcgis-rest-request';
 *
 * request('https://www.arcgis.com/sharing/rest')
 *   .then(response) // response.currentVersion === 5.2
 *
 * request('https://www.arcgis.com/sharing/rest', {
 *   httpMethod: "GET"
 * })
 *
 * request('https://www.arcgis.com/sharing/rest/search', {
 *   params: { q: 'parks' }
 * })
 *   .then(response) // response.total => 78379
 * ```
 *
 * @param url - The URL of the ArcGIS REST API endpoint.
 * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function request(url, requestOptions = { params: { f: "json" } }) {
    return internalRequest(url, requestOptions).catch((e) => {
        if (e instanceof ArcGISAuthError &&
            requestOptions.authentication &&
            typeof requestOptions.authentication !== "string" &&
            requestOptions.authentication.canRefresh &&
            requestOptions.authentication.refreshCredentials) {
            return e.retry(() => {
                return requestOptions.authentication.refreshCredentials();
            }, 1);
        }
        else {
            return Promise.reject(e);
        }
    });
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper for methods with lots of first order request options to pass through as request parameters.
 */
function appendCustomParams(customOptions, keys, baseOptions) {
    const requestOptionsKeys = [
        "params",
        "httpMethod",
        "rawResponse",
        "authentication",
        "portal",
        "fetch",
        "maxUrlLength",
        "headers"
    ];
    const options = Object.assign(Object.assign({ params: {} }, baseOptions), customOptions);
    // merge all keys in customOptions into options.params
    options.params = keys.reduce((value, key) => {
        if (customOptions[key] ||
            typeof customOptions[key] === "boolean" ||
            (typeof customOptions[key] === "number" &&
                customOptions[key] === 0)) {
            value[key] = customOptions[key];
        }
        return value;
    }, options.params);
    // now remove all properties in options that don't exist in IRequestOptions
    return requestOptionsKeys.reduce((value, key) => {
        if (options[key]) {
            value[key] = options[key];
        }
        return value;
    }, {});
}

/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * There are 5 potential error codes that might be thrown by {@linkcode ArcGISTokenRequestError}. 2 of these codes are used by both
 * {@linkcode ArcGISIdentityManager} or {@linkcode ApplicationCredentialsManager}:
 *
 * * `TOKEN_REFRESH_FAILED` when a request for an new access token fails.
 * * `UNKNOWN_ERROR_CODE` the error is unknown. More information may be available in {@linkcode ArcGISTokenRequestError.response}
 *
 * The 3 remaining error codes will only be thrown when using {@linkcode ArcGISIdentityManager}:
 *
 * * `GENERATE_TOKEN_FOR_SERVER_FAILED` when a request for a token for a specific federated server fails.
 * * `REFRESH_TOKEN_EXCHANGE_FAILED` when a request for a new refresh token fails.
 * * `NOT_FEDERATED` when the requested server isn't federated with the portal specified in {@linkcode ArcGISIdentityManager.portal}.
 */
var ArcGISTokenRequestErrorCodes;
(function (ArcGISTokenRequestErrorCodes) {
    ArcGISTokenRequestErrorCodes["TOKEN_REFRESH_FAILED"] = "TOKEN_REFRESH_FAILED";
    ArcGISTokenRequestErrorCodes["GENERATE_TOKEN_FOR_SERVER_FAILED"] = "GENERATE_TOKEN_FOR_SERVER_FAILED";
    ArcGISTokenRequestErrorCodes["REFRESH_TOKEN_EXCHANGE_FAILED"] = "REFRESH_TOKEN_EXCHANGE_FAILED";
    ArcGISTokenRequestErrorCodes["NOT_FEDERATED"] = "NOT_FEDERATED";
    ArcGISTokenRequestErrorCodes["UNKNOWN_ERROR_CODE"] = "UNKNOWN_ERROR_CODE";
})(ArcGISTokenRequestErrorCodes || (ArcGISTokenRequestErrorCodes = {}));
/**
 * This error is thrown when {@linkcode ArcGISIdentityManager} or {@linkcode ApplicationCredentialsManager} fails to refresh a token or generate a new token
 * for a request. Generally in this scenario the credentials are invalid for the request and the you should recreate the {@linkcode ApplicationCredentialsManager}
 * or prompt the user to authenticate again with {@linkcode ArcGISIdentityManager}. See {@linkcode ArcGISTokenRequestErrorCodes} for a more detailed description of
 * the possible error codes.
 *
 * ```js
 * request(someUrl, {
 *   authentication: someAuthenticationManager
 * }).catch(e => {
 *   if(e.name === "ArcGISTokenRequestError") {
 *     // ArcGIS REST JS could not generate an appropriate token for this request
 *     // All credentials are likely invalid and the authentication process should be restarted
 *   }
 * })
 * ```
 */
class ArcGISTokenRequestError extends Error {
    /**
     * Create a new `ArcGISTokenRequestError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options and parameters of the request
     */
    constructor(message = "UNKNOWN_ERROR", code = ArcGISTokenRequestErrorCodes.UNKNOWN_ERROR_CODE, response, url, options) {
        // 'Error' breaks prototype chain here
        super(message);
        // restore prototype chain, see https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        // we don't need to check for Object.setPrototypeOf as in the answers because we are ES2017 now.
        // Also see https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
        const actualProto = new.target.prototype;
        Object.setPrototypeOf(this, actualProto);
        this.name = "ArcGISTokenRequestError";
        this.message = `${code}: ${message}`;
        this.originalMessage = message;
        this.code = code;
        this.response = response;
        this.url = url;
        this.options = options;
    }
}

/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * This error code will be thrown by the following methods when the user cancels or denies an authorization request on the OAuth 2.0
 * authorization screen.
 *
 * * {@linkcode ArcGISIdentityManager.beginOAuth2} when the `popup` option is `true`
 * * {@linkcode ArcGISIdentityManager.completeOAuth2}  when the `popup` option is `false`
 *
 * ```js
 * import { ArcGISIdentityManager } from "@esri/arcgis-rest-request";
 *
 * ArcGISIdentityManager.beginOAuth2({
 *   clientId: "***"
 *   redirectUri: "***",
 *   popup: true
 * }).then(authenticationManager => {
 *   console.log("OAuth 2.0 Successful");
 * }).catch(e => {
 *   if(e.name === "ArcGISAccessDeniedError") {
 *     console.log("The user did not authorize your app.")
 *   } else {
 *     console.log("Something else went wrong. Error:", e);
 *   }
 * })
 * ```
 */
class ArcGISAccessDeniedError extends Error {
    /**
     * Create a new `ArcGISAccessDeniedError`  object.
     */
    constructor() {
        const message = "The user has denied your authorization request.";
        super(message);
        // restore prototype chain, see https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        // we don't need to check for Object.setPrototypeOf as in the answers because we are ES2017 now.
        // Also see https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
        const actualProto = new.target.prototype;
        Object.setPrototypeOf(this, actualProto);
        this.name = "ArcGISAccessDeniedError";
    }
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * This represents a generic error from a {@linkcode Job}. There will be details about the error in the {@linkcode ArcGISJobError.jobInfo}.
 *
 * ```js
 * job.getAllResults().catch(e => {
 *   if(e.name === "ArcGISJobError") {
 *     console.log("Something went wrong with the job", e);
 *     console.log("Full job info", e.jobInfo);
 *   }
 * })
 * ```
 */
class ArcGISJobError extends Error {
    /**
     * Create a new `ArcGISJobError` object.
     *
     * @param message - The error message from the API
     * @param jobInfo - The info of the job that is in an error state
     */
    constructor(message = "Unknown error", jobInfo) {
        // 'Error' breaks prototype chain here
        super(message);
        // restore prototype chain, see https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        // we don't need to check for Object.setPrototypeOf as in the answers because we are ES2017 now.
        // Also see https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
        const actualProto = new.target.prototype;
        Object.setPrototypeOf(this, actualProto);
        this.name = "ArcGISJobError";
        this.message = `${jobInfo.status}: ${message}`;
        this.status = jobInfo.status;
        this.id = jobInfo.id;
        this.jobInfo = jobInfo;
    }
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper method to ensure that user supplied urls don't include whitespace or a trailing slash.
 */
function cleanUrl(url) {
    // Guard so we don't try to trim something that's not a string
    if (typeof url !== "string") {
        return url;
    }
    // trim leading and trailing spaces, but not spaces inside the url
    url = url.trim();
    // remove the trailing slash to the url if one was included
    if (url[url.length - 1] === "/") {
        url = url.slice(0, -1);
    }
    return url;
}

/* Copyright (c) 2017-2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function decodeParam(param) {
    const [key, value] = param.split("=");
    return { key: decodeURIComponent(key), value: decodeURIComponent(value) };
}
/**
 * Decodes the passed query string as an object.
 *
 * @param query A string to be decoded.
 * @returns A decoded query param object.
 */
function decodeQueryString(query) {
    if (!query || query.length <= 0) {
        return {};
    }
    return query
        .replace(/^#/, "")
        .replace(/^\?/, "")
        .split("&")
        .reduce((acc, entry) => {
        const { key, value } = decodeParam(entry);
        acc[key] = value;
        return acc;
    }, {});
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Enum describing the different errors that might be thrown by a request.
 *
 * ```ts
 * import { request, ErrorTypes } from '@esri/arcgis-rest-request';
 *
 * request("...").catch((e) => {
 *   switch(e.name) {
 *     case ErrorType.ArcGISRequestError:
 *     // handle a general error from the API
 *     break;
 *
 *     case ErrorType.ArcGISAuthError:
 *     // handle an authentication error
 *     break;
 *
 *     case ErrorType.ArcGISAccessDeniedError:
 *     // handle a user denying an authorization request in an oAuth workflow
 *     break;
 *
 *     default:
 *     // handle some other error (usually a network error)
 *   }
 * });
 * ```
 */
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["ArcGISRequestError"] = "ArcGISRequestError";
    ErrorTypes["ArcGISAuthError"] = "ArcGISAuthError";
    ErrorTypes["ArcGISAccessDeniedError"] = "ArcGISAccessDeniedError";
    ErrorTypes["ArcGISTokenRequestError"] = "ArcGISTokenRequestError";
})(ErrorTypes || (ErrorTypes = {}));

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
const FIVE_MINUTES_IN_MILLISECONDS = 5 * 60 * 1000;
function fetchToken(url, requestOptions) {
    const options = requestOptions;
    // we generate a response, so we can't return the raw response
    options.rawResponse = false;
    return request(url, options).then((response) => {
        // Typescript uses the "in" keyword to determine we have a generateToken response or an oauth token response
        if ("token" in response && "expires" in response) {
            return {
                token: response.token,
                username: requestOptions.params.username,
                expires: new Date(response.expires)
            };
        }
        const portalTokenResponse = {
            token: response.access_token,
            username: response.username,
            expires: new Date(
            // convert seconds in response to milliseconds and add the value to the current time to calculate a static expiration timestamp
            // we subtract 5 minutes here to make sure that we refresh the token early if the user makes requests
            Date.now() + response.expires_in * 1000 - FIVE_MINUTES_IN_MILLISECONDS),
            ssl: response.ssl === true
        };
        if (response.refresh_token) {
            portalTokenResponse.refreshToken = response.refresh_token;
        }
        if (response.refresh_token_expires_in) {
            portalTokenResponse.refreshTokenExpires = new Date(
            // convert seconds in response to milliseconds and add the value to the current time to calculate a static expiration timestamp
            // we subtract 5 minutes here to make sure that we refresh the token early if the user makes requests
            Date.now() +
                response.refresh_token_expires_in * 1000 -
                FIVE_MINUTES_IN_MILLISECONDS);
        }
        return portalTokenResponse;
    });
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Used to authenticate methods in ArcGIS REST JS with oAuth 2.0 application credentials. The instance of `ApplicationCredentialsManager` can be passed to {@linkcode IRequestOptions.authentication} to authenticate requests.
 *
 * ```js
 * import { ApplicationCredentialsManager } from '@esri/arcgis-rest-request';
 *
 * const session = ApplicationCredentialsManager.fromCredentials({
 *   clientId: "abc123",
 *   clientSecret: "••••••"
 * })
 * ```
 */
class ApplicationCredentialsManager {
    constructor(options) {
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.token = options.token;
        this.expires = options.expires;
        this.portal = options.portal || "https://www.arcgis.com/sharing/rest";
        this.duration = options.duration || 7200;
    }
    /**
     * Preferred method for creating an `ApplicationCredentialsManager`
     */
    static fromCredentials(options) {
        return new ApplicationCredentialsManager(options);
    }
    // URL is not actually read or passed through.
    getToken(url, requestOptions) {
        if (this.token && this.expires && this.expires.getTime() > Date.now()) {
            return Promise.resolve(this.token);
        }
        if (this._pendingTokenRequest) {
            return this._pendingTokenRequest;
        }
        this._pendingTokenRequest = this.refreshToken(requestOptions);
        return this._pendingTokenRequest;
    }
    refreshToken(requestOptions) {
        const options = Object.assign({ params: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "client_credentials",
                expiration: this.duration
            } }, requestOptions);
        return fetchToken(`${this.portal}/oauth2/token/`, options)
            .then((response) => {
            this._pendingTokenRequest = null;
            this.token = response.token;
            this.expires = response.expires;
            return response.token;
        })
            .catch((e) => {
            throw new ArcGISTokenRequestError(e.message, ArcGISTokenRequestErrorCodes.TOKEN_REFRESH_FAILED, e.response, e.url, e.options);
        });
    }
    refreshCredentials() {
        return this.refreshToken().then(() => this);
    }
}
/**
 * @deprecated - Use {@linkcode ApplicationCredentialsManager}.
 * @internal
 */ /* istanbul ignore next */
function ApplicationSession(options) {
    console.log("DEPRECATED:, 'ApplicationSession' is deprecated. Use 'ApplicationCredentialsManager' instead.");
    return new ApplicationCredentialsManager(options);
}

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Used to authenticate methods in ArcGIS REST JS with an API keys. The instance of `ApiKeyManager` can be passed to  {@linkcode IRequestOptions.authentication} to authenticate requests.
 *
 * ```js
 * import { ApiKeyManager } from '@esri/arcgis-rest-request';
 
 * const apiKey = new ApiKeyManager.fromKey("...");
 * ```
 *
 * In most cases however the API key can be passed directly to the {@linkcode IRequestOptions.authentication}.
 */
class ApiKeyManager {
    constructor(options) {
        /**
         * The current portal the user is authenticated with.
         */
        this.portal = "https://www.arcgis.com/sharing/rest";
        this.key = options.key;
    }
    /**
     * The preferred method for creating an instance of `ApiKeyManager`.
     */
    static fromKey(apiKey) {
        return new ApiKeyManager({ key: apiKey });
    }
    /**
     * Gets a token (the API Key).
     */
    getToken(url) {
        return Promise.resolve(this.key);
    }
}
/**
 * @deprecated - Use {@linkcode ApiKeyManager}.
 * @internal
 */ /* istanbul ignore next */
function ApiKey(options) {
    console.log("DEPRECATED:, 'ApiKey' is deprecated. Use 'ApiKeyManager' instead.");
    return new ApiKeyManager(options);
}

/**
 * Used to test if a URL is an ArcGIS Online URL
 */
const arcgisOnlineUrlRegex = /^https?:\/\/(\S+)\.arcgis\.com.+/;
/**
 * Used to test if a URL is production ArcGIS Online Portal
 */
const arcgisOnlinePortalRegex = /^https?:\/\/(dev|devext|qa|qaext|www)\.arcgis\.com\/sharing\/rest+/;
/**
 * Used to test if a URL is an ArcGIS Online Organization Portal
 */
const arcgisOnlineOrgPortalRegex = /^https?:\/\/(?:[a-z0-9-]+\.maps(dev|devext|qa|qaext)?)?.arcgis\.com\/sharing\/rest/;
function isOnline(url) {
    return arcgisOnlineUrlRegex.test(url);
}
function normalizeOnlinePortalUrl(portalUrl) {
    if (!arcgisOnlineUrlRegex.test(portalUrl)) {
        return portalUrl;
    }
    switch (getOnlineEnvironment(portalUrl)) {
        case "dev":
            return "https://devext.arcgis.com/sharing/rest";
        case "qa":
            return "https://qaext.arcgis.com/sharing/rest";
        default:
            return "https://www.arcgis.com/sharing/rest";
    }
}
function getOnlineEnvironment(url) {
    if (!arcgisOnlineUrlRegex.test(url)) {
        return null;
    }
    const match = url.match(arcgisOnlineUrlRegex);
    const subdomain = match[1].split(".").pop();
    if (subdomain.includes("dev")) {
        return "dev";
    }
    if (subdomain.includes("qa")) {
        return "qa";
    }
    return "production";
}
function isFederated(owningSystemUrl, portalUrl) {
    const normalizedPortalUrl = cleanUrl(normalizeOnlinePortalUrl(portalUrl)).replace(/https?:\/\//, "");
    const normalizedOwningSystemUrl = cleanUrl(owningSystemUrl).replace(/https?:\/\//, "");
    return new RegExp(normalizedOwningSystemUrl, "i").test(normalizedPortalUrl);
}
function canUseOnlineToken(portalUrl, requestUrl) {
    const portalIsOnline = isOnline(portalUrl);
    const requestIsOnline = isOnline(requestUrl);
    const portalEnv = getOnlineEnvironment(portalUrl);
    const requestEnv = getOnlineEnvironment(requestUrl);
    if (portalIsOnline && requestIsOnline && portalEnv === requestEnv) {
        return true;
    }
    return false;
}

/* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Validates that the user has access to the application
 * and if they user should be presented a "View Only" mode
 *
 * This is only needed/valid for Esri applications that are "licensed"
 * and shipped in ArcGIS Online or ArcGIS Enterprise. Most custom applications
 * should not need or use this.
 *
 * ```js
 * import { validateAppAccess } from '@esri/arcgis-rest-request';
 *
 * return validateAppAccess('your-token', 'theClientId')
 * .then((result) => {
 *    if (!result.value) {
 *      // redirect or show some other ui
 *    } else {
 *      if (result.viewOnlyUserTypeApp) {
 *        // use this to inform your app to show a "View Only" mode
 *      }
 *    }
 * })
 * .catch((err) => {
 *  // two possible errors
 *  // invalid clientId: {"error":{"code":400,"messageCode":"GWM_0007","message":"Invalid request","details":[]}}
 *  // invalid token: {"error":{"code":498,"message":"Invalid token.","details":[]}}
 * })
 * ```
 *
 * Note: This is only usable by Esri applications hosted on *arcgis.com, *esri.com or within
 * an ArcGIS Enterprise installation. Custom applications can not use this.
 *
 * @param token platform token
 * @param clientId application client id
 * @param portal Optional
 */
function validateAppAccess(token, clientId, portal = "https://www.arcgis.com/sharing/rest") {
    const url = `${portal}/oauth2/validateAppAccess`;
    const ro = {
        method: "POST",
        params: {
            f: "json",
            client_id: clientId,
            token
        }
    };
    return request(url, ro);
}

/**
 * Revokes a token generated via any oAuth 2.0 method. `token` can be either a refresh token OR an access token. If you are using  {@linkcode ArcGISIdentityManager} you should use  {@linkcode ArcGISIdentityManager.destroy} instead. Cannot revoke API keys or tokens generated by {@linkcode ApplicationCredentialsManager}.
 *
 * See [`revokeToken`](https://developers.arcgis.com/rest/users-groups-and-items/revoke-token.htm) on the ArcGIS REST API for more details.
 */
function revokeToken(requestOptions) {
    const url = `${cleanUrl(requestOptions.portal || "https://www.arcgis.com/sharing/rest")}/oauth2/revokeToken/`;
    const token = requestOptions.token;
    const clientId = requestOptions.clientId;
    delete requestOptions.portal;
    delete requestOptions.clientId;
    delete requestOptions.token;
    const options = Object.assign(Object.assign({}, requestOptions), { httpMethod: "POST", params: {
            client_id: clientId,
            auth_token: token
        } });
    return request(url, options).then((response) => {
        if (!response.success) {
            throw new ArcGISRequestError("Unable to revoke token", 500, response, url, options);
        }
        return response;
    });
}

/**
 * Encodes a `Uint8Array` to base 64. Used internally for hashing the `code_verifier` and `code_challenge` for PKCE.
 */
function base64UrlEncode(value, win = window) {
    /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
    if (!win && window) {
        win = window;
    }
    return win
        .btoa(String.fromCharCode.apply(null, value))
        .replace(/\+/g, "-") // replace + with -
        .replace(/\//g, "_") // replace / with _
        .replace(/=+$/, ""); // trim trailing =
}

/**
 * Utility to hash the codeVerifier using sha256
 */
function generateCodeChallenge(codeVerifier, win = window) {
    /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
    if (!win && window) {
        win = window;
    }
    if (codeVerifier && win.isSecureContext && win.crypto && win.crypto.subtle) {
        const encoder = new win.TextEncoder();
        const bytes = encoder.encode(codeVerifier);
        return win.crypto.subtle
            .digest("SHA-256", bytes)
            .then((buffer) => base64UrlEncode(new Uint8Array(buffer), win));
    }
    return Promise.resolve(null);
}

/**
 * Utility to generate a random string to use as our `code_verifier`
 *
 * @param win the global `window` object for accepting a mock while testing.
 */
function generateRandomString(win) {
    /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
    if (!win && window) {
        win = window;
    }
    const randomBytes = win.crypto.getRandomValues(new Uint8Array(32));
    return base64UrlEncode(randomBytes);
}

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Used to authenticate both ArcGIS Online and ArcGIS Enterprise users. `ArcGISIdentityManager` includes helper methods for [OAuth 2.0](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/oauth-2.0/) in both browser and server applications.
 *
 * **It is not recommended to construct `ArcGISIdentityManager` directly**. Instead there are several static methods used for specific workflows. The 2 primary workflows relate to oAuth 2.0:
 *
 * * {@linkcode ArcGISIdentityManager.beginOAuth2} and {@linkcode ArcGISIdentityManager.completeOAuth2()} for oAuth 2.0 in browser-only environment.
 * * {@linkcode ArcGISIdentityManager.authorize} and {@linkcode ArcGISIdentityManager.exchangeAuthorizationCode} for oAuth 2.0 for server-enabled application.
 *
 * Other more specialized helpers for less common workflows also exist:
 *
 * * {@linkcode ArcGISIdentityManager.fromToken} for when you have an existing token from another source and would like create an `ArcGISIdentityManager` instance.
 * * {@linkcode ArcGISIdentityManager.fromCredential} for creating  an `ArcGISIdentityManager` instance from a `Credentials` object in the ArcGIS JS API `IdentityManager`
 * * {@linkcode ArcGISIdentityManager.signIn} for authenticating directly with a user's username and password for environments with a user interface for oAuth 2.0.
 *
 * Once a manager is created there are additional utilities:
 *
 * * {@linkcode ArcGISIdentityManager.serialize} can be used to create a JSON object representing an instance of `ArcGISIdentityManager`
 * * {@linkcode ArcGISIdentityManager.deserialize} will create a new `ArcGISIdentityManager` from a JSON object created with {@linkcode ArcGISIdentityManager.serialize}
 * * {@linkcode ArcGISIdentityManager.destroy} or {@linkcode ArcGISIdentityManager.signOut} will invalidate any tokens in use by the  `ArcGISIdentityManager`.
 */
class ArcGISIdentityManager {
    constructor(options) {
        this.clientId = options.clientId;
        this._refreshToken = options.refreshToken;
        this._refreshTokenExpires = options.refreshTokenExpires;
        this._username = options.username;
        this.password = options.password;
        this._token = options.token;
        this._tokenExpires = options.tokenExpires;
        this.portal = options.portal
            ? cleanUrl(options.portal)
            : "https://www.arcgis.com/sharing/rest";
        this.ssl = options.ssl;
        this.provider = options.provider || "arcgis";
        this.tokenDuration = options.tokenDuration || 20160;
        this.redirectUri = options.redirectUri;
        this.server = options.server;
        this.referer = options.referer;
        this.federatedServers = {};
        this.trustedDomains = [];
        // if a non-federated server was passed explicitly, it should be trusted.
        if (options.server) {
            // if the url includes more than '/arcgis/', trim the rest
            const root = this.getServerRootUrl(options.server);
            this.federatedServers[root] = {
                token: options.token,
                expires: options.tokenExpires
            };
        }
        this._pendingTokenRequests = {};
    }
    /**
     * The current ArcGIS Online or ArcGIS Enterprise `token`.
     */
    get token() {
        return this._token;
    }
    /**
     * The expiration time of the current `token`.
     */
    get tokenExpires() {
        return this._tokenExpires;
    }
    /**
     * The current token to ArcGIS Online or ArcGIS Enterprise.
     */
    get refreshToken() {
        return this._refreshToken;
    }
    /**
     * The expiration time of the current `refreshToken`.
     */
    get refreshTokenExpires() {
        return this._refreshTokenExpires;
    }
    /**
     * The currently authenticated user.
     */
    get username() {
        if (this._username) {
            return this._username;
        }
        if (this._user && this._user.username) {
            return this._user.username;
        }
    }
    /**
     * Returns `true` if these credentials can be refreshed and `false` if it cannot.
     */
    get canRefresh() {
        if (this.username && this.password) {
            return true;
        }
        if (this.clientId && this.refreshToken && this.redirectUri) {
            return true;
        }
        return false;
    }
    /**
     * Begins a new browser-based OAuth 2.0 sign in. If `options.popup` is `true` the authentication window will open in a new tab/window. Otherwise, the user will be redirected to the authorization page in their current tab/window and the function will return `undefined`.
     *
     * If `popup` is `true` (the default) this method will return a `Promise` that resolves to an `ArcGISIdentityManager` instance and you must call {@linkcode ArcGISIdentityManager.completeOAuth2()} on the page defined in the `redirectUri`. Otherwise it will return undefined and the {@linkcode ArcGISIdentityManager.completeOAuth2()} method will return a `Promise` that resolves to an `ArcGISIdentityManager` instance.
     *
     * A {@linkcode ArcGISAccessDeniedError} error will be thrown if the user denies the request on the authorization screen.
     *
     * @browserOnly
     */
    static beginOAuth2(options, win) {
        /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
        if (!win && window) {
            win = window;
        }
        const { portal, provider, clientId, expiration, redirectUri, popup, popupWindowFeatures, locale, params, style, pkce, state } = Object.assign({
            portal: "https://www.arcgis.com/sharing/rest",
            provider: "arcgis",
            expiration: 20160,
            popup: true,
            popupWindowFeatures: "height=400,width=600,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes",
            locale: "",
            style: "",
            pkce: true
        }, options);
        /**
         * Generate a  random string for the `state` param and store it in local storage. This is used
         * to validate that all parts of the oAuth process were performed on the same client.
         */
        const stateId = state || generateRandomString(win);
        const stateStorageKey = `ARCGIS_REST_JS_AUTH_STATE_${clientId}`;
        win.localStorage.setItem(stateStorageKey, stateId);
        // Start setting up the URL to the authorization screen.
        let authorizeUrl = `${cleanUrl(portal)}/oauth2/authorize`;
        const authorizeUrlParams = {
            client_id: clientId,
            response_type: pkce ? "code" : "token",
            expiration: expiration,
            redirect_uri: redirectUri,
            state: JSON.stringify({
                id: stateId,
                originalUrl: win.location.href // this is used to reset the URL back the original URL upon return
            }),
            locale: locale,
            style: style
        };
        // If we are authorizing through a specific social provider update the params and base URL.
        if (provider !== "arcgis") {
            authorizeUrl = `${cleanUrl(portal)}/oauth2/social/authorize`;
            authorizeUrlParams.socialLoginProviderName = provider;
            authorizeUrlParams.autoAccountCreateForSocial = true;
        }
        /**
         * set a value that will be set to a promise which will later resolve when we are ready
         * to send users to the authorization page.
         */
        let setupAuth;
        if (pkce) {
            /**
             * If we are authenticating with PKCE we need to generate the code challenge which is
             * async so we generate the code challenge and assign the resulting Promise to `setupAuth`
             */
            const codeVerifier = generateRandomString(win);
            const codeVerifierStorageKey = `ARCGIS_REST_JS_CODE_VERIFIER_${clientId}`;
            win.localStorage.setItem(codeVerifierStorageKey, codeVerifier);
            setupAuth = generateCodeChallenge(codeVerifier, win).then(function (codeChallenge) {
                authorizeUrlParams.code_challenge_method = codeChallenge
                    ? "S256"
                    : "plain";
                authorizeUrlParams.code_challenge = codeChallenge
                    ? codeChallenge
                    : codeVerifier;
            });
        }
        else {
            /**
             * If we aren't authenticating with PKCE we can just assign a resolved promise to `setupAuth`
             */
            setupAuth = Promise.resolve();
        }
        /**
         * Once we are done setting up with (for PKCE) we can start the auth process.
         */
        return setupAuth.then(() => {
            // combine the authorize URL and params
            authorizeUrl = `${authorizeUrl}?${encodeQueryString(authorizeUrlParams)}`;
            // append additional params passed by the user
            if (params) {
                authorizeUrl = `${authorizeUrl}&${encodeQueryString(params)}`;
            }
            if (popup) {
                // If we are authenticating a popup we need to return a Promise that will resolve to an ArcGISIdentityManager later.
                return new Promise((resolve, reject) => {
                    // Add an event listener to listen for when a user calls `ArcGISIdentityManager.completeOAuth2()` in the popup.
                    win.addEventListener(`arcgis-rest-js-popup-auth-${clientId}`, (e) => {
                        if (e.detail.error === "access_denied") {
                            const error = new ArcGISAccessDeniedError();
                            reject(error);
                            return error;
                        }
                        if (e.detail.errorMessage) {
                            const error = new ArcGISAuthError(e.detail.errorMessage, e.detail.error);
                            reject(error);
                            return error;
                        }
                        resolve(new ArcGISIdentityManager({
                            clientId,
                            portal,
                            ssl: e.detail.ssl,
                            token: e.detail.token,
                            tokenExpires: e.detail.expires,
                            username: e.detail.username,
                            refreshToken: e.detail.refreshToken,
                            refreshTokenExpires: e.detail.refreshTokenExpires,
                            redirectUri
                        }));
                    }, {
                        once: true
                    });
                    // open the popup
                    win.open(authorizeUrl, "oauth-window", popupWindowFeatures);
                    win.dispatchEvent(new CustomEvent("arcgis-rest-js-popup-auth-start"));
                });
            }
            else {
                // If we aren't authenticating with a popup just send the user to the authorization page.
                win.location.href = authorizeUrl;
                return undefined;
            }
        });
    }
    /**
     * Completes a browser-based OAuth 2.0 sign in. If `options.popup` is `true` the user
     * will be returned to the previous window and the popup will close. Otherwise a new `ArcGISIdentityManager` will be returned. You must pass the same values for `clientId`, `popup`, `portal`, and `pkce` as you used in `beginOAuth2()`.
     *
     * A {@linkcode ArcGISAccessDeniedError} error will be thrown if the user denies the request on the authorization screen.
     * @browserOnly
     */
    static completeOAuth2(options, win) {
        /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
        if (!win && window) {
            win = window;
        }
        // pull out necessary options
        const { portal, clientId, popup, pkce, redirectUri } = Object.assign({
            portal: "https://www.arcgis.com/sharing/rest",
            popup: true,
            pkce: true
        }, options);
        // pull the saved state id out of local storage
        const stateStorageKey = `ARCGIS_REST_JS_AUTH_STATE_${clientId}`;
        const stateId = win.localStorage.getItem(stateStorageKey);
        // get the params provided by the server and compare the server state with the client saved state
        const params = decodeQueryString(pkce
            ? win.location.search.replace(/^\?/, "")
            : win.location.hash.replace(/^#/, ""));
        const state = params && params.state ? JSON.parse(params.state) : undefined;
        function reportError(errorMessage, error, originalUrl) {
            win.localStorage.removeItem(stateStorageKey);
            if (popup && win.opener) {
                win.opener.dispatchEvent(new CustomEvent(`arcgis-rest-js-popup-auth-${clientId}`, {
                    detail: {
                        error,
                        errorMessage
                    }
                }));
                win.close();
                return;
            }
            if (originalUrl) {
                win.history.replaceState(win.history.state, "", originalUrl);
            }
            if (error === "access_denied") {
                return Promise.reject(new ArcGISAccessDeniedError());
            }
            return Promise.reject(new ArcGISAuthError(errorMessage, error));
        }
        // create a function to create the final ArcGISIdentityManager from the token info.
        function createManager(oauthInfo, originalUrl) {
            win.localStorage.removeItem(stateStorageKey);
            if (popup && win.opener) {
                win.opener.dispatchEvent(new CustomEvent(`arcgis-rest-js-popup-auth-${clientId}`, {
                    detail: Object.assign({}, oauthInfo)
                }));
                win.close();
                return;
            }
            win.history.replaceState(win.history.state, "", originalUrl);
            return new ArcGISIdentityManager({
                clientId,
                portal,
                ssl: oauthInfo.ssl,
                token: oauthInfo.token,
                tokenExpires: oauthInfo.expires,
                username: oauthInfo.username,
                refreshToken: oauthInfo.refreshToken,
                refreshTokenExpires: oauthInfo.refreshTokenExpires,
                // At 4.0.0 it was possible (in JS code) to not pass redirectUri and fallback to win.location.href, however this broke support for redirect URIs with query params.
                // Now similar to 3.x.x you must pass the redirectUri parameter explicitly. See https://github.com/Esri/arcgis-rest-js/issues/995
                redirectUri: redirectUri ||
                    /* istanbul ignore next: TypeScript wont compile if we omit redirectUri */ location.href.replace(location.search, "")
            });
        }
        if (!stateId || !state) {
            return reportError("No authentication state was found, call `ArcGISIdentityManager.beginOAuth2(...)` to start the authentication process.", "no-auth-state");
        }
        if (state.id !== stateId) {
            return reportError("Saved client state did not match server sent state.", "mismatched-auth-state");
        }
        if (params.error) {
            const error = params.error;
            const errorMessage = params.error_description || "Unknown error";
            return reportError(errorMessage, error, state.originalUrl);
        }
        /**
         * If we are using PKCE the authorization code will be in the query params.
         * For implicit grants the token will be in the hash.
         */
        if (pkce && params.code) {
            const tokenEndpoint = cleanUrl(`${portal}/oauth2/token/`);
            const codeVerifierStorageKey = `ARCGIS_REST_JS_CODE_VERIFIER_${clientId}`;
            const codeVerifier = win.localStorage.getItem(codeVerifierStorageKey);
            win.localStorage.removeItem(codeVerifierStorageKey);
            // exchange our auth code for a token + refresh token
            return fetchToken(tokenEndpoint, {
                httpMethod: "POST",
                params: {
                    client_id: clientId,
                    code_verifier: codeVerifier,
                    grant_type: "authorization_code",
                    // using location.href here does not support query params but shipped with 4.0.0. See https://github.com/Esri/arcgis-rest-js/issues/995
                    redirect_uri: redirectUri || location.href.replace(location.search, ""),
                    code: params.code
                }
            })
                .then((tokenResponse) => {
                return createManager(Object.assign(Object.assign({}, tokenResponse), state), state.originalUrl);
            })
                .catch((e) => {
                return reportError(e.originalMessage, e.code, state.originalUrl);
            });
        }
        if (!pkce && params.access_token) {
            return Promise.resolve(createManager(Object.assign({ token: params.access_token, expires: new Date(Date.now() + parseInt(params.expires_in, 10) * 1000), ssl: params.ssl === "true", username: params.username }, state), state.originalUrl));
        }
        return reportError("Unknown error", "oauth-error", state.originalUrl);
    }
    /**
     * Request credentials information from the parent application
     *
     * When an application is embedded into another application via an IFrame, the embedded app can
     * use `window.postMessage` to request credentials from the host application. This function wraps
     * that behavior.
     *
     * The ArcGIS API for Javascript has this built into the Identity Manager as of the 4.19 release.
     *
     * Note: The parent application will not respond if the embedded app's origin is not:
     * - the same origin as the parent or *.arcgis.com (JSAPI)
     * - in the list of valid child origins (REST-JS)
     *
     *
     * @param parentOrigin origin of the parent frame. Passed into the embedded application as `parentOrigin` query param
     * @browserOnly
     */
    static fromParent(parentOrigin, win) {
        /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
        if (!win && window) {
            win = window;
        }
        // Declare handler outside of promise scope so we can detach it
        let handler;
        // return a promise that will resolve when the handler receives
        // session information from the correct origin
        return new Promise((resolve, reject) => {
            // create an event handler that just wraps the parentMessageHandler
            handler = (event) => {
                // ensure we only listen to events from the parent
                if (event.source === win.parent && event.data) {
                    try {
                        return resolve(ArcGISIdentityManager.parentMessageHandler(event));
                    }
                    catch (err) {
                        return reject(err);
                    }
                }
            };
            // add listener
            win.addEventListener("message", handler, false);
            win.parent.postMessage({ type: "arcgis:auth:requestCredential" }, parentOrigin);
        }).then((manager) => {
            win.removeEventListener("message", handler, false);
            return manager;
        });
    }
    /**
     * Begins a new server-based OAuth 2.0 sign in. This will redirect the user to
     * the ArcGIS Online or ArcGIS Enterprise authorization page.
     *
     * @nodeOnly
     */
    static authorize(options, response) {
        const { portal, clientId, expiration, redirectUri, state } = Object.assign({ portal: "https://arcgis.com/sharing/rest", expiration: 20160 }, options);
        const queryParams = {
            client_id: clientId,
            expiration,
            response_type: "code",
            redirect_uri: redirectUri
        };
        if (state) {
            queryParams.state = state;
        }
        const url = `${portal}/oauth2/authorize?${encodeQueryString(queryParams)}`;
        response.writeHead(301, {
            Location: url
        });
        response.end();
    }
    /**
     * Completes the server-based OAuth 2.0 sign in process by exchanging the `authorizationCode`
     * for a `access_token`.
     *
     * @nodeOnly
     */
    static exchangeAuthorizationCode(options, authorizationCode) {
        const { portal, clientId, redirectUri } = Object.assign({
            portal: "https://www.arcgis.com/sharing/rest"
        }, options);
        return fetchToken(`${portal}/oauth2/token`, {
            params: {
                grant_type: "authorization_code",
                client_id: clientId,
                redirect_uri: redirectUri,
                code: authorizationCode
            }
        })
            .then((response) => {
            return new ArcGISIdentityManager({
                clientId,
                portal,
                ssl: response.ssl,
                redirectUri,
                refreshToken: response.refreshToken,
                refreshTokenExpires: response.refreshTokenExpires,
                token: response.token,
                tokenExpires: response.expires,
                username: response.username
            });
        })
            .catch((e) => {
            throw new ArcGISTokenRequestError(e.message, ArcGISTokenRequestErrorCodes.REFRESH_TOKEN_EXCHANGE_FAILED, e.response, e.url, e.options);
        });
    }
    static deserialize(str) {
        const options = JSON.parse(str);
        return new ArcGISIdentityManager({
            clientId: options.clientId,
            refreshToken: options.refreshToken,
            refreshTokenExpires: options.refreshTokenExpires
                ? new Date(options.refreshTokenExpires)
                : undefined,
            username: options.username,
            password: options.password,
            token: options.token,
            tokenExpires: options.tokenExpires
                ? new Date(options.tokenExpires)
                : undefined,
            portal: options.portal,
            ssl: options.ssl,
            tokenDuration: options.tokenDuration,
            redirectUri: options.redirectUri,
            server: options.server
        });
    }
    /**
     * Translates authentication from the format used in the [`IdentityManager` class in the ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-Credential.html).
     *
     * You will need to call both [`IdentityManger.findCredential`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#findCredential) and [`IdentityManger.findServerInfo`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#findServerInfo) to obtain both parameters for this method.
     *
     * This method can be used with {@linkcode ArcGISIdentityManager.toCredential} to interop with the ArcGIS API for JavaScript.
     *
     * ```js
     * require(["esri/id"], (esriId) => {
     *   const credential = esriId.findCredential("https://www.arcgis.com/sharing/rest");
     *   const serverInfo = esriId.findServerInfo("https://www.arcgis.com/sharing/rest");
     *
     *   const manager = ArcGISIdentityManager.fromCredential(credential, serverInfo);
     * });
     * ```
     *
     * @returns ArcGISIdentityManager
     */
    static fromCredential(credential, serverInfo) {
        // At ArcGIS Online 9.1, credentials no longer include the ssl and expires properties
        // Here, we provide default values for them to cover this condition
        const ssl = typeof credential.ssl !== "undefined" ? credential.ssl : true;
        const expires = credential.expires || Date.now() + 7200000; /* 2 hours */
        if (serverInfo.hasServer) {
            return new ArcGISIdentityManager({
                server: credential.server,
                ssl,
                token: credential.token,
                username: credential.userId,
                tokenExpires: new Date(expires)
            });
        }
        return new ArcGISIdentityManager({
            portal: cleanUrl(credential.server.includes("sharing/rest")
                ? credential.server
                : credential.server + `/sharing/rest`),
            ssl,
            token: credential.token,
            username: credential.userId,
            tokenExpires: new Date(expires)
        });
    }
    /**
     * Handle the response from the parent
     * @param event DOM Event
     */
    static parentMessageHandler(event) {
        if (event.data.type === "arcgis:auth:credential") {
            return new ArcGISIdentityManager(event.data.credential);
        }
        if (event.data.type === "arcgis:auth:error") {
            const err = new Error(event.data.error.message);
            err.name = event.data.error.name;
            throw err;
        }
        else {
            throw new Error("Unknown message type.");
        }
    }
    /**
     * Revokes all active tokens for a provided {@linkcode ArcGISIdentityManager}. The can be considered the equivalent to signing the user out of your application.
     */
    static destroy(manager) {
        return revokeToken({
            clientId: manager.clientId,
            portal: manager.portal,
            token: manager.refreshToken || manager.token
        });
    }
    /**
     * Create a  {@linkcode ArcGISIdentityManager} from an existing token. Useful for when you have a users token from a different authentication system and want to get a  {@linkcode ArcGISIdentityManager}.
     */
    static fromToken(options) {
        const manager = new ArcGISIdentityManager(options);
        return manager.getUser().then(() => {
            return manager;
        });
    }
    /**
     * Initialize a {@linkcode ArcGISIdentityManager} with a user's `username` and `password`. **This method is intended ONLY for applications without a user interface such as CLI tools.**.
     *
     * If possible you should use {@linkcode ArcGISIdentityManager.beginOAuth2} to authenticate users in a browser or {@linkcode ArcGISIdentityManager.authorize} for authenticating users with a web server.
     */
    static signIn(options) {
        const manager = new ArcGISIdentityManager(options);
        return manager.getUser().then(() => {
            return manager;
        });
    }
    /**
     * Returns authentication in a format useable in the [`IdentityManager.registerToken()` method in the ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html#registerToken).
     *
     * This method can be used with {@linkcode ArcGISIdentityManager.fromCredential} to interop with the ArcGIS API for JavaScript.
     *
     * ```js
     * require(["esri/id"], (esriId) => {
     *   esriId.registerToken(manager.toCredential());
     * })
     
     * ```
     *
     * @returns ICredential
     */
    toCredential() {
        return {
            expires: this.tokenExpires.getTime(),
            server: this.server || this.portal,
            ssl: this.ssl,
            token: this.token,
            userId: this.username
        };
    }
    /**
     * Returns information about the currently logged in [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm). Subsequent calls will *not* result in additional web traffic.
     *
     * ```js
     * manager.getUser()
     *   .then(response => {
     *     console.log(response.role); // "org_admin"
     *   })
     * ```
     *
     * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
     * @returns A Promise that will resolve with the data from the response.
     */
    getUser(requestOptions) {
        if (this._pendingUserRequest) {
            return this._pendingUserRequest;
        }
        else if (this._user) {
            return Promise.resolve(this._user);
        }
        else {
            const url = `${this.portal}/community/self`;
            const options = Object.assign(Object.assign({ httpMethod: "GET", authentication: this }, requestOptions), { rawResponse: false });
            this._pendingUserRequest = request(url, options).then((response) => {
                this._user = response;
                this._pendingUserRequest = null;
                return response;
            });
            return this._pendingUserRequest;
        }
    }
    /**
     * Returns information about the currently logged in user's [portal](https://developers.arcgis.com/rest/users-groups-and-items/portal-self.htm). Subsequent calls will *not* result in additional web traffic.
     *
     * ```js
     * manager.getPortal()
     *   .then(response => {
     *     console.log(portal.name); // "City of ..."
     *   })
     * ```
     *
     * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
     * @returns A Promise that will resolve with the data from the response.
     */
    getPortal(requestOptions) {
        if (this._pendingPortalRequest) {
            return this._pendingPortalRequest;
        }
        else if (this._portalInfo) {
            return Promise.resolve(this._portalInfo);
        }
        else {
            const url = `${this.portal}/portals/self`;
            const options = Object.assign(Object.assign({ httpMethod: "GET", authentication: this }, requestOptions), { rawResponse: false });
            this._pendingPortalRequest = request(url, options).then((response) => {
                this._portalInfo = response;
                this._pendingPortalRequest = null;
                return response;
            });
            return this._pendingPortalRequest;
        }
    }
    /**
     * Returns the username for the currently logged in [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm). Subsequent calls will *not* result in additional web traffic. This is also used internally when a username is required for some requests but is not present in the options.
     *
     * ```js
     * manager.getUsername()
     *   .then(response => {
     *     console.log(response); // "casey_jones"
     *   })
     * ```
     */
    getUsername() {
        if (this.username) {
            return Promise.resolve(this.username);
        }
        else {
            return this.getUser().then((user) => {
                return user.username;
            });
        }
    }
    /**
     * Gets an appropriate token for the given URL. If `portal` is ArcGIS Online and
     * the request is to an ArcGIS Online domain `token` will be used. If the request
     * is to the current `portal` the current `token` will also be used. However if
     * the request is to an unknown server we will validate the server with a request
     * to our current `portal`.
     */
    getToken(url, requestOptions) {
        if (canUseOnlineToken(this.portal, url)) {
            return this.getFreshToken(requestOptions);
        }
        else if (new RegExp(this.portal, "i").test(url)) {
            return this.getFreshToken(requestOptions);
        }
        else {
            return this.getTokenForServer(url, requestOptions);
        }
    }
    /**
     * Get application access information for the current user
     * see `validateAppAccess` function for details
     *
     * @param clientId application client id
     */
    validateAppAccess(clientId) {
        return this.getToken(this.portal).then((token) => {
            return validateAppAccess(token, clientId);
        });
    }
    toJSON() {
        return {
            clientId: this.clientId,
            refreshToken: this.refreshToken,
            refreshTokenExpires: this.refreshTokenExpires || undefined,
            username: this.username,
            password: this.password,
            token: this.token,
            tokenExpires: this.tokenExpires || undefined,
            portal: this.portal,
            ssl: this.ssl,
            tokenDuration: this.tokenDuration,
            redirectUri: this.redirectUri,
            server: this.server
        };
    }
    serialize() {
        return JSON.stringify(this);
    }
    /**
     * For a "Host" app that embeds other platform apps via iframes, after authenticating the user
     * and creating a ArcGISIdentityManager, the app can then enable "post message" style authentication by calling
     * this method.
     *
     * Internally this adds an event listener on window for the `message` event
     *
     * @param validChildOrigins Array of origins that are allowed to request authentication from the host app
     */
    enablePostMessageAuth(validChildOrigins, win) {
        /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
        if (!win && window) {
            win = window;
        }
        this._hostHandler = this.createPostMessageHandler(validChildOrigins);
        win.addEventListener("message", this._hostHandler, false);
    }
    /**
     * For a "Host" app that has embedded other platform apps via iframes, when the host needs
     * to transition routes, it should call `ArcGISIdentityManager.disablePostMessageAuth()` to remove
     * the event listener and prevent memory leaks
     */
    disablePostMessageAuth(win) {
        /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
        if (!win && window) {
            win = window;
        }
        win.removeEventListener("message", this._hostHandler, false);
    }
    /**
     * Manually refreshes the current `token` and `tokenExpires`.
     */
    refreshCredentials(requestOptions) {
        // make sure subsequent calls to getUser() don't returned cached metadata
        this._user = null;
        if (this.username && this.password) {
            return this.refreshWithUsernameAndPassword(requestOptions);
        }
        if (this.clientId && this.refreshToken) {
            return this.refreshWithRefreshToken();
        }
        return Promise.reject(new ArcGISTokenRequestError("Unable to refresh token. No refresh token or password present.", ArcGISTokenRequestErrorCodes.TOKEN_REFRESH_FAILED));
    }
    /**
     * Determines the root of the ArcGIS Server or Portal for a given URL.
     *
     * @param url the URl to determine the root url for.
     */
    getServerRootUrl(url) {
        const [root] = cleanUrl(url).split(/\/rest(\/admin)?\/services(?:\/|#|\?|$)/);
        const [match, protocol, domainAndPath] = root.match(/(https?:\/\/)(.+)/);
        const [domain, ...path] = domainAndPath.split("/");
        // only the domain is lowercased because in some cases an org id might be
        // in the path which cannot be lowercased.
        return `${protocol}${domain.toLowerCase()}/${path.join("/")}`;
    }
    /**
     * Returns the proper [`credentials`] option for `fetch` for a given domain.
     * See [trusted server](https://enterprise.arcgis.com/en/portal/latest/administer/windows/configure-security.htm#ESRI_SECTION1_70CC159B3540440AB325BE5D89DBE94A).
     * Used internally by underlying request methods to add support for specific security considerations.
     *
     * @param url The url of the request
     * @returns "include" or "same-origin"
     */
    getDomainCredentials(url) {
        if (!this.trustedDomains || !this.trustedDomains.length) {
            return "same-origin";
        }
        return this.trustedDomains.some((domainWithProtocol) => {
            return url.startsWith(domainWithProtocol);
        })
            ? "include"
            : "same-origin";
    }
    /**
     * Convenience method for {@linkcode ArcGISIdentityManager.destroy} for this instance of `ArcGISIdentityManager`
     */
    signOut() {
        return ArcGISIdentityManager.destroy(this);
    }
    /**
     * Return a function that closes over the validOrigins array and
     * can be used as an event handler for the `message` event
     *
     * @param validOrigins Array of valid origins
     */
    createPostMessageHandler(validOrigins) {
        // return a function that closes over the validOrigins and
        // has access to the credential
        return (event) => {
            // Verify that the origin is valid
            // Note: do not use regex's here. validOrigins is an array so we're checking that the event's origin
            // is in the array via exact match. More info about avoiding postMessage xss issues here
            // https://jlajara.gitlab.io/web/2020/07/17/Dom_XSS_PostMessage_2.html#tipsbypasses-in-postmessage-vulnerabilities
            const isValidOrigin = validOrigins.indexOf(event.origin) > -1;
            // JSAPI handles this slightly differently - instead of checking a list, it will respond if
            // event.origin === window.location.origin || event.origin.endsWith('.arcgis.com')
            // For Hub, and to enable cross domain debugging with port's in urls, we are opting to
            // use a list of valid origins
            // Ensure the message type is something we want to handle
            const isValidType = event.data.type === "arcgis:auth:requestCredential";
            // Ensure we don't pass an expired session forward
            const isTokenValid = this.tokenExpires.getTime() > Date.now();
            if (isValidOrigin && isValidType) {
                let msg = {};
                if (isTokenValid) {
                    const credential = this.toJSON();
                    msg = {
                        type: "arcgis:auth:credential",
                        credential
                    };
                }
                else {
                    msg = {
                        type: "arcgis:auth:error",
                        error: {
                            name: "tokenExpiredError",
                            message: "Token was expired, and not returned to the child application"
                        }
                    };
                }
                event.source.postMessage(msg, event.origin);
            }
        };
    }
    /**
     * Validates that a given URL is properly federated with our current `portal`.
     * Attempts to use the internal `federatedServers` cache first.
     */
    getTokenForServer(url, requestOptions) {
        // requests to /rest/services/ and /rest/admin/services/ are both valid
        // Federated servers may have inconsistent casing, so lowerCase it
        const root = this.getServerRootUrl(url);
        const existingToken = this.federatedServers[root];
        if (existingToken &&
            existingToken.expires &&
            existingToken.expires.getTime() > Date.now()) {
            return Promise.resolve(existingToken.token);
        }
        if (this._pendingTokenRequests[root]) {
            return this._pendingTokenRequests[root];
        }
        this._pendingTokenRequests[root] = this.fetchAuthorizedDomains().then(() => {
            return request(`${root}/rest/info`, {
                credentials: this.getDomainCredentials(url)
            })
                .then((serverInfo) => {
                if (serverInfo.owningSystemUrl) {
                    /**
                     * if this server is not owned by this portal
                     * bail out with an error since we know we wont
                     * be able to generate a token
                     */
                    if (!isFederated(serverInfo.owningSystemUrl, this.portal)) {
                        throw new ArcGISTokenRequestError(`${url} is not federated with ${this.portal}.`, ArcGISTokenRequestErrorCodes.NOT_FEDERATED);
                    }
                    else {
                        /**
                         * if the server is federated, use the relevant token endpoint.
                         */
                        return request(`${serverInfo.owningSystemUrl}/sharing/rest/info`, requestOptions);
                    }
                }
                else if (serverInfo.authInfo &&
                    this.federatedServers[root] !== undefined) {
                    /**
                     * if its a stand-alone instance of ArcGIS Server that doesn't advertise
                     * federation, but the root server url is recognized, use its built in token endpoint.
                     */
                    return Promise.resolve({
                        authInfo: serverInfo.authInfo
                    });
                }
                else {
                    throw new ArcGISTokenRequestError(`${url} is not federated with any portal and is not explicitly trusted.`, ArcGISTokenRequestErrorCodes.NOT_FEDERATED);
                }
            })
                .then((serverInfo) => {
                // an expired token cant be used to generate a new token so refresh our credentials before trying to generate a server token
                if (this.token && this.tokenExpires.getTime() < Date.now()) {
                    // If we are authenticated to a single server just refresh with username and password and use the new credentials as the credentials for this server.
                    if (this.server) {
                        return this.refreshCredentials().then(() => {
                            return {
                                token: this.token,
                                expires: this.tokenExpires
                            };
                        });
                    }
                    // Otherwise refresh the credentials for the portal and generate a URL for the specific server.
                    return this.refreshCredentials().then(() => {
                        return this.generateTokenForServer(serverInfo.authInfo.tokenServicesUrl, root);
                    });
                }
                else {
                    return this.generateTokenForServer(serverInfo.authInfo.tokenServicesUrl, root);
                }
            })
                .then((response) => {
                this.federatedServers[root] = response;
                delete this._pendingTokenRequests[root];
                return response.token;
            });
        });
        return this._pendingTokenRequests[root];
    }
    /**
     * Generates a token for a given `serverUrl` using a given `tokenServicesUrl`.
     */
    generateTokenForServer(tokenServicesUrl, serverUrl) {
        return request(tokenServicesUrl, {
            params: {
                token: this.token,
                serverUrl,
                expiration: this.tokenDuration
            }
        })
            .then((response) => {
            return {
                token: response.token,
                expires: new Date(response.expires - 1000 * 60 * 5)
            };
        })
            .catch((e) => {
            throw new ArcGISTokenRequestError(e.message, ArcGISTokenRequestErrorCodes.GENERATE_TOKEN_FOR_SERVER_FAILED, e.response, e.url, e.options);
        });
    }
    /**
     * Returns an unexpired token for the current `portal`.
     */
    getFreshToken(requestOptions) {
        if (this.token && !this.tokenExpires) {
            return Promise.resolve(this.token);
        }
        if (this.token &&
            this.tokenExpires &&
            this.tokenExpires.getTime() > Date.now()) {
            return Promise.resolve(this.token);
        }
        if (!this._pendingTokenRequests[this.portal]) {
            this._pendingTokenRequests[this.portal] = this.refreshCredentials(requestOptions).then(() => {
                this._pendingTokenRequests[this.portal] = null;
                return this.token;
            });
        }
        return this._pendingTokenRequests[this.portal];
    }
    /**
     * Refreshes the current `token` and `tokenExpires` with `username` and
     * `password`.
     */
    refreshWithUsernameAndPassword(requestOptions) {
        const params = {
            username: this.username,
            password: this.password,
            expiration: this.tokenDuration,
            client: "referer",
            referer: this.referer
                ? this.referer
                : typeof window !== "undefined" &&
                    typeof window.document !== "undefined" &&
                    window.location &&
                    window.location.origin
                    ? window.location.origin
                    : /* istanbul ignore next */
                        NODEJS_DEFAULT_REFERER_HEADER
        };
        return (this.server
            ? request(`${this.getServerRootUrl(this.server)}/rest/info`).then((response) => {
                return request(response.authInfo.tokenServicesUrl, Object.assign({ params }, requestOptions));
            })
            : request(`${this.portal}/generateToken`, Object.assign({ params }, requestOptions)))
            .then((response) => {
            this.updateToken(response.token, new Date(response.expires));
            return this;
        })
            .catch((e) => {
            throw new ArcGISTokenRequestError(e.message, ArcGISTokenRequestErrorCodes.TOKEN_REFRESH_FAILED, e.response, e.url, e.options);
        });
    }
    /**
     * Refreshes the current `token` and `tokenExpires` with `refreshToken`.
     */
    refreshWithRefreshToken(requestOptions) {
        // If our refresh token expires sometime in the next 24 hours then refresh the refresh token
        const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
        if (this.refreshToken &&
            this.refreshTokenExpires &&
            this.refreshTokenExpires.getTime() - ONE_DAY_IN_MILLISECONDS < Date.now()) {
            return this.exchangeRefreshToken(requestOptions);
        }
        const options = Object.assign({ params: {
                client_id: this.clientId,
                refresh_token: this.refreshToken,
                grant_type: "refresh_token"
            } }, requestOptions);
        return fetchToken(`${this.portal}/oauth2/token`, options)
            .then((response) => {
            return this.updateToken(response.token, response.expires);
        })
            .catch((e) => {
            throw new ArcGISTokenRequestError(e.message, ArcGISTokenRequestErrorCodes.TOKEN_REFRESH_FAILED, e.response, e.url, e.options);
        });
    }
    /**
     * Update the stored {@linkcode ArcGISIdentityManager.token} and {@linkcode ArcGISIdentityManager.tokenExpires} properties. This method is used internally when refreshing tokens.
     * You may need to call this if you want update the token with a new token from an external source.
     *
     * @param newToken The new token to use for this instance of `ArcGISIdentityManager`.
     * @param newTokenExpiration The new expiration date of the token.
     * @returns
     */
    updateToken(newToken, newTokenExpiration) {
        this._token = newToken;
        this._tokenExpires = newTokenExpiration;
        return this;
    }
    /**
     * Exchanges an unexpired `refreshToken` for a new one, also updates `token` and
     * `tokenExpires`.
     */
    exchangeRefreshToken(requestOptions) {
        const options = Object.assign({ params: {
                client_id: this.clientId,
                refresh_token: this.refreshToken,
                redirect_uri: this.redirectUri,
                grant_type: "exchange_refresh_token"
            } }, requestOptions);
        return fetchToken(`${this.portal}/oauth2/token`, options)
            .then((response) => {
            this._token = response.token;
            this._tokenExpires = response.expires;
            this._refreshToken = response.refreshToken;
            this._refreshTokenExpires = response.refreshTokenExpires;
            return this;
        })
            .catch((e) => {
            throw new ArcGISTokenRequestError(e.message, ArcGISTokenRequestErrorCodes.REFRESH_TOKEN_EXCHANGE_FAILED, e.response, e.url, e.options);
        });
    }
    /**
     * ensures that the authorizedCrossOriginDomains are obtained from the portal and cached
     * so we can check them later.
     *
     * @returns this
     */
    fetchAuthorizedDomains() {
        // if this token is for a specific server or we don't have a portal
        // don't get the portal info because we cant get the authorizedCrossOriginDomains
        if (this.server || !this.portal) {
            return Promise.resolve(this);
        }
        return this.getPortal().then((portalInfo) => {
            /**
             * Specific domains can be configured as secure.esri.com or https://secure.esri.com this
             * normalizes to https://secure.esri.com so we can use startsWith later.
             */
            if (portalInfo.authorizedCrossOriginDomains &&
                portalInfo.authorizedCrossOriginDomains.length) {
                this.trustedDomains = portalInfo.authorizedCrossOriginDomains
                    .filter((d) => !d.startsWith("http://"))
                    .map((d) => {
                    if (d.startsWith("https://")) {
                        return d;
                    }
                    else {
                        return `https://${d}`;
                    }
                });
            }
            return this;
        });
    }
}
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager}.
 * @internal
 *
 */ /* istanbul ignore next */
function UserSession(options) {
    console.log("DEPRECATED:, 'UserSession' is deprecated. Use 'ArcGISIdentityManager' instead.");
    return new ArcGISIdentityManager(options);
}
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.beginOAuth2}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.beginOAuth2 = function (...args) {
    console.warn("DEPRECATED:, 'UserSession.beginOAuth2' is deprecated. Use 'ArcGISIdentityManager.beginOAuth2' instead.");
    return ArcGISIdentityManager.beginOAuth2(...args);
};
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.completeOAuth2}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.completeOAuth2 = function (...args) {
    console.warn("DEPRECATED:, 'UserSession.completeOAuth2()' is deprecated. Use 'ArcGISIdentityManager.completeOAuth2()' instead.");
    if (args.length <= 1) {
        console.warn("WARNING:, 'UserSession.completeOAuth2()' is now async and returns a promise the resolves to an instance of `ArcGISIdentityManager`.");
    }
    return ArcGISIdentityManager.completeOAuth2(...args);
};
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.fromParent}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.fromParent = function (...args) {
    console.warn("DEPRECATED:, 'UserSession.fromParent' is deprecated. Use 'ArcGISIdentityManager.fromParent' instead.");
    return ArcGISIdentityManager.fromParent(...args);
};
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.authorize}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.authorize = function (...args) {
    console.warn("DEPRECATED:, 'UserSession.authorize' is deprecated. Use 'ArcGISIdentityManager.authorize' instead.");
    return ArcGISIdentityManager.authorize(...args);
};
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.exchangeAuthorizationCode}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.exchangeAuthorizationCode = function (...args) {
    console.warn("DEPRECATED:, 'UserSession.exchangeAuthorizationCode' is deprecated. Use 'ArcGISIdentityManager.exchangeAuthorizationCode' instead.");
    return ArcGISIdentityManager.exchangeAuthorizationCode(...args);
};
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.fromCredential}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.fromCredential = function (...args) {
    console.log("DEPRECATED:, 'UserSession.fromCredential' is deprecated. Use 'ArcGISIdentityManager.fromCredential' instead.");
    console.warn("WARNING:, 'UserSession.fromCredential' now requires a `ServerInfo` object from the JS API as a second parameter.");
    return ArcGISIdentityManager.fromCredential(...args);
};
/**
 * @deprecated - Use {@linkcode ArcGISIdentityManager.deserialize}.
 * @internal
 *
 */ /* istanbul ignore next */
UserSession.deserialize = function (...args) {
    console.log("DEPRECATED:, 'UserSession.deserialize' is deprecated. Use 'ArcGISIdentityManager.deserialize' instead.");
    return ArcGISIdentityManager.deserialize(...args);
};

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Request app-specific token, passing in the token for the current app.
 *
 * This call returns a token after performing the same checks made by validateAppAccess.
 * It returns an app-specific token of the signed-in user only if the user has access
 * to the app and the encrypted platform cookie is valid.
 *
 * A scenario where an app would use this is if it is iframed into another platform app
 * and receives credentials via postMessage. Those credentials contain a token that is
 * specific to the host app, so the embedded app would use `exchangeToken` to get one
 * that is specific to itself.
 *
 * Note: This is only usable by Esri applications hosted on *arcgis.com, *esri.com or within
 * an ArcGIS Enterprise installation. Custom applications can not use this.
 *
 * @param token
 * @param clientId application
 * @param portal
 */
function exchangeToken(token, clientId, portal = "https://www.arcgis.com/sharing/rest") {
    const url = `${portal}/oauth2/exchangeToken`;
    const ro = {
        method: "POST",
        params: {
            f: "json",
            client_id: clientId,
            token
        }
    };
    // make the request and return the token
    return request(url, ro).then((response) => response.token);
}
/**
 * @internal
 * @private
 * Request a token for a specific application using the esri_aopc encrypted cookie
 *
 * When a client app boots up, it will know its clientId and the redirectUri for use
 * in the normal /oauth/authorize pop-out oAuth flow.
 *
 * If the app sees an `esri_aopc` cookie (only set if the app is hosted on *.arcgis.com),
 * it can call the /oauth2/platformSelf end-point passing in the clientId and redirectUri
 * in headers, and it will receive back an app-specific token, assuming the user has
 * access to the app.
 *
 * Since there are scenarios where an app can boot using credentials/token from localstorage
 * but those credentials are not for the same user as the esri_aopc cookie, it is recommended that
 * an app check the returned username against any existing identity they may have loaded.
 *
 * Note: This is only usable by Esri applications hosted on *arcgis.com, *esri.com or within
 * an ArcGIS Enterprise installation. Custom applications can not use this.
 *
 * ```js
 * // convert the encrypted platform cookie into a ArcGISIdentityManager
 * import { platformSelf, ArcGISIdentityManager } from '@esri/arcgis-rest-request';
 *
 * const portal = 'https://www.arcgis.com/sharing/rest';
 * const clientId = 'YOURAPPCLIENTID';
 *
 * // exchange esri_aopc cookie
 * return platformSelf(clientId, 'https://your-app-redirect-uri', portal)
 * .then((response) => {
 *  const currentTimestamp = new Date().getTime();
 *  const tokenExpiresTimestamp = currentTimestamp + (response.expires_in * 1000);
 *  // Construct the session and return it
 *  return new ArcGISIdentityManager({
 *    portal,
 *    clientId,
 *    username: response.username,
 *    token: response.token,
 *    tokenExpires: new Date(tokenExpiresTimestamp),
 *    ssl: true
 *  });
 * })
 *
 * ```
 *
 *
 * @param clientId
 * @param redirectUri
 * @param portal
 */
function platformSelf(clientId, redirectUri, portal = "https://www.arcgis.com/sharing/rest") {
    // TEMPORARY: the f=json should not be needed, but currently is
    const url = `${portal}/oauth2/platformSelf?f=json`;
    const ro = {
        method: "POST",
        headers: {
            "X-Esri-Auth-Client-Id": clientId,
            "X-Esri-Auth-Redirect-Uri": redirectUri
        },
        // Note: request has logic to include the cookie
        // for platformSelf calls w/ the X-Esri-Auth-Client-Id header
        params: {
            f: "json"
        }
    };
    // make the request and return the token
    return request(url, ro);
}

/**
 * These statuses are based on what are returned from the job request task and have been into an enum type.
 *
 * Reference https://developers.arcgis.com/rest/services-reference/enterprise/geoanalytics-checking-job-status.htm
 */
var JOB_STATUSES;
(function (JOB_STATUSES) {
    JOB_STATUSES["Success"] = "Succeeded";
    JOB_STATUSES["Failed"] = "Failed";
    JOB_STATUSES["Waiting"] = "Waiting";
    JOB_STATUSES["Cancelled"] = "Cancelled";
    JOB_STATUSES["Cancelling"] = "Cancelling";
    JOB_STATUSES["New"] = "New";
    JOB_STATUSES["Executing"] = "Executing";
    JOB_STATUSES["Submitted"] = "Submitted";
    JOB_STATUSES["Failure"] = "Failure";
    JOB_STATUSES["TimedOut"] = "TimedOut";
    JOB_STATUSES["Error"] = "Error";
    JOB_STATUSES["Status"] = "Etatus";
    JOB_STATUSES["Unknown"] = "Unknown";
})(JOB_STATUSES || (JOB_STATUSES = {}));

function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

/**
  * Processes arrays to JSON strings for Geoprocessing services. See “GPMultiValue” in https://developers.arcgis.com/rest/services-reference/enterprise/gp-data-types.htm
  */
function processJobParams(params) {
    const processedParams = Object.keys(params).reduce((newParams, key) => {
        const value = params[key];
        const type = value.constructor.name;
        newParams[key] = type === "Array" ? JSON.stringify(value) : value;
        return newParams;
    }, {});
    return processedParams;
}

const DefaultJobOptions = {
    pollingRate: 2000,
    startMonitoring: false
};
/**
 * Jobs represent long running processing tasks running on ArcGIS Services. Typically these represent complex analysis tasks such as [geoprocessing tasks](https://developers.arcgis.com/rest/services-reference/enterprise/submit-gp-job.htm), [logistics analysis such as fleet routing](https://developers.arcgis.com/rest/network/api-reference/vehicle-routing-problem-service.htm) or [spatial analysis tasks](https://developers.arcgis.com/rest/analysis/api-reference/tasks-overview.htm).
 *
 * To create a {@linkcode Job}, use the {@linkcode Job.submitJob} method which will return an instance of the {@linkcode Job} class with a unique id.
 *
 * If you have an existing job you can use {@linkcode Job.serialize} and {@linkcode Job.deserialize} to save job information as a string and recreate the job to get results later.
 *
 * ```js
 * import { Job,  JOB_STATUSES  } from "@esri/arcgis-rest-request";
 *
 * const job  = async Job.submitJob(options);
 *
 * // will automatically wait for job completion and get results when the job is finished.
 * job.getAllResults().then((results) => {console.log(results)})
 *
 * // watch for all status updates
 * job.on("status", ({jobStatus}) => {console.log(job.status)})
 * ```
 *
 * By default event monitoring is started when you call {@linkcode Job.waitForCompletion}, {@linkcode Job.getAllResults} or, {@linkcode Job.getResult} and stops automatically when those promises complete. Use {@linkcode Job.startEventMonitoring} and {@linkcode Job.stopEventMonitoring} to manually start and stop event monitoring outside those methods. Starting monitoring with {@linkcode Job.startEventMonitoring} will not stop monitoring when {@linkcode Job.waitForCompletion}, {@linkcode Job.getAllResults} or, {@linkcode Job.getResult} complete.
 */
class Job {
    constructor(options) {
        /**
         * Function that calls the {@linkcode Job.getJobInfo} to check the job status, and emits the current job status. There are custom event emitters that
         * the user is able to listen based on the job status. Refer to {@linkcode JOB_STATUSES} to see the various enums of the job status.
         * To get results array from the job task, the job status must be {@linkcode JOB_STATUSES.Success}.
         *
         * These job statuses are based on what are returned from the job request task and have been into an enum type in {@linkcode JOB_STATUSES}.
         *
         * Reference https://developers.arcgis.com/rest/services-reference/enterprise/geoanalytics-checking-job-status.htm
         */
        this.executePoll = async () => {
            let result;
            try {
                result = await this.getJobInfo();
            }
            catch (error) {
                this.emitter.emit(JOB_STATUSES.Error, error);
                return;
            }
            this.emitter.emit(JOB_STATUSES.Status, result);
            this.emitter.emit(result.status, result);
        };
        const { url, id, pollingRate, authentication } = Object.assign(Object.assign({}, DefaultJobOptions), options);
        // Setup internal properties
        this.url = url;
        this.id = id;
        this.authentication = authentication;
        this._pollingRate = pollingRate;
        this.emitter = mitt();
        if (options.startMonitoring) {
            this.startEventMonitoring(pollingRate);
        }
    }
    static deserialize(serializeString, options) {
        const jobOptions = Object.assign(Object.assign(Object.assign({}, DefaultJobOptions), JSON.parse(serializeString)), options);
        return request(`${jobOptions.url}/jobs/${jobOptions.id}`, {
            authentication: jobOptions.authentication
        }).then(() => {
            return new Job(jobOptions);
        });
    }
    /**
     * Creates a new instance of {@linkcode Job} from an existing job id.
     *
     * @param options Requires request endpoint url and id from an existing job id.
     * @returns An new instance of Job class with options.
     */
    static fromExistingJob(options) {
        const jobOptions = Object.assign(Object.assign({}, DefaultJobOptions), options);
        const baseUrl = cleanUrl(jobOptions.url.replace(/\/submitJob\/?/, ""));
        return request(`${baseUrl}/jobs/${jobOptions.id}`, {
            authentication: jobOptions.authentication
        }).then(() => {
            return new Job(jobOptions);
        });
    }
    /**
     * Submits a job request that will return a new instance of {@linkcode Job}.
     *
     * @param requestOptions Requires url and params from requestOptions.
     * @returns An new instance of Job class with the returned job id from submitJob request and requestOptions;
     */
    static submitJob(requestOptions) {
        const { url, params, authentication, pollingRate, startMonitoring } = Object.assign(Object.assign({}, DefaultJobOptions), requestOptions);
        const processedParams = processJobParams(params);
        const baseUrl = cleanUrl(url.replace(/\/submitJob\/?/, ""));
        const submitUrl = baseUrl + "/submitJob";
        return request(submitUrl, {
            params: processedParams,
            authentication
        }).then((response) => new Job({
            url: baseUrl,
            authentication,
            id: response.jobId,
            startMonitoring,
            pollingRate
        }));
    }
    /**
     * Getter that appends the job id to the base url.
     */
    get jobUrl() {
        return `${this.url}/jobs/${this.id}`;
    }
    /**
     * Returns `true` if the job is polling for status changes.
     */
    get isMonitoring() {
        return !!this.setIntervalHandler;
    }
    /**
     * The rate at which event monitoring is occurring in milliseconds.
     */
    get pollingRate() {
        return this._pollingRate;
    }
    /**
     * Sets a new polling rate and restart polling for status changes.
     */
    set pollingRate(newRate) {
        this.stopEventMonitoring();
        this.startEventMonitoring(newRate);
    }
    /**
     * Retrieves the status of the current job.
     *
     * @returns An object with the job id and jobStatus.
     */
    getJobInfo() {
        return request(this.jobUrl, {
            authentication: this.authentication
        }).then((rawJobInfo) => {
            const info = Object.assign({
                id: rawJobInfo.jobId,
                status: undefined
            }, rawJobInfo);
            delete info.jobId;
            delete info.jobStatus;
            switch (rawJobInfo.jobStatus) {
                case "esriJobCancelled":
                    info.status = JOB_STATUSES.Cancelled;
                    break;
                case "esriJobCancelling":
                    info.status = JOB_STATUSES.Cancelling;
                    break;
                case "esriJobNew":
                    info.status = JOB_STATUSES.New;
                    break;
                case "esriJobWaiting":
                    info.status = JOB_STATUSES.Waiting;
                    break;
                case "esriJobExecuting":
                    info.status = JOB_STATUSES.Executing;
                    break;
                case "esriJobSubmitted":
                    info.status = JOB_STATUSES.Submitted;
                    break;
                case "esriJobTimedOut":
                    info.status = JOB_STATUSES.TimedOut;
                    break;
                case "esriJobFailed":
                    info.status = JOB_STATUSES.Failed;
                    break;
                case "expectedFailure":
                    info.status = JOB_STATUSES.Failure;
                    break;
                case "esriJobSucceeded":
                    info.status = JOB_STATUSES.Success;
                    break;
            }
            return info;
        });
    }
    /**
     * A handler that listens for an eventName and returns custom handler.
     *
     * @param eventName A string of what event to listen for.
     * @param handler A function of what to do when eventName was called.
     */
    on(eventName, handler) {
        this.emitter.on(eventName, handler);
    }
    /**
     * A handler that listens for an event once and returns a custom handler.
     *
     * @param eventName A string of what event to listen for.
     * @param handler A function of what to do when eventName was called.
     */
    once(eventName, handler) {
        const fn = (arg) => {
            this.emitter.off(eventName, fn);
            handler(arg);
        };
        this.emitter.on(eventName, fn);
        handler.__arcgis_job_once_original_function__ = fn;
    }
    /**
     * A handler that will remove a listener after its emitted and returns a custom handler.
     *
     * @param eventName A string of what event to listen for.
     * @param handler A function of what to do when eventName was called.
     */
    off(eventName, handler) {
        if (handler.__arcgis_job_once_original_function__) {
            this.emitter.off(eventName, handler.__arcgis_job_once_original_function__);
            return;
        }
        this.emitter.off(eventName, handler);
    }
    /**
     * Get the specific results of a successful job by result name. To get all results see {@linkcode Job.getAllResults}.
     *
     * If monitoring is disabled it will be enabled until the job classes resolves or rejects this promise.
     *
     * ```
     * Job.submitJob(options)
     *  .then((job) => {
     *    return job.getResult("result_name")
     *  }).then(result => {
     *    console.log(result);
     *  }).catch(e => {
     *    if(e.name === "ArcGISJobError") {
     *      console.log("Something went wrong while running the job", e.jobInfo);
     *    }
     *  })
     * ```
     *
     *  Will throw a {@linkcode ArcGISJobError} if it encounters a cancelled or failure status in the job.
     *
     * @param result The name of the result that you want to retrieve.
     * @returns An object representing the individual result of the job.
     */
    async getResult(result) {
        return this.waitForCompletion().then((jobInfo) => {
            return request(this.jobUrl + "/" + jobInfo.results[result].paramUrl, {
                authentication: this.authentication
            });
        });
    }
    /**
     * Formats the requestOptions to JSON format.
     *
     * @returns The `Job` as a plain JavaScript object.
     */
    toJSON() {
        return {
            id: this.id,
            url: this.url,
            startMonitoring: this.isMonitoring,
            pollingRate: this.pollingRate
        };
    }
    /**
     * Converts the `Job` to a JSON string. You can rehydrate the state of the `Job` with {@linkcode Job.deserialize}.
     *
     * @returns A JSON string representing the `Job`.
     */
    serialize() {
        return JSON.stringify(this);
    }
    /**
     * Checks for job status and if the job status is successful it resolves the job information. Otherwise will throw a {@linkcode ArcGISJobError} if it encounters a cancelled or failure status in the job.
     *
     * ```
     * Job.submitJob(options)
     *  .then((job) => {
     *    return job.waitForCompletion();
     *  })
     * .then((jobInfo) => {
     *    console.log("job finished", e.jobInfo);
     *  })
     * .catch(e => {
     *    if(e.name === "ArcGISJobError") {
     *      console.log("Something went wrong while running the job", e.jobInfo);
     *    }
     *  })
     * ```
     *
     * @returns An object with a successful job status, id, and results.
     */
    async waitForCompletion() {
        const jobInfo = await this.getJobInfo();
        if (jobInfo.status === JOB_STATUSES.Success) {
            return Promise.resolve(jobInfo);
        }
        //if jobStatus comes back immediately with one of the statuses
        if (jobInfo.status === JOB_STATUSES.Cancelling ||
            jobInfo.status === JOB_STATUSES.Cancelled ||
            jobInfo.status === JOB_STATUSES.Failed ||
            jobInfo.status === JOB_STATUSES.Failure ||
            jobInfo.status === JOB_STATUSES.TimedOut) {
            this.stopInternalEventMonitoring();
            return Promise.reject(new ArcGISJobError("Job cancelled or failed.", jobInfo));
        }
        //waits to see what the status is if not immediate
        return new Promise((resolve, reject) => {
            this.startInternalEventMonitoring();
            this.once(JOB_STATUSES.Cancelled, (jobInfo) => {
                this.stopInternalEventMonitoring();
                reject(new ArcGISJobError("Job cancelled.", jobInfo));
            });
            this.once(JOB_STATUSES.TimedOut, (jobInfo) => {
                this.stopInternalEventMonitoring();
                reject(new ArcGISJobError("Job timed out.", jobInfo));
            });
            this.once(JOB_STATUSES.Failed, (jobInfo) => {
                this.stopInternalEventMonitoring();
                reject(new ArcGISJobError("Job failed.", jobInfo));
            });
            this.once(JOB_STATUSES.Success, (jobInfo) => {
                this.stopInternalEventMonitoring();
                resolve(jobInfo);
            });
        });
    }
    /**
     * Gets all the results from a successful job by ordering all the result paramUrl requests and calling each of them until all of them are complete and returns an object with all the results.
     *
     * If monitoring is disabled it will be enabled until the job classes resolves or rejects this promise.
     *
     * ```
     * Job.submitJob(options)
     *  .then((job) => {
     *    return job.getAllResults();
     *  }).then(allResults => {
     *    console.log(allResults);
     *  }).catch(e => {
     *    if(e.name === "ArcGISJobError") {
     *      console.log("Something went wrong while running the job", e.jobInfo);
     *    }
     *  })
     * ```
     *
     * Will throw a {@linkcode ArcGISJobError} if it encounters a cancelled or failure status in the job.
     *
     * @returns An object representing all the results from a job.
     */
    async getAllResults() {
        return this.waitForCompletion().then((jobInfo) => {
            const keys = Object.keys(jobInfo.results);
            const requests = keys.map((key) => {
                return request(this.jobUrl + "/" + jobInfo.results[key].paramUrl, {
                    authentication: this.authentication
                }).then((results) => {
                    return results;
                });
            });
            return Promise.all(requests).then((resultsArray) => {
                return keys.reduce((finalResults, key, index) => {
                    finalResults[keys[index]] = resultsArray[index];
                    return finalResults;
                }, {});
            });
        });
    }
    /**
     * Cancels the job request and voids the job.
     *
     * @returns An object that has job id, job status and messages array sequencing the status of the cancellation being submitted and completed.
     */
    cancelJob() {
        return request(this.jobUrl + "/cancel", {
            authentication: this.authentication,
            params: { id: this.id, returnMessages: false }
        }).then((response) => {
            this.emitter.emit("cancelled", response);
            return response;
        });
    }
    /**
     * An internal monitoring if the user specifies startMonitoring: false, we need to check the status to see when the results are returned.
     */
    startInternalEventMonitoring(pollingRate = DefaultJobOptions.pollingRate) {
        this._pollingRate = pollingRate;
        /* istanbul ignore else - if monitoring is already running do nothing */
        if (!this.isMonitoring) {
            this.setIntervalHandler = setInterval(this.executePoll, this.pollingRate);
        }
    }
    /**
     * Stops the internal monitoring once the job has been successfully completed with results.
     */
    stopInternalEventMonitoring() {
        if (this.isMonitoring && !this.didUserEnableMonitoring) {
            clearTimeout(this.setIntervalHandler);
        }
    }
    /**
     * Starts the event polling if the user enables the startMonitoring param.
     *
     * @param pollingRate Able to pass in a specific number or will default to 5000.
     */
    startEventMonitoring(pollingRate = DefaultJobOptions.pollingRate) {
        this._pollingRate = pollingRate;
        this.didUserEnableMonitoring = true;
        /* istanbul ignore else - if not monitoring do nothing */
        if (!this.isMonitoring) {
            this.setIntervalHandler = setInterval(this.executePoll, this.pollingRate);
        }
    }
    /**
     * Stops the event polling rate. This is can only be enabled if the user calls this method directly.
     */
    stopEventMonitoring() {
        /* istanbul ignore else - if not monitoring do nothing */
        if (this.isMonitoring && this.didUserEnableMonitoring) {
            clearTimeout(this.setIntervalHandler);
        }
    }
}

/**
 * Allows you to wrap individual methods with a default set of request options. This is useful to avoid setting the same option more then once and allows for interacting and setting defaults in a functional manner.
 *
 * ```js
 * import { withOptions } from "@esri/arcgis-rest-request";
 * import { queryFeatures } from '@esri/arcgis-rest-feature-service';
 *
 * const queryTrails = withOptions({
 *   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/"}, queryFeatures);
 *
 * queryTrails({
 *   where: "ELEV_FT > 1000"
 * }).then(result);
 *
 * const queryTrailsAsUser = withOptions({
 *   authentication: ArcGISIdentityManager
 * }, queryTrails);
 *
 * queryTrailsAsUser({
 *   where: "TRL_NAME LIKE '%backbone%'"
 * }).then(result);
 * ```
 *
 * @param defaultOptions The options to pass into to the `func`.
 * @param func Any function that accepts anything extending `IRequestOptions` as its last parameter.
 * @returns A copy of `func` with the `defaultOptions` passed in as defaults.
 */
function withOptions(defaultOptions, func) {
    return (...args) => {
        const options = typeof args[args.length - 1] === "object"
            ? Object.assign(Object.assign({}, defaultOptions), args.pop()) : defaultOptions;
        return func(...[...args, options]);
    };
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper that returns the appropriate portal url for a given request. `requestOptions.portal` is given
 * precedence over `authentication.portal`. If neither `portal` nor `authentication` is present,
 * `www.arcgis.com/sharing/rest` is returned.
 *
 * @param requestOptions - Request options that may have authentication manager
 * @returns Portal url to be used in API requests
 */
function getPortalUrl(requestOptions = {}) {
    // use portal in options if specified
    if (requestOptions.portal) {
        return cleanUrl(requestOptions.portal);
    }
    // if auth was passed, use that portal
    if (requestOptions.authentication &&
        typeof requestOptions.authentication !== "string") {
        // the portal url is already scrubbed in the auth package
        return requestOptions.authentication.portal;
    }
    // default to arcgis.com
    return "https://www.arcgis.com/sharing/rest";
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * `requestOptions.owner` is given priority, `requestOptions.item.owner` will be checked next. If neither are present, `authentication.getUserName()` will be used instead.
 */
function determineOwner(requestOptions) {
    if (requestOptions.owner) {
        return Promise.resolve(requestOptions.owner);
    }
    else if (requestOptions.item && requestOptions.item.owner) {
        return Promise.resolve(requestOptions.item.owner);
    }
    else if (requestOptions.authentication &&
        requestOptions.authentication.getUsername) {
        return requestOptions.authentication.getUsername();
    }
    else {
        return Promise.reject(new Error("Could not determine the owner of this item. Pass the `owner`, `item.owner`, or `authentication` option."));
    }
}
/**
 * checks if the extent is a valid BBox (2 element array of coordinate pair arrays)
 * @param extent
 * @returns
 */
function isBBox(extent) {
    return (Array.isArray(extent) &&
        Array.isArray(extent[0]) &&
        Array.isArray(extent[1]));
}
/**
 * Given a Bbox, convert it to a string. Some api endpoints expect a string
 *
 * @param {BBox} extent
 * @return {*}  {string}
 */
function bboxToString(extent) {
    return extent.join(",");
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Update an Item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm) for more information.
 *
 * ```js
 * import { updateItem } from "@esri/arcgis-rest-portal";
 *
 * updateItem({
 *   item: {
 *     id: "3ef",
 *     description: "A three hour tour"
 *   },
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that updates an item.
 */
function updateItem(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = requestOptions.folderId
            ? `${getPortalUrl(requestOptions)}/content/users/${owner}/${requestOptions.folderId}/items/${requestOptions.item.id}/update`
            : `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.item.id}/update`;
        // serialize the item into something Portal will accept
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), requestOptions.item);
        // convert extent, if present, into a string from bbox
        // processParams was previously doing this sort of work,
        // however now we need to let array of arrays through
        // Thus for extents we need to move this logic here
        if (requestOptions.params.extent && isBBox(requestOptions.params.extent)) {
            requestOptions.params.extent = bboxToString(requestOptions.params.extent);
        }
        return request(url, requestOptions);
    });
}
/**
 * Update an info file associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-info.htm) for more information.
 *
 * ```js
 * import { updateItemInfo } from "@esri/arcgis-rest-portal";
 *
 * updateItemInfo({
 *   id: '3ef',
 *   file: file,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that updates an item info file.
 */
function updateItemInfo(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/updateinfo`;
        // mix in user supplied params
        requestOptions.params = Object.assign({ folderName: requestOptions.folderName, file: requestOptions.file }, requestOptions.params);
        return request(url, requestOptions);
    });
}
/**
 * Update an info file associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-info.htm) for more information.
 *
 * ```js
 * import { updateItemResource } from "@esri/arcgis-rest-portal";
 *
 * updateItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Update a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that updates an item resource.
 */
function updateItemResource(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/updateResources`;
        // mix in user supplied params
        requestOptions.params = Object.assign({ file: requestOptions.resource, fileName: requestOptions.name, resourcesPrefix: requestOptions.prefix, text: requestOptions.content }, requestOptions.params);
        // only override the access specified previously if 'private' is passed explicitly
        if (typeof requestOptions.private !== "undefined") {
            requestOptions.params.access = requestOptions.private
                ? "private"
                : "inherit";
        }
        return request(url, requestOptions);
    });
}
/**
 * Move an item to a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/move-item.htm) for more information.
 *
 * ```js
 * import { moveItem } from "@esri/arcgis-rest-portal";
 * //
 * moveItem({
 *   itemId: "3ef",
 *   folderId: "7c5",
 *   authentication: ArcGISIdentityManager
 * })
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that resolves with owner and folder details once the move has been completed
 */
function moveItem(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.itemId}/move`;
        let folderId = requestOptions.folderId;
        if (!folderId) {
            folderId = "/";
        }
        requestOptions.params = Object.assign({ folder: folderId }, requestOptions.params);
        return request(url, requestOptions);
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Send a file or blob to an item to be stored as the `/data` resource. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm) for more information.
 *
 * ```js
 * import { addItemData } from "@esri/arcgis-rest-portal";
 *
 * addItemData({
 *   id: '3ef',
 *   data: file,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with an object reporting
 *        success/failure and echoing the item id.
 */
function addItemData(requestOptions) {
    const options = Object.assign({ item: {
            id: requestOptions.id,
            text: requestOptions.text,
            file: requestOptions.file
        } }, requestOptions);
    delete options.id;
    delete options.data;
    return updateItem(options);
}
/**
 * Add a relationship between two items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-relationship.htm) for more information.
 *
 * ```js
 * import { addItemRelationship } from "@esri/arcgis-rest-portal";
 *
 * addItemRelationship({
 *   originItemId: '3ef',
 *   destinationItemId: 'ae7',
 *   relationshipType: 'Service2Layer',
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function addItemRelationship(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/addRelationship`;
        const options = appendCustomParams(requestOptions, ["originItemId", "destinationItemId", "relationshipType"], { params: Object.assign({}, requestOptions.params) });
        return request(url, options);
    });
}
/**
 * Add a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-resources.htm) for more information.
 *
 * ```js
 * import { addItemResource } from "@esri/arcgis-rest-portal";
 *
 * // Add a file resource
 * addItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 *
 * // Add a text resource
 * addItemResource({
 *   id: '4fg',
 *   content: "Text content",
 *   name: 'bigkahuna.txt',
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function addItemResource(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/addResources`;
        requestOptions.params = Object.assign({ file: requestOptions.resource, fileName: requestOptions.name, resourcesPrefix: requestOptions.prefix, text: requestOptions.content, access: requestOptions.private ? "private" : "inherit" }, requestOptions.params);
        return request(url, requestOptions);
    });
}

/**
 * Returns a listing of the user's content. If the `username` is not supplied, it defaults to the username of the authenticated user. If `start` is not specified it defaults to the first page.
 *
 * If the `num` is not supplied it is defaulted to 10. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-content.htm) for more information.
 *
 * ```js
 * import { getUserContent } from "@esri/arcgis-rest-portal";
 *
 * getUserContent({
 *    owner: 'geemike',
 *    folderId: 'bao7',
 *    start: 1,
 *    num: 20,
 *    authentication
 * })
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise<IUserContentResponse>
 */
const getUserContent = (requestOptions) => {
    const { folderId: folder, start = 1, num = 10, authentication } = requestOptions;
    const suffix = folder ? `/${folder}` : "";
    return determineOwner(requestOptions)
        .then((owner) => `${getPortalUrl(requestOptions)}/content/users/${owner}${suffix}`)
        .then((url) => request(url, {
        httpMethod: "GET",
        authentication,
        params: {
            start,
            num
        }
    }));
};

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Create a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/create-folder.htm) for more information.
 *
 * ```js
 * import { createFolder } from "@esri/arcgis-rest-portal";
 *
 * createFolder({
 *   title: 'Map Collection',
 *   authentication: ArcGISIdentityManager
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that resolves with folder details once the folder has been created
 */
function createFolder(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const baseUrl = `${getPortalUrl(requestOptions)}/content/users/${owner}`;
        const url = `${baseUrl}/createFolder`;
        requestOptions.params = Object.assign({ title: requestOptions.title }, requestOptions.params);
        return request(url, requestOptions);
    });
}
/**
 * Create an item in a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
 *
 * ```js
 * import { createItemInFolder } from "@esri/arcgis-rest-portal";
 *
 * createItemInFolder({
 *   item: {
 *     title: "The Amazing Voyage",
 *     type: "Web Map"
 *   },
 *   folderId: 'fe8',
 *   authentication
 * })
 * ```
 *
 * @param requestOptions = Options for the request
 */
function createItemInFolder(requestOptions) {
    if (requestOptions.multipart && !requestOptions.filename) {
        return Promise.reject(new Error("The filename is required for a multipart request."));
    }
    return determineOwner(requestOptions).then((owner) => {
        const baseUrl = `${getPortalUrl(requestOptions)}/content/users/${owner}`;
        let url = `${baseUrl}/addItem`;
        if (requestOptions.folderId) {
            url = `${baseUrl}/${requestOptions.folderId}/addItem`;
        }
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), requestOptions.item);
        // convert extent, if present, into a string from bbox
        // processParams was previously doing this sort of work,
        // however now we need to let array of arrays through
        // Thus for extents we need to move this logic here
        if (requestOptions.params.extent && isBBox(requestOptions.params.extent)) {
            requestOptions.params.extent = bboxToString(requestOptions.params.extent);
        }
        // serialize the item into something Portal will accept
        const options = appendCustomParams(requestOptions, [
            "owner",
            "folderId",
            "file",
            "dataUrl",
            "text",
            "async",
            "multipart",
            "filename",
            "overwrite"
        ], {
            params: Object.assign({}, requestOptions.params)
        });
        return request(url, options);
    });
}
/**
 * Create an Item in the user's root folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
 *
 * ```js
 * import { createItem } from "@esri/arcgis-rest-portal";
 *
 * createItem({
 *   item: {
 *     title: "The Amazing Voyage",
 *     type: "Web Map"
 *   },
 *   authentication
 * })
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that creates an item.
 */
function createItem(requestOptions) {
    // delegate to createItemInFolder placing in the root of the filestore
    const options = Object.assign({ folderId: null }, requestOptions);
    return createItemInFolder(options);
}

/**
 * Exports an item from the portal. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/export-item.htm) for more information.
 *
 * ```js
 * import { exportItem } from "@esri/arcgis-rest-portal";
 *
 * exportItem({
 *   id: '3daf',
 *   owner: 'geemike',
 *   exportFormat: 'CSV',
 *   exportParameters: {
 *     layers: [
 *       { id: 0 },
 *       { id: 1, where: 'POP1999 > 100000' }
 *     ]
 *   },
 *   authentication,
 * })
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise<IExportItemResponse>
 */
const exportItem = (requestOptions) => {
    const { authentication, id: itemId, title, exportFormat, exportParameters } = requestOptions;
    return determineOwner(requestOptions)
        .then((owner) => `${getPortalUrl(requestOptions)}/content/users/${owner}/export`)
        .then((url) => request(url, {
        httpMethod: "POST",
        authentication,
        params: {
            itemId,
            title,
            exportFormat,
            exportParameters
        }
    }));
};

// eslint-disable-next-line no-control-regex
const CONTROL_CHAR_MATCHER = /[\x00-\x1F\x7F-\x9F\xA0]/g;
/**
 * Returns a new string with all control characters removed.
 *
 * Doesn't remove characters from input string.
 *
 * @param str - the string to scrub
 */
function scrubControlChars(str) {
    return str.replace(CONTROL_CHAR_MATCHER, "");
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```
 * import { getItem } from "@esri/arcgis-rest-portal";
 * //
 * getItem("ae7")
 *   .then(response);
 * // or
 * getItem("ae7", { authentication })
 *   .then(response)
 * ```
 * Get an item by id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item.htm) for more information.
 *
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the data from the response.
 */
function getItem(id, requestOptions) {
    const url = getItemBaseUrl(id, requestOptions);
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * Get the fully qualified base URL to the REST end point for an item.
 * @param id Item Id
 * @param portalUrlOrRequestOptions a portal URL or request options
 * @returns URL to the item's REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{id}`
 */
const getItemBaseUrl = (id, portalUrlOrRequestOptions) => {
    const portalUrl = typeof portalUrlOrRequestOptions === "string"
        ? portalUrlOrRequestOptions
        : getPortalUrl(portalUrlOrRequestOptions);
    return `${portalUrl}/content/items/${id}`;
};
/**
 * ```
 * import { getItemData } from "@esri/arcgis-rest-portal";
 * //
 * getItemData("ae7")
 *   .then(response)
 * // or
 * getItemData("ae7", { authentication })
 *   .then(response)
 * ```
 * Get the /data for an item. If no data exists, returns `undefined`. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item-data.htm) for more information.
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the json data for the item.
 */
function getItemData(id, requestOptions) {
    const url = `${getItemBaseUrl(id, requestOptions)}/data`;
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET", params: {} }, requestOptions);
    if (options.file) {
        options.params.f = null;
    }
    return request(url, options).catch((err) => {
        /* if the item doesn't include data, the response will be empty
           and the internal call to response.json() will fail */
        const emptyResponseErr = RegExp(/The string did not match the expected pattern|(Unexpected end of (JSON input|data at line 1 column 1))/i);
        /* istanbul ignore else */
        if (emptyResponseErr.test(err.message)) {
            return;
        }
        else
            throw err;
    });
}
/**
 * ```
 * import { getRelatedItems } from "@esri/arcgis-rest-portal";
 * //
 * getRelatedItems({
 *   id: "ae7",
 *   relationshipType: "Service2Layer" // or several ["Service2Layer", "Map2Area"]
 * })
 *   .then(response)
 * ```
 * Get the related items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/related-items.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
function getRelatedItems(requestOptions) {
    const url = `${getItemBaseUrl(requestOptions.id, requestOptions)}/relatedItems`;
    const options = Object.assign({ httpMethod: "GET", params: {
            direction: requestOptions.direction
        } }, requestOptions);
    if (typeof requestOptions.relationshipType === "string") {
        options.params.relationshipType = requestOptions.relationshipType;
    }
    else {
        options.params.relationshipTypes = requestOptions.relationshipType;
    }
    delete options.direction;
    delete options.relationshipType;
    return request(url, options);
}
/**
 * Get the resources associated with an item
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
function getItemResources(id, requestOptions) {
    const url = `${getItemBaseUrl(id, requestOptions)}/resources`;
    // Mix in num:1000 with any user supplied params
    // Key thing - we don't want to mutate the passed in requestOptions
    // as that may be used in other (subsequent) calls in the course
    // of a long promise chains
    const options = Object.assign({}, requestOptions);
    options.params = Object.assign({ num: 1000 }, options.params);
    return request(url, options);
}
/**
 * Fetches an item resource and optionally parses it to the correct format.
 *
 * Provides JSON parse error protection by sanitizing out any unescaped control characters before parsing that would otherwise cause an error to be thrown.
 *
 * ```js
 * import { getItemResource } from "@esri/arcgis-rest-portal";
 *
 * // Parses contents as blob by default
 * getItemResource("3ef", { fileName: "resource.jpg", ...})
 *  .then(resourceContents => {});
 *
 * // Can override parse method
 * getItemResource("3ef", { fileName: "resource.json", readAs: 'json', ...})
 *  .then(resourceContents => {});
 *
 * // Get the response object instead
 * getItemResource("3ef",{ rawResponse: true, fileName: "resource.json" })
 *  .then(response => {})
 * ```
 *
 * @param {string} itemId
 * @param {IGetItemResourceOptions} requestOptions
 */
function getItemResource(itemId, requestOptions) {
    const readAs = requestOptions.readAs || "blob";
    return getItemFile(itemId, `/resources/${requestOptions.fileName}`, readAs, requestOptions);
}
/**
 * Lists the groups of which the item is a part, only showing the groups that the calling user can access. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/groups.htm) for more information.
 *
 * ```js
 * import { getItemGroups } from "@esri/arcgis-rest-portal";
 *
 * getItemGroups("30e5fe3149c34df1ba922e6f5bbf808f")
 *   .then(response)
 * ```
 *
 * @param id - The Id of the item to query group association for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item groups.
 */
function getItemGroups(id, requestOptions) {
    const url = `${getItemBaseUrl(id, requestOptions)}/groups`;
    return request(url, requestOptions);
}
/**
 * Inquire about status when publishing an item, adding an item in async mode, or adding with a multipart upload. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/status.htm) for more information.
 *
 * ```js
 * import { getItemStatus } from "@esri/arcgis-rest-portal";
 *
 * getItemStatus({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param id - The Id of the item to get status for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the item status.
 */
function getItemStatus(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/status`;
        const options = appendCustomParams(requestOptions, ["jobId", "jobType"], { params: Object.assign({}, requestOptions.params) });
        return request(url, options);
    });
}
/**
 * Lists the part numbers of the file parts that have already been uploaded in a multipart file upload. This method can be used to verify the parts that have been received as well as those parts that were not received by the server. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/parts.htm) for more information.
 *
 * ```js
 * import { getItemParts } from "@esri/arcgis-rest-portal";
 *
 * getItemParts({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param id - The Id of the item to get part list.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the item part list.
 */
function getItemParts(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/parts`;
        return request(url, requestOptions);
    });
}
/**
 * ```
 * import { getItemInfo } from "@esri/arcgis-rest-portal";
 * // get the "Info Card" for the item
 * getItemInfo("ae7")
 *   .then(itemInfoXml) // XML document as a string
 * // or get the contents of a specific file
 * getItemInfo("ae7", { fileName: "form.json", readAs: "json", authentication })
 *   .then(formJson) // JSON document as JSON
 * ```
 * Get an info file for an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item-info-file.htm) for more information.
 * @param id - Item Id
 * @param requestOptions - Options for the request, including the file name which defaults to `iteminfo.xml`.
 * If the file is not a text file (XML, HTML, etc) you will need to specify the `readAs` parameter
 * @returns A Promise that will resolve with the contents of the info file for the item.
 */
function getItemInfo(id, requestOptions) {
    const { fileName = "iteminfo.xml", readAs = "text" } = requestOptions || {};
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    return getItemFile(id, `/info/${fileName}`, readAs, options);
}
/**
 * ```
 * import { getItemMetadata } from "@esri/arcgis-rest-portal";
 * // get the metadata for the item
 * getItemMetadata("ae7")
 *   .then(itemMetadataXml) // XML document as a string
 * // or with additional request options
 * getItemMetadata("ae7", { authentication })
 *   .then(itemMetadataXml) // XML document as a string
 * ```
 * Get the standard formal metadata XML file for an item (`/info/metadata/metadata.xml`)
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the contents of the metadata file for the item as a string.
 */
function getItemMetadata(id, requestOptions) {
    const options = Object.assign(Object.assign({}, requestOptions), { fileName: "metadata/metadata.xml" });
    return getItemInfo(id, options);
}
// overrides request()'s default behavior for reading the response
// which is based on `params.f` and defaults to JSON
// Also adds JSON parse error protection by sanitizing out any unescaped control characters before parsing
function getItemFile(id, 
// NOTE: fileName should include any folder/subfolders
fileName, readMethod, requestOptions) {
    const url = `${getItemBaseUrl(id, requestOptions)}${fileName}`;
    // preserve escape hatch to let the consumer read the response
    // and ensure the f param is not appended to the query string
    const options = Object.assign({ params: {} }, requestOptions);
    const justReturnResponse = options.rawResponse;
    options.rawResponse = true;
    options.params.f = null;
    return request(url, options).then((response) => {
        if (justReturnResponse) {
            return response;
        }
        return readMethod !== "json"
            ? response[readMethod]()
            : response
                .text()
                .then((text) => JSON.parse(scrubControlChars(text)));
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Protect an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/protect.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to protect an item.
 */
function protectItem(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/protect`;
        return request(url, requestOptions);
    });
}
/**
 * Unprotect an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/unprotect.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to unprotect an item.
 */
function unprotectItem(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/unprotect`;
        return request(url, requestOptions);
    });
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Fetch a group using its id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group.htm) for more information.
 *
 * ```js
 * import { getGroup } from "@esri/arcgis-rest-portal";
 * //
 * getGroup("fxb988") // id
 *   .then(response)
 * ```
 *
 * @param id - Group Id
 * @param requestOptions  - Options for the request
 * @returns  A Promise that will resolve with the data from the response.
 */
function getGroup(id, requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${id}`;
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * Gets the category schema set on a group
 *
 * @param id - Group Id
 * @param requestOptions  - Options for the request
 * @returns A promise that will resolve with JSON of group's category schema
 * @see https://developers.arcgis.com/rest/users-groups-and-items/group-category-schema.htm
 */
function getGroupCategorySchema(id, requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${id}/categorySchema`;
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * Returns the content of a Group. Since the group may contain 1000s of items
 * the requestParams allow for paging.
 * @param id - Group Id
 * @param requestOptions  - Options for the request, including paging parameters.
 * @returns  A Promise that will resolve with the content of the group.
 */
function getGroupContent(id, requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/content/groups/${id}`;
    // default to a GET request
    const options = Object.assign(Object.assign({ httpMethod: "GET" }, { params: { start: 1, num: 100 } }), requestOptions);
    // is this the most concise way to mixin with the defaults above?
    if (requestOptions && requestOptions.paging) {
        options.params = Object.assign({}, requestOptions.paging);
    }
    return request(url, options);
}
/**
 * Get the usernames of the admins and members. Does not return actual 'User' objects. Those must be
 * retrieved via separate calls to the User's API.
 * @param id - Group Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with arrays of the group admin usernames and the member usernames
 */
function getGroupUsers(id, requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${id}/users`;
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * Search the users in a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-users-list.htm) for more information.
 *
 * ```js
 * import { searchGroupUsers } from "@esri/arcgis-rest-portal";
 *
 * searchGroupUsers('abc123')
 *   .then(response)
 * ```
 *
 * @param id - The group id
 * @param searchOptions - Options for the request, including paging parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroupUsers(id, searchOptions) {
    const url = `${getPortalUrl(searchOptions)}/community/groups/${id}/userlist`;
    const options = appendCustomParams(searchOptions || {}, ["name", "num", "start", "sortField", "sortOrder", "joined", "memberType"], {
        httpMethod: "GET"
    });
    return request(url, options);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function getSharingUrl(requestOptions) {
    const username = requestOptions.authentication.username;
    const owner = requestOptions.owner || username;
    return `${getPortalUrl(requestOptions)}/content/users/${encodeURIComponent(owner)}/items/${requestOptions.id}/share`;
}
function isItemOwner(requestOptions) {
    const username = requestOptions.authentication.username;
    const owner = requestOptions.owner || username;
    return owner === username;
}
/**
 * Check it the user is a full org_admin
 * @param requestOptions
 * @returns Promise resolving in a boolean indicating if the user is an ArcGIS Organization administrator
 */
function isOrgAdmin(requestOptions) {
    const session = requestOptions.authentication;
    return session.getUser(requestOptions).then((user) => {
        return user && user.role === "org_admin" && !user.roleId;
    });
}
/**
 * Get the User Membership for a particular group. Use this if all you have is the groupId.
 * If you have the group object, check the `userMembership.memberType` property instead of calling this method.
 *
 * @param requestOptions
 * @returns A Promise that resolves with "owner" | "admin" | "member" | "nonmember"
 */
function getUserMembership(requestOptions) {
    // fetch the group...
    return getGroup(requestOptions.groupId, requestOptions)
        .then((group) => {
        return group.userMembership.memberType;
    })
        .catch(() => {
        return "none";
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Reassign an item from one user to another. Caller must be an org admin or the request will fail. `currentOwner` and `targetUsername` must be in the same organization or the request will fail
 *
 * ```js
 * import { reassignItem } from '@esri/arcgis-rest-portal';
 *
 * reassignItem({
 *   id: "abc123",
 *   currentOwner: "charles",
 *   targetUsername: "leslie",
 *   authentication
 * })
 * ```
 *
 * @param reassignOptions - Options for the request
 */
function reassignItem(reassignOptions) {
    return isOrgAdmin(reassignOptions).then((isAdmin) => {
        if (!isAdmin) {
            throw Error(`Item ${reassignOptions.id} can not be reassigned because current user is not an organization administrator.`);
        }
        // we're operating as an org-admin
        const url = `${getPortalUrl(reassignOptions)}/content/users/${reassignOptions.currentOwner}/items/${reassignOptions.id}/reassign`;
        const opts = {
            params: {
                targetUsername: reassignOptions.targetUsername,
                targetFolderName: reassignOptions.targetFolderName
            },
            authentication: reassignOptions.authentication
        };
        return request(url, opts);
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Delete an item from the portal. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-item.htm) for more information.
 *
 * ```js
 * import { removeItem } from "@esri/arcgis-rest-portal";
 *
 * removeItem({
 *   id: "3ef",
 *   authentication
 * })
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that deletes an item.
 */
function removeItem(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/delete`;
        return request(url, requestOptions);
    });
}
/**
 * Remove a relationship between two items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-relationship.htm) for more information.
 *
 * ```js
 * import { removeItemRelationship } from "@esri/arcgis-rest-portal";
 *
 * removeItemRelationship({
 *   originItemId: '3ef',
 *   destinationItemId: 'ae7',
 *   relationshipType: 'Service2Layer',
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function removeItemRelationship(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/deleteRelationship`;
        const options = appendCustomParams(requestOptions, ["originItemId", "destinationItemId", "relationshipType"], { params: Object.assign({}, requestOptions.params) });
        return request(url, options);
    });
}
/**
 * Remove a resource associated with an item
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that deletes an item resource.
 */
function removeItemResource(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/removeResources`;
        // mix in user supplied params
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), { resource: requestOptions.resource });
        // only override the deleteAll param specified previously if it is passed explicitly
        if (typeof requestOptions.deleteAll !== "undefined") {
            requestOptions.params.deleteAll = requestOptions.deleteAll;
        }
        return request(url, requestOptions);
    });
}
/**
 * Delete a non-root folder and all the items it contains. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-folder.htm) for more information.
 *
 * ```js
 * import { removeFolder } from "@esri/arcgis-rest-portal";
 *
 * removeFolder({
 *   folderId: "fe4",
 *   owner: "c@sey",
 *   authentication
 * })
 *   .then(response)
 *
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that deletes a folder
 */
function removeFolder(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${encodeURIComponent(owner)}/${requestOptions.folderId}/delete`;
        return request(url, requestOptions);
    });
}

/* Copyright (c) 2018-2021 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * `SearchQueryBuilder` can be used to construct the `q` param for {@linkcode searchItems} or {@linkcode searchGroups}.
 *
 * By chaining methods, it helps build complex search queries.
 *
 * ```js
 * const startDate = new Date("2020-01-01");
 * const endDate = new Date("2020-09-01");
 * const query = new SearchQueryBuilder()
 *  .match("Patrick")
 *  .in("owner")
 *  .and()
 *  .from(startDate)
 *  .to(endDate)
 *  .in("created")
 *  .and()
 *  .startGroup()
 *    .match("Web Mapping Application")
 *    .in("type")
 *    .or()
 *    .match("Mobile Application")
 *    .in("type")
 *    .or()
 *    .match("Application")
 *    .in("type")
 *  .endGroup()
 *  .and()
 *  .match("Demo App");
 *
 * searchItems(query).then((res) => {
 *   console.log(res.results);
 * });
 * ```
 *
 * Will search for items matching
 * ```
 * "owner: Patrick AND created:[1577836800000 TO 1598918400000] AND (type:"Web Mapping Application" OR type:"Mobile Application" OR type:Application) AND Demo App"
 * ```
 */
class SearchQueryBuilder {
    /**
     * @param q An existing query string to start building from.
     */
    constructor(q = "") {
        this.termStack = [];
        this.rangeStack = [];
        this.openGroups = 0;
        this.q = q;
    }
    /**
     * Defines strings to search for.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("My Layer")
     * ```
     *
     * @param terms strings to search for.
     */
    match(...terms) {
        this.termStack = this.termStack.concat(terms);
        return this;
    }
    /**
     * Defines fields to search in. You can pass `"*"` or call this method without arguments to search a default set of fields
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("My Layer")
     *   .in("title")
     * ```
     *
     * @param field The field to search for the previous match in.
     */
    in(field) {
        const fn = `\`in(${field ? `"${field}"` : ""})\``;
        if (!this.hasRange && !this.hasTerms) {
            warn(
            // apparently-p-rettier-ignore causes some
            `${fn} was called with no call to \`match(...)\` or \`from(...)\`/\`to(...)\`. Your query was not modified.`);
            return this;
        }
        if (field && field !== "*") {
            this.q += `${field}:`;
        }
        return this.commit();
    }
    /**
     * Starts a new search group.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .startGroup()
     *     .match("Lakes")
     *     .in("title")
     *   .endGroup()
     *   .or()
     *   .startGroup()
     *     .match("Rivers")
     *     .in("title")
     *   .endGroup()
     * ```
     */
    startGroup() {
        this.commit();
        if (this.openGroups > 0) {
            this.q += " ";
        }
        this.openGroups++;
        this.q += "(";
        return this;
    }
    /**
     * Ends a search group.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .startGroup()
     *     .match("Lakes")
     *     .in("title")
     *   .endGroup()
     *   .or()
     *   .startGroup()
     *     .match("Rivers")
     *     .in("title")
     *   .endGroup()
     * ```
     */
    endGroup() {
        if (this.openGroups <= 0) {
            warn(`\`endGroup(...)\` was called without calling \`startGroup(...)\` first. Your query was not modified.`);
            return this;
        }
        this.commit();
        this.openGroups--;
        this.q += ")";
        return this;
    }
    /**
     * Joins two sets of queries with an `AND` clause.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .and()
     *   .match("Rivers")
     *   .in("title")
     * ```
     */
    and() {
        return this.addModifier("and");
    }
    /**
     * Joins two sets of queries with an `OR` clause.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .or()
     *   .match("Rivers")
     *   .in("title")
     * ```
     */
    or() {
        return this.addModifier("or");
    }
    /**
     * Joins two sets of queries with a `NOT` clause. Another option for filtering results is the [prohibit operator '-'](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm#ESRI_SECTION1_5C6C35DB9E4A4F4492C5B937BDA2BF67).
     *
     * ```js
     * // omit results with "Rivers" in their title
     * const query = new SearchQueryBuilder()
     *   .not()
     *   .match("Rivers")
     *   .in("title")
     *
     * // equivalent
     * const query = new SearchQueryBuilder()
     *   .match("Rivers")
     *   .in("-title")
     * ```
     */
    not() {
        return this.addModifier("not");
    }
    /**
     * Begins a new range query.
     *
     * ```js
     *
     * const NEWYEARS = new Date("2020-01-01")
     * const TODAY = new Date()
     *
     * const query = new SearchQueryBuilder()
     *   .from(NEWYEARS)
     *   .to(TODAY)
     *   .in("created")
     * ```
     */
    from(term) {
        if (this.hasTerms) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            `\`from(...)\` is not allowed after \`match(...)\` try using \`.from(...).to(...).in(...)\`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date("2020-01-01").  Your query was not modified.`);
            return this;
        }
        this.rangeStack[0] = term;
        return this;
    }
    /**
     * Ends a range query.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .from(yesterdaysDate)
     *   .to(todaysDate)
     *   .in("created")
     * ```
     */
    to(term) {
        if (this.hasTerms) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            `\`to(...)\` is not allowed after \`match(...)\` try using \`.from(...).to(...).in(...)\`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date("2020-01-01"). Your query was not modified.`);
            return this;
        }
        this.rangeStack[1] = term;
        return this;
    }
    /**
     * Boosts the previous term to increase its rank in the results.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .or()
     *   .match("Rivers")
     *   .in("title")
     *   .boost(3)
     * ```
     */
    boost(num) {
        this.commit();
        this.q += `^${num}`;
        return this;
    }
    /**
     * Returns the current query string. Called internally when the request is made.
     */
    toParam() {
        this.commit();
        this.cleanup();
        return this.q;
    }
    /**
     * Returns a new instance of `SearchQueryBuilder` based on the current instance.
     */
    clone() {
        this.commit();
        this.cleanup();
        return new SearchQueryBuilder(this.q + "");
    }
    addModifier(modifier) {
        if (this.currentModifer) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            `You have called \`${this.currentModifer}()\` after \`${modifier}()\`. Your current query was not modified.`);
            return this;
        }
        this.commit();
        if (this.q === "" && modifier !== "not") {
            warn(`You have called \`${modifier}()\` without calling another method to modify your query first. Try calling \`match()\` first.`);
            return this;
        }
        this.currentModifer = modifier;
        this.q += this.q === "" ? "" : " ";
        this.q += `${modifier.toUpperCase()} `;
        return this;
    }
    hasWhiteSpace(s) {
        return /\s/g.test(s);
    }
    formatTerm(term) {
        if (term instanceof Date) {
            return term.getTime();
        }
        if (typeof term === "string" && this.hasWhiteSpace(term)) {
            return `"${term}"`;
        }
        return term;
    }
    commit() {
        this.currentModifer = undefined;
        if (this.hasRange) {
            this.q += `[${this.formatTerm(this.rangeStack[0])} TO ${this.formatTerm(this.rangeStack[1])}]`;
            this.rangeStack = [undefined, undefined];
        }
        if (this.hasTerms) {
            this.q += this.termStack
                .map((term) => {
                return this.formatTerm(term);
            })
                .join(" ");
            this.termStack = [];
        }
        return this;
    }
    get hasTerms() {
        return this.termStack.length > 0;
    }
    get hasRange() {
        return this.rangeStack.length && this.rangeStack[0] && this.rangeStack[1];
    }
    cleanup() {
        // end a group if we have started one
        if (this.openGroups > 0) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            `Automatically closing ${this.openGroups} group(s). You can use \`endGroup(...)\` to remove this warning.`);
            while (this.openGroups > 0) {
                this.q += ")";
                this.openGroups--;
            }
        }
        const oldQ = this.q;
        this.q = oldQ.replace(/( AND ?| NOT ?| OR ?)*$/, "");
        if (oldQ !== this.q) {
            warn(`\`startGroup(...)\` was called without calling \`endGroup(...)\` first. Your query was not modified.`);
        }
        // clear empty groups
        this.q = this.q.replace(/(\(\))*/, "");
    }
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function genericSearch(search, searchType) {
    let options;
    if (typeof search === "string" || search instanceof SearchQueryBuilder) {
        options = {
            httpMethod: "GET",
            params: {
                q: search
            }
        };
    }
    else {
        // searchUserAccess has one (known) valid value: "groupMember"
        options = appendCustomParams(search, [
            "q",
            "num",
            "start",
            "sortField",
            "sortOrder",
            "searchUserAccess",
            "searchUserName",
            "filter",
            "countFields",
            "countSize",
            "categories",
            "categoryFilters"
        ], {
            httpMethod: "GET"
        });
    }
    let path;
    switch (searchType) {
        case "item":
            path = "/search";
            break;
        case "group":
            path = "/community/groups";
            break;
        case "groupContent":
            // Need to have groupId property to do group contents search,
            // cso filter out all but ISearchGroupContentOptions
            if (typeof search !== "string" &&
                !(search instanceof SearchQueryBuilder) &&
                search.groupId) {
                path = `/content/groups/${search.groupId}/search`;
            }
            else {
                return Promise.reject(new Error("you must pass a `groupId` option to `searchGroupContent`"));
            }
            break;
        case "communityUser":
            path = "/community/users";
            break;
        default:
            // "users"
            path = "/portals/self/users/search";
            break;
    }
    const url = getPortalUrl(options) + path;
    // send the request
    return request(url, options).then((r) => {
        if (r.nextStart && r.nextStart !== -1) {
            r.nextPage = function () {
                let newOptions;
                if (typeof search === "string" ||
                    search instanceof SearchQueryBuilder) {
                    newOptions = {
                        q: search,
                        start: r.nextStart
                    };
                }
                else {
                    newOptions = search;
                    newOptions.start = r.nextStart;
                }
                return genericSearch(newOptions, searchType);
            };
        }
        return r;
    });
}

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Search a portal for items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/search.htm) for more information.
 *
 * ```js
 * import { searchItems } from "@esri/arcgis-rest-portal";
 *
 * searchItems('water')
 *   .then(response) // response.total => 355
 * ```
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchItems(search) {
    return genericSearch(search, "item");
}

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Add Item Part allows the caller to upload a file part when doing an add or update item operation in multipart mode. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item-part.htm) for more information.
 *
 * ```js
 * import { addItemPart } from "@esri/arcgis-rest-portal";
 *
 * addItemPart({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   file: data,
 *   partNum: 1,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add the item part status.
 */
function addItemPart(requestOptions) {
    const partNum = requestOptions.partNum;
    if (!Number.isInteger(partNum) || partNum < 1 || partNum > 10000) {
        return Promise.reject(new Error("The part number must be an integer between 1 to 10000, inclusive."));
    }
    return determineOwner(requestOptions).then((owner) => {
        // AGO adds the "partNum" parameter in the query string, not in the body
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/addPart?partNum=${partNum}`;
        const options = appendCustomParams(requestOptions, ["file"], { params: Object.assign({}, requestOptions.params) });
        return request(url, options);
    });
}
/**
 * Commit is called once all parts are uploaded during a multipart Add Item or Update Item operation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/commit.htm) for more information.
 *
 * ```js
 * import { commitItemUpload } from "@esri/arcgis-rest-portal";
 * //
 * commitItemUpload({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to get the commit result.
 */
function commitItemUpload(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/commit`;
        const options = appendCustomParams(requestOptions, [], {
            params: Object.assign(Object.assign({}, requestOptions.params), requestOptions.item)
        });
        return request(url, options);
    });
}
/**
 * Cancels a multipart upload on an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/cancel.htm) for more information.
 *
 * ```js
 * import { cancelItemUpload } from "@esri/arcgis-rest-portal";
 * //
 * cancelItemUpload({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to get the commit result.
 */
function cancelItemUpload(requestOptions) {
    return determineOwner(requestOptions).then((owner) => {
        const url = `${getPortalUrl(requestOptions)}/content/users/${owner}/items/${requestOptions.id}/cancel`;
        return request(url, requestOptions);
    });
}

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function chunk(array, size) {
    if (array.length === 0) {
        return [];
    }
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Add users to a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-users-to-group.htm) for more information.
 *
 * ```js
 * import { addGroupUsers } from "@esri/arcgis-rest-portal";
 * //
 * addGroupUsers({
 *   id: groupId,
 *   users: ["username1", "username2"],
 *   admins: ["username3"],
 *   authentication
 * })
 * .then(response);
 * ```
 *
 * @param requestOptions  - Options for the request
 * @returns A Promise
 */
function addGroupUsers(requestOptions) {
    const id = requestOptions.id;
    const url = `${getPortalUrl(requestOptions)}/community/groups/${id}/addUsers`;
    const baseOptions = Object.assign({}, requestOptions, {
        admins: undefined,
        users: undefined
    });
    const batchRequestOptions = [
        ..._prepareRequests("users", requestOptions.users, baseOptions),
        ..._prepareRequests("admins", requestOptions.admins, baseOptions)
    ];
    const promises = batchRequestOptions.map((options) => _sendSafeRequest$2(url, options));
    return Promise.all(promises).then(_consolidateRequestResults);
}
function _prepareRequests(type, usernames, baseOptions) {
    if (!usernames || usernames.length < 1) {
        return [];
    }
    // the ArcGIS REST API only allows to add no more than 25 users per request,
    // see https://developers.arcgis.com/rest/users-groups-and-items/add-users-to-group.htm
    const userChunks = chunk(usernames, 25);
    return userChunks.map((users) => _generateRequestOptions$2(type, users, baseOptions));
}
function _generateRequestOptions$2(type, usernames, baseOptions) {
    return Object.assign({}, baseOptions, {
        [type]: usernames,
        params: Object.assign(Object.assign({}, baseOptions.params), { [type]: usernames })
    });
}
// this request is safe since the request error will be handled
function _sendSafeRequest$2(url, requestOptions) {
    return request(url, requestOptions).catch((error) => {
        return {
            errors: [error]
        };
    });
}
function _consolidateRequestResults(results) {
    const notAdded = results
        .filter((result) => result.notAdded)
        .reduce((collection, result) => collection.concat(result.notAdded), []);
    const errors = results
        .filter((result) => result.errors)
        .reduce((collection, result) => collection.concat(result.errors), []);
    const consolidated = { notAdded };
    if (errors.length > 0) {
        consolidated.errors = errors;
    }
    return consolidated;
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Add users to a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/remove-users-from-group.htm) for more information.
 *
 * ```js
 * import { removeGroupUsers } from "@esri/arcgis-rest-portal";
 *
 * removeGroupUsers({
 *   id: groupId,
 *   users: ["username1", "username2"],
 *   authentication
 * })
 * .then(response);
 * ```
 *
 * @param requestOptions  - Options for the request
 * @returns A Promise
 */
function removeGroupUsers(requestOptions) {
    const { id, users: usersToRemove } = requestOptions;
    const url = `${getPortalUrl(requestOptions)}/community/groups/${id}/removeUsers`;
    const safeSend = (users) => {
        const options = Object.assign(Object.assign({}, requestOptions), { users, params: { users } });
        return request(url, options).catch((error) => ({ errors: [error] }));
    };
    // the ArcGIS REST API only allows to add no more than 25 users per request,
    // see https://developers.arcgis.com/rest/users-groups-and-items/remove-users-from-group.htm
    const promises = chunk(usersToRemove, 25).map((usersChunk) => safeSend(usersChunk));
    return Promise.all(promises).then((results) => {
        const filtered = (propName) => results
            .filter((result) => result[propName])
            .reduce((collection, result) => collection.concat(result[propName]), []);
        const errors = filtered("errors");
        const consolidated = {
            notRemoved: filtered("notRemoved")
        };
        return errors.length ? Object.assign(Object.assign({}, consolidated), { errors }) : consolidated;
    });
}

/**
 * Invites users to join a group. Operation success will be indicated by a flag on the return object. If there are any errors, they will be placed in an errors array on the return object.
 *
 * ```js
 * const authentication: IAuthenticationManager; // Typically passed into to the function
 *
 * const options: IInviteGroupUsersOptions = {
 *  id: 'group_id',
 *  users: ['ed', 'edd', 'eddy'],
 *  role: 'group-member',
 *  expiration: 20160,
 *  authentication
 * }
 *
 * const result = await inviteGroupUsers(options);
 *
 * const if_success_result_looks_like = {
 *  success: true
 * }
 *
 * const if_failure_result_looks_like = {
 *  success: false,
 *  errors: [ArcGISRequestError]
 * }
 * ```
 *
 * @param {IInviteGroupUsersOptions} options
 * @returns {Promise<IAddGroupUsersResult>}
 */
function inviteGroupUsers(options) {
    const id = options.id;
    const url = `${getPortalUrl(options)}/community/groups/${id}/invite`;
    const batches = _generateBatchRequests$1(options);
    const promises = batches.map((batch) => _sendSafeRequest$1(url, batch));
    return Promise.all(promises).then(_combineResults$1);
}
/**
 * @private
 */
function _generateBatchRequests$1(options) {
    const userBatches = chunk(options.users, 25);
    return userBatches.map((users) => _generateRequestOptions$1(users, options));
}
/**
 * @private
 */
function _generateRequestOptions$1(users, baseOptions) {
    const requestOptions = Object.assign({}, baseOptions);
    requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), { users, role: requestOptions.role, expiration: requestOptions.expiration });
    return requestOptions;
}
/**
 * @private
 */
function _sendSafeRequest$1(url, requestOptions) {
    return request(url, requestOptions).catch((error) => ({ errors: [error] }));
}
/**
 * @private
 */
function _combineResults$1(responses) {
    const success = responses.every((res) => res.success);
    const errors = responses.reduce((collection, res) => collection.concat(res.errors || []), []);
    const combined = { success };
    if (errors.length > 0) {
        combined.errors = errors;
    }
    return combined;
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Create a new Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/create-group.htm) for more information.
 *
 * ```js
 * import { createGroup } from "@esri/arcgis-rest-portal";
 *
 * createGroup({
 *   group: {
 *     title: "No Homers",
 *     access: "public"
 *   },
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * Note: The group name must be unique within the user's organization.
 * @param requestOptions  - Options for the request, including a group object
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function createGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/createGroup`;
    requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), requestOptions.group);
    return request(url, requestOptions);
}

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Create a group notification.
 *
 * ```js
 * import { createGroupNotification } from '@esri/arcgis-rest-portal';
 * // send an email to an entire group
 * createGroupNotification({
 *   authentication: ArcGISIdentityManager,
 *   subject: "hello",
 *   message: "world!",
 *   id: groupId
 * })
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function createGroupNotification(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/createNotification`;
    const options = Object.assign({ params: Object.assign({ subject: requestOptions.subject, message: requestOptions.message, users: requestOptions.users, notificationChannelType: requestOptions.notificationChannelType || "email", clientId: requestOptions.clientId, silentNotification: requestOptions.silentNotification, notifyAll: !requestOptions.users || requestOptions.users.length === 0 }, requestOptions.params) }, requestOptions);
    return request(url, options);
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Protect a group to avoid accidental deletion. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/protect-group.htm) for more information.
 *
 * ```js
 * import { protectGroup } from '@esri/arcgis-rest-portal';
 *
 * protectGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function protectGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/protect`;
    return request(url, requestOptions);
}
/**
 * Unprotect a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/unprotect-group.htm) for more information.
 *
 * ```js
 * import { unprotectGroup } from '@esri/arcgis-rest-portal';
 *
 * unprotectGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function unprotectGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/unprotect`;
    return request(url, requestOptions);
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Delete a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-group.htm) for more information.
 *
 * ```js
 * import { removeGroup } from '@esri/arcgis-rest-portal';
 * //
 * removeGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function removeGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/delete`;
    const options = Object.assign({}, requestOptions);
    return request(url, options);
}

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Search a portal for groups. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-search.htm) for more information.
 *
 * ```js
 * import { searchGroups } from "@esri/arcgis-rest-portal";
 *
 * searchGroups('water')
 *   .then(response) // response.total => 355
 * ```
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroups(search) {
    return genericSearch(search, "group");
}
/**
 * Search a portal for items in a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-content-search.htm) for more information.
 *
 * ```js
 * import { searchGroupContent } from "@esri/arcgis-rest-portal";
 *
 * searchGroupContent('water')
 *   .then(response) // response.total => 355
 * ```
 *
 * @param options - RequestOptions object amended with search parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroupContent(options) {
    return genericSearch(options, "groupContent");
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Update the properties of a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-group.htm) for more information.
 *
 * ```js
 * import { updateGroup } from '@esri/arcgis-rest-portal';
 *
 * updateGroup({
 *   group: { id: "fgr344", title: "new" }
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request, including the group
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function updateGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.group.id}/update`;
    requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), requestOptions.group);
    return request(url, requestOptions);
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Change the user membership levels of existing users in a group
 *
 * ```js
 * import { updateUserMemberships } from "@esri/arcgis-rest-portal";
 *
 * updateUserMemberships({
 *   id: groupId,
 *   admins: ["username3"],
 *   authentication
 * })
 * .then(response);
 * ```
 *
 * @param requestOptions  - Options for the request
 * @returns A Promise
 */
function updateUserMemberships(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/updateUsers`;
    const opts = {
        authentication: requestOptions.authentication,
        params: {}
    };
    // add the correct params depending on the type of membership we are changing to
    if (requestOptions.newMemberType === "admin") {
        opts.params.admins = requestOptions.users;
    }
    else {
        opts.params.users = requestOptions.users;
    }
    // make the request
    return request(url, opts);
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Make a request as the authenticated user to join a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/join-group.htm) for more information.
 *
 * ```js
 * import { joinGroup } from '@esri/arcgis-rest-portal';
 * //
 * joinGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request and the groupId.
 */
function joinGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/join`;
    return request(url, requestOptions);
}
/**
 * Make a request as the authenticated user to leave a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/leave-group.htm) for more information.
 *
 * ```js
 * import { leaveGroup } from '@esri/arcgis-rest-portal';
 *
 * leaveGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request and the groupId.
 */
function leaveGroup(requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/groups/${requestOptions.id}/leave`;
    return request(url, requestOptions);
}

/**
 * Send a notification to members of the requesting user's org. Operation success will be indicated by a flag on the return object. If there are any errors, they will be placed in an errors array on the return object
 *
 * ```js
 * const authentication: IAuthenticationManager; // Typically passed into to the function
 *
 * const options: IInviteGroupUsersOptions = {
 *  id: 'group_id',
 *  users: ['larry', 'curly', 'moe'],
 *  notificationChannelType: 'email',
 *  expiration: 20160,
 *  authentication
 * }
 *
 * const result = await createOrgNotification(options);
 *
 * const if_success_result_looks_like = {
 *  success: true
 * }
 *
 * const if_failure_result_looks_like = {
 *  success: false,
 *  errors: [ArcGISRequestError]
 * }
 * ```
 *
 * @param {ICreateOrgNotificationOptions} options
 * @returns {ICreateOrgNotificationResult}
 */
function createOrgNotification(options) {
    const url = `${getPortalUrl(options)}/portals/self/createNotification`;
    const batches = _generateBatchRequests(options);
    const promises = batches.map((batch) => _sendSafeRequest(url, batch));
    return Promise.all(promises).then(_combineResults);
}
/**
 * @private
 */
function _generateBatchRequests(options) {
    const userBatches = chunk(options.users, options.batchSize || 25);
    return userBatches.map((users) => _generateRequestOptions(users, options));
}
/**
 * @private
 */
function _generateRequestOptions(users, baseOptions) {
    const requestOptions = Object.assign({}, baseOptions);
    requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), { users, subject: baseOptions.subject, message: baseOptions.message, notificationChannelType: requestOptions.notificationChannelType });
    return requestOptions;
}
/**
 * @private
 */
function _sendSafeRequest(url, requestOptions) {
    return request(url, requestOptions).catch((error) => ({ errors: [error] }));
}
/**
 * @private
 */
function _combineResults(responses) {
    const success = responses.every((res) => res.success);
    const errors = responses.reduce((collection, res) => collection.concat(res.errors || []), []);
    const combined = { success };
    if (errors.length > 0) {
        combined.errors = errors;
    }
    return combined;
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Get information about a user. This method has proven so generically useful that you can also call {@linkcode ArcGISIdentityManager.getUser}.
 *
 * ```js
 * import { getUser } from '@esri/arcgis-rest-portal';
 * //
 * getUser("jsmith")
 *   .then(response)
 * // => { firstName: "John", lastName: "Smith",tags: ["GIS Analyst", "City of Redlands"] }
 * ```
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with metadata about the user
 */
function getUser(requestOptions) {
    let url;
    let options = { httpMethod: "GET" };
    // if a username is passed, assume ArcGIS Online
    if (typeof requestOptions === "string") {
        url = `https://www.arcgis.com/sharing/rest/community/users/${requestOptions}`;
    }
    else {
        // if an authenticated session is passed, default to that user/portal unless another username is provided manually
        const username = requestOptions.username || requestOptions.authentication.username;
        url = `${getPortalUrl(requestOptions)}/community/users/${encodeURIComponent(username)}`;
        options = Object.assign(Object.assign({}, requestOptions), options);
    }
    // send the request
    return request(url, options);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Users tag the content they publish in their portal via the add and update item calls. This resource lists all the tags used by the user along with the number of times the tags have been used. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-tags.htm) for more information.
 *
 * ```js
 * import { getUserTags } from '@esri/arcgis-rest-portal';
 *
 * getUserTags({
 *   username: "jsmith",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param IGetUserOptions - options to pass through in the request
 * @returns A Promise that will resolve with the user tag array
 */
function getUserTags(requestOptions) {
    const username = requestOptions.username || requestOptions.authentication.username;
    const url = `${getPortalUrl(requestOptions)}/community/users/${encodeURIComponent(username)}/tags`;
    // send the request
    return request(url, requestOptions);
}

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper that returns the [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm) for a given portal.
 *
 * @param session
 * @returns User url to be used in API requests.
 */
function getUserUrl(session) {
    return `${getPortalUrl(session)}/community/users/${encodeURIComponent(session.username)}`;
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Get all invitations for a user. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-invitations.htm) for more information.
 *
 * ```js
 * import { getUserInvitations } from '@esri/arcgis-rest-portal';
 *
 * getUserInvitations({ authentication })
 *   .then(response) // response.userInvitations.length => 3
 * ```
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with the user's invitations
 */
function getUserInvitations(requestOptions) {
    let options = { httpMethod: "GET" };
    const username = encodeURIComponent(requestOptions.authentication.username);
    const portalUrl = getPortalUrl(requestOptions);
    const url = `${portalUrl}/community/users/${username}/invitations`;
    options = Object.assign(Object.assign({}, requestOptions), options);
    // send the request
    return request(url, options);
}
/**
 * Get an invitation for a user by id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-invitation.htm) for more information.
 *
 * ```js
 * import { getUserInvitation } from '@esri/arcgis-rest-portal';
 * // username is inferred from ArcGISIdentityManager
 * getUserInvitation({
 *   invitationId: "3ef",
 *   authentication
 * })
 *   .then(response) // => response.accepted => true
 * ```
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with the invitation
 */
function getUserInvitation(requestOptions) {
    const username = encodeURIComponent(requestOptions.authentication.username);
    const portalUrl = getPortalUrl(requestOptions);
    const url = `${portalUrl}/community/users/${username}/invitations/${requestOptions.invitationId}`;
    let options = { httpMethod: "GET" };
    options = Object.assign(Object.assign({}, requestOptions), options);
    // send the request
    return request(url, options);
}
/**
 * Accept an invitation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/accept-invitation.htm) for more information.
 *
 * ```js
 * import { acceptInvitation } from '@esri/arcgis-rest-portal';
 *
 * acceptInvitation({
 *   invitationId: "3ef",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function acceptInvitation(requestOptions) {
    const username = encodeURIComponent(requestOptions.authentication.username);
    const portalUrl = getPortalUrl(requestOptions);
    const url = `${portalUrl}/community/users/${username}/invitations/${requestOptions.invitationId}/accept`;
    const options = Object.assign({}, requestOptions);
    return request(url, options);
}
/**
 * Decline an invitation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/decline-invitation.htm) for more information.
 *
 * ```js
 * import { declineInvitation } from '@esri/arcgis-rest-portal';
 * // username is inferred from ArcGISIdentityManager
 * declineInvitation({
 *   invitationId: "3ef",
 *   authentication
 * })
 *   .then(response)
 * ```
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function declineInvitation(requestOptions) {
    const username = encodeURIComponent(requestOptions.authentication.username);
    const portalUrl = getPortalUrl(requestOptions);
    const url = `${portalUrl}/community/users/${username}/invitations/${requestOptions.invitationId}/decline`;
    const options = Object.assign({}, requestOptions);
    return request(url, options);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Get notifications for a user.
 *
 * ```js
 * import { getUserNotifications } from '@esri/arcgis-rest-portal';
 *
 * getUserNotifications({ authentication })
 *   .then(results) // results.notifications.length) => 3
 * ```
 *
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with the user's notifications
 */
function getUserNotifications(requestOptions) {
    let options = { httpMethod: "GET" };
    const username = encodeURIComponent(requestOptions.authentication.username);
    const portalUrl = getPortalUrl(requestOptions);
    const url = `${portalUrl}/community/users/${username}/notifications`;
    options = Object.assign(Object.assign({}, requestOptions), options);
    // send the request
    return request(url, options);
}
/**
 * Delete a notification.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function removeNotification(requestOptions) {
    const username = encodeURIComponent(requestOptions.authentication.username);
    const portalUrl = getPortalUrl(requestOptions);
    const url = `${portalUrl}/community/users/${username}/notifications/${requestOptions.id}/delete`;
    return request(url, requestOptions);
}

/**
 * Search a portal for users.
 *
 * ```js
 * import { searchUsers } from "@esri/arcgis-rest-portal";
 * //
 * searchUsers({ q: 'tommy', authentication })
 *   .then(response) // response.total => 355
 * ```
 *
 * @param search - A RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchUsers(search) {
    return genericSearch(search, "user");
}
/**
 * ```js
 * import { searchCommunityUsers } from "@esri/arcgis-rest-portal";
 * //
 * searchCommunityUsers({ q: 'tommy', authentication })
 *   .then(response) // response.total => 355
 * ```
 * Search all portals for users.
 *
 * @param search - A RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchCommunityUsers(search) {
    return genericSearch(search, "communityUser");
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Update a user profile. The username will be extracted from the authentication session unless it is provided explicitly. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-user.htm) for more information.
 *
 * ```js
 * import { updateUser } from '@esri/arcgis-rest-portal';
 *
 * // any user can update their own profile
 * updateUser({
 *   authentication,
 *   user: { description: "better than the last one" }
 * })
 *   .then(response)
 *
 * // org administrators must declare the username that will be updated explicitly
 * updateUser({
 *   authentication,
 *   user: { username: "c@sey", description: "" }
 * })
 *   .then(response)
 * // => { "success": true, "username": "c@sey" }
 * ```
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with metadata about the user
 */
function updateUser(requestOptions) {
    // default to the authenticated username unless another username is provided manually
    const username = requestOptions.user.username || requestOptions.authentication.username;
    const updateUrl = `${getPortalUrl(requestOptions)}/community/users/${encodeURIComponent(username)}/update`;
    // mixin custom params and the user information, then drop the user info
    requestOptions.params = Object.assign(Object.assign({}, requestOptions.user), requestOptions.params);
    delete requestOptions.user;
    // send the request
    return request(updateUrl, requestOptions);
}

/* Copyright (c) 2023 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Fetches the properties for a user
 * @param username The user whose properties to fetch
 * @param requestOptions An IUserRequestOptions object
 * @returns a promise that resolves an IUserProperties object
 */
async function getUserProperties(username, requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/users/${encodeURIComponent(username)}/properties`;
    const response = await request(url, Object.assign({ httpMethod: "GET" }, requestOptions));
    if (!response.properties.mapViewer) {
        response.properties.mapViewer = "modern";
    }
    return response.properties;
}

/* Copyright (c) 2023 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Updates the properties for a user
 * @param username The user whose properties to update
 * @param properties IUserProperties object with properties to update
 * @param requestOptions An IUserRequestOptions object
 * @returns a promise that resolves to { success: boolean }
 */
async function setUserProperties(username, properties, requestOptions) {
    const url = `${getPortalUrl(requestOptions)}/community/users/${encodeURIComponent(username)}/setProperties`;
    const options = Object.assign({ httpMethod: "POST", params: { properties } }, requestOptions);
    try {
        const response = await request(url, options);
        if (!response.success) {
            throw new Error("Success was false");
        }
        return response;
    }
    catch (e) {
        const error = e;
        throw new Error(`Failed to set user properties: ${error.message}`);
    }
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Change who is able to access an item.
 *
 * ```js
 * import { setItemAccess } from "@esri/arcgis-rest-portal";
 *
 * setItemAccess({
 *   id: "abc123",
 *   access: "public", // 'org' || 'private'
 *   authentication: session
 * })
 * ```
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function setItemAccess(requestOptions) {
    const url = getSharingUrl(requestOptions);
    if (isItemOwner(requestOptions)) {
        // if the user owns the item, proceed
        return updateItemAccess(url, requestOptions);
    }
    else {
        // otherwise we need to check to see if they are an organization admin
        return isOrgAdmin(requestOptions).then((admin) => {
            if (admin) {
                return updateItemAccess(url, requestOptions);
            }
            else {
                // if neither, updating the sharing isnt possible
                throw Error(`This item can not be shared by ${requestOptions.authentication.username}. They are neither the item owner nor an organization admin.`);
            }
        });
    }
}
function updateItemAccess(url, requestOptions) {
    requestOptions.params = Object.assign({ org: false, everyone: false }, requestOptions.params);
    // if the user wants to make the item private, it needs to be unshared from any/all groups as well
    if (requestOptions.access === "private") {
        requestOptions.params.groups = " ";
    }
    if (requestOptions.access === "org") {
        requestOptions.params.org = true;
    }
    // if sharing with everyone, share with the entire organization as well.
    if (requestOptions.access === "public") {
        // this is how the ArcGIS Online Home app sets public access
        // setting org = true instead of account = true will cancel out all sharing
        requestOptions.params.account = true;
        requestOptions.params.everyone = true;
    }
    return request(url, requestOptions);
}

/**
 * Find out whether or not an item is already shared with a group.
 *
 * ```js
 * import { isItemSharedWithGroup } from "@esri/arcgis-rest-portal";
 *
 * isItemSharedWithGroup({
 *   groupId: 'bc3,
 *   itemId: 'f56,
 *   authentication
 * })
 * .then(isShared => {})
 * ```
 
 *
 * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
 * @returns Promise that will resolve with true/false
 */
function isItemSharedWithGroup(requestOptions) {
    const searchOpts = {
        q: `id: ${requestOptions.id} AND group: ${requestOptions.groupId}`,
        start: 1,
        num: 10,
        sortField: "title",
        authentication: requestOptions.authentication,
        httpMethod: "POST"
    };
    return searchItems(searchOpts).then((searchResponse) => {
        let result = false;
        if (searchResponse.total > 0) {
            result = searchResponse.results.some((itm) => {
                return itm.id === requestOptions.id;
            });
            return result;
        }
    });
}

/**
 * Share an item with a group, either as an [item owner](https://developers.arcgis.com/rest/users-groups-and-items/share-item-as-item-owner-.htm), [group admin](https://developers.arcgis.com/rest/users-groups-and-items/share-item-as-group-admin-.htm) or organization admin.
 *
 * Sharing the item as an Admin will use the `/content/users/:ownername/items/:itemid/share` end-point
 *
 * ```js
 * import { shareItemWithGroup } from '@esri/arcgis-rest-portal';
 *
 * shareItemWithGroup({
 *   id: "abc123",
 *   groupId: "xyz987",
 *   owner: "some-owner",
 *   authentication
 * })
 * ```
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function shareItemWithGroup(requestOptions) {
    return isItemSharedWithGroup(requestOptions)
        .then((isShared) => {
        if (isShared) {
            // already shared, exit early with success response
            return {
                itemId: requestOptions.id,
                shortcut: true,
                notSharedWith: []
            };
        }
        const { authentication: { username }, owner, confirmItemControl } = requestOptions;
        const itemOwner = owner || username;
        // non-item owner
        if (itemOwner !== username) {
            // need to track if the user is an admin
            let isAdmin = false;
            // track if the admin & owner are in the same org
            let isCrossOrgSharing = false;
            // next perform any necessary membership adjustments for
            // current user and/or item owner
            return Promise.all([
                getUser({
                    username,
                    authentication: requestOptions.authentication
                }),
                getUser({
                    username: itemOwner,
                    authentication: requestOptions.authentication
                }),
                getUserMembership(requestOptions)
            ])
                .then(([currentUser, ownerUser, membership]) => {
                const isSharedEditingGroup = !!confirmItemControl;
                isAdmin = currentUser.role === "org_admin" && !currentUser.roleId;
                isCrossOrgSharing = currentUser.orgId !== ownerUser.orgId;
                return getMembershipAdjustments(currentUser, isSharedEditingGroup, membership, isAdmin, ownerUser, requestOptions);
            })
                .then((membershipAdjustments) => {
                const [{ revert } = {
                    promise: Promise.resolve({ notAdded: [] }),
                    revert: (sharingResults) => {
                        return Promise.resolve(sharingResults);
                    }
                }] = membershipAdjustments;
                // perform all membership adjustments
                return Promise.all(membershipAdjustments.map(({ promise }) => promise))
                    .then(() => {
                    // then attempt the share
                    return shareToGroup(requestOptions, isAdmin, isCrossOrgSharing);
                })
                    .then((sharingResults) => {
                    // lastly, if the admin user was added to the group,
                    // remove them from the group. this is a no-op that
                    // immediately resolves the sharingResults when no
                    // membership adjustment was needed
                    return revert(sharingResults);
                });
            });
        }
        // item owner, let it call through
        return shareToGroup(requestOptions);
    })
        .then((sharingResponse) => {
        if (sharingResponse.notSharedWith.length) {
            throw Error(`Item ${requestOptions.id} could not be shared to group ${requestOptions.groupId}.`);
        }
        else {
            // all is well
            return sharingResponse;
        }
    });
}
function getMembershipAdjustments(currentUser, isSharedEditingGroup, membership, isAdmin, ownerUser, requestOptions) {
    const membershipGuarantees = [];
    if (requestOptions.groupId !== currentUser.favGroupId) {
        if (isSharedEditingGroup) {
            if (!isAdmin) {
                // abort and reject promise
                throw Error(`This item can not be shared to shared editing group ${requestOptions.groupId} by ${currentUser.username} as they not the item owner or org admin.`);
            }
            membershipGuarantees.push(
            // admin user must be a group member to share, should be reverted afterwards
            ensureMembership(currentUser, currentUser, false, `Error adding ${currentUser.username} as member to edit group ${requestOptions.groupId}. Consequently item ${requestOptions.id} was not shared to the group.`, requestOptions), 
            // item owner must be a group admin
            ensureMembership(currentUser, ownerUser, true, membership === "none"
                ? `Error adding user ${ownerUser.username} to edit group ${requestOptions.groupId}. Consequently item ${requestOptions.id} was not shared to the group.`
                : `Error promoting user ${ownerUser.username} to admin in edit group ${requestOptions.groupId}. Consequently item ${requestOptions.id} was not shared to the group.`, requestOptions));
        }
        else if (isAdmin) {
            // admin user must be a group member to share, should be reverted afterwards
            membershipGuarantees.push(ensureMembership(currentUser, currentUser, false, `Error adding ${currentUser.username} as member to view group ${requestOptions.groupId}. Consequently item ${requestOptions.id} was not shared to the group.`, requestOptions));
        }
        else if (membership === "none") {
            // all other non-item owners must be a group member
            throw new Error(`This item can not be shared by ${currentUser.username} as they are not a member of the specified group ${requestOptions.groupId}.`);
        }
    }
    return membershipGuarantees;
}
function shareToGroup(requestOptions, isAdmin = false, isCrossOrgSharing = false) {
    const username = requestOptions.authentication.username;
    const itemOwner = requestOptions.owner || username;
    // decide what url to use
    // default to the non-owner url...
    let url = `${getPortalUrl(requestOptions)}/content/items/${requestOptions.id}/share`;
    // but if they are the owner, or org_admin, use this route
    // Note: When using this end-point as an admin, apparently the admin does not need to be a member of the group (the itemOwner does)
    // Note: Admin's can only use this route when the item is in the same org they are admin for
    if (itemOwner === username || (isAdmin && !isCrossOrgSharing)) {
        url = `${getPortalUrl(requestOptions)}/content/users/${itemOwner}/items/${requestOptions.id}/share`;
    }
    // now its finally time to do the sharing
    requestOptions.params = {
        groups: requestOptions.groupId,
        confirmItemControl: requestOptions.confirmItemControl
    };
    return request(url, requestOptions);
}
function ensureMembership(currentUser, ownerUser, shouldPromote, errorMessage, requestOptions) {
    const ownerGroups = ownerUser.groups || [];
    const group = ownerGroups.find((g) => {
        return g.id === requestOptions.groupId;
    });
    // if they are in different orgs, eject
    if (currentUser.orgId !== ownerUser.orgId) {
        throw Error(`User ${ownerUser.username} is not a member of the same org as ${currentUser.username}. Consequently they can not be added added to group ${requestOptions.groupId} nor can item ${requestOptions.id} be shared to the group.`);
    }
    // if owner is not a member, and has 512 groups
    if (!group && ownerGroups.length > 511) {
        throw Error(`User ${ownerUser.username} already has 512 groups, and can not be added to group ${requestOptions.groupId}. Consequently item ${requestOptions.id} can not be shared to the group.`);
    }
    let promise;
    let revert;
    // decide if we need to add them or upgrade them
    if (group) {
        // they are in the group...
        // check member type
        if (shouldPromote && group.userMembership.memberType === "member") {
            // promote them
            promise = updateUserMemberships({
                id: requestOptions.groupId,
                users: [ownerUser.username],
                newMemberType: "admin",
                authentication: requestOptions.authentication
            })
                .then((results) => {
                // convert the result into the right type
                const notAdded = results.results.reduce((acc, entry) => {
                    if (!entry.success) {
                        acc.push(entry.username);
                    }
                    return acc;
                }, []);
                // and return it
                return Promise.resolve({ notAdded });
            })
                .catch(() => ({ notAdded: [ownerUser.username] }));
            revert = (sharingResults) => updateUserMemberships({
                id: requestOptions.groupId,
                users: [ownerUser.username],
                newMemberType: "member",
                authentication: requestOptions.authentication
            })
                .then(() => sharingResults)
                .catch(() => sharingResults);
        }
        else {
            // they are already an admin in the group
            // return the same response the API would if we added them
            promise = Promise.resolve({ notAdded: [] });
            revert = (sharingResults) => Promise.resolve(sharingResults);
        }
    }
    else {
        // attempt to add user to group
        const userType = shouldPromote ? "admins" : "users";
        // can't currently determine if the group is within the admin's
        // org without performing a search, so attempt to add and handle
        // the api error
        promise = addGroupUsers({
            id: requestOptions.groupId,
            [userType]: [ownerUser.username],
            authentication: requestOptions.authentication
        })
            .then((results) => {
            // results.errors includes an ArcGISAuthError when the group
            // is in a different org, but notAdded is empty, throw here
            // to normalize the results in below catch
            if (results.errors && results.errors.length) {
                throw results.errors[0];
            }
            return results;
        })
            .catch(() => ({ notAdded: [ownerUser.username] }));
        revert = (sharingResults) => {
            return removeGroupUsers({
                id: requestOptions.groupId,
                users: [ownerUser.username],
                authentication: requestOptions.authentication
            }).then(() => {
                // always resolves, suppress any resolved errors
                return sharingResults;
            });
        };
    }
    return {
        promise: promise.then((membershipResponse) => {
            if (membershipResponse.notAdded.length) {
                throw new Error(errorMessage);
            }
            return membershipResponse;
        }),
        revert
    };
}

/**
 * Stop sharing an item with a group, either as an
 * [item owner](https://developers.arcgis.com/rest/users-groups-and-items/unshare-item-as-item-owner-.htm),
 * [group admin](https://developers.arcgis.com/rest/users-groups-and-items/unshare-item-as-group-admin-.htm) or
 * organization admin.
 *
 * ```js
 * import { unshareItemWithGroup } from '@esri/arcgis-rest-portal';
 *
 * unshareItemWithGroup({
 *   id: "abc123",
 *   groupId: "xyz987",
 *   owner: "some-owner",
 *   authentication: session
 * })
 * ```
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function unshareItemWithGroup(requestOptions) {
    return isItemSharedWithGroup(requestOptions).then((isShared) => {
        // not shared
        if (!isShared) {
            // exit early with success response
            return Promise.resolve({
                itemId: requestOptions.id,
                shortcut: true,
                notUnsharedFrom: []
            });
        }
        const { authentication: { username }, owner } = requestOptions;
        // next check if the user is a member of the group
        return Promise.all([
            getUserMembership(requestOptions),
            getUser({
                username,
                authentication: requestOptions.authentication
            })
        ])
            .then(([membership, currentUser]) => {
            const itemOwner = owner || username;
            const isItemOwner = itemOwner === username;
            const isAdmin = currentUser.role === "org_admin" && !currentUser.roleId;
            if (!isItemOwner &&
                !isAdmin &&
                ["admin", "owner"].indexOf(membership) < 0) {
                // abort and reject promise
                throw Error(`This item can not be unshared from group ${requestOptions.groupId} by ${username} as they not the item owner, an org admin, group admin or group owner.`);
            }
            // let the sharing call go
            return unshareFromGroup(requestOptions);
        })
            .then((sharingResponse) => {
            if (sharingResponse.notUnsharedFrom.length) {
                throw Error(`Item ${requestOptions.id} could not be unshared to group ${requestOptions.groupId}`);
            }
            else {
                // all is well
                return sharingResponse;
            }
        });
    });
}
function unshareFromGroup(requestOptions) {
    const username = requestOptions.authentication.username;
    const itemOwner = requestOptions.owner || username;
    // decide what url to use
    // default to the non-owner url...
    let url = `${getPortalUrl(requestOptions)}/content/items/${requestOptions.id}/unshare`;
    // but if they are the owner, we use a different path...
    if (itemOwner === username) {
        url = `${getPortalUrl(requestOptions)}/content/users/${itemOwner}/items/${requestOptions.id}/unshare`;
    }
    // now its finally time to do the sharing
    requestOptions.params = {
        groups: requestOptions.groupId
    };
    return request(url, requestOptions);
}

/* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Determine if a specific service name is available in the current user's organization
 *
 * @export
 * @param {string} name
 * @param {ArcGISIdentityManager} session
 * @return {*}  {Promise<IServiceNameAvailable>}
 */
function isServiceNameAvailable(name, type, session) {
    const url = `${session.portal}/portals/self/isServiceNameAvailable`;
    return request(url, {
        params: {
            name,
            type
        },
        httpMethod: "GET",
        authentication: session
    });
}

/* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Given a starting name, return a service name that is unique within
 * the current users organization
 *
 * @export
 * @param {string} name
 * @param {ArcGISIdentityManager} session
 * @param {number} step
 * @return {*}  {Promise<string>}
 */
function getUniqueServiceName(name, type, session, step) {
    let nameToCheck = name;
    if (step) {
        nameToCheck = `${name}_${step}`;
    }
    return isServiceNameAvailable(nameToCheck, type, session).then((response) => {
        if (response.available) {
            return nameToCheck;
        }
        else {
            step = step + 1;
            return getUniqueServiceName(name, type, session, step);
        }
    });
}

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Get the portal
 * @param requestOptions
 */
function getSelf(requestOptions) {
    // just delegate to getPortal w/o an id
    return getPortal(null, requestOptions);
}
/**
 * Fetch information about the specified portal by id. If no id is passed, portals/self will be called.
 *
 * If you intend to request a portal by id and it is different from the portal specified by options.authentication, you must also pass options.portal.
 *
 *  ```js
 * import { getPortal } from "@esri/arcgis-rest-portal";
 * //
 * getPortal()
 * getPortal("fe8")
 * getPortal(null, { portal: "https://custom.maps.arcgis.com/sharing/rest/" })
 * ```
 *
 * @param id
 * @param requestOptions
 */
function getPortal(id, requestOptions) {
    // construct the search url
    const idOrSelf = id ? id : "self";
    const url = `${getPortalUrl(requestOptions)}/portals/${idOrSelf}`;
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    // send the request
    return request(url, options);
}

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Fetch the settings for the current portal by id. If no id is passed, portals/self/settings will be called
 *
 * ```js
 * import { getPortalSettings } from "@esri/arcgis-rest-portal";
 *
 * getPortalSettings()
 * getPortalSettings("fe8")
 * getPortalSettings(null, { portal: "https://custom.maps.arcgis.com/sharing/rest/" })
 * ```
 *
 * @param id
 * @param requestOptions
 */
function getPortalSettings(id, requestOptions) {
    // construct the search url
    const idOrSelf = id ? id : "self";
    const url = `${getPortalUrl(requestOptions)}/portals/${idOrSelf}/settings`;
    // default to a GET request
    const options = Object.assign({ httpMethod: "GET" }, requestOptions);
    // send the request
    return request(url, options);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

export { updateUserMemberships as $, ArcGISAuthError as A, searchUsers as B, createItem as C, removeItem as D, unprotectItem as E, shareItemWithGroup as F, unshareItemWithGroup as G, addItemPart as H, commitItemUpload as I, cancelItemUpload as J, getItemStatus as K, setItemAccess as L, getRelatedItems as M, NODEJS_DEFAULT_REFERER_HEADER as N, protectItem as O, removeItemResource as P, getItemResource as Q, createGroup as R, SearchQueryBuilder as S, protectGroup as T, getUserUrl as U, joinGroup as V, leaveGroup as W, updateGroup as X, getGroup as Y, getGroupUsers as Z, removeGroupUsers as _, getPortalUrl as a, getSelf as b, cleanUrl as c, decodeQueryString as d, encodeQueryString as e, getUser as f, getItemData as g, appendCustomParams as h, getPortal as i, getItemMetadata as j, getItemGroups as k, getItem as l, addItemResource as m, getItemResources as n, unprotectGroup as o, removeGroup as p, ArcGISRequestError as q, request as r, createOrgNotification as s, addGroupUsers as t, updateItem as u, inviteGroupUsers as v, searchGroupContent as w, searchGroupUsers as x, searchItems as y, searchGroups as z };

//# sourceMappingURL=index-5c48e1ee.js.map