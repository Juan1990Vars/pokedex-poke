import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({ setTypeSelector }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = e => {
        setTypeSelector(e.target.value)
    }

    //onChange va a hacer que se ejecute
  return (
    <div>
        <select className="select" onChange={handleChange}>
            <option value='allPokemons'>All pokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectType