import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<React.StrictMode>
		<>
			<h1>Foo</h1>
			<p>Bar baz!</p>
			<h2>Testing live reload.</h2>
		</>
	</React.StrictMode>,

	document.getElementById('root')
);

console.log("hello?");
