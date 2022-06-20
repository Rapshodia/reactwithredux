import React from 'react'
import Card from '../Card'




const Hola = ()=>{

    const posts = [
    {
        title: 'boost your conversation rate',
        href:'#',
        category: {name: 'article'},
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illum nulla architecto voluptate quisquam qui repudiandae unde beatae amet provident corrupti commodi! Libero impedit a nam, iure quia eum totam?',
        imageUrl:'https://images.unsplash.com/photo-1655326525214-a49dbe71975f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        title: 'algo nuevo',
        href:'#',
        category: {name: 'article'},
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illum nulla architecto voluptate quisquam qui repudiandae unde beatae amet provident corrupti commodi! Libero impedit a nam, iure quia eum totam?',
        imageUrl:'https://images.unsplash.com/photo-1655326525214-a49dbe71975f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    
    },
    {
        title: 'dos nuevo',
        href:'#',
        category: {name: 'article'},
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illum nulla architecto voluptate quisquam qui repudiandae unde beatae amet provident corrupti commodi! Libero impedit a nam, iure quia eum totam?',
        imageUrl:'https://images.unsplash.com/photo-1655326525214-a49dbe71975f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    
    },
    ]

  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-3 md:max-w-none'>
        { 
            posts ?
            posts.map(post =>(
                <Card
                title={post.title}
                href={post.href}
                category={post.categorytegory}
                description={post.description}
                imageUrl={post.imageUrl}/>
            )):<>Loading...</>
        }
        
    </div>
  )
}

export default Hola