import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Users, Star, Award, BookOpen, CheckCircle, ChevronRight, PlayCircle, FileText, Download } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { coursesData } from '../data/mockData';

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundCourse = coursesData.find(c => c.id === parseInt(id));
        if (foundCourse) {
            setCourse(foundCourse);
        } else {
            navigate('/not-found');
        }
    }, [id, navigate]);

    if (!course) return null;

    return (
        <>
            <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white max-w-3xl"
                    >
                        <div className="flex items-center gap-2 text-blue-100 mb-4">
                            <span>{course.category}</span>
                            <ChevronRight className="w-4 h-4" />
                            <span>{course.title}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
                        <p className="text-xl text-blue-100 mb-8">{course.description}</p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                <span>{course.students}+ students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 fill-current text-yellow-400" />
                                <span>{course.rating} (2.5k+ reviews)</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>


            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                            >
                                <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                                <div className="flex items-start gap-4">
                                    <img
                                        src={course.instructor.avatar}
                                        alt={course.instructor.name}
                                        className="w-20 h-20 rounded-full object-cover"
                                        loading='lazy'
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
                                        <p className="text-gray-600 mb-4 text-wrap">
                                            Senior Web Developer with 10+ years of experience. Has taught over 10,000 students worldwide.
                                        </p>
                                        <div className="flex gap-3 flex-wrap">
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                            >
                                <h2 className="text-2xl font-bold mb-6">Course Description</h2>
                                <p className="text-gray-700 mb-6">{course.fullDescription || course.description}</p>
                                <p className="text-gray-700">
                                    This comprehensive course is designed to take you from beginner to professional.
                                    You'll learn through hands-on projects and real-world examples.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                                <div className="space-y-4">
                                    {course.curriculum ? (
                                        course.curriculum.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                                <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">Introduction to the Course</span>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">Getting Started with Basics</span>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                                <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">Core Concepts and Fundamentals</span>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                                                <Download className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">Practice Exercises and Projects</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg sticky top-24"
                            >
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">${course.price}</span>
                                </div>

                                <Button to="#" size="lg" className="w-full mb-4">
                                    Enroll Now
                                </Button>
                                <Button to="#" variant="outline" size="lg" className="w-full">
                                    Try Free Preview
                                </Button>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h3 className="font-semibold mb-4">This course includes:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-600">
                                            <Clock className="w-5 h-5" />
                                            <span>{course.duration} of content</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600">
                                            <Award className="w-5 h-5" />
                                            <span>Certificate of completion</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600">
                                            <Users className="w-5 h-5" />
                                            <span>Community access</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600">
                                            <BookOpen className="w-5 h-5" />
                                            <span>Downloadable resources</span>
                                        </li>
                                    </ul>
                                </div>

                                {course.requirements && (
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h3 className="font-semibold mb-4">Requirements:</h3>
                                        <ul className="space-y-2">
                                            {course.requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default CourseDetails;