import React from 'react';
import '../styles/PopularTrips.css'

const PopularTrips=()=>{
    return (
        <div>
            <section className="popular-section trips">
            <h2>Popular Trips</h2>
            <div className="card-container">
            {['Beach Getaway', 'Mountain Adventure', 'City Explorer'].map((trip, index) => (
                <div key={index} className="card">
                <div className="card-image"></div>
                <h3>{trip}</h3>
                <p>Experience the journey of a lifetime.</p>
                <button className="view-details">View Details</button>
                </div>
            ))}
            </div>
            <button className="view-more">View More Trips</button>
        </section>

        </div>
    )
}

export default PopularTrips