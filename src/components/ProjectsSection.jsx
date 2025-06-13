import { ArrowRight, ExternalLink, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Projects = [
    {
        id: 1,
        title: "Coffee POS",
        description: "เป็นโปรเจคระบบจัดการร้านกาแฟและระบบจัดการพนักงาน.",
        image: "/projects/pj-1/2.png",
        tags: ["Laravel", "Bootstrap", "MySQL","sweetalert2"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Auth and crud",
        description: "โปรเจคนี้เป็นโประเจคระบบ crud ที่ผมลองใช้ ระบบ Auth ของ laravel 12 ผมลองใช้ Livewire Starter kit และผมไปการล็อกอินทำให้สามารถล้อกอินโดยใช็ Username ได้ด้วยและเพิ่ม role แยกหน้าสำหรับ admin และ user.",
        image: "/projects/pj-2/a-laravel.png",
        tags: ["Laravel", "Tailwindcss", "MySQL", "Livewire", "flux-ui"],
        demoUrl: "#",
        githubUrl: "https://github.com/IsmeHim/laravel-auth-crud",
    },
    {
        id: 3,
        title: "Flutter with API",
        description: "โปรเจกต์นี้เป็นแอปพลิเคชันสำหรับจัดการรายการภาพยนตร์ (CRUD) ที่ผมพัฒนาขึ้นในช่วงเรียนมหาลัยปี 2 เพื่อส่งอาจารย์ โดยใช้ Flutter และเชื่อมต่อกับ RESTful API ที่เขียนด้วย PHP เพื่อจัดการข้อมูล ซึ่งข้อมูลทั้งหมดถูกจัดเก็บใน ฐานข้อมูล MySQL ฟีเจอร์หลักของแอปประกอบด้วย: การเพิ่ม, ลบ, แก้ไข และค้นหาภาพยนตร์,หน้ารวมทั้งหมด 10 หน้า",
        image: "/projects/pj-3/Flutter-movie.png",
        tags: ["Flutter", "Dart", "PHP", "API", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/IsmeHim/flutter_movie_API/tree/main",
    },
];

export const ProjectsSection = () => {

    const [show, setShow] = useState(true);

    //use aos for animation
    useEffect(() => {
        AOS.init({ duration: 1000 }); // ความเร็วในการแสดง (ms)  ค่า default (ถ้าไม่มีใน element)
    }, []);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and expertise in web development.
                </p>
                <button onClick={()=>setShow(!show)} className="cosmic-outline-button mb-12">{show ? "ซ่อนรายละเอียด": "แสดงรายละเอียด"}</button>
                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-duration="2000">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-1">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs border bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                {show &&<p className="text-muted-foreground text-sm mb-4">{project.description}</p>}
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/IsmeHim" target="_blank" className="cosmic-button w-fit mx-auto flex items-center gap-2">
                        Check my github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}