#!/usr/bin/env node

const fs = require('fs');

const CYCODE_API_URL = process.env.CYCODE_API_URL || 'https://api.example.com';
const CYCODE_CLIENT_ID = process.env.CYCODE_CLIENT_ID || process.env.DEMO_CYCODE_CLIENT_ID;
const CYCODE_CLIENT_SECRET = process.env.CYCODE_CLIENT_SECRET || process.env.DEMO_CYCODE_CLIENT_SECRET;

if (!CYCODE_CLIENT_ID || !CYCODE_CLIENT_SECRET) {
  console.error('Missing Cycode demo credentials');
  process.exit(1);
}

const server = {
  name: 'cycode-demo',
  version: '1.0.0',
  tools: [
    {
      name: 'scan_changed_files',
      description: 'Run a demo scan summary for changed files.',
      execute: async () => ({
        status: 'passed',
        summary: 'No findings in demo mode',
        apiUrl: CYCODE_API_URL
      })
    }
  ]
};

console.log(JSON.stringify({ status: 'ready', server }, null, 2));
