import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../Redux/notesSlice';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const NoteList = () => {
  const notes = useSelector(state => state.notes.notes);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const startEditing = (id, content) => {
    setEditingId(id);
    setEditingContent(content);
  };

  const saveEdit = (id) => {
    dispatch(editNote({
      id,
      content: editingContent,
    }));
    setEditingId(null);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {notes.map(note => (
        <div key={note.id} className="relative p-4 bg-white shadow-md rounded w-48 h-48 overflow-hidden" style={{ backgroundColor: note.color }}>
          <div className="absolute top-2 right-2 flex space-x-2">
            <button onClick={() => dispatch(deleteNote(note.id))} className="text-red-500">
              <FaTrashAlt />
            </button>
            <button onClick={() => startEditing(note.id, note.content)} className="text-blue-500">
              <FaEdit />
            </button>
          </div>
          {editingId === note.id ? (
            <div className="flex flex-col h-full">
              <textarea
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="w-full h-full p-2 border-none outline-none resize-none bg-transparent text-white placeholder-white"
              />
              <button onClick={() => saveEdit(note.id)} className="absolute bottom-2 left-2 px-2 py-1 bg-blue-500 text-white rounded">Save</button>
            </div>
          ) : (
            <>
              <p className="break-words">{note.content}</p>
              <span className="absolute bottom-2 left-2 text-sm text-gray-700">{note.date}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteList;