import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Award, Clock, ChevronRight, Video, MessageCircle, BriefcaseBusiness } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import CourseCard from '../components/common/CourseCard';
import FeatureCard from '../components/common/FeatureCard';
import TestimonialCard from '../components/common/TestimonialCard';
import { coursesData, testimonialsData, statsData } from '../data/mockData';
import Counter from '../components/common/Counter';

const Home = () => {
    const featuresData = [
        {
            icon: <Users />,
            title: "Expert Teachers",
            description: "Learn from industry professionals with years of real-world experience.",
            color: "blue"
        },
        {
            icon: <Clock />,
            title: "Flexible Learning",
            description: "Study at your own pace with 24/7 access to course materials.",
            color: "green"
        },
        {
            icon: <Award />,
            title: "Certificates",
            description: "Earn recognized certificates upon completion of your courses.",
            color: "purple"
        },
        {
            icon: <Video />,
            title: "Online Classes",
            description: "Interactive live sessions and recorded lectures available anytime.",
            color: "orange"
        },
        {
            icon: <MessageCircle />,
            title: "Community Support",
            description: "Join a community of learners and get help when you need it.",
            color: "red"
        },
        {
            icon: <BriefcaseBusiness />,
            title: "Career Guidance",
            description: "Get career advice and job placement assistance after graduation.",
            color: "indigo"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const popularCourses = coursesData.filter(course => course.popular).slice(0, 3);

    return (
        <>
            <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-32 overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Unlock Your Potential with{' '}
                                <span className="text-blue-600">Online Learning</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Join thousands of learners worldwide and advance your career with expert-led courses,
                                flexible schedules, and recognized certificates.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button to="/courses" size="lg">
                                    Explore Courses
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button to="/about" variant="secondary" size="lg">
                                    Get Started
                                </Button>
                            </div>
                            <div className="flex items-center gap-8 mt-12">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img
                                            loading='lazy'
                                            key={i}
                                            src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                                            alt="Student"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">Trusted by 50,000+ students</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                loading='lazy'
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students learning"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">50K+</p>
                                        <p className="text-gray-600">Active Students</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        subtitle="WHY CHOOSE US"
                        title="Everything You Need to Succeed"
                        description="We provide the tools, support, and environment to help you achieve your learning goals."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                Icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                color={feature.color}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionTitle
                        subtitle="POPULAR COURSES"
                        title="Most Enrolled Programs"
                        description="Discover our most popular courses chosen by thousands of students worldwide."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button to="/courses" variant="secondary">
                            View All Courses
                            <ChevronRight className="ml-1 w-4 h-4" />
                        </Button>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-blue-600">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statsData.map((stat, index) => (
                            <div key={index} className="text-center text-white">
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    <Counter end={stat.value} duration={2000} />
                                    {stat.suffix}
                                </div>
                                <p className="text-blue-100 text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        subtitle="TESTIMONIALS"
                        title="What Our Students Say"
                        description="Hear from our successful graduates about their learning journey with us."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonialsData.map(testimonial => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <Container>
                    <div className="text-center text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Ready to Start Your Learning Journey?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                        >
                            Join thousands of students and transform your career with our expert-led courses.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button
                                to="/courses"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50"
                            >
                                Get Started Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;