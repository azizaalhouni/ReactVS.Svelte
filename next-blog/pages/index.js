import Head from 'next/head'
import styles from '../styles/layout.module.css'
import ArticleList from '../components/ArticleList'
import Pagination  from '../components/Pagination'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Posts from '../components/Posts';

// const App = () => {
//     const [postsPerPage, setPostsPerPage] = useState(10);
//     const[posts, setPosts] = useState([]);
//     const[loading, setLoading] = useState(false);
//     const[currentPage, setCurrentPage] = useState(1);
//     useEffect(()=> {
//       const fetchPosts = async () => {
//         setLoading(true);
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setPosts(res.data);
//         setLoading(false);
//       };
//       fetchPosts();
//     },[]);

//     const indexOfLastPost = currentPage* postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//     const paginate = pageNumber => setCurrentPage(pageNumber);
//     return (
//       <div >
//         <Head>
         
//         </Head>
//       <h1>Articles Title</h1>
//       <Posts posts={currentPosts} loading={loading}/>
//       <Pagination 
//       postsPerPage={postsPerPage}
//        totalPosts={posts.length}
//         paginate={paginate}>

//         </Pagination>
//       </div>
//     )
//   }
  
//   export default App;

export default function Home({articles}) {
  
  return (
    <div >
      <Head>
        <title>Web Dev new</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
    <h1>Articles Title</h1>

     <ArticleList articles = {articles}/>
    {/* <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts}></Pagination> */}
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  // setPosts(res.data);
  return {
    props: {
      articles
    },
  }
}
