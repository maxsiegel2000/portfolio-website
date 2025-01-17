import { footerLinks } from "@/lib/data";
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 dark:radial_mask_dark radial_mask_light -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t dark:border-white/15 border-black/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="dark:text-white/40 text-black/40">&copy; {year}. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
             <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5 hover:underline">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};