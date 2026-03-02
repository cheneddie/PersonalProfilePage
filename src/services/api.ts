export interface ProfileData {
    id: string;
    // Hero
    name: string;
    title: string;
    bio: string;
    avatarUrl: string;

    // About
    aboutTitle?: string;
    aboutDesc?: string;
    aboutFeatures?: { icon: string, title: string, desc: string }[];

    // Features
    featuresHeroImage?: string;
    featuresTitle?: string;
    featuresSubtitle?: string;
    featuresList?: { title: string, desc: string }[];

    // Testimonials
    testimonialsTitle?: string;
    testimonialsDesc?: string;
    testimonialsList?: { name: string, role: string, content: string, rating: number }[];

    // CTA
    ctaTitle?: string;
    ctaDesc?: string;

    // FAQ & Contact
    faqList?: { q: string, a: string }[];
    contactAddress?: string;
    contactPhone?: string;
    contactEmail?: string;

    socials: {
        platform: string;
        url: string;
    }[];
}

const safeParseJSON = (data: any, fallback: any) => {
    if (typeof data === 'string' && data.trim()) {
        try { return JSON.parse(data); } catch (e) { return fallback; }
    }
    return Array.isArray(data) ? data : fallback;
};

// Mock data pattern until Google Apps Script is ready
export const fetchProfile = async (id: string): Promise<ProfileData> => {
    const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL;

    if (SCRIPT_URL) {
        try {
            // Google Apps Script requires specific handling because it redirects
            const response = await fetch(`${SCRIPT_URL}?id=${id}`, {
                method: 'GET',
                // redirect: 'follow' is default, just being explicit
                redirect: 'follow',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'text/plain;charset=utf-8',
                }
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (data.error) throw new Error(data.error);

            // Parse arrays that come as JSON strings from Google Sheets
            data.socials = safeParseJSON(data.socials, []);
            data.aboutFeatures = safeParseJSON(data.aboutFeatures, undefined);
            data.featuresList = safeParseJSON(data.featuresList, undefined);
            data.testimonialsList = safeParseJSON(data.testimonialsList, undefined);
            data.faqList = safeParseJSON(data.faqList, undefined);

            return data as ProfileData;
        } catch (error) {
            console.error('Fetch error, falling back to mock data:', error);
        }
    }

    // Fallback mock data matching the Gamma visual design concept
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: 'Chen Wei',
                title: 'Interactive Designer & Developer',
                bio: 'Crafting digital experiences that merge technology with aesthetics. Based in Taipei, focusing on Web3 and minimalist design.',
                avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
                aboutTitle: '遇見更好的自己',
                aboutDesc: '我們秉持「薈萃優質，純然無瑕 (All of the good, none of the bad)」的理念，運用創新科研技術，從根源解決歲月痕跡與肌膚困擾，帶來由內而外的自信光采。',
                featuresTitle: '解鎖無瑕肌底的關鍵',
                featuresSubtitle: '為何選擇我們？獨家 FABE 優勢，帶來無可挑剔的體驗。',
                featuresHeroImage: 'https://images.unsplash.com/photo-1615397323933-255d65f573af?auto=format&fit=crop&q=80&w=800',
                testimonialsTitle: '他們的真實蛻變',
                testimonialsDesc: '超過百萬用戶親身見證，讓數據與回饋替我們說話。',
                ctaTitle: '準備好迎接\\n屬於你的透亮膚質了嗎？',
                ctaDesc: '踏出改變的第一步。不論是尋求專屬膚質評估、索取代碼體驗，或是想了解微型創業機會，我們都隨時為你準備好了。',
                contactAddress: '台北市信義區松仁路99號',
                contactPhone: '02-1234-5678',
                contactEmail: 'hello@example.com',
                socials: [
                    { platform: 'LINE', url: 'https://line.me/ti/p/~example' },
                    { platform: 'Instagram', url: 'https://instagram.com/example' },
                    { platform: 'Facebook', url: 'https://facebook.com/example' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com/in/example' },
                    { platform: 'GitHub', url: 'https://github.com/example' }
                ]
            });
        }, 800);
    });
};
