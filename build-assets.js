const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, 'assets', 'projects');
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir, { recursive: true });
}

// 18 Project definitions with unique SVG designs matching the dark obsidian & warm orange theme
const projects = [
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    tagline: 'E-Commerce Storefront & Cart',
    color1: '#ff9900',
    color2: '#e67a00',
    icon: 'fa-cart-shopping',
    graphic: `
      <!-- Amazon Navbar Mock -->
      <rect x="40" y="50" width="520" height="40" rx="8" fill="#131921"/>
      <rect x="55" y="62" width="70" height="16" rx="4" fill="#ff9900"/>
      <rect x="140" y="58" width="280" height="24" rx="6" fill="#232f3e" stroke="#ff9900" stroke-width="1.5"/>
      <circle cx="400" cy="70" r="7" fill="#ff9900"/>
      <rect x="435" y="62" width="55" height="16" rx="4" fill="#37475a"/>
      <rect x="500" y="60" width="40" height="20" rx="4" fill="#febd69"/>
      
      <!-- Hero Banner -->
      <rect x="40" y="105" width="520" height="135" rx="12" fill="url(#grad-amz)"/>
      <text x="70" y="155" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22">Summer Tech Deals 50% Off</text>
      <text x="70" y="185" fill="#f0e6d6" font-family="'Plus Jakarta Sans', sans-serif" font-size="14">Curated headphones, wearables & developer gear</text>
      <rect x="70" y="200" width="110" height="28" rx="6" fill="#ff9900"/>
      <text x="95" y="219" fill="#111" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13">Shop Now</text>

      <!-- Product Cards -->
      <g transform="translate(40, 255)">
        <rect x="0" y="0" width="120" height="110" rx="8" fill="#1c1612" stroke="#ff9900" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="90" height="50" rx="6" fill="#2d2218"/>
        <rect x="15" y="75" width="70" height="10" rx="3" fill="#ff9900"/>
        <rect x="15" y="90" width="40" height="8" rx="2" fill="#888"/>
      </g>
      <g transform="translate(173, 255)">
        <rect x="0" y="0" width="120" height="110" rx="8" fill="#1c1612" stroke="#ff9900" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="90" height="50" rx="6" fill="#2d2218"/>
        <rect x="15" y="75" width="70" height="10" rx="3" fill="#ff9900"/>
        <rect x="15" y="90" width="40" height="8" rx="2" fill="#888"/>
      </g>
      <g transform="translate(306, 255)">
        <rect x="0" y="0" width="120" height="110" rx="8" fill="#1c1612" stroke="#ff9900" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="90" height="50" rx="6" fill="#2d2218"/>
        <rect x="15" y="75" width="70" height="10" rx="3" fill="#ff9900"/>
        <rect x="15" y="90" width="40" height="8" rx="2" fill="#888"/>
      </g>
      <g transform="translate(440, 255)">
        <rect x="0" y="0" width="120" height="110" rx="8" fill="#1c1612" stroke="#ff9900" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="90" height="50" rx="6" fill="#2d2218"/>
        <rect x="15" y="75" width="70" height="10" rx="3" fill="#ff9900"/>
        <rect x="15" y="90" width="40" height="8" rx="2" fill="#888"/>
      </g>
    `
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe Game',
    tagline: 'Interactive 2-Player Strategy',
    color1: '#ff5722',
    color2: '#e64a19',
    graphic: `
      <!-- Game Board Grid -->
      <g transform="translate(170, 70)">
        <rect x="0" y="0" width="260" height="260" rx="16" fill="#17110c" stroke="#ff5722" stroke-width="2"/>
        <line x1="86" y1="20" x2="86" y2="240" stroke="#ff5722" stroke-width="4" stroke-linecap="round" stroke-opacity="0.8"/>
        <line x1="173" y1="20" x2="173" y2="240" stroke="#ff5722" stroke-width="4" stroke-linecap="round" stroke-opacity="0.8"/>
        <line x1="20" y1="86" x2="240" y2="86" stroke="#ff5722" stroke-width="4" stroke-linecap="round" stroke-opacity="0.8"/>
        <line x1="20" y1="173" x2="240" y2="173" stroke="#ff5722" stroke-width="4" stroke-linecap="round" stroke-opacity="0.8"/>
        
        <!-- X marks -->
        <g stroke="#ff7043" stroke-width="6" stroke-linecap="round">
          <line x1="30" y1="30" x2="60" y2="60"/>
          <line x1="60" y1="30" x2="30" y2="60"/>
          <line x1="116" y1="116" x2="146" y2="146"/>
          <line x1="146" y1="116" x2="116" y2="146"/>
          <line x1="203" y1="203" x2="233" y2="233"/>
          <line x1="233" y1="203" x2="203" y2="233"/>
        </g>
        <!-- O marks -->
        <circle cx="131" cy="45" r="18" fill="none" stroke="#ffa726" stroke-width="6"/>
        <circle cx="45" cy="131" r="18" fill="none" stroke="#ffa726" stroke-width="6"/>
        
        <!-- Winning Strike Glow Line -->
        <line x1="25" y1="25" x2="235" y2="235" stroke="#ffb74d" stroke-width="5" stroke-linecap="round" filter="url(#glow)"/>
      </g>
      <rect x="210" y="345" width="180" height="34" rx="8" fill="#ff5722"/>
      <text x="300" y="367" fill="#fff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" text-anchor="middle">PLAYER X WON!</text>
    `
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    tagline: 'Modern Dark Orange Glassmorphism',
    color1: '#ff6b00',
    color2: '#ff9e40',
    graphic: `
      <!-- Portfolio Mockup Window -->
      <rect x="50" y="45" width="500" height="300" rx="14" fill="#140f0b" stroke="#ff6b00" stroke-width="2"/>
      <!-- Window Titlebar -->
      <rect x="50" y="45" width="500" height="32" rx="14" fill="#201711"/>
      <circle cx="75" cy="61" r="5" fill="#ff5f56"/>
      <circle cx="92" cy="61" r="5" fill="#ffbd2e"/>
      <circle cx="109" cy="61" r="5" fill="#27c93f"/>
      
      <!-- Mini Hero Layout -->
      <rect x="80" y="100" width="80" height="20" rx="10" fill="#ff6b00" fill-opacity="0.2"/>
      <text x="90" y="114" fill="#ff9e40" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700">ARVIND.DEV</text>
      <rect x="80" y="130" width="220" height="24" rx="6" fill="#fff"/>
      <rect x="80" y="162" width="170" height="16" rx="4" fill="#ff6b00"/>
      <rect x="80" y="190" width="240" height="10" rx="3" fill="#888"/>
      <rect x="80" y="206" width="200" height="10" rx="3" fill="#666"/>
      <rect x="80" y="235" width="90" height="32" rx="8" fill="#ff6b00"/>
      <rect x="180" y="235" width="90" height="32" rx="8" fill="none" stroke="#ff6b00" stroke-width="1.5"/>

      <!-- Glowing Profile Circle Mock -->
      <circle cx="430" cy="180" r="65" fill="#2a1e16" stroke="#ff6b00" stroke-width="3" filter="url(#glow)"/>
      <circle cx="430" cy="165" r="26" fill="#ff9e40"/>
      <ellipse cx="430" cy="215" rx="42" ry="25" fill="#ff6b00"/>
    `
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    tagline: 'Live Meteorologic Search & Cards',
    color1: '#ff7700',
    color2: '#e65100',
    graphic: `
      <!-- Weather Card UI -->
      <rect x="100" y="55" width="400" height="280" rx="18" fill="url(#grad-weather)" stroke="#ff7700" stroke-width="1.5"/>
      <!-- Search Input -->
      <rect x="130" y="80" width="340" height="38" rx="19" fill="#1f1610" stroke="#ff7700" stroke-width="1"/>
      <text x="160" y="104" fill="#aaa" font-family="'Plus Jakarta Sans', sans-serif" font-size="13">Search city... (e.g. Gorakhpur)</text>
      
      <!-- Big Weather Icon & Temp -->
      <circle cx="210" cy="185" r="38" fill="#ffaa00" filter="url(#glow)"/>
      <path d="M 180 200 Q 200 170 230 180 Q 260 170 270 200 Z" fill="#ffffff" fill-opacity="0.85"/>
      <text x="320" y="195" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="48" font-weight="800">29°C</text>
      <text x="322" y="222" fill="#ffaa00" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600">Sunny • Gorakhpur, UP</text>
      
      <!-- Forecast Mini Pills -->
      <g transform="translate(130, 260)">
        <rect x="0" y="0" width="75" height="55" rx="8" fill="#1f1610"/>
        <text x="37" y="22" fill="#ccc" font-size="11" text-anchor="middle">Mon</text>
        <text x="37" y="44" fill="#ff9900" font-size="13" font-weight="700" text-anchor="middle">30°C</text>
      </g>
      <g transform="translate(218, 260)">
        <rect x="0" y="0" width="75" height="55" rx="8" fill="#1f1610"/>
        <text x="37" y="22" fill="#ccc" font-size="11" text-anchor="middle">Tue</text>
        <text x="37" y="44" fill="#ff9900" font-size="13" font-weight="700" text-anchor="middle">28°C</text>
      </g>
      <g transform="translate(306, 260)">
        <rect x="0" y="0" width="75" height="55" rx="8" fill="#1f1610"/>
        <text x="37" y="22" fill="#ccc" font-size="11" text-anchor="middle">Wed</text>
        <text x="37" y="44" fill="#ff9900" font-size="13" font-weight="700" text-anchor="middle">31°C</text>
      </g>
      <g transform="translate(395, 260)">
        <rect x="0" y="0" width="75" height="55" rx="8" fill="#1f1610"/>
        <text x="37" y="22" fill="#ccc" font-size="11" text-anchor="middle">Thu</text>
        <text x="37" y="44" fill="#ff9900" font-size="13" font-weight="700" text-anchor="middle">29°C</text>
      </g>
    `
  },
  {
    id: 'todo-app',
    title: 'To-Do List App',
    tagline: 'Task Manager & LocalStorage Persistence',
    color1: '#ff8800',
    color2: '#e65100',
    graphic: `
      <rect x="90" y="50" width="420" height="295" rx="16" fill="#18120d" stroke="#ff8800" stroke-width="1.5"/>
      <rect x="90" y="50" width="420" height="50" rx="16" fill="#241a13"/>
      <text x="120" y="82" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="17">⚡ Today's Dev Sprint</text>
      
      <!-- Todo Task 1 -->
      <g transform="translate(120, 118)">
        <circle cx="15" cy="15" r="10" fill="#ff8800"/>
        <path d="M 10 15 L 14 19 L 21 11" fill="none" stroke="#fff" stroke-width="2"/>
        <rect x="40" y="10" width="240" height="10" rx="3" fill="#887766"/>
        <rect x="300" y="5" width="55" height="20" rx="4" fill="#2d1e15"/>
        <text x="327" y="19" fill="#ff9900" font-size="10" text-anchor="middle">DONE</text>
      </g>
      <!-- Todo Task 2 -->
      <g transform="translate(120, 168)">
        <circle cx="15" cy="15" r="10" fill="#ff8800"/>
        <path d="M 10 15 L 14 19 L 21 11" fill="none" stroke="#fff" stroke-width="2"/>
        <rect x="40" y="10" width="200" height="10" rx="3" fill="#887766"/>
        <rect x="300" y="5" width="55" height="20" rx="4" fill="#2d1e15"/>
        <text x="327" y="19" fill="#ff9900" font-size="10" text-anchor="middle">DONE</text>
      </g>
      <!-- Todo Task 3 -->
      <g transform="translate(120, 218)">
        <circle cx="15" cy="15" r="10" fill="none" stroke="#ff8800" stroke-width="2"/>
        <rect x="40" y="10" width="220" height="10" rx="3" fill="#ffffff"/>
        <rect x="300" y="5" width="55" height="20" rx="4" fill="#ff8800"/>
        <text x="327" y="19" fill="#111" font-size="10" font-weight="700" text-anchor="middle">ACTIVE</text>
      </g>
      <!-- Input bar -->
      <rect x="120" y="275" width="280" height="42" rx="8" fill="#120c08" stroke="#ff8800" stroke-width="1"/>
      <rect x="415" y="275" width="65" height="42" rx="8" fill="#ff8800"/>
      <text x="447" y="301" fill="#fff" font-size="18" text-anchor="middle">+</text>
    `
  },
  {
    id: 'calculator-app',
    title: 'Calculator App',
    tagline: 'Neomorphic Math Engine',
    color1: '#ff6200',
    color2: '#d84315',
    graphic: `
      <!-- Calculator Body -->
      <rect x="175" y="45" width="250" height="310" rx="20" fill="#16100c" stroke="#ff6200" stroke-width="2"/>
      <!-- Display -->
      <rect x="195" y="65" width="210" height="55" rx="10" fill="#0c0806" stroke="#ff6200" stroke-width="1"/>
      <text x="390" y="102" fill="#ff9944" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700" text-anchor="end">42,089.50</text>
      
      <!-- Button Grid -->
      <g transform="translate(195, 135)">
        <!-- Row 1 -->
        <rect x="0" y="0" width="45" height="36" rx="8" fill="#2d1f18"/>
        <rect x="55" y="0" width="45" height="36" rx="8" fill="#2d1f18"/>
        <rect x="110" y="0" width="45" height="36" rx="8" fill="#2d1f18"/>
        <rect x="165" y="0" width="45" height="36" rx="8" fill="#ff6200"/>
        <!-- Row 2 -->
        <rect x="0" y="44" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="55" y="44" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="110" y="44" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="165" y="44" width="45" height="36" rx="8" fill="#ff6200"/>
        <!-- Row 3 -->
        <rect x="0" y="88" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="55" y="88" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="110" y="88" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="165" y="88" width="45" height="36" rx="8" fill="#ff6200"/>
        <!-- Row 4 -->
        <rect x="0" y="132" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="55" y="132" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="110" y="132" width="45" height="36" rx="8" fill="#241a14"/>
        <rect x="165" y="132" width="45" height="36" rx="8" fill="#ff9944"/>
      </g>
    `
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    tagline: 'Dark Cinematic Video Catalog',
    color1: '#e50914',
    color2: '#ff3d00',
    graphic: `
      <!-- Netflix Header -->
      <rect x="40" y="45" width="520" height="40" rx="8" fill="#0d0806"/>
      <text x="65" y="72" fill="#e50914" font-family="'Impact', sans-serif" font-size="22" letter-spacing="2">NETFLIX</text>
      <rect x="450" y="55" width="85" height="22" rx="4" fill="#e50914"/>
      
      <!-- Video Hero -->
      <rect x="40" y="95" width="520" height="140" rx="10" fill="#19110d" stroke="#e50914" stroke-width="1"/>
      <circle cx="300" cy="155" r="26" fill="#e50914" filter="url(#glow)"/>
      <polygon points="293,143 293,167 313,155" fill="#fff"/>
      <text x="65" y="150" fill="#fff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20">STRANGER CODES</text>
      <text x="65" y="175" fill="#aaa" font-size="12">Season 5 • Top Trending in Web Dev</text>

      <!-- Thumbnails Carousel -->
      <g transform="translate(40, 250)">
        <rect x="0" y="0" width="95" height="110" rx="6" fill="#251a14" stroke="#ff5722" stroke-width="1"/>
        <rect x="105" y="0" width="95" height="110" rx="6" fill="#251a14" stroke="#ff5722" stroke-width="1"/>
        <rect x="210" y="0" width="95" height="110" rx="6" fill="#251a14" stroke="#ff5722" stroke-width="1"/>
        <rect x="315" y="0" width="95" height="110" rx="6" fill="#251a14" stroke="#ff5722" stroke-width="1"/>
        <rect x="420" y="0" width="95" height="110" rx="6" fill="#251a14" stroke="#ff5722" stroke-width="1"/>
      </g>
    `
  },
  {
    id: 'music-player',
    title: 'Music Player',
    tagline: 'Audio Waveform & Playback UI',
    color1: '#ff7a00',
    color2: '#e65100',
    graphic: `
      <!-- Player Card -->
      <rect x="150" y="45" width="300" height="310" rx="20" fill="#17110c" stroke="#ff7a00" stroke-width="1.5"/>
      <!-- Album Art Circle with Vinyl Groove -->
      <circle cx="300" cy="140" r="65" fill="#261b14" stroke="#ff7a00" stroke-width="3" filter="url(#glow)"/>
      <circle cx="300" cy="140" r="45" fill="#18110b" stroke="#ff9f43" stroke-width="1"/>
      <circle cx="300" cy="140" r="20" fill="#ff7a00"/>
      <circle cx="300" cy="140" r="6" fill="#0a0705"/>
      
      <!-- Track Meta -->
      <text x="300" y="230" fill="#fff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" text-anchor="middle">Synthwave Coding Beats</text>
      <text x="300" y="248" fill="#ff9f43" font-size="12" text-anchor="middle">Arvind • Lofi Dev Radio</text>
      
      <!-- Progress Bar -->
      <line x1="180" y1="270" x2="420" y2="270" stroke="#33241c" stroke-width="4" stroke-linecap="round"/>
      <line x1="180" y1="270" x2="330" y2="270" stroke="#ff7a00" stroke-width="4" stroke-linecap="round"/>
      <circle cx="330" cy="270" r="6" fill="#fff"/>

      <!-- Controls -->
      <g transform="translate(230, 290)">
        <polygon points="10,18 20,12 20,24" fill="#aaa"/>
        <polygon points="20,18 30,12 30,24" fill="#aaa"/>
        <!-- Play Circle -->
        <circle cx="70" cy="18" r="16" fill="#ff7a00"/>
        <polygon points="66,12 66,24 78,18" fill="#fff"/>
        <polygon points="120,18 110,12 110,24" fill="#aaa"/>
        <polygon points="130,18 120,12 120,24" fill="#aaa"/>
      </g>
    `
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    tagline: 'Personal Finance & Charts',
    color1: '#ff9100',
    color2: '#e65100',
    graphic: `
      <rect x="80" y="45" width="440" height="310" rx="16" fill="#16100c" stroke="#ff9100" stroke-width="1.5"/>
      <!-- Balance Card -->
      <rect x="110" y="65" width="380" height="75" rx="12" fill="#251a13"/>
      <text x="135" y="92" fill="#aaa" font-size="12">TOTAL BALANCE</text>
      <text x="135" y="122" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="800">₹ 84,350.00</text>
      <text x="440" y="115" fill="#4caf50" font-weight="700" font-size="14" text-anchor="end">+18.5%</text>

      <!-- Bar Chart -->
      <g transform="translate(110, 165)">
        <line x1="0" y1="110" x2="380" y2="110" stroke="#33241c" stroke-width="1"/>
        <rect x="25" y="40" width="30" height="70" rx="4" fill="#ff9100"/>
        <rect x="85" y="65" width="30" height="45" rx="4" fill="#ff7043"/>
        <rect x="145" y="20" width="30" height="90" rx="4" fill="#ff9100"/>
        <rect x="205" y="55" width="30" height="55" rx="4" fill="#ff7043"/>
        <rect x="265" y="30" width="30" height="80" rx="4" fill="#ff9100"/>
        <rect x="325" y="70" width="30" height="40" rx="4" fill="#ff7043"/>
      </g>
    `
  },
  {
    id: 'quiz-app',
    title: 'Quiz Application',
    tagline: 'Interactive MCQ & Timer Engine',
    color1: '#ff6f00',
    color2: '#d84315',
    graphic: `
      <rect x="100" y="45" width="400" height="310" rx="16" fill="#18120d" stroke="#ff6f00" stroke-width="1.5"/>
      <!-- Progress Bar & Timer -->
      <rect x="130" y="68" width="340" height="8" rx="4" fill="#2d1f17"/>
      <rect x="130" y="68" width="220" height="8" rx="4" fill="#ff6f00"/>
      <text x="130" y="98" fill="#ff9800" font-weight="700" font-size="12">QUESTION 7 / 10</text>
      <text x="470" y="98" fill="#ff5252" font-weight="700" font-size="12" text-anchor="end">⏱ 00:24</text>
      
      <!-- Question -->
      <text x="130" y="132" fill="#fff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="15">What does DOM stand for in JavaScript?</text>
      
      <!-- Options -->
      <g transform="translate(130, 155)">
        <rect x="0" y="0" width="340" height="38" rx="8" fill="#241912" stroke="#ff6f00" stroke-width="1"/>
        <text x="20" y="24" fill="#ddd" font-size="12">A. Document Object Model</text>
        <circle cx="315" cy="19" r="7" fill="#4caf50"/>
      </g>
      <g transform="translate(130, 203)">
        <rect x="0" y="0" width="340" height="38" rx="8" fill="#241912"/>
        <text x="20" y="24" fill="#888" font-size="12">B. Data Operations Module</text>
      </g>
      <g transform="translate(130, 251)">
        <rect x="0" y="0" width="340" height="38" rx="8" fill="#241912"/>
        <text x="20" y="24" fill="#888" font-size="12">C. Desktop Online Management</text>
      </g>
      <g transform="translate(130, 299)">
        <rect x="0" y="0" width="340" height="38" rx="8" fill="#241912"/>
        <text x="20" y="24" fill="#888" font-size="12">D. Dynamic Output Machine</text>
      </g>
    `
  },
  {
    id: 'digital-clock',
    title: 'Digital Clock',
    tagline: 'Neon LED Timepiece with Date',
    color1: '#ff8c00',
    color2: '#e65100',
    graphic: `
      <!-- Clock Chassis -->
      <rect x="90" y="70" width="420" height="250" rx="24" fill="#130e0a" stroke="#ff8c00" stroke-width="2" filter="url(#glow)"/>
      <rect x="110" y="90" width="380" height="210" rx="16" fill="#0b0805"/>
      
      <!-- Time Display -->
      <text x="300" y="195" fill="#ff8c00" font-family="'JetBrains Mono', monospace" font-size="58" font-weight="800" text-anchor="middle" letter-spacing="4" filter="url(#glow)">11:45:32</text>
      <text x="430" y="160" fill="#ffa726" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700">AM</text>
      
      <!-- Date Bar -->
      <rect x="160" y="235" width="280" height="36" rx="18" fill="#20150e"/>
      <text x="300" y="258" fill="#e0d6cc" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" text-anchor="middle">Friday • 30 October • IST</text>
    `
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    tagline: 'Global Exchange Rate Engine',
    color1: '#ffa000',
    color2: '#ff6f00',
    graphic: `
      <rect x="110" y="55" width="380" height="290" rx="18" fill="#17110c" stroke="#ffa000" stroke-width="1.5"/>
      
      <!-- Input Currency -->
      <rect x="140" y="85" width="320" height="65" rx="10" fill="#231812"/>
      <text x="160" y="110" fill="#888" font-size="11">YOU SEND</text>
      <text x="160" y="136" fill="#fff" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="20">1,000</text>
      <rect x="370" y="98" width="70" height="38" rx="6" fill="#ffa000"/>
      <text x="405" y="122" fill="#111" font-weight="800" font-size="14" text-anchor="middle">USD $</text>

      <!-- Swap Icon -->
      <circle cx="300" cy="180" r="20" fill="#ffa000" filter="url(#glow)"/>
      <path d="M 293 175 L 307 175 M 303 171 L 307 175 L 303 179" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 307 185 L 293 185 M 297 181 L 293 185 L 297 189" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Output Currency -->
      <rect x="140" y="215" width="320" height="65" rx="10" fill="#231812"/>
      <text x="160" y="240" fill="#888" font-size="11">YOU GET</text>
      <text x="160" y="266" fill="#ffb74d" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="20">84,120.00</text>
      <rect x="370" y="228" width="70" height="38" rx="6" fill="#ff6f00"/>
      <text x="405" y="252" fill="#fff" font-weight="800" font-size="14" text-anchor="middle">INR ₹</text>

      <text x="300" y="315" fill="#888" font-size="11" text-anchor="middle">1 USD = 84.12 INR • Live Exchange Rate</text>
    `
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Website',
    tagline: 'Modern Digital Store & Checkout',
    color1: '#ff7700',
    color2: '#e64a19',
    graphic: `
      <!-- Store Layout -->
      <rect x="50" y="45" width="500" height="305" rx="14" fill="#150f0b" stroke="#ff7700" stroke-width="1.5"/>
      <!-- Header -->
      <rect x="50" y="45" width="500" height="42" rx="14" fill="#221710"/>
      <circle cx="80" cy="66" r="8" fill="#ff7700"/>
      <text x="96" y="71" fill="#fff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="14">ShopEase.io</text>
      <rect x="440" y="55" width="85" height="24" rx="12" fill="#ff7700"/>
      <text x="482" y="71" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">Cart (3)</text>
      
      <!-- Featured Grid -->
      <g transform="translate(75, 105)">
        <rect x="0" y="0" width="140" height="150" rx="10" fill="#201610" stroke="#ff7700" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="110" height="70" rx="6" fill="#312117"/>
        <rect x="15" y="95" width="90" height="10" rx="3" fill="#fff"/>
        <text x="15" y="125" fill="#ff7700" font-weight="700" font-size="14">₹ 2,499</text>
        <circle cx="115" cy="120" r="12" fill="#ff7700"/>
        <text x="115" y="124" fill="#111" font-weight="800" font-size="12" text-anchor="middle">+</text>
      </g>
      <g transform="translate(230, 105)">
        <rect x="0" y="0" width="140" height="150" rx="10" fill="#201610" stroke="#ff7700" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="110" height="70" rx="6" fill="#312117"/>
        <rect x="15" y="95" width="90" height="10" rx="3" fill="#fff"/>
        <text x="15" y="125" fill="#ff7700" font-weight="700" font-size="14">₹ 4,199</text>
        <circle cx="115" cy="120" r="12" fill="#ff7700"/>
        <text x="115" y="124" fill="#111" font-weight="800" font-size="12" text-anchor="middle">+</text>
      </g>
      <g transform="translate(385, 105)">
        <rect x="0" y="0" width="140" height="150" rx="10" fill="#201610" stroke="#ff7700" stroke-opacity="0.3"/>
        <rect x="15" y="15" width="110" height="70" rx="6" fill="#312117"/>
        <rect x="15" y="95" width="90" height="10" rx="3" fill="#fff"/>
        <text x="15" y="125" fill="#ff7700" font-weight="700" font-size="14">₹ 1,899</text>
        <circle cx="115" cy="120" r="12" fill="#ff7700"/>
        <text x="115" y="124" fill="#111" font-weight="800" font-size="12" text-anchor="middle">+</text>
      </g>
    `
  },
  {
    id: 'landing-page',
    title: 'Responsive Landing Page',
    tagline: 'High-Conversion SaaS Product Page',
    color1: '#ff6200',
    color2: '#e65100',
    graphic: `
      <!-- Landing Page Mock -->
      <rect x="50" y="50" width="500" height="300" rx="14" fill="#140f0c" stroke="#ff6200" stroke-width="1.5"/>
      <rect x="50" y="50" width="500" height="36" rx="14" fill="#201712"/>
      <rect x="80" y="60" width="70" height="16" rx="4" fill="#ff6200"/>
      <rect x="420" y="58" width="90" height="20" rx="6" fill="#ff6200"/>
      
      <!-- Hero Layout -->
      <text x="300" y="125" fill="#fff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22" text-anchor="middle">Scale Your Digital Presence</text>
      <text x="300" y="150" fill="#a89e95" font-size="13" text-anchor="middle">Next-generation frontend architectures engineered for lightning performance.</text>
      
      <rect x="235" y="175" width="130" height="34" rx="8" fill="#ff6200" filter="url(#glow)"/>
      <text x="300" y="197" fill="#fff" font-weight="700" font-size="13" text-anchor="middle">Get Started Free</text>

      <!-- 3 Feature Cards -->
      <g transform="translate(80, 235)">
        <rect x="0" y="0" width="130" height="90" rx="8" fill="#221711"/>
        <circle cx="25" cy="25" r="10" fill="#ff6200"/>
        <rect x="20" y="45" width="70" height="8" rx="2" fill="#fff"/>
        <rect x="20" y="60" width="90" height="6" rx="2" fill="#888"/>
      </g>
      <g transform="translate(235, 235)">
        <rect x="0" y="0" width="130" height="90" rx="8" fill="#221711"/>
        <circle cx="25" cy="25" r="10" fill="#ff6200"/>
        <rect x="20" y="45" width="70" height="8" rx="2" fill="#fff"/>
        <rect x="20" y="60" width="90" height="6" rx="2" fill="#888"/>
      </g>
      <g transform="translate(390, 235)">
        <rect x="0" y="0" width="130" height="90" rx="8" fill="#221711"/>
        <circle cx="25" cy="25" r="10" fill="#ff6200"/>
        <rect x="20" y="45" width="70" height="8" rx="2" fill="#fff"/>
        <rect x="20" y="60" width="90" height="6" rx="2" fill="#888"/>
      </g>
    `
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    tagline: 'Cryptographic Strength & Security',
    color1: '#ff8800',
    color2: '#d84315',
    graphic: `
      <rect x="110" y="50" width="380" height="300" rx="18" fill="#16100c" stroke="#ff8800" stroke-width="1.5"/>
      <!-- Password Result Box -->
      <rect x="140" y="75" width="320" height="55" rx="10" fill="#0f0a07" stroke="#ff8800" stroke-width="1"/>
      <text x="160" y="110" fill="#ff9900" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700">k9#Px!8@Wm$vQ2</text>
      <rect x="400" y="87" width="45" height="32" rx="6" fill="#ff8800"/>
      <text x="422" y="108" fill="#111" font-size="11" font-weight="700" text-anchor="middle">COPY</text>
      
      <!-- Length Slider -->
      <g transform="translate(140, 155)">
        <text x="0" y="0" fill="#ddd" font-size="13">Character Length</text>
        <text x="320" y="0" fill="#ff8800" font-weight="700" font-size="15" text-anchor="end">16</text>
        <line x1="0" y1="20" x2="320" y2="20" stroke="#33241c" stroke-width="6" stroke-linecap="round"/>
        <line x1="0" y1="20" x2="210" y2="20" stroke="#ff8800" stroke-width="6" stroke-linecap="round"/>
        <circle cx="210" cy="20" r="10" fill="#fff" stroke="#ff8800" stroke-width="3"/>
      </g>

      <!-- Checklist Options -->
      <g transform="translate(140, 210)">
        <rect x="0" y="0" width="18" height="18" rx="4" fill="#ff8800"/>
        <text x="30" y="14" fill="#ccc" font-size="12">Include Uppercase Letters (A-Z)</text>
      </g>
      <g transform="translate(140, 240)">
        <rect x="0" y="0" width="18" height="18" rx="4" fill="#ff8800"/>
        <text x="30" y="14" fill="#ccc" font-size="12">Include Numbers (0-9)</text>
      </g>
      <g transform="translate(140, 270)">
        <rect x="0" y="0" width="18" height="18" rx="4" fill="#ff8800"/>
        <text x="30" y="14" fill="#ccc" font-size="12">Include Symbols (!@#$%^&*)</text>
      </g>

      <!-- Generate Button -->
      <rect x="140" y="305" width="320" height="34" rx="8" fill="#ff8800"/>
      <text x="300" y="327" fill="#111" font-weight="800" font-size="13" text-anchor="middle">GENERATE STRONG PASSWORD</text>
    `
  },
  {
    id: 'stopwatch',
    title: 'Stopwatch',
    tagline: 'Precision Chronometer & Split Laps',
    color1: '#ff6600',
    color2: '#e65100',
    graphic: `
      <rect x="120" y="45" width="360" height="310" rx="20" fill="#16100c" stroke="#ff6600" stroke-width="1.5"/>
      
      <!-- Big Dial Circle -->
      <circle cx="300" cy="140" r="70" fill="#100b08" stroke="#ff6600" stroke-width="3" filter="url(#glow)"/>
      <line x1="300" y1="140" x2="335" y2="105" stroke="#ff8c00" stroke-width="3" stroke-linecap="round"/>
      <circle cx="300" cy="140" r="6" fill="#fff"/>

      <!-- Timer Numbers -->
      <text x="300" y="240" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="32" font-weight="800" text-anchor="middle">02:45.89</text>
      
      <!-- Buttons -->
      <g transform="translate(150, 265)">
        <rect x="0" y="0" width="90" height="36" rx="8" fill="#ff6600"/>
        <text x="45" y="23" fill="#fff" font-weight="700" font-size="13" text-anchor="middle">START</text>
        
        <rect x="110" y="0" width="90" height="36" rx="8" fill="#2d1f17"/>
        <text x="155" y="23" fill="#ffa726" font-weight="700" font-size="13" text-anchor="middle">LAP</text>
        
        <rect x="220" y="0" width="80" height="36" rx="8" fill="#1f1610"/>
        <text x="260" y="23" fill="#888" font-weight="700" font-size="13" text-anchor="middle">RESET</text>
      </g>
    `
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    tagline: 'Masonry Grid & Lightbox Viewer',
    color1: '#ff7700',
    color2: '#e64a19',
    graphic: `
      <rect x="60" y="45" width="480" height="310" rx="16" fill="#150f0b" stroke="#ff7700" stroke-width="1.5"/>
      <!-- Filter Bar -->
      <g transform="translate(90, 65)">
        <rect x="0" y="0" width="60" height="26" rx="13" fill="#ff7700"/>
        <text x="30" y="17" fill="#111" font-size="11" font-weight="700" text-anchor="middle">ALL</text>
        <rect x="70" y="0" width="80" height="26" rx="13" fill="#241912"/>
        <text x="110" y="17" fill="#aaa" font-size="11" text-anchor="middle">Nature</text>
        <rect x="160" y="0" width="80" height="26" rx="13" fill="#241912"/>
        <text x="200" y="17" fill="#aaa" font-size="11" text-anchor="middle">Design</text>
        <rect x="250" y="0" width="80" height="26" rx="13" fill="#241912"/>
        <text x="290" y="17" fill="#aaa" font-size="11" text-anchor="middle">Urban</text>
      </g>

      <!-- Masonry Grid Cards -->
      <g transform="translate(90, 110)">
        <rect x="0" y="0" width="130" height="110" rx="8" fill="#2d1d14"/>
        <rect x="145" y="0" width="130" height="170" rx="8" fill="#ff7700" fill-opacity="0.2" stroke="#ff7700" stroke-width="1"/>
        <circle cx="210" cy="85" r="18" fill="#ff7700"/>
        <text x="210" y="90" fill="#fff" font-size="16" text-anchor="middle">🔍</text>
        <rect x="290" y="0" width="130" height="90" rx="8" fill="#2d1d14"/>
        
        <rect x="0" y="125" width="130" height="95" rx="8" fill="#20150e"/>
        <rect x="290" y="105" width="130" height="115" rx="8" fill="#251911"/>
      </g>
    `
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    tagline: 'AI Hand Gesture Battle Arena',
    color1: '#ff5722',
    color2: '#e64a19',
    graphic: `
      <rect x="100" y="45" width="400" height="310" rx="20" fill="#16100c" stroke="#ff5722" stroke-width="1.5"/>
      <!-- Scoreboard -->
      <rect x="130" y="65" width="340" height="60" rx="12" fill="#251a13"/>
      <text x="180" y="90" fill="#aaa" font-size="11" text-anchor="middle">YOU</text>
      <text x="180" y="115" fill="#ff7043" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="800" text-anchor="middle">5</text>
      <text x="300" y="102" fill="#666" font-size="16" font-weight="700" text-anchor="middle">VS</text>
      <text x="420" y="90" fill="#aaa" font-size="11" text-anchor="middle">BOT</text>
      <text x="420" y="115" fill="#888" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="800" text-anchor="middle">3</text>
      
      <!-- Battle Icons -->
      <g transform="translate(130, 150)">
        <!-- Rock -->
        <circle cx="45" cy="50" r="38" fill="#261b14" stroke="#ff5722" stroke-width="2"/>
        <text x="45" y="58" font-size="32" text-anchor="middle">✊</text>
        <text x="45" y="105" fill="#ddd" font-size="11" font-weight="700" text-anchor="middle">ROCK</text>
        
        <!-- Paper -->
        <circle cx="170" cy="50" r="38" fill="#ff5722" filter="url(#glow)"/>
        <text x="170" y="58" font-size="32" text-anchor="middle">✋</text>
        <text x="170" y="105" fill="#ff9e80" font-size="11" font-weight="700" text-anchor="middle">PAPER</text>

        <!-- Scissors -->
        <circle cx="295" cy="50" r="38" fill="#261b14" stroke="#ff5722" stroke-width="2"/>
        <text x="295" y="58" font-size="32" text-anchor="middle">✌️</text>
        <text x="295" y="105" fill="#ddd" font-size="11" font-weight="700" text-anchor="middle">SCISSORS</text>
      </g>
      <rect x="200" y="295" width="200" height="34" rx="8" fill="#ff5722"/>
      <text x="300" y="317" fill="#fff" font-weight="700" font-size="12" text-anchor="middle">PAPER BEATS ROCK! YOU WIN 🎉</text>
    `
  }
];

function generateSVG(p) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0705"/>
      <stop offset="50%" stop-color="#140e0a"/>
      <stop offset="100%" stop-color="#1f140d"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.color1}"/>
      <stop offset="100%" stop-color="${p.color2}"/>
    </linearGradient>
    <linearGradient id="grad-amz" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#232f3e"/>
      <stop offset="100%" stop-color="#11171f"/>
    </linearGradient>
    <linearGradient id="grad-weather" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#231710"/>
      <stop offset="100%" stop-color="#120c08"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="600" height="400" fill="url(#bgGrad)"/>
  
  <!-- Subtle Ambient Orange Orb -->
  <circle cx="500" cy="80" r="140" fill="${p.color1}" fill-opacity="0.12" filter="url(#glow)"/>
  <circle cx="100" cy="320" r="120" fill="${p.color2}" fill-opacity="0.08" filter="url(#glow)"/>

  <!-- Geometric Grid Pattern Lines -->
  <g stroke="#ffffff" stroke-opacity="0.03" stroke-width="1">
    <line x1="0" y1="80" x2="600" y2="80"/>
    <line x1="0" y1="160" x2="600" y2="160"/>
    <line x1="0" y1="240" x2="600" y2="240"/>
    <line x1="0" y1="320" x2="600" y2="320"/>
    <line x1="100" y1="0" x2="100" y2="400"/>
    <line x1="200" y1="0" x2="200" y2="400"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
    <line x1="400" y1="0" x2="400" y2="400"/>
    <line x1="500" y1="0" x2="500" y2="400"/>
  </g>

  <!-- Project Specific UI Graphic -->
  ${p.graphic}

  <!-- Project Title Banner Bottom -->
  <rect x="0" y="360" width="600" height="40" fill="#0d0906" fill-opacity="0.95"/>
  <line x1="0" y1="360" x2="600" y2="360" stroke="${p.color1}" stroke-width="1" stroke-opacity="0.3"/>
  <circle cx="25" cy="380" r="4" fill="${p.color1}"/>
  <text x="40" y="384" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13">${p.title}</text>
  <text x="580" y="384" fill="#887e74" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" text-anchor="end">${p.tagline}</text>
</svg>
`;
}

projects.forEach(p => {
  const filePath = path.join(projectDir, `${p.id}.svg`);
  fs.writeFileSync(filePath, generateSVG(p).trim(), 'utf8');
  console.log(`Generated: ${p.id}.svg`);
});

console.log('All 18 project thumbnails created successfully.');

