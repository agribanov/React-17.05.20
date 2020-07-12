import axios from 'axios';

export default axios.create({
    baseUrl: 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts',
    headers: {
        'Content-Type': 'application/json',
    },
});
