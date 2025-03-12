# Node.js Express API with CI/CD

A simple Node.js Express API that demonstrates CI/CD using GitHub Actions.

## Features

- Express.js API with a "Hello, World!" endpoint
- Automated testing using Jest and Supertest
- CI/CD pipeline with GitHub Actions
- Support for Node.js 16.x and 18.x

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   
For development with auto-reload:
```bash
npm run dev
```

## Testing

Run the tests:
```bash
npm test
```

## CI/CD

The project includes a GitHub Actions workflow that:
- Runs on push to main branch and pull requests
- Tests the application on Node.js 16.x and 18.x
- Installs dependencies and runs the test suite

## API Endpoints

- GET `/`: Returns a JSON response with "Hello, World!" message 