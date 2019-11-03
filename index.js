var pug = require('pug');

var db_array = [{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":45,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"prodName":"Молочный Яблоко 100","quantity":44,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"prodName":"Молочный Традиция 100","quantity":62,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":87,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":86,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"prodName":"Молочный Груша 200","quantity":80,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"prodName":"Аленка карамель 100г Акционный товар Большая скидка","quantity":94,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"prodName":"Сыр 125г","quantity":83,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg","price":44,"prodName":"Яблоко-Виноград 0,5л","quantity":20,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"prodName":"Молочный Груша 200","quantity":65,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":41,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"prodName":"Молочный Изюм 100","quantity":72,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":39,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"prodName":"Молочный Традиция 100","quantity":60,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"prodName":"Аленка карамель 100г Акционный товар Большая скидка","quantity":99,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":51,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"https://www.utkonos.ru/images/photo/3117/3117496H.jpg","price":33.1,"prodName":"Русская картошка икра 50","quantity":15,"removed":0},{"date":"2017-11-01 12:09:03","docType":"Приход","id":564564867361360,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"prodName":"Молочный Груша 200","quantity":96,"removed":0},{"date":"2017-11-01 12:09:03","docType":"Приход","id":564564867361360,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"prodName":"Молочный Яблоко 100","quantity":9,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":62,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","price":39,"prodName":"Молочный Сказка 100","quantity":67,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"prodName":"Тоник 0,5л","quantity":51,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"prodName":"Молочный Изюм 100","quantity":4,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":60,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":61,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","price":36.5,"prodName":"Беседа. 50гр","quantity":41,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"prodName":"Молочный Изюм 100","quantity":3,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"prodName":"Сыр 125г","quantity":96,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"prodName":"Тоник 0,5л","quantity":31,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg","price":16.9,"prodName":"Капля росы негаз 1.5л","quantity":16,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","price":52.41,"prodName":"Нежирный творог","quantity":81,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":23,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","price":336,"prodName":"Горький коньяк 100","quantity":52,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"prodName":"Аленка карамель 100г Акционный товар Большая скидка","quantity":12,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":3,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":88,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","price":52.41,"prodName":"Нежирный творог","quantity":20,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"prodName":"Тоник 0,5л","quantity":64,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","price":39,"prodName":"Молочный Сказка 100","quantity":54,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg","price":30,"prodName":"Сметана и лук 25г","quantity":33,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","price":36.5,"prodName":"Беседа. 50гр","quantity":6,"removed":0},{"date":"2017-11-29 18:29:00","docType":"Расход","id":564564867361364,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"prodName":"Молочный Традиция 100","quantity":64,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":6,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg","price":30,"prodName":"Сметана и лук 25г","quantity":18,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","price":36.5,"prodName":"Беседа. 50гр","quantity":99,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","price":336,"prodName":"Горький коньяк 100","quantity":94,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"prodName":"Сыр 125г","quantity":64,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"prodName":"Молочный Яблоко 100","quantity":52,"removed":0}]

/* [{"date":"2017-11-01 12:09:03","docType":"Приход","id":564564867361360,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"prodName":"Молочный Груша 200","quantity":96,"removed":0},{"date":"2017-11-01 12:09:03","docType":"Приход","id":564564867361360,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"prodName":"Молочный Яблоко 100","quantity":9,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":62,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","price":39,"prodName":"Молочный Сказка 100","quantity":67,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"prodName":"Тоник 0,5л","quantity":51,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"prodName":"Молочный Изюм 100","quantity":4,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":60,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":61,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361361,"image":"http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","price":36.5,"prodName":"Беседа. 50гр","quantity":41,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"prodName":"Молочный Изюм 100","quantity":3,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"prodName":"Сыр 125г","quantity":96,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"prodName":"Тоник 0,5л","quantity":31,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg","price":16.9,"prodName":"Капля росы негаз 1.5л","quantity":16,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","price":52.41,"prodName":"Нежирный творог","quantity":81,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":23,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","price":336,"prodName":"Горький коньяк 100","quantity":52,"removed":0},{"date":"2017-11-03 13:11:06","docType":"Приход","id":564564867361362,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"prodName":"Аленка карамель 100г Акционный товар Большая скидка","quantity":12,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":6,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg","price":30,"prodName":"Сметана и лук 25г","quantity":18,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","price":36.5,"prodName":"Беседа. 50гр","quantity":99,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg","price":336,"prodName":"Горький коньяк 100","quantity":94,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"prodName":"Сыр 125г","quantity":64,"removed":0},{"date":"2017-11-29 19:31:03","docType":"Приход","id":564564867361363,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"prodName":"Молочный Яблоко 100","quantity":52,"removed":0},{"date":"2017-11-29 18:29:00","docType":"Расход","id":564564867361364,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"prodName":"Молочный Традиция 100","quantity":64,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":3,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":88,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg","price":52.41,"prodName":"Нежирный творог","quantity":20,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"https://www.utkonos.ru/images/photo/3139/3139296H.jpg","price":63,"prodName":"Тоник 0,5л","quantity":64,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg","price":39,"prodName":"Молочный Сказка 100","quantity":54,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg","price":30,"prodName":"Сметана и лук 25г","quantity":33,"removed":0},{"date":"2017-11-29 17:26:57","docType":"Приход","id":564564867361365,"image":"http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png","price":36.5,"prodName":"Беседа. 50гр","quantity":6,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":45,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3265/3265004H.jpg","price":25.1,"prodName":"Молочный Яблоко 100","quantity":44,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"prodName":"Молочный Традиция 100","quantity":62,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":87,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":86,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"prodName":"Молочный Груша 200","quantity":80,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"prodName":"Аленка карамель 100г Акционный товар Большая скидка","quantity":94,"removed":0},{"date":"2017-10-16 12:07:07","docType":"Расход","id":564564867361367,"image":"https://www.utkonos.ru/images/photo/3176/3176192H.jpg","price":131,"prodName":"Сыр 125г","quantity":83,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg","price":44,"prodName":"Яблоко-Виноград 0,5л","quantity":20,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg","price":180,"prodName":"Молочный Груша 200","quantity":65,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg","price":121,"prodName":"Творог 9% с курагой","quantity":41,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":"https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg","price":102,"prodName":"Молочный Изюм 100","quantity":72,"removed":0},{"date":"2017-10-16 15:09:08","docType":"Расчет","id":564564867361368,"image":null,"price":65,"prodName":"Виноград 0,3л","quantity":39,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG","price":115,"prodName":"Молочный Традиция 100","quantity":60,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"https://www.utkonos.ru/images/photo/3054/3054289H.jpg","price":73.9,"prodName":"Аленка карамель 100г Акционный товар Большая скидка","quantity":99,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg","price":46.3,"prodName":"Русская картошка чедар 50","quantity":51,"removed":0},{"date":"2017-10-16 18:11:09","docType":"Приход","id":564564867361369,"image":"https://www.utkonos.ru/images/photo/3117/3117496H.jpg","price":33.1,"prodName":"Русская картошка икра 50","quantity":15,"removed":0}] */


function getFormatedDate(dateStr){
    var month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var date = new Date(dateStr);
    return date.getDate() + ' ' + month[date.getMonth()];}

var result = {};
db_array.forEach(function(item){
    var d = getFormatedDate(item.date);
    if(result[d]){
        result[d].push(item);
    } else {
        result[d] = [item];
    }
});

var rounded = function(number){
    return +number.toFixed(2);
}
    
for (var i in result){
	for (var j in result[i]){
		result[i][j]['total'] = rounded(result[i][j].price * result[i][j].quantity);
    }
}

var js_result = {};

var summ = 0;
var x = 0;
var y = 0;
for (var item in result){
    // console.log(item);
    js_result[item] = {};
    for (var prop in result[item]){
        // console.log(result[item][x]);
        // console.log(result[item][x].id);
        var v = result[item][prop].id;
        if (js_result[item][v]){
            // console.log(js_result[item][v]);
            js_result[item][v].push(result[item][prop]);
            js_result[item][v]['itemQuant'] = js_result[item][v].length;
            summ += result[item][prop].price * result[item][prop].quantity;
            sum += result[item][prop].price * result[item][prop].quantity;
            js_result[item][v]['sumDoc'] = rounded(sum);
            // js_result[item][v]['totalDocPrice'] += js_result[item][v][x].price * js_result[item][v][x].quantity;
            x++;
        }else{
            sum = 0;
            js_result[item][v] = [result[item][prop]];
            js_result[item][v]['typeDoc'] = result[item][prop].docType;
            js_result[item][v]['itemQuant'] = js_result[item][v].length;
            summ += result[item][prop].price * result[item][prop].quantity;
            sum += result[item][prop].price * result[item][prop].quantity;
            js_result[item][v]['sumDoc'] = rounded(sum);
            // y++;
            // js_result[item[v][]]
            // js_result[item][v]['totalDocPrice'] = js_result[item][v][x].price * js_result[item][v][x].quantity;
            x++;
        }
        // js_result[item][v]['summDoc'] = rounded(summ);
        // js_result[item]['summDoc'] = rounded(summ);
        // summ = 0;
        x = 0;
    }
    js_result[item]['summDoc'] = rounded(summ);
    js_result[item]['dayQuant'] = Object.keys(js_result[item]).length - 1;
    // js_result[item]['checkQuant'] = y;
    summ = 0;
    y = 0;
}

var template = `
doctype html
html
    head
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1.0")
        title systech
        // link(rel="stylesheet", href="stylesheets.css")
        script(src="parse_hack.js")
        // script(src="https://cdnjs.cloudflare.com/ajax/libs/umbrella/3.1.0/umbrella.esm.js")
        style.
            body {
                background-color: #eee;
                color: #aaa;
                margin: 0px;
            }
            .container {
                background-color: #fff;
                width: 60%;
                margin: 0 auto;
            }
            @media (max-width: 600px){
                .container {
                    width: 100%;
                }
            }
            .dayOfDoc {
                // padding-top: 15px;
                // padding-bottom: 15px;
                -webkit-box-shadow: 0px 3px 5px -1px rgba(194,194,194);
                -moz-box-shadow: 0px 3px 5px -1px rgba(194,194,194);
                box-shadow: 0px 3px 5px -1px rgba(194,194,194);
            }
            .dayOfDoc__bodyItem {
                // padding-top: 25px;
                padding-top: 15px;
                padding-left: 35px;
                padding-right: 35px;
                padding-bottom: 15px;
                border-bottom: 1px solid #ececec;
            }
            .dayOfDoc__mainHeader {
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                padding: 15px 12px 15px;
            }
            .mainHeader__count {
                font-size: 18px;
            }
            .bodyItem__subHeader {
                display: flex;
                justify-content: space-between;
            }
            .mainHeader__date {
                font-size: 18px;
            }
            .bodyItem__item {
                display: flex;
                align-items: center;
            }
            .bodyItem__list {
                // padding-top: 15px;
                cursor: pointer;
            }
            .item__image {
                // margin: 20px 30px 0 0;
                // width: 100%;
                height: auto;
                align-self: flex-start;
                max-height: 54px;
                max-width: 54px;
            }
            .item__text {
                flex: 1 1 auto;
            }
            .item__total {
                align-self: flex-end;
                font-size: 18px;
                color: #1b1b1b;
            }
            .mainHeader_arrow {
                width: 30px;
            }
            .date__wrap, .list__wrap{
                display: flex;
            }
            .list__wrap {
                padding: 15px 0px 0px;
            }
            .date__wrap {
                aling-items: center;
            }
            .item__wrap {
                display: none;
                flex-direction: column;
                padding-left: 15px;
            }
            .acc__wrap {
                display: none;
            }
            .dayOfDoc__bodyItem:first-child {
                padding-top: 0px;
            }
            .img__wrap {
                min-width: 70px;
            }
            .svgShevron {
                padding-right: 12px;
            }
            .svgTriangle {
                min-width: 17px;
            }
            .prodName {
                font-size: 14px;
                color: #1b1b1b;
                // font-weight: 600;
            }
            .multip {
                font-size: 18px;
                color: #1b1b1b;
                // font-weight: 600;
            }
    body
        .container
            each fkey, fval in new_result
                .dayOfDoc
                    .dayOfDoc__mainHeader
                        .date__wrap
                            .svgShevron
                                svg(width="10" height="10")
                                    polyline.test(points="0,1 5,6 10,1" fill="none" stroke="#b5b5b5" stroke-width="2")
                            .mainHeader__date!= fval
                        .mainHeader__count!= 'Документов: ' + fkey.dayQuant + ' (' + fkey.summDoc + ' &#8381;' + ')'
                    .acc__wrap
                        each skey, sval in fkey
                            if (sval!=='summDoc' && sval!=='dayQuant')
                                .dayOfDoc__bodyItem
                                    .bodyItem__subHeader
                                        .subHeader__typeDoc!= skey.typeDoc + \' №\' + sval
                                        .subHeader__count!= skey.sumDoc + ' &#8381;'
                                    .bodyItem__list
                                        .list__wrap
                                            .svgTriangle
                                                svg(width="10" height="10")
                                                    polygon(points="0,0 5,5 10,0 " fill="#536d79")
                                            .list__itemQuant!='Товаров: ' + skey.itemQuant
                                    .item__wrap
                                        each item in skey
                                                .bodyItem__item
                                                    .img__wrap
                                                        img.item__image(src=item.image)
                                                    .item__text
                                                        p.prodName!= item.prodName
                                                        p.multip!= item.quantity + \' * \' + item.price + ' &#8381;'
                                                    p.item__total!= item.total + ' &#8381;'
                                            

script.
    var accDay = document.getElementsByClassName("dayOfDoc__mainHeader");
    var i;
    
    for (i = 0; i < accDay.length; i++){
        accDay[i].addEventListener("click", function(){
            var accMain = this.nextElementSibling;
            var reverseShevron = this.querySelector('polyline');
            if(accMain.style.display === "block"){
                accMain.style.display = "none";
                reverseShevron.setAttribute("points", "0,1 5,6 10,1")
            }else{
                accMain.style.display = "block";
                reverseShevron.setAttribute("points", "0,6 5,1 10,6")
            }
        });
    }

    var accItem = document.getElementsByClassName("bodyItem__list");
    var l;

    for (l = 0; l < accItem.length; l++){
        accItem[l].addEventListener("click", function(){
            var accPrimary = this.nextElementSibling;
            if(accPrimary.style.display === "flex"){
                accPrimary.style.display = "none";
            }else{
                accPrimary.style.display = "flex";
            }
        });
    }

`;

var html = pug.render(template, {
    db_pug: db_array,
    db_result: result,
    new_result: js_result,
});

console.log(html);