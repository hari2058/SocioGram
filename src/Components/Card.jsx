import { PostUser } from "../stores/postStore";
import { Button } from "./Button";

export const Card = () => {
    
  return (
    <>
      <h1 className="text-2xl font-bold mb-5 text-center">Users List</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {PostUser.map((u) => (
          <div
            key={u.id}
            className="border bg-[rgb(123,154,145)] p-5 w-64 rounded-3xl shadow-xl hover:shadow-black transition"
          >
            <div className="flex justify-center">
            <img className=" rounded-full border-2 border-red-500" src={u.image} alt="" />
            </div>
            <h2 className="text-lg text-white font-semibold">{u.name}</h2>
            <p className="text-white">{u.education}</p>
            <p className="text-white">{u.occupation}</p>
            <div className="flex gap-1">
                <Button text="Add Friend"/>
                <Button text="Remove"/>

            </div>

          </div>
        ))}
      </div>
    </>
  );
};
