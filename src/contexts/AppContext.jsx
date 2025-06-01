import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useCallback } from "react";
// console.log("entered AppContext")
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [blogsData, setBlogsData] = useState(null);
    const [posts, setPosts] = useState([])
    const [blog, setBlog] = useState({})
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    // const [pageno, setPageno] = useState(1);
    // const [posts, setPosts] = useState([]);
    console.log("inside appcontext")
    console.log(location);
    const fetchBlogsData = useCallback(async (purpose, val, purpose2) => {
        try{
            setLoading(true);
            // console.log(1);
            // console.log(purpose);
            let url = "";
            if(purpose === "page"){
                // console.log(2);
                
                if(!purpose2){
                    let pageno = val;
                    url = `${baseUrl}?page=${pageno}`;
                }
                else{
                    if(purpose2 === "category"){
                        let category = location.pathname.split("/").at(-1);
                        console.log("category: ", category);
                        let pageno = val;
                        url = `${baseUrl}?page=${pageno}&category=${category}`;
                    }
                    if(purpose2 === "tags"){
                        let tag = location.pathname.split("/").at(-1);
                        console.log("tag: ", tag);
                        let pageno = val;
                        url = `${baseUrl}?page=${pageno}&tag=${tag}`;
                    }
                }
                // console.log(3);
            }
            if(purpose === "related-blogs"){
                let blogId = val;
                url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`
            }
            
            // console.log(4);
            // console.log(url);
            const response = await fetch(url);
            const output = await response.json();
            setBlogsData(output);
            console.log("o/p of api: ", output)
            if(purpose === "page"){
                setPosts(output.posts)
            }
            if(purpose === "related-blogs"){
                setBlog(output.blog)
                setRelatedBlogs(output.relatedBlogs)
            }

            setLoading(false);
        }
        catch(error) {
            // console.log("api call failed");
            // setBlogData(null);
            // setLoading(false);
            // setPageno(1);
            //setPosts([]);
            alert("api call failed");
        }
    }, [location.pathname]);
    useEffect(() => {
        
        if(location.pathname === "/") {
            fetchBlogsData("page", 1);
        }
        if(location.pathname.split("/").at(-2) === "blogs"){
            let blogId = location.pathname.split("/").at(-1)
            fetchBlogsData("related-blogs", blogId);
        }
        if(location.pathname.split("/").at(-2) === "categories"){
            console.log("path: ", location.pathname.split("/").at(-2))
            let page = 1;
            fetchBlogsData("page", page, "category")
        }
        if(location.pathname.split("/").at(-2) === "tags"){
            console.log("path: ", location.pathname.split("/").at(-2))
            let page = 1;
            fetchBlogsData("page", page, "tags")
        }
    }, [location.pathname, fetchBlogsData]);

    const value = {
        loading, 
        setLoading, 
        blogsData, 
        setBlogsData, 
        // pageno, 
        // setPageno,
        fetchBlogsData,
        posts, 
        setPosts,
        blog,
        setBlog,
        relatedBlogs,
        setRelatedBlogs
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}