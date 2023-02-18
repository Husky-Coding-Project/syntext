import Game from './components/Game/Game'

const App = () => {
	const example =  {
		id: 1,
		SnippetType:'FOR_LOOP',
		length: 'LONG',
		data: ['System.out.print(j + " - " + i);']
		
		// ['int j = 20;',
		// 				'for (int i = 0; i < 10; i++) {',
		// 				'	System.out.print(j + " - " + i);',
		// 				'	if (i > j)',
		// 				'		System.out.println(" < 0")',
		// 				'	else',
		// 				'		System.out.println(" > 0")',
		// 				'	j -= 1;',
		// 				'}'
		// 		]
}

	return (
		<div>
			<Game lines={example.data}/>
		</div>
	);
}

export default App;