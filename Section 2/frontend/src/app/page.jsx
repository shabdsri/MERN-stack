import Card from '@/components/Card'
import MyButton from '@/components/MyButton'
import NavBar from '@/components/NavBar'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <h1 className='text-3xl text-center font-bold mt-8'>Welcome to Homepage</h1>
      <p style={{ color:'red' , fontSize:20}}>Using Inline CSS in JSX</p>
      <input type="text" />
      <hr />
      <br />
      <Card/>
      <div className='grid grid-cols-3 gap-4'>
        <Card title={"My Card Title 1"} desc={"My Card Description 1"} btnText={"Card Button 1"}/>
       <Card title={"My Card Title 2"} desc={"My Card Description 2"} btnText={"Card Button 2"}/>
       <Card title={"My Card Title 3"} desc={"My Card Description 3"} btnText={"Card Button 3"}/>

      </div>
     <MyButton>Some Text</MyButton>
     <MyButton>Submit</MyButton>
     <MyButton>Next</MyButton>
     <button className='btn'>My Button</button>
     <button className='loginbtn'>Try Local</button>
    </div>
  )
}

export default Home