import express from 'express'
import { News } from '../models/news.model.js';
import { Project } from '../models/projects.model.js';


const router = express.Router()

router.post('/posts', async (req, res) => {

    const date = new Date()

    const post = new News({
        title: req.body.title,
        content: req.body.content,
        dateCreated: date.toDateString()
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/posts', async (req, res) => {
    try {
        const posts = await News.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


router.get('/posts/:postId', async (req, res) => {

    try {
        const { postId } = req.params
        const post = await News.findOne({postId});
        res.json(post);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


router.post('/projects', async (req, res) => {
    const project = new Project({
        location: req.body.location,
        // content: req.body.content
    });

    try {
        const newPost = await project.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find()
        res.json(projects)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.get('/projects/:projectId', async (req, res) => {

    try {
        const { projectId } = req.params
        const project = await Project.findOne({ projectId })

        res.json(project)
    } catch (error) {
        console.log("Error getting projects", error.message);
        res.status(500).json({
            success: false,
            message: "An error Occured while getting project"
        })
        
    }
})

export default router