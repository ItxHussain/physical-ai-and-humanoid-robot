---
sidebar_position: 99
---

# AI Assistant Chatbot

The Physical AI & Humanoid Robot book includes an integrated AI assistant chatbot that allows you to ask questions about the book content and get relevant answers based on the documentation.

## Using the Chatbot

1. Look for the floating "AI Assistant" button in the bottom-right corner of any page
2. Click the button to open the chat interface
3. Type your question about ROS 2, Digital Twins, NVIDIA Isaac, VLA systems, or humanoid robotics
4. The chatbot will search the book content and provide relevant answers

## How It Works

The chatbot uses a Retrieval-Augmented Generation (RAG) system that:

- Contains pre-indexed content from all book modules
- Searches for relevant sections based on your query
- Provides answers with source information
- Understands technical concepts related to humanoid robotics

## Supported Topics

The chatbot can answer questions about:

- **Module 1: ROS 2** - Middleware, nodes, topics, services, and robot control
- **Module 2: Digital Twin** - Simulation, Gazebo, Unity, sensor modeling
- **Module 3: NVIDIA Isaac** - AI processing, Isaac Sim, navigation systems
- **Module 4: VLA Systems** - Vision-Language-Action, voice interfaces, cognitive planning
- Integration and practical applications of Physical AI systems

## Technical Implementation

The chatbot is implemented using:

- React components integrated into the Docusaurus theme
- Browser-compatible search algorithms
- Pre-processed book content for fast retrieval
- Responsive design that works on all devices

## Customization

To customize the chatbot for your own documentation:

1. Update the content in `src/components/Chatbot/RagService.js`
2. Modify the styling in `src/components/Chatbot/chatbot.css`
3. Adjust the search algorithm in the `search` method
4. Update the response generation in the `generateResponse` method

## Troubleshooting

If the chatbot doesn't appear:

1. Make sure JavaScript is enabled in your browser
2. Clear your browser cache and reload the page
3. Check browser console for any error messages
4. Ensure you're using a modern, supported browser