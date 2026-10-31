# Arvind Kumar — Personal Developer Portfolio Website

Welcome to the official source code for **Arvind Kumar's** personal developer portfolio website.

Built with **HTML5**, **CSS3**, and **Vanilla JavaScript** (ES6+), this portfolio follows an ultra-premium visual aesthetic inspired by modern dark glassmorphism:
- **Background**: Deep obsidian black (`#070503`) and warm dark brown (`#0e0a07`).
- **Accents**: Neon burnt orange (`#d84315`), vibrant bright orange (`#ff6b00`), and warm amber (`#ffa726`).
- **Cards**: Translucent glassmorphism with backdrop blur, glowing borders, and interactive 3D tilt on hover.
- **Showcase**: Dual-view hero featuring Arvind's **authentic real photograph** alongside a complementary **3D developer character** in an orange jacket.

---

## 📁 Project Structure

```
MyNewPortfolio/
│
├── index.html                   # Semantic HTML5 markup for all sections
├── style.css                    # Modern CSS3 styling, animations, and responsiveness
├── script.js                    # Interactive constellation canvas, modals, and games
├── verify.js                    # Asset verification utility
├── build-assets.js              # Vector SVG generator for the 18 project thumbnails
├── build-resume.js              # Standalone resume PDF builder
│
└── assets/
    ├── arvind_portrait.jpg      # Arvind's real professional photograph (Primary DP)
    ├── arvind_college.jpg       # Authentic college portrait for About section
    ├── arvind_alt.jpg           # Alternate photo
    ├── developer_3d_avatar.png  # Complementary 3D developer character in orange hoodie
    ├── Arvind_Kumar_Resume.pdf  # Real downloadable resume PDF
    │
    └── projects/                # 18 custom-crafted vector project thumbnails (SVG)
        ├── amazon-clone.svg
        ├── tic-tac-toe.svg
        ├── portfolio-website.svg
        ├── weather-app.svg
        ├── todo-app.svg
        ├── calculator-app.svg
        ├── netflix-clone.svg
        ├── music-player.svg
        ├── expense-tracker.svg
        ├── quiz-app.svg
        ├── digital-clock.svg
        ├── currency-converter.svg
        ├── ecommerce-store.svg
        ├── landing-page.svg
        ├── password-generator.svg
        ├── stopwatch.svg
        ├── image-gallery.svg
        └── rock-paper-scissors.svg
```

---

## 🌟 Key Features

1. **Sticky Glassmorphism Navbar**: Floating pill bar with brand monogram `<AK/>`, links, mobile drawer, and Download Resume button.
2. **Dual-View Hero Visual Stage**:
   - Primary: Arvind's authentic photograph with an orange glowing halo and verified badge.
   - Complementary: Modern 3D developer persona wearing an orange hoodie with floating tech badges.
   - Live tab switcher: Real Photo | 3D Persona | Side-by-Side.
3. **Interactive Background**: Dynamic HTML5 canvas constellation particles responding to cursor position.
4. **Technical Skills**: HTML5, CSS3, JavaScript, C++, Git, and GitHub with custom glowing icons and proficiency tiers (no arbitrary percentages).
5. **Development Experience**: Milestone timeline covering frontend projects and BCA coursework.
6. **18 Projects Catalog**:
   - Filter tabs: All, Clones & E-Commerce, Interactive Games, Utilities & Tools, UIs & Portfolios.
   - Interactive in-page modal dialogs with playable simulations for Tic Tac Toe, Calculator, Password Generator, Digital Clock, and Rock Paper Scissors!
7. **About Me**: Narrative bio, quick stats, Madhusudan Das Degree College affiliation, and development philosophy card.
8. **Academic Timeline**: BCA Degree at Madhusudan Das Degree College affiliated with DDU Gorakhpur University.
9. **Contact & Socials**:
   - One-click copy email button with toast notification (`arvindgupta32823@gmail.com`).
   - Clickable `tel:` and `mailto:` links.
   - Professional contact form with validation and mail client preparation.
10. **Back-to-Top**: Circular SVG scroll progress ring button.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any modern browser, or run a local server:

```powershell
# Using Python
python -m http.server 3000

# Or using Node.js npx serve
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

