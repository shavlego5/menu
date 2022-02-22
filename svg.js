function resizeScreen() {
  //add width and height to svg
  let width = window.innerWidth + "px";
  let height = window.innerHeight + "px";
  document.getElementById("top-svg").setAttribute("width", width);
  document.getElementById("top-svg").setAttribute("height", height);
  document.getElementById("background1").setAttribute("width", width);
  document.getElementById("background1").setAttribute("height", height);

  //add ids to polylines
  for (let i = 0; i < 20; i++) {
    document
      .getElementsByClassName("top")
      [i].setAttribute("id", "home-polyline" + i);
  }

  //points for polylines
  let point0 = [0, 0];
  let point1 = [0, (window.innerHeight * 10) / 100];
  let point2 = [0, (window.innerHeight * 20) / 100];
  let point3 = [0, (window.innerHeight * 30) / 100];
  let point4 = [0, (window.innerHeight * 40) / 100];
  let point5 = [0, (window.innerHeight * 50) / 100];
  let point6 = [0, (window.innerHeight * 60) / 100];
  let point7 = [0, (window.innerHeight * 70) / 100];
  let point8 = [0, (window.innerHeight * 80) / 100];
  let point9 = [0, (window.innerHeight * 90) / 100];
  let point10 = [0, window.innerHeight];
  let point11 = [(window.innerWidth * 45) / 100, 0];
  let point12 = [
    (window.innerWidth * 55) / 100,
    (window.innerHeight * 10) / 100
  ];
  let point13 = [
    (window.innerWidth * 45) / 100,
    (window.innerHeight * 20) / 100
  ];
  let point14 = [
    (window.innerWidth * 55) / 100,
    (window.innerHeight * 30) / 100
  ];
  let point15 = [
    (window.innerWidth * 45) / 100,
    (window.innerHeight * 40) / 100
  ];
  let point16 = [
    (window.innerWidth * 55) / 100,
    (window.innerHeight * 50) / 100
  ];
  let point17 = [
    (window.innerWidth * 45) / 100,
    (window.innerHeight * 60) / 100
  ];
  let point18 = [
    (window.innerWidth * 55) / 100,
    (window.innerHeight * 70) / 100
  ];
  let point19 = [
    (window.innerWidth * 45) / 100,
    (window.innerHeight * 80) / 100
  ];
  let point20 = [
    (window.innerWidth * 55) / 100,
    (window.innerHeight * 90) / 100
  ];
  let point21 = [(window.innerWidth * 45) / 100, window.innerHeight];
  let point22 = [window.innerWidth, 0];
  let point23 = [window.innerWidth, (window.innerHeight * 10) / 100];
  let point24 = [window.innerWidth, (window.innerHeight * 20) / 100];
  let point25 = [window.innerWidth, (window.innerHeight * 30) / 100];
  let point26 = [window.innerWidth, (window.innerHeight * 40) / 100];
  let point27 = [window.innerWidth, (window.innerHeight * 50) / 100];
  let point28 = [window.innerWidth, (window.innerHeight * 60) / 100];
  let point29 = [window.innerWidth, (window.innerHeight * 70) / 100];
  let point30 = [window.innerWidth, (window.innerHeight * 80) / 100];
  let point31 = [window.innerWidth, (window.innerHeight * 90) / 100];
  let point32 = [window.innerWidth, window.innerHeight];

  //creating polylines coordinates in variables
  let polyline0 =
    point0.toString() +
    " " +
    point11.toString() +
    " " +
    point12.toString() +
    " " +
    point1.toString() +
    " " +
    point0.toString();
  let polyline1 =
    point1.toString() +
    " " +
    point12.toString() +
    " " +
    point13.toString() +
    " " +
    point2.toString() +
    " " +
    point1.toString();
  let polyline2 =
    point2.toString() +
    " " +
    point13.toString() +
    " " +
    point14.toString() +
    " " +
    point3.toString() +
    " " +
    point2.toString();
  let polyline3 =
    point3.toString() +
    " " +
    point14.toString() +
    " " +
    point15.toString() +
    " " +
    point4.toString() +
    " " +
    point3.toString();
  let polyline4 =
    point4.toString() +
    " " +
    point15.toString() +
    " " +
    point16.toString() +
    " " +
    point5.toString() +
    " " +
    point4.toString();
  let polyline5 =
    point5.toString() +
    " " +
    point16.toString() +
    " " +
    point17.toString() +
    " " +
    point6.toString() +
    " " +
    point5.toString();
  let polyline6 =
    point6.toString() +
    " " +
    point17.toString() +
    " " +
    point18.toString() +
    " " +
    point7.toString() +
    " " +
    point6.toString();
  let polyline7 =
    point7.toString() +
    " " +
    point18.toString() +
    " " +
    point19.toString() +
    " " +
    point8.toString() +
    " " +
    point7.toString();
  let polyline8 =
    point8.toString() +
    " " +
    point19.toString() +
    " " +
    point20.toString() +
    " " +
    point9.toString() +
    " " +
    point8.toString();
  let polyline9 =
    point9.toString() +
    " " +
    point20.toString() +
    " " +
    point21.toString() +
    " " +
    point10.toString() +
    " " +
    point9.toString();
  let polyline10 =
    point22.toString() +
    " " +
    point11.toString() +
    " " +
    point12.toString() +
    " " +
    point23.toString() +
    " " +
    point22.toString();
  let polyline11 =
    point23.toString() +
    " " +
    point12.toString() +
    " " +
    point13.toString() +
    " " +
    point24.toString() +
    " " +
    point23.toString();
  let polyline12 =
    point24.toString() +
    " " +
    point13.toString() +
    " " +
    point14.toString() +
    " " +
    point25.toString() +
    " " +
    point24.toString();
  let polyline13 =
    point25.toString() +
    " " +
    point14.toString() +
    " " +
    point15.toString() +
    " " +
    point26.toString() +
    " " +
    point25.toString();
  let polyline14 =
    point26.toString() +
    " " +
    point15.toString() +
    " " +
    point16.toString() +
    " " +
    point27.toString() +
    " " +
    point26.toString();
  let polyline15 =
    point27.toString() +
    " " +
    point16.toString() +
    " " +
    point17.toString() +
    " " +
    point28.toString() +
    " " +
    point27.toString();
  let polyline16 =
    point28.toString() +
    " " +
    point17.toString() +
    " " +
    point18.toString() +
    " " +
    point29.toString() +
    " " +
    point28.toString();
  let polyline17 =
    point29.toString() +
    " " +
    point18.toString() +
    " " +
    point19.toString() +
    " " +
    point30.toString() +
    " " +
    point29.toString();
  let polyline18 =
    point30.toString() +
    " " +
    point19.toString() +
    " " +
    point20.toString() +
    " " +
    point31.toString() +
    " " +
    point30.toString();
  let polyline19 =
    point31.toString() +
    " " +
    point20.toString() +
    " " +
    point21.toString() +
    " " +
    point32.toString() +
    " " +
    point31.toString();

  //adding points with coordinates to all polylines
  let polylines = [];
  for (let i = 0; i < 20; i++) {
    polylines[i] = "polyline" + i;
    document
      .getElementById("home-polyline" + i)
      .setAttribute("points", eval(polylines[i]));
  }
  console.log(polylines);

  //transitionX value calculating
  leftOpen = (window.innerWidth * -55) / 100 + "px"; // placed here to change value avter changing screen size
  rightOpen = (window.innerWidth * 55) / 100 + "px";

  //back svg

  let pointT0 = [0, 0];
  let pointT1 = [window.innerWidth, 0];
  let pointT2 = [window.innerWidth, window.innerHeight];
  let pointT3 = [0, window.innerHeight];
  let pointT4 = [
    (window.innerWidth * 13) / 100,
    (window.innerHeight * 20) / 100
  ];
  let pointT5 = [
    (window.innerWidth * 28) / 100,
    (window.innerHeight * 19.5) / 100
  ];
  let pointT6 = [
    (window.innerWidth * 30) / 100,
    (window.innerHeight * 10) / 100
  ];
  let pointT7 = [(window.innerWidth * 46) / 100, 0];
  let pointT8 = [
    (window.innerWidth * 52) / 100,
    (window.innerHeight * 10) / 100
  ];
  let pointT9 = [(window.innerWidth * 78) / 100, 0];
  let pointT10 = [
    (window.innerWidth * 92) / 100,
    (window.innerHeight * 20) / 100
  ];
  let pointT11 = [
    (window.innerWidth * 78) / 100,
    (window.innerHeight * 28) / 100
  ];
  let pointT12 = [
    (window.innerWidth * 62) / 100,
    (window.innerHeight * 24) / 100
  ];
  let pointT13 = [
    (window.innerWidth * 40) / 100,
    (window.innerHeight * 28) / 100
  ];
  let pointT14 = [
    (window.innerWidth * 25) / 100,
    (window.innerHeight * 26) / 100
  ];
  let pointT15 = [
    (window.innerWidth * 25) / 100,
    (window.innerHeight * 30) / 100
  ];
  let pointT16 = [0, (window.innerHeight * 34) / 100];
  let pointT17 = [
    (window.innerWidth * 18) / 100,
    (window.innerHeight * 45) / 100
  ];
  let pointT18 = [
    (window.innerWidth * 34) / 100,
    (window.innerHeight * 45) / 100
  ];
  let pointT19 = [
    (window.innerWidth * 50) / 100,
    (window.innerHeight * 40) / 100
  ];
  let pointT20 = [
    (window.innerWidth * 66) / 100,
    (window.innerHeight * 36) / 100
  ];
  let pointT21 = [window.innerWidth, (window.innerHeight * 50) / 100];
  let pointT22 = [
    (window.innerWidth * 88) / 100,
    (window.innerHeight * 66) / 100
  ];
  let pointT23 = [
    (window.innerWidth * 76) / 100,
    (window.innerHeight * 52) / 100
  ];
  let pointT24 = [
    (window.innerWidth * 74) / 100,
    (window.innerHeight * 68) / 100
  ];
  let pointT25 = [
    (window.innerWidth * 66) / 100,
    (window.innerHeight * 64) / 100
  ];
  let pointT26 = [
    (window.innerWidth * 48) / 100,
    (window.innerHeight * 62) / 100
  ];
  let pointT27 = [
    (window.innerWidth * 44) / 100,
    (window.innerHeight * 60) / 100
  ];
  let pointT28 = [
    (window.innerWidth * 22) / 100,
    (window.innerHeight * 70) / 100
  ];
  let pointT29 = [
    (window.innerWidth * 10) / 100,
    (window.innerHeight * 70) / 100
  ];
  let pointT30 = [
    (window.innerWidth * 34) / 100,
    (window.innerHeight * 72) / 100
  ];
  let pointT31 = [
    (window.innerWidth * 42) / 100,
    (window.innerHeight * 86) / 100
  ];
  let pointT32 = [
    (window.innerWidth * 38) / 100,
    (window.innerHeight * 95) / 100
  ];
  let pointT33 = [
    (window.innerWidth * 54) / 100,
    (window.innerHeight * 72) / 100
  ];
  let pointT34 = [(window.innerWidth * 58) / 100, window.innerHeight];
  let pointT35 = [
    (window.innerWidth * 74) / 100,
    (window.innerHeight * 90) / 100
  ];

  let polylineBack11 =
    pointT0.toString() +
    " " +
    pointT4.toString() +
    " " +
    pointT16.toString() +
    " " +
    pointT0.toString();
  let polylineBack21 =
    pointT0.toString() +
    " " +
    pointT5.toString() +
    " " +
    pointT4.toString() +
    " " +
    pointT0.toString();
  let polylineBack31 =
    pointT4.toString() +
    " " +
    pointT5.toString() +
    " " +
    pointT16.toString() +
    " " +
    pointT4.toString();
  let polylineBack32 =
    pointT0.toString() +
    " " +
    pointT13.toString() +
    " " +
    pointT6.toString() +
    " " +
    pointT0.toString();
  let polylineBack22 =
    pointT0.toString() +
    " " +
    pointT6.toString() +
    " " +
    pointT7.toString() +
    " " +
    pointT0.toString();
  let polylineBack12 =
    pointT13.toString() +
    " " +
    pointT6.toString() +
    " " +
    pointT7.toString() +
    " " +
    pointT13.toString();
  let polylineBack33 =
    pointT16.toString() +
    " " +
    pointT14.toString() +
    " " +
    pointT13.toString() +
    " " +
    pointT16.toString();
  let polylineBack23 =
    pointT16.toString() +
    " " +
    pointT5.toString() +
    " " +
    pointT14.toString() +
    " " +
    pointT16.toString();
  let polylineBack13 =
    pointT5.toString() +
    " " +
    pointT14.toString() +
    " " +
    pointT13.toString() +
    " " +
    pointT5.toString();
  let polylineBack24 =
    pointT16.toString() +
    " " +
    pointT15.toString() +
    " " +
    pointT17.toString() +
    " " +
    pointT16.toString();
  let polylineBack34 =
    pointT15.toString() +
    " " +
    pointT28.toString() +
    " " +
    pointT17.toString() +
    " " +
    pointT15.toString();
  let polylineBack14 =
    pointT16.toString() +
    " " +
    pointT17.toString() +
    " " +
    pointT28.toString() +
    " " +
    pointT16.toString();
  let polylineBack25 =
    pointT15.toString() +
    " " +
    pointT13.toString() +
    " " +
    pointT18.toString() +
    " " +
    pointT15.toString();
  let polylineBack15 =
    pointT15.toString() +
    " " +
    pointT18.toString() +
    " " +
    pointT28.toString() +
    " " +
    pointT15.toString();
  let polylineBack35 =
    pointT28.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT18.toString() +
    " " +
    pointT28.toString();
  let polylineBack16 =
    pointT18.toString() +
    " " +
    pointT13.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT18.toString();
  let polylineBack17 =
    pointT16.toString() +
    " " +
    pointT28.toString() +
    " " +
    pointT29.toString() +
    " " +
    pointT16.toString();
  let polylineBack26 =
    pointT16.toString() +
    " " +
    pointT29.toString() +
    " " +
    pointT3.toString() +
    " " +
    pointT16.toString();
  let polylineBack36 =
    pointT29.toString() +
    " " +
    pointT28.toString() +
    " " +
    pointT3.toString() +
    " " +
    pointT29.toString();
  let polylineBack18 =
    pointT3.toString() +
    " " +
    pointT28.toString() +
    " " +
    pointT30.toString() +
    " " +
    pointT3.toString();
  let polylineBack37 =
    pointT3.toString() +
    " " +
    pointT30.toString() +
    " " +
    pointT31.toString() +
    " " +
    pointT3.toString();
  let polylineBack27 =
    pointT28.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT30.toString() +
    " " +
    pointT28.toString();
  let polylineBack19 =
    pointT30.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT31.toString() +
    " " +
    pointT30.toString();
  let polylineBack28 =
    pointT3.toString() +
    " " +
    pointT31.toString() +
    " " +
    pointT32.toString() +
    " " +
    pointT3.toString();
  let polylineBack110 =
    pointT3.toString() +
    " " +
    pointT32.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT3.toString();
  let polylineBack38 =
    pointT32.toString() +
    " " +
    pointT31.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT32.toString();
  let polylineBack29 =
    pointT26.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT31.toString() +
    " " +
    pointT26.toString();
  let polylineBack41 =
    pointT26.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT26.toString();
  let polylineBack39 =
    pointT26.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT31.toString() +
    " " +
    pointT26.toString();
  let polylineBack111 =
    pointT31.toString() +
    " " +
    pointT33.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT31.toString();
  let polylineBack210 =
    pointT31.toString() +
    " " +
    pointT33.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT31.toString();
  let polylineBack310 =
    pointT33.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT33.toString();
  let polylineBack211 =
    pointT13.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT19.toString() +
    " " +
    pointT13.toString();
  let polylineBack311 =
    pointT19.toString() +
    " " +
    pointT27.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT19.toString();
  let polylineBack112 =
    pointT13.toString() +
    " " +
    pointT19.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT13.toString();
  let polylineBack113 =
    pointT13.toString() +
    " " +
    pointT12.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT13.toString();
  let polylineBack212 =
    pointT13.toString() +
    " " +
    pointT12.toString() +
    " " +
    pointT9.toString() +
    " " +
    pointT13.toString();
  let polylineBack312 =
    pointT12.toString() +
    " " +
    pointT9.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT12.toString();
  let polylineBack313 =
    pointT13.toString() +
    " " +
    pointT8.toString() +
    " " +
    pointT9.toString() +
    " " +
    pointT13.toString();
  let polylineBack213 =
    pointT13.toString() +
    " " +
    pointT8.toString() +
    " " +
    pointT7.toString() +
    " " +
    pointT13.toString();
  let polylineBack114 =
    pointT7.toString() +
    " " +
    pointT8.toString() +
    " " +
    pointT9.toString() +
    " " +
    pointT7.toString();
  let polylineBack214 =
    pointT9.toString() +
    " " +
    pointT11.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT9.toString();
  let polylineBack314 =
    pointT20.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT11.toString() +
    " " +
    pointT20.toString();
  let polylineBack115 =
    pointT9.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT11.toString() +
    " " +
    pointT9.toString();
  let polylineBack215 =
    pointT20.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT25.toString() +
    " " +
    pointT20.toString();
  let polylineBack116 =
    pointT24.toString() +
    " " +
    pointT25.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT24.toString();
  let polylineBack315 =
    pointT24.toString() +
    " " +
    pointT25.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT24.toString();
  let polylineBack216 =
    pointT24.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT35.toString() +
    " " +
    pointT24.toString();
  let polylineBack117 =
    pointT24.toString() +
    " " +
    pointT35.toString() +
    " " +
    pointT2.toString() +
    " " +
    pointT24.toString();
  let polylineBack316 =
    pointT35.toString() +
    " " +
    pointT34.toString() +
    " " +
    pointT2.toString() +
    " " +
    pointT35.toString();
  let polylineBack42 =
    pointT24.toString() +
    " " +
    pointT22.toString() +
    " " +
    pointT2.toString() +
    " " +
    pointT24.toString();
  let polylineBack217 =
    pointT24.toString() +
    " " +
    pointT22.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT24.toString();
  let polylineBack317 =
    pointT22.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT2.toString() +
    " " +
    pointT22.toString();
  let polylineBack318 =
    pointT24.toString() +
    " " +
    pointT23.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT24.toString();
  let polylineBack118 =
    pointT24.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT23.toString() +
    " " +
    pointT24.toString();
  let polylineBack218 =
    pointT23.toString() +
    " " +
    pointT20.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT23.toString();
  let polylineBack219 =
    pointT9.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT10.toString() +
    " " +
    pointT9.toString();
  let polylineBack119 =
    pointT9.toString() +
    " " +
    pointT10.toString() +
    " " +
    pointT1.toString() +
    " " +
    pointT9.toString();
  let polylineBack319 =
    pointT1.toString() +
    " " +
    pointT10.toString() +
    " " +
    pointT21.toString() +
    " " +
    pointT1.toString();

  document.getElementById("color11").setAttribute("points", polylineBack11);
  document.getElementById("color21").setAttribute("points", polylineBack21);
  document.getElementById("color31").setAttribute("points", polylineBack31);
  document.getElementById("color32").setAttribute("points", polylineBack32);
  document.getElementById("color22").setAttribute("points", polylineBack22);
  document.getElementById("color12").setAttribute("points", polylineBack12);
  document.getElementById("color33").setAttribute("points", polylineBack33);
  document.getElementById("color23").setAttribute("points", polylineBack23);
  document.getElementById("color13").setAttribute("points", polylineBack13);
  document.getElementById("color24").setAttribute("points", polylineBack24);
  document.getElementById("color34").setAttribute("points", polylineBack34);
  document.getElementById("color14").setAttribute("points", polylineBack14);
  document.getElementById("color25").setAttribute("points", polylineBack25);
  document.getElementById("color15").setAttribute("points", polylineBack15);
  document.getElementById("color35").setAttribute("points", polylineBack35);
  document.getElementById("color16").setAttribute("points", polylineBack16);
  document.getElementById("color17").setAttribute("points", polylineBack17);
  document.getElementById("color26").setAttribute("points", polylineBack26);
  document.getElementById("color36").setAttribute("points", polylineBack36);
  document.getElementById("color18").setAttribute("points", polylineBack18);
  document.getElementById("color37").setAttribute("points", polylineBack37);
  document.getElementById("color27").setAttribute("points", polylineBack27);
  document.getElementById("color19").setAttribute("points", polylineBack19);
  document.getElementById("color28").setAttribute("points", polylineBack28);
  document.getElementById("color110").setAttribute("points", polylineBack110);
  document.getElementById("color38").setAttribute("points", polylineBack38);
  document.getElementById("color29").setAttribute("points", polylineBack29);
  document.getElementById("color41").setAttribute("points", polylineBack41);
  document.getElementById("color39").setAttribute("points", polylineBack39);
  document.getElementById("color111").setAttribute("points", polylineBack111);
  document.getElementById("color210").setAttribute("points", polylineBack210);
  document.getElementById("color310").setAttribute("points", polylineBack310);
  document.getElementById("color211").setAttribute("points", polylineBack211);
  document.getElementById("color311").setAttribute("points", polylineBack311);
  document.getElementById("color112").setAttribute("points", polylineBack112);
  document.getElementById("color113").setAttribute("points", polylineBack113);
  document.getElementById("color212").setAttribute("points", polylineBack212);
  document.getElementById("color312").setAttribute("points", polylineBack312);
  document.getElementById("color313").setAttribute("points", polylineBack313);
  document.getElementById("color213").setAttribute("points", polylineBack213);
  document.getElementById("color114").setAttribute("points", polylineBack114);
  document.getElementById("color214").setAttribute("points", polylineBack214);
  document.getElementById("color314").setAttribute("points", polylineBack314);
  document.getElementById("color115").setAttribute("points", polylineBack115);
  document.getElementById("color215").setAttribute("points", polylineBack215);
  document.getElementById("color116").setAttribute("points", polylineBack116);
  document.getElementById("color315").setAttribute("points", polylineBack315);
  document.getElementById("color216").setAttribute("points", polylineBack216);
  document.getElementById("color117").setAttribute("points", polylineBack117);
  document.getElementById("color316").setAttribute("points", polylineBack316);
  document.getElementById("color42").setAttribute("points", polylineBack42);
  document.getElementById("color217").setAttribute("points", polylineBack217);
  document.getElementById("color317").setAttribute("points", polylineBack317);
  document.getElementById("color318").setAttribute("points", polylineBack318);
  document.getElementById("color118").setAttribute("points", polylineBack118);
  document.getElementById("color218").setAttribute("points", polylineBack218);
  document.getElementById("color219").setAttribute("points", polylineBack219);
  document.getElementById("color119").setAttribute("points", polylineBack119);
  document.getElementById("color319").setAttribute("points", polylineBack319);
}

//closing and opening svg
let open = 0;
let rightClose = "0px";
let leftClose = "0px";

function openHome() {
  document.getElementById("open-button").innerHTML === "close"
    ? (document.getElementById("open-button").innerHTML = "open")
    : (document.getElementById("open-button").innerHTML = "close");
  if (open === 0) {
    ////////////////////////////////////////
    //left                //open
    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${leftOpen})`;
      } else {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${leftOpen})`;
        document.getElementById("home-polyline" + i).style.transitionDelay =
          "0.2s";
      }
    }
    for (let i = 10; i < 20; i++) {
      //right
      if (i % 2 === 0) {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${rightOpen})`;
      } else {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${rightOpen})`;
        document.getElementById("home-polyline" + i).style.transitionDelay =
          "0.2s";
      }
    }
    setTimeout(function hide() {
      //  document.getElementById("animation1").setAttribute("class", "hidden"); //animation1 hide
      //document.getElementById("animation2").setAttribute("class", "hidden"); //animation2 hide
      document.getElementById("background1").removeAttribute("class"); //background1 show
    }, 0);
    open = 1;
  } else {
    ////////////////////////////////////////
    //close
    for (let i = 0; i < 10; i++) {
      //left
      if (i % 2 === 0) {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${leftClose})`;
      } else {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${leftClose})`;
        document.getElementById("home-polyline" + i).style.transitionDelay =
          "0.2s";
      }
    }
    for (let i = 10; i < 20; i++) {
      //right
      if (i % 2 === 0) {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${rightClose})`;
      } else {
        document.getElementById(
          "home-polyline" + i
        ).style.transform = `translateX(${rightClose})`;
        document.getElementById("home-polyline" + i).style.transitionDelay =
          "0.2s";
      }
    }

    setTimeout(function hide() {
      //  document.getElementById("animation1").removeAttribute("class"); //animation1 show
      //  document.getElementById("animation2").removeAttribute("class"); //animation2 show
      document.getElementById("background1").setAttribute("class", "hidden"); //background1 hide
    }, 1100);
    open = 0;
  }
}

//logic for change color and color animation back svg
let clicks = "colored";
function background1animation() {
  if (clicks === "colored") {
    for (let i = 1; i < 20; i++) {
      document.getElementById("color1" + i).setAttribute("class", "color01");
      document.getElementById("color2" + i).setAttribute("class", "color02");
      document.getElementById("color3" + i).setAttribute("class", "color03");
    }
    document.getElementById("color41").setAttribute("class", "color04");
    document.getElementById("color42").setAttribute("class", "color04");
    clicks = "coloredAnimation";
  } else if (clicks === "coloredAnimation") {
    for (let i = 1; i < 20; i++) {
      document.getElementById("color1" + i).removeAttribute("class");
      document.getElementById("color2" + i).removeAttribute("class");
      document.getElementById("color3" + i).removeAttribute("class");
    }
    document.getElementById("color41").removeAttribute("class");
    document.getElementById("color42").removeAttribute("class");
    for (let i = 1; i < 20; i++) {
      document.getElementById("color1" + i).setAttribute("class", "color1");
      document.getElementById("color2" + i).setAttribute("class", "color2");
      document.getElementById("color3" + i).setAttribute("class", "color3");
    }
    document.getElementById("color41").setAttribute("class", "color4");
    document.getElementById("color42").setAttribute("class", "color4");
    clicks = "notColor";

    clicks = "black";
  } else {
    for (let i = 1; i < 20; i++) {
      document.getElementById("color1" + i).removeAttribute("class");
      document.getElementById("color2" + i).removeAttribute("class");
      document.getElementById("color3" + i).removeAttribute("class");
    }
    document.getElementById("color41").removeAttribute("class");
    document.getElementById("color42").removeAttribute("class");
    clicks = "colored";
  }
}

resizeScreen();
