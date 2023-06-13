import React from 'react';

const Avatar = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            stroke="none"
            style="border-radius:0%"
        >
            <rect width="100%" height="100%" fill="#Sayed Ahmed"></rect>
            <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="black"
                font-family="sans-serif"
                font-size="50"
            >
                SA
            </text>
            <defs>
                <linearGradient id="Sayed Ahmed" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#A7ACD9"></stop>
                    <stop offset="100%" stop-color="#d9df0b"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Avatar;
