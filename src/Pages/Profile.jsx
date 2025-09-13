import { Button } from "../Components/Button";
import { Card } from "../Components/Card";

export const Profile = () => {
  return (
    <>
      <div className="h-150 flex flex-col items-center mt-10 ">
      <div className="relative w-full h-56 md:w-200 md:h-72 bg-gray-300 ">
        <img
          src="haricover.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />

        <div className="absolute left-20 -bottom-16 transform -translate-x-1/2">
          <img
            src="hari.jpg"
            alt=""
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>

      

      <div className="mt-15 max-w-3xl w-full bg-white rounded-xl shadow-md p-5">
        <h1 className="font-bold text-2xl">Hari Bhandari</h1>
        <p>100K Followers</p>
        <div className="flex gap-4 mt-1 ">
          <Button text="Add To Story"/>
          <Button text="Manage Post"/>
          <Button text="....."/>
        </div>
        <h2 className="text-lg font-semibold mb-3">About</h2>
        <p className="text-gray-700">
          Hi, I am Hari! I work as a web developer and I am currently
          studying bsc.csit. This is my profile page built with React +
          Tailwind.
        </p>
      </div>
    </div>
      <div className="mt-6 mb-10 pl-80 pr-80">
        <Card />
      </div>
    </>
  );
};
