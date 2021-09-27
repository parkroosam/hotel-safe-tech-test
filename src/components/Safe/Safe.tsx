import Display from "./Display";
import Indicator from "./Indicator";
import NumPad from "./NumPad";

const Safe = () => {
  return (
    <div>
      <NumPad />
      <Display />
      <Indicator />
    </div>
  );
};

export default Safe;
