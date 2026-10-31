const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const srcMatches = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
const hrefMatches = [...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);

console.log('--- Verifying Assets in index.html ---');
const localRefs = [...new Set([...srcMatches, ...hrefMatches])].filter(ref => 
  !ref.startsWith('http') && 
  !ref.startsWith('#') && 
  !ref.startsWith('mailto:') && 
  !ref.startsWith('tel:')
);

let missing = 0;
localRefs.forEach(ref => {
  const cleanRef = ref.split('?')[0].split('#')[0];
  if (!fs.existsSync(cleanRef)) {
    console.error('MISSING:', cleanRef);
    missing++;
  } else {
    console.log('OK:', cleanRef);
  }
});

if (missing === 0) {
  console.log('SUCCESS: All local assets exist and are verified!');
} else {
  console.error(`FAILURE: ${missing} asset(s) are missing!`);
}

