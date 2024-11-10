# Health Warrior - Login Component

This `Login` component is part of the Health Warrior platform, which aims to connect rural patients and communities with urban healthcare experts. The component provides a secure login interface using an Aadhaar card number for verification and OTP authentication, powered by Firebase for user data management.

## Features

- **OTP Authentication**: Sends a one-time password (OTP) to verify users based on their Aadhaar number.
- **Firebase Integration**: Fetches user data from Firebase to validate login credentials.
- **Conditional Rendering**: Displays appropriate login fields and error messages based on user interaction.
- **Cross-Platform Compatibility**: Styled for responsive design using CSS and Material UI components.

## Technologies Used

- **React**: For building the component.
- **Firebase**: As a backend service for storing and fetching user data.
- **Material UI**: For pre-styled UI components like `Alert` and `CircularProgress`.
- **React Router**: For navigation after successful login.

## Component Structure

```javascript
Login({
  loggedIn,
  setloggedIn,
  setUserData
}: {
  loggedIn: boolean;
  setloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
})
```

# Login Process
- Aadhaar Input: Enter the Aadhaar number to initiate login.
- OTP Generation: On clicking Send OTP, an OTP is generated, stored, and sent to the user's registered email.
- OTP Verification: After receiving the OTP, enter it to verify the login.
- Successful Login: On correct OTP entry, user data is set, and the user is redirected to the /patient route.

# Main Functions
## sendOTP
- Fetches user data based on Aadhaar from Firebase and sends OTP.
# Login
- Verifies OTP and logs the user in.
# useEffect: 
- Listens for changes in loggedIn state to manage component behavior.


# Props:
## loggedIn (boolean): 
- Indicates whether a user is currently logged in.
## setloggedIn (function): 
- Updates the logged-in state.
## setUserData (function): 
- Stores user data after successful authentication.

# Error Handling
- Invalid Login Alert: Displays an error message if Aadhaar or OTP verification fails.
- Loading States: Utilizes CircularProgress for indicating loading states during OTP generation and validation.

# Component UI
- Aadhaar Input Field: Validates Aadhaar number input.
- OTP Input Field: Shows OTP input field if OTPMode is active.
- Sign In Button: Toggles between "Send OTP" and "Login" based on current login stage.

