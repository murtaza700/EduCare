# 📚 EduCare - Online Learning Institute

A modern, fully responsive React website for an online learning platform built with React.js, Tailwind CSS v4, and Framer Motion.

![EduCare Preview](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 Live Demo

[View Live Demo](#)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Pages Overview](#pages-overview)
- [Components](#components)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- 🎨 Modern, clean UI with educational focus
- 📱 Fully responsive design (mobile, tablet, laptop, desktop)
- 🧭 React Router DOM for seamless navigation
- 🎯 Smooth animations with Motion (Framer Motion)
- 🎨 Tailwind CSS v4 for styling
- 📦 Reusable component architecture
- ♿ Accessible semantic HTML
- 🔍 SEO-friendly structure

### Page Features
- 🏠 **Home Page**: Hero section, features, popular courses, statistics, testimonials, CTA
- 📚 **Courses Page**: Course grid with search and category filters
- 📖 **Course Details**: Detailed course information with curriculum
- 👨‍🏫 **Teachers Page**: Instructor profiles with social links
- ℹ️ **About Page**: Mission, vision, timeline, and values
- 📝 **Blog**: Blog posts with search and category filters
- 📄 **Blog Details**: Full article layout with share buttons
- 📞 **Contact Page**: Form with validation and loading states
- 🔍 **404 Page**: Custom not found page

### Technical Features
- 🧩 Reusable components (Button, Cards, SectionTitle)
- 🔄 Animated counters for statistics
- 📱 Mobile-responsive hamburger menu
- 🎯 Form validation with error handling
- ⏳ Loading states for async operations
- 🎨 Consistent typography and spacing
- 🌙 Smooth scrolling behavior

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18.2.0 | Frontend framework |
| React Router DOM | 6.20.0 | Routing |
| Tailwind CSS | 4.0.0 | Styling |
| Motion (Framer Motion) | 10.16.4 | Animations |
| Lucide React | 0.309.0 | Icons |

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── CourseCard.jsx
│   │   ├── BlogCard.jsx
│   │   ├── TeacherCard.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── Counter.jsx
│   │   └── Container.jsx
│   └── layout/
│       ├── Navbar.jsx
│       └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── CourseDetails.jsx
│   ├── Teachers.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── BlogDetails.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── data/
│   └── mockData.js
├── assets/
│   └── (images, fonts, etc.)
├── hooks/
│   └── (custom hooks)
├── utils/
│   └── (utility functions)
├── App.js
├── index.js
└── index.css
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/EduCare.git
   cd EduCare
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react-router-dom lucide-react motion
   # or
   yarn add react-router-dom lucide-react motion
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 💻 Usage

### Development
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production
```bash
npm run build
```
Builds the app for production to the `build` folder.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 📖 Pages Overview

### Home Page (`/`)
- Hero section with animated text and CTA buttons
- Features section with 6 benefit cards
- Popular courses showcase
- Animated statistics counters
- Student testimonials
- Call-to-action section

### Courses Page (`/courses`)
- Search functionality
- Category filters
- Responsive course grid
- Course cards with key information

### Course Details (`/course/:id`)
- Course banner with metadata
- Instructor information
- Course description
- Curriculum list
- Requirements section
- Enrollment CTA

### Teachers Page (`/teachers`)
- Instructor profile cards
- Social media links
- Subject expertise display

### About Page (`/about`)
- Institute introduction
- Mission and vision
- Core values
- Interactive timeline
- Team highlights

### Blog Page (`/blog`)
- Search functionality
- Category filters
- Blog post cards
- Read more links

### Blog Details (`/blog/:id`)
- Full article layout
- Author information
- Social sharing buttons
- Related posts

### Contact Page (`/contact`)
- Contact form with validation
- Loading states
- Success/error messages
- Contact information
- Map placeholder

### Not Found Page (`/*`)
- Custom 404 design
- Friendly error message
- Back to home button

## 🧩 Components

### Common Components
| Component | Description | Props |
|-----------|-------------|-------|
| `Button` | Reusable button with variants | `to`, `href`, `variant`, `size`, `onClick` |
| `SectionTitle` | Section headers with animations | `subtitle`, `title`, `description`, `align` |
| `CourseCard` | Course display card | `course` object |
| `BlogCard` | Blog post card | `post` object |
| `TeacherCard` | Instructor profile card | `teacher` object |
| `FeatureCard` | Feature highlight card | `icon`, `title`, `description`, `color` |
| `TestimonialCard` | Student review card | `testimonial` object |
| `Counter` | Animated number counter | `end`, `duration` |
| `Container` | Wrapper with consistent padding | `children`, `className` |

### Layout Components
- `Navbar`: Responsive navigation with mobile menu
- `Footer`: Site footer with links and contact info

## 🎨 Animations

Motion (Framer Motion) is used for:
- ✨ Hero section entrance animations
- 🃏 Card hover effects (scale and lift)
- 📱 Mobile menu slide animation
- 🔄 Section fade-in on scroll
- 🎯 Button hover effects
- 📊 Counter animations for statistics
- 🔍 Page transitions

## 📱 Responsive Design

Breakpoints using Tailwind CSS:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Laptop**: 1024px - 1280px
- **Desktop**: > 1280px

Features responsive:
- Navigation menu (hamburger on mobile)
- Grid layouts (1 → 2 → 3 → 4 columns)
- Typography sizes
- Spacing and padding
- Images and media

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag and drop build folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to GitHub Pages
```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Animations powered by [Motion](https://motion.dev)
- Built with [React.js](https://reactjs.org)

## 📧 Contact

Your Name - [@GhuamMurtaza](https://twitter.com/GhuamMurtaza) - murtazakasur7@gmail.com

Project Link: [https://github.com/murtaza700/EduCare](https://github.com/murtaza700/EduCare)

---

⭐ Star this repo on GitHub — it helps!

Made with ❤️ by Ghulam Murtaza