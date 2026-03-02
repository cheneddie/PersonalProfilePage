import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ProfileData } from '../services/api';
import { Instagram, Facebook, Linkedin, Github, Link as LinkIcon, MessageCircle } from 'lucide-react';

const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('line')) return <MessageCircle className="w-6 h-6 text-[#00c300]" />;
    if (p.includes('instagram')) return <Instagram className="w-6 h-6 text-[#E1306C]" />;
    if (p.includes('facebook')) return <Facebook className="w-6 h-6 text-[#1877F2]" />;
    if (p.includes('linkedin')) return <Linkedin className="w-6 h-6 text-[#0A66C2]" />;
    if (p.includes('github')) return <Github className="w-6 h-6 text-slate-800" />;
    return <LinkIcon className="w-6 h-6 text-slate-500" />;
};

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function SocialLinks({ socials }: { socials: ProfileData['socials'] }) {
    if (!socials || socials.length === 0) return null;

    return (
        <section className="py-12 w-full">
            <h3 className="text-2xl font-semibold mb-8 text-center text-slate-800">Connect with me</h3>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        variants={item}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-white/60 transition-colors group cursor-pointer"
                    >
                        <div className="p-3 bg-white/50 rounded-xl group-hover:scale-110 transition-transform">
                            {getIcon(social.platform)}
                        </div>
                        <span className="font-medium text-slate-700 text-sm md:text-base">{social.platform}</span>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
}
