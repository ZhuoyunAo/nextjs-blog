// Creating a simple API endpoint - as Serverless Functions (also known as Lambdas)
export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
}
// req is an instance of http.IncomingMessage, plus some pre-built middlewares 
// res is an instance of http.ServerResponse, plus some helper functions
