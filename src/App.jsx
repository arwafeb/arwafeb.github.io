import { useState } from 'react'
import Card from "./components/Card.jsx"
import Layout from "./Layouts/Layout.jsx";
import Layout2 from './Layouts/Layout2.jsx';
import HomePage from './components/HomePage.jsx';
import Resources from "./components/Resources.jsx"
import PreparednessChecklist from './components/PreparednessChecklist.jsx';
import CommunityForum from './components/CommunityForum.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register.jsx';
import Login from "./components/Login.jsx"
import RecentDisasters from './components/RecentDisasters.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route
        path="/Register"
        element={
          <Layout>
            <div className="RegisterPage">
            <Card/>
            <Register/>
            </div>

          </Layout>
        }
        />
        <Route
        path="/Login"
        element={
          <Layout>
            <div className="LoginPage">
            <Card/>
            <Login/>
            </div>
          </Layout>
        }
        />
        <Route
        path="/Home"
        element={
          <Layout2>
            <div>
            <RecentDisasters/>
            <HomePage/>
            
            </div>
          </Layout2>
        }
        />
         <Route
        path="/Resources"
        element={
          <Layout2>
            <div>
            <Resources/>
            </div>
          </Layout2>
        }
        />
         <Route
        path="/community-forum"
        element={
          <Layout2>
            <div>
              <CommunityForum/>
            </div>
          </Layout2>
        }
        />
         <Route
        path="/preparedness-checklist"
        element={
          <Layout2>
            <div>
              <PreparednessChecklist/>
            </div>
          </Layout2>
        }
        />
        
        

        
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App
