import { useEffect, useRef } from 'react';

interface Point3D {
  lat: number;
  lng: number;
  isLand: boolean;
}

export default function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let angle = 0;
    let pulseTime = 0;

    // Mathematical boundary classifier to trace continent shapes without external maps
    const checkIsLand = (lat: number, lng: number): boolean => {
      let l = lng;
      while (l > 180) l -= 360;
      while (l < -180) l += 360;

      // Africa
      if (lat > -35 && lat < 35 && l > -18 && l < 51) {
        if (lat < 5 && l > 42) return false; // Refine East Africa coast
        return true;
      }
      // Europe
      if (lat >= 35 && lat < 70 && l > -10 && l < 40) return true;
      // Asia
      if (lat >= 5 && lat < 75 && l >= 40 && l < 145) {
        if (lat < 15 && l < 85) return false; // Refine Indian Ocean boundaries
        return true;
      }
      // North America
      if (lat >= 15 && lat < 75 && l > -165 && l < -50) {
        if (lat < 30 && l > -90) return false; // Refine Gulf of Mexico
        return true;
      }
      // South America
      if (lat > -56 && lat <= 15 && l > -90 && l < -35) {
        if (lat < -20 && l > -58) return false; // Taper down Southern tip
        return true;
      }
      // Australia
      if (lat > -40 && lat < -10 && l > 113 && l < 154) return true;

      return false;
    };

    // Generate a high-resolution grid to give continents sharp definition
    const globeGrid: Point3D[] = [];
    for (let lat = -80; lat <= 80; lat += 4) {
      const radLat = (lat * Math.PI) / 180;
      const radiusAtLat = Math.cos(radLat);
      const dotCount = Math.max(6, Math.floor(85 * radiusAtLat));
      for (let i = 0; i < dotCount; i++) {
        const lng = (i * 360) / dotCount;
        globeGrid.push({ 
          lat, 
          lng, 
          isLand: checkIsLand(lat, lng) 
        });
      }
    }

    const networkNodes = [
      { lat: 51.5074, lng: -0.1278 },  // London
      { lat: 9.0820,  lng: 8.6753 },   // Nigeria
      { lat: -19.0154, lng: 29.1549 }, // Zimbabwe
      { lat: 38.9072, lng: -77.0369 }, // Transatlantic node (DC)
    ];

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const size = Math.min(canvas.parentElement.offsetWidth || 380, 520);
      canvas.width = size;
      canvas.height = size;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const renderLoop = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const globeRadius = canvas.width * 0.38;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      angle += 0.20;      // Stately rotation speed
      pulseTime += 0.006; // Controlled travel speed for connecting lines

      // Draw elegant outer boundary ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(11, 13, 16, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Render Grid Dots (Differentiation creates the continent traces)
      globeGrid.forEach((point) => {
        const radLat = (point.lat * Math.PI) / 180;
        const radLng = ((point.lng + angle) * Math.PI) / 180;

        const x3d = globeRadius * Math.cos(radLat) * Math.sin(radLng);
        const y3d = globeRadius * Math.sin(radLat);
        const z3d = globeRadius * Math.cos(radLat) * Math.cos(radLng);

        if (z3d > -20) {
          const intensity = (z3d + globeRadius) / (globeRadius * 2);
          
          ctx.beginPath();
          if (point.isLand) {
            // Landmass Dot Style (Bold & High Contrast)
            const dotSize = z3d > 0 ? 1.6 : 0.9;
            ctx.arc(centerX + x3d, centerY - y3d, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(11, 13, 16, ${intensity * 0.55})`;
          } else {
            // Ocean Dot Style (Faint & Discrete)
            ctx.arc(centerX + x3d, centerY - y3d, 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(11, 13, 16, ${intensity * 0.06})`;
          }
          ctx.fill();
        }
      });

      // Project network node anchors
      const projectedNodes = networkNodes.map((node) => {
        const radLat = (node.lat * Math.PI) / 180;
        const radLng = ((node.lng + angle) * Math.PI) / 180;
        const x3d = globeRadius * Math.cos(radLat) * Math.sin(radLng);
        const y3d = globeRadius * Math.sin(radLat);
        const z3d = globeRadius * Math.cos(radLat) * Math.cos(radLng);
        return { x: centerX + x3d, y: centerY - y3d, z: z3d };
      });

      // Render Connection Arcs and Kinetic Signals
      ctx.lineWidth = 1.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const nodeA = projectedNodes[i];
          const nodeB = projectedNodes[j];

          if (nodeA.z > -60 && nodeB.z > -60) {
            const minZ = Math.min(nodeA.z, nodeB.z);
            const intensity = (minZ + globeRadius) / (globeRadius * 2);

            const midX = (nodeA.x + nodeB.x) / 2;
            const midY = (nodeA.y + nodeB.y) / 2 - (globeRadius * 0.28); // Higher arc clearance
            const midZ = (nodeA.z + nodeB.z) / 2 + (globeRadius * 0.2);

            // Draw Red Connection Stream
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.quadraticCurveTo(midX, midY, nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.75})`;
            ctx.stroke();

            // Bezier Trajectory interpolation for data pulses
            const t = (pulseTime + (i * 0.25)) % 1;
            const mt = 1 - t;

            const pulseX = mt * mt * nodeA.x + 2 * mt * t * midX + t * t * nodeB.x;
            const pulseY = mt * mt * nodeA.y + 2 * mt * t * midY + t * t * nodeB.y;
            const pulseZ = mt * mt * nodeA.z + 2 * mt * t * midZ + t * t * nodeB.z;

            if (pulseZ > -10) {
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(200, 51, 46, ${intensity * 0.95})`;
              ctx.fill();
            }
          }
        }
      }

      // Render Core Hub Radar Targets
      projectedNodes.forEach((node) => {
        if (node.z > 0) {
          const intensity = node.z / globeRadius;

          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.55})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 51, 46, ${intensity})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block select-none pointer-events-none" />;
}