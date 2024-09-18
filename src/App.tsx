import { Input } from './components/Input'
import Lupa from "./assets/lupa.svg"
import { Layout } from './components/Layout'
import { useState } from 'react'
import { getPokemon } from './services/pokemon'
import { useApi } from './hooks/useApi'
import { Container } from './components/Container'
import { Card } from './components/Card'
import { Pokemon } from './models/pokemon'

function App() { 
	const [loadPokemon, { data: pokemonData, loading: loadingPokemon, error: errorApi } ] = useApi(() => getPokemon(inputValue))
	const [inputValue, setInputValue] = useState("")

    return (
		<Layout>
			<Input 
				className='p-2 rounded-lg border border-black/20 my-4 focus-within:border-black'
				onChange={setInputValue}
				value={inputValue}
				placeholder='Find your pokemon...'
				leftIcon={() => <img className="h-6 w-6 mr-3" src={Lupa} />}
				onBlur={() => inputValue !== "" && loadPokemon()}
			/>

			{!errorApi && !pokemonData && !loadingPokemon && (
				<Container className='flex justify-center items-center absolute inset-60'>
					<Container className='font-medium text-lg'>
						Welcome, I hope you can fine your pokemon
					</Container>
				</Container>
			)}

			{loadingPokemon && (
				<Container className='flex justify-center items-center absolute inset-0'>
					<Container className='font-medium text-lg'>
						Cargando...
					</Container>
				</Container>
			)}

			{!loadingPokemon && errorApi && (
				<Container className='flex justify-center items-center absolute inset-80'>
					<Container className='font-medium text-lg'>
						Pokemon not found...
					</Container>
				</Container>
			)}

			{pokemonData && !loadingPokemon && (
				<Card pokemon={pokemonData as Pokemon} />
			)} 
		</Layout>
    )
}

export default App
