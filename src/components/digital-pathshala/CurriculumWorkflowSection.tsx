import { useEffect, useRef } from 'react';
import anime from 'animejs';

const CurriculumWorkflowSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    anime({
                        targets: '.curriculum-animate',
                        translateY: [50, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(200),
                        duration: 1000,
                        easing: 'easeOutQuart',
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#020a05] text-white relative overflow-hidden">
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#4ADE80]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 curriculum-animate opacity-0">
                    <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-4">A Mission</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-6">
                        Connect Every Child's Heritage <br/> <span className="text-gray-500">to Their Future.</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
                        In villages across India, there is a generation of bright, ambitious children. The Digital Pathshala is our plan to build a bridge between their world and the world of opportunity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#4ADE80]/30 transition-colors curriculum-animate opacity-0">
                        <div className="w-12 h-12 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mb-6">
                            <span className="text-[#4ADE80] font-bold text-xl">1</span>
                        </div>
                        <h3 className="text-2xl font-bold font-poppins mb-4">Curriculum Focus</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Practical digital literacy, computer applications, coding fundamentals, and communication skills with an emphasis on creativity, critical thinking, cyber safety, health awareness, and sustainable living.
                        </p>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#4ADE80]/30 transition-colors curriculum-animate opacity-0">
                        <div className="w-12 h-12 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mb-6">
                            <span className="text-[#4ADE80] font-bold text-xl">2</span>
                        </div>
                        <h3 className="text-2xl font-bold font-poppins mb-4">Impact</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Empowering students and communities with digital, communication, and life skills that build confidence, encourage responsible citizenship, and open pathways to higher education and sustainable living.
                        </p>
                    </div>
                </div>

                <div className="curriculum-animate opacity-0">
                    <h3 className="text-3xl font-bold font-poppins text-center mb-8">Work Flow</h3>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 font-light">
                        Our model combines expert mentorship with consistent, hands-on practice to create a dynamic learning environment.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-gradient-to-br from-[#1A5D1A]/40 to-transparent p-8 rounded-2xl border border-[#4ADE80]/20 flex-1 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#4ADE80]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <h4 className="text-xl font-bold text-[#4ADE80] mb-4 relative z-10">The Sunday Masterclass</h4>
                            <ul className="space-y-3 text-gray-300 relative z-10 font-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4ADE80] mt-1">•</span>
                                    <span>Free of cost classes (10-12 PM)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4ADE80] mt-1">•</span>
                                    <span>High-level mentorship and Q&A sessions delivered via Google Meet</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4ADE80] mt-1">•</span>
                                    <span>Mentors from IITs, NITs, and other top institutions</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-bl from-[#1A5D1A]/40 to-transparent p-8 rounded-2xl border border-[#4ADE80]/20 flex-1 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#4ADE80]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <h4 className="text-xl font-bold text-[#4ADE80] mb-4 relative z-10">The Practice Lab</h4>
                            <ul className="space-y-3 text-gray-300 relative z-10 font-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4ADE80] mt-1">•</span>
                                    <span>Just ₹5 for using Lab</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4ADE80] mt-1">•</span>
                                    <span>Five days a week (Monday to Friday)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4ADE80] mt-1">•</span>
                                    <span>Dedicated to hands-on practice and project work</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumWorkflowSection;
