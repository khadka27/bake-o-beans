'use client';

import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Subscribed!',
      description: 'You\'ve received 15% off discount code. Check your email!',
    });
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative paper-texture overflow-hidden" ref={ref}>
      {/* Decorative coffee beans on sides */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <div className="w-24 h-24 bg-coffee-700 rounded-full blur-3xl" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <div className="w-24 h-24 bg-clay-600 rounded-full blur-3xl" />
      </div>

      <div className="content-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-3 text-foreground">
            Join in and get 15% off!
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
            Subscribe to our newsletter and get 15% off discount code.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 h-12 rounded-lg border-border focus:ring-2 focus:ring-clay-500"
              />
            </div>
            <Button
              type="submit"
              className="bg-clay-600 hover:bg-clay-700 text-white px-8 h-12 rounded-lg font-medium whitespace-nowrap"
            >
              Subscribe
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
