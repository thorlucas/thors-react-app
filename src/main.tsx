import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	return (
		<>
			Hi!
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
