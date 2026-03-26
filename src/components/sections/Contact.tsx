import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { profile } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

type ContactStatus = 'idle' | 'success' | 'error'

const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined
const formSubmitEndpoint = `https://formsubmit.co/ajax/${profile.email}`

export const Contact = () => {
  const [status, setStatus]     = useState<ContactStatus>('idle')
  const [isSending, setIsSending] = useState(false)

  const isConfigured = Boolean(serviceId && templateId && publicKey)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSending(true)
    setStatus('idle')
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    try {
      if (isConfigured) {
        await emailjs.send(
          serviceId!,
          templateId!,
          {
            from_name: payload.name,
            from_email: payload.email,
            message: payload.message,
            to_name: 'Ankit Bansal',
          },
          { publicKey },
        )
      } else {
        const response = await fetch(formSubmitEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            message: payload.message,
            _subject: `Portfolio contact from ${payload.name}`,
            _captcha: 'false',
          }),
        })

        if (!response.ok) {
          throw new Error('Fallback submission failed')
        }
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section-pad card-section">
      <SectionTitle eyebrow="Contact" title="Start a Conversation" />

      <motion.article
        className="card contact-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <form onSubmit={onSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required minLength={2} placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required minLength={10} placeholder="Tell me about your project…" />
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            disabled={isSending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSending ? 'Sending…' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              className="status success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Message sent successfully!
              {!isConfigured && ' If this is your first FormSubmit message, confirm the activation email to receive future submissions.'}
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="status error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Unable to send right now. Email me directly at{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </motion.p>
          )}
        </form>
      </motion.article>
    </section>
  )
}
