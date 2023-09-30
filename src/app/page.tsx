import Links from "@/components/Links";
import { delay } from "@/utils/delay";

const HomePage = async () => {
  await delay(1000);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
