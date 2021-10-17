import { Button } from '@components/UI/Button';
import React from 'react';

const App: React.FC = () => {
	return (
	<div className="w-100 h-screen flex justify-center items-center">
		<div className="px-12 py-8 bg-white rounded-lg shadow-md">
			<h1 className="mb-2 text-3xl font-semibold">
				Hello, world!
			</h1>
			<div className="mb-4">
				<p>Welcome to my React Application!</p>
			</div>
			<div>
				<Button role='primary'>
					Hello!
				</Button>
			</div>
		</div>
	</div>
	);
}

export default App;
