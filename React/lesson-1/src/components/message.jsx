import './App.css';

function Message(props) {
 return (
   <div className="App-header">
     <header className="Message-header">
       My First React App
       <h3>Hello, {props.name}</h3>
     </header>
   </div>
 );
}

export default Message;