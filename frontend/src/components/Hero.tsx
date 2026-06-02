'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  const handleScrollToPipeline = (e: React.MouseEvent) => {
    e.preventDefault();
    const pipelineSection = document.getElementById('pipeline');
    if (pipelineSection) {
      pipelineSection.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.15,
        duration: reducedMotion ? 0 : 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0 : 0.6, ease: 'easeOut' },
    },
  };

  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL || 'https://t.me/aiteam_bot';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-dark to-primary/20 ${
          reducedMotion ? '' : 'animate-gradient'
        }`}
        style={{
          backgroundSize: reducedMotion ? '100% 100%' : '200% 200%',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-text-white">AI Team.</span>{' '}
          <span className="text-primary">Không cần thuê dev.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-10"
        >
          Mô tả ý tưởng qua Telegram, AI team tự động phân tích, build và deploy.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 text-center"
          >
            Bắt đầu ngay
          </a>

          <a
            href="#pipeline"
            onClick={handleScrollToPipeline}
            className="w-full sm:w-auto px-8 py-4 border border-text-muted/30 hover:border-primary text-text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 text-center"
          >
            Xem cách hoạt động
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
