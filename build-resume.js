const fs = require('fs');
const path = require('path');

// Clean PDF 1.4 generator with proper xref table and offsets
function createResumePdf() {
  const contentStream = `
BT
/F1 22 Tf
50 780 Td
(ARVIND KUMAR) Tj
ET

BT
/F1 13 Tf
50 760 Td
(Frontend Web Developer | BCA Student) Tj
ET

BT
/F1 10 Tf
50 740 Td
(Email: arvindgupta32823@gmail.com | Location: Gorakhpur, Uttar Pradesh, India) Tj
ET

BT
/F1 10 Tf
50 725 Td
(GitHub: https://github.com/your-Arvind | LinkedIn: https://www.linkedin.com/in/your-Arvind) Tj
ET

BT
/F1 12 Tf
50 695 Td
(PROFESSIONAL PROFILE) Tj
ET

BT
/F1 10 Tf
50 675 Td
(Passionate Frontend Developer pursuing Bachelor of Computer Applications (BCA).) Tj
ET
BT
/F1 10 Tf
50 660 Td
(Dedicated to crafting responsive, interactive, modern web experiences with clean code.) Tj
ET
BT
/F1 10 Tf
50 645 Td
(Proficient in modern HTML5, CSS3, JavaScript (ES6+), C++, Git, and GitHub workflows.) Tj
ET

BT
/F1 12 Tf
50 615 Td
(TECHNICAL SKILLS) Tj
ET

BT
/F1 10 Tf
50 595 Td
(- Core Languages: HTML5, CSS3, JavaScript (ES6+), C++) Tj
ET
BT
/F1 10 Tf
50 580 Td
(- Frontend Techniques: Responsive Design, Flexbox, CSS Grid, DOM Manipulation, Animations) Tj
ET
BT
/F1 10 Tf
50 565 Td
(- Tools & Version Control: Git, GitHub, VS Code, Browser DevTools) Tj
ET
BT
/F1 10 Tf
50 550 Td
(- Fundamentals: Data Structures, Object-Oriented Programming (OOP), Web APIs) Tj
ET

BT
/F1 12 Tf
50 520 Td
(FEATURED PROJECTS) Tj
ET

BT
/F1 10 Tf
50 500 Td
(1. Amazon Clone - Responsive storefront, product search, deals hero, cart UI) Tj
ET
BT
/F1 10 Tf
50 485 Td
(2. Tic Tac Toe Game - 2-Player interactive web game with smart win-checking logic) Tj
ET
BT
/F1 10 Tf
50 470 Td
(3. Personal Portfolio Website - Glassmorphism UI, dark obsidian/orange theme, responsive) Tj
ET
BT
/F1 10 Tf
50 455 Td
(4. Weather Forecast App - Live meteorology UI with dynamic weather cards & search) Tj
ET
BT
/F1 10 Tf
50 440 Td
(5. E-Commerce Website - Modern digital catalog, shopping bag drawer, filtering) Tj
ET
BT
/F1 10 Tf
50 425 Td
(6. Netflix Clone, Music Player, Expense Tracker, Quiz Application, and 10+ more) Tj
ET

BT
/F1 12 Tf
50 395 Td
(EDUCATION) Tj
ET

BT
/F1 10 Tf
50 375 Td
(Bachelor of Computer Applications (BCA) (2024 - Present)) Tj
ET
BT
/F1 10 Tf
50 360 Td
(Madhusudan Das Degree College, Ashuran Chowk, Gorakhpur) Tj
ET
BT
/F1 10 Tf
50 345 Td
(Affiliated to Deen Dayal Upadhyaya Gorakhpur University (DDUGU)) Tj
ET
BT
/F1 10 Tf
50 330 Td
(Relevant Coursework: C++, Data Structures, Web Technology, Database Systems) Tj
ET

BT
/F1 12 Tf
50 300 Td
(STRENGTHS & COMPETENCIES) Tj
ET

BT
/F1 10 Tf
50 280 Td
(- Creative frontend problem solving and rapid visual prototyping) Tj
ET
BT
/F1 10 Tf
50 265 Td
(- Strong commitment to responsive design, accessibility, and clean architecture) Tj
ET
BT
/F1 10 Tf
50 250 Td
(- Eager continuous learner seeking frontend developer internship & junior roles) Tj
ET
`.trim();

  const streamLength = Buffer.byteLength(contentStream);

  const objects = [
    `%PDF-1.4\n`,
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`
  ];

  let buffer = objects[0];
  const offsets = [];

  for (let i = 1; i < objects.length; i++) {
    offsets.push(Buffer.byteLength(buffer));
    buffer += objects[i];
  }

  const xrefOffset = Buffer.byteLength(buffer);
  let xref = `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    const offStr = String(offsets[i]).padStart(10, '0');
    xref += `${offStr} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  const fullPdf = buffer + xref + trailer;

  const destPath = path.join(__dirname, 'assets', 'Arvind_Kumar_Resume.pdf');
  fs.writeFileSync(destPath, fullPdf, 'binary');
  const legacyPath = path.join(__dirname, 'assets', 'Arvind_Kumar_Gupta_Resume.pdf');
  fs.writeFileSync(legacyPath, fullPdf, 'binary');
  console.log(`Generated official resume PDF at: ${destPath} (${Buffer.byteLength(fullPdf)} bytes)`);
}

createResumePdf();

