![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![Excel Export](https://img.shields.io/badge/Export-Excel%20(XLSX)-blue.svg)
![Platform](https://img.shields.io/badge/Runs%20On-Browser%20Console-orange.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)
![Dependencies](https://img.shields.io/badge/Dependency-XLSX%20(SheetJS)-blueviolet.svg)
# Trendyol Product Scraper

A lightweight JavaScript tool for extracting product data directly from Trendyol category and search result pages.  
By simply pasting the script into your browser console, it automatically scans all visible product cards and collects:

- Brand  
- Product Name  
- Price  
- Product URL  

Once the data is gathered, the script dynamically loads the XLSX library, converts the collected information into a clean Excel (XLSX) file, adjusts column widths, and immediately triggers a download of the final spreadsheet.

This makes it ideal for quick product research, price comparison, competitive analysis, or creating product lists without relying on any API or external software.

---

## 🚀 Features

- Runs directly in the browser console  
- Works on Trendyol category and search result pages  
- Extracts brand, name, price, and link for each product  
- Generates an Excel file automatically  
- No installation required  
- Uses the CDN version of XLSX (SheetJS)

---

## 📌 How to Use

1. Open any Trendyol **category** or **search results** page.  
2. Scroll down until all products you want to scrape are loaded.  
3. Open your browser console:  
   - **Chrome:** `Ctrl + Shift + J` (Windows) or `Cmd + Option + J` (Mac)  
4. Paste the entire script into the console.  
5. Press **Enter**.  
6. The script will detect all product cards, extract information, and download an Excel file named:  
   **`garajweb_trendyol_listesi.xlsx`**

---

## 📦 Output Excel Columns

The generated Excel file contains:

- **Product Name**  
- **Price**  
- **Product URL**

Each field is formatted neatly with predefined column widths for better readability.

---

## 🧩 Technologies Used

- JavaScript (vanilla)
- XLSX (SheetJS) via CDN  
- Browser DOM parsing

---

## ⚠️ Notes

- Make sure you scroll the page so all product cards are loaded before running the script.  
- This tool is intended for personal data collection and research on publicly visible pages.  



