import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
    "Rohim Jiteh",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
];
export const HeroSection = () => {

    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index % roles.length];
        const speed = isDeleting ? 100 : 250;   // adjust speed for deleting and typing |- : +|

        const timeout = setTimeout(() => {
        setText(prev =>
            isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === current) {
            setTimeout(() => setIsDeleting(true), 1500); // wait before starting to delete
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex(prev => prev + 1);
        }
        }, speed);

        return () => clearTimeout(timeout);
    },  [text, isDeleting, index]);

    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">{text}</span>
                        {/* <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rohim</span> */}
                        {/* <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Jiteh</span> */}
                        <span className="blinking-cursor opacity-0 text-pink-500">|</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a passionate software engineer with a focus on building scalable web applications and exploring the latest technologies. and i'm who never stop learning.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 space-x-4">
                        <a href="#projects" className="cosmic-button">
                            View my work
                        </a>
                        <a href="#contact" className="cosmic-outline-button">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className = "h-5 w-5 text-primary" />
                </div>
            </div>
        </section>
    );
}