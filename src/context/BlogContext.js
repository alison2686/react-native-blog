import React, { useState } from 'react'

const BlogContext = React.createContext()

// component that can accept another component as an arguument that can be shown in BlogProvider, {children} is actually <App>
export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([])

    // helper function that uses setter function to add a new blog post
    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext