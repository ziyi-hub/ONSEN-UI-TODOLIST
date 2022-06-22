var num = 0
var currentIndex = 0;
var playList = [
    "Lemon.flac/lemon.jpg/" +
"        [00:00.00]Lemon - 米津玄師 (よねづ けんし)\n" +
"        [00:01.60]夢ならば\n" +
"        [00:02.50]どれほどよかったでしょう\n" +
"        [00:06.96]未だにあなたのことを夢にみる\n" +
"        [00:12.14]忘れた物を取りに帰るように\n" +
"        [00:17.68]古びた思い出の埃を払う\n" +
"        [00:26.13]戻らない幸せがあることを\n" +
"        [00:31.43]最後にあなたが教えてくれた\n" +
"        [00:36.93]言えずに隠してた昏い過去も\n" +
"        [00:42.53]あなたがいなきゃ\n" +
"        [00:44.91]永遠に昏いまま\n" +
"        [00:48.67]きっともうこれ以上\n" +
"        [00:51.15]傷つくことなど\n" +
"        [00:53.80]ありはしないとわかっている\n" +
"        [00:58.54]あの日の悲しみさえ\n" +
"        [01:01.28]あの日の苦しみさえ\n" +
"        [01:04.11]そのすべてを愛してた\n" +
"        [01:07.04]あなたとともに\n" +
"        [01:09.64]胸に残り離れない\n" +
"        [01:12.59]苦いレモンの匂い\n" +
"        [01:15.65]雨が降り止むまでは帰れない\n" +
"        [01:21.30]今でもあなたはわたしの光\n" +
"        [01:37.93]暗闇であなたの背をなぞった\n" +
"        [01:43.16]その輪郭を鮮明に覚えている\n" +
"        [01:48.78]受け止めきれないものと\n" +
"        [01:51.81]出会うたび\n" +
"        [01:54.24]溢れてやまないのは涙だけ\n" +
"        [02:00.37]何をしていたの\n" +
"        [02:02.81]何を見ていたの\n" +
"        [02:05.58]わたしの知らない横顔で\n" +
"        [02:10.66]どこかであなたが今\n" +
"        [02:13.12]わたしと同じ様な\n" +
"        [02:15.92]涙にくれ\n" +
"        [02:17.31]淋しさの中にいるなら\n" +
"        [02:21.41]わたしのことなどどうか\n" +
"        [02:24.67]忘れてください\n" +
"        [02:27.48]そんなことを心から願うほどに\n" +
"        [02:33.17]今でもあなたはわたしの光\n" +
"        [02:41.76]自分が思うより\n" +
"        [02:46.96]恋をしていたあなたに\n" +
"        [02:52.37]あれから思うように\n" +
"        [02:58.00]息ができない\n" +
"        [03:03.58]あんなに側にいたのに\n" +
"        [03:08.97]まるで嘘みたい\n" +
"        [03:14.18]とても忘れられない\n" +
"        [03:19.80]それだけが確か\n" +
"        [03:30.69]あの日の悲しみさえ\n" +
"        [03:33.16]あの日の苦しみさえ\n" +
"        [03:35.87]そのすべてを愛してた\n" +
"        [03:38.67]あなたとともに\n" +
"        [03:41.27]胸に残り離れない\n" +
"        [03:44.41]苦いレモンの匂い\n" +
"        [03:47.29]雨が降り止むまでは帰れない\n" +
"        [03:52.83]切り分けた果実の片方の様に\n" +
"        [03:58.39]今でもあなたはわたしの光",


"House_Of_Cards.mp3/house_of_cart.jpg/" +
"        [00:00.00]House Of Cards - BTS(방탄소년단)\n" +
"        [00:20.23]또 위태로워 또 위험해\n" +
"        [00:26.42]So bad (why) 우린, yeah\n" +
"        [00:29.40]더 버티기도 지탱하기도\n" +
"        [00:34.01]So hard (hard) 안돼\n" +
"        [00:36.74]이미 알고 있어도\n" +
"        [00:38.65]멈출 수가 없었어\n" +
"        [00:42.99]No way, no way, no way 쓰러져\n" +
"        [00:45.57]시간이 지나갈수록\n" +
"        [00:47.67]더 망가져가기만 해\n" +
"        [00:52.08]No way, no way 또 무너지는 걸\n" +
"        [00:56.79]카드로 만든 집 그 속에서 우린\n" +
"        [01:01.41]끝이 보인대도 곧 쓰러진대도\n" +
"        [01:06.06]카드로 만든 집 바보같이 우린\n" +
"        [01:12.81]헛된 꿈이래도 이대로 조금 더 stay, yeah\n" +
"        [01:31.07]내일이란 게 없듯이\n" +
"        [01:33.25]다음이란 건 없듯이\n" +
"        [01:37.13]지금 내겐 눈 앞에 너를 뺀 모든 게\n" +
"        [01:38.29]지독히 깜깜한 어둠이지\n" +
"        [01:40.58]입버릇처럼 말해\n" +
"        [01:42.54]우린 결국엔 안 돼\n" +
"        [01:43.82]그래도 난 계속 바래\n" +
"        [01:48.87]마지막도 너와 함께라면 I'm okay\n" +
"        [01:49.84]이미 알고 있어도\n" +
"        [01:51.71]멈출 수가 없었어\n" +
"        [01:57.45]No way, no way, no way 쓰러져\n" +
"        [01:58.56]시간이 지나갈수록\n" +
"        [02:00.78]더 망가져가기만 해\n" +
"        [02:05.36]No way, no way 또 무너지는 걸\n" +
"        [02:09.89]카드로 만든 집 그 속에서 우린\n" +
"        [02:14.37]끝이 보인대도 곧 쓰러진대도\n" +
"        [02:18.95]카드로 만든 집 바보같이 우린\n" +
"        [02:23.60]헛된 꿈이래도 이대로 조금 더\n" +
"        [02:28.15]시간을 slow down\n" +
"        [02:32.51]조금만 더, 머물러 줘, oh\n" +
"        [02:37.15]Please, baby, calm down\n" +
"        [02:39.40]조금만 더\n" +
"        [02:48.74]더 위태로워 더 위험해\n" +
"        [02:53.27]So bad (so bad) 우린\n" +
"        [02:57.88]더 버티기도 지탱하기도\n" +
"        [03:04.44]So hard 또 무너지는 걸, ah\n" +
"        [03:06.97]카드로 만든 집 그 속에서 우린\n" +
"        [03:11.56]끝이 보인대도 곧 쓰러진대도\n" +
"        [03:16.08]카드로 만든 집 바보같이 우린\n" +
"        [03:023.03]헛된 꿈이래도 이대로 조금 더 stay, yeah",


"FAKE_LOVE_BTS.mp3/BTS_Fake_Love.png/" +
"        [00:00.00]FAKE LOVE - BTS(방탄소년단)\n" +
"        [00:01]널 위해서라면 난\n" +
"        [00:02]슬퍼도 기쁜 척 할 수가 있었어" +
"        [00:06]널 위해서라면 난" +
"        [00:08]아파도 강한 척 할 수가 있었어" +
"        [00:12]사랑이 사랑만으로 완벽하길" +
"        [00:15]내 모든 약점들은 다 숨겨지길" +
"        [00:19]이뤄지지 않는 꿈속에서" +
"        [00:21]피울 수 없는 꽃을 키웠어" +
"        [00:24]I'm so sick of this" +
"        [00:25]Fake love fake love fake love" +
"        [00:30]I'm so sorry but it's" +
"        [00:31]Fake love fake love fake love" +
"        [00:37]I wanna be a good man just for you" +
"        [00:40]세상을 줬네 just for you" +
"        [00:43]전부 바꿨어 just for you" +
"        [00:47]Now I dunno me who are you" +
"        [00:50]우리만의 숲 너는 없었어" +
"        [00:53]내가 왔던 route 잊어버렸어" +
"        [00:56]나도 내가 누구였는지도" +
"        [00:58]잘 모르게 됐어" +
"        [00:59]거울에다 지껄여봐 너는 대체 누구니" +
"        [01:02]널 위해서라면 난" +
"        [01:04]슬퍼도 기쁜 척 할 수가 있었어" +
"        [01:08]널 위해서라면 난" +
"        [01:10]아파도 강한 척 할 수가 있었어" +
"        [01:14]사랑이 사랑만으로 완벽하길" +
"        [01:17]내 모든 약점들은 다 숨겨지길" +
"        [01:21]이뤄지지 않는 꿈속에서" +
"        [01:23]피울 수 없는 꽃을 키웠어" +
"        [01:26]Love you so bad love you so bad" +
"        [01:29]널 위해 예쁜 거짓을 빚어내" +
"        [01:33]Love it's so mad" +
"        [01:34]Love it's so mad" +
"        [01:36]날 지워 너의 인형이 되려 해" +
"        [01:39]Love you so bad" +
"        [01:40]Love you so bad" +
"        [01:42]널 위해 예쁜 거짓을 빚어내" +
"        [01:45]Love it's so mad" +
"        [01:47]Love it's so mad" +
"        [01:48]날 지워 너의 인형이 되려 해" +
"        [01:51]I'm so sick of this" +
"        [01:52]Fake love fake love fake love" +
"        [01:57]I'm so sorry but it's" +
"        [01:58]Fake love fake love fake love" +
"        [02:05]Why you sad I don't know 난 몰라" +
"        [02:08]웃어봐 사랑해 말해봐" +
"        [02:11]나를 봐 나조차도 버린 나" +
"        [02:14]너조차 이해할 수 없는 나" +
"        [02:17]낯설다 하네" +
"        [02:18]니가 좋아하던 나로 변한 내가" +
"        [02:20]아니라 하네" +
"        [02:21]예전에 니가 잘 알고 있던 내가" +
"        [02:23]아니긴 뭐가 아냐 난 눈 멀었어" +
"        [02:27]사랑은 뭐가 사랑" +
"        [02:28]It's all fake love" +
"        [02:29]Woo I dunno I dunno I dunno why" +
"        [02:35]Woo 나도 날 나도 날 모르겠어" +
"        [02:42]Woo I just know I just know" +
"        [02:44]I just know why" +
"        [02:47]Cuz it's all fake love" +
"        [02:49]Fake love fake love" +
"        [02:53]Love you so bad love you so bad" +
"        [02:56]널 위해 예쁜 거짓을 빚어내" +
"        [02:59]Love it's so mad" +
"        [03:01]Love it's so mad" +
"        [03:02]날 지워 너의 인형이 되려 해" +
"        [03:06]Love you so bad" +
"        [03:07]Love you so bad" +
"        [03:09]널 위해 예쁜 거짓을 빚어내" +
"        [03:12]Love it's so mad" +
"        [03:13]Love it's so mad" +
"        [03:15]날 지워 너의 인형이 되려 해" +
"        [03:18]I'm so sick of this" +
"        [03:19]Fake love fake love fake love" +
"        [03:24]I'm so sorry but it's" +
"        [03:25]Fake love fake love fake love" +
"        [03:31]널 위해서라면 난" +
"        [03:32]슬퍼도 기쁜 척 할 수가 있었어" +
"        [03:37]널 위해서라면 난" +
"        [03:39]아파도 강한 척 할 수가 있었어" +
"        [03:43]사랑이 사랑만으로 완벽하길" +
"        [03:46]내 모든 약점들은 다 숨겨지길" +
"        [03:49]이뤄지지 않는 꿈속에서" +
"        [03:51]피울 수 없는 꽃을 키웠어",


"Glad_You_Came.mp3/the_wanted.jpg/" +
"        [00:00.00]Glad You Came - The Wanted\n" +
"        [00:01.00]The sun goes down\n" +
"        [00:03.00]the stars come out\n" +
"        [00:05.50]And all that counts\n " +
"        [00:07.00]is here and now\n" +
"        [00:09.96]My universe will never be the same\n" +
"        [00:14.14]I'm glad you came (Came, came, came)\n" +
"        [00:34.00]You cast a spell on me, spell on me\n" +
"        [00:36.00]You hit me like the sky fell on me, fell on me\n" +
"        [00:40.00]And I decided you look well on me, well on me\n" +
"        [00:44.00]So let's go somewhere no one else can see, you and me\n" +
"        [00:48.00]Turn the lights out now\n" +
"        [00:50.00]Now I'll take you by the hand\n" +
"        [00:52.00]Hand you another drink\n" +
"        [00:54.00]Drink it if you can\n" +
"        [00:55.00]Can you spend a little time?\n" +
"        [00:58.00]Time is slipping away\n" +
"        [00:59.00]Away from us, so stay\n" +
"        [01:01.00]Stay with me, I can make\n" +
"        [01:03.00]Make you glad you came\n" +
"        [01:07.00]The sun goes down, the stars come out\n" +
"        [01:11.00]And all that counts is here and now\n" +
"        [01:13.00]My universe will never be the same\n" +
"        [01:16.00]I'm glad you came\n" +
"        [01:18.00]I'm glad you came\n" +
"        [01:34.00]You cast a spell on me, spell on me\n" +
"        [01:37.00]You hit me like the sky fell on me, fell on me\n" +
"        [01:41.00]And I decided you look well on me, well on me\n" +
"        [01:44.00]So let's go somewhere no one else can see, you and me\n" +
"        [01:48.00]Turn the lights out now\n" +
"        [01:50.00]Now I'll take you by the hand\n" +
"        [01:52.00]Hand you another drink\n" +
"        [01:54.00]Drink it if you can\n" +
"        [01:56.00]Can you spend a little time?\n" +
"        [01:58.00]Time is slipping away\n" +
"        [02:00.00]Away from us, so stay\n" +
"        [02:02.00]Stay with me, I can make\n" +
"        [02:03.00]Make you glad you came\n" +
"        [02:07.00]The sun goes down, the stars come out\n" +
"        [02:11.00]And all that counts is here and now\n" +
"        [02:13.00]My universe will never be the same\n" +
"        [02:17.00]I'm glad you came\n" +
"        [02:19.00]I'm glad you came\n" +
"        [02:27.00]I'm glad you came\n" +
"        [02:34.00]So glad you came\n" +
"        [02:42.00]I'm glad you came\n" +
"        [02:49.00]I'm glad you came\n" +
"        [02:53.00]The sun goes down, the stars come out\n" +
"        [02:57.00]And all that counts is here and now\n" +
"        [02:59.00]My universe will never be the same\n" +
"        [03:03.00]I'm glad you came\n" +
"        [03:05.00]I'm glad you came\n" +
"        ",


"Zedd_Alessia_Cara_Stay.mp3/stay.jpg/" +
"        [00:00.00]Stay - Zedd Alessia Cara\n" +
"        [00:10.32]Waiting for the time to pass you by\n" +
"        [00:14.79]Hope the winds of change will change your mind\n" +
"        [00:19.24]I could give a thousand reasons why\n" +
"        [00:23.68]And I know you, and you've got to\n" +
"        [00:29.06]Make it on your own, but we don't have to grow up\n" +
"        [00:31.26]We can stay forever young\n" +
"        [00:33.75]Living on my sofa, drinking rum and cola\n" +
"        [00:35.95]Underneath the rising sun\n" +
"        [00:38.45]I could give a thousand reasons why\n" +
"        [00:42.34]But you're going, and you know that\n" +
"        [00:46.63]All you have to do is stay a minute\n" +
"        [00:49.89]Just take your time\n" +
"        [00:52.20]The clock is ticking, so stay\n" +
"        [00:56.13]All you have to do is wait a second\n" +
"        [00:59.27]Your hands on mine\n" +
"        [01:01.51]The clock is ticking, so stay\n" +
"        [01:15.11]All you have to do is\n" +
"        [01:24.46]All you have to do is stay\n" +
"        [01:27.95]Won't admit what I already know\n" +
"        [01:32.34]I've never been the best at letting go\n" +
"        [01:37.25]I don't wanna spend the night alone\n" +
"        [01:40.96]Guess I need you, and I need to\n" +
"        [01:46.55]Make it on my own, but I don't wanna grow up\n" +
"        [01:48.88]We can stay forever young\n" +
"        [01:51.33]Living on my sofa, drinking rum and cola\n" +
"        [01:53.57]Underneath the rising sun\n" +
"        [01:56.10]I could give a million reasons why\n" +
"        [01:59.76]But you're going, and you know that\n" +
"        [02:04.37]All you have to do is stay a minute\n" +
"        [02:07.43]Just take your time\n" +
"        [02:09.86]The clock is ticking, so stay\n" +
"        [02:13.73]All you have to do is wait a second\n" +
"        [02:16.93]Your hands on mine\n" +
"        [02:19.30]The clock is ticking, so stay\n" +
"        [02:32.64]All you have to do is\n" +
"        [02:42.16]All you have to do is stay\n" +
"        [02:46.96]All you have to do is stay\n" +
"        [02:52.28]So stay, yeah\n" +
"        [03:01.02]All you have to do is stay a minute\n" +
"        [03:06.15]Just take your time\n" +
"        [03:06.53]The clock is ticking, so stay\n" +
"        [03:09.93]All you have to do is wait a second\n" +
"        [03:13.42]Your hands on mine\n" +
"        [03:15.66]The clock is ticking, so stay\n" +
"        [03:19.65]All you have to do is stay",


"Ice_paper_心如止水.mp3/ice_water.jpg/" +
"        [00:00.00]心如止水 - Ice paper\n" +
"        [00:01.04]talking to the moon 放不下的理由\n" +
"        [00:04.20]是不是会担心 变成一只野兽\n" +
"        [00:07.46]walking on the roof 为心跳的节奏\n" +
"        [00:11.73]是不是会暂停 在世界的尽头\n" +
"        [00:14.99]浸泡在十公升的瓶里\n" +
"        [00:19.26]单纯想要呼吸 讨厌云里雾里\n" +
"        [00:22.52]出没在被遗忘的抽屉\n" +
"        [00:26.79]你曾经的手笔 写着心口不一\n" +
"        [00:31.31]现在是黑夜白昼我都随便\n" +
"        [00:35.07]像迷路的天鹅游失在水面\n" +
"        [00:38.83]尽力去捕捉恶梦里的碎片\n" +
"        [00:41.60]不需要你的歌来帮我催眠\n" +
"        [00:44.85]talking to the moon 放不下的理由\n" +
"        [00:49.12]是不是会担心 变成一只野兽\n" +
"        [00:52.88]walking on the roof 为心跳的节奏\n" +
"        [00:56.64]是不是会暂停 在时间的尽头\n" +
"        [00:59.90]说不完的话 找不完的借口\n" +
"        [01:04.16]是不是会狠心 把我骄傲解剖\n" +
"        [1:07.42]爱着谁的她 能否将你接受\n" +
"        [01:11.69]是不是会上瘾 拜托慢些降落\n" +
"        [01:15.45]华丽的红房间 发霉的旧唱片\n" +
"        [01:19.26]没必要听个遍 掉了漆的播放键\n" +
"        [01:22.77]你情愿冒着险 睡在他的身边\n" +
"        [01:26.79]没耐心去分辨 谁和谁能够走多远\n" +
"        [01:30.55]穿过几条街就能找到关键\n" +
"        [01:34.32]解开我的问题没什么悬念\n" +
"        [01:37.83]转了几个弯还是回到原点\n" +
"        [01:41.74]我该如何出现在你的面前\n" +
"        [01:45.50]talking to the moon 放不下的理由\n" +
"        [01:49.27]是不是会担心 变成一只野兽\n" +
"        [01:53.03]walking on the roof 为心跳的节奏\n" +
"        [01:56.80]是不是会暂停 在时间的尽头\n" +
"        [02:00.05]说不完的话 找不完的借口\n" +
"        [02:04.06]是不是会狠心 把我骄傲解剖\n" +
"        [02:07.33]爱着谁的她 能否将你接受\n" +
"        [02:11.85]是不是会上瘾 拜托慢些降落\n" +
"        [02:14.86]talking to the moon 放不下的理由\n" +
"        [02:19.37]是不是会担心 变成一只野兽\n" +
"        [02:22.38]walking on the roof 为心跳的节奏\n" +
"        [02:26.65]是不是会暂停 在时间的尽头\n" +
"        [02:29.91]说不完的话 找不完的借口\n" +
"        [02:34.18]是不是会狠心 把我骄傲解剖\n" +
"        [02:37.44]爱着谁的她 能否将你接受\n" +
"        [02:42.20]是不是会上瘾 拜托慢些降落"];

function setup(){
    var audio = document.querySelector("#song");
    audio.src = "../musique/"+playList[currentIndex].split("/")[0];
    document.querySelector("#titleSpan").innerHTML = playList[currentIndex].split("/")[0].split(".")[0];
    var con = document.getElementsByClassName("content")[0];
    var lrc = playList[currentIndex].split("/")[2]
    var lrcArr = lrc.split("[");
    var html = "";
    for(var i=0; i < lrcArr.length ; i++){
        var arr = lrcArr[i].split("]")
        var time = arr[0].split(".")
        var timer = time[0].split(":")
        var ms = timer[0] * 60 + timer[1] * 1
        var text = arr[1]
        if(text){
            html += "<p id=" + ms +">" + text + "</p>"
        }
        con.innerHTML = html
    }

    var oP = con.getElementsByTagName("p");
    audio.addEventListener("timeupdate",function(){
        var curTime = parseInt(this.currentTime)
        if(document.getElementById(curTime)){
            for(var i=0; i < oP.length ; i++){
                oP[i].style.cssText = "font-size: 3em;"
            }
            document.getElementById(curTime).style.cssText =
                "background:linear-gradient(-3deg,#eebd89 0%,#d13abd 100%); " +
                "-webkit-background-clip: text; " +
                "color:transparent; " +
                "font-size: 3.5em; ";
            if(oP[ 7 + num].id === curTime){
                con.style.top = -20 * num + "px"
                num++
            }
        }
    })
}

function playMusic(){
    var audio = document.querySelector("#song");
    audio.play();
}

function pause(){
    var audio = document.querySelector("#song");
    audio.pause()
    document.querySelector("#playOrPauseImg").setAttribute("src", "../img/arrete.png");
}

function jouerPre(){
    var avant = document.querySelector("#prevImg")
    avant.onclick = function(){
        if(currentIndex === 0){
            currentIndex = playList.length - 1;
        }else{
            currentIndex--;
        }
        document.querySelector("#playOrPauseImg").setAttribute("src", "../img/jouer.jpg");
        setup();
        document.querySelector("#image").style.backgroundImage = 'url(../img/' + playList[currentIndex].split("/")[1] + ')';
        playMusic();
    };
}

function jouerSuiv(){
    var suivant = document.querySelector("#nextImg")
    suivant.onclick = function(){
        if(currentIndex === playList.length - 1){
            currentIndex = 0;
        }else{
            currentIndex++;
        }
        document.querySelector("#playOrPauseImg").setAttribute("src", "../img/jouer.jpg");
        setup();
        document.querySelector("#image").style.backgroundImage = 'url(../img/' + playList[currentIndex].split("/")[1] + ')';
        playMusic();
    };
}


function time(){
    var audio = document.querySelector("#song");
    audio.addEventListener("timeupdate", function(){
        var currentTime = audio.currentTime;
        var totalTime = audio.duration;
        if(!isNaN(totalTime)){
            var rate = currentTime / totalTime;
            let minute = currentTime / 60;
            let minutes = parseInt(minute);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            let second = currentTime % 60;
            let seconds = Math.round(second);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            let minute2 = totalTime / 60;
            let minutes2 = parseInt(minute2);
            if (minutes2 < 10) {
                minutes2 = "0" + minutes2;
            }
            let second2 = totalTime % 60;
            let seconds2 = Math.round(second2);
            if (seconds2 < 10) {
                seconds2 = "0" + seconds2;
            }

            document.querySelector("#playTimeSpan").innerHTML = minutes+":"+seconds
            document.querySelector("#totalTimeSpan").innerHTML = minutes2+":"+seconds2
            document.querySelector("#progressDiv").style.width = rate*945 + "px"
            document.querySelector("#pointerImg").style.left = 940*rate-9 + "px"
        }
    });
}

function setParole(){
    var lrcDiv = document.getElementById("lrcDiv");
    var con = document.getElementsByClassName("content")[0];
    var lrc = lrcDiv.value;
    var lrcArr = lrc.split("[");
    var html = "";
    for(var i=0; i < lrcArr.length ; i++){
        var arr = lrcArr[i].split("]")
        var time = arr[0].split(".")
        var timer = time[0].split(":")
        var ms = timer[0] * 60 + timer[1] * 1
        var text = arr[1]
        if(text){
            html += "<p id=" + ms +">" + text + "</p>"
        }
        con.innerHTML = html
    }

    var audio = document.querySelector("#song");
    var oP = con.getElementsByTagName("p");
    audio.addEventListener("timeupdate",function(){
        var curTime = parseInt(this.currentTime)
        if(document.getElementById(curTime)){
            for(var i=0; i < oP.length ; i++){
                oP[i].style.cssText = "font-size: 3em;"
            }
            document.getElementById(curTime).style.cssText =
                "background:linear-gradient(-3deg,#eebd89 0%,#d13abd 100%); " +
                "-webkit-background-clip: text; " +
                "color:transparent; " +
                "font-size: 3.5em; ";
            if(oP[ 7 + num].id === curTime){
                con.style.top = -200 * num + "px"
                num++
            }
        }
    })
}

window.onload = function init() {
    time()
    setup()
    jouerPre()
    jouerSuiv()
    setParole()
    var icon = document.querySelector("#playOrPauseImg")
    var jouer = false;
    icon.onclick = function () {
        if (jouer === true) {
            playMusic()
            document.querySelector("#playOrPauseImg").setAttribute("src", "../img/jouer.jpg");
        } else {
            pause()
        }
        jouer = !jouer
    }
}
