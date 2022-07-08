import React from 'react'

const BlogContext = React.createContext()

// component that can accept another component as an arguument that can be shown in BlogProvider, {children} is actually <App>
export const BlogProvider = ({ children }) => {
    const blogPosts = [
        { title: 'Blog Post #1' },
        { title: 'Blog Post #2' },
        { title: 'Blog Post #3' }
    ]

    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext