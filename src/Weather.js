import React from "react";

export default function Weather () {
    function handleClick () {
        alert ("Hello");
    }
    
    return <button onclick={handleClick}> Current Temperature </button>;
}