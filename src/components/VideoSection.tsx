import { motion } from 'framer-motion';

interface VideoSectionProps {
    youtubeUrl?: string;
}

export default function VideoSection({ youtubeUrl }: VideoSectionProps) {
    if (!youtubeUrl) return null;

    // extract video ID to embed
    let videoId = '';
    try {
        const urlObj = new URL(youtubeUrl);
        if (youtubeUrl.includes('youtube.com/watch')) {
            videoId = urlObj.searchParams.get('v') || '';
        } else if (youtubeUrl.includes('youtu.be/')) {
            videoId = urlObj.pathname.slice(1);
        } else if (youtubeUrl.includes('youtube.com/embed/')) {
            videoId = urlObj.pathname.split('/').pop() || '';
        }
    } catch (e) {
        console.error('Invalid Youtube URL', e);
    }

    if (!videoId) return null;

    return (
        <section className="py-12 md:py-20 bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white"
                >
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
