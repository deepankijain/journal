import React from 'react';
import { Quill } from 'react-quill';

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='6 10 4 12 2 10 6 10' />
    <path
      className='ql-stroke'
      d='M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9'
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox='0 0 18 18'>
    <polygon className='ql-fill ql-stroke' points='12 10 14 12 16 10 12 10' />
    <path
      className='ql-stroke'
      d='M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5'
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import('formats/font');
Font.whitelist = [
  'arial',
  'comic-sans',
  'courier-new',
  'georgia',
  'helvetica',
  'lucida',
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: '#toolbar',
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'code-block',
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id='toolbar'>
    <span className='ql-formats'>
      <select className='ql-font' defaultValue='arial'>
        <option value='arial'>Arial</option>
        <option value='comic-sans'>Comic Sans</option>
        <option value='courier-new'>Courier New</option>
        <option value='georgia'>Georgia</option>
        <option value='helvetica'>Helvetica</option>
        <option value='lucida'>Lucida</option>
      </select>
      <select className='ql-size' defaultValue='medium'>
        <option value='small'>Small</option>
        <option value='medium'>Normal</option>
        <option value='large'>Large</option>
      </select>
      <button className='ql-header' value='1' type='button'>
        <svg viewBox='0 0 18 18'>
          <path
            className='ql-fill'
            d='M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z'></path>{' '}
        </svg>
      </button>
      <button className='ql-header' value='2' type='button'>
        <svg viewBox='0 0 18 18'>
          {' '}
          <path
            className='ql-fill'
            d='M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z'></path>{' '}
        </svg>
      </button>
    </span>
    <span className='ql-formats'>
      <button className='ql-bold' />
      <button className='ql-italic' />
      <button className='ql-underline' />
      <button className='ql-strike' />
    </span>
    <span className='ql-formats'>
      <button className='ql-list' value='ordered' />
      <button className='ql-list' value='bullet' />
      <button className='ql-indent' value='-1' />
      <button className='ql-indent' value='+1' />
    </span>
    <span className='ql-formats'>
      <button className='ql-script' value='super' />
      <button className='ql-script' value='sub' />
    </span>
    <span className='ql-formats'>
      <select className='ql-align' />
      <select className='ql-color' />
      <select className='ql-background' />
    </span>
    <span className='ql-formats'>
      <button className='ql-undo'>
        <CustomUndo />
      </button>
      <button className='ql-redo'>
        <CustomRedo />
      </button>
    </span>
  </div>
);

export default QuillToolbar;
