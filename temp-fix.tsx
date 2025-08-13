// Quick fix for white bar issue - simplified animations

useEffect(() => {
  const ctx = gsap.context(() => {
    // Simple fade-in animations only to prevent layout shifts
    gsap.set([logoRef.current, taglineRef.current, buttonRef.current], {
      opacity: 0,
    });

    const heroTl = gsap.timeline();
    heroTl
      .to(logoRef.current, { opacity: 1, duration: 1 })
      .to(taglineRef.current, { opacity: 1, duration: 0.8 }, "-=0.5")
      .to(buttonRef.current, { opacity: 1, duration: 0.6 }, "-=0.3");
  });

  return () => ctx.revert();
}, []);
