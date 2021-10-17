import React from 'react';

import Button from '@UI/Button';
import { MyContext } from '@contexts';
import { useWait } from '@hooks';

const App: React.FC = () => {
	// This is an example of the usage of a custom hook. We can extract logic this way.
	// This value will be null initially, then become "Hello again, world!" after 2
	// seconds.
	const wait: string | null = useWait(2000, null, "Hello again, world!");

	return (
	// This is a context provider. All subsequent components are able to use this
	// context value by either using a <MyContext.Consumer> element, or by using a
	// useContext hook.
	<MyContext.Provider value="Hello, world!">

		<div className="w-100 h-screen flex justify-center items-center">
			<div className="px-12 py-8 bg-white rounded-lg shadow-md">

				<h1 className="mb-2 text-3xl font-semibold">
					Hello, world!
				</h1>

				<div className="mb-4">

					<p>Welcome to my React Application!</p>
					
					{ /* Here we are using a Consumer to use the context value. */ }
					<MyContext.Consumer>
						{ value => (
							<p>{ value }</p>
						)}
					</MyContext.Consumer>

					{ /* Here we are conditionally rendering only if wait is not null. */ }
					{ wait ? (
						<p>{ wait }</p>
					) : null }

				</div>

				<div>
					{ /* This is an example button component */ }
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
