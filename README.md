# SmurFxD Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and Supabase integration for the contact form.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **Portfolio Section**: Dynamic project cards with GitHub and live demo links
- **Skills Display**: Animated progress bars for technical skills
- **Contact Form**: Connected to Supabase backend for message storage
- **Scroll Animations**: Fade-in effects and scroll-triggered animations
- **Social Media Integration**: Footer with social media links
- **Scroll to Top**: Convenient button to return to the top of the page

## 📁 File Structure

```
SmurFxD-ReallOne.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and Supabase integration
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Basic Setup

1. Clone or download this repository
2. Open `index.html` in your web browser to view the website
3. The website is ready to use with sample data

### 2. Supabase Integration (Optional)

To enable the contact form functionality:

1. **Create a Supabase Account**:
   - Go to [https://supabase.com](https://supabase.com)
   - Sign up for a free account
   - Create a new project

2. **Set Up Database Table**:
   - In your Supabase dashboard, go to the SQL Editor
   - Run the following SQL to create the contact_messages table:

```sql
CREATE TABLE contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

3. **Get Your Credentials**:
   - Go to Settings > API in your Supabase dashboard
   - Copy your Project URL and anon/public key

4. **Update JavaScript**:
   - Open `script.js`
   - Replace the placeholder values at the top:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

## 🎨 Customization Guide

### Personal Information

1. **Update Hero Section** (`index.html`):
   - Change the name "SmurFxD" to your name
   - Update the title and description
   - Modify the call-to-action buttons

2. **About Section**:
   - Replace the bio text with your own
   - Update the statistics (years of experience, projects, clients)
   - Add your own profile picture (replace the icon with an `<img>` tag)

3. **Contact Information**:
   - Update email, phone, and location in the contact section
   - Modify social media links in the footer

### Portfolio Projects

Edit the `portfolioData` array in `script.js`:

```javascript
const portfolioData = [
    {
        title: "Your Project Title",
        description: "Project description...",
        image: "fas fa-code", // Font Awesome icon
        github: "https://github.com/yourusername/project",
        live: "https://your-project.com",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    // Add more projects...
];
```

### Skills Section

Update the skills in `index.html`:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

### Styling

1. **Colors**: Update the CSS custom properties in `styles.css`
2. **Fonts**: Change the Google Fonts import in `index.html`
3. **Backgrounds**: Modify gradient backgrounds in the hero and other sections

## 📱 Responsive Design

The website is fully responsive and includes:

- **Mobile-first approach**: Optimized for mobile devices
- **Tablet support**: Responsive layouts for medium screens
- **Desktop optimization**: Enhanced layouts for larger screens
- **Touch-friendly**: Optimized for touch interactions

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Features

- **Form Validation**: Client-side validation for required fields
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: User-friendly notifications
- **Supabase Integration**: Secure backend storage
- **Spam Protection**: Basic form protection

## 🎯 Performance Features

- **Optimized Images**: Placeholder icons for fast loading
- **Minimal Dependencies**: Only Font Awesome and Google Fonts
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Lazy Loading**: Intersection Observer for scroll animations

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as source
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Web Hosting**: Upload files via FTP

## 🔒 Security Considerations

- **Supabase Security**: Uses Row Level Security (RLS)
- **Form Validation**: Client and server-side validation
- **HTTPS**: Always use HTTPS in production
- **API Keys**: Keep your Supabase keys secure

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help setting up or customizing your portfolio:

1. Check the [Supabase Documentation](https://supabase.com/docs)
2. Review the inline comments in the code
3. Open an issue in this repository

## 🎉 Credits

- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Supabase**: Backend as a Service
- **CSS Grid & Flexbox**: Modern layout techniques

---

**Happy coding! 🚀**

Your portfolio website is now ready to showcase your skills and projects to the world! 