import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';

interface FAQProps {
    list?: { q: string; a: string }[];
    address?: string;
    phone?: string;
    email?: string;
}

export default function FAQ({ list, address, phone, email }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const defaultFaqs = [
        {
            q: "LumiSpa iO 適合哪種膚質使用？",
            a: "LumiSpa iO 搭配五種專屬淨膚露（中/乾、油性、敏弱、抗痘、平衡），適合各種膚質。您可以透過諮詢，由我們為您客製化挑選最適合的產品組合。"
        },
        {
            q: "多久能看到效果？",
            a: "許多用戶在第 1 次體驗後，就能感覺到肌膚變得更加平滑透亮。持續早晚使用 12 週，各種歲月痕跡與毛孔粗大問題都會獲得顯著改善。"
        },
        {
            q: "產品是否有保固？",
            a: "是的，所有透過官方授權管道購買的美容儀器系統，皆享有完善的售後保固與維修服務，敬請安心選購。"
        },
        {
            q: "如何預約現場體驗？",
            a: "請點擊網頁中的「加 LINE 諮詢」或「立即體驗」按鈕，我們會盡快與您聯繫並安排專屬的體驗時間。"
        }
    ];

    const displayFaqs = list && list.length > 0 ? list : defaultFaqs;

    return (
        <section id="faq" className="py-20 md:py-32 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* FAQ */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">常見問題</h2>
                        <div className="space-y-4">
                            {displayFaqs.map((faq, i) => (
                                <div key={i} className="glass rounded-2xl overflow-hidden hover:bg-white/50 transition-colors">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="w-full text-left px-6 py-4 flex justify-between items-center bg-transparent gap-4"
                                    >
                                        <span className="font-bold text-slate-800">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-4 text-slate-600 leading-relaxed"
                                            >
                                                {faq.a}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">聯絡我們</h2>
                        <div className="glass p-8 rounded-3xl space-y-6">
                            <p className="text-slate-600 mb-8">
                                如果有任何產品疑問、膚質諮詢，或想了解事業合作，歡迎隨時與我們聯繫。
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100/50 rounded-lg text-blue-600 mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-800">體驗中心</h5>
                                        <p className="text-slate-600">{address || "台北市信義區松仁路99號"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100/50 rounded-lg text-blue-600 mt-1">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-800">聯絡電話</h5>
                                        <p className="text-slate-600">{phone || "02-1234-5678"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100/50 rounded-lg text-blue-600 mt-1">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-800">服務信箱</h5>
                                        <p className="text-slate-600">{email || "hello@example.com"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
