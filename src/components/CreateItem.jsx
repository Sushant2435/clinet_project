import React, { useState } from 'react';
import Group from '../assets/Images/Group.png';

const CreateItem = () => {
    const [formdata, setFormData] = useState({
        title: "",
        link: "",
        iconurl: "",
        tagname: "",
        category: "",
        description: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formdata));
    };

    const validateForm = (values) => {
        const errors = {};
        const regex = /\b(https?:\/\/|www\.)\S+\b/i;
        if (!values.title) {
            errors.title = "Title is required!";
        }
        if (!values.link) {
            errors.link = "Link is required!";
        } else if (!regex.test(values.link)) {
            errors.link = "This is not a valid url format";
        }
        if (!values.iconurl) {
            errors.iconurl = "Icon url is required!";
        } else if (!regex.test(values.iconurl)) {
            errors.iconurl = "This is not a valid icon url format";
        }
        if (!values.tagname) {
            errors.tagname = "Tag Name is required!";
        }
        if (!values.category) {
            errors.category = "Category is required!";
        }
        if (!values.description) {
            errors.description = "Description is required!";
        }
        return errors;
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-16 lg:px-20 xl:px-32 mt-10 lg:mt-32">
                <h1 className='font-semibold text-2xl sm:text-3xl pb-5 text-center '>Items Details</h1>
                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="title" className='font-semibold uppercase'>Item Title</label>
                        <input type="text" name="title" placeholder='Item Title' value={formdata.title} onChange={handleChange} className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-500" />
                        <p className='text-red-500'>{formErrors.title}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="link" className='font-semibold uppercase'>Link</label>
                        <input type="url" name="link" placeholder='Link' value={formdata.link} onChange={handleChange} className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-500" />
                        <p className='text-red-500'>{formErrors.link}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="iconurl" className='font-semibold uppercase'>Icon URL</label>
                        <input type="url" name="iconurl" placeholder='Icon URL' value={formdata.iconurl} onChange={handleChange} className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-500" />
                        <p className='text-red-500'>{formErrors.iconurl}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="tagname" className='font-semibold uppercase'>Tag Name</label>
                        <input type="text" name="tagname" placeholder='Tag Name' value={formdata.tagname} onChange={handleChange} className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-500" />
                        <p className='text-red-500'>{formErrors.tagname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="category" className='font-semibold uppercase'>Category</label>
                        <input type="text" name="category" placeholder='Category' value={formdata.category} onChange={handleChange} className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-500" />
                        <p className='text-red-500'>{formErrors.category}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="description" className='font-semibold uppercase'>Description</label>
                        <input type="text" name="description" placeholder='Description' value={formdata.description} onChange={handleChange} className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-gray-500' />
                        <p className='text-red-500'>{formErrors.description}</p>
                    </div>

                    <button type='submit' className='bg-blue-400 w-full sm:w-1/2 lg:w-1/3 mx-auto font-semibold rounded-xl p-2 text-lg'>Create</button>
                </form>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <img src={Group} alt="Illustration" className='object-cover w-full h-full' />
            </div>
        </div>
    );
};

export default CreateItem;
