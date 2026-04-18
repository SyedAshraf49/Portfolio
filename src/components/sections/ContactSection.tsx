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
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              Let&apos;s Connect
            </p>
            <p className="text-sm text-cyan-100/90 md:text-base">
              Open to internships and collaboration
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="primary">AI Safety</Badge>
            <Badge variant="primary">Machine Learning</Badge>
            <Badge variant="primary">Backend Systems</Badge>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="/resume/asher-resume.pdf"
              download="Asher_Resume.pdf"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 min-h-[44px]"
            >
              📥 Download Resume
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <Input
                label="Your name"
                placeholder="John Doe"
                {...register('name')}
                error={errors.name?.message}
                disabled={isSubmitting}
              />
              <Input
                label="Subject"
                placeholder="Project Inquiry"
                {...register('subject')}
                error={errors.subject?.message}
                disabled={isSubmitting}
              />
            </div>

            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              rows={5}
              {...register('message')}
              error={errors.message?.message}
              disabled={isSubmitting}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-cyan-300/20 bg-slate-950/35 px-3 py-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xs text-sky-200/80 hover:text-cyan-200 md:text-sm"
              >
                {CONTACT_EMAIL}
              </a>
              <Button type="submit" variant="primary" size="md" isLoading={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};
