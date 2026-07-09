import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const NetworkGlobe = () => {
  const globeEl = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  
  const arcsData = [
    { startLat: 9.08, startLng: 8.67, endLat: 51.5, endLng: -0.12 },   // Nigeria to London
    { startLat: -19.01, startLng: 29.15, endLat: 51.5, endLng: -0.12 }, // Zimbabwe to London
    { startLat: 9.08, startLng: 8.67, endLat: -19.01, endLng: 29.15 },  // Nigeria to Zimbabwe
  ];

  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

 
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.2; // Speed of the turn
      globeEl.current.controls().enableZoom = false;    // Prevents scroll-trapping
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      {dimensions.width > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)" // Transparent background
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg" // Sleek dark map
          arcsData={arcsData}
          arcColor={() => '#C8332E'} // Your specific brand red
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={1500} // Makes the lines look like flowing data
          arcStroke={1.5}
        />
      )}
    </div>
  );
};

export default NetworkGlobe;