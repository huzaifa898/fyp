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
            <h2 className="text-white text-2xl mt-8">Entrepreneur Recommended For You</h2>
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
                                className="flex flex-col items-center"
                                initial={initialVariant}
                                animate={controls}
                                variants={variants}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-3/4 object-cover rounded"
                                />
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-bold text-gray-100">{member.name}</h3>
                                    <p className="text-sm text-gray-400">{member.role}</p>
                                    <p className="mt-2 text-gray-300">{member.description}</p>
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
