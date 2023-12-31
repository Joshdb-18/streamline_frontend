import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      // Make a POST request to the backend reset password endpoint
      const response = await axios.post('https://backend.devnetwork.tech/api/v1/request-new-email/', {
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-From': 'www.app.devnetwork.tech',
        },
      });

      // Handles the response from the backend API
      const responseData = response.data;

      if (responseData.success) {
        // Return a response indicating success
        return res.status(200).json({ success: true });
      } else {
        // Return a response indicating an error
        return res.status(500).json({ error: responseData.message });
      }
    } catch (error) {
      // Handle errors that occur during the password reset process
      console.error(error);

      // Return a response indicating an error
      return res.status(500).json({ error: 'An error occurred during new email verification request.' });
    }
  }

  // Return a response for unsupported HTTP methods
  return res.status(405).json({ error: 'Method Not Allowed' });
}