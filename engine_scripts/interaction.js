module.exports = async (page, scenario, vp, isReference) => {
  console.log('SCENARIO > ' + scenario.label);
  await page.waitForFunction(() => {
    return document.fonts.ready.then(() => {
      console.log('Fonts loaded');
      return true;
    });
  });
  if (scenario.content) {
    const [elementHandle] = await page.$x(`${scenario.ancestor ? `//${scenario.ancestor}`:''}//*[text()='${scenario.content}']`);
    if (!elementHandle) {
      throw new Error('Element not found with text "' + scenario.content + '"');
    }
    const selector = await page.evaluate((element) => {
      const closest = element.closest('a, button, label, select');
      if (!closest) {
        return null;
      }
      closest.dataset.testText = 'test'
      return closest.tagName + '[data-test-text="test"]' + '.' + Array.from(closest.classList).join('.')
    }, elementHandle)
    if (!selector) {
      throw new Error('Selector not found for text "' + scenario.content + '"');
    }

    scenario.selectors = [selector]
    if (scenario.hoverSelectors || scenario.hoverSelector) {
      scenario.hoverSelectors = [selector]
    }
    if (scenario.clickSelectors || scenario.clickSelector) {
      scenario.clickSelectors = [selector]
    }
    if (scenario.activeSelectors || scenario.activeSelector) {
      scenario.activeSelectors = [selector]
    }
    if (scenario.focusSelectors || scenario.focusSelector) {
      scenario.focusSelectors = [selector]
    }
    if (scenario.disableSelectors || scenario.disableSelector) {
      scenario.disableSelectors = [selector]
    }
  }
  await require('./clickAndHoverHelper')(page, scenario);
};
