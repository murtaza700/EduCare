import React from 'react';
import { motion } from 'motion/react';

const SectionTitle = ({
    subtitle,
    title,
    description,
    align = 'center',
    className = ''
}) => {
    const alignments = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <div className={`mb-12 ${alignments[align]} ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
                >
                    {subtitle}
                </motion.span>
            )}
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
                >
                    {title}
                </motion.h2>
            )}
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;