import axios from 'axios';

export async function generateCraiyonImage(prompt) {
  try {
    const response = await axios.post(
      'https://api.craiyon.com/generate',
      { prompt }
    );

    // Response contains images base64 encoded in response.data.images (array of strings)
    // Return the first image as a data URL
    if (response.data && response.data.images && response.data.images.length > 0) {
      return 'data:image/png;base64,' + response.data.images[0];
    } else {
      throw new Error('No images returned from Craiyon');
    }
  } catch (error) {
    console.error('Error generating image from Craiyon:', error);
    throw error;
  }
}
