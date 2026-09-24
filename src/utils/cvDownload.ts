import { profileData } from '../data/profile';
import { cvBase64Pdf } from '../data/cvBase64';

/**
 * Robust CV PDF downloader that works universally in iframes and standard browsers.
 * Uses embedded standardized PDF data so it never 404s or downloads an HTML error page.
 */
export const downloadCvPdf = (fileName: string = profileData.cv.fileName) => {
  try {
    // Decode base64 to binary byte array
    const binaryString = window.atob(cvBase64Pdf);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = blobUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();

    setTimeout(() => {
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);
    }, 15000);
  } catch (error) {
    console.error('Blob download failed, falling back to direct URL:', error);
    // Fallback to direct anchor link
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = profileData.cv.downloadPath;
    anchor.download = fileName;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => {
      document.body.removeChild(anchor);
    }, 1000);
  }
};
