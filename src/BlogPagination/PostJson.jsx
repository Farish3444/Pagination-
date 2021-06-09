import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const PostJson = ({isloading,posts}) => {

    if (isloading){
        return (
            <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
      );
    }

    return (
        <div>
            <ul className="list-group mb-4">
             {posts.map(m =>(
                 <li key={m.id} className="list-group-item">{m.title}</li>
             ))}
            </ul>
        </div>
    )
}

export default PostJson
