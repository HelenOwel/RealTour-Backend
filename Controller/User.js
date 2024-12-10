// // controllers/userController.mjs
// import User from "../Model/User.js";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export const signUp = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     console.log(name, email, password);
//     // Check if the email is already registered
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server Error" });
//   }
// };



// export const signIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(email, password);

//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Check password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user._id }, "JQULYSXL12345", {
//       expiresIn: "1h",
//     });

//     return res.status(200).json({ token });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server Error" });
//   }
// };


// import jwt from "jsonwebtoken"; // Uncomment for JWT usage




import User from "../Model/User.js";
import bcrypt from "bcrypt";

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token for the user (if using JWT)
    const token = jwt.sign({ userId: user._id }, "JQULYSXL12345", { expiresIn: "1h" });

    // Send the token in the response
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


export const signUp = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);
  
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // Correct bcrypt hashing
  
      // Create a new user with hashed password
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server Error" });
    }
  };
