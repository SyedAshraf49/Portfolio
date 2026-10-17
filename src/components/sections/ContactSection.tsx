import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Section, Input, Textarea, Button, Badge } from '../common';
import { CONTACT_EMAIL } from '@/constants/data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactSection: React.FC = () => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useContactForm();

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Section id="contact" title="Contact">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-base font-normal uppercase tracking-wider text-[var(--pixel-cyan)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
              Let&apos;s Connect
            </p>
            <p className="text-sm text-[var(--pixel-green)]" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.8" }}>
              Open to work
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="primary">Software Developer</Badge>
            <Badge variant="primary">Full Stack</Badge>
            <Badge variant="primary">Tech Enthusiast</Badge>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="/resume/Syed Ashraf S N Resume.pdf"
              download="Syed Ashraf S N Resume.pdf"
              className="inline-flex items-center border-4 border-[var(--pixel-green)] bg-[var(--pixel-green)] text-[var(--pixel-bg-dark)] px-6 py-3 text-sm font-normal shadow-[4px_4px_0_var(--pixel-bg-dark)] hover:bg-[var(--pixel-cyan)] hover:border-[var(--pixel-cyan)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--pixel-bg-dark)] min-h-[48px]"
              style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}
            >
              📥 Download Resume
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="Your name"
                placeholder="Enter your Name"
                {...register('name')}
                error={errors.name?.message}
                disabled={isSubmitting}
              />
              <Input
                label="Subject"
                placeholder="Context"
                {...register('subject')}
                error={errors.subject?.message}
                disabled={isSubmitting}
              />
            </div>

            <Textarea
              label="Message"
              placeholder="Explanation"
              rows={5}
              {...register('message')}
              error={errors.message?.message}
              disabled={isSubmitting}
            />

            <div className="flex flex-wrap items-center justify-between gap-4 border-4 border-[var(--pixel-cyan)] bg-[var(--pixel-bg-mid)] px-4 py-3 shadow-[4px_4px_0_var(--pixel-bg-dark)]">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xs text-[var(--pixel-cyan)] hover:text-[var(--pixel-green)] md:text-sm break-all"
                style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: "1.6" }}
              >
                {CONTACT_EMAIL}
              </a>
              <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};
