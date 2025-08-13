"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Calendar,
  Music,
  Palette,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CafeMuseum() {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const drinksRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const eventsRef = useRef(null);
  const instagramRef = useRef(null);
  const visitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple opacity-only animations to prevent white bar layout issues
      gsap.set([logoRef.current, taglineRef.current, buttonRef.current], {
        opacity: 0,
      });

      gsap
        .timeline()
        .to(logoRef.current, { opacity: 1, duration: 1 })
        .to(taglineRef.current, { opacity: 1, duration: 0.8 }, "-=0.5")
        .to(buttonRef.current, { opacity: 1, duration: 0.6 }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          className="hero-bg absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-gray-900"
          style={{
            backgroundImage: "url('/cafe indoor view.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minHeight: "100vh",
            minWidth: "100vw",
            transform: "translate3d(0,0,0)", // Force hardware acceleration and prevent subpixel issues
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Logo Container */}
            <div
              ref={logoRef}
              className="mb-6 md:mb-8 lg:mb-12 transform hover:scale-105 transition-transform duration-500"
            >
              <img
                src="/logo_white.png"
                alt="Café Museum Logo"
                className="mx-auto h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto drop-shadow-2xl"
              />
            </div>

            {/* Tagline with elegant styling */}
            <div
              ref={taglineRef}
              className="mb-6 md:mb-8 lg:mb-12 max-w-3xl px-4"
            >
              <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide opacity-90">
                The key to creativity: wonder in the everyday
              </p>
              <div className="w-16 md:w-24 h-0.5 bg-white/60 mx-auto mt-4 md:mt-6"></div>
            </div>

            {/* Call to Action */}
            <div ref={buttonRef} className="mt-2 md:mt-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const menuSection = document.getElementById("menu-section");
                  menuSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 px-6 py-3 md:px-10 md:py-4 text-sm md:text-base font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] backdrop-blur-sm cursor-pointer"
              >
                Explore Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Drinks Showcase */}
      <section ref={drinksRef} className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-serif font-black text-3xl sm:text-4xl md:text-6xl uppercase text-white text-center mb-12 md:mb-16 tracking-wider">
            Signature Drinks
          </h2>
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-4 scrollbar-hide">
            {[
              {
                name: "Museum Blend",
                price: "$1.8",
                image: "/dirty cafe and latte photoshoot.jpg",
              },
              {
                name: "Industrial Latte",
                price: "$2.2",
                image: "/3 cafe and dessert photoshoot.jpg",
              },
              {
                name: "Gallery Espresso",
                price: "$1.6",
                image: "/cafe indoor view.jpg",
              },
              {
                name: "Creative Cold Brew",
                price: "$2.0",
                image: "/milk frappe.jpg",
              },
              {
                name: "Artistic Matcha",
                price: "$1.5",
                image: "/matcha.jpg",
              },
            ].map((drink, index) => (
              <div
                key={index}
                className="drink-card flex-shrink-0 w-64 md:w-80 group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-3 md:mb-4">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-72 md:h-96 object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-white uppercase tracking-wide mb-1 md:mb-2">
                  {drink.name}
                </h3>
                <p className="font-serif text-base md:text-lg text-gray-300">
                  {drink.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Café Museum */}
      <section ref={aboutRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="about-content bg-black text-white p-8 md:p-12 lg:p-16">
              <h2 className="section-header font-serif font-black text-3xl md:text-4xl lg:text-5xl uppercase mb-6 md:mb-8 tracking-wider">
                About Café Museum
              </h2>
              <p className="font-serif text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Located on the 5th floor of U Mall PP, Café Museum is where
                industrial design meets artistic soul. Our space features
                exposed steel beams, flowing curtains, and warm ambient lighting
                that creates the perfect atmosphere for creativity and
                contemplation.
              </p>
              <p className="font-serif text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                More than just a coffee shop, we're a cultural hub where art
                meets caffeine. With our resident piano and rotating art
                exhibitions, every visit is a journey through taste and
                creativity.
              </p>
              <p className="font-serif text-base md:text-lg leading-relaxed">
                Come for the coffee, stay for the inspiration.
              </p>
            </div>
            <div className="about-image relative">
              <img
                src="/2matcha photoshoot.jpg"
                alt="Matcha drinks at Café Museum"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section
        ref={menuRef}
        id="menu-section"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="section-header font-serif font-black text-3xl sm:text-4xl md:text-6xl uppercase text-center mb-12 md:mb-16 tracking-wider">
            Menu
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            {/* Coffee */}
            <Card className="menu-card p-6 md:p-8 bg-white border-2 border-black">
              <h3 className="font-serif font-black text-xl md:text-2xl uppercase mb-6 md:mb-8 tracking-wider border-b-2 border-black pb-3 md:pb-4">
                Coffee
              </h3>
              <div className="space-y-4">
                {[
                  { item: "Espresso", price: "$1.2" },
                  { item: "Americano", price: "$1.5" },
                  { item: "Cappuccino", price: "$1.8" },
                  { item: "Latte", price: "$2.0" },
                  { item: "Mocha", price: "$2.2" },
                  { item: "Macchiato", price: "$1.9" },
                ].map((menuItem, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-serif font-medium">
                      {menuItem.item}
                    </span>
                    <span className="font-serif font-bold">
                      {menuItem.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Non-Coffee */}
            <Card className="menu-card p-6 md:p-8 bg-black text-white border-2 border-black">
              <h3 className="font-serif font-black text-xl md:text-2xl uppercase mb-6 md:mb-8 tracking-wider border-b-2 border-white pb-3 md:pb-4">
                Non-Coffee
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { item: "Hot Chocolate", price: "$1.8" },
                  { item: "Chai Latte", price: "$2.0" },
                  { item: "Matcha Latte", price: "$2.2" },
                  { item: "Fresh Juice", price: "$1.5" },
                  { item: "Iced Tea", price: "$1.2" },
                  { item: "Smoothies", price: "$2.0" },
                ].map((menuItem, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-serif font-medium text-sm md:text-base">
                      {menuItem.item}
                    </span>
                    <span className="font-serif font-bold text-sm md:text-base">
                      {menuItem.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Hand Drip */}
            <Card className="menu-card p-6 md:p-8 bg-white border-2 border-black">
              <h3 className="font-serif font-black text-xl md:text-2xl uppercase mb-6 md:mb-8 tracking-wider border-b-2 border-black pb-3 md:pb-4">
                Hand Drip
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { item: "Ethiopian Yirgacheffe", price: "$2.8" },
                  { item: "Colombian Supremo", price: "$2.6" },
                  { item: "Guatemalan Antigua", price: "$2.7" },
                  { item: "Brazilian Santos", price: "$2.5" },
                  { item: "Kenyan AA", price: "$2.9" },
                  { item: "House Blend", price: "$2.4" },
                ].map((menuItem, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-serif font-medium text-sm md:text-base">
                      {menuItem.item}
                    </span>
                    <span className="font-serif font-bold text-sm md:text-base">
                      {menuItem.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Culture */}
      <section ref={eventsRef} className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-serif font-black text-3xl sm:text-4xl md:text-6xl uppercase text-center mb-12 md:mb-16 tracking-wider">
            Events & Culture
          </h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="space-y-6 md:space-y-8">
                <div className="event-item flex items-start gap-4">
                  <Music className="w-6 h-6 md:w-8 md:h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-lg md:text-xl uppercase mb-2 tracking-wide">
                      Piano Nights
                    </h3>
                    <p className="font-serif text-gray-300 leading-relaxed text-sm md:text-base">
                      Every Friday evening, local musicians perform intimate
                      sets on our resident piano. Join us for an evening of
                      coffee and live music.
                    </p>
                  </div>
                </div>
                <div className="event-item flex items-start gap-4">
                  <Palette className="w-6 h-6 md:w-8 md:h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-lg md:text-xl uppercase mb-2 tracking-wide">
                      Art Gatherings
                    </h3>
                    <p className="font-serif text-gray-300 leading-relaxed">
                      Monthly exhibitions featuring local artists. Our walls
                      rotate with fresh perspectives and creative expressions
                      from the community.
                    </p>
                  </div>
                </div>
                <div className="event-item flex items-start gap-4">
                  <Calendar className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-xl uppercase mb-2 tracking-wide">
                      Creative Workshops
                    </h3>
                    <p className="font-serif text-gray-300 leading-relaxed">
                      From coffee cupping sessions to art workshops, we host
                      events that inspire creativity and bring our community
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/cafe indoor view.jpg"
                alt="Café Museum interior atmosphere"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section ref={instagramRef} className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-serif font-black text-4xl md:text-6xl uppercase text-center mb-16 tracking-wider">
            @CafeMuseum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              "/dirty cafe and latte photoshoot.jpg",
              "/cafe indoor view.jpg",
              "/2matcha photoshoot.jpg",
              "/3 cafe and dessert photoshoot.jpg",
              "/matcha.jpg",
              "/milk frappe.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="instagram-item aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 font-bold uppercase tracking-wider"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section ref={visitRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-serif font-black text-4xl md:text-6xl uppercase text-center mb-16 tracking-wider">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="visit-content flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-xl uppercase mb-2 tracking-wide">
                    Location
                  </h3>
                  <p className="font-serif text-gray-700 leading-relaxed">
                    U Mall PP, 5th Floor
                    <br />
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
              <div className="visit-content flex items-start gap-4">
                <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-xl uppercase mb-2 tracking-wide">
                    Hours
                  </h3>
                  <div className="font-serif text-gray-700 leading-relaxed space-y-1">
                    <p>Monday - Thursday: 7:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 7:00 AM - 11:00 PM</p>
                    <p>Sunday: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="visit-content flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-xl uppercase mb-2 tracking-wide">
                    Contact
                  </h3>
                  <p className="font-serif text-gray-700 leading-relaxed">
                    +855 12 345 678
                    <br />
                    hello@cafemuseum.com
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200">
              <img
                src="/cafe indoor view.jpg"
                alt="Café Museum location"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif font-black text-2xl uppercase mb-4 tracking-wider">
            Café Museum
          </h3>
          <p className="font-serif text-gray-400 mb-4">
            Where creativity meets caffeine
          </p>
          <p className="font-serif text-sm text-gray-500">
            © 2024 Café Museum. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
