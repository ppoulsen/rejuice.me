const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

// The menu is stored as an html string on a JS function call
// Looks like this:
// menuApi.defaultApiCallResponseHandler('htmlStringWithMenuInfo', 'jsonStringWithLocationInfo');
function extractMenuXmlFromJsString(jsString) {
  // At the moment, we can just use the index of ' characters
  const startIndex = jsString.indexOf('\'') + 1;
  const endIndex = jsString.indexOf('\'', startIndex);
  const xmlString = jsString.substring(startIndex, endIndex);
  return xmlString;
}

function parseEntitiesInSection($, $section, sectionId) {
  const entities = [];
  const $menuItems = $section.find('menuItem');
  $menuItems.each((i, el) => {
    const $el = $(el);
    const entity = {};
    entity.sectionId = sectionId;
    entity.id = $el.children('item_id').first().text();
    entity.name = $el.children('item_title').first().text();
    entity.description = $el.children('item_description').first().text();
    entity.index = parseInt($el.children('itemIndex').first().text(), 10);
    entities.push(entity);
  });
  return entities;
}

function parseMenuXml(xmlString) {
  const flattenedMenuData = {
    sections: [],
    entities: [],
  };
  const $ = cheerio.load(xmlString, {
    xmlMode: true,
    decodeEntities: true,
  });
  const $sections = $('section');
  $sections.each((i, el) => {
    const $el = $(el);
    const section = {};
    section.id = $el.children('section_id').first().text();
    section.name = $el.children('section_name').first().text();
    section.description = $el.children('section_desc').first().text();
    section.index = parseInt($el.children('sectionIndex').first().text(), 10);
    const entities = parseEntitiesInSection($, $el, section.id);
    entities.forEach(e => flattenedMenuData.entities.push(e));
    flattenedMenuData.sections.push(section);
  });
  return flattenedMenuData;
}

function writeObjectToFile(data) {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile('menu.json', jsonString, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

const request = new Promise((resolve, reject) => {
  https.get('https://menus.singleplatform.co/storefront/menus/juice-stop-15.js', res => {
    if (res.statusCode !== 200) {
      reject(new Error('Request failed with status code: ' + res.statusCode));
    }

    let rawData = '';
    res.on('data', d => rawData += d);
    res.on('end', () => resolve(rawData));
  }).on('error', e => reject(e));
});

request
  .then(extractMenuXmlFromJsString)
  .then(parseMenuXml)
  .then(writeObjectToFile)
  .catch(e => console.error(e));
