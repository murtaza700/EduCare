import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import Button from './Button';

const CourseCard = ({ course }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    loading='lazy'
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {course.popular && (
                    <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                    </span>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-gray-500">{course.category}</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-gray-700">{course.rating}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}+ students</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    </div>
                    <Button to={`/course/${course.id}`} size="sm">
                        Enroll Now
                    </Button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center space-x-2">
                    <img
                        loading='lazy'
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700">{course.instructor.name}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;