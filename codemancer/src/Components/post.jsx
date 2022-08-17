import { useState } from 'react';
import '../css/post.css';
import { AiFillLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';

// AiFillLike BiComment FaShare
export const Contactcard = ({ contacts }) => {
    
    const [showccontact, setShowcontact] = useState(false)

 return(
     <div className='contacts'>
         <div className='avtar-head' >
             <div className='avatar' >
                 <img src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
             </div>
             <div className='avatar-name' >
                 <p className='name'>Akash bind</p>
                 <p className='date'>6 Aprill at 21:30</p>
             </div>
         </div>
         <div className='discription' >
             <p>my name is akash bind , i live in navi mumbai, my name is akash bind , i live in navi mumbai, my name is akash bind </p>
         </div>
         <div className='post-img'>
             <img src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
         </div>
         <div className='like-div'>
             <AiFillLike></AiFillLike> 
             <BiComment></BiComment>
             <FaShare></FaShare>
         </div>
     </div>
 )
}
