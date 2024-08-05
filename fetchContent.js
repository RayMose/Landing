const contentful = require('contentful');
const config = require('./contentful-config.js');

const client = contentful.createClient({
  space: config.spaceId,
  accessToken: config.accessToken
});

async function fetchContent(contentType) {
  try {
    const entries = await client.getEntries({
      content_type: contentType
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching content:', error);
  }
}

module.exports = fetchContent;