module.exports = {
  "id": "sedona html-03",
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
      "label": "catalog links",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      showSelectors: ["a"],
      hideSelectors: ["body"],
      requireSameDimensions: false,
    },
    {
      "label": "catalog buttons",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      showSelectors: ["button"],
      hideSelectors: ["body"],
      requireSameDimensions: false,
    },
    {
      "label": "index links",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      showSelectors: ["a"],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "index buttons",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      showSelectors: ["button"],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "modal buttons",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      showSelectors: ["[data-test=modal] button"],
      hideSelectors: ["body > *"],
      selectors: ['[data-test="modal"]'],
      requireSameDimensions: false,
    },
  ],
  fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/html-03",
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
