"use client";
import { useEffect, useRef } from "react";

const GridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const GRID_SIZE = 40;
        const DOT_RADIUS = 1;
        const GLOW_RADIUS = 180;

        let mouseX = -1000;
        let mouseY = -1000;
        let animId = 0;
        let needsRedraw = true;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            needsRedraw = true;
        };
        resize();

        const handleMouse = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            needsRedraw = true;
        };

        const draw = () => {
            if (!needsRedraw) {
                animId = requestAnimationFrame(draw);
                return;
            }
            needsRedraw = false;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let x = 0; x < canvas.width; x += GRID_SIZE) {
                for (let y = 0; y < canvas.height; y += GRID_SIZE) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const intensity = dist < GLOW_RADIUS ? 1 - dist / GLOW_RADIUS : 0;

                    ctx.beginPath();
                    ctx.arc(x, y, DOT_RADIUS + intensity * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(139, 92, 246, ${0.08 + intensity * 0.5})`;
                    ctx.fill();
                }
            }
            animId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouse);
        animId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
};

export default GridBackground;
