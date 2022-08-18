import { useState } from 'react'
import './App.css';
import './css/post.css';
import { AiFillLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import {Inputbar} from "./Components/inputbar"

function App() {

  const [postdata, setPostdata] = useState([
    {
      img: 'https://media2.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.gif?cid=f23b8b95emqezfprxqoo2mmmeea7k0onp6b08pvgeviyb3d7&rid=giphy.gif&ct=g',
      text: 'hello welcome',
      time : "8/18/2022, 7:53:02 PM"
    }
  ])


  return (
    <div className="App">
      <Inputbar setPostdata={setPostdata} postdata={postdata} ></Inputbar>
      {postdata.map((post) => {
        return (
          <div className='contacts'>
         <div className='avtar-head' >
             <div className='avatar' >
                 <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
             </div>
             <div className='avatar-name' >
                 <p className='name'>Akash bind</p>
                <p className='date'>{post.time}</p>
             </div>
         </div>
         <div className='discription' >
             <p>{post.text}</p>
         </div>
            {post.img == "null" ? null :
              <div className='post-img'>
                <img src={post.img} alt="post-img" />
              </div>}
         <div className='like-div'>
             <AiFillLike></AiFillLike> 
             <BiComment></BiComment>
             <FaShare></FaShare>
         </div>
      </div>
      )
      })}
    </div> 
  )
}

export default App