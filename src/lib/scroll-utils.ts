// Scroll utility functions for the AI-Native Book Website

// Function to smoothly scroll to an element
export const smoothScrollTo = (element: HTMLElement | null, offset = 0): void => {
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Function to smoothly scroll to top
export const smoothScrollToTop = (offset = 0): void => {
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
};

// Function to scroll to a specific position
export const scrollToPosition = (position: number): void => {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
};

// Function to get current scroll position
export const getScrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

// Function to get scroll percentage (0-100)
export const getScrollPercentage = (): number => {
  const scrollTop = getScrollPosition();
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  if (docHeight <= 0) return 0;

  return Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
};

// Function to detect if user is scrolling down
export let isScrollingDown = true;
let lastScrollY = window.scrollY || 0;

export const detectScrollDirection = (): boolean => {
  const currentScrollY = window.scrollY || 0;
  isScrollingDown = currentScrollY > lastScrollY;
  lastScrollY = currentScrollY;
  return isScrollingDown;
};

// Function to add scroll event listener with performance optimization
export const addOptimizedScrollListener = (callback: (scrollPosition: number) => void): (() => void) => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(getScrollPosition());
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Function to lock/unlock body scroll (useful for modals)
export const lockBodyScroll = (): void => {
  document.body.style.overflow = 'hidden';
};

export const unlockBodyScroll = (): void => {
  document.body.style.overflow = '';
};

// Function to check if an element is in viewport
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};