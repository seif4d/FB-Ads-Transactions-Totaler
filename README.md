# 💰 حاسبة إجمالي فواتير إعلانات فيسبوك

كود JavaScript بسيط يُستخدم داخل `console` المتصفح لحساب وجمع كل المبالغ في صفحة "المعاملات" الخاصة بمدير إعلانات فيسبوك، خاصة عندما تكون الأرقام باللغة العربية.

---

## 🎯 المشكلة التي يحلها الكود

عند مراجعة فواتير الإعلانات على فيسبوك، قد تحتاج إلى معرفة إجمالي ما تم صرفه خلال فترة معينة. عملية جمع المبالغ يدوياً، خاصة مع وجود عشرات المعاملات، تكون مملة وعرضة للخطأ. هذا الكود يقوم بأتمتة هذه العملية بنقرة زر واحدة.

## ✨ المميزات

-   سهل الاستخدام (نسخ ولصق فقط).
-   يتعامل مع الأرقام والفاصلة العشرية بالصيغة العربية (مثل `٢٤٫١٥`).
-   يتجاهل تلقائياً رمز العملة والحروف غير المرئية.
-   يعرض الإجمالي النهائي في نافذة منبثقة واضحة.

## 🛠️ طريقة الاستخدام

1.  اذهب إلى صفحة المعاملات في مدير الإعلانات على فيسبوك.
    -   الرابط غالباً ما يكون شبيهاً بهذا: `https://business.facebook.com/billing_hub/payment_activity`
2.  تأكد من تحميل كل المعاملات التي تريد حسابها في الصفحة.
3.  افتح أدوات المطور (Developer Tools) بالضغط على `F12` أو `Ctrl+Shift+I` (في ويندوز) أو `Cmd+Opt+I` (في ماك).
4.  اذهب إلى تبويب **Console**.
5.  **انسخ الكود** الموجود بالأسفل كاملاً.
6.  **الصق الكود** في الـ Console واضغط على **Enter**.
7.  ستظهر لك نافذة منبثقة تحتوي على المبلغ الإجمالي. ✅

## 💻 الكود

```javascript
// انسخ هذا الكود كاملاً
function calculateFacebookAdsTotal() {
  const amountElements = document.querySelectorAll('td[role="gridcell"][aria-colindex="3"] span');
  if (amountElements.length === 0) {
    alert("😟 No transactions found!\nMake sure the transactions table is fully visible on the page before running the script.");
    return;
  }
  let total = 0;
  console.log(`✅ Found ${amountElements.length} transactions. Calculating total...`);
  amountElements.forEach(element => {
    const textValue = element.textContent;
    const numberPart = textValue.replace(/[^٠-٩٫]/g, '');
    let cleanedText = numberPart.replace(/٫/g, '.').replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    const amount = parseFloat(cleanedText);
    if (!isNaN(amount)) {
      total += amount;
    }
  });
  alert(`🎉 Success! 🎉\n\n💰 Total Amount: ${total.toFixed(2)} SAR`);
  console.log(`💰💰💰 Final Total: ${total.toFixed(2)} SAR`);
}
calculateFacebookAdsTotal();
```

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة [MIT License](LICENSE).
