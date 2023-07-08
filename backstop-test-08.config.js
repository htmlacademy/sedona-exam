/*
проверяем размеры элементов при взаимодействии
если элемент меняет размер - он появится на скриншоте
 */
module.exports = {
  "id": "sedona test-08",
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
      "label": "catalog check hover size",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      onReadyScript: "markup-interaction-hover.js",
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "catalog check active size",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      onReadyScript: "markup-interaction-active.js",
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "index check hover size",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      onReadyScript: "markup-interaction-hover.js",
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "index check active size",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      onReadyScript: "markup-interaction-active.js",
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "modal check hover size",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      onReadyScript: "markup-interaction-hover.js",
      selectors: ['[data-test="modal"]'],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "modal check active size",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      onReadyScript: "markup-interaction-active.js",
      selectors: ['[data-test="modal"]'],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
  ],
  fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-08",
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
