#!/usr/bin/env node

const CONFLUENCE_HOST = process.env.CONFLUENCE_HOST || 'https://confluence.example.com';
const CONFLUENCE_TOKEN = process.env.CONFLUENCE_API_TOKEN || process.env.DEMO_CONFLUENCE_TOKEN;

if (!CONFLUENCE_TOKEN) {
  console.error('Missing CONFLUENCE_API_TOKEN / DEMO_CONFLUENCE_TOKEN');
  process.exit(1);
}

const server = {
  name: 'confluence-demo',
  version: '1.0.0',
  tools: [
    {
      name: 'fetch_page',
      description: 'Fetch a Confluence page using a demo token.',
      execute: async ({ pageId }) => ({
        pageId,
        title: 'Demo page',
        url: `${CONFLUENCE_HOST}/wiki/spaces/DEMO/pages/${pageId}`
      })
    }
  ]
};

console.log(JSON.stringify({ status: 'ready', server }, null, 2));
