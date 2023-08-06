# Hello-Next

A Next.js application showcasing tests, scenarios, and overviews for devbench and testbench data. This application provides data-driven insights using tables and descriptive statistics sourced from JSON files.

## Features

- **Dynamic Data Rendering**: Based on JSON file input for daily-overview, weekly-overview, and effective-overview.
- **DataTable Integration**: Enhanced data visualization and interaction.
- **Interactive Filtering**: Filter data using a combination of search bar and dropdown options.
- **Responsive Design**: Built with Material-UI for a seamless UX across devices.

## Folder Structure

```
/hello-next
|-- /.next
|-- /components
|   |-- BenchComponent.tsx
|   |-- DataTable.tsx
|   |-- MissingScenarios.tsx
|   |-- NavigationMenu.tsx
|   |-- ScenarioStats.tsx
|   |-- ScenarioTable.tsx
|-- /node_modules
|-- /pages
|   |-- _app.tsx
|   |-- _document.tsx
|   |-- daily-overview.tsx
|   |-- weekly-overview.tsx
|   |-- effective-overview.tsx
|-- /public
|-- Dockerfile
|-- docker-compose.yml
|-- package.json
|-- README.md (This file)
```

## Components Overview

- `BenchComponent`: Responsible for rendering either the `devbench` or `testbench` data.
- `DataTable`: The main table component showcasing the test scenarios and their results.
- `MissingScenarios`: Displays a list of missing test scenarios and provides a count.
- `NavigationMenu`: A dropdown navigation menu for navigating between the different overview pages.
- `ScenarioStats`: Offers an at-a-glance statistics of the total scenarios, passed, failed, and missing tests.
- `ScenarioTable`: A specialized table for showing individual scenarios, their results, and provides filtering capabilities.

## Setup and Development

1. **Clone the Repository**
   
   ```bash
   git clone [repository-link]
   cd hello-next
   ```

2. **Install Dependencies**
   
   Navigate to the project's root directory and run:

   ```bash
   npm install
   ```

3. **Run in Development Mode**

   ```bash
   npm run dev
   ```

   This will start the development server on `http://localhost:3000`.

4. **Building for Production**

   Before deploying, make sure to build the project:

   ```bash
   npm run build
   ```

5. **Dockerization**

   Ensure Docker and Docker Compose are installed. Build and run the Docker container using:

   ```bash
   docker-compose up
   ```

## Testing

Tests are integrated using Jest and the React Testing Library. Run the tests using:

```bash
npm test
```

## Deployment

This project is containerized using Docker and can be orchestrated using Kubernetes (k8s) or similar tools for a production-ready deployment.

---

This README provides an overview of the project. For a real-world project, consider adding more details such as:

- Contribution guidelines.
- Details about the backend or APIs (if any).
- Information on environment variables or configurations needed.
- Any known issues or TODOs.
- License information.