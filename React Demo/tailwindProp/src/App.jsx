import './App.css'
import Card from './components/Card'
function App() {
/*   let myobj = {
    name:"Mohit",
    age: 22
  }
  let newArr = [1,2,3] */
  return (
    <>
      <h1 className='bg-green-400 
      text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card userName="SKILLS" btnText="Click Me"/>
      <Card userName="KKRH" btnText="Visit Me"/>
    </>
  )
}

export default App
