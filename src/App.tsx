import './App.css'
import {Home} from "./components/Home.tsx";
import {Person} from "./components/Person.tsx";
import {PersonList} from "./components/PersonList.tsx";
import {Status} from "./components/Status.tsx";
import {Heading} from "./components/Heading.tsx";
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";
import {Container} from "./components/Container.tsx";

function App() {
    const personName = {
        first: 'Hikmet',
        last: 'Kütük'
    }

    const nameList = [
        {
            first: 'Yuudai',
            last: 'Adhiambo'
        },
        {
            first: 'Dafne',
            last: 'Rudolf'
        },
        {
            first: 'Brita',
            last: 'Apollonius'
        }
    ]
    return (
        <>
            <Heading>Name List</Heading>
            <Home name='Hikmet' messageCount={2} isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Status status='success'/>
            <Input value='' handleChange={(event) => console.log(event)}/>
            <Button handleClick={(event, id) => {
                console.log('Button clicked', event, id)
            }}/>
            <Container styles={{border: '1px solid black', padding: '1rem'}}/>
        </>
    )
}

export default App
