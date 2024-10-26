function ValidControl(ctrl,msg)
{
    if(ctrl.value==""||ctrl.value==null)
    {
        alert(msg);
        ctrl.focus();
        return false;
    }
    return true;
}
function ValidEmail()
{
    var apos = txtEmail.value.indexOf("@");

    var dpos = txtEmail.value.lastIndexOf(".");

    if(apos<1||dpos-apos<2)
    {
        alert("Email không hợp lệ");
        txtEmail.focus();
        return false;
    }
    return true;
}
function ValidForm()
{
    var kq = ValidControl(txtHoTen,"Bạn chưa nhập họ và tên");
    if(kq == true)
        kq = ValidControl(txtDiaChi,"Bạn chưa nhập địa chỉ");
    if(kq == true)
        kq = ValidControl(txtEmail,"Bạn chưa nhập email");
    if(kq == true)
        kq=ValidEmail();
    if(kq == true)
        kq = ValidControl(txtDienThoai,"Bạn chưa nhập điện thoại");
    return kq;
}
function LamLai()
{
    txtHoTen.focus();
}