import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupPage from './components/SignUpPageComponent/SignupPage.component'
import SignupForm from './components/SignUpFormComponent/SignupForm.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <SignupPage></SignupPage>
    </div>
  )
}

export default App
