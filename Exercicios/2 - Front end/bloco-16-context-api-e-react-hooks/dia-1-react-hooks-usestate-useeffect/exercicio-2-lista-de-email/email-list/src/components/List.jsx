import PropTypes from 'prop-types'
import {READ, UNREAD} from './../constants'
import readIcon from './../icons/read.svg'
import unreadIcon from './../icons/unread.svg'

function List({emails, setEmailsStatus}) {
return (
  <ul className="messages-list">
  {emails.map((email) => {
    const emailClass = email.status === READ 
    ? 'message-read'
    : 'message-unread';

    return(
      <li key={email.id}>
        <p 
        className={`message-title ${emailClass}`}
        >
        {email.title}
        </p>
        <div>
          <button
          type='button'
          title='Marcar como lida'
          onClick={() => setEmailsStatus(email.id, READ)}
          >
            <img src={readIcon} alt="" />
          </button>
        </div>
        <div>
          <button
          type='button'
          title='Marcar como não lida'
          onClick={() => setEmailsStatus(email.id, UNREAD)}
          >
            <img src={unreadIcon} alt="" />
          </button>
        </div>
      </li> 
    )
  }

  )}
  </ul>
)
}

List.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    })
  ).isRequired,
}

export default List