# Login & Registration Web App

A login and registration web application built from scratch using HTML, CSS, and vanilla JavaScript.

This project is focused on learning frontend development, DOM manipulation, browser APIs, form handling, and eventually full-stack development and web security.

## Features

- Login interface with username and password fields
- Interactive registration dialog
- Open and close functionality using JavaScript
- Built-in HTML form validation
- Email format and required-field validation
- JavaScript form submission handling
- Separate JavaScript modules
- Custom styling with CSS

## Technologies Used

- **HTML5** — Page structure, forms, and dialogs
- **CSS3** — Styling and layout
- **JavaScript (ES6+)** — DOM manipulation and event handling

No frontend frameworks are used.

## Project Structure

```text
Login-Project/
├── index.html
├── login-style.css
├── register-window.js
├── register-validation.js
└── README.md
```

## Getting Started

1. Clone the repository.
2. Open the project folder in VS Code or another editor.
3. Start a local development server, such as the Live Server extension.
4. Open the website in your browser.

Alternatively, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

A local server is recommended because the project uses JavaScript modules.

## How It Works

### Registration Dialog

JavaScript uses `document.querySelector()` to reference the registration dialog and its buttons.

Event listeners open and close the dialog using the browser's native `.showModal()` and `.close()` methods.

### Form Validation

The registration form uses HTML attributes such as `required` and `type="email"` to validate user input.

After validation succeeds, JavaScript handles the form's `submit` event and uses `event.preventDefault()` to stop the browser's default submission behavior.

Currently, successful submissions are logged to the browser console for development purposes. Passwords are not logged.

## Planned Features

- [x] Create login page
- [x] Create registration dialog
- [x] Implement opening and closing functionality
- [x] Implement basic registration form validation
- [x] Handle registration submissions with JavaScript
- [ ] Connect frontend to a C# ASP.NET Core backend
- [ ] Implement account registration
- [ ] Add database integration
- [ ] Implement secure password hashing
- [ ] Implement login authentication
- [ ] Add session management and logout
- [ ] Add password recovery functionality
- [ ] Explore authentication security testing in a local environment

## Current Limitations

This project is currently a frontend prototype.

It does not create user accounts, authenticate users, store credentials, or communicate with an authentication server.

Frontend validation improves user experience but is not a security boundary. A future backend will be responsible for secure authentication, authorization, and server-side validation.

## Project Goals

The main purpose of this project is to understand how modern web applications work from the ground up before introducing frameworks.

Key learning areas include:

- JavaScript fundamentals
- DOM manipulation
- Browser APIs and event listeners
- HTML forms and validation
- JavaScript modules
- HTTP communication and REST APIs
- Backend development with C#
- Web application security

## Status

**In development — frontend registration handling completed; backend planned.**

## License

No license has been selected yet.
