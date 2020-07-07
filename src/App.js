import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

// 外に出せば、useCallback要らなくなる
// const fetchData = (type) => {
// 	return fetch(`https://jsonplaceholder.typicode.com/${type}`)
// 		.then((response) => response.json())
// 		.then((json) => console.log(json));
// };

function App() {
	const [count, setCount] = useState(0);

	const array = useMemo(() => {
		return ['One', 'Two', 'Three'];
	}, []);

	const fetchData = useCallback((type) => {
		return fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((response) => response.json())
			.then((json) => console.log(json));
	}, []);

	useEffect(() => {
		fetchData('todos');
	}, [fetchData]);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Count: {count}</h1>
				<p>
					<button
						type="button"
						onClick={() => {
							setCount(count + 1);
						}}
					>
						ADD
					</button>
				</p>
				<ChildComponent title="This is the title" array={array} fetchData={fetchData} />
			</header>
		</div>
	);
}

export default App;
