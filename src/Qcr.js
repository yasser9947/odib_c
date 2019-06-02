var qcc = `س: ما اسم اخر خليفه اموي؟
عبد العزيز بن مروان.   معاويه بن ابي سفيان.    مروان بن محمد.

ج/ مروان بن محمد.

س: اين تقع جزر القمر؟
المحيط الهادى.    المحيط الهندى.     بحر العرب.

ج/ المحيط الهندي.

س: متي وقعت غزوة خيبر؟
العام الثاني من الهجره.    في العام الثالث من الهجره.    في العام السابع من الهجرة.

ج/في العام السابع من الهجرة.

س: ما هي اقوى انواع الحجارة؟
حجر الألماس.    حجر الجرانيت.    حجر الياقوت.

ج/ حجر الألماس.

س: ما هو اطول نهر فى العالم؟
نهر المسيسيبي.    نهر النيل.    نهر دجله.

ج/ نهر النيل.

س: ما هو عدد العضلات في جسم الانسان؟
444 عضلة.    111 عضلة.    620 عضلة.

ج/620 عضله.

س: ما هو الشرك الأصغر؟
الرياء.    الكذب.    النفاق.

ج/ الرياء.

س: من هو آخر الأنبياء والرسل ؟
سيدنا ابراهيم.    سيدنا محمد.    سيدنا نوح.

ج/سيدنا محمد.

س: ما هو صوت الضفدع؟
حفيف.    نهيق.    نقيق.

ج/ نقيق.

س: ما اسم السورة التى تعدل ثلث القرآن؟
الفلق.    الناس.     الإخلاص.

ج/ الإخلاص.

س: ما هي السورة التى تعدل ربع القرآن؟
الكافرون.    النمل.    البقرة.

ج/ الكافرون.

س: اول اولاد آدم عليه السلام؟
هابيل.    قابيل.    محمد.

ج/قابيل.

س: ما هو اثقل حيوان في العالم؟
الاسد.    الفيل.    الحوت الأزرق.

ج/الحوت الازرق.

س: اول جبل نصب في الارض هو جبل؟
ابي قبيس.    سقاره.    المقطم.

ج/ ابي قبيس.

س: ما هو الحيوان الذي يصاب بالحصبه كالانسان؟
النمر.    القرد.    الغزال.

ج/القرد.

س: من اول الشعوب الذين وضعوا الحروف الهجائيه؟
الاغريق    العرب    الفينيقيون.

ج/الفينيقيون.

س: من هو شاعر الفرس الأكبر؟
الاندلسي    ابوجهل    الفردوسي.

ج/الفردوسي.`
 var qres =[]
// console.log(qcc.split(':')[2].split('؟')[0])
console.log(qcc.split(':')[1].split('؟')[1].split('.'))

qcc.split(':').forEach((ele,i) => {
    console.log( i)

if (i == 0 ){

}
else {
    qres.push( {
        category: "General Knowledge",
    correct_answer: ele.split('؟')[1].split('.')[3],
    difficulty: "easy",
    incorrect_answers:  [ele.split('؟')[1].split('.')[0], ele.split('؟')[1].split('.')[1],ele.split('؟')[1].split('.')[2]],
    question: ele.split('؟')[0],
    type: "multiple",})
//    console.log(  ele.split('؟')[0])
}
});

console.log(qres);





















var array = [{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["عبد العزيز بن مروان.", "اربع دول ", "خمس دول"],
question: "ما اسم اخر خليفه اموي؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",},{
    category: "General Knowledge",
correct_answer: "دولتان",
difficulty: "easy",
incorrect_answers:  ["ثلاثه دول", "اربع دول ", "خمس دول"],
question: "كم دولة في قارة أمريكا الشمالية؟ ",
type: "multiple",}
]



export default array