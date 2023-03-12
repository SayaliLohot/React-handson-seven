import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import ContactUs from './Pages/ContactUs'
import Home from './Pages/Home'
import StudentList from './Pages/StudentList'
import StudentForm from './Pages/StudentForm'

function RouterComp() {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/student"} element={<StudentList/>}/>
            <Route path={"/contactUs"} element={<ContactUs/>}/>
            <Route path="/editStudent/:studentId" element={<StudentForm />} />
        <Route path="/addStudent" element={<StudentForm />} />
        </Routes>

    </div>
  )
}

export default RouterComp
