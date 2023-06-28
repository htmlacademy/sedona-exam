module.exports = {
  "id": "sedona form",
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
      "label": "index check required field",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      showSelectors: ["input[required]"],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "index check required field outline",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      selectors: ["form"],
      selectorExpansion: true,
      onReadyScript: "highlight-required.js",
    },
    {
      "label": "index form send",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      clickSelector: "button[type='submit']",
      "viewports": [
        {
          "label": "desktop",
          "width": 800,
          "height": 600,
        },
      ],
      postInteractionWait: 1000,
    },
    {
      "label": "catalog check required field",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      showSelectors: ["input[required]"],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "catalog check required field outline",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      selectors: ["form"],
      selectorExpansion: true,
      onReadyScript: "highlight-required.js",
    },
    {
      "label": "catalog form send",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      clickSelector: "button[type='submit']",
      "viewports": [
        {
          "label": "desktop",
          "width": 800,
          "height": 600,
        },
      ],
      postInteractionWait: 1000,
    },
    {
      "label": "modal check required field",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      showSelectors: ["input[required]"],
      selectors: ['[data-test="modal"]'],
      hideSelectors: ["body > *"],
      requireSameDimensions: false,
    },
    {
      "label": "modal check required field outline",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      selectors: ['[data-test="modal"]'],
      selectorExpansion: true,
      onReadyScript: "highlight-required.js",
    },
    {
      "label": "modal form send",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      clickSelector: "[data-test='modal'] button[type='submit']",
      "viewports": [
        {
          "label": "desktop",
          "width": 800,
          "height": 600,
        },
      ],
      postInteractionWait: 1000,
    },
  ],
  fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-form",
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
