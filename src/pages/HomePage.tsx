import SplitScreen from '../components/SplitScreen/SplitScreen';
import ActionCallBlock from '../components/ActionCallBlock/ActionCallBlock';
import ThreeTypesOfDrones from '../components/ThreeTypesOfDrones/ThreeTypesOfDrones';
import Reviews from '../components/Reviews/Reviews';
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <SplitScreen />
      <ThreeTypesOfDrones />
      <ActionCallBlock/>
      <Reviews/>
    </>
  );
};

export default HomePage;
