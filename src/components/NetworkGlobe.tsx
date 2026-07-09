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

    const globeGrid: Point3D[] = [];
    for (let lat = -80; lat <= 80; lat += 8) {
      const radLat = (lat * Math.PI) / 180;
      const radiusAtLat = Math.cos(radLat);
      const dotCount = Math.max(6, Math.floor(45 * radiusAtLat));
      for (let i = 0; i < dotCount; i++) {
        globeGrid.push({ lat, lng: (i * 360) / dotCount });
      }
    }

    const networkNodes = [
      { lat: 51.5,  lng: -0.12 },
      { lat: 9.08,  lng: 8.67 },
      { lat: -19.01, lng: 29.15 },
      { lat: 25.0,  lng: -40.0 },
      { lat: -10.0, lng: -60.0 },
      { lat: 35.0,  lng: 45.0 },
    ];

    const resize = (canvasElem: HTMLCanvasElement) => {
      const size = Math.min(canvasElem.parentElement?.offsetWidth || 350, 500);
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

      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;

      return { x: centerX + x3d, y: centerY - y3d, z: z3d };
    };

    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const globeRadius = canvas.width * 0.38;
      angle += 0.4;

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(11, 13, 16, 0.04)';
      ctx.lineWidth = 1;
      ctx.stroke();

      globeGrid.forEach((point) => {
        const projected = project3D(point.lat, point.lng, globeRadius, angle, canvas.width, canvas.height);
        if (projected.z > 0) {
          const intensity = projected.z / globeRadius;
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(11, 13, 16, ${intensity * 0.25})`;
          ctx.fill();
        }
      });

      const activeNodes = networkNodes.map((node) => 
        project3D(node.lat, node.lng, globeRadius, angle, canvas.width, canvas.height)
      );

      ctx.lineWidth = 1.2;
      for (let i = 0; i < activeNodes.length; i++) {
        for (let j = i + 1; j < activeNodes.length; j++) {
          const nodeA = activeNodes[i];
          const nodeB = activeNodes[j];

          if (nodeA.z > -40 && nodeB.z > -40) {
            const structuralDepth = Math.min(nodeA.z, nodeB.z);
            const intensity = (structuralDepth + globeRadius) / (2 * globeRadius);

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            const midX = (nodeA.x + nodeB.x) / 2;
            const midY = (nodeA.y + nodeB.y) / 2 - (globeRadius * 0.12);
            ctx.quadraticCurveTo(midX, midY, nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.35})`;
            ctx.stroke();
          }
        }
      }

      activeNodes.forEach((node) => {
        if (node.z > 0) {
          const intensity = node.z / globeRadius;

          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 51, 46, ${intensity * 0.15})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2);
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
};

export default NetworkGlobe;