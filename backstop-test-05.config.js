/*

Удаляем все стили, кроме базовых
визуально сравниваем параметры шрифтов

*/

const indexSections = ['header', 'advantages', 'service', 'search', 'subscribe', 'footer'];
const catalogSections = ['header', 'filter', 'catalog', 'subscribe', 'footer'];
module.exports = {
  "id": "sedona test-05",
  "viewports": [
    {
      "label": "desktop",
      "width": 1280,
      "height": 800,
    },
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": false,
    "usePreciseMatching": false,
    "scaleToSameSize": true,
  },
  "onReadyScript": "onReady.js",
  "scenarios": [
    ...indexSections.map((section) => ({
      "label": `index ${section} TEST-05. Шрифты.`,
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      selectors: [`[data-test="${section}"]`],
      onReadyScript: "textStylesOnly.js",
      misMatchThreshold: 1,
    })),
    ...catalogSections.map((section) => ({
      "label": `catalog ${section} TEST-05. Шрифты.`,
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      selectors: [`[data-test="${section}"]`],
      onReadyScript: "textStylesOnly.js",
      misMatchThreshold: 1,
    })),
    {
      "label": "modal TEST-05. Шрифты",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      selectors: [`[data-test="modal"]`],
      onReadyScript: "textStylesOnly.js",
      misMatchThreshold: 1,
    },
  ],
  fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-05",
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
