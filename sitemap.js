const SitemapGenerator = require('sitemap-generator');

// create generator instance
const generator = SitemapGenerator('https://blogmate.onrender.com', {
    filepath: './public/sitemap.xml',
    exclude: ['/admin'],
    maxDepth: 0,
    maxEntriesPerFile: 50000,
    stripQuerystring: true,
});

// start the generator
generator.start();

// register event listeners
generator.on('done', () => {
    console.log('Sitemap generated!');
});

generator.on('error', (error) => {
    console.error(error);
});
