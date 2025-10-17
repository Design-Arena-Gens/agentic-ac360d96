'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

const names = ['Marcus', 'Sarah', 'Tyler', 'Emma', 'Jake', 'Ashley', 'Michael', 'Jessica']
const cities = ['Austin', 'Phoenix', 'Dallas', 'Miami', 'Seattle', 'Denver', 'Portland', 'Atlanta']

export default function Home() {
  const [socialProof, setSocialProof] = useState({ name: 'Marcus', city: 'Austin' })
  const [userCount, setUserCount] = useState(850)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      const randomCount = Math.floor(Math.random() * 200) + 800
      setSocialProof({ name: randomName, city: randomCity })
      setUserCount(randomCount)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'How long does it take?',
      answer: 'Most users complete the process in 15-30 minutes. Once you finish all requirements, your gift card will be delivered via email within 24-48 hours.'
    },
    {
      question: 'What kind of offers are required?',
      answer: 'You\'ll need to complete 5+ simple offers such as app downloads, free trials, surveys, or account signups. Each offer takes just a few minutes to complete.'
    },
    {
      question: 'How will I get the gift card?',
      answer: 'Your $100 Crumbl gift card will be sent to the email address you provide during registration. You can use it at any Crumbl location or online.'
    },
    {
      question: 'Is this really free?',
      answer: 'Yes! There is no cost to participate. However, some offers may require free trials that you can cancel at any time. Always read the terms of each offer.'
    },
    {
      question: 'Can I do this more than once?',
      answer: 'This promotion is limited to one gift card per person/household. Multiple attempts may result in disqualification.'
    }
  ]

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Crumbl</div>
      </header>

      {/* Section 1: Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainHeadline}>Get a $100 Crumbl Gift Card</h1>
          <p className={styles.subHeadline}>
            Review your favorite cookie flavors and earn a $100 gift card as a thank you for your feedback.
          </p>
          <button className={styles.ctaButton} onClick={scrollToTop}>START NOW</button>

          <div className={styles.socialProof}>
            <div className={styles.socialProofItem}>
              ✅ {socialProof.name} from {socialProof.city}, TX just claimed their $100 reward
            </div>
            <div className={styles.socialProofItem}>
              👥 {userCount} users browsing now
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.giftCard}>
            <div className={styles.giftCardInner}>
              <div className={styles.giftCardLogo}>Crumbl</div>
              <div className={styles.giftCardAmount}>$100</div>
              <div className={styles.giftCardText}>GIFT CARD</div>
            </div>
          </div>
          <div className={styles.verificationBadge}>
            <span className={styles.checkmark}>✔️</span> Verified by TikTok
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionHeadline}>How It Works</h2>
        <p className={styles.sectionSubheadline}>Five simple steps to earn your Crumbl gift card</p>

        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>✨</div>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Click &apos;START NOW&apos;</h3>
            <p className={styles.stepDescription}>Begin your journey to earning a $100 Crumbl gift card</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepIcon}>✉️</div>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Enter your email and cookie preferences</h3>
            <p className={styles.stepDescription}>Tell us about your favorite Crumbl flavors</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepIcon}>📋</div>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Complete the Crumbl flavor survey</h3>
            <p className={styles.stepDescription}>Share your honest feedback about cookie experiences</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepIcon}>✓</div>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Finish 5+ simple offers</h3>
            <p className={styles.stepDescription}>Complete quick tasks like app downloads or surveys</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepIcon}>🎁</div>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Receive your $100 Crumbl gift card</h3>
            <p className={styles.stepDescription}>Get your reward delivered via email within 24-48 hours</p>
          </div>
        </div>

        <button className={styles.ctaButton} onClick={scrollToTop}>START NOW</button>
      </section>

      {/* Section 3: Testimonial */}
      <section className={styles.testimonial}>
        <div className={styles.quoteIcon}>&ldquo;</div>
        <div className={styles.rating}>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
        </div>
        <blockquote className={styles.quote}>
          Reviewed a few cookies, got my gift card two days later. I bought six boxes. No regrets.
        </blockquote>
        <p className={styles.attribution}>— Tyler S., Scottsdale, AZ</p>
      </section>

      {/* Section 4: FAQ */}
      <section className={styles.faq}>
        <h2 className={styles.sectionHeadline}>Frequently Asked Questions</h2>
        <p className={styles.sectionSubheadline}>Everything you need to know about earning your reward</p>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openFaq === index ? styles.faqQuestionOpen : ''}`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className={styles.faqToggle}>{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className={styles.finalCta}>
        <button className={styles.ctaButton} onClick={scrollToTop}>START NOW</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Crumbl Gift Card Promotion. Terms and conditions apply.</p>
      </footer>
    </div>
  )
}
