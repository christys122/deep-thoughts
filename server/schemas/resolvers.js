const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
        
            return Thought.find(params).sort({ createdA: -1 });
        },
            thought: async (parent, { _id }) => {
                return Thought.findOne({ _id });
            },
        
            //get all users
            users: async () => {
                return User.find()
                .select('-_v -password')
                .populate('friends')
                .populate('thoughts');
            },
            //get users by username
            user: async (parent, { username }) => {
                return User.findOne({ username })
                .select('-_v -password')
                .populate('friends')
                .populate('thoughts');
            },
             
        },        
}


module.exports = resolvers;