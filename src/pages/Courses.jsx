import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, X } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import CourseCard from '../components/common/CourseCard';
import { coursesData } from '../data/mockData';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCourses, setFilteredCourses] = useState(coursesData);

    const categories = ['All', ...new Set(coursesData.map(course => course.category))];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let filtered = coursesData;

        if (searchTerm) {
            filtered = filtered.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(course => course.category === selectedCategory);
        }

        setFilteredCourses(filtered);
    }, [searchTerm, selectedCategory]);

    return (
        <>
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Explore our wide range of courses designed to help you achieve your goals
                        </p>
                    </motion.div>
                </Container>
            </section>

            <section className="py-8 bg-white border-b">
                <Container>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            <div className="flex gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-gray-50">
                <Container>
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Courses;