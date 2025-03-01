export const handleDownloadResume = async () => {
  try {
    const fileUrl =
      'https://drive.google.com/uc?export=download&id=1B_Y8yuKqnmZ-qWGWFkRWkC3WY_P_0rvw';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Ajay-Verma.pdf';

    document.body.appendChild(link);
    link.click();

    // Cleanup: removes the link
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};
