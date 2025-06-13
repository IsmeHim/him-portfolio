import { useState } from "react";
import { cn } from "../lib/utils";
import "aos/dist/aos.css"; // Import AOS styles if you are using AOS for animations
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";

const skills = [
    { 
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        category: ["Frontend"],
    },
    { 
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        category: ["Frontend"],
    },
    { 
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        category: ["Frontend", "Learning"],
    },
    { 
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        href: "https://reactjs.org/",
        category: ["Frontend", "Learning"],
    },
    { 
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
        href: "https://tailwindcss.com/",
        category: ["Frontend"],
    },
    { 
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        href: "https://getbootstrap.com/",
        category: ["Frontend"],
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        href: "https://www.php.net/",
        category: ["Backend"],
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        href: "https://www.mysql.com/",
        category: ["Backend"],
    },
    {
        name: "Laravel",
        icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg",
        href: "https://laravel.com/",
        category: ["Backend"],
    },
    {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        href: "https://flutter.dev/",
        category: ["Mobile"],
    },
    { 
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        href: "https://git-scm.com/",
        category: ["Tools"],
    },
    {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        href: "https://www.linux.org/",
        category: ["Tools"],
    },

];

const categories = ["all","Frontend", "Backend", "Mobile", "Tools", "Learning"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.category.includes(activeCategory));

    useEffect(() => {
        AOS.init({ duration: 1000 }); // ความเร็วในการแสดง (ms)  ค่า default (ถ้าไม่มีใน element)
    }, []);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        className={cn("px-4 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bg-primary hover:text-primary-foreground"
                        )}
                        onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                        key={key}
                        className="p-6 flex flex-col items-center border rounded-xl shadow-sm card-hover hover:shadow-md"
                        data-aos="zoom-in-up"
                        >
                        <a
                            href={skill.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center text-center group"
                        >
                            <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-12 w-12 mb-4 transition-transform duration-300 group-hover:scale-110"
                            />
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                            {skill.name}
                            </h3>
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};