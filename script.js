
document.addEventListener('DOMContentLoaded', function () {

    //download function
    function download() {
        const resume = document.querySelector('.resume-box');
        const options = {
            margin: 10,
            filename: 'My_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Ensure html2pdf is defined before attempting to use it
        if (typeof html2pdf !== 'undefined') {
            html2pdf().from(resume).set(options).save();
        } else {
            console.error('html2pdf is not defined. Make sure the library is properly loaded.');
        }
    }

    // Add an event listener
    const downloadButton = document.getElementById("btn");
    if (downloadButton) {
        downloadButton.addEventListener("click", download);
    } else {
        console.error('Download button not found.');
    }

});
