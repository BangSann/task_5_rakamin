import { useState,useEffect } from 'react'
import './App.css'
import Mansection from './components/manSection.jsx'
import Womansection from './components/womanSection.jsx'
import UN from './components/unavailableContent.jsx'

function App() {
  const [enPoint,setEnpoint] = useState(1)
  //api hit
  const storeData = async()=>{
    let url = 'https://fakestoreapi.com/products/'
    const res = await fetch(url)
    const data= await res.json()
    return data
}
  //button next
  function addEnpoint(){
    if (enPoint>=20){
      setEnpoint(1)
    }else{
      setEnpoint((point=>point+1))
    }
  }
  //get dataStore
  const [dataStore, setDataStore] = useState([])
  useEffect(()=>{
    storeData().then((result)=>setDataStore(result))
  },[])
  //cek
  console.log(dataStore);

  //cetak dataStore
  function SetStore(){
    return dataStore.map((data)=>{
      if(data.id==enPoint){
        if(data.category=="men's clothing"){
          return(
          <Mansection data={data} enpoint ={()=>addEnpoint()}/>
          )
        }if(data.category=="women's clothing"){
          return(<Womansection data={data} enpoint ={()=>addEnpoint()}/>)
        }else{
          return(<UN  enpoint ={()=>addEnpoint()}/>)
        }
        
      }
    })
  }

  return (
    <div className='tes'>
      <SetStore/>
    </div>
  )
}

export default App
