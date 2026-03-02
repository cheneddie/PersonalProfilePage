import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import React from 'react';

interface CTAProps {
    title?: string;
    desc?: string;
    lineUrl?: string;
}

export default function CTA({ title, desc, lineUrl }: CTAProps) {
    const defaultTitle = "準備好迎接\n屬於你的透亮膚質了嗎？";
    const displayTitle = title || defaultTitle;

    return (
        <section id="cta" className="py-20 md:py-32 bg-white/40 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-[3rem] pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 relative z-10 leading-tight">
                        {displayTitle.split('\\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i !== displayTitle.split('\\n').length - 1 && <br className="md:hidden" />}
                            </React.Fragment>
                        ))}
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto relative z-10">
                        {desc || "踏出改變的第一步。不論是尋求專屬膚質評估、索取代碼體驗，或是想了解微型創業機會，我們都隨時為你準備好了。"}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href={lineUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-[#00c300] text-white font-bold text-lg hover:bg-[#00a800] transition shadow-xl shadow-green-500/20 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            加 LINE 免費諮詢
                        </a>
                        <button
                            className="px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-lg hover:bg-slate-50 transition border-2 border-slate-200 flex items-center justify-center gap-2 group"
                        >
                            了解事業機會
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
