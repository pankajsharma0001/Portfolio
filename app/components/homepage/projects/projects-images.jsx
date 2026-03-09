/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react";

export default function ProjectsImages({ images, alt }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3800);
        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    return (
        <>
            {images.length > 0 &&
                images.map((image, index) => (
                    currentImageIndex === index && (
                        <img
                            key={index}
                            src={image.src}
                            alt={alt}
                            className="flex-1 object-contain opacity-80 transition-opacity duration-700 rounded-lg group-hover:opacity-10"
                            style={{ filter: "brightness(1.1) contrast(1.3)" }}
                        />
                    )
                ))}
        </>
    );
}
