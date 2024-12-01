import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);

  // Fetch all posts
  const fetchPosts = async () => {
    setLoadingPosts(true);
    try {
      const response = await fetch("https://blog-budi.onrender.com/api/v1/getAllposts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  // Handle adding a new post
  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.description) {
      alert("Please fill in both title and description.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://blog-budi.onrender.com/api/v1/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert("Post added successfully!");
        setNewPost({ title: "", description: "" });
        fetchPosts(); // Refresh the list of posts
      } else {
        console.error("Error adding post:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding post:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a post
   

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="container px-4 mx-auto py-4">
      <div className="flex flex-col items-start space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">All Blog Posts</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            Browse the latest posts below.
          </p>
        </div>

        {/* Display all posts */}
        <div className="w-full">
          {loadingPosts ? (
            <p className="text-gray-500 dark:text-gray-300">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">No posts available.</p>
          ) : (
            <div className="w-full">
              {posts.map((post) => (
                <div key={post._id} className="mb-4">
                  <div className="w-full p-6 bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {post.description}
                    </p>
                  </div>
                  <hr className="border-gray-300 dark:border-gray-700" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form to add a new post */}
        <form
          onSubmit={handleAddPost}
          className="w-full p-6 border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        >
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Add a New Post</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter post title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                value={newPost.description}
                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter post description"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomePage;
