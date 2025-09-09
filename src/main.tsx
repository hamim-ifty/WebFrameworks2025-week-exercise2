import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


const courses = [
  { name: "Introduction to Programming", courseId: "CS101", studentPositions: 25 },
  { name: "Web Development", courseId: "CS201", studentPositions: 20 },
  { name: "Data Structures", courseId: "CS301", studentPositions: 15 },
  { name: "Database Design", courseId: "CS401", studentPositions: 18 }
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App courses={courses} />
  </StrictMode>,
)