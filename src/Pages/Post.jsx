import { useState } from "react";
import { Button } from "../Components/Button";

export const Post = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text && !image) {
      alert("Please add text or image before posting!");
      return;
    }

    const oldPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now(),
      text,
      image,
    };

    localStorage.setItem("posts", JSON.stringify([newPost, ...oldPosts]));

    setText("");
    setImage(null);
    alert("Post created successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create Post</h2>

        {image && (
          <div className="mb-4">
            <img
              src={image}
              alt="Preview"
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind?"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <label className="cursor-pointer bg-blue-500 text-white rounded-xl p-3 text-center hover:bg-blue-600">
            Upload Image
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>

          <Button type="submit" text="Add Post" />
        </form>
      </div>
    </div>
  );
};
