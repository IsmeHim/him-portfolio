import { useState } from "react";
import { cn } from "../lib/utils";
import "aos/dist/aos.css"; // Import AOS styles if you are using AOS for animations
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";
import { api } from "../lib/api";

const categories = ["all","Frontend", "Backend", "Mobile", "Tools", "Learning"];

export const SkillsSection = () => {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("all");

    const fetchSkills = async () => {
        try {
            const res = await api.get("/skills");
            setSkills(res.data.skills);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching skills:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSkills();
        AOS.init({ duration: 1000 }); // ความเร็วในการแสดง (ms)  ค่า default (ถ้าไม่มีใน element)
    }, []);

    const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.categories.includes(activeCategory));

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {
                    loading && (
                        <div className="flex justify-center items-center mb-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
                        </div>
                    )
                }

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