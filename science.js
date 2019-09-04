(function(){
    'use strict';
    const ResultArea=document.getElementById('result-area');
    const QuestionArea=document.getElementById('question-area');
    var genre;
    var min;
    var max;

    const Questions=[
        'ルーペは（　　　）に近づけて持ち、見たいものを前後に動かして、よく見える位置を探す。', //0・↓AA
        '花は、外側からがく、（　　　）、おしべ、めしべの順になっている。',
        'めしべの花柱の先を（　　　）という。',
        'めしべの根もとのふくらんだ部分を（　　　）という。',
        '子房の中にある小さな粒を（　　　）という。',
        'アブラナやサクラのような、花弁が互いに離れている花を（　　　）という。', //5
        'ツツジやアサガオのような、花弁がくっついている花を（　　　）という。',
        'めしべの柱頭に花粉がつくことを（　　　）という。',  
 　　　　'受粉すると、めしべの子房は（　　　）になる。',       
 　　　　'受粉すると、子房の中の胚珠は（　　　）になる。',       
 　　　　'種子ができる植物を（　　　）という。', //10
 　　　　'虫によって花粉が運ばれる植物の花を（　　　）という。',
 　　　　'風によって花粉が運ばれる植物の花を（　　　）という。',
 　　　　'マツやイチョウのように、胚珠がむき出しになっている植物を（　　　）という。',
 　　　　'アブラナやサクラのように、胚珠が子房のなかにある植物を（　　　）という。',
 　　　　'植物の葉に光が当たると、デンプンなどができる。このはたらきを（　　　）という。', //15
 　　　　'光合成は、植物の細胞の中にある（　　　）で行われる。',
 　　　　'植物の光合成では、（　　　）が使われ、酸素が発生する。',
 　　　　'生物は、呼吸をして（　　　）を取り入れている。',
 　　　　'葉の、すじのようなつくりのことを（　　　）という。',
 　　　　'ツバキやアジサイの葉に見られる、網目状の葉脈を（　　　）という。', //20
 　　　　'ツユクサの葉に見られる、平行になっている葉脈を（　　　）という。',
 　　　　'根から吸い上げられた水は、おもに植物の体から水蒸気として放出される。この現象を（　　　）という。',
 　　　　'蒸散における水蒸気の放出や、光合成にかかわる気体の出入りは、おもに（　　　）を通して起こる。',
 　　　　'茎や根にある、水などの通り道を（　　　）という。',
 　　　　'茎や根にある、葉でつくられた養分の通り道を（　　　）という。', //25
 　　　　'道管と師管の集まりを（　　　）という。',
 　　　　'根の先端近くには、（　　　）という細い毛のような部分がある。',  
        '被子植物のうち、子葉が2枚あるものを（　　　）という。',
        '被子植物のうち、子葉が1枚しかないものを（　　　）という。',
        '双子葉類の根は太い（　　　）と細い側根からなる。', //30
        '単子葉類の根は（　　　）というたくさんの細い根からなる。　※ひらがな2字＋漢字1字で答えてください。',
        '双子葉類のうち、花弁がくっついているものを（　　　）という。',
        '双子葉類のうち、花弁が離れているものを（　　　）という。',
        'シダ植物やコケ植物は（　　　）でふえる。',
        'シダ植物とコケ植物のうち、維管束がないのは、（　　　）植物である。', //35・↑AA
        'ガスバーナーの炎の大きさを調節するときは、（　　　）調節ねじを回す。', //↓AB
        'ガスバーナーの炎を青い炎にするときは、（　　　）調節ねじを回す。',
        '砂糖や小麦粉のように、加熱すると黒く焦げて炭になったり、燃えて二酸化炭素を発生したりする物質を（　　　）という。',
        '有機物以外の物質を（　　　）という。',
        '金属でない物質のことを（　　　）という。', //40
        '1㎤あたりの物質の質量のことを（　　　）という。',
        '水に溶けにくい気体は（　　　）で集める。',
        '水に溶けやすく、空気より密度が大きい物質は（　　　）で集める。',
        '水に溶けやすく、空気より密度が小さい物質は（　　　）で集める。',
        '二酸化炭素は（　　　）を白くにごらせる。',//45
        'うすい過酸化水素水（オキシドール）が二酸化マンガンにふれると（　　　）が発生する。',
        '石灰石を塩酸に入れると、（　　　）が発生する。',
        '塩化アンモニウムと水酸化ナトリウムを混合して、少量の水を加えると、特有の刺激のあるにおいをもつ気体が発生する。この気体は（　　　）である。',
        '鉄や亜鉛などの金属を塩酸に入れると、（　　　）が発生する。',
        '水素と酸素が混ざった気体に火がふれると爆発して（　　　）ができる。', //50
        '空気の約8割を占める（　　　）は、色もにおいもなく、水にほとんど溶けない。',       
        '温度によって物質の状態が固体⇔液体⇔気体と変わることを物質の（　　　）という。',       
        '水の粒子が水蒸気となって空中に飛び出すような、液体から気体の状態変化を（　　　）という。',
        '固体の物質が液体になるときの温度を（　　　）という。',
        '液体が沸騰し、気体に変わろうとするときの温度を（　　　）という。', //55
        '水や鉄、酸素など、1種類の物質からできているものを（　　　）という。',
        '空気や海水など、いろいろな物質が混ざっているものを（　　　）という。',
        '液体を沸騰させて気体にし、それをまた液体に変えて集める方法を（　　　）という。',
        '水に物質が溶けた液体を（　　　）という。',
        '溶液に溶けている物質を（　　　）という。', //60
        '水など、溶質を溶かしている液体を（　　　）という。',
        '溶質が溶媒に溶けた液を（　　　）という。',
        '溶質が溶媒に溶ける現象を（　　　）という。',
        '水に溶ける固体は、かき混ぜなくても溶け、ほぼ（　　　）状に広がる。',
        '一定量の水に溶ける物質の最大の量をその物質の（　　　）という。', //65
        '物質が溶解度まで溶けている水溶液を（　　　）という。',
        '一度溶かした物質を再び結晶として取り出すことを（　　　）という。',
        '再結晶により取り出せる、規則正しい形の固体を（　　　）という。',
        '水溶液の質量に対する溶質の質量の比を、水溶液の（　　　）という。',
        '水溶液の濃度を百分率（％）で表したものを（　　　）という。', //70・↑AB
        '太陽や電灯、ろうそくの炎のように自ら光を出しているものを（　　　）という。', //↓AC      
        '光がまっすぐ進むことを光の（　　　）という。',       
        '光が物体にあたってはね返ることを光の（　　　）という。',
        '異なる物質の境界面で光が折れ曲がって進む現象を光の（　　　）という。',
        '反射または屈折する前の光を（　　　）と呼ぶ。', //75
        '反射した後の光を（　　　）と呼ぶ。',
        '屈折した光を（　　　）という。',
        '光が反射する面に垂直な線と入射光との間にできる角を（　　　）という。',
        '光が反射する面に垂直な線と反射光との間にできる角を（　　　）という。',
        '物体の境界面に垂直な線と屈折光との間にできる角を（　　　）という。', //80
        '物体の境界面で光が反射するとき、入射角と反射角の大きさは等しい。これを（　　　）の法則という。',
        '鏡にうつった物体を（　　　）という。物体と（　　　）とは鏡に対して対象の位置にある。　※同じ言葉が入ります。',
        'でこぼこした面で、光がいろいろな方向に反射することを（　　　）という。',
        '屈折率が大きい物質から小さい物質に光が入るときに、境界面で光が全て反射してしまう現象を（　　　）という。',       
        '凸レンズの軸に平行な光は、凸レンズを通ると（　　　）という1つの点で集まる。', //85
        '凸レンズの中心から焦点までの距離を（　　　）という。',
        '光が実際に集まってできる、もとの物体と上下左右が反対の像を（　　　）という。',
        '実際に光が集まってできた像ではなく、物体のないところから光が出ているように見える象を（　　　）という。', 
        'スピーカーなど、音を発しているものを（　　　）という。',
        '音源の振動の幅を（　　　）という。これが大きいほど、その音は大きくなる。', //90
        '1秒間に音源が振動する回数を（　　　）または周波数という。これが大きいほど、その音は高くなる。', 
        '振動数の単位は（　　　）で、記号はHzである、',
        '変形した物体が元に戻ろうとする性質を（　　　）という。', 
        '弾性によって生じる力を（　　　）または弾性の力という。',
        '物体が触れ合って動いているとき、物体の間にはたらく、動きをさまたげようとする力を（　　　）または摩擦の力という。', //95
        '磁石どうしを近づけたときにはたらく、異なる極どうしでは引き合い、同じ極どうしではしりぞけ合う力のことを（　　　）または磁石の力という。',    
        '地球上にあるすべての物体に常にはたらく、地球の中心に向かう力を（　　　）という。',       
        '力の大きさの単位を（　　　）といい、記号はNである。',        
        '弾性のある物体が力を受けたときの変形の大きさは、加えた力の大きさに比例する。この関係を（　　　）の法則という。',
        '力がはたらく点を（　　　）という。', //100
        '場所によって変わらない物体そのものの量を（　　　）という。',
        '質量の単位は（　　　）といい、記号はℊである。',
        '単位面積あたりに垂直にはたらく力の大きさを（　　　）という。', 
        '圧力の単位を（　　　）といい、記号はPaである。',
        '水による圧力を（　　　）という。', //105
        '水中の物体にはたらく上向きの力を（　　　）という。',
        '地球をとりまく空気による圧力を（　　　）または気圧という。', //↑AC
        '噴火の時にふき出された、マグマが元になってできた物質を（　　　）という。', //↓AD     
        '火山灰やマグマが固まってできる岩石には、色や形の違う何種類かの（　　　）やガラスが含まれている。',       
        '火山灰や岩石に含まれる鉱物のうち、チョウ石やセキエイのような白っぽいものを（　　　）または白色鉱物という。', //110      
        '火山灰や岩石に含まれる鉱物のうち、クロウンモやキ石のような黒っぽいものを（　　　）という。',
        'マグマが冷え固まった岩石を（　　　）という。',
        '火成岩のうち、噴火の時に流れ出たマグマが地表や地表近くで急速に冷え固まってできた岩石を（　　　）という。',
        '火成岩のうち、噴火の時に流れ出たマグマが地下でゆっくり冷え固まってできた岩石を（　　　）という。',
        '火山岩では、大きな鉱物が粒のよく見えない部分に散らばって見える。このようなつくりを（　　　）という。', //115
        '斑状組織で、大きな鉱物の結晶を（　　　）という。',
        '斑状組織で、まわりの一様に見えるごく小さな鉱物の集まりやガラス質の部分を（　　　）という。',
        '深成岩では、同じくらいの大きさの鉱物がきっちりと組み合わさっていて、石基の部分がない。このようなつくりを（　　　）という。',
        '地震が起こった時、地下の岩石の破壊が始まった点のことを（　　　）という。',
        '震源の真上の地表の点を（　　　）という。', //120
        '海底で地震が起こると、（　　　）が発生し、大きな被害をもたらすことがある。',
        '規模の大きい地震が起こったときに、土地が急に上がることがある。これを（　　　）という。',
        '規模の大きい地震が起こったときに、土地が急に下がることがある。これを（　　　）という。',
        '地震が起こって地面が揺れるとき、はじめは小さく揺れ、そのあと大きく揺れることが多い。このうち、はじめの小さな揺れを（　　　）という。',
        '地震が起こって地面が揺れるとき、はじめは小さく揺れ、そのあと大きく揺れることが多い。このうち、あとに続く大きな揺れを（　　　）という。', //125
        '初期微動を伝える、速さの速い波を（　　　）という。',
        '主要動を伝える、速さの遅い波を（　　　）という。',
        'P波とS波が届くまでの時間の差を（　　　）という。',
        '地震によるある地点での地面の揺れの程度を（　　　）という。',
        '地震の規模そのものを表すためには、（　　　）（M）という指標を使う。', //130
        '地表の岩石は、長い間に気温の変化や水のはたらきなどによって、表面からぼろぼろになってくずれていく。このような現象を（　　　）という。',
        '風化によってもろくなった岩石は、風や流水のはたらきによって削られていく。このような風や流水のはたらきを（　　　）という。',
        '流水は、川の上流で削り取った土砂（れきや砂や泥）を下流へ運んでいく。この流水のはたらきを（　　　）という。',
        '川の中流や下流では、流れが緩やかになるので、流水によって運ばれてきた土砂が（　　　）して、扇状地や広い平野がつくられる。',  
        '横から押す力や横に引っぱる力がはたらいて、地層が切れてずれることによってできたくいちがいを（　　　）という。', //135      
        '地層に力がはたらいて、押し曲げられたものを（　　　）という。',       
        '遠く離れた地層が同時代にできたことを調べる際のよい目印となる層のことを（　　　）という。',
        '海底や湖底に積もったれき・砂・泥などは長い間にすき間がつまり、固まってかたい岩石になる。この岩石のことを（　　　）という。',
        'サンゴやシジミのように、地層が堆積した当時の環境を示す化石を（　　　）という。',
        'アンモナイトや恐竜のように、地層が堆積した年代を推定できる化石を（　　　）という。', //140
        '地球の表面をおおっている、十数枚のかたい板のことを（　　　）という。', //↑AD
        '植物の細胞に見られる、光合成を行う部分を（　　　）という。', //↓BA
        '植物の細胞に見られる、内部に貯蔵物質や不要な物質がふくまれているつくりを（　　　）という。',
        '植物の細胞の、細胞膜の外側に見られる、体を支えている丈夫なつくりを（　　　）という。',
        '細胞の中にある、酢酸カーミン液や酢酸オルセイン液などの染色液によく染まる部分を（　　　）という。', //145
        '細胞の中の、核のまわりの部分を（　　　）という。',
        '細胞質の一番の外側は（　　　）という薄い膜になっている。',
        '一つ一つの細胞で行っている、酸素と養分を使い、生きるためのエネルギーを取り出すはたらきを（　　　）という。',
        'ミカヅキモやゾウリムシのように、1つの細胞だけで体ができている生物を（　　　）という。',
        '多くの細胞から体ができている生物を（　　　）という。', //150
        '植物の葉や茎、動物の心臓や小腸のように、それぞれ特定のはたらきを受け持つ部分を（　　　）という。',
        '形やはたらきが同じ細胞が集まって（　　　）ができている。',
        '気管支の先端は（　　　）という薄い膜の袋になっていて、酸素を血液に取り込み、二酸化炭素を体外に出すはたらきをしている。',
        '心臓から血液が送り出される血管を（　　　）という。',
        '心臓へ血液が戻ってくる血管を（　　　）という。', //155
        '動脈と静脈は、体全体にはりめぐらされた（　　　）という非常に細い血管でつながっている。',
        '毛細血管の中の液体の一部は染み出して、（　　　）という液になり、細胞をひたしている。',
        '組織液の一部は（　　　）という管に入り、リンパ液という液になる。',
        '血管に見られる、酸素を運搬している赤い細胞を（　　　）という。',
        '赤血球にふくまれる（　　　）は、酸素の多いところでは酸素と結びつき、酸素の少ないところでは酸素を離す性質を持っている。', //160
        '血液に見られる、体の中に入った細菌などをとらえるはたらきを持つ細胞を（　　　）という。',
        '血液に見られる、出血したときに血液を固めるはたらきを持つ細胞を（　　　）という。',
        '血液は赤血球、白血球、血小板などの固体の成分と、（　　　）という液体の成分からできている。',
        '血液が循環する経路の一つで、心臓から肺動脈、肺、肺静脈を通って心臓に戻る経路を（　　　）という。',
        '血液が循環する経路の一つで、心臓から肺以外の全身を回って心臓に戻る経路を（　　　）という。', //165
        '酸素を多く含んだ血液を（　　　）という。',
        '二酸化炭素を多く含んだ血液を（　　　）という。',
        'おもに生きていくために必要なエネルギー源となる、デンプンなどの養分を（　　　）という。',
        'おもに生きていくために必要なエネルギー源となる、ごまや油になどにふくまれている養分を（　　　）という。',
        'おもに体をつくる材料として使われる、肉や魚にふくまれている養分を（　　　）という。', //170
        '養分を吸収されやすい形に変化させる過程を（　　　）という。',
        '食物から必要な養分を体に取り入れるためのはたらきをしている部分を（　　　）という。',
        '口、食道、胃、小腸、大腸、肛門という食物が通るひとつながりの管を（　　　）という。',
        'だ液、すい液、胆汁などの、養分を吸収できる形に分解する液を（　　　）という。',
        '消化液にふくまれる、食物の養分を分解するはたらきをもつ物質を（　　　）という。', //175
        'だ液に含まれる消化酵素を（　　　）という。',
        '消化された養分が消化管の中から体内に取り入れられることを（　　　）という。',
        '不要な物質を体外に出すはたらきを（　　　）という。',
        '肝臓は、タンパク質が分解されたときにできる有害なアンモニアを（　　　）という無害な物質に変えるはたらきを持っている。',
        'ヒトなどの動物では、体の中にたくさんの骨が結合して組み立てられている（　　　）がある。', //180
        '骨のまわりには（　　　）があり、その両端は別の骨にそれぞれついている。',
        '手や足などの（　　　）を動かすときには、筋肉のはたらきにより、関節の部分で骨格が曲げられる。',
        '目や耳など、まわりのさまざまな状態を刺激として受けとることができる体の部分を（　　　）という。',
        '中枢神経と末しょう神経から構成される、一系の器官を（　　　）という。',
        '神経系のうち、脳やせきずいからできている、大きなまとまりとなった神経を（　　　）という。', //185
        '神経系のうち、中枢神経から細かく枝分かれし、体のすみずみまでいき渡っている神経を（　　　）という。',
        '末しょう神経のうち、感覚器官からの信号を脳やせきずいに伝える神経を（　　　）という。',       
        '末しょう神経のうち、脳やせきずいからの信号を筋肉へ伝える神経を（　　　）という。',
        '刺激に対して意識と関係なく起こる反応を（　　　）という。',
        'ヘビのように、背骨を持つ動物を（　　　）という。', //190
        'ムカデのように、背骨を持たない動物を（　　　）という。　',
        '雌が体外に卵を産む繁殖形態を（　　　）という。',
        '雌の体内で受精した後に卵が育ち、子としての体ができてから生まれるような繁殖形態を（　　　）という。',
        '外界の温度が変わっても体温が一定に保たれる動物を（　　　）という。',
        '外界の温度が変わるにつれて体温が変わる動物を（　　　）という。', //195
        'セキツイ動物のうち、卵生で、変温動物であり、一生えら呼吸をするものは（　　　）という。',
        'セキツイ動物のうち、卵生で、変温動物であり、えら呼吸をする時期と肺呼吸をする時期があるものは（　　　）という。',
        'セキツイ動物のうち、卵生で、変温動物であり、一生肺呼吸をするものは（　　　）という。',
        'セキツイ動物のうち、卵生で、恒温動物であるものは（　　　）という。',       
        'セキツイ動物のうち、胎生で、恒温動物であるものは（　　　）という。', //200
        '無セキツイ動物のうち、外骨格を持ち、からだが多くの節からできていて、足にも節がある動物をまとめて（　　　）という。',        
        '節足動物の体の外側をおおっている、からだを支えて内部を保護しているかたい殻を（　　　）という。',        
        '節足動物のうち、ザリガニやエビなど、からだが頭胸部・腹部に分かれていて、かたい殻をもつ動物を（　　　）という。',
        '節足動物のうち、バッタやチョウなど、からだが頭部・胸部・腹部に分かれていて、足が6本ある動物を（　　　）という。',
        '節足動物の外骨格は大きくならないので、節足動物は（　　　）して古い外骨格を脱ぎ捨てることで成長する。', //205
        '無セキツイ動物のうち、内臓とそれを包み込むやわらかい膜、節のないやわらかい足がある動物を（　　　）という。',
        '軟体動物にある、内臓を包み込むやわらかい膜を（　　　）という。',
        '動物や植物の器官のうち、同じものから変化したと考えられるからだの部分を（　　　）という。',
        '相同器官のうち、はたらきを失って痕跡のみとなっているものを（　　　）という。',
        '生物が長い期間をかけて変化することを（　　　）という。', //210・↑BA     
        'ある物質が別の物質に変化することを（　　　）という。', //↓BB
        '1種類の物質が2種類以上の物質に分かれる化学変化を（　　　）という。',
        '加熱したとき起こる分解をとくに（　　　）という。',
        '電気のエネルギーによって物質を分解することを（　　　）という。',
        '酸化銀の熱分解は、「酸化銀➡（　　　）+酸素」と表せる。', //215
        '炭酸水素ナトリウムの熱分解は、「炭酸水素ナトリウム➡（　　　）+二酸化炭素+水」と表せる。',
        '水の電気分解は、「水➡（　　　）+酸素]と表せる。',
        '物質をつくっているその最小の粒子を（　　　）とよぶ。',
        'すべての原子をそれぞれの構造にもとづいて並べた表を（　　　）という。',
        'いくつかの原子が結び付き、物質の性質を示す粒子のことを（　　　）という。', //220
        'O₂や、CO₂などの、物質を表す記号を（　　　）という。',
        '酸素などの1種類の原子からできている物質を（　　　）という。',
        '二酸化炭素などの2種類以上の原子からできている物質を（　　　）という。',
        '2種類以上の物質が結びついて、別の物質が生成する化学変化を（　　　）という。',
        '鉄と硫黄が化合してできる物質は（　　　）である。', //225
        '銅と硫黄が化合してできる物質は（　　　）である。',
        '物質と硫黄との化合を硫化といい、硫化によってできる物質を（　　　）という。',
        '化学変化の様子を化学式を用いて表した式を（　　　）という。',
        '物質と酸素との化合を（　　　）という。',
        '酸化によってできる物質を（　　　）という。', //230
        '酸化のうち、光や熱を出しながら激しく進むものをとくに（　　　）という。',
        '鉄と酸素が化合してできる物質は（　　　）である。',
        '炭素が燃焼すると（　　　）ができる。',
        '有機物を燃やすと、二酸化炭素と（　　　）が生じる。',
        '酸化物から酸素を奪う化学変化を（　　　）という。', //235
        '物質がどこにも逃げなければ、化学変化の前後で全体の質量は変化しない。これを（　　　）という。',
        '酸化鉄と炭素の粉末をよく混ぜ、加熱すると、鉄と（　　　）が発生する。',
        '塩酸に炭酸水素ナトリウムを加えると、（　　　）と二酸化炭素と水が発生する。',
        '銅と酸素が化合してできる物質は（　　　）である。',
        '熱を発生する化学変化を（　　　）という。', //240
        '水酸化バリウムと塩化アンモニウムに水を加え反応させると、塩化バリウムと（　　　）と水が発生する。',
        '熱を吸収する化学変化を（　　　）という。',
        '化学変化によって出入りする熱を（　　　）という。',
        '酸化銀の熱分解の化学反応式は、「2Ag₂O ➡ （　　　） + O₂」である。',
        '鉄と硫黄の化合の化学反応式は、「Fe + S ➡ （　　　）」である。', //245
        'マグネシウムの燃焼の化学反応式は、「2Mg + O₂ ➡ （　　　）」である。',
        '酸化銅の還元の化学反応式は、「（　　　） + C ➡ 2Cu + CO₂」である。',
        '炭素の化学式は（　　　）である。',
        'ナトリウムの化学式は（　　　）である。',
        '鉄の化学式は（　　　）である。', //250
        '銅の化学式は（　　　）である。',
        '銀の化学式は（　　　）である。',
        '金の化学式は（　　　）である。',        
        '塩酸（塩化水素）の化学式は（　　　）である。',
        '酸化マグネシウムの化学式は（　　　）である。', //255
        '塩化ナトリウムの化学式は（　　　）である。',
        '（　　　）の化学式はO₂である。', 
        '（　　　）の化学式はH₂である。',
        '（　　　）の化学式はH₂Oである。',
        '（　　　）の化学式はCO₂である。', //260
        '（　　　）の化学式はNaHCO₃である。',
        '（　　　）の化学式はAg₂Oである。', //↑BB
        

    ];
 
    const Answers=[
        '目', //0
        '花弁',
        '柱頭',
        '子房',
        '胚珠',
        '離弁花',
        '合弁花',
        '受粉',
        '果実',
        '種子',
        '種子植物', //10
        '虫媒花',
        '風媒花',
        '裸子植物',
        '被子植物', 
        '光合成',       
        '葉緑体',       
        '二酸化炭素',
        '酸素',
        '葉脈',
        '網状脈', //20
        '平行脈',
        '蒸散',
        '気孔',
        '道管',
        '師管',
        '維管束', 
        '根毛',       
        '双子葉類',       
        '単子葉類',
        '主根', //30
        'ひげ根',
        '合弁花類',
        '離弁花類',
        '胞子',
        'コケ',  
        'ガス',       
        '空気',       
        '有機物',
        '無機物',
        '非金属', //40
        '密度',
        '水上置換法',
        '下方置換法',
        '上方置換法',
        '石灰水',
        '酸素',
        '二酸化炭素',
        'アンモニア',
        '水素',
        '水', //50
        '窒素',
        '状態変化',
        '蒸発',
        '融点',
        '沸点',
        '純粋な物質',
        '混合物',
        '蒸留',
        '水溶液',
        '溶質', //60
        '溶媒',      
        '溶液',      
        '溶解',      
        '同心円',      
        '溶解度',      
        '飽和水溶液',      
        '再結晶',      
        '結晶',      
        '濃度',      
        '質量パーセント濃度', //70
        '光源',       
        '直進',       
        '反射',
        '屈折',
        '入射光',
        '反射光',
        '屈折光',
        '入射角',
        '反射角',
        '屈折角', //80
        '反射',
        '像',
        '乱反射',        
        '全反射',
        '焦点',
        '焦点距離',
        '実像',
        '虚像',
        '音源',
        '振幅', //90
        '振動数', 
        'ヘルツ',
        '弾性', 
        '弾性力',
        '摩擦力',
        '磁力',
        '重力',
        'ニュートン',
        'フック',
        '作用点', //100
        '質量',
        'グラム',
        '圧力',     
        'パスカル',
        '水圧',
        '浮力',
        '大気圧',
        '火山噴出物',       
        '鉱物',       
        '無色鉱物', //110
        '有色鉱物',
        '火成岩',
        '火山岩',
        '深成岩',
        '斑状組織',
        '斑晶',
        '石基',
        '等粒状組織',
        '震源',
        '震央', //120
        '津波',
        '隆起',
        '沈降',
        '初期微動',
        '主要動',
        'P波',
        'S波',
        '初期微動継続時間',
        '震度',
        'マグニチュード', //130
        '風化',
        '侵食',
        '運搬',
        '堆積',
        '断層',
        'しゅう曲or褶曲',
        'かぎ層or鍵層',
        '堆積岩',
        '示相化石',
        '示準化石', //140
        'プレート',  
        '葉緑体',
        '液胞',
        '細胞壁',
        '核',
        '細胞質',
        '細胞膜',
        '細胞の呼吸',
        '単細胞生物',
        '多細胞生物', //150
        '器官',
        '組織',
        '肺胞',    
        '動脈',       
        '静脈',       
        '毛細血管',
        '組織液',
        'リンパ管',
        '赤血球',
        'ヘモグロビン', //160
        '白血球', 
        '血小板',
        '血しょうor血漿',
        '肺循環',       
        '体循環',
        '動脈血',
        '静脈血',
        '炭水化物',
        '脂肪',
        'タンパク質orたんぱく質or蛋白質', //170
        '消化',
        '消化器官',
        '消化管',
        '消化液',
        '消化酵素',
        'アミラーゼ',
        '吸収',
        '排出',
        '尿素',
        '骨格', //180
        '筋肉',    
        '運動器官',       
        '感覚器官',       
        '神経系',
        '中枢神経',
        '末しょう神経or末梢神経',
        '感覚神経',
        '運動神経',
        '反射',
        'セキツイ動物or脊椎動物', //190
        '無セキツイ動物or無脊椎動物',
        '卵生',
        '胎生',
        '恒温動物',
        '変温動物',
        '魚類',
        '両生類',
        'ハチュウ類orは虫類or爬虫類orハ虫類',
        '鳥類',
        'ホニュウ類orほ乳類or哺乳類orホ乳類', //200
        '節足動物',
        '外骨格',
        '甲殻類',
        '昆虫類',
        '脱皮',
        '軟体動物',
        '外とう膜or外套膜',
        '相同器官',
        '痕跡器官',
        '進化', //210
        '化学反応or化学変化',
        '分解',
        '熱分解',
        '電気分解',
        '水素',
        '炭酸ナトリウム',
        '水素',
        '原子',
        '周期表',
        '分子', //220
        '化学式',
        '単体',
        '化合物',
        '化合',
        '硫化鉄',
        '硫化銅',
        '硫化物',
        '化学反応式',
        '酸化',
        '酸化物', //230
        '燃焼',
        '酸化鉄',
        '二酸化炭素',
        '水',
        '還元',
        '質量保存の法則',
        '二酸化炭素',
        '塩化ナトリウム',
        '酸化銅',    
        '発熱反応', //240
        'アンモニア',        
        '吸熱反応',
        '反応熱',
        '4Ag',
        'FeS',
        '2MgO',
        '2CuO',
        'C',
        'Na',
        'Fe', //250 
        'Cu',      
        'Ag',        
        'Au',
        'HCl',
        'MgO',
        'NaCl',
        '酸素',
        '水素',
        '水',
        '二酸化炭素', //260
        '炭酸水素ナトリウム',
        '酸化銀',
    ];
     
   function removeAllChildren(element){
       while (element.firstChild){
           element.removeChild(element.firstChild);
        };
    }//removeAllChlldren

   var Answer=[];
   var start;
   function anykeyonclick(){
        start=new Date().getTime();
        removeAllChildren(ResultArea);
        removeAllChildren(QuestionArea)
        TextReset.onclick();

        const header=document.createElement('h4');
        header.innerText='問題　（　　　）に入る語句を答えなさい。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　挑戦ジャンル　'+genre+'\n';
        QuestionArea.appendChild(header);

        var randoms=[];
        var Question=[];
        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            if(!randoms.includes(a)){
                randoms.push(a);
                Question[i]=Questions[a];

                if(a===136){
                    Answer[i]=['しゅう曲','褶曲'];
                }else if(a===137){
                    Answer[i]=['かぎ層','鍵層'];
                }else if(a===163){
                    Answer[i]=['血しょう','血漿'];
                }else if(a===170){
                    Answer[i]=['タンパク質','たんぱく質','蛋白質'];
                }else if(a===186){
                    Answer[i]=['末しょう神経','末梢神経'];
                }else if(a===190){
                    Answer[i]=['セキツイ動物','脊椎動物'];
                }else if(a===191){
                    Answer[i]=['無セキツイ動物','無脊椎動物'];
                }else if(a===198){
                    Answer[i]=['ハチュウ類','爬虫類','ハ虫類','は虫類'];
                }else if(a===200){
                    Answer[i]=['ホニュウ類','哺乳類','ホ乳類','ほ乳類'];
                }else if(a===207){
                    Answer[i]=['外とう膜','外套膜'];
                }else if(a===211){
                    Answer[i]=['化学変化','化学反応'];
                }                
                else{
                    Answer[i]=[Answers[a]];
                };
            }else{
                i=i-1;
                continue;
            };
            var paragraph=document.createElement('span');
            paragraph.innerText='（'+i+'）'+' '+Question[i]+'\n';
            QuestionArea.appendChild(paragraph);
        };
    }//anykeyonclick

   const AA=document.getElementById('aa');
   AA.onclick=()=>{
       genre="1年 生物"
       min=0;
       max=35;
       anykeyonclick();
    }//AA.onclick

   const AB=document.getElementById('ab');
   AB.onclick=()=>{
       genre="1年 化学"
       min=36;
       max=70;
       anykeyonclick();
    }//AB.onclick

   const AC=document.getElementById('ac');
   AC.onclick=()=>{
       genre="1年 物理"
       min=71;
       max=107;
       anykeyonclick();
    }//AC.onclick

   const AD=document.getElementById('ad');
   AD.onclick=()=>{
       genre="1年 地学"
       min=108;
       max=141;
       anykeyonclick();
    }//AD.onclick

   const AE=document.getElementById('ae');
   AE.onclick=()=>{
       genre="1年 全範囲"
       min=0;
       max=141;
       anykeyonclick();
    }//AE.onclick

   const BA=document.getElementById('ba');
   BA.onclick=()=>{
       genre="2年 生物"
       min=142;
       max=210;
       anykeyonclick();
    }//BA.onclick

   const BB=document.getElementById('bb');
   BB.onclick=()=>{
       genre="2年 化学"
       min=211;
       max=262;
       anykeyonclick();
    }//BB.onclick
   
   const BC=document.getElementById('bc');
   BC.onclick=()=>{
       //genre="2年 物理"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//BC.onclick
   
   const BD=document.getElementById('bd');
   BD.onclick=()=>{
       //genre="2年 地学"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//BD.onclick
   
   const BE=document.getElementById('be');
   BE.onclick=()=>{
       //genre="2年 全範囲"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//BE.onclick
   
   const CA=document.getElementById('ca');
   CA.onclick=()=>{
       //genre="3年 生物"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//CA.onclick
   
   const CB=document.getElementById('cb');
   CB.onclick=()=>{
       //genre="3年 化学"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
   }//CB.onclick
   
   const CC=document.getElementById('cc');
   CC.onclick=()=>{
       //genre="3年 物理"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//CC.onclick
   
   const CD=document.getElementById('cd');
   CD.onclick=()=>{
       //genre="3年 地学"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//CD.onclick
   
   const CE=document.getElementById('ce');
   CE.onclick=()=>{
       //genre="3年 全範囲"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//CE.onclick
   
   const A=document.getElementById('a');
   A.onclick=()=>{
       //genre="1~3年 生物"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//A.onclick
   
   const B=document.getElementById('b');
   B.onclick=()=>{
       //genre="1~3年 化学"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
   }//B.onclick
   
   const C=document.getElementById('c');
   C.onclick=()=>{
       //genre="1~3年 物理"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//C.onclick
   
   const D=document.getElementById('d');
   D.onclick=()=>{
       //genre="1~3年 地学"
       //min=0;
       //max=0;
       //anykeyonclick();
       Wait();
    }//D.onclick
   
   const E=document.getElementById('e');
   E.onclick=()=>{
       //genre="1~3年 全範囲"
       //min=1;
       //max=0;
       //anykeyonclick();
       Wait();
    }//E.onclick

   const TextReset=document.getElementById('textreset');
   TextReset.onclick=()=>{
           var inputs = document.getElementsByTagName("input");
           for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            };
            document.getElementById('Answer1').style.backgroundColor='white';
            document.getElementById('Answer2').style.backgroundColor='white';
            document.getElementById('Answer3').style.backgroundColor='white';
            document.getElementById('Answer4').style.backgroundColor='white';
            document.getElementById('Answer5').style.backgroundColor='white';
            document.getElementById('Answer6').style.backgroundColor='white';
            document.getElementById('Answer7').style.backgroundColor='white';
            document.getElementById('Answer8').style.backgroundColor='white';
            document.getElementById('Answer9').style.backgroundColor='white';
            document.getElementById('Answer10').style.backgroundColor='white'; 
    }//TextReset.onclick

   const Check=document.getElementById('check');
   Check.onclick=()=>{
       if(typeof Answer[1] === "undefined" ){
           alert('挑戦する範囲を選び、問題を解いてください。')
           return;
       }else{
           var finish=new Date().getTime();
           var q=0;
           const Answer1=document.getElementById('Answer1');
           var answer1=Answer1.value;
           if(answer1===Answer[1]||Answer[1].includes(answer1)){
            q=q+1;
            document.getElementById('Answer1').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer1').style.backgroundColor='orange';
           }
           const Answer2=document.getElementById('Answer2');
           var answer2=Answer2.value;
           if(answer2===Answer[2]||Answer[2].includes(answer2)){
            q=q+1;
            document.getElementById('Answer2').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer2').style.backgroundColor='orange';
           }
           const Answer3=document.getElementById('Answer3');
           var answer3=Answer3.value;
           if(answer3===Answer[3]||Answer[3].includes(answer3)){
            q=q+1;
            document.getElementById('Answer3').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer3').style.backgroundColor='orange';
           }
           const Answer4=document.getElementById('Answer4');
           var answer4=Answer4.value;
           if(answer4===Answer[4]||Answer[4].includes(answer4)){
            q=q+1;
            document.getElementById('Answer4').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer4').style.backgroundColor='orange';
           }
           const Answer5=document.getElementById('Answer5');
           var answer5=Answer5.value;
           if(answer5===Answer[5]||Answer[5].includes(answer5)){
            q=q+1;
            document.getElementById('Answer5').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer5').style.backgroundColor='orange';
           }
           const Answer6=document.getElementById('Answer6');
           var answer6=Answer6.value;
           if(answer6===Answer[6]||Answer[6].includes(answer6)){
            q=q+1;
            document.getElementById('Answer6').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer6').style.backgroundColor='orange';
           }
           const Answer7=document.getElementById('Answer7');
           var answer7=Answer7.value;
           if(answer7===Answer[7]||Answer[7].includes(answer7)){
            q=q+1;
            document.getElementById('Answer7').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer7').style.backgroundColor='orange';
           }
           const Answer8=document.getElementById('Answer8');
           var answer8=Answer8.value;
           if(answer8===Answer[8]||Answer[8].includes(answer8)){
            q=q+1;
            document.getElementById('Answer8').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer8').style.backgroundColor='orange';
           }
           const Answer9=document.getElementById('Answer9');
           var answer9=Answer9.value;
           if(answer9===Answer[9]||Answer[9].includes(answer9)){
            q=q+1;
            document.getElementById('Answer9').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer9').style.backgroundColor='orange';
           }
           const Answer10=document.getElementById('Answer10');
           var answer10=Answer10.value;
           if(answer10===Answer[10]||Answer[10].includes(answer10)){
            q=q+1;
            document.getElementById('Answer10').style.backgroundColor='skyblue';
           }else{
            document.getElementById('Answer10').style.backgroundColor='orange';
           }

           if(q===10){
               var Time=(finish-start)/1000;
               var result='この調子で頑張ってください。記録：'+Time+'秒';
           }else if(7<q&&q<10){
               var result='全問正解までもう少し。がんばれ。'
           }else if(3<q&&q<8){
               var result='半分程度はできています。もう少し勉強しよう。'
           }else if(q<4){
               var result='あまりできていません。勉強しよう。'
           }

           const ResultArea=document.getElementById('result-area');
           removeAllChildren(ResultArea);

           const header=document.createElement('h3');
           header.innerText='結果と答え';
           ResultArea.appendChild(header)

           const paragraph=document.createElement('p');
           paragraph.innerText= q + '問正解です。' + result +'\n \n'+ '(1)'+Answer[1]+'　(2)'+Answer[2]+'　(3)'+Answer[3]+'　(4)'+Answer[4]+'　(5)'+Answer[5]+'　(6)'+Answer[6]+'　(7)'+Answer[7]+'　(8)'+Answer[8]+'　(9)'+Answer[9]+'　(10)'+Answer[10];;
           ResultArea.appendChild(paragraph);

       }
    }//Check.onclick

    function Wait(){
        Answer[1]=undefined;
        removeAllChildren(QuestionArea);
        removeAllChildren(ResultArea);
        TextReset.onclick();

        const header=document.createElement('h3');
        header.innerText='未実装です。実装されるまでお待ちください。\n実装済み：1年 生物・1年 化学・1年 物理・1年 地学・1年 全範囲・2年 生物・2年 化学'
        QuestionArea.appendChild(header);
    }//Wait

})();
