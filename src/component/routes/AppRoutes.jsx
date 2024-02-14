import React from 'react'
import HomePage from '../HomePage'
import Mentor from '../users/Mentor'
import Student from '../users/Student'
import Edit from '../common/Edit'
import AddStudent from '../common/AddStudent'
import Addmentor from '../common/Addmentor'
const AppRoutes=[
    {
        path:"/",
        status:true,
        element:<HomePage/>
    },
    {
        path:"/student",
        status:true,
        element:<Student/> 
    },
    {
        path:"/mentors",
        status:true,
        element:<Mentor/>
    },{
        path:"/edit/:id",
        status:true,
        element:<Edit/>
    },
    {
        path:"/addStudent",
        status:true,
        element:<AddStudent/>
    },{
        path:"/addMentor",
        status:true,
        element:<Addmentor/>
    }

]

export default AppRoutes
