import { useEffect, useRef } from 'react';

interface Point3D {
  lat: number;
  lng: number;
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

    // Generate a sharper, denser grid structure for an upscale architectural silhouette
    const globeGrid: Point3D[] = [];
    for (let lat = -80; lat <= 80; lat += 6) {
      const radLat = (lat * Math.PI) / 180;
      const radiusAtLat = Math.cos(radLat);
      const dotCount = Math.max(6, Math.floor(55 * radiusAtLat));
      for (let i = 0; i < dotCount; i++) {
        globeGrid.push({ lat, lng: (i * 360) / dotCount });
      }
    }

    // Coordinates mapping directly to your academic timeline
    const networkNodes = [
      { lat: 51.5074, lng: -0.1278 },  // London
      { lat: 9.0820,  lng: 8.6753 },   // Nigeria
      { lat: -19.0154, lng: 29.1549 }, // Zimbabwe
      { lat: 38.9072, lng: -77.0369 }, // Global Transatlantic Extension
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
      // Direct explicit checks inside the loop ensure absolute compiler safety
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const globeRadius = canvas.width * 0.38;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      angle += 0.22;      // Elegant, stately rotation speed
      pulseTime += 0.007; // Smooth trajectory pace for traveling data packets

      // Draw crisp boundary outline ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(11, 13, 16, 0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Render high-contrast structural globe grid dots (with proximity scaling)
      globeGrid.forEach((point) => {
        const radLat = (point.lat * Math.PI) / 180;
        const radLng = ((point.lng + angle) * Math.PI) / 180;

        const x3d = globeRadius * Math.cos(radLat) * Math.sin(radLng);
        const y3d = globeRadius * Math.sin(radLat);
        const z3d = globeRadius * Math.cos(radLat) * Math.cos(radLng);

        if (z3d > -20) {
          const intensity = (z3d + globeRadius) / (globeRadius * 2);
          const dotSize = z3d > 0 ? 1.4 : 0.8; // Front hemisphere dots appear crisp and bold
          ctx.beginPath();
          ctx.arc(centerX + x3d, centerY - y3d, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(11, 13, 16, ${intensity * 0.35})`; // Deepened contrast
          ctx.fill();
        }
      });

      // Project active research nodes in 3D space
      const projectedNodes = networkNodes.map((node) => {
        const radLat = (node.lat * Math.PI) / 180;
        const radLng = ((node.lng + angle) * Math.PI) / 180;
        const x3d = globeRadius * Math.cos(radLat) * Math.sin(radLng);
        const y3d = globeRadius * Math.sin(radLat);
        const z3d = globeRadius * Math.cos(radLat) * Math.cos(radLng);
        return { x: centerX + x3d, y: centerY - y3d, z: z3d };
      });

      // Render bold network connection arcs and traveling light signals
      ctx.lineWidth = 1.8; // Thicker structural lines
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const nodeA = projectedNodes[i];
          const nodeB = projectedNodes[j];

          if (nodeA.z > -60 && nodeB.z > -60) {
            const minZ = Math.min(nodeA.z, nodeB.z);
            const intensity = (minZ + globeRadius) / (globeRadius * 2);

            // Elevated curved trajectory mapping coordinates
            const midX = (nodeA.x + nodeB.x) / 2;
            const midY = (nodeA.y + nodeB.y) / 2 - (globeRadius * 0.25);
            const midZ = (nodeA.z + nodeB.z) / 2 + (globeRadius * 0.2);

            // Drawn network connection arc using your signature brand red
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.quadraticCurveTo(midX, midY, nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.65})`; // Elevated opacity
            ctx.stroke();

            // Mathematically precise 3D Quadratic Bezier trajectory calculation for traveling signals
            const t = (pulseTime + (i * 0.25)) % 1; // Segment staggered offsets
            const mt = 1 - t;

            const pulseX = mt * mt * nodeA.x + 2 * mt * t * midX + t * t * nodeB.x;
            const pulseY = mt * mt * nodeA.y + 2 * mt * t * midY + t * t * nodeB.y;
            const pulseZ = mt * mt * nodeA.z + 2 * mt * t * midZ + t * t * nodeB.z;

            if (pulseZ > -10) {
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(200, 51, 46, ${intensity * 0.95})`; // Intense glowing pulse cores
              ctx.fill();
            }
          }
        }
      }

      // Render primary core hubs with clean surrounding radar rings
      projectedNodes.forEach((node) => {
        if (node.z > 0) {
          const intensity = node.z / globeRadius;

          // Outer accent ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 51, 46, ${intensity * 0.45})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Solid core center focal point
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