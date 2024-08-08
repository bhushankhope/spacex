import './App.css';
import SpaceXRocket from './assets/images/rocket.svg';
import CheckList from './components/checklist/CheckList';
import Stats from './components/stats/Stats';
import { checkListData, newStatsData, statsData } from './utils/utils';

function App() {
  return (
    <>
      <section className="main relative grid grid-cols-[25%_50%_25%]">
        <div className="flex flex-col gap-12 pt-24 ml-14 w-fit">
          {checkListData.map((c) => {
            return <CheckList key={c.title} checklist={c}></CheckList>;
          })}
        </div>
        <div className="relative">
          <img
            src={SpaceXRocket}
            alt="Image of SpaceX Rocket"
            className="absolute bottom-20 left-[20%]"
          />
        </div>
        <div className="flex flex-col gap-24">
          <div className="pt-24">
            {statsData.map((data) => {
              return <Stats key={data.title} stats={data}></Stats>;
            })}
          </div>
          <div>
            {newStatsData.map((data) => {
              return <Stats key={data.title} stats={data}></Stats>;
            })}
          </div>
        </div>
        <div className="console"></div>
      </section>
    </>
  );
}

export default App;
