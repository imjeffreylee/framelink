---
name: figma_component
description: "Use this skill whenever asked to create a UI component, build a frontend element, or implement a design from a Figma link. It provides instructions on using the Framelink Figma MCP to extract design data."
---

# Figma Component Implementation Guide

When asked to create a component from a Figma link, follow these steps exactly:

## 1. Fetch Design Data
- ALWAYS begin by using your available `get_figma_data` MCP tool.
- Pass the Figma URL provided by the user into the tool to extract the design tokens, layout structure, and styling.

## 2. Analyze the Data
- Review the colors, typography, padding, margins, and auto-layout rules returned by the MCP.
- Ignore absolute positioning if the layout can be natively achieved with standard CSS Flexbox or Grid.

## 3. Generate the Component
- Write clean, modern code based on the current project's framework and 3-rd party libraries (e.g., React & MUI).
- Translate Figma's auto-layout properties into standard CSS Flexbox.
- **Crucial:** Do not use Figma's default generic layer names (like `frame-123`). Infer the context of the UI element and use semantic, descriptive class names or variable names.

## 4. Output
Provide the complete, functional component code to the user.
