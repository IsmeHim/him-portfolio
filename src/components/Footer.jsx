import { ArrowUp } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-secondary/30 text-foreground py-8 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <span className="cursor-default text-primary">|</span>
          <a href="#hero">
            <ArrowUp className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <span className="cursor-default text-pink-500">|</span>
          <p className="text-sm text-muted-foreground">
            Built with React and Tailwind CSS By Him JT.
          </p>
        </div>
      </div>
    </footer>
  );
}