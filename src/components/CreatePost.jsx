import axios from "axios";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ setIsCreatePostOpen }) {
  const [title, setTitle] = useState();
  const [topic, setTopic] = useState();
  const [text, setText] = useState();
  const [isPublished, setIsPublish] = useState(true);
  const navigation = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        { title: title, topic: topic, text: text, isPublished: isPublished },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      navigation(`/posts/${response.data.post._id}`, { replace: true });
      return;
    } catch (err) {
      return err;
    }
  }

  return (
    <div className="w-[960px] p-4">
      <h1 className="mb-4 text-center text-xl font-semibold text-white">
        Create Post
      </h1>
      <IoClose
        className="absolute right-3 top-3 z-50 cursor-pointer text-4xl text-white"
        onClick={() => setIsCreatePostOpen(false)}
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="inputStyleDefault"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="topic"
          placeholder="Topic"
          className="inputStyleDefault"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          name="text"
          cols="30"
          rows="10"
          className="inputStyleDefault no-resize"
          placeholder="Content"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <select
          name="isPublished"
          value={isPublished}
          className="inputStyleDefault"
          onChange={(e) => setIsPublish(e.target.value)}
        >
          <option value={true}>Public</option>
          <option value={false}>Private</option>
        </select>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
