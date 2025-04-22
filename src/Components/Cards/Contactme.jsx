import React, { useState } from 'react';
import axios from 'axios';

const ContactMe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            await axios.post('https://your-suprsend-endpoint', {
                email,
                message,
            });

            setStatus('Message sent successfully!');
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="min-h-lg bg-[#191919] sm-mt-10 flex rounded-lg md:mt-10 p-4">
            <div className="w-full max-w-screen-xl bg-[#0A0A0A] p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 bg-[#0A0A0A] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-white mb-2">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full p-3 bg-[#0A0A0A] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {status && <p className="mt-4 text-center text-white">{status}</p>}
            </div>
        </div>
    );
};

export default ContactMe;
