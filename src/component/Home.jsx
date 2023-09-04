import React,{useState} from 'react'
import Question from './Question'
import data from "./data"
const Home = () => {
    const [value,setValue]=useState(data)
    
  return (
    <div className='container'>
        <h3>question and answer</h3>
        <section className='info'>
         {
            value.map((question)=>(
                <Question key={question.id} {...question}/>
            ))
         }

        </section>
    </div>
  )
}

export default Home