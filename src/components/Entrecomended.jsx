import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import five from '../images/five.png';
import six from '../images/six.png';
import eight from '../images/eight.png';

const teamMembers = [
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: eight,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: five,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: six,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: eight,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: five,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: six,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: eight,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: five,
    },
    {
        name: 'Colin Nizurb',
        role: 'Manager',
        description: 'Manages financial planning and investor relations. Oversees budgeting, financial forecasting, fundraising efforts, and ensures financial stability and growth strategies.',
        image: six,
    },
];
const Team = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // Trigger when 20% of the component is visible
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hiddenLeft: { x: -100, opacity: 0 },
        hiddenRight: { x: 100, opacity: 0 },
        hiddenBottom: { y: 100, opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-center mb-12 font-palanquin">
                Entrepreneur Recommended For You
            </h2>
            <div ref={ref} className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => {
                        let initialVariant = '';
                        if (index % 3 === 0) {
                            initialVariant = 'hiddenLeft';
                        } else if (index % 3 === 1) {
                            initialVariant = 'hiddenBottom';
                        } else {
                            initialVariant = 'hiddenRight';
                        }

                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 p-6 rounded-lg shadow-lg"
                                initial={initialVariant}
                                animate={controls}
                                variants={variants}
                            >
                             <img
    src={member.image}
    alt={member.name}
    className="w-42 h-42 object-cover rounded-full border-4 border-teal-500"
/>


                                <div className="text-center mt-4">
                                    <h3 className="text-2xl font-bold text-teal-600 font-montserrat">{member.name}</h3>
                                    <p className="text-sm text-teal-400 font-palanquin">{member.role}</p>
                                    <p className="mt-2 text-gray-300 font-palanquin">{member.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Team;