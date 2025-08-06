# AI Chatbot

A modern, responsive chatbot application built with React. This chatbot provides a clean and intuitive interface for conversational AI interactions.

## Features

- 🎨 Modern and responsive UI design
- 💬 Real-time message display
- ⌨️ Typing indicators
- 📱 Mobile-friendly interface
- 🎯 Clean component architecture
- ⚡ Fast and lightweight

## Project Structure

```
chatbot/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # App header with status
│   │   ├── ChatContainer.js # Main chat interface
│   │   ├── MessageList.js  # Message list container
│   │   ├── Message.js      # Individual message component
│   │   ├── MessageInput.js # Message input form
│   │   └── TypingIndicator.js # Typing animation
│   ├── styles/            # CSS stylesheets
│   │   ├── index.css      # Global styles
│   │   ├── App.css        # App component styles
│   │   ├── Header.css     # Header styles
│   │   ├── ChatContainer.css # Chat container styles
│   │   ├── MessageList.css # Message list styles
│   │   ├── Message.css    # Message styles
│   │   ├── MessageInput.css # Input styles
│   │   └── TypingIndicator.css # Typing indicator styles
│   ├── utils/             # Utility functions
│   │   └── dateUtils.js   # Date formatting utilities
│   ├── App.js             # Main App component
│   └── index.js           # Application entry point
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Adding AI Integration

To connect this chatbot to an actual AI service, modify the `handleSendMessage` function in `src/App.js`:

```javascript
const handleSendMessage = async (messageText) => {
  // Add your AI API call here
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: messageText })
  });
  
  const data = await response.json();
  // Handle the AI response
};
```

### Styling

All styles are located in the `src/styles/` directory. The design uses a modern gradient theme with:
- Primary colors: Purple gradient (#667eea to #764ba2)
- Background: Light gray (#f5f5f5)
- Message bubbles: White with subtle shadows

### Components

Each component is self-contained with its own CSS file:
- **Header**: Displays app title and online status
- **ChatContainer**: Main chat interface with message area and input
- **MessageList**: Renders all messages
- **Message**: Individual message bubble with timestamp
- **MessageInput**: Text input with send button
- **TypingIndicator**: Animated typing dots

## Browser Support

This chatbot supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
