import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProfile, type ProfileData } from '../services/api';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import SocialLinks from '../components/SocialLinks';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchProfile(id)
            .then(data => {
                setProfile(data);
                document.title = `${data.name} | Profile`;
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen aurora-bg flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
            </div>
        );
    }

    if (error || !profile) {
        return (
            <div className="min-h-screen aurora-bg flex items-center justify-center">
                <div className="glass p-8 rounded-3xl text-center max-w-md mx-4 shadow-xl">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Profile Not Found</h2>
                    <p className="text-slate-600">We couldn't find the profile for '{id}'. Please check the URL carefully.</p>
                </div>
            </div>
        );
    }

    const lineUrl = profile.socials?.find(s => s.platform.toLowerCase() === 'line')?.url;

    return (
        <div className="min-h-screen aurora-bg overflow-x-hidden pt-20">
            <Navbar />

            <main className="w-full flex-1 flex flex-col">
                <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
                    <Hero profile={profile} />
                </div>

                <About
                    title={profile.aboutTitle}
                    desc={profile.aboutDesc}
                    features={profile.aboutFeatures}
                />
                <Features
                    title={profile.featuresTitle}
                    subtitle={profile.featuresSubtitle}
                    heroImage={profile.featuresHeroImage}
                    list={profile.featuresList}
                />
                <Testimonials
                    title={profile.testimonialsTitle}
                    desc={profile.testimonialsDesc}
                    list={profile.testimonialsList}
                />
                <CTA
                    title={profile.ctaTitle}
                    desc={profile.ctaDesc}
                    lineUrl={lineUrl}
                />
                <FAQ
                    list={profile.faqList}
                    address={profile.contactAddress}
                    phone={profile.contactPhone}
                    email={profile.contactEmail}
                />

                <div className="max-w-5xl mx-auto px-6 md:px-12 w-full mb-12">
                    <SocialLinks socials={profile.socials} />
                </div>
            </main>

            <footer className="w-full py-8 text-center text-slate-500 text-sm border-t border-slate-200/50">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                    © {new Date().getFullYear()} {profile.name}. All rights reserved. Designed for excellence.
                </motion.p>
            </footer>
        </div>
    );
}
