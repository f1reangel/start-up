// create map and set center and zoom level
var mymap = L.map('mapid').setView([46.748815321255734, 33.37056398400237], 13);
// add tile layer to map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(mymap);
// create progress bar element
var progressBar = document.createElement('div');
progressBar.className = 'progress-bar';

var progressBarOne = document.createElement('div');
progressBarOne.className = 'progress-bar_one';
//add marker to map
var marker = L.marker([46.748815321255734, 33.37056398400237]).addTo(mymap);
// add progress bar to marker popup
marker.bindPopup("<h2>Завод інструментального виробництва</h2>" + progressBar.outerHTML +
    "<p><b>Це підприємство, яке спеціалізується на виготовленні різноманітного інструменту. На заводі використовуються спеціалізовані технології та обладнання для створення високоякісних інструментів, які використовуються в різних галузях виробництва.</p><p> Завод працює з різними матеріалами, такими як метали, пластмаси та інші, щоб створювати інструменти, які відповідають вимогам замовників. Завод інструментального виробництва знаходиться на території України і може виробляти як серійні, так і унікальні інструменти за індивідуальним замовленням.</b></p>" + "<img src='firebox.jpg' width='300' height='150' class='rounded-image'/></div><br><div style='display:flex; justify-content:right;'><a href='indexform.html' target='_blank'><button class='button' style='margin-right:10px;'>Інвестування</button></a><a href='link_to_your_pdf_file.pdf' target='_blank'><button class='button'>Юридичне</button></a></div>").openPopup();
var marker2 = L.marker([46.748926765701945, 33.384729002803475]).addTo(mymap);
// add progress bar to marker popup
marker2.bindPopup("<h2>Новокаховський електромеханічний завод (ТПО НКЕМЗ) </h2>" + progressBarOne.outerHTML + "<p><b>Новокаховський електромеханічний завод (ТПО НКЕМЗ) - підприємство з виробництва електротехнічного обладнання, засноване в 1954 році в місті Новій Каховці, що знаходиться в Україні. Завод спеціалізується на виробництві різноманітного електротехнічного обладнання, включаючи трансформатори, електродвигуни, генератори, інші компоненти та системи. ТПО НКЕМЗ має великий досвід у розробці та виробництві електротехнічного обладнання для різних галузей, таких як промисловість, енергетика, залізничний транспорт тощо. Завод є одним з провідних виробників електротехнічного обладнання в Україні та Східній Європі.</b></p>" + "<img src='1312.jpg' width='300' height='150' class='rounded-image'/></div><br><div style='display:flex; justify-content:right;'><a href='indexform.html' target='_blank'><button class='button' style='margin-right:10px;'>Інвестування</button></a><a href='link_to_your_pdf_file.pdf' target='_blank'><button class='button'>Юридичне</button></a></div>").openPopup();