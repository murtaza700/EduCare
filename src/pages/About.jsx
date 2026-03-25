import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, Clock, Globe, BookOpen } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const milestones = [
        { year: '2015', title: 'Founded', description: 'Started with just 5 courses' },
        { year: '2017', title: '10K Students', description: 'Reached 10,000 students milestone' },
        { year: '2019', title: 'Global Expansion', description: 'Opened in 20+ countries' },
        { year: '2021', title: '100 Courses', description: 'Launched 100+ expert-led courses' },
        { year: '2024', title: '50K+ Students', description: 'Trusted by 50,000+ learners' },
    ];

    const values = [
        { icon: Heart, title: 'Passion', description: 'We are passionate about education and student success' },
        { icon: Award, title: 'Excellence', description: 'Committed to providing the highest quality education' },
        { icon: Users, title: 'Community', description: 'Building a supportive learning community' },
        { icon: Globe, title: 'Accessibility', description: 'Making education accessible to everyone' },
    ];

    return (
        <>
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduLearn</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Empowering learners worldwide with quality education since 2015
                        </p>
                    </motion.div>
                </Container>
            </section>

            <section className="py-20 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Transforming Lives Through Education
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                EduLearn was founded with a simple mission: to make quality education accessible to everyone, everywhere.
                                We believe that learning should be engaging, flexible, and tailored to individual needs.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Over the years, we've helped thousands of students achieve their career goals, switch industries,
                                and acquire new skills that matter in today's fast-paced world.
                            </p>
                            <Button to="/courses">Explore Our Courses</Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students learning"
                                className="rounded-2xl shadow-2xl"
                                loading='lazy'
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-lg">
                                To democratize education by providing high-quality, affordable, and accessible learning
                                opportunities to people around the world, regardless of their background or location.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-lg">
                                To create a world where anyone can learn anything, anytime, anywhere. We envision a future
                                where education knows no boundaries and lifelong learning is accessible to all.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white">
                <Container>
                    <SectionTitle
                        subtitle="OUR VALUES"
                        title="What Drives Us Forward"
                        description="These core principles guide everything we do at EduLearn"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
                                    <value.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionTitle
                        subtitle="OUR JOURNEY"
                        title="Milestones Achieved"
                        description="Key moments in our journey of growth and impact"
                    />
                    <div className="relative">

                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 hidden lg:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="flex-1 lg:text-right">
                                        {index % 2 === 0 ? (
                                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <h3 className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                                                <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </div>
                                        ) : (
                                            <div />
                                        )}
                                    </div>

                                    <div className="relative flex items-center justify-center">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        {index % 2 !== 0 ? (
                                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                                <h3 className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                                                <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </div>
                                        ) : (
                                            <div />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default About;