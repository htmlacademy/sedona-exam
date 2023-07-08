module.exports = {
  "id": "sedona FF",
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
  "scenarios": [
    {
      "label": "index TEST-01.",
      "url": "./project/index.html",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: .1,
      requireSameDimension: false
    },
    {
      "label": "catalog TEST-01.",
      "url": "./project/catalog.html",
      "referenceUrl": "./reference/catalog.html",
      misMatchThreshold: .1,
      requireSameDimension: false
    },
    {
      "label": "modal TEST-01.",
      "url": "./project/modal.html",
      "referenceUrl": "./reference/modal.html",
      misMatchThreshold: .1,
      requireSameDimension: false
    },
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-ff",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
  },
  "report": ["browser"],
  "engine": "playwright",
  "engineOptions": {
    "browser": "firefox",
  },
  "debug": false,
  "debugWindow": false
}
