import React from "react";

export default function DefaultPage({ children }) {
    return (
        <div style={{margin: "40px auto", maxWidth: "650px", padding: "0 10px"}}>{children}</div>
    );
}