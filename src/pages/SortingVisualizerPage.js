import React from "react";
import SortingVisualizer from './SortingVisualizer';

function SortingVisualizerPage(){
    return (
        <>
         <div className="hero-container">
        <video src="/videos/clouds.mp4" autoPlay loop muted />
        <div>
            <SortingVisualizer> </SortingVisualizer>

        </div>
        </div>
        </>
    );

}

export default SortingVisualizerPage;