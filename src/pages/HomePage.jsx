import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
/*useSelector me sirve para saber si esta guardando correctamente
los datos del input
  const trainer = useSelector(store => store.trainer)
 console.log(trainer)*/
 
/* Siempre useRef guarda en un objeto, y ese objeto tiene
una propiedad que se llama current = input*/
// Trim es metodo de los string
  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="pokedex">
        <img className="pokedex__poke" src="pokedex.png" alt="" />
        <h2 className="pokedex__welcome">Hi trainer!</h2>
        <p className="pokedex__trainer">To start, plase, enter your trainer nickname</p>
        <form onSubmit={handleTrainer}>
            <input className="form__trainer" ref={inputTrainer} type="text" placeholder="Write your name...." />
            <button className="form__btn">Start</button>
        </form>
        <img className="pokedex__img" src="poke.png" alt="poke" />
    </div>
  )
}

export default HomePage