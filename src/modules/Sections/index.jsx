import { Card } from "../../component";
import placeHolder from "../../assets/img/360.png";

const sectionList = [
  {
    title: "Sections One",
    logo: placeHolder,
    url: "/one",
  },
  {
    title: "Sections Two",
    logo: placeHolder,
    url: "/two",
  },
  {
    title: "Sections Three",
    logo: placeHolder,
    url: "/three",
  },
  {
    title: "Sections Four",
    logo: placeHolder,
    url: "/four",
  },
];

const Sections = () => {
  return (
    <div className="p-8 sm:p-16 pt-24 sm:pt-24 min-h-screen flex flex-col justify-between dark:text-white">
      <div className="grid grid-cols-2 grid-rows-1 md:gap-8 sm:gap-6 gap-5 max-w-3xl my-10 mx-auto">
        {sectionList.map((club, index) => (
          <div
            key={index}
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
          >
            <Card logo={club.logo} title={club.title} url={club.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
