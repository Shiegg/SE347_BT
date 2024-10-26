function GuiThongTin()
{
    if(txtTenDN.value==""||txtTenDN==null)
    {
        thongbao.innerText="Bạn chưa nhập tên đăng nhập";
        txtTenDN.focus();
        return false;
    }
    if(txtMk.value==""||txtMk==null)
    {
        thongbao.innerText="Bạn chưa nhập mật khẩu";
        txtMk.focus();
        return false;
    }
    if(txtTenDN.value=="Nhật Tân"&&txtMk.value=="123456")
    {
        alert("Chào bạn " + txtTenDN.value);
        return true;
    }
    else
    {
        thongbao.innerText="Thông tin đăng nhập không hợp lệ";
        txtTenDN.select();
        return false;
    }
}
function LamLai()
{
    thongbao.innerText="";
    txtTenDN.focus();
}