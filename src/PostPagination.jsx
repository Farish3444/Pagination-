import React,{useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostJson from './PostJson';

const PostPagination = () => {
    
    const url = `https://jsonplaceholder.typicode.com/posts`
    const [posts, setPosts] = useState([]);
    const [isloading, setisLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperPage, setPostperPage] = useState(10);


    useEffect(()=>{
       const fetchPosts =async()=>{
           setisLoading(true)
           const res = await axios.get(url)
           console.log(res.data)
           setPosts(res.data)
           setisLoading(false);
       }

       fetchPosts();
    },[]);


    return (
        <div className="container mt-5">
           <h2 className="">The Pagination Posts</h2>
            <PostJson isloading={isloading} posts={posts}/>
        </div>
    )
}

export default PostPagination