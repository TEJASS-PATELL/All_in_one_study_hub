import React from 'react'
import "../style/Review.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


export default function Review() {
    return (
        <section id='review'>
            {/* <h1>Review Section</h1> */}
            <div className='review-container'>
                {/* Change content according to your application */}
                <div className="review-card">
                    <p>
                        "This is the best skeleton web app for starting projects! It includes all essential components like login, signup, features, pricing, FAQ, and review sections — perfect for building full-stack applications quickly."
                    </p>
                    <span> Tejas Patel</span>
                    <div className="review-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </section>
    )
}
