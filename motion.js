// Browsers with view timelines animate headings entirely in CSS.
if (!CSS.supports('animation-timeline: view()') || !CSS.supports('animation-range: entry 0% cover 22%')) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('entering');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.5 });
    for (const heading of document.querySelectorAll('.chapter-heading')) {
      observer.observe(heading);
    }
  }
}
