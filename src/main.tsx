import HomePage from '@pages/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
	return (
		<>
			<HomePage />
		</>
	);
}

ReactDOM.createRoot(
	document.getElementById('root')!
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
