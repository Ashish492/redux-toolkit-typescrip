import {
  ReactEventHandler,
  ReactFragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppDispatch } from "../app";
import { addPost } from "../features";
import { Post, PostForm } from "../interface";
import { nanoid } from "@reduxjs/toolkit";
import { useGetUser } from "../hook/useGetUserHook";

type Props = {};

const AddPost = (props: Props) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<PostForm>({} as PostForm);
  const users = useGetUser();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void =>
    setFormData(data => ({ ...data, [event.target.name]: event.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost(formData));
    alert("post added");
  };
  return (
    <>
      <p className="h5">Add post</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="title"
            className="form-control"
            id="title"
            value={formData.title}
            aria-describedby="titleHelp"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            content
          </label>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="content"></label>
          <select name="user" onChange={handleChange} className="form-select">
            {users.map(user => (
              <option value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddPost;
