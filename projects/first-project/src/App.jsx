//import { useState } from 'react'
import {TwitterFollowCard} from './TwitterFollowCard'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <section className='container'> 
      {/**
       * esta es la forma si no se usan llaves {} 
       * dentro del parentesis () o sea, parametros 
       * en la function del componente:
       *    {TwitterFollowCard("midudev", "Miguel Angel Duran", true)}
       *    {TwitterFollowCard("pheralb", "Pablo Hernandez", false)}
       *    {TwitterFollowCard("NASA", "NASA", true)}
       *    {TwitterFollowCard("genuine993", "Genuine")}
       *    {TwitterFollowCard("menostrece", "Menos Trece")}
       **/
      }
      {/**
       * esta es la forma si agregas las llaves {}:
       */}
      <TwitterFollowCard userName="midudev" isFollowing={false}>Miguel Angel Duran</TwitterFollowCard>
      <TwitterFollowCard userName="pheralb" isFollowing={false}>Pablo Hernandez</TwitterFollowCard>
      <TwitterFollowCard userName="NASA" isFollowing={true}>NASA</TwitterFollowCard>
      <TwitterFollowCard userName="genuine993" isFollowing={false}>Genuine</TwitterFollowCard>
      <TwitterFollowCard userName="menostrece" isFollowing={false}>Menos Trece</TwitterFollowCard>
    </section>
  )
}

export default App
