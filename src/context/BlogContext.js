import React, { useReducer } from 'react'

const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

// component that can accept another component as an arguument that can be shown in BlogProvider, {children} is actually <App>
export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, [])

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost'})
    }


    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext