export function downloadFile(filePath: string | undefined): void {
    if (!filePath) {
      console.error("Invalid file path provided for download.");
      return;
    }
  
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop() ?? "download"; // Default name if none
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

// import { saveAs } from 'file-saver';

// export function downloadFile(filePath: string | undefined): void {
//   if (!filePath) {
//     console.error("Invalid file path provided for download.");
//     // alert("Invalid file path provided for download.");
//     return;
//   }

//   const fileName = filePath.split("/").pop() ?? "download"; // Default name if none

//   try {
//     // alert(`Preparing to download: ${fileName}`);

//     // If the filePath is a URL, we use file-saver's saveAs function to trigger the download
//     if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
//       // alert(`Downloading file from URL: ${filePath}`);
//       saveAs(filePath, fileName);
//       // alert(`Download started for: ${fileName}`);
//     } else {
//       // If it's not a URL, create a Blob and save it
//       // alert("Downloading local content...");
//       const blob = new Blob([filePath], { type: 'application/octet-stream' });
//       saveAs(blob, fileName);
//       // alert(`Download started for: ${fileName}`);
//     }
//   } catch (error) {
//     console.error("Error in downloadFile function:", error);
//     // alert("An error occurred while trying to download the file.");
//   }
// }
