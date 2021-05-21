var i = 0,
  x,
  y,
  fl2 = 0,
  o,
  f,
  c = 0,
  fl = 0;

function clr() {
  document.frm.t1.value = 0;
  c = i = fl2 = 0;
}

function eq() {
  if (i == 0) {
  } else {
    calc();
    i = 0;
  }
}

function calc() {
  if (i == 0 && o != 5) {
    x = parseFloat(document.frm.t1.value);
    document.frm.t1.value = 0;
    i++;
    fl2 = 0;
  } else {
    switch (o) {
      case 1:
        if (fl == 0) {
        } else {
          x += parseFloat(document.frm.t1.value);
          document.frm.t1.value = x;
          c = 1;
        }
        fl = 0;
        break;

      case 2:
        if (fl == 0) {
        } else {
          x -= parseFloat(document.frm.t1.value);
          document.frm.t1.value = x;
          c = 1;
        }
        fl = 0;
        break;

      case 3:
        if (fl == 0) {
        } else {
          x *= parseFloat(document.frm.t1.value);
          document.frm.t1.value = x;
          c = 1;
        }
        fl = 0;
        break;

      case 4:
        if (fl == 0) {
        } else {
          x /= parseFloat(document.frm.t1.value);
          document.frm.t1.value = x;
          c = 1;
        }
        fl = 0;
        break;

      case 5:
        x = parseFloat(document.frm.t1.value) / 100;
        document.frm.t1.value = x;
        c = 1;
        o = 6;
        fl = 0;
        break;
    }
  }
}

function val(f) {
  if (document.frm.t1.value == "0" || c == 1) {
    if (f == ".") {
      document.frm.t1.value = "0.";
      c = fl2 = 0;
    } else {
      document.frm.t1.value = f;
      c = fl2 = 0;
    }
  } else {
    if (f != ".") {
      document.frm.t1.value += f;
    } else if (fl2 == 0) {
      document.frm.t1.value += f;
    }
  }
  fl = 1;
}

function neg() {
  y = parseFloat(document.frm.t1.value);
  document.frm.t1.value = 0 - y;
}

function bsp() {
  y = document.frm.t1.value;
  document.frm.t1.value = "";
  var a = y.length,
    b = 0;
  a--;
  if (a == 0 || (a == 1 && y[0] == "-")) {
    document.frm.t1.value = "0";
  } else {
    while (b < a) {
      document.frm.t1.value += y[b];
      b++;
    }
  }
}
