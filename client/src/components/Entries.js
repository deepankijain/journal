import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Entries.css';
import db from '../firebase';
import { useStateValue } from '../hooks/StateProvider';
import parse from 'html-react-parser';
const Entries = () => {
  const [entries, setEntries] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .doc(user?.uid)
      .collection('entries')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setEntries(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        );
      });

    return () => {
      unsubscribe();
    };
  }, []);
  const deleteEntry = async (id) => {
    try {
      let response = await db
        .collection('users')
        .doc(user?.uid)
        .collection('entries')
        .doc(id)
        .delete();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {entries.map((entry) => (
        <div className='entries' id={entry.id}>
          <small className='entries__date'>
            {moment.unix(entry.data.timestamp).format('MMMM Do, h:mma')}
          </small>
          <div className='entries__text'>{parse(entry.data.entry)}</div>
          <button type='submit' onClick={() => deleteEntry(entry.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Entries;
