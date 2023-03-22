import logo from './logo.svg';
import './App.css';
import DialogsList from './components/dialogs-list/DialogsList';
import MessagesContent from './components/messages-content/MessagesContent';



function App(props) {
  return (
    <div className="App">
      <div className='messenger'>
        <DialogsList />
        <MessagesContent />
      </div>
    </div>
  );
}

export default App;
