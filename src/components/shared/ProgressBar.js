import React from "react";

const ProgressBar = ({swiper, value,questions }) => {

    const containerStyles = {
        height: "20px",
        // backgroundColor: "#e0e0de",
        borderRadius: "5px",
        margin: "10px 0",
    };

    const fillerStyles = {
        height: "100%",
        width: `${(value / questions) * 100}%`,
        backgroundColor: "#f43f5e",
        borderRadius: "inherit",
        textAlign: "right",
        transition: "width 0.2s ease-in-out",
    };

    const labelStyles = {
        padding: "5px",
        color: "#fff",
        fontWeight: "bold",
    };



    return (
        <>
            <div style={containerStyles} className={`${value > questions ?"hidden":""}`}>
                <div style={fillerStyles} >
                    <span className={`${swiper?.activeIndex === 0 ? "hidden" : ""} `} style={labelStyles}>{value}/{questions}</span>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
