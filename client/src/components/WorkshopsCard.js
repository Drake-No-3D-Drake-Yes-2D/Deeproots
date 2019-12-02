import React from "react"
import ReactMarkdown from 'react-markdown';
import PaymentModal from "./PaymentModal";
import useModal from './useModal';
import './PaymentModal.css'

function WorkshopCardHeader({ title, date }) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "auto", textAlign: "left" }}><b>{title}</b></div>
            <div style={{ flex: "none" }}>{new Date(date).toLocaleDateString()}</div>
        </div>
    );
}

function WorkshopCardImage({ image_url, title }) {
    return (
        <img style={{ maxWidth: "100%", maxHeight: "100%", margin: "0.5em" }} src={image_url} alt={title} />
    );
}

function WorkshopCardPrices({ prices }) {
    const {isShowing, toggle} = useModal();
    return prices.map(price => (
        <div>
            <button style={{ margin: "0.25em" }} onClick={toggle}>{price.title} (${price.price})</button>
            <PaymentModal
                isShowing={isShowing}
                hide={toggle}
                price={price.price}
                title={price.seats}
            />
        </div>
    ));
}

function calcSeatsRemaining(seats, prices) {
    return seats - prices.reduce((acc, x) => acc + (x.seats * x.purchases.filter(y => y.active).length), 0)
}

function WorkshopCardBody({ location, description, seats, prices }) {

    const seatsRemaining = calcSeatsRemaining(seats, prices);
    const availablePrices = prices.filter(x => x.active && x.seats <= seatsRemaining);

    return (
        <div style={{ textAlign: "left" }}>
            <div>Location: {location}</div>
            <ReactMarkdown source={description} />
            <div style={{ textAlign: "left" }}><i>{seatsRemaining} Seats Remaining</i></div>
            <div style={{ textAlign: "right" }}><WorkshopCardPrices prices={availablePrices} /></div>
        </div>
    );
}


export default function WorkshopCard({ date, title, location, description, image_url, seats, prices }) {
    return (
        <div style={{ margin: "2em 0", background: "white", padding: "2em", border: "0.5em solid black" }} >
            <WorkshopCardHeader date={date} title={title} />
            <WorkshopCardImage image_url={image_url} title={title} />
            <WorkshopCardBody location={location} description={description} seats={seats} prices={prices} />
        </div>
    );
}