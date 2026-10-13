# Demo Workflow

This folder is a sanitized, reduced version of the real workflow used in the main project.

The goal is to keep the useful pattern intact while hiding all real company-specific secrets, credentials, and production URLs.

## What is included

- 1 realistic Copilot agent that recreates the issue-to-PR workflow
- 1 skill that explains how to follow the workflow
- a minimal MCP configuration that shows how the system connects to Jira, Confluence, Playwright, and Cycode

## Redaction policy

This demo uses placeholder values only:

- `DEMO_JIRA_TOKEN`
- `DEMO_CONFLUENCE_TOKEN`
- `DEMO_FIGMA_API_KEY`
- `DEMO_CYCODE_CLIENT_ID`
- `DEMO_CYCODE_CLIENT_SECRET`

No real tokens, secrets, or company hosts are committed here.

## Structure

```text
demo/
├── README.md
├── .vscode/
│   ├── mcp.json
│   ├── jira-mcp-server.js
│   ├── confluence-mcp-server.js
│   └── cycode-mcp-server.js
├── .github/
│   ├── agents/
│   │   └── demo-bot.agent.md
│   └── skills/
│       └── demo-skill/
│           └── SKILL.md
```

## Workflow represented here

1. Intake
2. Jira discovery
3. Figma / design discovery
4. Planning
5. Implementation
6. Review and fix loop
7. Testing
8. Validation and security scanning
9. PR finalization

## MCP setup

The demo keeps the MCP layer intentionally visible, but the configuration is stripped to placeholders and example hosts:

- Jira: `https://jira.example.com`
- Confluence: `https://confluence.example.com`
- Cycode: `https://api.example.com`

This preserves the architecture without exposing any actual environment-specific data.
