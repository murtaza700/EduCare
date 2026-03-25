import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Button = ({ children, to, href, onClick, variant = 'primary', size = 'md', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
        outline: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const MotionComponent = motion.create(to ? Link : href ? 'a' : 'button');

    if (to) {
        return (
            <MotionComponent
                to={to}
                className={classes}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </MotionComponent>
        );
    }

    if (href) {
        return (
            <MotionComponent
                href={href}
                className={classes}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </MotionComponent>
        );
    }

    return (
        <MotionComponent
            onClick={onClick}
            className={classes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};

export default Button;