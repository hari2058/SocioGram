import { useEffect, useState } from "react";

export const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Bookmarked Posts</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">No bookmarks yet.</p>
      ) : (
        bookmarks.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-md mb-5"
          >
            {post.image && (
              <img
                src={post.image}
                alt="Bookmarked Post"
                className="w-full h-60 object-cover rounded-xl mb-3"
              />
            )}
            {post.text && <p className="text-gray-700">{post.text}</p>}
          </div>
        ))
      )}
    </div>
  );
};
