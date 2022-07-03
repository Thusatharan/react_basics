import './App.css';
import Button from './components/Buttons'

function App() {

  function getFullName(object) {
    if (object) {
      return object.firstname + ' ' + object.lastname;
    }

    else {
      return 'Stranger';
    }
  }

  const persons = [
    {
      firstname: 'Thusanth',
      lastname: 'Thusatharan',
      age: '26',
      gender: 'Male'
    },
    {
      firstname: 'Aji',
      lastname: 'Ramesh',
      age: '26',
      gender: 'Male'
    },
    {
      firstname: 'Kandee',
      lastname: 'Kendeepan',
      age: '26',
      gender: 'Male'
    },
  ];
  return (
    persons.map((person) => <div className='title'>Hello, {getFullName(person)}
    </div>)

  );

}

export default App;
