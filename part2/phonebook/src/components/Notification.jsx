const Notification = ({ message, type }) => {
  const sucessNotificationStyle = {
    color: 'green',
    fontSize: 24,
    backgroundColor: 'grey',
    borderColor: 'green',
    borderStyle: 'solid',
  };

  const errorNotificationStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if (message === null) {
    return null;
  } else if (type === 'success') {
    return (
      <div className='success' style={sucessNotificationStyle}>
        {message}
      </div>
    );
  } else if (type === 'error') {
    return (
      <div className='error' style={errorNotificationStyle}>
        {message}
      </div>
    );
  }
}

export default Notification;