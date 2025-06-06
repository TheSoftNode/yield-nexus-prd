"use client"

import React, { useState } from 'react';

const SupportPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create email body with form data
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent via sBTC Yield Nexus Contact Form
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:support@yieldnexus.io?subject=${encodeURIComponent(`Contact Form: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a short delay
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    const contactMethods = [
        {
            title: 'Email Support',
            description: 'Get detailed answers to your questions',
            icon: '📧',
            contact: 'support@yieldnexus.io',
            action: 'mailto:support@yieldnexus.io'
        },
        {
            title: 'Phone Support',
            description: 'Direct line for urgent inquiries',
            icon: '📞',
            contact: '+1 (555) 123-4567',
            action: 'tel:+15551234567'
        },
        {
            title: 'General Inquiries',
            description: 'For partnerships and collaborations',
            icon: '💼',
            contact: 'hello@yieldnexus.io',
            action: 'mailto:hello@yieldnexus.io'
        }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: '💼',
            url: 'https://linkedin.com/company/yieldnexus',
            color: '#0077B5'
        },
        {
            name: 'GitHub',
            icon: '🐙',
            url: 'https://github.com/yieldnexus',
            color: '#333'
        },
        {
            name: 'Twitter',
            icon: '🐦',
            url: 'https://twitter.com/yieldnexus',
            color: '#1DA1F2'
        },
        {
            name: 'Telegram',
            icon: '✈️',
            url: 'https://t.me/yieldnexus',
            color: '#0088cc'
        }
    ];

    const faqItems = [
        {
            question: 'What is sBTC Yield Nexus?',
            answer: 'sBTC Yield Nexus is Phase 1 of the Yield Nexus platform, focusing on Bitcoin-based yield strategies built on the Stacks blockchain.'
        },
        {
            question: 'When will the platform launch?',
            answer: 'We are currently in development with a planned launch in Q4 2025. Follow our roadmap for detailed timeline updates.'
        },
        {
            question: 'What chains will be supported?',
            answer: 'We start with Bitcoin/Stacks, then expand to Ethereum, Solana, Polygon, and other major blockchains in subsequent phases.'
        },
        {
            question: 'Is this open source?',
            answer: 'Yes, our smart contracts and core components will be open source. Check our GitHub for the latest code updates.'
        },
        {
            question: 'How can I get involved?',
            answer: 'We welcome feedback and collaboration! Reach out to us directly via email with your ideas or questions.'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1
                    className="text-3xl font-bold mb-3"
                    style={{
                        background: 'linear-gradient(135deg, #F7931A, #5546FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Support & Contact
                </h1>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Have questions about sBTC Yield Nexus? We're here to help. Get in touch with our team
                    or explore our resources below.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Methods */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4" style={{ color: '#262626' }}>
                        📞 Get In Touch
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.action}
                                className="p-4 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 block text-decoration-none"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    borderColor: 'rgba(85, 70, 255, 0.2)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(85, 70, 255, 0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(85, 70, 255, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(85, 70, 255, 0.2)';
                                }}
                            >
                                <div className="text-2xl mb-2">{method.icon}</div>
                                <h3 className="text-base font-bold mb-1" style={{ color: '#262626' }}>
                                    {method.title}
                                </h3>
                                <p className="text-xs mb-2" style={{ color: '#8C8C8C' }}>
                                    {method.description}
                                </p>
                                <p className="text-xs font-semibold" style={{ color: '#5546FF' }}>
                                    {method.contact}
                                </p>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div
                        className="p-4 rounded-2xl border-2"
                        style={{
                            backgroundColor: 'rgba(247, 147, 26, 0.05)',
                            borderColor: 'rgba(247, 147, 26, 0.2)'
                        }}
                    >
                        <h3 className="text-lg font-bold mb-3" style={{ color: '#262626' }}>
                            📝 Send us a Message
                        </h3>
                        <p className="text-xs mb-4" style={{ color: '#8C8C8C' }}>
                            Fill out the form below and we'll open your email client with a pre-filled message to send to us.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold mb-1" style={{ color: '#262626' }}>
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                                        placeholder="Your full name"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1" style={{ color: '#262626' }}>
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                                        placeholder="your.email@example.com"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: '#262626' }}>
                                    Subject *
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-sm"
                                    disabled={isSubmitting}
                                >
                                    <option value="">Select a topic</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Technical Question">Technical Question</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Investment Inquiry">Investment Inquiry</option>
                                    <option value="Bug Report">Bug Report</option>
                                    <option value="Feature Request">Feature Request</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: '#262626' }}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none transition-colors resize-none text-sm"
                                    placeholder="Tell us about your question or inquiry..."
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2 rounded-lg font-bold text-white transition-all duration-300 text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1'
                                    }`}
                                style={{
                                    backgroundColor: '#F7931A',
                                    boxShadow: '0 4px 15px rgba(247, 147, 26, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(247, 147, 26, 0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(247, 147, 26, 0.3)';
                                    }
                                }}
                            >
                                {isSubmitting ? 'Opening Email Client...' : 'Send Message →'}
                            </button>
                        </form>

                        <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(85, 70, 255, 0.05)' }}>
                            <p className="text-xs" style={{ color: '#5546FF' }}>
                                💡 <strong>How it works:</strong> When you click "Send Message", your default email client will open with a pre-filled email containing your message. Simply click send in your email client to deliver it to us!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-3" style={{ color: '#262626' }}>
                            🌐 Connect With Us
                        </h3>
                        <div className="space-y-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        border: '1px solid rgba(0, 0, 0, 0.1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = `${social.color}10`;
                                        e.currentTarget.style.borderColor = `${social.color}30`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                    <span className="font-semibold" style={{ color: '#262626' }}>
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h3 className="text-lg font-bold mb-3" style={{ color: '#262626' }}>
                            ❓ Quick FAQ
                        </h3>
                        <div className="space-y-2">
                            {faqItems.map((faq, index) => (
                                <details key={index} className="group">
                                    <summary
                                        className="cursor-pointer p-2 rounded-lg font-semibold text-xs transition-colors duration-200"
                                        style={{
                                            backgroundColor: 'rgba(85, 70, 255, 0.05)',
                                            color: '#5546FF'
                                        }}
                                    >
                                        {faq.question}
                                    </summary>
                                    <div
                                        className="p-2 text-xs leading-relaxed"
                                        style={{ color: '#8C8C8C' }}
                                    >
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Response Time */}
                    <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: 'rgba(0, 164, 120, 0.05)', border: '1px solid rgba(0, 164, 120, 0.2)' }}
                    >
                        <h4 className="font-bold text-sm mb-2" style={{ color: '#00A478' }}>
                            ⏱️ Response Times
                        </h4>
                        <div className="space-y-1 text-xs" style={{ color: '#8C8C8C' }}>
                            <div>Email: Within 24 hours</div>
                            <div>Phone: Business hours (9AM-6PM EST)</div>
                            <div>General inquiries: 1-2 business days</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;

