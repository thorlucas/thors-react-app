import MyContext from '@components/contexts/MyContext';
import { useWait } from '@hooks';
import { Button } from '@UI/Button';
import React from 'react';

const App: React.FC = () => {
	// This is an example of the usage of a custom hook. We can extract logic this way.
	const wait: string | null = useWait(2000, null, 'Hello again, world!');

	return (
	<MyContext.Provider value="Hello, world!">
		<div className="w-100 h-screen flex justify-center items-center">
			<div className="px-12 py-8 bg-white rounded-lg shadow-md">
				<h1 className="mb-2 text-3xl font-semibold">
					Hello, world!
				</h1>
				<div className="mb-4">
					<p>Welcome to my React Application!</p>
					<MyContext.Consumer>
						{ value => (
							<p>{ value }</p>
						)}
					</MyContext.Consumer>
					{ wait ? (
						<p>{ wait }</p>
					) : null }
				</div>
				<div>
					<Button role='primary'>
						Hello!
					</Button>
				</div>
			</div>
		</div>
	</MyContext.Provider>
	);
}

export default App;
