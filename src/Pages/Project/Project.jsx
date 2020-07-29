import React, {useState, useEffect} from 'react'
import './Project.css'
import note from '../../images/note.png'
import note2 from '../../images/note2.png'
import iphone from '../../images/iphone.png'
import ipad from '../../images/ipad.png'
import imac from '../../images/imac.jpg'



function Project({match}) {
    
    const [rangeValue, setRangeValue] = useState('0')
    const [loading, setLoading] = useState(false) 
    const images = [note, note2, note];

    const handleChange = (e) => {
        setRangeValue(e.target.value)
    }

    

    if(loading) return 'loading';
    else return (
        <>
            <div className="fluid-container project__container">
                <img className="notebookImage" src={images[Number(rangeValue)]} alt=""/>
                <input type="range" onChange={handleChange} min="0" max="2" value={rangeValue} id="slider" />
            </div>

            <section className="project__container2 fluid-container">
                <div className="row project-row" id="row1">
                    <div className="project__container-imgBox col-12 col-md-6">
                        <img src={iphone} alt=""/>
                    </div>
                    <div className="project__container-content col-12 col-md-6">
                        <h2>100% responsive</h2>
                        <p>Perspiciatis, doloremque nihil. Molestiae beatae, magnam asperiores voluptate esse nemo maxime voluptates aliquam. Autem ratione nesciunt labore corporis, voluptates iusto sed quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur ipsam perferendis porro ratione recusandae doloremque itaque animi blanditiis quidem culpa cum, impedit suscipit dignissimos voluptates vero molestias? Optio, dolor.</p>
                    </div>

                </div>
            </section>

            <section className="project__container2">
                <div className="row project-row" id="row2">
                    <div className="project__container-content col-12 col-md-6">
                        <h2>100% responsive</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea nostrum eligendi esse veniam molestias molestiae cumque, fugit doloremque sed. Eum laboriosam corrupti maxime ea quia expedita soluta, explicabo dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque atque nesciunt eius ex quidem et nam minima, pariatur ipsum. Iste veniam sunt similique nemo quisquam quis quidem rem culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque nihil. Molestiae beatae, magnam asperiores voluptate esse nemo maxime voluptates aliquam. Autem ratione nesciunt labore corporis, voluptates iusto sed quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur ipsam perferendis porro ratione recusandae doloremque itaque animi blanditiis quidem culpa cum, impedit suscipit dignissimos voluptates vero molestias? Optio, dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea nostrum eligendi esse veniam molestias molestiae cumque, fugit doloremque sed. Eum laboriosam corrupti maxime ea quia expedita soluta, explicabo dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque atque nesciunt eius ex quidem et nam minima, pariatur ipsum. Iste veniam sunt similique nemo quisquam quis quidem rem culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque nihil. Molestiae beatae, magnam asperiores voluptate esse nemo maxime voluptates aliquam. Autem ratione nesciunt labore corporis, voluptates iusto sed quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur ipsam perferendis porro ratione recusandae doloremque itaque animi blanditiis quidem culpa cum, impedit suscipit dignissimos voluptates vero molestias? Optio, dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea nostrum eligendi esse veniam molestias molestiae cumque, fugit doloremque sed. Eum laboriosam corrupti maxime ea quia expedita soluta, explicabo dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque atque nesciunt eius ex quidem et nam minima, pariatur ipsum. Iste veniam sunt similique nemo quisquam quis quidem rem culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque nihil. Molestiae beatae, magnam asperiores voluptate esse nemo maxime voluptates aliquam. Autem ratione nesciunt labore corporis, voluptates iusto sed quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur ipsam perferendis porro ratione recusandae doloremque itaque animi blanditiis quidem culpa cum, impedit suscipit dignissimos voluptates vero molestias? Optio, dolor.</p>
                    </div>
                    <div className="project__container-imgBox col-12 col-md-6">
                        <img src={ipad} alt=""/>
                    </div>
                </div>
            </section>
            <img className="imageVideo" src={imac} alt=""/>
        </>
    )
}

export default Project








