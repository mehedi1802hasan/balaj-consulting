import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import UpdateModal from './UpdateModal';
import Navbar from '../../sharedComponent/Navbar';
import { AuthContext } from '../Login/Provider';

const ManageMyBooks = () => {
  const {user,loading} =useContext(AuthContext);
const [blogs,setBlogs]=useState([]);

const updateBlogs=()=>{
  fetch('http://localhost:5000/blogs')
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setBlogs(data)
  })
}
useEffect(()=>{
  updateBlogs()
},[])
 


  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/blogs/${item._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'The menu item has been deleted.',
                'success'
              );
            }

            ///---------fatching the data again after delete-------///
// refetch() 
updateBlogs()
          })
          .catch((error) => {
            console.error('Error deleting class:', error);
            Swal.fire(
              'Error',
              'An error occurred while deleting the menu.',
              'error'
            );
          });
      }
    });
  }

  const handleEdit = (item) => {
    console.log(item._id);
  }
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
    }, 1000);
 return () => clearTimeout(loadingTimeout);
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center mt-16 '><span className="loading loading-dots loading-xs"></span>
    <span className="loading h-32 loading-dots loading-sm bg-green-500"></span>
    <span className="loading loading-dots loading-md bg-yellow-500"></span>
    <span className="loading loading-dots loading-lg bg-red-500"></span>
    </div>;
  }

  return (
    <div className=''>
      <Navbar></Navbar>
<h4 className='text-center text-pink-500 text-3xl font-serif my-5'> Total Menu: {blogs.length}</h4>

      <div className="md:overflow-x-auto  md:w-9/12 lg:w-9/12 w-11/12 mx-auto">
        <table className="md:table ">
          {/* head */}
          <thead className=''>
            <tr className='md:text-lg font-serif text-black font-bold'>
              <th>
                #
              </th>
              <th>BlogImage</th>
              <th>Title</th>
              <th>AuthorName</th>
              <th>Profession</th>
              <th>Delete</th>
              <th className='text-xs '>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              blogs.map((item, i) => (
                <tr key={item._id} >
                  <th>
                    {i + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-7 h-7  md:w-12 md:h-12">
                          <img  src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      {/* <div>
                        <div className="font-bold">{item.title}</div>
                      </div> */}
                    </div>
                  </td>
                  <td className=''>
                 <span className='flex items-center gap-1'> {item.title}</span>
                  </td>
                  <td className=''>
                 <span className='flex items-center gap-1'> {item.authorName}</span>
                  </td>
                  <td className=''>
                 <span className='flex items-center gap-1'> {item.profession}</span>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item)} className=" text-red-500 lg:text-lg md:text-lg"><FaTrashAlt /></button>
                  </td>
                  <td><UpdateModal key={item.name} item={item} ></UpdateModal></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyBooks;