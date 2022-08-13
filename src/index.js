import React from 'react'
import "./index.css"
import App from './App'
import { createRoot } from 'react-dom/client';
// Strict Mode is sort of a helper component that will help you write better React components, you can wrap a set of components with <StrictMode /> and it'll basically:

// 1. Verify that the components inside are following some of the recommended practices and warn you if not in the console.
// 2. Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
// 3. Help you prevent some side effects by identifying potential risks.

//ReactDOM.createRoot(
    const root = createRoot(document.getElementById('root'))
    root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>)
    