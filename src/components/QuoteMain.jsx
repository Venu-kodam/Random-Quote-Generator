import { useState} from 'react'
import axios from 'axios'
import Button from './Button'
const QuoteMain = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const HandleButton = () => {
            //fetching the quotedata
            const Fetchdata = async () => {
                try {
                    const response = await axios.get('https://api.quotable.io/random')
                    console.log(response);
                    setQuote(response.data.content)
                    setAuthor(response.data.author)
                } catch (error) {
                    console.error(error);
                }
            }
            //calling the fetchData function
            Fetchdata()
    }
    return (
        <div className='quote-box'>
            <h1>Quote Generator</h1>
            <blockquote className='quote'>{quote}</blockquote>
            <p className='author'>{author}</p>
            <Button value='New Quote' onClick={HandleButton} />
        </div>
    )
}

export default QuoteMain