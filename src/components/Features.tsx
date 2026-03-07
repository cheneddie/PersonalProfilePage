import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FeaturesProps {
    title?: string;
    subtitle?: string;
    heroImage?: string;
    badgeTitle?: string;
    badgeSubtitle?: string;
    buttonText?: string;
    list?: { title: string; desc: string }[];
    reverse?: boolean;
}

export default function Features({ title, subtitle, heroImage, buttonText, list, reverse }: FeaturesProps) {
    const defaultFeatures = [
        {
            title: "專利微脈動反旋科技 (Feature)",
            desc: "以特定頻率與反向旋轉的柔軟矽膠導頭，精確引導毛孔運動。"
        },
        {
            title: "深層清潔與護膚同步 (Advantage)",
            desc: "打破一般潔膚儀僅有清潔的限制，每次使用都在進行拉提與膠原蛋白激活。"
        },
        {
            title: "七大透亮淨緻功效 (Benefit)",
            desc: "一次體驗即感受緊緻、細滑、透亮，只需每天早晚各兩分鐘，省下繁瑣的醫美療程時間與金錢。"
        },
        {
            title: "全球百萬實證與大獎肯定 (Evidence)",
            desc: "榮獲全球第一的美容儀器系統品牌，無數使用者親身見證的完美抗老逆齡變化。"
        }
    ];

    const displayFeatures = list && list.length > 0 ? list : defaultFeatures;

    return (
        <section className="py-20 md:py-32 bg-white/40 odd:bg-slate-50/50 even:bg-white/40 border-t border-slate-100 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass p-3 relative shadow-2xl">
                            <img
                                src={heroImage || "https://images.unsplash.com/photo-1615397323933-255d65f573af?auto=format&fit=crop&q=80&w=800"}
                                alt="Product Feature"
                                className="w-full h-full object-cover rounded-[1.5rem]"
                            />
                            {/* <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                                <p className="font-bold text-slate-800 text-xl hidden md:block">{badgeTitle || "技術"}</p>
                                <p className="text-slate-600 text-sm mt-1">{badgeSubtitle || "安全"}</p>
                            </div> */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                {title || "解鎖無瑕肌底的關鍵"}
                            </h2>
                            <p className="text-lg text-slate-600">
                                {subtitle || "為何選擇我們？獨家 FABE 優勢，帶來無可挑剔的體驗。"}
                            </p>
                        </div>

                        <div className={`grid gap-6 ${displayFeatures.length > 3 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            {displayFeatures.map((feature, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-blue-100 text-blue-600 rounded-full p-1 shrink-0">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg mb-1">{feature.title}</h4>
                                        <p className="text-slate-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => {
                            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                        }} className="mt-8 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition shadow-xl">
                            {buttonText || "探索"}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
