import './App.css'
import CourseList from './CourseList'

interface CourseData {
  name: string;
  courseId: string;
  studentPositions: number;
}

interface AppProps {
  courses: CourseData[];
}

function App({ courses }: AppProps) {
  return (
    <>
      <CourseList courses={courses} />
    </>
  )
}

export default App