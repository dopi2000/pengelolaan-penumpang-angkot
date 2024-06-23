var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                alert('Nama ' + namaPenumpang + ' sudah ada di dalam angkot');
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var kurangPenumpang = function(index, penumpang) {
    if (penumpang[index] !== undefined) {
        penumpang[index] = undefined;
        updatePenumpangList();
    }
}

function updatePenumpangList() {
    var list = document.getElementById("penumpangList");
    list.innerHTML = "";
    for (var i = 0; i < penumpang.length; i++) {
        if (penumpang[i] !== undefined) {
            var li = document.createElement("li");
            li.style.color = "darkblue";
            li.style.fontSize = "30px";
            li.className = "penumpang-item";

            var span = document.createElement("span");
            span.textContent = penumpang[i];

            var hapusBtn = document.createElement("span");
            hapusBtn.textContent = "❌";
            hapusBtn.className = "hapus-btn";
            hapusBtn.onclick = (function(index) {
                return function() {
                    kurangPenumpang(index, penumpang);
                }
            })(i);

            li.appendChild(span);
            li.appendChild(hapusBtn);
            list.appendChild(li);
        }
    }
}

function tambahPenumpangPrompt() {
    var namaPenumpang = prompt("Masukkan nama penumpang:");
    if (namaPenumpang) {
        penumpang = tambahPenumpang(namaPenumpang, penumpang);
        updatePenumpangList();
    }
}