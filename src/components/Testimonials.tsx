import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialsProps {
    title?: string;
    desc?: string;
    list?: { name: string; role: string; content: string; rating: number }[];
}

export default function Testimonials({ title, desc, list }: TestimonialsProps) {
    const defaultTestimonials = [
        {
            name: "陳小姐",
            role: "科技業業務",
            content: "工作壓力大加上熬夜，肌膚總是暗沉無光。自從開始使用這套設備後，每天只需兩分鐘，同事都以為我偷偷去醫美，透亮度真的差很多！",
            rating: 5
        },
        {
            name: "林太太",
            role: "全職媽媽",
            content: "產後照顧小孩根本沒時間瓶瓶罐罐保養，這個智能居家儀器完全符合我的需求。溫和不刺激，連我的敏弱肌都變得穩定健康。",
            rating: 5
        },
        {
            name: "張先生",
            role: "企業主管",
            content: "本來對保養沒什麼概念，老婆推薦我使用後，出油量明顯減少，毛孔緊緻很多，整個人看起來更有精神了，操作也超簡單。",
            rating: 5
        }
    ];

    const displayTestimonials = list && list.length > 0 ? list : defaultTestimonials;

    return (
        <section id="testimonials" className="py-20 md:py-32 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        {title || "他們的真實蛻變"}
                    </motion.h2>
                    <p className="text-lg text-slate-600">
                        {desc || "超過百萬用戶親身見證，讓數據與回饋替我們說話。"}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayTestimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl flex flex-col h-full"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating || 5)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic flex-1 leading-relaxed mb-6">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-200/50 pt-6">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof Logos or Numbers */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 glass rounded-3xl p-8 flex flex-wrap justify-around items-center gap-8 shadow-inner"
                >
                    <div className="text-center">
                        <h5 className="text-4xl font-bold text-blue-600 mb-2">#1</h5>
                        <p className="text-sm text-slate-600">全球第一居家美容器品牌</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-4xl font-bold text-blue-600 mb-2">95%</h5>
                        <p className="text-sm text-slate-600">用戶表示肌膚明顯緊緻</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-4xl font-bold text-blue-600 mb-2">1M+</h5>
                        <p className="text-sm text-slate-600">全球見證案例</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
