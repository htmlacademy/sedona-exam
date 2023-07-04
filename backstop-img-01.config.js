module.exports = {
  "id": "sedona img",
  "viewports": [
    {
      "label": "desktop",
      "width": 1280,
      "height": 800,
    },
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "usePreciseMatching": true
  },
  "onReadyScript": "onReady.js",
  "scenarios": [
    {
      "label": "index bg colors",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      onReadyScript: "hide-bg.js",
      requireSameDimensions: false,
    },
    {
      "label": "catalog bg colors",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      onReadyScript: "hide-bg.js",
      requireSameDimensions: false,
    },
    {
      "label": "index img",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      hideSelectors: ["body > *"],
      showSelectors: ["img", "svg"],
      requireSameDimensions: false,
    },
    {
      "label": "catalog img",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      hideSelectors: ["body > *"],
      showSelectors: ["img", "svg"],
      requireSameDimensions: false,
    },
  ],
  fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/img-01",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": { "waitUntil": ["load", "networkidle0"], timeout: 10000 },
  },
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
