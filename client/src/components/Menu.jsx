import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!",
            disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aut officia nesciunt, optio nobis soluta libero sed minus quisquam, est repellendus ipsam voluptatem dignissimos aliquid. Doloremque repellendus unde quo fugit",
            img: "https://i.ibb.co/t4NPyvx/sahand-babali-ei-Ndbq-WZww4-unsplash.jpg"
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
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map((post) =>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu