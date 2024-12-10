// import Form from '../Model/Form.js'
// export const form = async (req, res) => {
//     try {
//         const {Adult, Child, Date, Checkin } = req.body;
      
        
//         const form = new Form({Adult, Child, Date, Checkin})
//         await form.save()
//         return res.status(201).json({ message: "User registered successfully" });
// }catch(error){
//     res.status(400).json({message: 'Error Occured'})}
  
// }



import Form from '../Model/Form.js';

export const form = async (req, res) => {
  try {
    const { Adult, Child,CheckIn,CheckOut } = req.body;
    console.log("Received body:", req.body);

    // Validate required fields
    if (!Adult || !Child || !CheckIn || !CheckOut) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // // Parse and validate the date
    // const parsedDate = new Date(Date);
    // if (isNaN(parsedDate)) {
    //   return res.status(400).json({ message: "Invalid date format" });
      
    // }

    // Create and save the form
    const newForm = new Form({
      Adult,
      Child,
      CheckIn,
      CheckOut,
    });
console.log(newForm);

    const savedForm = await newForm.save();
    return res.status(201).json({ message: "Form submitted successfully", data: savedForm });
  } catch (err) {
    console.error("Error saving form:", err); // Log the error
    res.status(400).json({ message: "Error Occurred", error: err.message });
  }
};
