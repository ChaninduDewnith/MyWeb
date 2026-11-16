
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, experience, projects } from "./data.js";

function Header() {
  return (
    <header className="top">
      <a className="brand" href="#top">{profile.name}</a>
      <nav aria-label="Sections">
        <a href="#about">About</a>
        <a href="#work">Experience & Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <span className="status">{profile.status}</span>
      <h1>
        Hi, I'm {profile.name}. I'm a Software Engineering student
        passionate about <em>building useful software solutions.</em>
      </h1>
      <p className="lead">
        I enjoy developing web and mobile applications, exploring new
        technologies, and solving real-world problems through software.
        My interests include full-stack development, iOS development,
        and Internet of Things (IoT).
      </p>
      <div className="cta-row">
        <a className="btn primary" href="#contact">Get in touch</a>
        <a className="btn ghost" href="#work">Explore my projects</a>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">About me</div>
        <h2>A bit about me</h2>

        <div className="about">
          <div
            className="portrait"
            role="img"
            aria-label={`Initials ${profile.initials}`}
          >
            {profile.initials}
          </div>

          <div className="text">
            <p>
              I'm a fourth-year Software Engineering student with
              a strong interest in software development and technology.
              I enjoy creating practical applications and learning
              how different technologies work together to solve
              real-world problems.
            </p>

            <p>
              I have completed a six-month Software Engineering
              internship, where I gained practical experience in
              software development. Through my academic and personal
              projects, I have worked with web technologies, mobile
              application development, cloud services, and IoT.
              I'm always interested in learning new technologies
              and improving my development skills.
            </p>

            <dl className="facts">
              {profile.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="eyebrow">My journey</div>
        <h2>Experience</h2>

        <ul className="services">
          {experience.map((job) => (
            <li key={job.title}>
              <h3>{job.title}</h3>
              <p>{job.text}</p>
              <span className="price">{job.period}</span>
            </li>
          ))}
        </ul>

        <h3 className="projects-title">
          Academic & Personal Projects
        </h3>

        <div className="grid">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <div className={`thumb ${p.tone}`}>{p.name}</div>

              <div className="body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "General Inquiry",
    message: "",
  });

  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);

  const update = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (sending) return;

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please add your name and a short message.");
      setNote("");
      return;
    }

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      setNote("");
      return;
    }

    setError("");
    setNote("");
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.type,
          message: form.message.trim(),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setNote("Your message has been sent successfully!");

      setForm({
        name: "",
        email: "",
        type: "General Inquiry",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2>Let's connect</h2>

        <div className="contact">
          <div className="side">
            <p>
              I'm always happy to connect with developers, recruiters,
              and people interested in technology. Feel free to contact
              me about opportunities, collaborations, or just to have
              a conversation.
            </p>

            <div className="direct">
              <strong>Email</strong>
              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>

            <div className="direct">
              <strong>LinkedIn</strong>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile ↗
              </a>
            </div>

            <div className="direct">
              <strong>GitHub</strong>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile ↗
              </a>
            </div>
          </div>

          <form onSubmit={submit} noValidate>
            <label htmlFor="f-name">
              Your name
              <input
                id="f-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update}
                required
              />
            </label>

            <label htmlFor="f-email">
              Your email
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update}
                required
              />
            </label>

            <label htmlFor="f-type">
              Subject
              <select
                id="f-type"
                name="type"
                value={form.type}
                onChange={update}
              >
                <option>General Inquiry</option>
                <option>Job Opportunity</option>
                <option>Internship Opportunity</option>
                <option>Project Collaboration</option>
                <option>Other</option>
              </select>
            </label>

            <label htmlFor="f-msg">
              Message
              <textarea
                id="f-msg"
                name="message"
                value={form.message}
                onChange={update}
                required
              />
            </label>

            {error && (
              <div className="error" role="alert">
                {error}
              </div>
            )}

            {note && (
              <div className="success" role="status">
                {note}
              </div>
            )}

            <button
              className="btn primary"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="wrap">
      <Header />

      <main id="top">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <footer>
        <span>{profile.name} | Software Engineering Student</span>
        <span>Copyright © 2026.</span>
      </footer>
    </div>
  );
}
