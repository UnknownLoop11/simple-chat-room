
# Chat Room Application

A real-time chat application built with Node.js, Express, Socket.io, and MongoDB. Users can join the chat, send messages, and view the chat history.

**Live URL:** https://simple-chat-room-mecy.onrender.com

## Features

- Real-time messaging
- User-friendly interface
- Message history stored in MongoDB

## Technologies

- Node.js
- Express
- Socket.io
- MongoDB
- Tailwind CSS (for styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-room-app.git
   cd chat-room-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your MongoDB URI:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open `http://localhost:5000` in your browser to access the chat.

## Deployment

To deploy on Render:

1. Sign up for a Render account.
2. Create a new Web Service linked to your GitHub repository.
3. Set the build command to `npm install` and start command to `node server.js`.
4. Add your `MONGO_URI` in Render's environment variables.
5. Deploy the service.

## Contributing

Feel free to contribute by submitting issues or pull requests!

## License

This project is licensed under the MIT License.

---

Enjoy chatting!
