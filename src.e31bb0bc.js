// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\open-sans-v18-latin_cyrillic-600.eot":[["open-sans-v18-latin_cyrillic-600.237f3b26.eot","fonts/open-sans-v18-latin_cyrillic-600.eot"],"fonts/open-sans-v18-latin_cyrillic-600.eot"],"./..\\fonts\\open-sans-v18-latin_cyrillic-600.woff2":[["open-sans-v18-latin_cyrillic-600.1a056976.woff2","fonts/open-sans-v18-latin_cyrillic-600.woff2"],"fonts/open-sans-v18-latin_cyrillic-600.woff2"],"./..\\fonts\\open-sans-v18-latin_cyrillic-600.woff":[["open-sans-v18-latin_cyrillic-600.7c9ee288.woff","fonts/open-sans-v18-latin_cyrillic-600.woff"],"fonts/open-sans-v18-latin_cyrillic-600.woff"],"./..\\fonts\\open-sans-v18-latin_cyrillic-600.ttf":[["open-sans-v18-latin_cyrillic-600.a2c8fe10.ttf","fonts/open-sans-v18-latin_cyrillic-600.ttf"],"fonts/open-sans-v18-latin_cyrillic-600.ttf"],"./..\\fonts\\open-sans-v18-latin_cyrillic-600.svg":[["open-sans-v18-latin_cyrillic-600.cfe65727.svg","fonts/open-sans-v18-latin_cyrillic-600.svg"],"fonts/open-sans-v18-latin_cyrillic-600.svg"],"./..\\fonts\\dm_sans_bold.eot":[["dm_sans_bold.fa474c1c.eot","fonts/dm_sans_bold.eot"],"fonts/dm_sans_bold.eot"],"./..\\fonts\\dm_sans_bold.woff2":[["dm_sans_bold.2f27f177.woff2","fonts/dm_sans_bold.woff2"],"fonts/dm_sans_bold.woff2"],"./..\\fonts\\dm_sans_bold.woff":[["dm_sans_bold.962598e5.woff","fonts/dm_sans_bold.woff"],"fonts/dm_sans_bold.woff"],"./..\\fonts\\dm_sans_bold.ttf":[["dm_sans_bold.e0758dbd.ttf","fonts/dm_sans_bold.ttf"],"fonts/dm_sans_bold.ttf"],"./..\\fonts\\dm_sans_bold.svg":[["dm_sans_bold.0db1130c.svg","fonts/dm_sans_bold.svg"],"fonts/dm_sans_bold.svg"],"./..\\fonts\\dm_sans_medium.eot":[["dm_sans_medium.f152d5ec.eot","fonts/dm_sans_medium.eot"],"fonts/dm_sans_medium.eot"],"./..\\fonts\\dm_sans_medium.woff2":[["dm_sans_medium.83c59010.woff2","fonts/dm_sans_medium.woff2"],"fonts/dm_sans_medium.woff2"],"./..\\fonts\\dm_sans_medium.woff":[["dm_sans_medium.593f5f17.woff","fonts/dm_sans_medium.woff"],"fonts/dm_sans_medium.woff"],"./..\\fonts\\dm_sans_medium.ttf":[["dm_sans_medium.dd2219e5.ttf","fonts/dm_sans_medium.ttf"],"fonts/dm_sans_medium.ttf"],"./..\\fonts\\dm_sans_medium.svg":[["dm_sans_medium.f3400b94.svg","fonts/dm_sans_medium.svg"],"fonts/dm_sans_medium.svg"],"./..\\fonts\\dm_sans_regular.eot":[["dm_sans_regular.26982021.eot","fonts/dm_sans_regular.eot"],"fonts/dm_sans_regular.eot"],"./..\\fonts\\dm_sans_regular.woff2":[["dm_sans_regular.8c7ddbca.woff2","fonts/dm_sans_regular.woff2"],"fonts/dm_sans_regular.woff2"],"./..\\fonts\\dm_sans_regular.woff":[["dm_sans_regular.700d5762.woff","fonts/dm_sans_regular.woff"],"fonts/dm_sans_regular.woff"],"./..\\fonts\\dm_sans_regular.ttf":[["dm_sans_regular.800e9eac.ttf","fonts/dm_sans_regular.ttf"],"fonts/dm_sans_regular.ttf"],"./..\\fonts\\dm_sans_regular.svg":[["dm_sans_regular.3011bfa4.svg","fonts/dm_sans_regular.svg"],"fonts/dm_sans_regular.svg"],"./..\\fonts\\titan-one-v8-latin-regular.eot":[["titan-one-v8-latin-regular.5ecfba8a.eot","fonts/titan-one-v8-latin-regular.eot"],"fonts/titan-one-v8-latin-regular.eot"],"./..\\fonts\\titan-one-v8-latin-regular.woff2":[["titan-one-v8-latin-regular.c7773417.woff2","fonts/titan-one-v8-latin-regular.woff2"],"fonts/titan-one-v8-latin-regular.woff2"],"./..\\fonts\\titan-one-v8-latin-regular.woff":[["titan-one-v8-latin-regular.7f3e05d4.woff","fonts/titan-one-v8-latin-regular.woff"],"fonts/titan-one-v8-latin-regular.woff"],"./..\\fonts\\titan-one-v8-latin-regular.ttf":[["titan-one-v8-latin-regular.289eb43c.ttf","fonts/titan-one-v8-latin-regular.ttf"],"fonts/titan-one-v8-latin-regular.ttf"],"./..\\fonts\\titan-one-v8-latin-regular.svg":[["titan-one-v8-latin-regular.6dce54aa.svg","fonts/titan-one-v8-latin-regular.svg"],"fonts/titan-one-v8-latin-regular.svg"],"./..\\images\\svg\\check-off.svg":[["check-off.28005c2f.svg","images/svg/check-off.svg"],"images/svg/check-off.svg"],"./..\\images\\svg\\check-on.svg":[["check-on.705cf04d.svg","images/svg/check-on.svg"],"images/svg/check-on.svg"],"./..\\images\\4-about\\mobi\\milk-320-1x.png":[["milk-320-1x.25bdb0b6.png","images/4-about/mobi/milk-320-1x.png"],"images/4-about/mobi/milk-320-1x.png"],"./..\\images\\4-about\\mobi\\milk-320-2x.png":[["milk-320-2x.ac62b252.png","images/4-about/mobi/milk-320-2x.png"],"images/4-about/mobi/milk-320-2x.png"],"./..\\images\\4-about\\desktop\\milk-1200-1x.png":[["milk-1200-1x.63a62e10.png","images/4-about/desktop/milk-1200-1x.png"],"images/4-about/desktop/milk-1200-1x.png"],"./..\\images\\4-about\\desktop\\milk-1200-2x.png":[["milk-1200-2x.09286131.png","images/4-about/desktop/milk-1200-2x.png"],"images/4-about/desktop/milk-1200-2x.png"],"./..\\images\\4-about\\mobi\\cow-320-1x.png":[["cow-320-1x.83b36de5.png","images/4-about/mobi/cow-320-1x.png"],"images/4-about/mobi/cow-320-1x.png"],"./..\\images\\4-about\\mobi\\cow-320-2x.png":[["cow-320-2x.f36a04a6.png","images/4-about/mobi/cow-320-2x.png"],"images/4-about/mobi/cow-320-2x.png"],"./..\\images\\4-about\\tablet\\cow-768-1x.png":[["cow-768-1x.5b8d9831.png","images/4-about/tablet/cow-768-1x.png"],"images/4-about/tablet/cow-768-1x.png"],"./..\\images\\4-about\\tablet\\cow-768-2x.png":[["cow-768-2x.462d1b1d.png","images/4-about/tablet/cow-768-2x.png"],"images/4-about/tablet/cow-768-2x.png"],"./..\\images\\4-about\\desktop\\cow-1200-1x.png":[["cow-1200-1x.98ef13e5.png","images/4-about/desktop/cow-1200-1x.png"],"images/4-about/desktop/cow-1200-1x.png"],"./..\\images\\5-advantages\\advantages-1-1x.png":[["advantages-1-1x.ef3daa70.png","images/5-advantages/advantages-1-1x.png"],"images/5-advantages/advantages-1-1x.png"],"./..\\images\\5-advantages\\advantages-2-1x.png":[["advantages-2-1x.d36760c3.png","images/5-advantages/advantages-2-1x.png"],"images/5-advantages/advantages-2-1x.png"],"./..\\images\\5-advantages\\advantages-3-1x.png":[["advantages-3-1x.41a45b1a.png","images/5-advantages/advantages-3-1x.png"],"images/5-advantages/advantages-3-1x.png"],"./..\\images\\5-advantages\\advantages-1@2x.png":[["advantages-1@2x.d2d31541.png","images/5-advantages/advantages-1@2x.png"],"images/5-advantages/advantages-1@2x.png"],"./..\\images\\5-advantages\\advantages-2@2x.png":[["advantages-2@2x.112f695b.png","images/5-advantages/advantages-2@2x.png"],"images/5-advantages/advantages-2@2x.png"],"./..\\images\\5-advantages\\advantages-3@2x.png":[["advantages-3@2x.715b5bb2.png","images/5-advantages/advantages-3@2x.png"],"images/5-advantages/advantages-3@2x.png"],"./..\\images\\7-testimonials\\home.svg":[["home.5629eea4.svg","images/7-testimonials/home.svg"],"images/7-testimonials/home.svg"],"./..\\images\\7-testimonials\\points.svg":[["points.54b42476.svg","images/7-testimonials/points.svg"],"images/7-testimonials/points.svg"],"./..\\images\\7-testimonials\\quotes.png":[["quotes.fe188379.png","images/7-testimonials/quotes.png"],"images/7-testimonials/quotes.png"],"./..\\images\\svg\\bgi-locations.svg":[["bgi-locations.1b9c1857.svg","images/svg/bgi-locations.svg"],"images/svg/bgi-locations.svg"],"./..\\images\\products\\points.svg":[["points.e1508b16.svg","images/products/points.svg"],"images/products/points.svg"],"./..\\images\\products\\product1_mobile.png":[["product1_mobile.16cd2865.png","images/products/product1_mobile.png"],"images/products/product1_mobile.png"],"./..\\images\\products\\product1_mobile.webp":[["product1_mobile.e44e0e16.webp","images/products/product1_mobile.webp"],"images/products/product1_mobile.webp"],"./..\\images\\products\\product1_mobile@2x.png":[["product1_mobile@2x.e8e87d6c.png","images/products/product1_mobile@2x.png"],"images/products/product1_mobile@2x.png"],"./..\\images\\products\\product1_mobile@2x.webp":[["product1_mobile@2x.dc2779e8.webp","images/products/product1_mobile@2x.webp"],"images/products/product1_mobile@2x.webp"],"./..\\images\\products\\product1_tablet.png":[["product1_tablet.66897462.png","images/products/product1_tablet.png"],"images/products/product1_tablet.png"],"./..\\images\\products\\product1_tablet.webp":[["product1_tablet.d1dd9adb.webp","images/products/product1_tablet.webp"],"images/products/product1_tablet.webp"],"./..\\images\\products\\product1_tablet@2x.png":[["product1_tablet@2x.23c9fa6a.png","images/products/product1_tablet@2x.png"],"images/products/product1_tablet@2x.png"],"./..\\images\\products\\product1_tablet@2x.webp":[["product1_tablet@2x.6adccf85.webp","images/products/product1_tablet@2x.webp"],"images/products/product1_tablet@2x.webp"],"./..\\images\\products\\product1_desktop.png":[["product1_desktop.3926ec8c.png","images/products/product1_desktop.png"],"images/products/product1_desktop.png"],"./..\\images\\products\\product1_desktop.webp":[["product1_desktop.fa80c54f.webp","images/products/product1_desktop.webp"],"images/products/product1_desktop.webp"],"./..\\images\\products\\product1_desktop@2x.png":[["product1_desktop@2x.2a54b30c.png","images/products/product1_desktop@2x.png"],"images/products/product1_desktop@2x.png"],"./..\\images\\products\\product1_desktop@2x.webp":[["product1_desktop@2x.8b0b7b55.webp","images/products/product1_desktop@2x.webp"],"images/products/product1_desktop@2x.webp"],"./..\\images\\products\\product2_mobile.png":[["product2_mobile.83184f4e.png","images/products/product2_mobile.png"],"images/products/product2_mobile.png"],"./..\\images\\products\\product2_mobile.webp":[["product2_mobile.dbc41f32.webp","images/products/product2_mobile.webp"],"images/products/product2_mobile.webp"],"./..\\images\\products\\product2_mobile@2x.png":[["product2_mobile@2x.a43eab58.png","images/products/product2_mobile@2x.png"],"images/products/product2_mobile@2x.png"],"./..\\images\\products\\product2_mobile@2x.webp":[["product2_mobile@2x.60640b06.webp","images/products/product2_mobile@2x.webp"],"images/products/product2_mobile@2x.webp"],"./..\\images\\products\\product2_tablet.png":[["product2_tablet.b69c73b2.png","images/products/product2_tablet.png"],"images/products/product2_tablet.png"],"./..\\images\\products\\product2_tablet.webp":[["product2_tablet.8808d9c8.webp","images/products/product2_tablet.webp"],"images/products/product2_tablet.webp"],"./..\\images\\products\\product2_tablet@2x.png":[["product2_tablet@2x.3595d1f9.png","images/products/product2_tablet@2x.png"],"images/products/product2_tablet@2x.png"],"./..\\images\\products\\product2_tablet@2x.webp":[["product2_tablet@2x.a101b5cf.webp","images/products/product2_tablet@2x.webp"],"images/products/product2_tablet@2x.webp"],"./..\\images\\products\\product2_desktop.png":[["product2_desktop.7c286e33.png","images/products/product2_desktop.png"],"images/products/product2_desktop.png"],"./..\\images\\products\\product2_desktop.webp":[["product2_desktop.df65c2bd.webp","images/products/product2_desktop.webp"],"images/products/product2_desktop.webp"],"./..\\images\\products\\product2_desktop@2x.png":[["product2_desktop@2x.2589c631.png","images/products/product2_desktop@2x.png"],"images/products/product2_desktop@2x.png"],"./..\\images\\products\\product2_desktop@2x.webp":[["product2_desktop@2x.1e7c7305.webp","images/products/product2_desktop@2x.webp"],"images/products/product2_desktop@2x.webp"],"./..\\images\\products\\product3_mobile.webp":[["product3_mobile.f6fbb50f.webp","images/products/product3_mobile.webp"],"images/products/product3_mobile.webp"],"./..\\images\\products\\product3_mobile.png":[["product3_mobile.63e88f6f.png","images/products/product3_mobile.png"],"images/products/product3_mobile.png"],"./..\\images\\products\\product3_mobile@2x.webp":[["product3_mobile@2x.b87d3c1e.webp","images/products/product3_mobile@2x.webp"],"images/products/product3_mobile@2x.webp"],"./..\\images\\products\\product3_tablet.webp":[["product3_tablet.55af321c.webp","images/products/product3_tablet.webp"],"images/products/product3_tablet.webp"],"./..\\images\\products\\product3_tablet.png":[["product3_tablet.cdbff254.png","images/products/product3_tablet.png"],"images/products/product3_tablet.png"],"./..\\images\\products\\product3_tablet@2x.webp":[["product3_tablet@2x.eacb8964.webp","images/products/product3_tablet@2x.webp"],"images/products/product3_tablet@2x.webp"],"./..\\images\\products\\product3_desktop.webp":[["product3_desktop.4d414e67.webp","images/products/product3_desktop.webp"],"images/products/product3_desktop.webp"],"./..\\images\\products\\product3_desktop.png":[["product3_desktop.a599d0bf.png","images/products/product3_desktop.png"],"images/products/product3_desktop.png"],"./..\\images\\products\\product3_desktop@2x.webp":[["product3_desktop@2x.30070d96.webp","images/products/product3_desktop@2x.webp"],"images/products/product3_desktop@2x.webp"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58459" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map