import { motion } from 'framer-motion';
import type { ProfileData } from '../services/api';

export default function Hero({ profile }: { profile: ProfileData }) {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24">
            <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                    Hi, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {profile.name}
                    </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
                    {profile.title}
                </h2>
                <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    {profile.bio}
                </p>
            </motion.div>

            <motion.div
                className="flex-1 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass p-2 relative shadow-2xl shadow-blue-900/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-10" />
                    <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-full h-full object-cover rounded-[1.5rem]"
                    />
                </div>
            </motion.div>
        </section>
    );
}
