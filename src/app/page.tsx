"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Heart, Globe, Leaf, Award } from "lucide-react";

export default function BrewHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="animatedGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen 
          navItems={[
            {name: "Home", id: "home"},
            {name: "Menu", id: "menu"},
            {name: "About", id: "about"},
            {name: "Contact", id: "contact"},
            {name: "Order", id: "order"}
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879475451-t3es4f0l.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
          bottomLeftText="Open Daily 6am - 8pm"
          bottomRightText="hello@brewhaven.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay 
          title="Freshly Brewed Perfection Starts Here"
          description="Discover our handcrafted coffee experience. From our premium single-origin beans to expertly pulled espresso, every cup tells a story of passion and precision."
          tags={["Specialty Coffee", "Fair Trade", "Artisan Roasted", "Made Fresh Daily"]}
          buttons={[
            {text: "Explore Our Menu", href: "menu"},
            {text: "Reserve a Table", href: "contact"}
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879481038-4l9z0brj.jpg"
          showcaseImageAlt="Premium espresso with latte art"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879477150-wacri3r0.jpg"
          imageAlt="Cozy coffee shop interior"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout 
          tag="Our Story"
          description="We are driven by a passion for exceptional coffee and a commitment to sustainability. Since 2015, Brew Haven has been sourcing the finest beans from ethical producers around the world, crafting each cup with meticulous care and expert knowledge."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight 
          features={[
            {
              id: 1,
              title: "Bean Selection",
              description: "Hand-picked beans from sustainable farms worldwide, ensuring quality and ethical sourcing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879485535-bkxr64dp.jpg"
            },
            {
              id: 2,
              title: "Expert Roasting",
              description: "Small-batch roasting process tailored to bring out unique flavors in every bean origin",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879483248-wqhx2afi.jpg"
            },
            {
              id: 3,
              title: "Skilled Baristas",
              description: "Certified specialists trained in latte art, espresso technique, and creating memorable experiences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879481038-4l9z0brj.jpg"
            },
            {
              id: 4,
              title: "Community Space",
              description: "Welcoming atmosphere perfect for work, meetings, or enjoying quality time with friends",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879477150-wacri3r0.jpg"
            }
          ]}
          title="Our Coffee Craftsmanship"
          description="Discover the four pillars that make every cup exceptional"
          tag="Our Process"
          buttons={[{text: "Learn More", href: "about"}]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSix 
          metrics={[
            {
              id: "1",
              value: "50K+",
              tag: "Happy Customers",
              tagIcon: Heart,
              title: "Coffee Lovers Served"
            },
            {
              id: "2",
              value: "15",
              tag: "Countries",
              tagIcon: Globe,
              title: "Bean Origins Sourced"
            },
            {
              id: "3",
              value: "98%",
              tag: "Fair Trade",
              tagIcon: Leaf,
              title: "Ethically Sourced Beans"
            },
            {
              id: "4",
              value: "8 Years",
              tag: "Excellence",
              tagIcon: Award,
              title: "Serving Quality Coffee"
            }
          ]}
          title="Our Impact"
          description="Numbers that reflect our commitment to quality and community"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne 
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Head Roaster",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879486907-gpwjkvjk.jpg",
              imageAlt: "Sarah Chen, Head Roaster"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Lead Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879490400-q5nccwb3.jpg",
              imageAlt: "Marcus Johnson, Lead Barista"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Founder & Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879492030-fg1bwfml.jpg",
              imageAlt: "Elena Rodriguez, Founder"
            },
            {
              id: "4",
              name: "Jamie Lee",
              role: "Specialty Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879493168-2am84bkl.jpg",
              imageAlt: "Jamie Lee, Specialty Barista"
            }
          ]}
          title="Meet Our Team"
          description="Passionate coffee professionals dedicated to your perfect cup"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix 
          testimonials={[
            {
              id: "1",
              name: "Jessica Wong",
              handle: "@coffeelover_jess",
              testimonial: "Best espresso in the city! The baristas really know their craft. Every visit feels like coming home.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879494696-bx1ql19i.jpg",
              imageAlt: "Jessica Wong"
            },
            {
              id: "2",
              name: "Michael Roberts",
              handle: "@michael.writes",
              testimonial: "This is my go-to spot for morning inspiration. Great coffee, great vibes, and amazing pastries too!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879496015-ilfbo32b.jpg",
              imageAlt: "Michael Roberts"
            },
            {
              id: "3",
              name: "Amanda Foster",
              handle: "@amanda.designs",
              testimonial: "The attention to detail in every cup is remarkable. Fair trade, ethically sourced, and absolutely delicious.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879497633-wvtzoqhz.jpg",
              imageAlt: "Amanda Foster"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@david_tech",
              testimonial: "Perfect workspace environment with reliable wifi. The cold brew keeps me focused through long coding sessions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879500763-onw7euxm.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Sophie Martin",
              handle: "@sophie.art",
              testimonial: "The latte art is almost too pretty to drink! Such creative and talented baristas behind the counter.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879502675-4gy0izqr.jpg",
              imageAlt: "Sophie Martin"
            },
            {
              id: "6",
              name: "James Anderson",
              handle: "@james.photography",
              testimonial: "Beautiful interior, exceptional coffee, and the team treats every customer like family. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879504101-jr5icyq6.jpg",
              imageAlt: "James Anderson"
            }
          ]}
          title="What Our Customers Say"
          description="Real stories from people who love our coffee as much as we do"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={30}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase 
          faqs={[
            {
              id: "1",
              title: "What type of coffee beans do you use?",
              content: "We source premium, single-origin beans from ethical farmers across 15 countries. All our beans are fair trade certified and roasted in small batches to preserve their unique flavor profiles. We rotate our selection seasonally to showcase the best harvests."
            },
            {
              id: "2",
              title: "Do you offer online ordering or delivery?",
              content: "Yes! You can order ahead through our website or mobile app for pickup, or use our partner delivery service for in-area delivery. We also offer subscription boxes for our favorite blends delivered monthly to your door."
            },
            {
              id: "3",
              title: "Are your pastries and food items fresh daily?",
              content: "Absolutely. We partner with local bakers and suppliers to ensure all pastries, sandwiches, and snacks are made fresh each morning. We're proud to support our local food community."
            },
            {
              id: "4",
              title: "What are your WiFi and seating policies?",
              content: "We have unlimited free WiFi and plenty of comfortable seating perfect for work or casual meetups. We ask that you make a purchase and respect quiet hours from 8am-10am for our morning regulars who need focus time."
            },
            {
              id: "5",
              title: "Do you offer private events or catering?",
              content: "Yes! We host private events and offer catering services. Contact our team for details about capacity, menu options, and pricing. We love hosting corporate meetings, book clubs, and celebrations."
            },
            {
              id: "6",
              title: "Can I customize my drink order?",
              content: "Of course! Our baristas love creating custom drinks. We can adjust milk options, sweetness levels, temperature, and even create entirely new beverages. Tell us what you're in the mood for!"
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee, menu, and services"
          tag="Help & Info"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline 
          text="Join Our Coffee Community"
          animationType="entrance-slide"
          inputPlaceholder="Enter your email for updates and offers"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia 
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765879505531-wfsxawom.jpg"
          imageAlt="Brew Haven coffee shop ambiance"
          columns={[
            {
              title: "Hours",
              items: [
                {label: "Monday - Friday: 6am - 8pm"},
                {label: "Saturday: 7am - 9pm"},
                {label: "Sunday: 8am - 7pm"}
              ]
            },
            {
              title: "Location",
              items: [
                {label: "123 Coffee Lane"},
                {label: "Downtown District"},
                {label: "Phone: (555) 123-4567"},
                {label: "Email: hello@brewhaven.com"}
              ]
            },
            {
              title: "Menu",
              items: [
                {label: "Coffee", href: "#menu"},
                {label: "Pastries", href: "#menu"},
                {label: "Lunch Items", href: "#menu"},
                {label: "Catering", href: "#catering"}
              ]
            }
          ]}
          logoText="Brew Haven"
          copyrightText="© 2024 Brew Haven Coffee. All rights reserved."
          logoWidth={120}
          logoHeight={40}
        />
      </div>
    </ThemeProvider>
  );
}