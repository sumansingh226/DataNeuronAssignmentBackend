export const fetchApiCounts = async () => {
    try {
        const response = await fetch(
            "https://datanueronapi.vercel.app/items/count"
        );
        return await response.json();
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

export const updateItemById = async (id: string) => {
    try {
        const response = await fetch(
            `https://datanueronapi.vercel.app/item/update/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Item name",
                    description: "Item description",
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to update item with ID ${id}`);
        }
        console.log(`Item with ID ${id} updated successfully`);
    } catch (error) {
        console.error("Error updating item:", error);
    }
};


export const addItem = async (newItem: { name: string, description: string }) => {
    try {
        const response = await fetch(
            `https://datanueronapi.vercel.app/items/add`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to add item`);
        }

        console.log(`Item added successfully`);
    } catch (error) {
        console.error("Error adding item:", error);
    }
};
