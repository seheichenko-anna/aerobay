import SplitScreen from '../components/SplitScreen/SplitScreen';
import ActionCallBlock from '../components/ActionCallBlock/ActionCallBlock';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import ThreeTypesOfDrones from '../components/ThreeTypesOfDrones/ThreeTypesOfDrones';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <SplitScreen />
      <ThreeTypesOfDrones />
      <HowItWorks />
      <ActionCallBlock />
    </>
  );
};

export default HomePage;
