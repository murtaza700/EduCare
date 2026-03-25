export const coursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and more from scratch",
        category: "Development",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        price: 99.99,
        duration: "12 weeks",
        students: 15420,
        popular: true,
        instructor: {
            name: "John Smith",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        curriculum: [
            "Introduction to Web Development",
            "HTML5 Fundamentals",
            "CSS3 and Modern Layouts",
            "JavaScript Basics",
            "Advanced JavaScript",
            "React.js",
            "Node.js and Express",
            "Databases and MongoDB",
            "Deployment and DevOps"
        ],
        requirements: [
            "No prior programming experience needed",
            "A computer with internet connection",
            "Dedication to learn"
        ],
        fullDescription: "This comprehensive bootcamp will take you from absolute beginner to professional web developer. You'll learn modern technologies and best practices used by top companies worldwide."
    },
    {
        id: 2,
        title: "Data Science & Machine Learning",
        description: "Master Python, data analysis, machine learning algorithms and AI",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        price: 129.99,
        duration: "16 weeks",
        students: 8920,
        popular: true,
        instructor: {
            name: "Sarah Johnson",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        }
    },
    {
        id: 3,
        title: "UI/UX Design Masterclass",
        description: "Learn user-centered design principles, prototyping, and design tools",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        price: 89.99,
        duration: "10 weeks",
        students: 6780,
        popular: false,
        instructor: {
            name: "Emily Chen",
            avatar: "https://randomuser.me/api/portraits/women/63.jpg"
        }
    },
    {
        id: 4,
        title: "Digital Marketing Strategy",
        description: "SEO, social media marketing, content strategy and analytics",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        price: 79.99,
        duration: "8 weeks",
        students: 5430,
        popular: false,
        instructor: {
            name: "Michael Brown",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        }
    },
    {
        id: 5,
        title: "Business Analytics",
        description: "Data-driven decision making, Excel, SQL, and Tableau",
        category: "Business",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        price: 69.99,
        duration: "8 weeks",
        students: 3890,
        popular: false,
        instructor: {
            name: "David Wilson",
            avatar: "https://randomuser.me/api/portraits/men/42.jpg"
        }
    },
    {
        id: 6,
        title: "Mobile App Development with React Native",
        description: "Build iOS and Android apps with JavaScript and React",
        category: "Development",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        price: 109.99,
        duration: "12 weeks",
        students: 6230,
        popular: true,
        instructor: {
            name: "Alex Thompson",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    }
];

export const teachersData = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        subject: "Data Science & AI",
        bio: "PhD in Computer Science with 10+ years of industry experience in machine learning.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "John Smith",
        subject: "Web Development",
        bio: "Full-stack developer and tech lead at Fortune 500 companies. Passionate about teaching.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Emily Chen",
        subject: "UI/UX Design",
        bio: "Award-winning designer with experience at top design agencies and startups.",
        image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
        id: 4,
        name: "Michael Brown",
        subject: "Digital Marketing",
        bio: "Marketing director with proven track record in growing brands and online presence.",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        id: 5,
        name: "Prof. David Wilson",
        subject: "Business Analytics",
        bio: "Professor of Business Analytics with extensive consulting experience.",
        image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
        id: 6,
        name: "Alex Thompson",
        subject: "Mobile Development",
        bio: "Mobile app developer with 8 years of experience in iOS and Android development.",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 7,
        name: "Lisa Anderson",
        subject: "Graphic Design",
        bio: "Creative director and visual designer with portfolio of international brands.",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        id: 8,
        name: "Robert Martinez",
        subject: "Cybersecurity",
        bio: "Security expert and ethical hacker with government and corporate experience.",
        image: "https://randomuser.me/api/portraits/men/52.jpg"
    }
];

export const blogPostsData = [
    {
        id: 1,
        title: "10 Tips to Learn Programming Faster",
        excerpt: "Discover proven strategies to accelerate your programming learning journey and master coding concepts more efficiently.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-15",
        author: "John Smith",
        category: "Learning Tips"
    },
    {
        id: 2,
        title: "The Future of Online Education",
        excerpt: "Explore the latest trends and innovations shaping the future of online learning and education technology.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-10",
        author: "Sarah Johnson",
        category: "Education Trends"
    },
    {
        id: 3,
        title: "Balancing Work and Study: A Guide",
        excerpt: "Practical advice for professionals looking to upskill while maintaining work-life balance.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-05",
        author: "Emily Chen",
        category: "Work-Life Balance"
    },
    {
        id: 4,
        title: "Why Soft Skills Matter in Tech",
        excerpt: "Understanding the importance of communication, teamwork, and emotional intelligence in technical roles.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2024-01-01",
        author: "Michael Brown",
        category: "Career Development"
    },
    {
        id: 5,
        title: "Getting Started with Machine Learning",
        excerpt: "A beginner-friendly guide to start your journey in machine learning and AI.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-12-28",
        author: "David Wilson",
        category: "Data Science"
    },
    {
        id: 6,
        title: "Design Thinking in Education",
        excerpt: "How design thinking methodologies can transform the learning experience.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "2023-12-20",
        author: "Lisa Anderson",
        category: "Innovation"
    }
];

export const testimonialsData = [
    {
        id: 1,
        name: "Jennifer Lee",
        role: "Web Development Student",
        comment: "The web development bootcamp completely transformed my career. I went from zero coding knowledge to landing a developer job in 6 months!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 2,
        name: "Mark Thompson",
        role: "Data Science Graduate",
        comment: "Excellent curriculum and supportive instructors. The projects were challenging but rewarding. Highly recommended!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        id: 3,
        name: "Sophia Rodriguez",
        role: "UX Design Student",
        comment: "The UI/UX course was exactly what I needed. Learned practical skills and built an impressive portfolio.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        id: 4,
        name: "James Wilson",
        role: "Marketing Professional",
        comment: "Digital marketing course helped me level up my skills and get a promotion. Real-world applications and case studies were invaluable.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
];

export const statsData = [
    { label: "Students", value: 50000, suffix: "+" },
    { label: "Courses", value: 150, suffix: "+" },
    { label: "Teachers", value: 85, suffix: "" },
    { label: "Success Rate", value: 95, suffix: "%" }
];

export const featuresData = [
    {
        icon: "Users",
        title: "Expert Teachers",
        description: "Learn from industry professionals with years of real-world experience.",
        color: "blue"
    },
    {
        icon: "Clock",
        title: "Flexible Learning",
        description: "Study at your own pace with 24/7 access to course materials.",
        color: "green"
    },
    {
        icon: "Award",
        title: "Certificates",
        description: "Earn recognized certificates upon completion of your courses.",
        color: "purple"
    },
    {
        icon: "Video",
        title: "Online Classes",
        description: "Interactive live sessions and recorded lectures available anytime.",
        color: "orange"
    },
    {
        icon: "MessageCircle",
        title: "Community Support",
        description: "Join a community of learners and get help when you need it.",
        color: "red"
    },
    {
        icon: "Briefcase",
        title: "Career Guidance",
        description: "Get career advice and job placement assistance after graduation.",
        color: "indigo"
    }
];