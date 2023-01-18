import React, {useState, useEffect} from 'react'
import './App.css';
import listEmail from './data/listEmail';
import List from './components/List';
import {READ, UNREAD} from './constants'
import Controls from './components/Controls';

function App() {
  const [emails, setEmails] = useState(listEmail);
  // const [emailsStatus, setEmailsStatus] = useState(0);

  // function addListEmail(id, title, status) {
  //   let object = {
  //      id: id,
  //      title: title,
  //      status: status
  //    }
  //    return setEmails(listEmail.push(object))
  //  }

  //  addListEmail(1, 'Oferta imperdivel, ultima chance de ...', 0)
  // console.log(listEmail);

  useEffect(() => {
    const allEmailsHaveBeenRead = emails.every(({status}) => status === READ)
  
    if(allEmailsHaveBeenRead) {
      alert('Parabéns! Você leu todas suas mensagens!')
    }
  }, [emails])

  const setEmailStatus = (emailId, novoStatus) => {
    const updateEmails = emails.map((currentEmail) => {
      if (currentEmail.id === emailId) {
        return {...currentEmail, status: novoStatus}
      }
      return currentEmail
    })
    setEmails(updateEmails)
  }

  const markAllAsRead = (emailId, novoStatus) => {
    const allAsRead = emails.map((emailAtual) => ({
        ...emailAtual, status: READ
    }))
    setEmails(allAsRead)
  }

  const markAllAsUnread = (emailId, novoStatus) => {
    const allAsUnread = emails.map((emailAtual) => ({
        ...emailAtual, status: UNREAD
    }))
    setEmails(allAsUnread)
  }

  return (
    <section className="App">
      <header >
        <nav>
          <h1>TrybeMail</h1>
        </nav>
      </header>
      
      <main>
        <Controls
        markAllAsRead={markAllAsRead}
        markAllAsUnread={markAllAsUnread}
        />

        <List 
        emails={ emails}
        setEmailsStatus={ setEmailStatus }
        />
      </main>
    </section>
  );
}

export default App;
