import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Frown, Home } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex p-6 bg-blue-100 rounded-full mb-8"
                    >
                        <Frown className="w-16 h-16 text-blue-600" />
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button to="/" size="lg">
                            <Home className="mr-2 w-5 h-5" />
                            Back to Home
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default NotFound;