const Blog = require('../models/BlogModel');
const mongoose = require('mongoose');
const blog=require('../models/BlogModel')

// CREATE Blog
const createBlog = async (req, res) => {
  
    
    const { title, description, author } = req.body;
    try {
        
        const newdata= await new Blog({
            title,
            description,
            author
        })
        await newdata.save()
         res.status(201).json({ msg: "Blog created successfully", data: newdata });
         
        }
        // Validation
        // if (!title || !description || !author) {
        //     return res.status(400).json({ msg: "All fields are required" });
        // }
        
        // const newdata = await Blog.create({ title, description, author });
       
     catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ msg: "Server error" });
    }
}

// GET ALL Blogs
const getBlog = async (req, res) => {
    try {
        const getdata = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json({ msg: "All posts", data: getdata });
    } catch (error) {
        console.error('Get blogs error:', error);
        res.status(500).json({ msg: "Server error" });
    }
};

// UPDATE Blog
const updatepost = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Validate MongoDB ObjectId
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).json({ msg: 'Invalid post ID' });
        // }
        
        const updatedPost = await Blog.findByIdAndUpdate(
            id, 
            req.body, 
            { 
                new: true,
                runValidators: true 
            }
        );
        
        if (!updatedPost) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        
        res.status(200).json({ 
            msg: 'Post updated successfully', 
            data: updatedPost 
        });
    } catch (error) {
        console.error('Update post error:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// DELETE Blog
const deleteBlog = async (req, res) => {
       console.log("ghello");
    try {
       
        const { id } = req.params;
      
        
        // Validate MongoDB ObjectId
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).json({ msg: 'Invalid post ID' });
        // }
        
        const deletedata = await Blog.findByIdAndDelete(id);
        
        if (!deletedata) {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        
        res.status(200).json({ msg: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = {
    createBlog,
    getBlog,
    updatepost,
    deleteBlog
};