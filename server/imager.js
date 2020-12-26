 var picgroub = ['i1.jpg','i2.jpg','i3.jpg','i4.jpg','i5.jpg','i6.jpg','i7.jpg','i8.jpg','i9.jpg','i10.jpg','i11.jpg','i12.jpg','i13.jpg','i14.jpg'];
 function random() {
  var num = Math.floor(Math.random() * 15) ;
  var bud = '/server/'.concat(picgroub[num])
  document.canvas.src = bud;
 }