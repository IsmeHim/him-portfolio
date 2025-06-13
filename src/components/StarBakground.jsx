import { useEffect, useState } from 'react';

//id, size, x, y, opacity, animationDuration for stars
//id, size, x, y, delay, animationDuration for meteors

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars()
        generateMeteors();

        // Regenerate stars and meteors on window resize
        const handleResize = () => {
            generateStars();
            generateMeteors();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 3
                x: Math.random() * 100, // Percentage of the width
                y: Math.random() * 100, // Percentage of the height
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Duration between 5 and 10 seconds
            })
        }
        setStars(newStars);
    }

    // Function to generate meteors คือดาวตก
    const generateMeteors = () => {
        const numberOfMeteors = 5;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Size between 1 and 3
                x: Math.random() * 100, // Percentage of the width
                y: Math.random() * 20, // Percentage of the height
                delay: Math.random() * 15, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 3 + 3 // Duration between 5 and 10 seconds
            })
        }
        setMeteors(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle" //classname star ที่กำหนดในindex.css
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animation: `twinkle ${star.animationDuration}s infinite alternate`
                    }}
                ></div>
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor" //classname meteor ที่กำหนดในindex.css
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                ></div>
            ))}

        </div>
    )
}