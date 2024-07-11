// Event listener saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
            // Menggunakan AJAX untuk mengirim data ke skrip PHP saat halaman dimuat
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'visitor.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log('Data successfully saved.');
                    } else {
                        console.error('An error occurred:', xhr.status, xhr.statusText);
                    }
                }
            };
            xhr.send();
        });
