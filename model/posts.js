module.exports = {
    posts: [
        {
            id: 'dgfhjso',
            title: 'teste do mural',
            description: 'Descrição do teste'
        },
    ],
    
    getAll() {
        return this.posts;s
    },

    newPost(title, description) {
        this.posts.push({
            id: generateID(), title, description
        });
    },

    deletePost(id){},
}

function generateID() {
    return Math.random().toString(36).substring(2, 9);
}