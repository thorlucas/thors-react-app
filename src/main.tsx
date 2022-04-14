import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
	return (
		<>
			<span className="text-red-500">Hi!</span>
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
