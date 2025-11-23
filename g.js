
var script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
document.head.appendChild(script);
console.log("Excel kütüphanesi yükleniyor...");
script.onload = function() {
    console.log("Kütüphane yüklendi. Veriler çekiliyor...");
    var products = [];
    var cards = document.querySelectorAll('.product-card');
    cards.forEach(function(card) {
        var brand = card.querySelector('.product-brand') ? card.querySelector('.product-brand').innerText : "";
        var name = card.querySelector('.product-name') ? card.querySelector('.product-name').innerText : "";
        var fullName = (brand + " " + name).replace(/\n/g, " ").trim();
        var priceElement = card.querySelector('.price-section');
        if (!priceElement) {
            priceElement = card.querySelector('.discounted-price'); 
        }
        var price = priceElement ? priceElement.innerText : "Fiyat Yok";
        var link = card.href;
        if(fullName) {
            products.push({
                "Ürün Adı": fullName,
                "Fiyat": price,
                "Ürün Linki": link
            });
        }
    });
    console.log(`${products.length} adet ürün bulundu.`);
    if (products.length > 0) {
        var worksheet = XLSX.utils.json_to_sheet(products);
        var wscols = [
            {wch: 50}, 
            {wch: 50}, 
            {wch: 250}
        ];
        worksheet['!cols'] = wscols;
        var workbook = XLSX.utils.book_new();    
        XLSX.utils.book_append_sheet(workbook, worksheet, "Trendyol Ürünleri");
        XLSX.writeFile(workbook, "garajweb_trendyol_listesi.xlsx");
        console.log("✅ Excel dosyası başarıyla indirildi!");
    } else {
        console.warn("⚠️ Hiçbir ürün bulunamadı. Sayfayı aşağı kaydırdığınızdan emin olun.");
    }
};
