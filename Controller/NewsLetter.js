import NewsLetter from '../Model/NewsLetter.js'
export const getNewsLetter = async (req, res) => {
    try {
        const {email } = req.body;
        console.log(email)
        const newsLetter = new NewsLetter({email})
        await newsLetter.save()
        res.status(201).json({ message: 'Subscription successful!' });
    }catch(err){
    res.status(400).json({message: 'Error Occured'})}
}