# SourceCustomParams Extension

A customizable parameter management extension for SillyTavern, enabling special parameter configurations for different chat message sources.

## Key Features

- Customizable message parameter configurations
- Dynamic parameter application based on message position and role
- Browser local storage for user preferences
- Intuitive UI control panel

## Currently Supported Parameters

### Prefix Parameter
- **Applicable Scenario**: Last assistant message
- **Compatible Sources**: OpenAI/Deepseek APIs
- **Effect**: Adds prefix identifier to AI responses
- **Activation Conditions**:
  - Message role: assistant
  - Positioned at end of message list
  - Active when using OpenAI-Compatible/Deepseek interfaces

## Installation

1. Place the extension folder in SillyTavern's `public/extensions` directory
2. Refresh browser page to load extension
3. Enable desired parameters in settings panel

## Usage Instructions

1. Open extension settings panel
2. Check parameters to enable
3. Configurations auto-save to local storage

## Development Info

- Version: 1.0.0
- Author: 巡夜子Yokuminto
