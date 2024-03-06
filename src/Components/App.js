import React,{useState} from 'react';
import './styles.css';
import Header from './Header';
import Notes from './Notes';
import Footer from './Footer';
// import note from './note';



function App() {
   let [newNoteTitle,setnewNoteTitle]=useState("");
   let [newNoteContent,setnewNoteContent]=useState("");
   let [notes,setNotes]=useState([{title:"",content:""}]);

   function addTitle(event)
   {
    let value=event.target.value;
    setnewNoteTitle(newNoteTitle=value);
   }
   function addContent(event)
   {
    let value=event.target.value;
    setnewNoteContent(newNoteTitle=value);
   }
    function addNotes(event){
      setNotes([...notes,{title:newNoteTitle,content:newNoteContent}]);
      setnewNoteTitle(newNoteTitle="");
      setnewNoteContent(newNoteTitle="");
      event.preventDefault()
    }
    function deleteOne(id)
    {
          setNotes(
            notes.filter((item,index)=>{
              if(index!==id)return item;
            })
          );
    }

  return (
    <div className="App">
       <Header />
       <div className='note'> 
         <form>
          <input type="text" name="addNoteTitle" value={newNoteTitle} onChange={addTitle} placeholder='addTitle'/>
          <input type="text" name="addNoteContent" value={newNoteContent} onChange={addContent} placeholder='addContent'/>
          <button onClick={addNotes}>add</button>
          </form>
       </div>
      { notes.map( (obj,index)=>{ return <Notes key={index} id={index} title= { obj.title } content={obj.content} deleteOne={deleteOne}/>} ) }
       <Footer />
    </div>
  );
}

export default App;


// note the difference between when to use <footer></footer> and className="footer"