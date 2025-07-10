<div align="center">
    <img src="avt.png" alt="A screenshot showing the script's success alert over the Facebook Ads transaction page" width="350"/>

# 💰 Facebook Ads Billing Total Calculator
### حاسبة إجمالي فواتير إعلانات فيسبوك




</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/seif4d/FB-Ads-Transactions-Totaler?style=for-the-badge&logo=github&color=gold)](https://github.com/seif4d/FB-Ads-Transactions-Totaler/stargazers)
[![Issues](https://img.shields.io/github/issues/seif4d/FB-Ads-Transactions-Totaler?style=for-the-badge&logo=github)](https://github.com/seif4d/FB-Ads-Transactions-Totaler/issues)

</div>

---

<div align="center">

[**English Version 🇬🇧**](#-facebook-ads-billing-total-calculator) | [**النسخة العربية 🇸🇦**](#-حاسبة-إجمالي-فواتير-إعلانات-فيسبوك)

</div>

---

<div align="center">

### 🖼️ Preview | صورة توضيحية

![A screenshot showing the script's success alert over the Facebook Ads transaction page.](screenshot.png)

</div>

---
---

## 🇬🇧 Facebook Ads Billing Total Calculator

A tiny yet powerful JavaScript snippet that you run directly in your browser's **Console**. It automatically calculates and sums up all transaction amounts on the Facebook Ads Manager **“Payment Activity”** page, with full support for Arabic numerals.

### 🎯 What Problem Does This Solve?

Manually adding up dozens of Facebook Ad bills is tedious, slow, and error-prone. This script automates the entire process into a single step, giving you an accurate total in seconds.

### ✨ Key Features

-   ✅ **One-Step Execution:** Just copy, paste, and press Enter.
-   🔢 **Full Arabic Numeral Support:** Flawlessly handles amounts like `٢٤٫١٥` and the Arabic decimal `٫`.
-   🧹 **Smart & Clean:** Automatically ignores currency symbols, spaces, and invisible characters.
-   ⭐ **Open-Source:** Licensed under MIT. Feel free to use, modify, and contribute!

### 🚀 How to Use

1.  Navigate to your Facebook Ads "Payment Activity" page:<br>
    📍 `https://business.facebook.com/billing_hub/payment_activity`
2.  **Scroll down** to ensure all transactions you wish to include are loaded on the page.
3.  Open your browser's Developer Tools (`F12` or `Ctrl+Shift+I` on Windows, `Cmd+Option+I` on Mac).
4.  Switch to the **Console** tab.
5.  📋 **Copy the code below**, paste it into the Console, and press **Enter**.

> An alert will pop up with the final total. It's that simple!

### 💻 The Code

```javascript
function calculateFacebookAdsTotal() {
  const amountElements = document.querySelectorAll('td[role="gridcell"][aria-colindex="3"] span');
  if (amountElements.length === 0) {
    alert("😟 No transactions found!\nMake sure the transactions table is fully visible on the page before running the script.");
    return;
  }
  let total = 0;
  amountElements.forEach(element => {
    const textValue = element.textContent;
    const numberPart = textValue.replace(/[^٠-٩٫]/g, '');
    let cleanedText = numberPart.replace(/٫/g, '.').replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    const amount = parseFloat(cleanedText);
    if (!isNaN(amount)) total += amount;
  });
  alert(`🎉 Success! 🎉\n\n💰 Total Amount: ${total.toFixed(2)} SAR`);
  console.log(`💰💰💰 Final Total: ${total.toFixed(2)} SAR`);
}
calculateFacebookAdsTotal();
```

---
---

## 🇸🇦 حاسبة إجمالي فواتير إعلانات فيسبوك

كود JavaScript بسيط وفعال يعمل مباشرة داخل **Console المتصفح**. يقوم الكود بحساب وجمع كل المبالغ في صفحة **"نشاط الدفع"** الخاصة بمدير إعلانات فيسبوك تلقائياً، مع دعم كامل للأرقام العربية.

### 🎯 المشكلة التي يحلها الكود

عملية جمع العشرات من فواتير إعلانات فيسبوك يدوياً هي عملية مملة، بطيئة، وعرضة للأخطاء. هذا السكريبت يقوم بأتمتة هذه المهمة بالكامل في خطوة واحدة، ليعطيك المجموع الدقيق في ثوانٍ.

### ✨ المميزات الرئيسية

-   ✅ **خطوة واحدة فقط:** انسخ، الصق، ثم اضغط Enter.
-   🔢 **دعم كامل للأرقام العربية:** يتعامل بكفاءة مع المبالغ المكتوبة مثل `٢٤٫١٥` والفاصلة العشرية `٫`.
-   🧹 **ذكي ونظيف:** يتجاهل تلقائياً رموز العملات، المسافات، والحروف غير المرئية.
-   ⭐ **مصدر مفتوح:** مرخص تحت رخصة MIT. استخدمه، عدّله، وساهم فيه بحرية.

### 🚀 طريقة الاستخدام

1.  اذهب إلى صفحة "نشاط الدفع" في مدير إعلانات فيسبوك:<br>
    📍 `https://business.facebook.com/billing_hub/payment_activity`
2.  **اسحب للأسفل** في الصفحة لتتأكد من تحميل جميع المعاملات التي تريد حسابها.
3.  افتح أدوات المطور في متصفحك (`F12` أو `Ctrl+Shift+I` في ويندوز، `Cmd+Option+I` في ماك).
4.  اختر تبويب **Console**.
5.  📋 **انسخ الكود أدناه**، الصقه في الـ Console، ثم اضغط **Enter**.

> ستظهر لك نافذة منبثقة تحتوي على الإجمالي النهائي. بهذه البساطة!

### 💻 الكود

```javascript
// 🚀 بداية الكود - الإصدار النهائي والأقوى

function getTotalAmount() {
  const amountElements = document.querySelectorAll('td[role="gridcell"][aria-colindex="3"] span');
  
  if (amountElements.length === 0) {
    alert("لم يتم العثور على أي مبالغ! 😟\nتأكد من أن الجدول ظاهر بالكامل في الصفحة.");
    return;
  }
  
  let total = 0;
  
  console.log(`✅ تم العثور على ${amountElements.length} معاملة. جاري الحساب... ⏳`);

  amountElements.forEach((element, index) => {
    let textValue = element.textContent;
    
    // --- التعديل الجوهري هنا ---
    // نستخدم تعبير نمطي لإزالة كل شيء ليس رقماً (٠-٩) أو فاصلة عشرية (٫)
    // هذا يزيل العملة والمسافات والحروف الخفية دفعة واحدة
    let numberPart = textValue.replace(/[^٠-٩٫]/g, '');
    
    // الآن نكمل التحويل على النص النظيف تماماً
    let cleanedText = numberPart.replace(/٫/g, '.');
    cleanedText = cleanedText.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    
    const amount = parseFloat(cleanedText);
    
    // --- جزء جديد للمساعدة في اكتشاف الأخطاء ---
    // سيطبع في الكونسول كل خطوة لكل معاملة
    console.log(`--- المعاملة رقم ${index + 1} ---`);
    console.log("النص الأصلي:", textValue);
    console.log("بعد التنظيف بالـ Regex:", numberPart);
    console.log("الرقم النهائي المحول:", amount);
    // ---------------------------------------------
    
    if (!isNaN(amount)) {
      total += amount;
    } else {
        console.error("❌ فشل تحويل هذا المبلغ إلى رقم:", textValue);
    }
  });
  
  // عرض النتيجة النهائية في نافذة منبثقة
  alert(`🎉 تم الحساب بنجاح! 🎉\n\n💰 المبلغ الإجمالي هو: ${total.toFixed(2)} ر.س.`);
  
  console.log(`------------------------------`);
  console.log(`💰💰💰 الإجمالي النهائي: ${total.toFixed(2)} ر.س.`);
}

// 🚀 تنفيذ الدالة
getTotalAmount();
```

---
---

## 🤝 Contributing & Ideas | المساهمة والأفكار

This project is open to improvements! Have a great idea? Feel free to open a **Pull Request** or an **Issue**. Some ideas include:

-   Supporting more currencies.
-   Turning this into a browser extension.

هذا المشروع مفتوح للتطوير والتحسين. هل لديك فكرة رائعة؟ لا تتردد في فتح **Pull Request** أو **Issue**. بعض الأفكار المقترحة:

-   دعم عملات إضافية.
-   تحويل الكود إلى إضافة للمتصفح (Browser Extension).

## 📄 License | الترخيص

This project is licensed under the [MIT License](LICENSE).
