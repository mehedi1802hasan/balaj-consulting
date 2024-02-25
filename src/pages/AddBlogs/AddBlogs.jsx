import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../../sharedComponent/Navbar";

const AddBlogs = () => {
  const [inputValues, setInputValues] = useState({
    image: "",
    title: "",
    subtitle: "",
    authorImage: "",
    authorName: "",
    profession: "",
    PublisherEmail: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const authorName = form.authorName.value;
    const authorImage = form.authorImage.value;
    const profession = form.profession.value;
    const subtitle = form.subtitle.value;
    const PublisherEmail = form.PublisherEmail.value;
    const addblog = {
      title,
      image,
      authorName,
      authorImage,
      profession,
      subtitle,
      PublisherEmail,
    };
    console.log(addblog);
    fetch("https://balaj-consulting-server.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addblog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Great!",
            text: "book Item Successfully Posted ",
            icon: "success",
            confirmButtonText: "Done",
          });

          setInputValues({
            image: "",
            title: "",
            subtitle: "",
            authorImage: "",
            authorName: "",
            profession: "",
            PublisherEmail: "",
          });
        }
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>

      <h4 className="text-center font-serif text-4xl mt-12">Add-Blog </h4>

      <form onSubmit={handleAddBook} className=" card-body">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:px-36 px-1 md:px-36">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blog-ImageURL</span>
            </label>
            <input
              type="text"
              name="image"
              onChange={handleInputChange} value={inputValues.image}
              placeholder="Enter your Product name"
              className="input input-bordered  p-8 rounded-2xl"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Blog-Title</span>
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValues.title}
              name="title"
              placeholder="enter product price"
              className="input input-bordered  p-8 rounded-2xl"
              defaultValue=""
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Subtitle</span>
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValues.subtitle}
              placeholder="enter product quantity"
              name="subtitle"
              className="input input-bordered  p-8 rounded-2xl"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Author-Image</span>
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValues.authorImage}
              placeholder="enter product quantity"
              name="authorImage"
              className="input input-bordered  p-8 rounded-2xl"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Authof-Name</span>
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValues.authorName}
              name="authorName"
              placeholder="Enter product image url"
              className="input input-bordered  p-8 rounded-2xl"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author-Title</span>
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              value={inputValues.profession}
              name="profession"
              placeholder="Enter product description"
              className="input input-bordered  p-8 rounded-2xl"
            />
          </div>
          {/**  hide this email field  */}
          <div className="form-control hidden">
            <label className="label">
              <span className="label-text">Publisher-Email</span>
            </label>
            <input
              type="text"
              name="PublisherEmail"
              placeholder="enter product price"
              className="input input-bordered  p-8 rounded-2xl"
              defaultValue={"user?.email"}
              required
            />
          </div>
          {/**  --------------------  */}
        </div>
        <div className="mt-6 form-control">
          <button className="btn  hover:bg-yellow-500 bg-orange-500 w-60 mx-auto text-black">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
