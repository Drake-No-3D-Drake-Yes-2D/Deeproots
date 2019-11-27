import React from "react"

function WorkshopCardHeader({ title, date }) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "auto" }}>{title}</div>
            <div style={{ flex: "none" }}>{date}</div>
        </div>
    );
}

function WorkshopCardBody({ imageUrl, price, title }) {
    return (
        <div style={{ position: "relative" }}>
            <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={imageUrl} alt={title} />
            <button style={{ position: "absolute", bottom: "10%", right: "5%" }}>Book Event (${price})</button>
        </div>
    );
}

export default function WorkshopCard({ date, title, price, imageUrl }) {
    return (
        <div style={{ margin: "2em 0" }} >
            <WorkshopCardHeader date={date} title={title} />
            <WorkshopCardBody price={price} title={title} imageUrl={imageUrl} />
        </div>
    );
}