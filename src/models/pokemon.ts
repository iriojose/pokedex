
interface Pokemon {
    name: string
    types: Types[]
    image: string
}

interface Types {
    slot: number
    type: GenericType
}

interface GenericType {
    name: string
    url: string
}

export { type Pokemon }
