function showFrameListWeb() {
    document.getElementById("idFrame").src = "r.html",
    document.getElementById("idFrame").style.visibility = "visible",
    document.getElementById("idFrame").width = "98%"
}
function showFrameAndroid() {
    document.getElementById("idFrame").width = "40%"
}
function onUpload() {
    document.getElementById("idProgressBar").style.width = "100%",
    document.getElementById("idViews").style.visibility = "visible"
}
function showFrameAnalytics() {
    document.getElementById("idFrame").src = "sm.html",
    document.getElementById("idFrame").style.visibility = "visible",
    document.getElementById("idFrame").width = "98%"
}
function showFrameWeb() {
    document.getElementById("idFrame").width = "98%"
}
function showFrameKanban() {
    document.getElementById("idFrame").src = "page.html",
    document.getElementById("idFrame").style.visibility = "visible",
    document.getElementById("idFrame").width = "98%"
}
function showFormWeb() {
    document.getElementById("idFrame").src = "fo.html",
    document.getElementById("idFrame").style.visibility = "visible",
    document.getElementById("idFrame").width = "98%"
}
function ShowERP() {
    document.getElementById("erp").style.display = "initial",
    document.getElementById("btnAPI").style.display = "initial",
    document.getElementById("btnUpd").style.display = "none",
    document.getElementById("prN").value = "Manage Production order",
    document.getElementById("prN").disabled = !0,
    document.getElementById("check2").checked = !1,
    document.getElementById("bp").value = "Production order",
    document.getElementById("bp").disabled = !0,
    document.getElementById("api").style.visibility = "visible"
}

function clickWorkTemp() {
    document.getElementById("erp").style.display = "initial",
    document.getElementById("check2").checked = !1,
    document.getElementById("bp").value = "Production order",
    document.getElementById("bp").disabled = !0,
    document.getElementById("api").style.visibility = "visible"
}


function ShowAPI() {
    document.getElementById("api").style.visibility = "visible"
}
function ShowExcel() {
    document.getElementById("btnAPI").style.display = "none",
    document.getElementById("btnUpd").style.display = "initial",
    document.getElementById("check1").checked = !1,
    document.getElementById("prN").disabled = !1
}
function onB() {
    window.location.href = "index.html"
}
function onSUp() {
    window.location.href = "landingPageUp.html",
    document.getElementById("pah").value = "project Name" + document.getElementById("prN").value
}
