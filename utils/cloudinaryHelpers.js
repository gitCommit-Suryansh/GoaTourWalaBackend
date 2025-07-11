// utils/cloudinaryHelpers.js
function getPublicIdFromUrl(url) {
    try {
      const parts = url.split('/');
      const folderIndex = parts.findIndex((part) => part === 'upload') + 1;
      const publicIdWithExtension = parts.slice(folderIndex).join('/');
      const publicId = publicIdWithExtension.replace(/\.[^/.]+$/, ''); // remove file extension
      return publicId;
    } catch {
      return null;
    }
  }
  
  module.exports = { getPublicIdFromUrl };
  