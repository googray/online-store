const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-year">
        <span className="year-text">2022</span>
        <a href="https://github.com/googray/" className="github-link">
          RS github
        </a>
      </div>

      <a href="https://rs.school/js/" className="rss-link">
        <div className="footer-rsschool"></div>
      </a>
    </footer>
  );
};

export default Footer;
