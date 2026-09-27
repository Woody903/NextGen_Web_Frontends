# Solo_Assigment_2_CodeReview
Lisa Hoffmann - 1WS - NextGen_Web_Frontend

## Description
This project is a small Vue 3 note application created as part of the code review assignment. The app allows the user to create notes, assign tags, delete notes, and search through notes by title, content, or tag. The app stores the notes in localStorage so they remain available after a page reload.

The project was built with Vue 3 and Vite and follows a component-based structure. The logic for the notes is separated into a composable to keep the app modular and reusable.

## 1. How to run
```bash
cd ./Solo_Assigment_2_CodeReview
npm install
npm run dev
```

## 2. Brief Explanation of the Structure
The logic for the notes is contained in the composable `useNotes()` because it is intended to be reusable and independent of any single component. This keeps `App.vue`, `NoteForm.vue`, and `NoteCard.vue` simple, allowing them to focus on rendering and user interaction. Data persistence in `localStorage` is also handled separately so that the logic is not contained in the components.

## 3. Three Reflection Questions with Short Answers
### Why can’t `NoteCard` modify the `note` prop itself, and how do you handle this instead?
`NoteCard` receives the note only as a prop. This keeps the data source centralized, and the component are only used for presenting the content. Changes are made via events or through the logic in the composable.

### What happens if two components call the same `useNotes()` - do they share the notes or not? Briefly explain.
If both components call the same Composable, they normally create separate states because each call to a composable function creates its own state. The notes are not automatically shared globally, but only within the respective component or the corresponding call context. This is important because it keeps the data clearly separated and prevents unexpected side effects.

### What is the purpose of the Note interface if the code would work without it?
The interface clearly defines the structure of a note, such as `id`, `title`, `content`, and `tags`. This makes the code more understandable, more reliable, and easier to maintain. It helps during development because TypeScript detects incorrect data earlier, making the component more robust.

## Main Features
- Create new notes with title, content and tags
- Delete existing notes
- Search notes by text, title or tags
- Save notes in browser localStorage
- Component-based structure with reusable logic

## Important Files
| File | Description |
|---|---|
| App.vue | Main app component, connects the form, search bar and note list |
| components/NoteForm.vue | Form for creating a note |
| components/NoteCard.vue | Display of a single note and delete button |
| components/searchBar.vue | Search input for filtering notes |
| composables/useNotes.js | Logic for adding, deleting and filtering notes |
| composables/useLocalStorage.js | Reads and writes data to localStorage |
| types/notes.ts | Type definition for a note |
| style.css | Styling for the app |
