import './App.css'
import {Home} from "./components/props/Home.tsx";
import {Person} from "./components/props/Person.tsx";
import {PersonList} from "./components/props/PersonList.tsx";
import {Status} from "./components/props/Status.tsx";
import {Heading} from "./components/props/Heading.tsx";
import {Button} from "./components/props/Button.tsx";
import {Input} from "./components/props/Input.tsx";
import {Container} from "./components/props/Container.tsx";

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
