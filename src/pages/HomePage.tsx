import SplitScreen from '../components/SplitScreen/SplitScreen';
import ActionCallBlock from '../components/ActionCallBlock/ActionCallBlock';
import ThreeTypesOfDrones from '../components/ThreeTypesOfDrones/ThreeTypesOfDrones';
import CustomizeDrone from '../components/Customize Drone/CustomizeDrone';

import Reviews from '../components/Reviews/Reviews';
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <SplitScreen />
      <ThreeTypesOfDrones />
      <CustomizeDrone />
      <ActionCallBlock />
      <Reviews />
    </>
  );
};

export default HomePage;
