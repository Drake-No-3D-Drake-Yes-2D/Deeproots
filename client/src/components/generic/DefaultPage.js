import React from "react";
import '../General.css';

export default function DefaultPage({ children }) {
    return (
        <div className= "background">
            <div style={{margin: "40px auto", maxWidth: "650px", padding: "0 10px"}}>{children}
            </div>
        </div>
    );
}