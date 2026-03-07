const fs = require('fs');
let content = fs.readFileSync('範例生成.gs', 'utf8');

const regex = /featuresHeroImage:\s*(.*?),\s*featuresTitle:\s*(.*?),\s*featuresSubtitle:\s*(.*?),\s*featuresList:\s*(\[[\s\S]*?\])(?:,\s*featuresHeroImage2:\s*(.*?),\s*featuresTitle2:\s*(.*?),\s*featuresSubtitle2:\s*(.*?),\s*featuresList2:\s*(\[[\s\S]*?\]))?(?=,\s*testimonialsTitle)/g;

content = content.replace(regex, (match, h1, t1, s1, l1, h2, t2, s2, l2) => {
    let replacement = `featuresBlocks: [\n        {\n          heroImage: ${h1},\n          title: ${t1},\n          subtitle: ${s1},\n          list: ${l1}\n        }`;
    if (h2) {
        replacement += `,\n        {\n          heroImage: ${h2},\n          title: ${t2},\n          subtitle: ${s2},\n          list: ${l2}\n        }`;
    }
    replacement += `\n      ]`;
    return replacement;
});

const mapRegex = /profile\.youtubeVideoUrl,[\s\S]*?profile\.testimonialsTitle,/g;
content = content.replace(mapRegex, 'profile.youtubeVideoUrl,\n    JSON.stringify(profile.featuresBlocks || []),\n    profile.testimonialsTitle,');

fs.writeFileSync('範例生成.gs', content);
