import React, { useState } from 'react';

const WHATSAPP = 'https://wa.me/212700793396';
const message = (text) => WHATSAPP + '?text=' + encodeURIComponent(text);

// Temporary editorial images only. Replace these URLs with the maker's own approved photographs.
const collections = [
  { title: 'Jellabas', subtitle: 'Tradition & élégance', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85' },
  { title: 'Couture', subtitle: 'Lignes contemporaines', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85' },
  { title: 'Broderie', subtitle: 'L’art du détail', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85' },
  { title: 'Créations enfants', subtitle: 'Douceur & raffinement', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="announcement">L’ART DE LA COUTURE MAROCAINE <span>✦</span> CRÉATIONS SUR DEMANDE</div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="TIRAZÉ accueil">
          <span className="brand-name">TIRAZÉ</span>
          <span className="brand-sub">COUTURE · BRODERIE · CRÉATION</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? '✕' : '☰'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#home" onClick={closeMenu}>Accueil</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#savoir-faire" onClick={closeMenu}>Savoir-faire</a>
          <a href="#maison" onClick={closeMenu}>La maison</a>
          <a className="nav-cta" href={message('Bonjour TIRAZÉ, je souhaite me renseigner sur vos créations.')} target="_blank" rel="noreferrer" onClick={closeMenu}>Nous contacter <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="ornament">✳</span> MAISON DE COUTURE MAROCAINE</p>
            <h1>L’élégance de<br/><em>notre héritage.</em></h1>
            <p className="hero-desc">Des créations marocaines pensées autour de votre style, entre tradition, couture et broderie.</p>
            <p className="hero-ar" lang="ar" dir="rtl">أناقة تنسجها تفاصيل من تراثنا.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#collections">Découvrir nos créations <span>↗</span></a>
              <a className="text-link" href={message('Bonjour, je souhaite discuter d’une création sur mesure.')} target="_blank" rel="noreferrer">Une création sur mesure</a>
            </div>
            <div className="hero-note"><span className="note-line"></span><span>LE SAVOIR-FAIRE AU SERVICE DE VOTRE STYLE</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=90" alt="Image éditoriale temporaire pour l’univers TIRAZÉ" />
              <span className="image-disclaimer">IMAGE D’INSPIRATION · À REMPLACER</span>
            </div>
            <div className="hero-seal"><span>MADE WITH</span><strong>♡</strong><span>CARE</span></div>
            <span className="vertical-caption">L’ÉLÉGANCE INTEMPORELLE · TIRAZÉ</span>
          </div>
        </section>

        <section className="intro section-pad">
          <span className="section-kicker">L’ESPRIT TIRAZÉ</span>
          <h2>La tradition marocaine,<br/><em>réinventée avec élégance.</em></h2>
          <p>Chaque création célèbre la beauté du vêtement marocain et le soin apporté aux détails. Des pièces choisies, imaginées et confectionnées autour de votre style.</p>
          <span className="gold-flourish">✦ ───────── ✦</span>
        </section>

        <section className="collections section-pad" id="collections">
          <div className="section-heading">
            <div><span className="section-kicker">SÉLECTION TIRAZÉ</span><h2>Nos <em>créations</em></h2></div>
            <p>Découvrez notre univers et laissez-vous inspirer.</p>
          </div>
          <div className="collection-grid">
            {collections.map((item, index) => (
              <a className="collection-card" href={message('Bonjour TIRAZÉ, je souhaite avoir des informations sur : ' + item.title + '.')} target="_blank" rel="noreferrer" key={item.title}>
                <div className="collection-photo"><img src={item.image} alt={'Image temporaire d’inspiration — ' + item.title} loading="lazy"/><span className="image-disclaimer">PHOTO TEMPORAIRE</span><span className="card-arrow">↗</span></div>
                <div className="collection-meta"><div><h3>{item.title}</h3><p>{item.subtitle}</p></div><span className="collection-number">0{index + 1}</span></div>
              </a>
            ))}
          </div>
          <p className="temporary-note">Les photographies de cette première maquette sont des images d’inspiration. Elles seront remplacées par les créations originales de l’atelier avant la publication définitive.</p>
        </section>

        <section className="craft" id="savoir-faire">
          <div className="craft-image"><img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85" alt="Image temporaire illustrant le travail artisanal" loading="lazy"/><span className="image-disclaimer">IMAGE D’INSPIRATION · À REMPLACER</span></div>
          <div className="craft-copy">
            <span className="section-kicker">LE GOÛT DU DÉTAIL</span>
            <h2>Un savoir-faire<br/><em>qui se ressent.</em></h2>
            <p>De la couture à la broderie, chaque étape compte. Nous accordons une attention particulière à votre idée, au choix du style et aux finitions de votre pièce.</p>
            <a className="text-link" href={message('Bonjour, j’aimerais en savoir plus sur votre savoir-faire.')} target="_blank" rel="noreferrer">Parlons de votre projet <span>↗</span></a>
          </div>
        </section>

        <section className="made-for-you section-pad">
          <span className="section-kicker">VOTRE STYLE, VOTRE CRÉATION</span>
          <h2>Une création<br/><em>à votre image.</em></h2>
          <p>Vous avez une idée, un modèle ou une inspiration ? Partagez votre envie avec nous. Nous échangeons autour du design que vous souhaitez.</p>
          <a className="button button-light" href={message('Bonjour TIRAZÉ, j’ai une idée de création et j’aimerais en discuter avec vous.')} target="_blank" rel="noreferrer">Créer ma pièce avec vous <span>↗</span></a>
          <div className="made-ornament">T <span>✳</span> É</div>
        </section>

        <section className="about section-pad" id="maison">
          <div className="about-mark">T<span>É</span></div>
          <div className="about-copy">
            <span className="section-kicker">LA MAISON TIRAZÉ</span>
            <h2>La passion du métier,<br/><em>l’exigence du détail.</em></h2>
            <p>Formée en couture et en modélisme, notre créatrice met à profit plus de sept années d’expérience pour donner vie à des pièces qui vous ressemblent.</p>
            <a className="text-link" href={message('Bonjour, je souhaite découvrir vos créations.')} target="_blank" rel="noreferrer">Découvrir notre univers <span>↗</span></a>
          </div>
        </section>

        <section className="social section-pad">
          <span className="section-kicker">RESTONS EN CONTACT</span>
          <h2>Suivez les nouveautés<br/><em>de la maison.</em></h2>
          <p>Retrouvez nos dernières créations et les actualités de l’atelier sur nos réseaux sociaux.</p>
          <div className="social-links"><span>Instagram · lien à ajouter</span><span>Facebook · lien à ajouter</span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-name">TIRAZÉ</span><span className="brand-sub">COUTURE · BRODERIE · CRÉATION</span></a>
          <p>L’élégance de notre héritage.</p>
          <a className="footer-whatsapp" href={message('Bonjour TIRAZÉ, je souhaite passer une demande.')} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} TIRAZÉ. Tous droits réservés.</span><a href="mailto:smahankarmad918@gmail.com">smahankarmad918@gmail.com</a><span>Tamesna · Maroc</span></div>
      </footer>
      <a className="floating-whatsapp" href={message('Bonjour TIRAZÉ, je souhaite avoir des renseignements.')} target="_blank" rel="noreferrer" aria-label="Contacter TIRAZÉ sur WhatsApp">☏ <span>WhatsApp</span></a>
    </div>
  );
}

export default App;