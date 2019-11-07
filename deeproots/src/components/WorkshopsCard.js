import React from "react"

function WorkshopCardHeader({ title, date }) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "auto" }}>{title}</div>
            <div style={{ flex: "none" }}>{date}</div>
        </div>
    );
}

function WorkshopCardBody({ image, price, title }) {
    return (
        <div style={{ position: "relative" }}>
            <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={require(`../static/workshops/${image}`)} alt={title} />
            <button style={{ position: "absolute", bottom: "2em", right: "2em" }}>Book Event (${price})</button>
        </div>
    );
}

export default function WorkshopCard({ date, title, price, image }) {
    return (
        <div>
            <WorkshopCardHeader date={date} title={title} />
            <WorkshopCardBody price={price} title={title} image={image} />
        </div>
    );
}