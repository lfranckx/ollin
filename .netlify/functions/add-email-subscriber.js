import axios from 'axios';

const handler = async (event, context) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const listId = process.env.REACT_APP_LIST_ID;

    const body = JSON.parse(event.body);
    console.log(body);
    const { email_address } = body;

    if (!email_address) {
        return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Please provide a valid email address' })
        }
    }

    try {
        const payload = {
            email_address,
            states: 'subscribed'
        }

        const { data } = await axios.post(`https://us14.api.mailchimp.com/3.0/lists/${listId}/members`, payload,
            {
                headers: {
                    Authorization: `Basic ${apiKey}`
                }
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

export {
    handler
}