import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

(function () {
	const redirect = sessionStorage.redirect;
	delete sessionStorage.redirect;

	if (redirect) {
		window.history.replaceState(null, null, redirect);
	}
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
