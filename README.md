# VTU Consortium Digital Library

This is a simple HTML, CSS, and JavaScript website for a university digital library. It's designed to be easy to set up and run without complex frameworks.

## Features

- Clean, responsive design
- Mobile-friendly navigation
- Sample sections for library resources, features, and news
- Simple JavaScript interactivity

## How to Run

### Method 1: Open directly in browser

1. Simply open the `index.html` file in your web browser.
2. The website should load and function, though some features might work better when served from a server.

### Method 2: Using the included Node.js server

If you have Node.js installed:

1. Open a terminal/command prompt in the project folder
2. Run the server with:
```
node server.js
```
3. Open your browser and navigate to:
```
http://localhost:3001
```
4. You can also access the site from other devices on your network using your computer's IP address:
```
http://YOUR_IP_ADDRESS:3001
```

### Method 3: Using PHP's built-in server

If you have PHP installed:

1. Open a terminal/command prompt in the project folder
2. Run:
```
php -S localhost:3001
```
3. Access the site at `http://localhost:3001`

## Structure

- `index.html` - Main homepage
- `styles.css` - All styling for the website
- `script.js` - JavaScript for interactivity
- `server.js` - Simple Node.js server for serving the files

## Customization

You can easily customize the website by:

1. Modifying the HTML structure in `index.html`
2. Changing colors, fonts, and layout in `styles.css`
3. Adding more functionality in `script.js`

## Colors Used

- Primary Orange: `#ff6600`
- Primary Dark: `#e65c00`
- Accent Green: `#39ff14`
- Text Dark: `#333`
- Text Light: `#fff` 