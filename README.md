# My Email Server

This is a Node.js email server built with Express. It provides an API to send and receive emails using the SendGrid service.

## Prerequisites

To run this email server, you'll need the following:

- Node.js (version X.X.X)
- npm (version X.X.X)
- SendGrid API key (sign up for a free account at https://sendgrid.com)

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>

2. npm install

3. Configure SendGrid API key:
Replace YOUR_SENDGRID_API_KEY in the config.js file with your own SendGrid API key.

4. Start the server:The server will start running on http://localhost:3001.

- API Endpoints
- Send Email
    - URL: /sendEmail
    - Method: POST
    - Request Body:
    - {
      - "to": "recipient@example.com",
      - "subject": "Email subject",
      - "body": "Email body"
      }
  - Response:
      - Success: Status code 200 with the message "Email sent successfully."
      - Failure: Status code 500 with an error message.
    
- Contributing
    -Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

- License
    - This project is licensed under the MIT License.