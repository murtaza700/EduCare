import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
        >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />

            <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>

            <p className="text-gray-700 mb-6 italic">{testimonial.comment}</p>

            <div className="flex items-center space-x-4">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading='lazy'
                />
                <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;