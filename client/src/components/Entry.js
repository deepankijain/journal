import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './Entry.css';
import db, { timestamp } from '../firebase';
import { useStateValue } from '../hooks/StateProvider';
import parse from 'html-react-parser';
const Entry = () => {
  const [state, setState] = useState('');
  const [{ user }] = useStateValue();
  const handleChange = (e) => {
    setState(e);
  };
  const entry = parse(state);
  console.log(`parsed state>>>>>`, entry);
  const addEntry = async (e) => {
    e.preventDefault();
    if (user) {
      await db.collection('users').doc(user?.uid).collection('entries').add({
        entry: state,
        timestamp,
      });
    }
    setState('');
  };
  return (
    <div className='entry'>
      <form className='text-editor'>
        <EditorToolbar />
        <ReactQuill
          theme='snow'
          value={state}
          onChange={handleChange}
          placeholder={'Write something awesome...'}
          modules={modules}
          formats={formats}
        />
        <button type='submit' onClick={addEntry} className='entry__button'>
          Add
        </button>
      </form>
    </div>
  );
};

export default Entry;
