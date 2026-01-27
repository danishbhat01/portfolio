import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import socialData from '../../data/social.json';

// Web3Forms access key
const WEB3FORMS_ACCESS_KEY = '1649a47c-b92d-40c7-b3d6-27036c7ec311';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Let's analyze your next project.</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                            I'm always open to discussing new opportunities in data analysis, visualization work, or full-stack development.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium mb-0.5">Contact Email</div>
                                    <div className="font-semibold">{socialData.email}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium mb-0.5">Location</div>
                                    <div className="font-semibold">Remote / Pune</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'sending'}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'sending'}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === 'idle' && <><Send size={18} /> Send Message</>}
                                {status === 'sending' && 'Sending...'}
                                {status === 'success' && <><CheckCircle size={18} /> Message Sent!</>}
                                {status === 'error' && <><AlertCircle size={18} /> Failed to Send</>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
