const directoryService = {
    createDirectory: async (data: object, token: string) => {
        const res = await fetch('http://localhost:3001/api/directories/create', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return await res.json();
    },
    getById: async (directoryId: string) => {
        const res = await fetch(`http://localhost:3001/api/directories/${directoryId}`, {});

        return await res.json();
    }
}

export default directoryService;