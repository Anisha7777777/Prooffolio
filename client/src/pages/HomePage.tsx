import { Link } from 'react-router';

function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Prooffolio home">
      <span className="wordmark-mark" aria-hidden="true">✳</span>
      <span><strong>Prooffolio</strong><small>A home for your work</small></span>
    </Link>
  );
}

function Skill({ children }: { children: string }) {
  return <span className="skill-chip"><span className="skill-dot" aria-hidden="true" />{children}</span>;
}

export function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Wordmark />
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#proof-board">The proof board</a>
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="nav-cta">Create your portfolio <span aria-hidden="true">↗</span></Link>
        </nav>
        <Link to="/signup" className="nav-cta nav-cta-mobile">Get started <span aria-hidden="true">↗</span></Link>
      </header>

      <main>
        <section className="proof-intro" aria-labelledby="page-title">
          <p className="eyebrow"><span aria-hidden="true">✳</span> A better way to show your work</p>
          <h1 id="page-title">A portfolio is more than<br className="desktop-break" /> a <em>project list.</em></h1>
          <p className="intro-copy">Show the work, decisions, and skills behind every build.</p>
          <a className="intro-link" href="#proof-board">Explore the proof board <span aria-hidden="true">↓</span></a>
        </section>

        <section className="board-wrap" id="proof-board" aria-label="Example developer proof board">
          <div className="board-topline">
            <span><i className="status-dot" /> PUBLIC PROFILE / 001</span>
            <span>BUILT WITH INTENTION <b aria-hidden="true">✳</b></span>
          </div>

          <div className="proof-board">
            <article className="proof-card featured-card">
              <div className="card-heading"><span className="card-kicker">FEATURED CASE STUDY</span><span className="card-index">01 / 04</span></div>
              <div className="featured-graphic" aria-hidden="true">
                <span className="graphic-orbit graphic-orbit-a" /><span className="graphic-orbit graphic-orbit-b" />
                <span className="graphic-word">field<br />notes<span>.</span></span>
                <span className="graphic-caption">A slower kind of social garden</span>
              </div>
              <div className="featured-copy">
                <div><h2>Fieldnotes</h2><p>A tiny garden journal for growing things, and growing patience.</p></div>
                <span className="featured-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="featured-meta"><span>PROBLEM SOLVING</span><span>FULL-STACK BUILD</span><span>2025</span></div>
            </article>

            <article className="proof-card project-card">
              <div className="card-heading"><span className="card-kicker">PROJECT PREVIEW</span><span className="tiny-arrow" aria-hidden="true">↗</span></div>
              <div className="mini-browser" aria-label="Fieldnotes application preview">
                <div className="browser-bar"><span /><span /><span /><b>fieldnotes.app</b><i>⌕</i></div>
                <div className="browser-content"><span className="browser-label">YOUR GARDEN, GROWING</span><strong>Make room<br />for wonder.</strong><div className="plant-art" aria-hidden="true"><i /><i /><i /><b /></div><span className="browser-action">Open your journal&nbsp; ↗</span></div>
              </div>
              <p className="card-footnote">A quiet interface for a hands-on hobby.</p>
            </article>

            <article className="proof-card skills-card">
              <div className="card-heading"><span className="card-kicker">SKILLS IN PRACTICE</span><span className="skill-count">04</span></div>
              <p className="card-summary">Tools chosen for the job.</p>
              <div className="skill-list"><Skill>React</Skill><Skill>TypeScript</Skill><Skill>Node.js</Skill><Skill>MongoDB</Skill></div>
              <p className="card-footnote">Each one linked to real project work.</p>
            </article>

            <article className="proof-card architecture-card">
              <div className="card-heading"><span className="card-kicker">ARCHITECTURE</span><span className="tiny-arrow" aria-hidden="true">⌁</span></div>
              <div className="architecture-flow"><span>React UI</span><b aria-hidden="true">→</b><span>Express API</span><b aria-hidden="true">→</b><span>MongoDB</span></div>
              <p className="card-footnote">A simple stack, separated by responsibility.</p>
            </article>

            <article className="proof-card github-card">
              <div className="card-heading"><span className="card-kicker">GITHUB EVIDENCE</span><span className="github-mark" aria-hidden="true">GH</span></div>
              <div className="github-repo"><span className="repo-icon" aria-hidden="true">⑂</span><div><strong>asha-patel / fieldnotes</strong><small>Public repository&nbsp; · &nbsp;TypeScript</small></div></div>
              <div className="commit-line"><span className="commit-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span><span>steady progress</span></div>
            </article>

            <article className="proof-card demo-card">
              <div className="card-heading"><span className="card-kicker">LIVE DEMO</span><span className="live-indicator"><i /> LIVE</span></div>
              <p>Try the thing.<br /><em>See it in action.</em></p>
              <div className="demo-link">fieldnotes-demo.dev <span aria-hidden="true">↗</span></div>
            </article>

            <article className="proof-card reflection-card">
              <div className="card-heading"><span className="card-kicker">WHAT I LEARNED</span><span className="reflection-spark" aria-hidden="true">✳</span></div>
              <blockquote>“The best feature was knowing when to leave space. A garden grows at its own pace, and this product should too.”</blockquote>
              <span className="reflection-author">A NOTE FROM THE BUILD PROCESS</span>
            </article>
          </div>

          <div className="board-footer"><span>ONE PROJECT, MANY KINDS OF PROOF.</span><span>EVERY DETAIL HAS A STORY <b aria-hidden="true">↗</b></span></div>
        </section>

        <section className="closing-cta">
          <div><p className="eyebrow">YOUR WORK DESERVES CONTEXT</p><h2>Show how you got there.</h2></div>
          <Link to="/signup" className="primary-cta">Create your portfolio <span aria-hidden="true">↗</span></Link>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>Made for the makers. © {new Date().getFullYear()} Prooffolio</p>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to top ↑</a>
      </footer>
    </div>
  );
}
