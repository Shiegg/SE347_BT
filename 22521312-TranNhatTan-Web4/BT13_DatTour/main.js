document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Ngăn form không submit mặc định
    event.preventDefault(); 

    // Lấy giá trị của các trường nhập
    const fullName = document.getElementById('fullName').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const tour = document.getElementById('tour').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Kiểm tra nếu tất cả các trường bắt buộc đều đã nhập
    if (fullName !== "" && address !== "" && phone !== "" && tour !== "" && adults !== "" && children !== "") {
        // Nếu hợp lệ, hiển thị thông báo thành công
        document.getElementById('successMessage').style.display = 'block';
    } else {
        // Nếu có trường trống, cảnh báo người dùng
        alert('Vui lòng điền đầy đủ thông tin trước khi gửi!');
    }
});