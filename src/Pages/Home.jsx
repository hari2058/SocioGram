import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);

    const savedLikes = JSON.parse(localStorage.getItem("likedPosts")) || [];
    setLikedPosts(savedLikes);
  }, []);

  const handleLike = (id) => {
    if (likedPosts.includes(id)) {
      alert("You already liked this post!");
      return;
    }

    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
    );

    const updatedLikedPosts = [...likedPosts, id];

    setPosts(updatedPosts);
    setLikedPosts(updatedLikedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
  };

  const handleDislike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id && (post.likes || 0) > 0
        ? { ...post, likes: post.likes - 1 }
        : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleBookmark = (post) => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const alreadyBookmarked = savedBookmarks.find((b) => b.id === post.id);

    if (alreadyBookmarked) {
      alert("Post already bookmarked!");
      return;
    }

    localStorage.setItem("bookmarks", JSON.stringify([post, ...savedBookmarks]));
    alert("Post bookmarked!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Home Feed</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Go create one!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-md mb-5"
          >
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full h-60 object-cover rounded-xl mb-3"
              />
            )}
            {post.text && <p className="text-gray-700 mb-3">{post.text}</p>}

            <div className="flex justify-between items-center">
              <button
                onClick={() => handleLike(post.id)}
                className={`px-3 py-1 rounded-lg text-white ${
                  likedPosts.includes(post.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                 Like ({post.likes || 0})
              </button>

              <button
                onClick={() => handleDislike(post.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                 Dislike
              </button>

              <button
                onClick={() => handleBookmark(post)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
              >
                 Bookmark
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
