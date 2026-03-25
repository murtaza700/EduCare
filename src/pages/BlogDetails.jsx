import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Facebook, Twitter, Linkedin, Link2, ArrowLeft } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { blogPostsData } from '../data/mockData';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundPost = blogPostsData.find(p => p.id === parseInt(id));
        if (foundPost) {
            setPost(foundPost);
        } else {
            navigate('/not-found');
        }
    }, [id, navigate]);

    if (!post) return null;

    return (
        <>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading='lazy'
                />
                <div className="absolute inset-0 bg-black/50" />
                <Container className="absolute inset-0 flex items-center">
                    <div className="text-white max-w-3xl">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            {post.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-6 text-white/80"
                        >
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                        </motion.div>
                    </div>
                </Container>
            </div>

            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg prose prose-lg max-w-none">
                                <h2>Introduction</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <h2>Main Content</h2>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>

                                <blockquote>
                                    "The beautiful thing about learning is that no one can take it away from you." - B.B. King
                                </blockquote>

                                <h3>Key Takeaways</h3>
                                <ul>
                                    <li>First important point about the topic</li>
                                    <li>Second key insight to remember</li>
                                    <li>Third valuable takeaway</li>
                                </ul>

                                <h3>Conclusion</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo.
                                </p>
                            </div>
                        </motion.article>

                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-1"
                        >

                            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                                <h3 className="text-xl font-bold mb-4">About the Author</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        loading='lazy'
                                        src={`https://randomuser.me/api/portraits/${post.author.includes('John') ? 'men' : 'women'}/32.jpg`}
                                        alt={post.author}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{post.author}</h4>
                                        <p className="text-sm text-gray-500">Senior Instructor</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Passionate educator with years of experience in helping students achieve their learning goals.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Share this Article</h3>
                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors"
                                    >
                                        <Link2 className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default BlogDetails;