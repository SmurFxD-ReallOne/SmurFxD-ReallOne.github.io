# 🌟 Musaad Al-Ghashmari - Personal Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-00d4ff?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

> A stunning, modern personal portfolio website built with pure HTML, CSS, and JavaScript. Features a dark theme with cyan accents, smooth animations, and a professional design that showcases skills and projects effectively.

## ✨ Live Demo

**[🌐 View Live Portfolio](https://smurfxd-reallone.github.io/)**

## 🎯 Features

### 🎨 **Design & UI/UX**
- **Dark Theme**: Modern dark design with cyan accent colors
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Professional Layout**: Clean, organized sections for easy navigation

### 🚀 **Interactive Elements**
- **Floating Particles**: Animated background particles for visual appeal
- **Typing Animation**: Dynamic text animation for the hero section
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states on all clickable elements

### 📱 **Sections**
- **Hero Section**: Eye-catching introduction with typing animation
- **About Me**: Personal information and statistics
- **Skills**: Animated progress bars for technical skills
- **Portfolio**: Project showcase with hover effects
- **Contact**: Contact form and information

### 🛠️ **Technical Features**
- **Pure HTML/CSS/JS**: No frameworks, lightweight and fast
- **Modern CSS**: Flexbox, Grid, and advanced CSS techniques
- **JavaScript ES6+**: Modern JavaScript with async/await
- **Performance Optimized**: Fast loading and smooth interactions
- **Supabase Backend**: Contact form connected to Supabase database
- **Real-time Data**: Form submissions stored securely in the cloud

## 🖼️ Screenshots

### Desktop View
![Desktop Screenshot](/images/Desktop.jpg)

### Mobile View
![Mobile Screenshot](/images/mobile.jpg)

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SmurFxD-ReallOne/SmurFxD-ReallOne.github.io.git
   cd SmurFxD-ReallOne.github.io
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **Customize for your needs**
   - Edit `index.html` to update personal information
   - Modify `styles.css` to change colors and styling
   - Update `script.js` to add new functionality

## 🎨 Customization Guide

### Personal Information
Update the following in `index.html`:
- **Name**: Change "Musaad Al-Ghashmari" to your name
- **Title**: Update the job title and description
- **About Section**: Modify the bio and statistics
- **Contact Information**: Update email, phone, and location

### Profile Picture
1. Replace `Images/image.png` with your own photo
2. Ensure the image is square and high quality
3. The website will automatically fit it to the circular frames

### Skills Section
Edit the skills in `index.html`:
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

### Portfolio Projects
Update the `portfolioData` array in `script.js`:
```javascript
const portfolioData = [
    {
        title: "Your Project Title",
        description: "Project description...",
        image: "fas fa-code",
        github: "https://github.com/yourusername/project",
        live: "https://your-project.com",
        technologies: ["React", "Node.js", "MongoDB"]
    }
];
```

### Color Scheme
Modify the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #0099cc;
    --background-dark: #0f0f0f;
    --background-light: #1a1a1a;
}
```

## 📁 Project Structure

```
SmurFxD-ReallOne.github.io/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # JavaScript functionality
├── Images/
│   └── image.png          # Profile picture
├── README.md              # This file
└── .gitignore             # Git ignore file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactivity and dynamic content
- **Font Awesome**: Icons for skills and projects
- **Google Fonts**: Typography (Poppins font family)
- **Supabase**: Backend as a Service for contact form data storage

## 🌟 Key Features Explained

### Dark Theme Design
- **Background**: Deep black (`#0f0f0f`) and dark gray (`#1a1a1a`)
- **Accent Color**: Cyan (`#00d4ff`) for highlights and interactions
- **Text Colors**: White and light gray for readability
- **Glow Effects**: Subtle cyan glows on interactive elements

### Animations
- **Floating Particles**: CSS animations for background particles
- **Typing Effect**: JavaScript-based text animation
- **Scroll Animations**: Intersection Observer API for scroll-triggered animations
- **Hover Effects**: CSS transitions and transforms

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Flexible Grid**: CSS Grid and Flexbox for layouts
- **Breakpoints**: Responsive breakpoints at 768px and 480px
- **Touch-Friendly**: Optimized for touch interactions

### Backend Integration
- **Supabase Database**: Contact form messages stored in PostgreSQL database
- **Real-time Updates**: Instant form submission and feedback
- **Secure Storage**: Row Level Security (RLS) for data protection
- **API Integration**: RESTful API calls using Supabase JavaScript client

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as source
4. Your site will be available at `https://username.github.io/repository-name`

### Supabase Setup (Required for Contact Form)
1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Set up the `contact_messages` table with the following SQL:
   ```sql
   CREATE TABLE contact_messages (
       id BIGSERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```
4. Get your project URL and anon key from Settings > API
5. Update the credentials in `script.js`:
   ```javascript
   const SUPABASE_URL = 'your-project-url';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

### Other Hosting Options
- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Web Hosting**: Upload files via FTP

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Test on multiple browsers and devices
- Ensure responsive design works properly
- Add comments for complex functionality

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome**: For the beautiful icons
- **Google Fonts**: For the Poppins font family
- **CSS Grid & Flexbox**: For modern layout techniques
- **Intersection Observer API**: For scroll animations

## 📞 Contact

**Musaad Al-Ghashmari**
- **Email**: mossad.alghashmari@gmail.com
- **Phone**: +966 535558831
- **Location**: Taif, Saudi Arabia
- **GitHub**: [@SmurFxD-ReallOne](https://github.com/SmurFxD-ReallOne)

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ by Musaad Al-Ghashmari**

*Last updated: July 2025* 