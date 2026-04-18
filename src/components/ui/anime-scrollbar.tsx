import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import './anime-scrollbar.css';

const AnimeScrollbar = () => {
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
  const rafRef = useRef<number>();
  const lastScrollRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!scrollThumbRef.current || !containerRef.current) return;

    let scrollTimeout: NodeJS.Timeout;

    const updateScrollbar = () => {
      if (!scrollThumbRef.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - windowHeight;

      // Calculate proportional thumb height
      const thumbHeightPercent = (windowHeight / docHeight) * 100;
      const thumbHeight = Math.max((thumbHeightPercent / 100) * windowHeight, 50);
      const maxThumbTravel = windowHeight - thumbHeight;
      
      // Calculate thumb position
      const scrollPercent = maxScroll > 0 ? scrollTop / maxScroll : 0;
      const thumbPosition = scrollPercent * maxThumbTravel;

      // Calculate velocity for smooth animation
      velocityRef.current = scrollTop - lastScrollRef.current;
      lastScrollRef.current = scrollTop;

      // Animate thumb
      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime({
        targets: scrollThumbRef.current,
        translateY: thumbPosition,
        height: thumbHeight,
        duration: 200,
        easing: 'easeOutQuart',
      });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(updateScrollbar);

      // Hide scrollbar after stopping
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    const handleTouchEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    // Initial setup
    updateScrollbar();

    // Passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollbar);

    // Handle touch events on mobile
    if (window.matchMedia('(max-width: 768px)').matches) {
      document.addEventListener('touchmove', handleScroll, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollbar);
      document.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(scrollTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (animationRef.current) animationRef.current.pause();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`anime-scrollbar-container ${isScrolling ? 'scrolling' : 'idle'}`}
    >
      <div
        ref={scrollThumbRef}
        className="anime-scrollbar-thumb"
      />
    </div>
  );
};

export default AnimeScrollbar;
