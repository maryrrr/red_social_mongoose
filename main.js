// async getLogUser(req, res) {
    //     try {
    //         const loggedUsers = await User.find({ isLoggedIn: true });
    //         console.log(loggedUsers);
    //         const userNames = loggedUsers.map(user => user.name);
    //         res.send(userNames);
    //         } catch (error) {
    //         console.error(error);
    //         }
    // },

//     async logout(req, res) {

//         try {
//             // const user = req.user
//             // user.isLoggedIn = false
//             await User.findByIdAndUpdate(req.user._id, {
//             $pull: { tokens: req.headers.authorization },

//         });
//         // await user.save()
//         res.send({ message: "Disconnected successfully" });
//         } catch (error) {
//         console.error(error);
//         res.status(500).send({
//         message: "There was a problem trying to disconnect the user",
//     });
// }
// },


// isLoggedIn: { type: Boolean, default: false }, add User.js models



// async getAll(req, res) {
//     try {
//       const users = await User.find({ tokens: { $exists: true, $not: { $size: 0 } } });
//       res.send(users);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ message: 'There was a problem retrieving the authorized users' });
//     }
//   }
  
// PORT = 3000

// MONGO_URI = 'mongodb+srv://sagader_30:sfJVkGTW1RrjPP6T@cluster0.rpnfkvh.mongodb.net/test?retryWrites=true&w=majority'

// JWT_SECRET = "bajolluvia"