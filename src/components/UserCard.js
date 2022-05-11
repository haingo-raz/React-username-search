import React from 'react'
import '../style/UserCard.css'
import {FaRegUser} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {GoLocation} from "react-icons/go"
import {AiOutlinePhone} from "react-icons/ai"

export default function UserCard({user}) {
  return (
    <>    
      <div className = "user-card">
          <p> <FaRegUser/> {user.username}</p>
          <p> <HiOutlineMail/> {user.email}</p>  
          <p> <GoLocation/> {user.address.city}</p>
          <p> <AiOutlinePhone/> {user.phone}</p>      
      </div>
    </>
  )
}
