# Minsoo Ku - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student, UN Peacekeeper, and developer. Built with React.js, featuring a clean design with dark/light mode toggle and interactive contact functionality.

## 🌟 Live Website

Visit the live portfolio at: [https://minsooku.netlify.app]

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Sections](#sections)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Form Setup](#contact-form-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This portfolio website represents my professional journey from serving in United Nations Peacekeeping Operations to pursuing Computer Science at the University of Maryland, College Park. The site showcases my technical skills, work experience, projects, and provides an easy way for potential collaborators and employers to get in touch.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent storage
- **Interactive Contact Form**: Functional contact form with email integration via EmailJS
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Project Showcase**: Detailed project cards with links to demos and repositories
- **Skills Display**: Categorized skills with filtering functionality
- **Work Experience Timeline**: Professional experience with company logos and descriptions
- **Smooth Navigation**: Fixed navbar with smooth scrolling to sections
- **Toast Notifications**: User feedback for form submissions

## 🛠 Tech Stack

- **Frontend Framework**: React.js 18
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Notifications**: React Toastify
- **Date Formatting**: date-fns
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Utilities**: clsx, tailwind-merge

## 📚 Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons (Resume, Projects)
- Professional headshot

### 2. About Me
- Personal background and philosophy
- Core competencies with icons
- Contact button

### 3. Skills
- Programming languages and frameworks
- Categorized display (All, Backend, Frontend)
- Technology icons and descriptions

### 4. Work Experience
- Professional timeline
- Company logos and role descriptions
- Skills tags for each position

### 5. Projects
- Featured project showcase
- Project images, descriptions, and tech stacks
- Links to live demos and GitHub repositories

### 6. Contact
- Contact form with validation
- Social media links
- Multiple contact methods (email, phone, location)
- Real-time form submission with feedback

### 7. Footer
- Copyright information
- Memoji branding
- Back-to-top navigation

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{time}}` - Timestamp
4. Add your service ID, template ID, and public key to the `.env` file

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutMeSection.jsx      # About section with skills
│   ├── CodingSkillsSection.jsx # Technical skills display
│   ├── ContactSection.jsx      # Contact form and info
│   ├── Footer.jsx              # Site footer
│   ├── HeroSection.jsx         # Landing section
│   ├── Navbar.jsx              # Navigation bar
│   ├── ProjectsSection.jsx     # Project showcase
│   ├── ScreenMode.jsx          # Dark/light mode toggle
│   └── WorkExperienceSection.jsx # Professional experience
├── pages/
│   └── Home.jsx                # Main page component
├── lib/
│   └── utils.js                # Utility functions
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles and theme
```

## 🎨 Customization

### Theme Colors
The website uses CSS custom properties for theming. Modify the colors in `index.css`:

```css
:root {
  --primary: 164 100% 26%;        /* Main accent color */
  --background: 210 40% 98%;      /* Light background */
  --foreground: 222 47% 11%;      /* Text color */
  /* ... other variables */
}
```

### Content Updates
- **Personal Info**: Update content in `HeroSection.jsx` and `AboutMeSection.jsx`
- **Skills**: Modify the `skills` array in `CodingSkillsSection.jsx`
- **Experience**: Update the `experiences` array in `WorkExperienceSection.jsx`
- **Projects**: Modify the `projects` array in `ProjectsSection.jsx`

## 🌍 Deployment

The website is optimized for deployment on various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Performance Features

- **Code Splitting**: React Router for route-based splitting
- **Optimized Images**: Proper image sizing and formats
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Smooth Animations**: CSS transitions and transforms for better UX

## 👨‍💻 Author

**Minsoo Ku**
- LinkedIn: [linkedin.com/in/minsooku](https://linkedin.com/in/minsooku)
- GitHub: [github.com/minsoo-creates](https://github.com/minsoo-creates)
- Email: ku.minsoo0314@gmail.com

---

⭐️ If you found this project helpful, please give it a star!

*"Structured & Global Minded Problem-Solver"*