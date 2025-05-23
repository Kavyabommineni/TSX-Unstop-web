# TSX-Unstop-Web (Frontend - MyApp)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed on [Netlify](https://681f87783ed49500089e1ac2--carrerportofolio.netlify.app/).

## 🚀 Live Demo

🌐 [View on Netlify](https://681f87783ed49500089e1ac2--carrerportofolio.netlify.app/)

---

## 📦 Available Scripts

In the `frontend/myapp` directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page reloads on changes. Lint errors appear in the console.

### `npm test`

Launches the test runner in watch mode.  
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more.

### `npm run build`

Builds the app for production into the `build` folder.  
It correctly bundles React in production mode for the best performance.

### `npm run eject`

**Caution:** This is a one-way operation.  
It copies all config files and dependencies so you can fully control the build setup.

---

## 📖 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

### Additional Topics

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Troubleshooting Build Failures](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 🛠 Deployment Notes

This app is deployed from the `frontend/myapp` folder using Netlify.  
Make sure your `netlify.toml` in the root of the repository contains:

```toml
[build]
  base = "frontend/myapp"
  command = "npm install && npm run build"
  publish = "build"
