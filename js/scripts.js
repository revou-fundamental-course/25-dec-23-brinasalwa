function hitungLuas() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    const luas = 0.5 * alas * tinggi;

    var text1 = "L = 1/2 x a x t";
    var text2 = "L = 1/2 x " + alas + " x " + tinggi;
    document.getElementById("result").innerHTML = text1 + "<br>" + text2 + "<br>" + "L = " + luas;
  }


function hitungKeliling () {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);
    var keliling = sisi1 + sisi2 + sisi3;

    var text3 = "K = S1 + S2 + S3";
    var text4 = "K = " + sisi1 + " + " + sisi2 + " + " + sisi3 ;
    document.getElementById("hasil").innerHTML = text3 + "<br>" + text4 + "<br>" + "K = " + keliling;
}

function resetForm() {
    document.getElementById("luas-segitiga").reset();
    document.getElementById("result").innerHTML = "";
  }

  document.getElementById("button1").addEventListener("click", hitungLuas);
  document.getElementById("reset-button").addEventListener("click", resetForm);

function resetFormkel() {
    document.getElementById("keliling-segitiga").reset();
    document.getElementById("hasil").innerHTML = "";
}

document.getElementById("button2").addEventListener("click", hitungKeliling);
document.getElementById("reset-button2").addEventListener("click", resetFormkel);