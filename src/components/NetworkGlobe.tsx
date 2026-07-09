import { useEffect, useRef } from 'react';

interface Point3D {
  lat: number;
  lng: number;
}

const NetworkGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0; 
    let angle = 0;
    let pulseTime = 0; 

    
    const globeGrid: Point3D[] = [];
    for (let lat = -80; lat <= 80; lat += 6) {
      const radLat = (lat * Math.PI) / 180;
      const radiusAtLat = Math.cos(radLat);
      const dotCount = Math.max(6, Math.floor(55 * radiusAtLat));
      for (let i = 0; i < dotCount; i++) {
        globeGrid.push({ lat, lng: (i * 360) / dotCount });
      }
    }

    
    const networkNodes = [
      { lat: 51.5074, lng: -0.1278 }, // London
      { lat: 9.0820,  lng: 8.6753 },  // Nigeria
      { lat: -19.0154, lng: 29.1549 }, // Zimbabwe
      { lat: 38.9072, lng: -77.0369 }, // Transatlantic extension (DC)
    ];

    const resize = (canvasElem: HTMLCanvasElement) => {
      const size = Math.min(canvasElem.parentElement?.offsetWidth || 380, 520);
      canvasElem.width = size;
      canvasElem.height = size;
    };
    
    resize(canvas);
    const handleResize = () => resize(canvas);
    window.addEventListener('resize', handleResize);

    const project3D = (lat: number, lng: number, globeRadius: number, currentRotation: number, canvasWidth: number, canvasHeight: number) => {
      const radLat = (lat * Math.PI) / 180;
      const radLng = ((lng + currentRotation) * Math.PI) / 180;

      
      const x3d = globeRadius * Math.cos(radLat) * Math.sin(radLng);
      const y3d = globeRadius * Math.sin(radLat);
      const z3d = globeRadius * Math.cos(radLat) * Math.cos(radLng);

      return {
        x: (canvasWidth / 2) + x3d,
        y: (canvasHeight / 2) - y3d,
        z: z3d
      };
    };

    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const globeRadius = canvas.width * 0.38;
      angle += 0.25;      
      pulseTime += 0.006; 

      
      globeGrid.forEach((point) => {
        const projected = project3D(point.lat, point.lng, globeRadius, angle, canvas.width, canvas.height);
        if (projected.z > -20) { 
          const intensity = (projected.z + globeRadius) / (globeRadius * 2);
          const dotSize = projected.z > 0 ? 1.2 : 0.7; 
          
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(11, 13, 16, ${intensity * 0.22})`;
          ctx.fill();
        }
      });

      
      const activeNodes = networkNodes.map((node) => 
        project3D(node.lat, node.lng, globeRadius, angle, canvas.width, canvas.height)
      );

      
      for (let i = 0; i < activeNodes.length; i++) {
        for (let j = i + 1; j < activeNodes.length; j++) {
          const nodeA = activeNodes[i];
          const nodeB = activeNodes[j];

          if (nodeA.z > -60 && nodeB.z > -60) {
            const structuralDepth = Math.min(nodeA.z, nodeB.z);
            const intensity = (structuralDepth + globeRadius) / (2 * globeRadius);

            
            const midX = (nodeA.x + nodeB.x) / 2;
            const midY = (nodeA.y + nodeB.y) / 2 - (globeRadius * 0.22);

            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.quadraticCurveTo(midX, midY, nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.4})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            
            const t = (pulseTime + (i * 0.25)) % 1;  
            const mt = 1 - t;
            
            
            const pulseX = mt * mt * nodeA.x + 2 * mt * t * midX + t * t * nodeB.x;
            const pulseY = mt * mt * nodeA.y + 2 * mt * t * midY + t * t * nodeB.y;
            const pulseZ = mt * mt * nodeA.z + t * t * nodeB.z;

            if (pulseZ > -20) {
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(200, 51, 46, ${intensity * 0.85})`;
              ctx.fill();
            }
          }
        }
      }

      
      activeNodes.forEach((node) => {
        if (node.z > 0) {
          const intensity = node.z / globeRadius;

          
          ctx.beginPath();
          ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 51, 46, ${intensity})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', window.removeEventListener ? handleResize : handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="block select-none pointer-events-none" />;
};

export default NetworkGlobe;