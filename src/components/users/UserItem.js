import React from 'react'
import PropTypes from 'prop-types'

// export const UserItem= (props) => {
//    const {login,avatar_url, html_url} = props.user;
//         return(<>           
//          <div className='card text-center'>
//                <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}} />

//                <h3>{login}</h3>
//                <div>
//                 <a href={html_url} className="btn btn-dark btn-sm my-1">
//                     More
//                 </a>
//             </div>
//             </div>
            
//             </>

//         )
// }

export const UserItem = (props) => {
     const {login,avatar_url, html_url} = props.user; ///<= to get rid of this line we make the destructuring in place of props
         return(<>           
          <div className='card text-center'>
                <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}} />
                <h3>{login}</h3>
                <div>
                 <a href={html_url} className="btn btn-dark btn-sm my-1">
                     More
                 </a>
             </div>
             </div>
             
             </>
 
         )
 }
// Setting what we are waiting for in props for our Obj.
 UserItem.propTypes ={
     user: PropTypes.object.isRequired
 }
