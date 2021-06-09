import React,{useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostJson from './PostJson';
import PaginateIt  from './PaginateIt';

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

const postsPerPage = 10
const totalPosts = 50



    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            hello world Pagination
            <PostJson isloading={isloading} posts={posts}/>
            <PaginateIt 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
            />
        </div>
    )
}

export default PostPagination