import React from 'react'
import StarwarsService from '../../shared/api/service/StarwarsService'

export const Uppgift3 = () => {
	const character = undefined
	const count = 1

	const getCharacterNameFromStarwarsAPI = async () => {
		const { data } = await StarwarsService.getStarwarsCharacter(count)
	}

	const displayCharacterName = () => {
		if (character || undefined) {
			return <div>
				<h2>{(character || undefined)?.name}</h2>
			</div>
		}
	}

	return (
		<div>
			<h1>Uppgift 3</h1>
			{displayCharacterName()}
		</div>
	)
}

/*

INSTRUKTIONER FÖR UPPGIFT 3:
Denna vy skall använda sig av useEffect tillsammans med useState för att hämta information om Starwars karaktärer.

	1. Du hittar två variabler vid namn character & count. Dessa variabler skall bytas ut mot varsitt state. (variabelnamnen skall fortsatt heta likadant)
	2. ditt count state skall ha initialvärdet 1
	3. i funktionen getCharacterNameFromStarwarsAPI() skall du spara värdet av data variabeln i ditt character state
	4. Skapa två knappar. varav den ena höjer värdet i count med 1 och den andra sänker värdet med 1
	5. importera samt initiera useEffect
	6. Vid första renderingen av denna vy-komponent skall funktionen getCharacterNameFromStarwarsAPI() att anropas
	7. När värdet av count uppdateras skall det ske en ny rendering

	Ifall du lyckats slutföra detta ordentligt skall du nu i applikationen kunna hämta ett nytt karaktärnamn genom att använda dig av de knappar du skapat.

 */