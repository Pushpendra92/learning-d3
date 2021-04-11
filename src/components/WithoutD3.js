import React from 'react'

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 80;
const eyeOffsetY = 50;
const radius = 40

const WithoutD3 = () => {
    return (
        <svg width={width} height={height}>
        <circle
          cx={centerX}
          cy={centerY}
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        ></circle>
        <circle
          cx={centerX - eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={radius}
        ></circle>
        <circle
          cx={centerX + eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={radius}
        ></circle>
        <circle cx={centerX} cy="300" r={radius} fill="red"></circle>
      </svg>
    )
}

export default WithoutD3
