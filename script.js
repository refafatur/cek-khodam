document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;

    var khodamResult = cekKhodam(name, birthdate);
    document.getElementById('result').innerText = khodamResult;
});

function cekKhodam(name, birthdate) {
    // Algoritma cek khodam sederhana berdasarkan nama dan tanggal lahir.
    // Misalnya, menggunakan kombinasi huruf dan angka untuk menghasilkan hasil acak.
    var nameValue = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    var dateValue = birthdate.split('-').reduce((acc, part) => acc + parseInt(part), 0);
    
    var khodamIndex = (nameValue + dateValue) % khodamList.length;
    return `Khodam Anda adalah: ${khodamList[khodamIndex]}`;
}

var khodamList = [
    "Jin Al-Khidir",
    "Ratu Kidul",
    "Prabu Siliwangi",
    "Jaka Tingkir",
    "Nyai Roro Kidul",
    "Sunan Kalijaga",
    "Patih Gajah Mada",
    "Sri Sultan Agung",
    "Wali Songo",
    "Mbah Semar"
];
