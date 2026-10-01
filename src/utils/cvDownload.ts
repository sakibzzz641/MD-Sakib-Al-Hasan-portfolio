import { profileData } from '../data/profile';

/**
 * Downloads the latest CV PDF from the repository asset folder.
 * Uses an asynchronous fetch with cache: 'no-store' and a timestamp parameter to ensure that
 * whenever the CV PDF in the asset folder is updated or replaced, the downloaded file is always fresh.
 * Falls back gracefully to direct anchor link download if fetch/blob is blocked.
 */
export const downloadCvPdf = async (
  fileName: string = profileData.cv.fileName,
  downloadPath: string = profileData.cv.downloadPath
) => {
  try {
    const cacheBuster = `t=${Date.now()}`;
    const targetUrl = downloadPath.includes('?')
      ? `${downloadPath}&${cacheBuster}`
      : `${downloadPath}?${cacheBuster}`;

    const response = await fetch(targetUrl, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch CV PDF: status ${response.status}`);
    }

    const blob = await response.blob();
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
    console.warn('Fetch blob download fallback to direct anchor:', error);
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = downloadPath;
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
