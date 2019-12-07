import React from "react";
import '../General.css';

// page with reasonable default styling
// prevents content from being too wide
export default function DefaultPage({ children }) {
    return (
        <div className= "background">
            <div style={{margin: "40px auto", maxWidth: "650px", padding: "0 10px"}}>{children}
            </div>
        </div>
    );
}