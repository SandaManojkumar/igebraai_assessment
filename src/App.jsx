import { useState } from 'react';
import zion from "../src/assets/zion.png";
import matrix from "../src/assets/matrix.png";
import cypher from "../src/assets/cypher.png";
import neo from "../src/assets/neo.png";
import morpheos from "../src/assets/morpheos.png";   // Assuming this is Morpheus

const products = [
  {
    name: "Cypher",
    role: "Student Learning Companion",
    color: "linear-gradient(135deg, #2563eb, #22d3ee)",
    description: "Personal AI tutor that teaches students how to think, not just what to think.",
    icon: "🧠",
    for: "Students"
  },
  {
    name: "Morpheus",
    role: "AI Teaching Agent",
    color: "linear-gradient(135deg, #7c3aed, #c026d3)",
    description: "Intelligent assistant that helps teachers plan, assess, and personalize learning.",
    icon: "👩‍🏫",
    for: "Teachers"
  },
  {
    name: "Zion",
    role: "AI Tool Suite",
    color: "linear-gradient(135deg, #10b981, #14b8a6)",
    description: "30+ safe & powerful AI tools for research, creativity, and project work.",
    icon: "🛠️",
    for: "Everyone"
  },
  {
    name: "NEO",
    role: "AI Innovation Lab",
    color: "linear-gradient(135deg, #f59e0b, #ea580c)",
    description: "Hands-on lab for AI, robotics, and emerging technologies.",
    icon: "🚀",
    for: "Innovation"
  },
  {
    name: "Matrix",
    role: "AI Infrastructure",
    color: "linear-gradient(135deg, #e11d48, #be123c)",
    description: "Secure local AI servers with full data privacy and control.",
    icon: "🏛️",
    for: "School"
  },
];

const faqs = [
  { question: "What exactly is AI Ready School?", answer: "AI Ready School is India’s first complete AI ecosystem for K-12 schools." },
  { question: "How is AI Ready School different from other EdTech platforms?", answer: "Most platforms offer single tools. We provide a full ecosystem where all five products work together seamlessly." },
  { question: "What does implementation look like? How long does it take?", answer: "Implementation is smooth and guided. Most schools are up and running within 2–4 weeks." },
  { question: "Do you offer on-premise deployment for schools with data privacy concerns?", answer: "Yes. Matrix supports fully on-premise and local deployment." },
  { question: "Does a teacher need to know AI or coding to use this?", answer: "No. The platform is designed to be teacher-friendly with minimal training." },
  { question: "Will AI replace my role as a teacher?", answer: "Absolutely not. AI is built to empower teachers by reducing repetitive tasks." },
  { question: "Is this safe for children to use?", answer: "Yes. Strong safety guardrails and teacher oversight are built-in." },
  { question: "Will students just use AI to complete their homework without thinking?", answer: "Cypher encourages critical thinking rather than giving direct answers." }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const chatbotUrl = "https://edumatelearning.vercel.app/";

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', margin: 0, minHeight: '100vh', backgroundColor: '#fff' }}>

{/* Modern Navbar */}
<nav style={{
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.96)',
  backdropFilter: 'blur(24px)',
  borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
  padding: '18px 0',
  boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}}>
  <div style={{
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    
    {/* Logo - More Premium */}
    <a href="/" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform 0.3s ease'
    }}>
      <div style={{
        width: '54px',
        height: '54px',
        background: 'linear-gradient(135deg, #2563eb, #7c3aed, #db2777)',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '29px',
        fontWeight: '700',
        boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.35)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        AI
      </div>
      <div>
        <div style={{
          fontSize: '27.5px',
          fontWeight: '700',
          letterSpacing: '-1.1px',
          lineHeight: '1.1'
        }}>
          AI Ready School
        </div>
        <div style={{
          fontSize: '12.8px',
          color: '#64748b',
          fontWeight: '500',
          marginTop: '2px'
        }}>
          Complete AI Ecosystem
        </div>
      </div>
    </a>

    {/* Desktop Navigation */}
    <div className="desktop-nav" style={{
      display: 'none',
      alignItems: 'center',
      gap: '40px',
      fontSize: '15.8px',
      fontWeight: '500',
      color: '#334155'
    }}>
      <a href="#products" style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        position: 'relative',
        paddingBottom: '6px',
        transition: 'color 0.3s ease'
      }}>
        Products
        <span style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '0',
          height: '2.5px',
          background: 'linear-gradient(to right, #2563eb, #7c3aed)',
          transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }} className="nav-underline"></span>
      </a>
      <a href="#cypher" style={{ textDecoration: 'none', color: 'inherit' }}>Cypher</a>
      <a href="#morpheos" style={{ textDecoration: 'none', color: 'inherit' }}>Morpheos</a>
      <a href="#zion" style={{ textDecoration: 'none', color: 'inherit' }}>Zion</a>
      <a href="#neo" style={{ textDecoration: 'none', color: 'inherit' }}>NEO</a>
      <a href="#matrix" style={{ textDecoration: 'none', color: 'inherit' }}>Matrix</a>
      <a href="#faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</a>
    </div>

    {/* Desktop Buttons */}
    <div className="desktop-buttons" style={{
      display: 'none',
      alignItems: 'center',
      gap: '14px'
    }}>
      <button style={{
        padding: '12px 28px',
        borderRadius: '9999px',
        border: '1.6px solid #e2e8f0',
        background: 'transparent',
        color: '#334155',
        fontWeight: '600',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseOver={(e) => {
        e.target.style.background = '#f8fafc';
        e.target.style.borderColor = '#cbd5e1';
        e.target.style.transform = 'translateY(-1px)';
      }}
      onMouseOut={(e) => {
        e.target.style.background = 'transparent';
        e.target.style.borderColor = '#e2e8f0';
        e.target.style.transform = 'translateY(0)';
      }}
      >
        Login
      </button>

      <button 
        onClick={() => alert("Demo booking would open here")}
        style={{
          padding: '12px 32px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #0f172a, #1e2937)',
          color: 'white',
          border: 'none',
          fontWeight: '600',
          fontSize: '15px',
          cursor: 'pointer',
          boxShadow: '0 6px 16px rgba(15, 23, 42, 0.25)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 10px 25px rgba(15, 23, 42, 0.35)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 6px 16px rgba(15, 23, 42, 0.25)';
        }}
      >
        Schedule Demo
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button 
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      style={{
        background: 'none',
        border: 'none',
        fontSize: '32px',
        cursor: 'pointer',
        color: '#334155',
        padding: '4px',
        transition: 'transform 0.3s ease'
      }}
      onMouseOver={(e) => e.target.style.transform = 'scale(1.15)'}
      onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
    >
      {mobileMenuOpen ? '✕' : '☰'}
    </button>
  </div>

  {/* Mobile Menu - Improved */}
  {mobileMenuOpen && (
    <div style={{
      backgroundColor: 'white',
      padding: '32px 28px',
      borderTop: '1px solid #e2e8f0',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      animation: 'slideDown 0.4s ease forwards'
    }}>
      <a href="#products" style={{ 
        display: 'block', 
        padding: '16px 0', 
        fontSize: '18.5px',
        fontWeight: '500',
        color: '#1e2937',
        textDecoration: 'none'
      }} 
      onClick={() => setMobileMenuOpen(false)}>
        Products
      </a>
      <a href="#cypher" style={{ display: 'block', padding: '16px 0', fontSize: '18.5px', fontWeight: '500', color: '#1e2937', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>Cypher</a>
      <a href="#morpheos" style={{ display: 'block', padding: '16px 0', fontSize: '18.5px', fontWeight: '500', color: '#1e2937', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>Morpheos</a>
      <a href="#zion" style={{ display: 'block', padding: '16px 0', fontSize: '18.5px', fontWeight: '500', color: '#1e2937', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>Zion</a>
      <a href="#neo" style={{ display: 'block', padding: '16px 0', fontSize: '18.5px', fontWeight: '500', color: '#1e2937', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>NEO</a>
      <a href="#matrix" style={{ display: 'block', padding: '16px 0', fontSize: '18.5px', fontWeight: '500', color: '#1e2937', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>Matrix</a>
      <a href="#faq" style={{ display: 'block', padding: '16px 0', fontSize: '18.5px', fontWeight: '500', color: '#1e2937', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>FAQ</a>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button style={{
          width: '100%',
          padding: '16px',
          borderRadius: '9999px',
          border: '1.5px solid #cbd5e1',
          background: 'transparent',
          fontWeight: '600',
          fontSize: '16px'
        }}>
          Login
        </button>
        <button 
          onClick={() => {
            alert("Demo booking would open here");
            setMobileMenuOpen(false);
          }}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '9999px',
            background: '#0f172a',
            color: 'white',
            border: 'none',
            fontWeight: '600',
            fontSize: '16px'
          }}
        >
          Schedule Demo
        </button>
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section style={{ padding: '110px 24px 140px', background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'white', padding: '12px 28px', borderRadius: '9999px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
          <div style={{ width: '9px', height: '9px', background: '#10b981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
          <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>NOW LIVE IN INDIAN SCHOOLS</span>
        </div>

        <h1 style={{ fontSize: 'clamp(42px, 8vw, 64px)', fontWeight: '700', lineHeight: '1.05', marginBottom: '24px', color: '#0f172a' }}>
          The Complete AI<br />Ecosystem for Schools
        </h1>

        <p style={{ fontSize: '21px', maxWidth: '720px', margin: '0 auto 48px', color: '#475569', lineHeight: '1.55' }}>
          Five powerful AI products working together to help schools adopt AI responsibly and effectively.
        </p>

        <button 
          onClick={() => alert("Thank you! Demo request received.")}
          style={{ padding: '18px 42px', fontSize: '18px', fontWeight: '600', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '9999px' }}
        >
          Schedule a School Demo
        </button>
      </section>

      {/* Products Grid */}
      <section id="products" style={{ padding: '100px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ color: '#2563eb', fontWeight: '600', fontSize: '14px', letterSpacing: '2px' }}>ONE ECOSYSTEM</div>
          <h2 style={{ fontSize: '42px', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>Five Products.<br />One Powerful Platform.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
          {products.map((product, i) => (
            <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '24px', padding: '48px 32px', background: '#fff', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '16px', background: product.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', marginBottom: '32px' }}>
                {product.icon}
              </div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>{product.for}</div>
              <div style={{ fontSize: '26px', fontWeight: '700', margin: '8px 0' }}>{product.name}</div>
              <div style={{ fontSize: '17px', color: '#475569', marginBottom: '24px' }}>{product.role}</div>
              <p style={{ color: '#475569', lineHeight: '1.65' }}>{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Cypher Section (Student AI) === */}
      <section id="cypher" style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: '#2563eb', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>AI FOR STUDENTS</div>
            <h2 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '20px' }}>Cypher</h2>
            <p style={{ fontSize: '20px', color: '#334155', lineHeight: '1.6' }}>
              Personal AI tutor that teaches students how to think, not just what to think.
            </p>
            <ul style={{ fontSize: '17px', lineHeight: '2.2', margin: '32px 0', listStyle: 'none', padding: 0 }}>
              <li>✔ Critical Thinking Development</li>
              <li>✔ Personalized Learning Paths</li>
              <li>✔ Step-by-step Guidance</li>
              <li>✔ Safe & Monitored Environment</li>
            </ul>
            <button style={{ padding: '14px 32px', background: '#fff', color: '#2563eb', border: '2px solid #2563eb', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer' }}>
              Know more →
            </button>
          </div>
          <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
            <img src={cypher} alt="Cypher" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* === Morpheus Section (Teacher AI) === */}
      <section id="morpheus" style={{ padding: '100px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
            <img src={morpheos} alt="Morpheus" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: '#e11d48', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>AI FOR TEACHERS</div>
            <h2 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '20px' }}>Morpheus</h2>
            <p style={{ fontSize: '20px', color: '#334155', lineHeight: '1.6' }}>
              Intelligent assistant that helps teachers plan, assess, and personalize learning.
            </p>
            <ul style={{ fontSize: '17px', lineHeight: '2.2', margin: '32px 0', listStyle: 'none', padding: 0 }}>
              <li>✔ Lesson Plan & Content Creation</li>
              <li>✔ AI Powered Assessments</li>
              <li>✔ Student Progress Insights</li>
              <li>✔ Reduces Repetitive Work</li>
            </ul>
            <button style={{ padding: '14px 32px', background: '#fff', color: '#e11d48', border: '2px solid #e11d48', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer' }}>
              Know more →
            </button>
          </div>
        </div>
      </section>

      {/* === Zion Section === */}
      <section id="zion" style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>AI TOOL SUITE</div>
            <h2 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '20px' }}>Zion</h2>
            <p style={{ fontSize: '20px', color: '#334155', lineHeight: '1.6' }}>
              30+ safe & powerful AI tools for research, creativity, and project work.
            </p>
            <ul style={{ fontSize: '17px', lineHeight: '2.2', margin: '32px 0', listStyle: 'none', padding: 0 }}>
              <li>✔ 30+ All-In-One AI Toolkit</li>
              <li>✔ Safe and Structured AI use</li>
              <li>✔ Supports Everyday Schoolwork</li>
              <li>✔ Fully Integrated</li>
            </ul>
            <button style={{ padding: '14px 32px', background: '#fff', color: '#10b981', border: '2px solid #10b981', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer' }}>
              Know more →
            </button>
          </div>
          <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
            <img src={zion} alt="Zion" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* === NEO Section === */}
      <section id="neo" style={{ padding: '100px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
            <img src={neo} alt="NEO" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: '#f59e0b', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>AI INNOVATION LAB</div>
            <h2 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '20px' }}>NEO</h2>
            <p style={{ fontSize: '20px', color: '#334155', lineHeight: '1.6' }}>
              Hands-on lab for AI, robotics, and emerging technologies.
            </p>
            <ul style={{ fontSize: '17px', lineHeight: '2.2', margin: '32px 0', listStyle: 'none', padding: 0 }}>
              <li>✔ Hands-On AI Learning Lab</li>
              <li>✔ Project-Based Learning</li>
              <li>✔ Robotics & XR Integration</li>
              <li>✔ Skills Beyond Textbooks</li>
            </ul>
            <button style={{ padding: '14px 32px', background: '#fff', color: '#f59e0b', border: '2px solid #f59e0b', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer' }}>
              Know more →
            </button>
          </div>
        </div>
      </section>

      {/* === Matrix Section === */}
      <section id="matrix" style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ color: '#e11d48', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>AI INFRASTRUCTURE</div>
            <h2 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '20px' }}>Matrix</h2>
            <p style={{ fontSize: '20px', color: '#334155', lineHeight: '1.6' }}>
              Secure local AI servers with full data privacy and control.
            </p>
            <ul style={{ fontSize: '17px', lineHeight: '2.2', margin: '32px 0', listStyle: 'none', padding: 0 }}>
              <li>✔ Local AI Servers</li>
              <li>✔ Full Data Privacy</li>
              <li>✔ On-Premise Deployment</li>
              <li>✔ Campus Intelligence</li>
            </ul>
            <button style={{ padding: '14px 32px', background: '#fff', color: '#e11d48', border: '2px solid #e11d48', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer' }}>
              Know more →
            </button>
          </div>
          <div style={{ flex: '1 1 500px', textAlign: 'center' }}>
            <img src={matrix} alt="Matrix" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '100px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '42px', fontWeight: '700', marginBottom: '60px' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={{ background: 'white', marginBottom: '12px', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button 
                onClick={() => toggleFaq(index)}
                style={{ width: '100%', padding: '24px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '600' }}
              >
                {faq.question}
                <span style={{ transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0)', transition: '0.3s', fontSize: '24px' }}>+</span>
              </button>
              {openFaqIndex === index && (
                <div style={{ padding: '0 24px 28px', color: '#475569', lineHeight: '1.7' }}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '110px 24px', background: 'linear-gradient(135deg, #0f172a, #1e2937)', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '24px' }}>Ready to make your school AI-ready?</h2>
        <button 
          onClick={() => alert("Thank you! Demo request received.")}
          style={{ padding: '20px 56px', fontSize: '19px', fontWeight: '600', background: 'white', color: '#0f172a', border: 'none', borderRadius: '9999px' }}
        >
          Schedule a Personalized Demo
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: '#f8fafc', padding: '60px 24px 40px', textAlign: 'center', color: '#64748b', fontSize: '15px' }}>
        <p>© 2026 AI Ready School • Made for Indian Education</p>
        <p style={{ marginTop: '10px' }}>Redesign Assessment Submission by Manojkumar</p>
      </footer>

      {/* Floating Chatbot */}
      <a 
        href={chatbotUrl}
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '66px',
          height: '66px',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          boxShadow: '0 12px 30px rgba(37, 99, 235, 0.35)',
          textDecoration: 'none',
          zIndex: 200
        }}
      >
        💬
      </a>
    </div>
  );
}

export default App;