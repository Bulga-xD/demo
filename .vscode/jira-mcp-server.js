#!/usr/bin/env node

const fs = require('fs');

const JIRA_HOST = process.env.JIRA_HOST || 'https://jira.example.com';
const JIRA_TOKEN = process.env.JIRA_API_TOKEN || process.env.DEMO_JIRA_TOKEN;

if (!JIRA_TOKEN) {
  console.error('Missing JIRA_API_TOKEN / DEMO_JIRA_TOKEN');
  process.exit(1);
}

const server = {
  name: 'jira-demo',
  version: '1.0.0',
  tools: [
    {
      name: 'fetch_issue',
      description: 'Fetch a Jira issue using a demo token.',
      execute: async ({ issueId }) => ({
        issueId,
        summary: 'Demo issue summary',
        status: 'To Do',
        url: `${JIRA_HOST}/browse/${issueId}`
      })
    }
  ]
};

console.log(JSON.stringify({ status: 'ready', server }, null, 2));
