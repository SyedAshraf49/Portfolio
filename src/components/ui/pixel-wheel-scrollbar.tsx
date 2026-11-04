import { useEffect, useRef, type KeyboardEvent, type PointerEvent } from 'react';
import './pixel-wheel-scrollbar.css';

type DragState = {
  pointerId: number;
  startPointerY: number;
  startScrollY: number;
  maxScroll: number;
  maxTravel: number;
};

const TRACK_PADDING = 10;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getMaxScroll = () => {
  const contentHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body?.scrollHeight ?? 0,
  );
  return Math.max(contentHeight - window.innerHeight, 0);
};

const PixelWheelScrollbar = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<SVGSVGElement>(null);
  const frameRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);
  const dragRef = useRef<DragState | null>(null);

  const getMetrics = () => {
    const wheelHeight = wheelRef.current?.getBoundingClientRect().height ?? 22;
    const maxScroll = getMaxScroll();
    const maxTravel = Math.max(
      window.innerHeight - wheelHeight - TRACK_PADDING * 2,
      0,
    );
    return { wheelHeight, maxScroll, maxTravel };
  };

  const updatePosition = () => {
    frameRef.current = null;
    const track = trackRef.current;
    const wheel = wheelRef.current;
    if (!track || !wheel) return;

    const { maxScroll, maxTravel } = getMetrics();
    const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;
    const top = TRACK_PADDING + progress * maxTravel;

    wheel.style.transform = `translate3d(-50%, ${top}px, 0)`;
    track.classList.toggle('has-scroll', maxScroll > 0);
    track.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
    track.setAttribute('aria-valuetext', `${Math.round(progress * 100)}% scrolled`);
  };

  const schedulePositionUpdate = () => {
    if (frameRef.current === null) {
      frameRef.current = window.requestAnimationFrame(updatePosition);
    }
  };

  const showActivity = () => {
    const track = trackRef.current;
    if (!track) return;

    track.classList.add('is-active');
    if (idleTimerRef.current !== null) {
      window.clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = window.setTimeout(() => {
      track.classList.remove('is-active');
      idleTimerRef.current = null;
    }, 650);
  };

  const handleScroll = () => {
    showActivity();
    schedulePositionUpdate();
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || event.pointerType === 'touch') return;

    const track = trackRef.current;
    const wheel = wheelRef.current;
    if (!track || !wheel) return;

    const { wheelHeight, maxScroll, maxTravel } = getMetrics();
    if (maxScroll <= 0 || maxTravel <= 0) return;

    event.preventDefault();
    const isOnWheel = wheel.contains(event.target as Node);
    let startScrollY = window.scrollY;

    if (!isOnWheel) {
      const wheelTop = clamp(
        event.clientY - wheelHeight / 2 - TRACK_PADDING,
        0,
        maxTravel,
      );
      startScrollY = (wheelTop / maxTravel) * maxScroll;
      window.scrollTo({ top: startScrollY, behavior: 'auto' });
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startPointerY: event.clientY,
      startScrollY,
      maxScroll,
      maxTravel,
    };
    track.setPointerCapture(event.pointerId);
    track.classList.add('is-dragging');
    showActivity();
    schedulePositionUpdate();
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    event.preventDefault();
    const delta = ((event.clientY - drag.startPointerY) / drag.maxTravel) * drag.maxScroll;
    window.scrollTo({
      top: clamp(drag.startScrollY + delta, 0, getMaxScroll()),
      behavior: 'auto',
    });
    showActivity();
    schedulePositionUpdate();
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;

    dragRef.current = null;
    event.currentTarget.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    showActivity();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const pageStep = Math.max(window.innerHeight * 0.85, 120);
    let nextScrollY: number;

    switch (event.key) {
      case 'ArrowDown':
        nextScrollY = window.scrollY + 64;
        break;
      case 'ArrowUp':
        nextScrollY = window.scrollY - 64;
        break;
      case 'PageDown':
        nextScrollY = window.scrollY + pageStep;
        break;
      case 'PageUp':
        nextScrollY = window.scrollY - pageStep;
        break;
      case 'Home':
        nextScrollY = 0;
        break;
      case 'End':
        nextScrollY = getMaxScroll();
        break;
      default:
        return;
    }

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: clamp(nextScrollY, 0, getMaxScroll()),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    showActivity();
  };

  useEffect(() => {
    const handleResize = () => schedulePositionUpdate();
    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(schedulePositionUpdate)
      : null;

    updatePosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('load', handleResize, { once: true });
    resizeObserver?.observe(document.documentElement);
    if (document.body) resizeObserver?.observe(document.body);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      resizeObserver?.disconnect();
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      if (idleTimerRef.current !== null) window.clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="pixel-wheel-scrollbar"
      role="scrollbar"
      aria-label="Page scroll position"
      aria-orientation="vertical"
      aria-controls="page-scroll-region"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      aria-valuetext="0% scrolled"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <span className="pixel-wheel-scrollbar__track" aria-hidden="true" />
      <svg
        ref={wheelRef}
        className="pixel-wheel-scrollbar__wheel"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="crispEdges"
      >
        <g className="pixel-wheel-rotor">
          <g fill="var(--pixel-cyan, #8cc6ff)">
            <rect x="8" y="0" width="8" height="4" />
            <rect x="4" y="4" width="16" height="4" />
            <rect x="0" y="8" width="24" height="8" />
            <rect x="4" y="16" width="16" height="4" />
            <rect x="8" y="20" width="8" height="4" />
          </g>
          <g fill="var(--pixel-bg-dark, #080d1b)">
            <rect x="9" y="4" width="6" height="16" />
            <rect x="4" y="9" width="16" height="6" />
          </g>
          <rect x="10" y="10" width="4" height="4" fill="var(--pixel-blue, #4d8dff)" />
          <rect x="5" y="6" width="2" height="2" fill="var(--pixel-white, #e8f2ff)" />
        </g>
      </svg>
    </div>
  );
};

export default PixelWheelScrollbar;
