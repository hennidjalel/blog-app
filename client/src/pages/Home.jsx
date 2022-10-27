import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!",
            disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aut officia nesciunt, optio nobis soluta libero sed minus quisquam, est repellendus ipsam voluptatem dignissimos aliquid. Doloremque repellendus unde quo fugit",
            img: "https://i.ibb.co/ydGnhYj/xiaolong-wong-nibg-G33-H0-F8-unsplash.jpg"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!",
            disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aut officia nesciunt, optio nobis soluta libero sed minus quisquam, est repellendus ipsam voluptatem dignissimos aliquid. Doloremque repellendus unde quo fugit",
            img: "https://i.ibb.co/6W0j9NP/mae-mu-vb-AEHCrv-XZ0-unsplash.jpg"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!",
            disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aut officia nesciunt, optio nobis soluta libero sed minus quisquam, est repellendus ipsam voluptatem dignissimos aliquid. Doloremque repellendus unde quo fugit",
            img: "https://i.ibb.co/4dYTfJv/tangerine-newt-a9rxef-N9vg-Y-unsplash.jpg"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!",
            disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aut officia nesciunt, optio nobis soluta libero sed minus quisquam, est repellendus ipsam voluptatem dignissimos aliquid. Doloremque repellendus unde quo fugit",
            img: "https://i.ibb.co/DRy5BWm/coco-tafoya-BTLve-PHU5o-unsplash.jpg"
        },
    ]
    return (
        <div className='home'>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.disc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home