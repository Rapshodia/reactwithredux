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
    <div className='grid grid-cols-3 gap-10'>
        { 
            posts ?
            posts.map(post =>(
                <Card
                title={post.title}
                href={post.href}
                category={post.categorytegory}
                description={post.description}
                imageUrl={post.imageUrl}/>
            )):
            <div className='animate-pulse'>
                <div className='w-full h-36 bg-gray-100'></div>
                <div className='w-full my-1 h4 bg-gray-100'></div>
                <div className='w-full my-1 h4 bg-gray-100'></div>
            </div>
        }
        
    </div>
  )
}

export default Hola