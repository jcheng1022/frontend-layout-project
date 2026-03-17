// src/components/FabricCanvasComponent.tsx
'use client'; // Marks this file as a Client Component

import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // For Fabric v6

const DraggableTableView = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasEl.current) return;

    // Initialize the Fabric.js canvas instance
    const canvas = new fabric.Canvas(canvasEl.current, {
      // Add your canvas options here
      width: 500,
      height: 500,
      backgroundColor: '#f5f5f5',
    });

    // You can now add objects to the canvas
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 60,
      height: 60,
    });
    canvas.add(rect);
    console.log(`initial position: ${rect.left}, ${rect.top}`)
    
    canvas.on('object:moving', (e) => {
        const obj = e.target;
        // console.log(obj.getBoundingRect())
        // if(obj.left = 40) {
        //     console.log(`object is at the left boundary, ${obj.left}`)
        //     obj.left = 40;
        // }
    })

    // Ensure the canvas is disposed of when the component unmounts
    return () => {
      canvas.dispose();
    };
  }, []); // Empty dependency array ensures this runs once after mount

  return <canvas ref={canvasEl} />;
};

export default DraggableTableView;
