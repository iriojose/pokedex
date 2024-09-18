import { FC } from "react"
import { Pokemon } from "../../models/pokemon"
import { Container } from "../Container"

const Card: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {

    return (
        <Container className="mt-10">
            <img className="flex items-center justify-center" src={pokemon.image} />
            <Container className="text-lg font-bold text-center mt-5">{pokemon.name}</Container>

            <Container className="mt-5">
                <Container className="text-md font-medium text-center">
                    Type
                </Container>

                <Container className={`flex items-center ${pokemon.types.length > 1 ? "justify-between":"justify-center"} w-full`}>
                    {pokemon.types.map((type) => {
                        return (
                            <Container key={type.slot} className="text-sm font-normal mt-5">
                                {type.type.name}
                            </Container>
                        )
                    })}
                </Container>
            </Container>
        </Container>
    )
}

export { Card }