import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

// อันนี้ก็คือการทำ Dark Mode Toggle
// โดยใช้ localStorage เพื่อเก็บสถานะของธีม เวลาทำการโหลดหน้าเว็บ
// มันจะเช็ค localStorage ว่ามีการเก็บธีมไว้หรือไม่ ถ้ามีก็จะใช้ธีมนั้น
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || storedTheme === null) {
            // ถ้ายังไม่มีค่าใน localStorage ให้เริ่มต้น dark mode
            document.documentElement.classList.add("dark"); // เก็บไว้ใน localStorage ด้วย
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={toggleTheme} 
        className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    ) 
}