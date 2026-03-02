import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface AboutProps {
    title?: string;
    desc?: string;
    features?: { icon: string; title: string; desc: string }[];
}

const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.CheckCircle;
    return <IconComponent className="w-8 h-8 text-blue-500" />;
};

export default function About({ title, desc, features }: AboutProps) {
    const defaultFeatures = [
        {
            icon: "Sparkles",
            title: "創新抗老科研",
            desc: "獨家 ageLOC 科技，直擊老化根源，非僅止於表面修護，讓時間為你停留。"
        },
        {
            icon: "Target",
            title: "解決保養盲點",
            desc: "告別瓶瓶罐罐與無感保養。透過智能保養儀器，為快節奏的現代人提供省時高效的方案。"
        },
        {
            icon: "Heart",
            title: "安心無負擔",
            desc: "嚴選純淨安全成分，拒絕添加對肌膚有害的物質，敏弱肌也能安心重現透亮肌質。"
        }
    ];

    const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

    return (
        <section id="about" className="py-20 md:py-32 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        {title || "遇見更好的自己"}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        {desc || "我們秉持「薈萃優質，純然無瑕 (All of the good, none of the bad)」的理念，運用創新科研技術，從根源解決歲月痕跡與肌膚困擾，帶來由內而外的自信光采。"}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayFeatures.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="glass p-8 rounded-3xl text-center group hover:bg-white/60 transition-colors"
                        >
                            <div className="inline-flex p-4 rounded-2xl bg-blue-50/50 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                {renderIcon(item.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
