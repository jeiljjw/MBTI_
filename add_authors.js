const fs = require('fs');
const path = require('path');

const blogDir = 'd:/Cursor/MBTI_/app/[locale]/blog';
const dirs = [
    'infj-complete-guide',
    'intj-career-strategies',
    'mbti-career-correlation',
    'mbti-communication-styles',
    'mbti-compatibility-truth',
    'mbti-conflict-resolution',
    'mbti-leadership',
    'mbti-learning-styles',
    'mbti-love-and-relationships',
    'mbti-parenting-guide',
    'mbti-self-improvement'
];

dirs.forEach(dir => {
    const filePath = path.join(blogDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Add import if not present
        if (!content.includes('import { AuthorProfile }')) {
            content = content.replace(
                /import \{ Link \} from .*/,
                match => match + '\nimport { AuthorProfile } from "@/components/AuthorProfile";'
            );

            content = content.replace(
                /<\/div>\s*<\/div>\s*<section className=\"mb-12\">\s*<h3 className=\"text-xl font-bold text-white mb-4\">\{t\(\"relatedPosts\"\)\}<\/h3>/g,
                '</div>\n      </div>\n      <AuthorProfile />\n      <section className="mb-12 mt-12">\n        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>'
            );

            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + dir);
        }
    } else {
        console.log('File not found: ' + filePath);
    }
});
