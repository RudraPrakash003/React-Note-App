# Note-Taking App

This is a simple note-taking application built with React and Redux, styled with Tailwind CSS. It allows users to create, edit, and delete notes, and select different colors for their notes.

## Demo
You can see the live demo [here](https://rudraprakash003.github.io/React-Note-App/).

## Features

- Create new notes with different colors
- Edit existing notes
- Delete notes
- Display the creation date of notes in "Month Date, Year" format

## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS
- React Icons

## Installation

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

### Steps

1. Clone the repository:

```
git clone https://github.com/RudraPrakash003/React-Note-App.git
cd note-taking-app
```

2. Install the dependencies:
```
npm install
```
3. Start the development server:
```
npm start
```
4. Open your browser and navigate to http://localhost:3000 to see the app in action.

## Usage
### Adding a Note
1. Click the + button to show the new note form.
2. Select a color for the note.
3. Type your note content in the provided text area.
4. Click the "Add" button to save the note.

### Editing a Note
1. Click the edit button (pencil icon) on the note you want to edit.
2. Modify the note content.
3. Click the "Save" button to update the note.

### Deleting a Note
1. Click the delete button (trash icon) on the note you want to delete.
2. The note will be removed from the list.

## Customization
### Changing Colors
To change the available colors for notes, update the colors array in App.js:
```
const colors = ['#FFA07A', '#FFD700', '#8A2BE2', '#00BFFF', '#ADFF2F'];
```
