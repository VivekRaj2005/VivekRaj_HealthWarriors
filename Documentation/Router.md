# Health Warrior - Router Configuration

This project setup defines the main routes and navigation logic for the Health Warrior platform, designed to connect rural communities with urban healthcare resources. The routing configuration uses `react-router-dom` to manage navigation between different pages and components in the application.

## Key Routes and Components

### Main Routes

- **Home (`/`)**: Renders the `Home` component, which serves as the landing page and handles the initial login.
- **Terms (`/terms`)**: Displays the `Terms` component, which includes terms and conditions for using the platform.
- **Chat (`/chat`)**: Provides access to the `Chat` component, where users can engage in real-time communication.

### Patient Routes (Nested under `/patient`)

- **Patient Home (`/patient`)**: Renders the `PatientHome` component, which serves as the main dashboard for logged-in users.
- **Records (`/patient/records`)**: Allows access to patient medical records through the `Records` component.
- **Appointment (`/patient/appointment`)**: Enables users to view and schedule appointments within the `Appointment` component.
- **New Record (`/patient/new`)**: Provides an interface in the `NewRecord` component for adding new medical records.

## Router Component

The main router is configured in `Router.tsx` and manages both the main and nested routes for the application.

### State Management

The `Router` component manages the following state variables:

- **LoggedIn**: Tracks whether the user is logged in.
- **userData**: Stores user-specific data to be passed to child components, especially useful for patient-specific pages.

# Notes
- Nested Routing: The patient dashboard routes are nested under /patient, allowing components like Records, Appointment, and NewRecord to appear as child routes.
- Conditional Rendering: The LoggedIn and userData state variables can be used to conditionally render components or redirect users as needed based on authentication status.
