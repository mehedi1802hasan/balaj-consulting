import React from 'react';
import Swal from 'sweetalert2';
import { FaRegEdit } from 'react-icons/fa';

const UpdateModal = ({ item }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const subtitle = form.subtitle.value;
    const authorImage = form.authorImage.value;
    const authorName = form.authorName.value;
    const profession = form.profession.value;
   console.log("id...",item._id)
    console.log(image,title,subtitle, authorImage, authorName,profession);
    const addblog={
      image,title,subtitle, authorImage, authorName,profession
        }
        fetch(`http://localhost:5000/blogs/${item._id}`, {
          method: "PUT",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(addblog)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if (data.modifiedCount > 0) {
              // refetch();
              Swal.fire({
                  title: 'Well-done!!',
                  text: 'Updated successfully ',
                  icon: 'success',
                  confirmButtonText: 'Okay'
              })
          }
      })
      


  };

  const closeModal = () => {
    const modal = document.getElementById(`my_modal_4-${item._id}`);
    modal.close(); // Close the dialog
  };

  return (
    <div>
       <button
        className=" text-lg text-green-500"
        onClick={() => document.getElementById(`my_modal_4-${item._id}`).showModal()}
      >
       <FaRegEdit/>
      </button>
      <dialog id={`my_modal_4-${item._id}`} className="modal">
        <div className="modal-box">
        <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
             X
            </button>
          <form onSubmit={handleSubmit} method="dialog">
           
           <div className='md:flex lg:flex gap-4'>
           <div className="form-control">
              <label className="label">
                <span className="label-text">BlogImage</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter BlogImage"
                className="input input-bordered rounded-2xl"
                defaultValue={item.image}
                required   />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">BlogTitle</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter BlogTitle"
                className="input input-bordered rounded-2xl"
                defaultValue={item.title}
                required  />
            </div>
           </div>
           <div className='md:flex lg:flex gap-4 '>
           <div className="form-control">
              <label className="label">
                <span className="label-text">subTiltle</span>
              </label>
              <input
                type="text"
                name="subtitle"
                placeholder="Enter the subTiltle"
                className="input input-bordered rounded-2xl"
                defaultValue={item.subtitle}
                required   />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input
                type="text"
                name="authorName"
                placeholder="Enter Author name"
                className="input input-bordered rounded-2xl"
                defaultValue={item.authorName}
                required    />
            </div>
           </div>




           <div className='md:flex lg:flex gap-4 '>
           <div className="form-control">
              <label className="label">
                <span className="label-text">AuthorProfession</span>
              </label>
              <input
                type="text"
                name="profession"
                placeholder="Enter AuthorProfession"
                className="input input-bordered rounded-2xl"
                defaultValue={item.profession}
                required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">AuthorImage</span>
              </label>
              <input
                type="text"
                name="authorImage"
                placeholder="Enter AuthorImage"
                className="input input-bordered rounded-2xl"
                defaultValue={item.authorImage}
             required />
            </div>
           </div>



            <div className="form-control hidden">
              <label className="label">
                <span className="label-text">Id</span>
              </label>
              <input
                type="text"
                name="id"
                placeholder="Enter your id name"
                className="input input-bordered rounded-2xl"
                defaultValue={item._id}
              />
            </div>
            <div className="flex justify-center items-center">
              <button   onClick={closeModal} className="btn btn-outline btn-secondary my-4">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;