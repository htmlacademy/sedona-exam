const indexSections = ['header', 'main', 'advantages', 'service', 'search', 'subscribe', 'footer'];
const catalogSections = ['header', 'main', 'filter', 'catalog', 'subscribe', 'footer'];
module.exports = {
  "id": "sedona test-06",
  "viewports": [
    {
      "label": "desktop",
      "width": 1280,
      "height": 800,
    },
  ],
  "onReadyScript": "onReady.js",
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "usePreciseMatching": false
  },
  "scenarios": [
    {
      "label": "index TEST-06. PP.",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: 3,
      requireSameDimensions: false,
    },
    ...[...indexSections, 'hero'].map((section) => ({
      "label": `index ${section} TEST-06. PP.`,
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      selectors: [`[data-test="${section}"]`],
      misMatchThreshold: 3,
      requireSameDimensions: true,
    })),
    {
      "label": "catalog TEST-06. PP.",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      misMatchThreshold: 3,
      requireSameDimensions: false,
    },
    ...catalogSections.map((section) => ({
      "label": `catalog ${section} TEST-06. PP.`,
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      selectors: [`[data-test="${section}"]`],
      misMatchThreshold: 3,
      requireSameDimensions: true,
    })),
    {
      "label": "modal TEST-06. PP.",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      misMatchThreshold: 3,
      requireSameDimensions: false,
    },
    {
      "label": "modal TEST-06. PP.",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      selectors: [`[data-test="modal"]`],
      misMatchThreshold: 3,
      requireSameDimensions: false,
    },
  ],
  fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-06",
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
