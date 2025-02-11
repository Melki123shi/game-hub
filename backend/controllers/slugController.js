import generateSlug from "../helpers/generateslug.js";

const createSlug = (req, res) => {
    const { name } = req.body; 
    
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const slug = generateSlug(name);  
    res.json({ slug }); 
};

export default createSlug;