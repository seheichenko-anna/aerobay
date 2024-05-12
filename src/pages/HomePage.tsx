import SplitScreen from '../components/SplitScreen/SplitScreen';
import ActionCallBlock from '../components/ActionCallBlock/ActionCallBlock';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import ThreeTypesOfDrones from '../components/ThreeTypesOfDrones/ThreeTypesOfDrones';
import Reviews from '../components/Reviews/Reviews';
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <SplitScreen />
      <ThreeTypesOfDrones />
      <HowItWorks />
      <ActionCallBlock/>
      <Reviews/>
    </>
  );
};

export default HomePage;
