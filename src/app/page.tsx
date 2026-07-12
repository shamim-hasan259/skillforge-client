import CategoriesSection from "@/components/CategoriesSection";
import FeaturedCourses from "@/components/FeaturedCourse";
import Footer from "@/components/FooterLink";
import HeroSection from "@/components/HeroSection";
import LearningRoadmap from "@/components/LearningRoadmap.";
import PlatformFeatures from "@/components/PlatformFeature";
import TrustedTech from "@/components/TrustedTech";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustedTech />
      <FeaturedCourses />
      <CategoriesSection />
      <LearningRoadmap />
      <PlatformFeatures />
      <Footer />
    </>
  );
};

export default HomePage;
