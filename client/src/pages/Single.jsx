import React from 'react'
import { UilEditAlt } from '@iconscout/react-unicons'
import { UilTrashAlt } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://i.ibb.co/ydGnhYj/xiaolong-wong-nibg-G33-H0-F8-unsplash.jpg" alt="" />
                <div className="user">
                    <img src="https://i.ibb.co/d4NDyZZ/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="" />
                    <div className="info">
                        <span> Djalel</span>
                        <p>Posted 2 day ago</p>
                    </div>
                    <div className="Ediit">
                        <Link to="/write?edit=1">
                            <UilEditAlt className="edit" />
                        </Link>
                        <UilTrashAlt className="delet" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga corrupti placeat! Maxime provident deleniti aperiam doloribus cumque sed incidunt placeat, ullam in cum dolore voluptatibus, officia praesentium facilis. Ab!
                    Culpa, ut! Blanditiis dicta quos quibusdam provident excepturi numquam odio.
                    <br />
                    <br />
                    Ad consequuntur ut laborum eius iusto eaque enim, iste commodi reprehenderit harum necessitatibus cum doloribus nesciunt. Modi accusamus soluta totam!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis quam itaque impedit ipsa non accusamus quia. Optio, a accusamus, aperiam nemo tempore facilis expedita enim non laborum iusto quasi.
                    Temporibus quas numquam, esse voluptatem fugit corrupti quia tempore eos, at ea commodi, laboriosam est! Officia hic quibusdam pariatur quae, perspiciatis, nulla vel officiis libero est nisi eveniet ullam quod.
                    Eius deleniti asperiores adipisci officiis
                    <br />
                    <br />
                    quia distinctio, quod consequatur eligendi? Commodi atque veniam quod fuga, quae non qui dolores facilis distinctio vitae nesciunt ut nisi aliquid voluptas ipsam impedit incidunt.
                    Culpa id quaerat nesciunt ipsum, exercitationem porro vero ducimus eligendi, nobis perspiciatis quod aliquam officiis laudantium commodi possimus quibusdam, obcaecati natus voluptates voluptatem dolores iusto odio. Deserunt quidem animi aliquam?
                    Repellat voluptate pariatur veniam iure, fuga sunt, sapiente dolor ullam expedita ipsa iusto minus exercitationem explicabo eveniet eligendi! Voluptatum molestiae nemo sapiente fugiat quas nihil nulla nisi dolorem magnam at?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at similique tenetur natus totam, ullam ab saepe dolore voluptas sunt ipsum corrupti libero quia amet perspiciatis. Blanditiis voluptatibus ea harum.
                </p>
            </div>
            <Menu />

        </div>
    )
}

export default Single