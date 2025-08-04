'use client';

import Image from 'next/image';

export default function Page() {
  return (
    <>
      {/* Hero Section */}
<section className="text-center py-5 bg-light">
  <Image
    src="/next.svg"
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

  {/* WhatsApp CTA Button */}
  <a
  href="https://wa.me/+917517378105?text=Hi Bino, I want to try your search feature!"
  target="_blank"
  rel="noopener noreferrer"
  className="try-bino-button"
>
  Try Bino on WhatsApp
</a>
<p style={{ fontSize: "12px", color: "gray" }}>
  *WhatsApp integration is demo-only for now. Full number will be available post-deployment.
</p>
</section>

      {/* Features Section */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-person-badge fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Agent Management</h5>
                <p className="card-text text-muted">
                  Handle agent profiles, shifts & performance all from one dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-cpu fs-1 text-primary"></i>
                <h5 className="card-title mt-3">AI Automation</h5>
                <p className="card-text text-muted">
                  Automate responses and reduce workload with smart AI tools.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-chat-dots fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Multi-Channel Support</h5>
                <p className="card-text text-muted">
                  Engage customers via WhatsApp, Email, and more from one hub.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-bar-chart fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Analytics Dashboard</h5>
                <p className="card-text text-muted">
                  Monitor performance metrics in real-time for data-driven insights.
                </p>
              </div>
            </div>
          </div>
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

      {/* Footer */}
      <footer className="text-center py-4">
  <p className="mb-2">© 2025 Bino Awareness</p>
  <div className="mb-2">
    <a href="https://nextjs.org" className="text-decoration-none me-3">Next.js</a>
    <a href="https://vercel.com" className="text-decoration-none">Vercel</a>
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
</footer>
    </>
  );
}