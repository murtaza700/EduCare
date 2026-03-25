import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const TeacherCard = ({ teacher }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading='lazy'
                />
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{teacher.subject}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{teacher.bio}</p>

                <div className="flex justify-center space-x-3">
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default TeacherCard;