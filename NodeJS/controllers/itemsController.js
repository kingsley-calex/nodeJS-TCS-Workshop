let items = []; // In-memory data store
let nextId = 1; // Simple ID counter

// Create (POST)
exports.createItem = (req, res) => {
    try {
        let newItem = {id : nextId++, ...req.body}

        items.push(newItem)
        
        //  write logic to add to the array 

        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error });
    }
};

// Read/View (GET)
exports.getItems = (req, res) => {
    try {
       

        // write logic to return all item
        res.status(200).json(items);

        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

// Get by ID (GET)
exports.getItemById = (req, res) => {
    try {
        
        const itemId = parseInt(req.params.id, 10);
        const data = items.find(info=> info.id === itemId);

        if(!data)
        {
            res.status(400).json({message : "No data found"});
        }
        // write items to find and return matched item
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error });
    }
};

// Update (PUT)
exports.updateItem = (req, res) => {
    try {
        const itemId = parseInt(req.params.id, 10);
        const index = items.findIndex(i => i.id === itemId);

        if (index === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }
        else{
            // Update the item with new data
            items[index] = { ...items[index], ...req.body };
    
            // write content to update the items based on id
    
    
            res.status(200).json(items[index]);
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};

// Delete (DELETE)
exports.deleteItem = (req, res) => {
    try {
        const itemId = parseInt(req.params.id, 10);
        const index = items.findIndex(i => i.id === itemId);

        if (index === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }
        else{
            items.splice(index, 1);
            res.status(200).json({ message: 'Item deleted successfully' });
        }
        // Remove the item from the array
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};
