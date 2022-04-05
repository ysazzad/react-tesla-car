import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='theory-part'>Theory Part</h1>
            <div className='blog-written'>
                <div className='blog-one' >
                    <h1>What is Semantic Tag?</h1>
                    <p>
                        1. HTML was originally created as a markup language to describe documents on the early internet. <br />
                        2.Elements such as header, footer  and article are all considered semantic . <br />
                        3.they accurately describe the purpose of the element and the type of content that is inside them. <br />
                        4. They group other elements together into page sections.  <br />
                        5.A semantic element clearly describes its meaning to both the browser and the developer.
                    </p>
                </div>
                <div className='blog-two'>
                    <h1>What is Context API?</h1>
                    <p>
                        1.The React Context API is a way for a React app to effectively produce global variables that can be passed around. <br />
                        2. This is the alternative to prop drilling or moving props from grandparent to child to parent . <br />
                        3.React.createContext() is all you need. It returns a consumer and a provider. <br />
                        4.Provider is a component that as it's names suggests provides the state to its children. <br />
                        5.Consumer as it so happens is a component that consumes and uses the state.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;