
import React , {useState, useEffect} from 'react';

import './styles.css'

import { Card } from "../../componentes/Card"

export function Home() {

  const [studentName, setStudentName] = useState ("");
  const [names, setNames] = useState ([]);
  const [user, setUser] = useState ({name: "", avatar: ""});

  
  
  function handleStudent () {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setNames(prevState => [...prevState, newStudent])
  }
  
  useEffect(() => {
    fetch("https://api.github.com/users/xxlukxxx")
    .then(response => response.json())
    .then(data => {
      setUser ({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
    
  }, [])


  return (
    <div className="container">
      <header>
        <div className="headerLogin">
          <div className="boxPerfil">
            <img src={user.avatar} alt="" />
            <strong>{user.name}</strong>
          </div>
          <strong>Lista de Chamadas</strong>
        </div>
      </header>
      <main>
          <section>
            <h2>{studentName}</h2>
            <input type="text" placeholder="Digite o nome" onChange={e => setStudentName (e.target.value)}/>
            <button type="button" onClick={handleStudent}>Presente</button>
            
            {
              names.map(student => <Card key={student.time} name={student.name} time={student.time}/>)
            }

          </section>
      </main>
    </div>
  )
}


