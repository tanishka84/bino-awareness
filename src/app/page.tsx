'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [referralLink, setReferralLink] = useState('');
  //const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const generateReferralLink = () => {
    const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const link = `https://binoawareness.org/referral?code=${referralCode}`;
    navigator.clipboard.writeText(link);
    setReferralLink(link);
    //setCopied(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyAgain = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-5 bg-light">
        <Image
          src="https://media.licdn.com/dms/image/v2/D560BAQEpquWjsLFcqQ/company-logo_200_200/company-logo_200_200/0/1692185447204/boni1_logo"
          alt="Bino Awareness Logo"
          width={150}
          height={50}
          className="mb-3"
        />
        <h1 className="display-5 fw-bold text-primary">
          Empowering Conversations, Everywhere
        </h1>
        <p className="lead text-muted">
          Manage agents, automate support, and track insights — all in one place.
        </p>

        {/* WhatsApp CTA (Demo Mode) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert("WhatsApp integration is currently in demo mode. The feature will go live post-deployment.");
          }}
          className="btn btn-success position-fixed"
          style={{
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
          }}
          title="Try Bino on WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </section>

            {/* Sample Queries Section */}
      <section className="container py-5">
        <p className="text-muted">Try asking Bino:</p>
        <h2 className="text-center mb-4">What Can You Ask Bino?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded shadow-sm">
              <p className="text-muted">&quot;How do I apply for a voter ID?&quot;</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded shadow-sm">
              <p className="text-muted">&quot;Tell me about child labor laws in India.&quot;</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded shadow-sm">
              <p className="text-muted">&quot;Where can I report domestic violence anonymously?&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5">
        <div className="row text-center">
          {[
            {
              icon: "bi-person-badge",
              title: "Agent Management",
              desc: "Handle agent profiles, shifts & performance all from one dashboard.",
            },
            {
              icon: "bi-cpu",
              title: "AI Automation",
              desc: "Automate responses and reduce workload with smart AI tools.",
            },
            {
              icon: "bi-chat-dots",
              title: "Multi-Channel Support",
              desc: "Engage customers via WhatsApp, Email, and more from one hub.",
            },
            {
              icon: "bi-bar-chart",
              title: "Analytics Dashboard",
              desc: "Monitor performance metrics in real-time for data-driven insights.",
            },
          ].map((feature, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <i className={`bi ${feature.icon} fs-1 text-primary`}></i>
                  <h5 className="card-title mt-3">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <form
            action="https://formspree.io/f/xeozlyek"
            method="POST"
            className="mx-auto"
            style={{ maxWidth: '500px' }}
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control rounded-pill"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-pill"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control rounded"
                rows={4}
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4 rounded-pill">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="mb-3">Get Rewarded for Spreading Bino</h2>
          <p className="text-muted mb-4">
            Invite your friends and unlock early features. Earn free credits!
          </p>
          <button
            className="btn btn-outline-primary rounded-pill mb-3"
            onClick={generateReferralLink}
          >
            Generate Referral Link
          </button>

          {referralLink && (
            <div
              className="alert alert-success mx-auto fade-in"
              style={{ maxWidth: '500px' }}
            >
              Referral link copied! <br />
              <a href={referralLink} target="_blank" rel="noopener noreferrer">
                {referralLink}
              </a>
              <br />
              <button onClick={copyAgain} className="btn btn-sm btn-secondary mt-2">
                Copy Again
              </button>
            </div>
          )}
        </div>

        {showToast && (
          <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
            <div className="toast fade show bg-success text-white">
              <div className="toast-body">Referral link copied to clipboard!</div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-4">
        <p className="mb-2">© 2025 Bino Awareness</p>
        <div className="mb-2">
          <a href="https://nextjs.org" className="text-decoration-none me-3">
            Next.js
          </a>
          <a href="https://vercel.com" className="text-decoration-none">
            Vercel
          </a>
        </div>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin fs-4 text-primary"></i>
          </a>
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github fs-4 text-dark"></i>
          </a>
          <a
            href="https://twitter.com/YOUR_TWITTER_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter fs-4 text-info"></i>
          </a>
          <a
            href="https://facebook.com/YOUR_FACEBOOK_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook fs-4 text-primary"></i>
          </a>
        </div>
        <p className="text-center text-muted mt-3">
          You can also reach us at{' '}
          <a href="mailto:contact@binoawareness.org">contact@binoawareness.org</a>
        </p>
      </footer>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
