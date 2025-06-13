import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

//ทั้งหมดที่ผมคอมเมนต์ไว้คือการทำแบบฟอร์มติดต่อที่สามารถส่งข้อมูลไปยังอีเมลหรือ API ได้
// แต่ตอนนี้ผมยังไม่ได้ทำแบบฟอร์มติดต่อจริงๆ เพราะยังไม่แน่ใจว่าจะใช้บริการไหนในการส่งอีเมล

export const ContactSection = () => {
  // const { toast } = useToast();
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Here you can handle the form submission, e.g., send data to an API or email service
  //     // console.log("Form submitted");
  //     setIsSubmitting(true);
  //     setTimeout(() => {
  //         toast({
  //             title: "Message Sent",
  //             description: "Thank you for your message! I'll get back to you soon.",
  //         });
  //         setIsSubmitting(false);
  //         // alert("Thank you for your message! I'll get back to you soon.");
  //     }, 1500);

  // }

  //use aos for animation
  useEffect(() => {
    AOS.init({ duration: 1000 }); // ความเร็วในการแสดง (ms)  ค่า default (ถ้าไม่มีใน element)
  }, []);
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap12">
          <div className="space-y-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6">
              Contact <span className="text-pink-400">Information</span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-pink-400" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:abdulrahimhim2@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-pink-400 transition-colors"
                  >
                    abdulrahimhim2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-pink-400" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:0990684331"
                    target="_blank"
                    className="text-muted-foreground hover:text-pink-400 transition-colors"
                  >
                    099-068-4331
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-pink-400" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold">Location</h4>
                  <a className="text-muted-foreground hover:text-pink-400 transition-colors">
                    Pattani, Thailand
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-semibold mb-4">
                Contact me <span className="text-pink-400">or</span> follow me
              </h3>
              <div className="flex space-x-4 justify-center">
                <a href="https://web.facebook.com/abdulraheem.jiteh?locale=th_TH" target="_blank" rel="noopener noreferrer">
                  <Facebook className="hover:text-pink-400 transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/him.1i_/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="hover:text-pink-400 transition-colors duration-300" />
                </a>
                <a href="#" rel="noopener noreferrer">
                  <Twitter className="hover:text-pink-400 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="px-4">
            <h3 className="text-2xl font-semibold mb-6">
              Thank you,{" "}
              <span className="text-pink-400 ">
                For visit my portfolio website
              </span>
            </h3>
            <div className="flex justify-center" data-aos="zoom-out">
              <img
                src="/profile/him.jpg"
                alt="Rohim Jiteh"
                className="w-60 h-60 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition duration-300 opacity-0 animate-fade-in-delay-4"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-center">
              Let's build something amazing together.
            </p>
          </div>

          {/* <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form action="#" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                placeholder="Type your message here"
                                />
                            </div>

                            <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div> */}
        </div>
      </div>
    </section>
  );
};
