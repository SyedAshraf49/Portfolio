import './PageLoader.css';

export const PageLoader = () => (
  <main className="page-loader" role="status" aria-label="Loading portfolio">
    <div className="page-loader__mark" aria-hidden="true">
      <span className="page-loader__prompt">&gt;_</span>
      <span className="page-loader__line" />
    </div>
    <p className="page-loader__label">Loading portfolio</p>
    <p className="page-loader__subline">Initializing intelligent systems</p>
  </main>
);
