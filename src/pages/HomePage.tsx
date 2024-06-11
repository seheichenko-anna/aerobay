import SplitScreen from '../components/SplitScreen/SplitScreen';
import ActionCallBlock from '../components/ActionCallBlock/ActionCallBlock';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import ThreeTypesOfDrones from '../components/ThreeTypesOfDrones/ThreeTypesOfDrones';
import CustomizeDrone from '../components/Customize Drone/CustomizeDrone';

import Reviews from '../components/Reviews/Reviews';
import DroneShowcase from '../components/DroneShowcase/DroneShowcase';
const HomePage = () => {
  return (
    <>
      <DroneShowcase/>
      <SplitScreen />
      <ThreeTypesOfDrones />
      <CustomizeDrone />
      <HowItWorks />
      <ActionCallBlock />
      <Reviews />
    </>
  );
};

export default HomePage;
