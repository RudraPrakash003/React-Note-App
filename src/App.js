import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NoteList from './Components/NoteList';
import { addNote } from './Redux/notesSlice';


const App = () => {
  const [selectedColor, setSelectedColor] = useState('#FFA07A');
  const [isAdding, setIsAdding] = useState(false);
  const [newNote, setNewNote] = useState('');
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const toggleFormVisibility = () => {
    setIsAdding(!isAdding);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      dispatch(addNote({
        id: Date.now(),
        content: newNote,
        color: selectedColor,
        date: formatDate(new Date())
      }));
      setNewNote('');
      setIsAdding(false);
    }
  };

  return (
    <div className="flex">
      <div className="w-16 flex flex-col items-center p-4 bg-gray-100">
        <button onClick={toggleFormVisibility} className="mb-4 w-10 h-10 bg-black text-white rounded-full flex items-center text-2xl justify-center">+</button>
        <div className="flex flex-col items-center space-y-4">
          {['#FFA07A', '#FFD700', '#8A2BE2', '#00BFFF', '#ADFF2F'].map(color => (
            <div
              key={color}
              className={`w-5 h-5 rounded-full ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Note App</h1>
        {isAdding && (
          <div className={`relative p-4 mb-4 w-48 h-48 overflow-hidden rounded`} style={{ backgroundColor: selectedColor }}>
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Type your note here..."
                className="w-full h-full p-2 border-none outline-none resize-none bg-transparent text-white placeholder-white"
              />
              <button type="submit" className="absolute bottom-2 left-2 px-2 py-1 bg-blue-500 text-white rounded">Add</button>
            </form>
          </div>
        )}
        <NoteList />
      </div>
    </div>
  );
};

export default App;