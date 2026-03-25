import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import TeacherCard from '../components/common/TeacherCard';
import { teachersData } from '../data/mockData';
import Button from '../components/common/Button';

const Teachers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Teachers</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Learn from industry professionals with years of real-world experience
                        </p>
                    </motion.div>
                </Container>
            </section>

            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teachersData.map(teacher => (
                            <TeacherCard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Become an Instructor</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Share your knowledge with thousands of learners worldwide. Join our team of expert instructors.
                        </p>
                        <Button to="/contact" size="lg">
                            Apply Now
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Teachers;