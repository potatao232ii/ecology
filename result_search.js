pototo = new URLSearchParams(window.location.search)
potato = pototo.get("query");


function createNewDiv(e, t){
    r = document.getElementById("results");


    if (t){
            var paa = document.createElement("p")
    paa.classList.add("p")
        paa.textContent = 'الصفحة: '+t
        r.appendChild(paa)
    }

    var div = document.createElement("div");
    div.classList.add("link");
    div.innerHTML = e+'<br>';
    r.appendChild(div);

}


function potato_search(){
    var kgnswlflssfmlksvsm = true;
    [
        {path:"page1.html#introduction", text:'مقدمة علم البيئة علم البيئة هو فرع من فروع العلوم الطبيعية يركز على دراسة تفاعلات الكائنات الحية مع بعضها البعض ومع بيئاتها الطبيعية. يهتم هذا العلم بفهم العلاقات بين الكائنات الحية (مثل النباتات، الحيوانات، الكائنات الدقيقة) وبيئاتها المادية (مثل الماء، التربة، الهواء) والعوامل غير الحية التي تؤثر في هذه الأنظمة البيئية. يهدف علم البيئة إلى دراسة كيفية تأثير التغيرات البيئية على الكائنات الحية وكيفية تكيفها مع هذه التغيرات. الهدف من علم البيئة يمثل علم البيئة جزءاً مهماً في فهم التوازن البيئي، ويساهم في الحفاظ على التنوع البيولوجي وحماية البيئة. كما أنه يعزز من فهمنا لكيفية تأثير الأنشطة البشرية على البيئة، مثل التلوث وتغير المناخ، وكيفية إدارة الموارد الطبيعية بشكل مستدام لضمان استدامة الحياة على كوكب الأرض. علم البيئة لا يقتصر على دراسة البيئة الطبيعية فقط، بل يشمل أيضاً العلاقة بين البشر والبيئة وأثر النشاطات البشرية في النظم البيئية. فيديو', title:'المقدمة لعلم البيئة'},
        {path:'page1.html#level_of_organization', text:"مستويات التنظيم هي التسلسل الهرمي الذي يبدأ من الكائنات الحية الفردية ويصل إلى النظم البيئية المعقدة، حيث تشمل الفرد، الجماعة، المجتمع، النظام البيئي، والغلاف الحيوي. كل مستوى يمثل وحدة أكبر من حيث التفاعل بين الكائنات وبيئتها. وتساعد مستويات التنظيم في فهم التفاعلات بين الكائنات الحية وبيئتها بشكل منهجي، من الفرد إلى النظام البيئي. كما تساهم في تطوير استراتيجيات للحفاظ على التنوع البيولوجي وتحليل تأثيرات الأنشطة البشرية على البيئة، مما يساعد في الحفاظ على استدامة النظم البيئية. وتضم مستويات التنظيم الفرد أي الفرد من نوع من انواع المخلوقات بشرط ان يكون الحماعات مجموعة من المخلوقات الحية من النوع نفسه تعيش ووتكاثر في نفس الوقت والمكان المجتمع هو الجماعات المختلفة التي تعيش في المكان النظام يتكون من مجتمعات حوية و عوامل لاحيوية مثل درجة الحرارة وتراب الخ المنطقة تتكون من مجموعات من الانظمة البيئية التي تشترك في المناخ وفيها انواع متشابه من المجتمعات الحيوية الغلاف أعلى مستوى في التنظيم، وهو طبقة الأرض التي تدعم الحياة", title:'مستويات التنظيم'},
        {path:'page1.html#relationships_between_organisms', text:"العلاقات بين المخلوقات العلاقات بين المخلوقات الحية هي التفاعلات التي تحدث بين الكائنات الحية في البيئة، مثل التنافس، التعايش، والافتراس. هذه العلاقات تؤثر على بقاء الكائنات وتكاثرها. انواع العلاقات الافتراس علاقة أكل وماكول، يأكل طرف الاخر التنافس يتنافس الطرفين على موارد محدودة التعايش يستفيد طرف ولا يتضرر الاخر التطفل يستفيد مخلوق ويتضرر الاخر التكافل تبادل منفعه بين الطرفين صورة توضيحية", title:'العلاقات بين المخلوقات'},
        {path:'page2.html#introduction', text:'خصائص الجماعة الحيوية تشمل خصائص الجماعة الحوية (حسب الكتاب الدراسي) ثلاث خصائص هم الكثافة الجماعية هي مقياس لعدد الأفراد في جماعة حيوية ضمن وحدة معينة من المساحة أو الحجم التوزيع المكاني هو توزيع الأفراد أو الكائنات في بيئة معينة، ويمكن أن يكون منتظمًا، عشوائيًا، أو متجمعًا حسب العوامل البيئية والتفاعلات نطاق الجماعة هو المنطقة الجغرافية التي يغطّيها أفراد جماعة حيوية في بحثهم عن الغذاء، التزاوج، والمأوى. يختلف نطاق الجماعة حسب نوع الكائن الحي واحتياجاته البيئية', title:'ديناميكا الجماعة الحيوية - خصائص الجماعة الحيوية'},
        {path:'page2.html#population_density', text:'الكثافة الجماعيةهي عدد الأفراد في جماعة حيوية داخل وحدة معينة من المساحة أو الحجممثلاً 100 غزال في منطقة مساحتها 10 كيلومترات مربعة، فإن الكثافة الجماعية هي 10 غزلان لكل كيلومتر مربع', title:'ديناميكا الجماعة الحيوية - الكثافة الجماعية'},
        {path:'page2.html#population_range', text:'المنطقة الجغرافية التي يتحرك فيها أفراد الجماعة بحثًا عن الغذاء، الماء، والمأوى. يختلف نطاق الجماعة حسب نوع الكائن الحي واحتياجاته البيئية ينقسم الى نطاق محدود ونطاق واسع الطاق الواسع مثل القطط تتواجد في كل مكان تقريباً النطاق المحدود مثل البطاريق حيث تتجمع في مستعمرات بالقرب من المياه الباردة التي توفر الغذاء (مثل الأسماك والكريل)', title:'ديناميكا الجماعة الحيوية - نطاق الجماعة'},
        {path:'page2.html#population_density', text:'التوزيع المكاني هو طريقة توزيع الكائن بالمنطقة، ينقسم إلى توزيع منتظم وتكتلي وعشوائي كما بالصورة', title:'ديناميكا الجماعة الحيوية - التوزيع المكاني'},
        {path:'page2.html#population_growth_rate', text:'معدل نمو الجماعة هو التغير في عدد الأفراد في جماعة حيوية خلال فترة زمنية معينة. يعتمد على معدلات التوالد والوفاة والهجرة معدل النمو = (الهجرة الخارجة - الهجرة الداخلية) + (الوفيات - المواليد) معدل النمو الأسي والنسبي وينقسم معدل النمو الى نموذجين هما معدل النمو الأسي والنسبي معدل النمو الأسي: هو الزيادة السريعة في عدد الأفراد في الجماعة عندما تكون الموارد غير محدودة معدل النمو النسبي: هو التغير في عدد الأفراد بالنسبة لحجم الجماعة في وحدة الزمن', title:'ديناميكا الجماعة الحيوية - معدل نمو الجماعة'},
        {path:'page2.html#reproductive_patterns', text:'انماط التكاثر الطرق التي تستخدمها الكائنات الحية لتكاثر نسلها وضمان بقاء الأنواع وهنالك نمطان هما استراتيجيات معدل التكاثر (R) تتميز بإنتاج عدد كبير من النسل في وقت قصير مع رعاية قليلة له، وتناسب البيئات غير المستقرة استراتيجية القدرة الاسيتعابية (K) تتميز بإنتاج عدد أقل من النسل مع رعاية كبيرة له، وتناسب البيئات المستقرة حيث تكون المنافسة على الموارد عالية الفروقات بينهم شرح أنماط التكاثر', title:'ديناميكا الجماعة الحيوية - انماط التكاثر'},
        {path:'page3.html#human_population', text:'الجماعات البشرية (السكانية) علم السكان الاحصائي هو دراسة خصائص وتوزيع السكان باستخدام البيانات الإحصائية، مثل المواليد، الوفيات، والهجرة، لفهم التغيرات السكانية ودعم التخطيط والتنمية علاقة التقدم العملي بتحسين المعيشة  المساهمة في تحسين الصحة، التعليم، والزراعة، مما يقلل الوفيات ويزيد الإنتاجية ويعزز رفاهية الجماعات', title:'الجماعات البشرية - المقدمة'},
        {path:'page3.html#human_population_growth_rate', text:'معدل النمو السكاني هو مقياس لزيادة أو نقصان عدد السكان خلال فترة زمنية يعتمد على الفرق بين معدلات الولادة والوفاة والهجرة، حيث يتم حساب الزيادة أو النقصان في عدد السكان خلال فترة زمنية معينة', title:'الجماعات البشرية - معدل النمو السكاني'},
        {path:'page3.html#population_growth_trends', text:'تشير إلى التغيرات في عدد السكان نتيجة لمعدلات الولادات، الوفيات، والهجرة تكمن في فهم كيفية تغير عدد السكان مع مرور الوقت، مما يساعد في التخطيط الاقتصادي، الاجتماعي، والبيئي، وتحديد احتياجات الموارد والخدمات المستقبلية', title:'الجماعات البشرية - اتجاهات التمو السكاني'},
        {path:'page3.html#zero_population_growth', text:'النمو الصفري للجماعة يشير إلى حالة في بيئة معينة حيث يبقى عدد الأفراد في جماعة حيوية ثابتًا على مر الزمن. هذا يعني أن معدل الزيادة في عدد الأفراد يساوي تمامًا معدل النقص (من خلال الولادات، الوفيات، والهجرة). في هذه الحالة، لا يحدث أي تغيير في حجم الجماعة، ويكون معدل النمو الإجمالي للجماعة صفرًا الأسباب التي قد تؤدي إلى النمو الصفري معدل الولادة = معدل الوفاة: إذا كانت نسبة الأفراد المولودين تساوي نسبة الأفراد الذين يموتون معدل الهجرة المتوازن: أي أن عدد الأفراد القادمين إلى المنطقة يساوي عدد المغادرين الاستقرار البيئي: عندما تكون الموارد البيئية كافية لدعم الجماعة دون زيادة أو نقصان النمو الصفري يمكن أن يحدث في بيئات مستقرة أو في حالة توازن بيئي طويل الأمد', title:'الجماعات البشرية - النمو الصفري للجماعة'},
        {path:'page3.html#age_structure', text:'التركيب العمري لا يشير فقط إلى توزيع السكان حسب الفئات العمرية، بل يشمل أيضًا توزيع الأفراد بين الذكور والإناث في هذه الفئات العمرية يشير إلى توزيع السكان حسب الفئات العمرية المختلفة مثل الأطفال، البالغين، وكبار السن', title:'الجماعات البشرية - التركيب العمري'},
        {path:'page3.html#human_carrying_capacity', text:'القدرة الاستيعابية للسكان يشير إلى الحد الأقصى لعدد الأفراد من نوع معين يمكن أن تدعمه بيئة معينة بشكل مستدام دون أن تؤدي إلى تدهور الموارد أو تدمير النظام البيئي', title:'الجماعات البشرية - القدرة الاستيعابية للسكان'},
    ].forEach(element => {
        if (element.text.includes(potato)) {
            createNewDiv("<a href=\"" + element.path + "\">نتيجة البحث</a>", element.title);
            kgnswlflssfmlksvsm = false;
        }
    });
    if(kgnswlflssfmlksvsm) {
        createNewDiv('<a href="home.html">'+"( "+potato+" )"+" لم يتم العثور على </a>");
    }
}

if (potato){
    potato_search(potato)
}else alert("لم يتم العثور على نتائج");
