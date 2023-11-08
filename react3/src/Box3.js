import React, {useContext} from 'react'
import Demo from './Demo'

const Box3 = () => {

    let data = useContext(Demo);

  return (
    <>
        <h3>This is Box3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis at iusto iure, expedita asperiores dolore, molestiae exercitationem cumque autem esse, architecto dicta? Cum ullam dolorum adipisci, veniam ab iure.</p>
        <h3>{data.name}</h3>
        <h3>{data.fee}</h3>
        <h3>{data.city}</h3>
    </>
  )
}

export default Box3