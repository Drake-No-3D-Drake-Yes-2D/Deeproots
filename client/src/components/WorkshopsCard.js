import React from "react"

function WorkshopCardHeader({ title, date }) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "auto" }}>{title}</div>
            <div style={{ flex: "none" }}>{date.toDateString()}</div>
        </div>
    );
}

function WorkshopCardBody({ image, prices, title }) {
    return (
        <div style={{ position: "relative" }}>
            <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={require(`../static/workshops/${image}`)} alt={title} />
            <button style={{ position: "absolute", bottom: "10%", right: "5%" }}>{prices[0].title} (${prices[0].price})</button>
        </div>
    );
}

export default function WorkshopCard({ date, title, prices, image }) {
    return (
        <div style={{ margin: "2em 0" }} >
            <WorkshopCardHeader date={date} title={title} />
            <WorkshopCardBody prices={prices} title={title} image={image} />
        </div>
    );
}