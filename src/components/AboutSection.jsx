import { Briefcase, Code, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutSection = () => {
  //use aos for animation
  useEffect(() => {
    AOS.init({ duration: 1000 }); // ความเร็วในการแสดง (ms)  ค่า default (ถ้าไม่มีใน element)
  }, []);
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* กล่องแม่ parent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* left section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              สวัสดีครับ ผมชื่อฮิมตอนนี้กำลังศึกษาอยู่ชั้นปีที่ 3
              สาขาวิทยาการคอมพิวเตอร์ (comsci)
              ผมมีความหลงใหลในการพัฒนาเว็บไซต์และแอปพลิเคชัน โดยเฉพาะด้าน Web
              Development ซึ่งเป็นสิ่งที่ผมชอบ เทคโนโลยีที่ผมใช้บ่อยคือ
              Laravel or React ผมสามารถทำงานทั้ง Frontend และ Backend ได้
              <br />
              นอกจากนี้ ผมยังมีทักษะในภาษาอังกฤษในระดับที่ใช้งานได้
              แม้จะไม่คล่องในการพูดมากนัก
              แต่ผมสามารถเข้าใจเอกสารหรือโค้ดภาษาอังกฤษได้เป็นอย่างดี
              หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ทำงานร่วมกับทีม
              และพัฒนาไอเดียใหม่ ๆ อย่างเต็มที่
              ผมยินดีเป็นส่วนหนึ่งของโปรเจกต์ของคุณครับ
            </p>

            <p className="text-muted-foreground">
             <span className="font-semibold">ประวัติการศึกษา:</span> ตอนมัธยมต้นผมเรียนสายวิทย์-คณิต
              ส่วนมัธยมปลายเรียนสายภาษา และปัจจุบันกำลังศึกษาอยู่ในสาขา Computer
              Science ที่มหาวิทยาลัย ในมหาวิทยาลัยผมเคยได้เกรด A จากวิชา
              Technologies Framework โดยได้ทำโปรเจกต์ E-Commerce ด้วย Laravel
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact me
              </a>
              {/* <a href="" className="cosmic-outline-button">Dowload CV</a> */}
            </div>
          </div>

          {/* right section */}
          <div className="grid grid-cols-1 gap-6">
            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {/* กล่องลูกสำหรับแสดงไอคอน */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="text-lg font-semibold">UX/UI design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-centered interfaces that enhance user experience.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="text-lg font-semibold">Full Stack dev</h4>
                  <p className="text-muted-foreground">
                    I'm a Full Stack developer who loves crafting scalable web
                    apps with Laravel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
