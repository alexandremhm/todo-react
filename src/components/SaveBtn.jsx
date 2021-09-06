import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import notesContext from '../context/notesContext';

function SaveBtn() {
  const { notes } = useContext(notesContext);
  const saveLocalStorage = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  return (
    <Link 
    to='/todo'
    onClick={saveLocalStorage}
    >
      Save List
    </Link>
  )
}

export default SaveBtn;
