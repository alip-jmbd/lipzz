document.addEventListener('DOMContentLoaded', function () {
    const playlistData = {
    LyMusicV1: [
        { title: "21 Guns - Green Day", src: "https://files.catbox.moe/vcf5d3.mp3" },
        { title: "A Little Piece Of Heaven - Avenged Sevenfold", src: "https://files.catbox.moe/rcj6jg.mp3" },
        { title: "Alone - Alan Walker", src: "https://files.catbox.moe/icafek.mp3" },
        { title: "American Idiot - Green Day", src: "https://files.catbox.moe/yjkeil.mp3" },
        { title: "Anything - Adrianne Lenker", src: "https://files.catbox.moe/hq6br0.mp3" },
        { title: "Bad Liar - Imagine Dragons", src: "https://files.catbox.moe/aa6l6m.mp3" },
        { title: "Best Part (feat. H.E.R.) - Daniel Caesar", src: "https://files.catbox.moe/88wvhf.mp3" },
        { title: "Bloodline - Ariana Grande", src: "https://files.catbox.moe/hqvetl.mp3" },
        { title: "Blue - Yung Kai", src: "https://files.catbox.moe/hto3uu.mp3" },
        { title: "Can I Be Him - James Arthur", src: "https://files.catbox.moe/1pyy3r.mp3" },
        { title: "Canon Rock - JerryC", src: "https://files.catbox.moe/w6x96o.mp3" },
        { title: "Cinnamon Girl - Lana Del Rey", src: "https://files.catbox.moe/xhqr7d.mp3" },
        { title: "Consume - Chase Atlantic", src: "https://files.catbox.moe/cyejm6.mp3" },
        { title: "Dandelions - Ruth B.", src: "https://files.catbox.moe/mln6zh.mp3" },
        { title: "Dear God - Avenged Sevenfold", src: "https://files.catbox.moe/53d36x.mp3" },
        { title: "Do You Like Me - Daniel Caesar", src: "https://files.catbox.moe/bfn8cw.mp3" },
        { title: "Don't Go Away - Oasis", src: "https://files.catbox.moe/6sobn0.mp3" },
        { title: "Don't Look Back In Anger - Oasis", src: "https://files.catbox.moe/16vmaf.mp3" },
        { title: "Duvet - bôa", src: "https://files.catbox.moe/ofaodz.mp3" },
        { title: "End Of Beginning - Djo", src: "https://files.catbox.moe/q5wxcc.mp3" },
        { title: "Faded - Alan Walker", src: "https://files.catbox.moe/c9lc57.mp3" },
        { title: "Gata Only - FloyyMenor", src: "https://files.catbox.moe/i08lyy.mp3" },
        { title: "Hey Daddy (Daddy's Home) - Dreamsoda", src: "https://files.catbox.moe/2nmkj8.mp3" },
        { title: "Hiding In The Blue", src: "https://files.catbox.moe/kksyed.mp3" },
        { title: "Hold Me Down - Daniel Caesar", src: "https://files.catbox.moe/oqphkk.mp3" },
        { title: "I Like U - NIKI", src: "https://files.catbox.moe/zvmn1c.mp3" },
        { title: "I Wanna Be Yours - Arctic Monkeys", src: "https://files.catbox.moe/2817z3.mp3" },
        { title: "Iris - The Goo Goo Dolls", src: "https://files.catbox.moe/168vhx.mp3" },
        { title: "La La Lost You - 88rising", src: "https://files.catbox.moe/6a5kre.mp3" },
        { title: "La La Lost You (Acoustic Version) - NIKI", src: "https://files.catbox.moe/xv0fp4.mp3" },
        { title: "Last Night On Earth - Green Day", src: "https://files.catbox.moe/z74bgf.mp3" },
        { title: "Lily - Alan Walker", src: "https://files.catbox.moe/chq4re.mp3" },
        { title: "Master Of Puppets - Metallica", src: "https://files.catbox.moe/98zs2k.mp3" },
        { title: "My Love Mine All Mine - Mitski", src: "https://files.catbox.moe/2qrbbn.mp3" },
        { title: "On My Way - Alan Walker", src: "https://files.catbox.moe/7p6zcz.mp3" },
        { title: "Royality - Ezgod", src: "https://files.catbox.moe/c6f63g.mp3" },
        { title: "SAD GIRLZ LUV MONEY - Amaarae", src: "https://files.catbox.moe/e49dkk.mp3" },
        { title: "Skyfall - Adele", src: "https://files.catbox.moe/e1y12i.mp3" },
        { title: "Somebody's Pleasure - Aziz Hedra", src: "https://files.catbox.moe/938pyx.mp3" },
        { title: "Stand By Me - Oasis", src: "https://files.catbox.moe/mkock3.mp3" },
        { title: "Strong - One Direction", src: "https://files.catbox.moe/nrmt5k.mp3" },
        { title: "Sweet Child O' Mine - Guns N' Roses", src: "https://files.catbox.moe/j41ndm.mp3" },
        { title: "Thank U, Next - Ariana Grande", src: "https://files.catbox.moe/3eiexj.mp3" },
        { title: "We Don't Talk Anymore - Charlie Puth", src: "https://files.catbox.moe/a3lwc2.mp3" },
        { title: "Where We Are - One Direction", src: "https://files.catbox.moe/haegoh.mp3" },
        { title: "Wonderwall - Oasis", src: "https://files.catbox.moe/2jbkx8.mp3" }
    ],
    LyMusicV2: [
    { title: "Apa Kabar Mantan - New Version - NDX A.K.A.", src: "https://files.catbox.moe/3vkzob.mp3" },
    { title: "Banyu Surgo", src: "https://files.catbox.moe/8txm8a.mp3" },
    { title: "Cintamu Tak Terbatas Waktu", src: "https://files.catbox.moe/fj28gr.mp3" },
    { title: "Ditinggal Rabi - NDX A.K.A.", src: "https://files.catbox.moe/bgl5we.mp3" },
    { title: "Dumes - OMWAWES", src: "https://files.catbox.moe/ld2fl6.mp3" },
    { title: "Jogja Istimewa - Jogja Hip Hop Foundation", src: "https://files.catbox.moe/zkh908.mp3" },
    { title: "Kelingan Mantan - NDX A.K.A.", src: "https://files.catbox.moe/3qo1qi.mp3" },
    { title: "Kimcil Kepolen - NDX A.K.A.", src: "https://files.catbox.moe/lda0rg.mp3" },
    { title: "KISINAN 2 - Masdddho", src: "https://files.catbox.moe/0sypoz.mp3" },
    { title: "Klebus - Guyon Waton", src: "https://files.catbox.moe/cxhlnz.mp3" },
    { title: "LDR (Langgeng Dayaning Rasa) - Denny Caknan", src: "https://files.catbox.moe/ehyei1.mp3" },
    { title: "Lemah Teles - Happy Asmara", src: "https://files.catbox.moe/5ykv5n.mp3" },
    { title: "Los Dol", src: "https://files.catbox.moe/xw2pzg.mp3" },
    { title: "Nemen Hiphop Dangdut Version - NDX Α.Κ.Α.", src: "https://files.catbox.moe/5qyh8c.mp3" },
    { title: "Pamit Kerjo", src: "https://files.catbox.moe/yiqr9p.mp3" },
    { title: "Rasah Bali - Lavora", src: "https://files.catbox.moe/riuagf.mp3" },
    { title: "Saktenane - Vadesta", src: "https://files.catbox.moe/fc3rwk.mp3" },
    { title: "Sanes - Guyon Waton", src: "https://files.catbox.moe/lsrhng.mp3" },
    { title: "Satru - Denny Caknan", src: "https://files.catbox.moe/sk796q.mp3" },
    { title: "Satru 2 - Denny Caknan", src: "https://files.catbox.moe/th2ahc.mp3" },
    { title: "Tewas Tertimbun Masa Lalu (TTM) - NDX A.K.A.", src: "https://files.catbox.moe/ujh22x.mp3" },
    { title: "Top Topan - Happy Asmara", src: "https://files.catbox.moe/3lo9g7.mp3" },
    { title: "Tresno Tekan Mati New Version - Remastered 2023 - NDX A.K.A.", src: "https://files.catbox.moe/1sc3v6.mp3" },
    { title: "Widodari - Denny Caknan", src: "https://files.catbox.moe/26xsof.mp3" },
    { title: "Wirang - Guyon Waton", src: "https://files.catbox.moe/natru2.mp3" }
],
    LyMusicV3: [
        { title: "Akhir Tak Bahagia - Misellia", src: "https://files.catbox.moe/7j8l7g.mp3" },
        { title: "Aku Cinta Kau Dan Dia - The Rock", src: "https://files.catbox.moe/epk1mj.mp3" },
        { title: "Aku Milikmu - Dewa 19", src: "https://files.catbox.moe/w42819.mp3" },
        { title: "Aku Yang Jatuh Cinta - Dudy Oris", src: "https://files.catbox.moe/mzywt6.mp3" },
        { title: "Andai Aku Bisa - Chrisye", src: "https://files.catbox.moe/ooxo5x.mp3" },
        { title: "Arjuna - Dewa", src: "https://files.catbox.moe/0prpz5.mp3" },
        { title: "Asal Kau Bahagia - Armada", src: "https://files.catbox.moe/atphla.mp3" },
        { title: "Aishiteru - Zivilia", src: "https://files.catbox.moe/yly1fy.mp3" },
        { title: "Aishiteru 2 - Zivilia", src: "https://files.catbox.moe/gxwe9q.mp3" },
        { title: "Aishiteru 3 - Zivilia", src: "https://files.catbox.moe/kbtj5m.mp3" },
        { title: "Bagaimana Kalau Aku Tidak Baik Baik Saja - Judika", src: "https://files.catbox.moe/p9n9z2.mp3" },
        { title: "Bawa Dia Kembali - Mahalini", src: "https://files.catbox.moe/w5f61i.mp3" },
        { title: "Bibir Yang Telah Dicuri - JKT48", src: "https://files.catbox.moe/fsa2qm.mp3" },
        { title: "Bukan Cinta Biasa - Afgan", src: "https://files.catbox.moe/dqv48j.mp3" },
        { title: "Bukan Cinta Manusia Biasa - Dewa 19", src: "https://files.catbox.moe/d8yfsm.mp3" },
        { title: "Bulan Ksatria - Superman Is Dead", src: "https://files.catbox.moe/2pq6ca.mp3" },
        { title: "Cemburu - Raim Laode", src: "https://files.catbox.moe/ettam2.mp3" },
        { title: "C.H.R.I.S.Y.E. - Diskoria", src: "https://files.catbox.moe/khhk9w.mp3" },
        { title: "Cinta 'Kan Membawamu Kembali - Dewa 19", src: "https://files.catbox.moe/bgekdb.mp3" },
        { title: "Diary Depresiku - Last Child", src: "https://files.catbox.moe/4p2ihi.mp3" },
        { title: "Duka - Last Child", src: "https://files.catbox.moe/23bvjo.mp3" },
        { title: "Garam, Madu, Sakit Dadaku - Tenxi", src: "https://files.catbox.moe/lk8o94.mp3" },
        { title: "Hapus Aku - Nidji", src: "https://files.catbox.moe/gdgm2o.mp3" },
        { title: "Hapus Aku - Nidji", src: "https://files.catbox.moe/2d3mwg.jpg" },
        { title: "Hujan - Utopia", src: "https://files.catbox.moe/x8pn5t.mp3" },
        { title: "J.A.P - Sheila On 7", src: "https://files.catbox.moe/smdta5.mp3" },
        { title: "Jaga Selalu Hatimu - Seventeen", src: "https://files.catbox.moe/8m90wr.mp3" },
        { title: "Jakarta Hari Ini - For Revenge", src: "https://files.catbox.moe/8tegdp.mp3" },
        { title: "Januari - Glenn Fredly", src: "https://files.catbox.moe/xrj2pa.mp3" },
        { title: "Jiwa Yang Bersedih - Ghea Indrawari", src: "https://files.catbox.moe/m9i1gs.mp3" },
        { title: "Kangen - Dewa 19", src: "https://files.catbox.moe/wbsdm0.mp3" },
        { title: "Karena Kamu - Geisha", src: "files.catbox.moe/3w520h.mp3" },
        { title: "Kenanglah Aku - NaFF", src: "https://files.catbox.moe/sjdpyn.mp3" },
        { title: "Larut - Dewa 19", src: "https://files.catbox.moe/m1mfpm.mp3" },
        { title: "Laskar Pelangi - Nidji", src: "https://files.catbox.moe/54vwil.mp3" },
        { title: "Lumpuhkan Ingatanku - Felix Irwan", src: "https://files.catbox.moe/bh5mbd.mp3" },
        { title: "Masing Masing - Ernie Zakri", src: "https://files.catbox.moe/yjkqn8.mp3" },
        { title: "Mengejar Mimpi - Yovie & Nuno", src: "https://files.catbox.moe/1jy925.mp3" },
        { title: "Menghapus Jejakmu - Peterpan", src: "https://files.catbox.moe/nc9n6y.mp3" },
        { title: "Munajat Cinta - The Rock", src: "https://files.catbox.moe/kmoxfh.mp3" },
        { title: "Pupus - Dewa", src: "https://files.catbox.moe/ihgts4.mp3" },
        { title: "Rasa Ini - Vierra", src: "https://files.catbox.moe/s20o8v.mp3" },
        { title: "Sampai Akhir Waktu - Yovie & Nuno", src: "https://files.catbox.moe/ryzyv5.mp3" },
        { title: "Satu - Dewa", src: "https://files.catbox.moe/d84bx1.mp3" },
        { title: "Seandainya - Vierra", src: "https://files.catbox.moe/kkxzeq.mp3" },
        { title: "Sekuat Hatimu - Last Child", src: "https://files.catbox.moe/kbad29.mp3" },
        { title: "Selimut Hati - Dewa 19", src: "https://files.catbox.moe/0385le.mp3" },
        { title: "Seluruh Nafas Ini - Last Child", src: "https://files.catbox.moe/gcxvz9.mp3" },
        { title: "Sempurna - Andra & The Backbone", src: "https://files.catbox.moe/trtn4f.mp3" },
        { title: "Separuh Aku - Noah", src: "https://files.catbox.moe/zbniue.mp3" },
        { title: "Separuh Nafas - Dewa 19", src: "https://files.catbox.moe/2dejje.mp3" },
        { title: "Serpihan Hati - Utopia", src: "https://files.catbox.moe/8l4drg.mp3" },
        { title: "Soulmate - Kahitna", src: "https://files.catbox.moe/mubi8f.mp3" },
        { title: "Sunset Di Tanah Anarki - Superman Is Dead", src: "https://files.catbox.moe/2i4s4u.mp3" },
        { title: "Surat Cinta Untuk Starla - Virgoun", src: "https://files.catbox.moe/tsrnq7.mp3" },
        { title: "Tanpa Pesan Terakhir - Seventeen", src: "https://files.catbox.moe/gkwg23.mp3" },
        { title: "Taruh - Nadin Amizah", src: "https://files.catbox.moe/dhcp2c.mp3" },
        { title: "Tetap Dalam Jiwa - Isyana Sarasvati", src: "https://files.catbox.moe/t1smju.mp3" },
        { title: "Tikus - Tikus Kantor - Iwan Fals", src: "https://files.catbox.moe/14vgzw.mp3" }
    ],
    LyMusicV4: [
        { title: "キャットラビング・香椎モイ ミ - 香椎モイミ", src: "https://files.catbox.moe/ue0xda.mp3" },
        { title: "恋ノ行方 - あかせあかり", src: "https://files.catbox.moe/jgs6oh.mp3" },
        { title: "かくしん的めたまるふぉーぜっ - 土間うまる(CV:田中あいみ)", src: "https://files.catbox.moe/ezeocb.r" },
        { title: "snow jam - Rin音", src: "https://files.catbox.moe/sdshpj.mp3" },
        { title: "Kawaikutegomen feat. ちゅーたん(CV:早見沙織) - HoneyWorks", src: "https://files.catbox.moe/f7374v.mp3" },
        { title: "フライデー・ナイト - natori", src: "https://files.catbox.moe/qwdvoq.mp3" },
        { title: "ベター is the Best - 未確認少女隊 UFI", src: "https://files.catbox.moe/3d4urm.mp3" },
        { title: "もリフだョ!全員集合!! - ももいろクローバーZ", src: "https://files.catbox.moe/k8t1va.mp3" },
        { title: "ニッポン笑顔百景(客演:林家木久扇) - 桃黒亭一門", src: "https://files.catbox.moe/n168ij.mp3" },
        { title: "アプリオリ - Mrs. GREEN APPLE", src: "https://files.catbox.moe/crttpn.mp3" },
        { title: "ニッポン笑顔百景 - 桃黒亭一門", src: "https://files.catbox.moe/xbkc50.mp3" },
        { title: "Young Girl A - Siinamota", src: "https://files.catbox.moe/d6fwp0.mp3" },
        { title: "Show - Ado", src: "https://files.catbox.moe/3kon39.mp3" },
        { title: "あのね - あれくん", src: "https://files.catbox.moe/5qiggd.mp3" },
        { title: "あのバンド - 結束バンド", src: "https://files.catbox.moe/cyk1wh.mp3" },
        { title: "Any Angle - 乃紫", src: "https://files.catbox.moe/97r9vi.mp3" },
        { title: "Armageddon - aespa", src: "https://files.catbox.moe/kxm241.mp3" },
        { title: "Blizzard - Miura Daichi", src: "https://files.catbox.moe/y1d683.mp3" },
        { title: "Cry Baby - Official髭男dism", src: "https://files.catbox.moe/m98zwc.mp3" },
        { title: "ダンスホール - Mrs. GREEN APPLE", src: "https://files.catbox.moe/dsz9c6.mp3" },
        { title: "Drama - aespa", src: "https://files.catbox.moe/6zeatx.mp3" },
        { title: "フライデーナイト - Natori", src: "https://files.catbox.moe/fu17vy.mp3" },
        { title: "Fuwa Fuwa Time - Sakurakou K-ON", src: "https://files.catbox.moe/fcpb9h.mp3" },
        { title: "Garden - Fujii Kaze", src: "https://files.catbox.moe/6iwhk2.mp3" },
        { title: "Hana - Fujii Kaze", src: "https://files.catbox.moe/q1xjun.mp3" },
        { title: "神のまにまに - 樋口楓", src: "https://files.catbox.moe/vdx9fn.mp3" },
        { title: "怪獣の花唄 - Vaundy", src: "https://files.catbox.moe/0y0w1i.mp3" },
        { title: "けーたいみしてよ - MAISONdes", src: "https://files.catbox.moe/3xrx5q.mp3" },
        { title: "Kick Back - Kenshi Yonezu", src: "https://files.catbox.moe/54s99v.mp3" },
        { title: "きらり - Fujii Kaze", src: "https://files.catbox.moe/r9arp9.mp3" },
        { title: "恋色 - もさを", src: "https://files.catbox.moe/1zdopg.mp3" },
        { title: "Matsuri - Fujii Kaze", src: "https://files.catbox.moe/ot4bg0.mp3" },
        { title: "寄り酔い - DAZBEE", src: "https://files.catbox.moe/kb067p.mp3" },
        { title: "寄り酔い - 和ぬか", src: "https://files.catbox.moe/yik46c.mp3" },
        { title: "Savage - aespa", src: "https://files.catbox.moe/dk8ie6.mp3" },
        { title: "Shinunoga E-Wa - Fujii Kaze", src: "https://files.catbox.moe/1370tf.mp3" },
        { title: "Supernova - aespa", src: "https://files.catbox.moe/s725da.mp3" },
        { title: "知らないままで - Rokudenashi", src: "https://files.catbox.moe/i2mqxa.mp3" },
        { title: "Whiplash - aespa", src: "https://files.catbox.moe/bf3oka.mp3" },
        { title: "点描の唄 - Mrs. GREEN APPLE", src: "https://files.catbox.moe/hcxg14.mp3" },
        { title: "青と夏 - Mrs. GREEN APPLE", src: "https://files.catbox.moe/hi8h8v.mp3" }
    ],
  LyMusicV5: [
    { title: "End of Beginning - Djo", src: "https://files.catbox.moe/q5wxcc.mp3" },
    { title: "Love Story - Indila", src: "https://files.catbox.moe/3sqm42.mp3" },
    { title: "Starboy - The Weeknd", src: "https://files.catbox.moe/em3e7c.mp3" },
    { title: "Me Gustas Tu - Manu Chao", src: "https://files.catbox.moe/1pxggi.mp3" },
    { title: "Suwung - Heyek Crew", src: "https://files.catbox.moe/uq2irq.mp3" },
    { title: "DJ Jangan Hilangkan Dia x Terlalu Cinta - DJ Nakama", src: "https://files.catbox.moe/dsjhd0.mp3" },
    { title: "DJ HILANG HARAPAN - DJ BUDOTS", src: "https://files.catbox.moe/bexma4.mp3" },
    { title: "DJ EST CE QUE TU M_AIMES - DJ Vel Bass", src: "https://files.catbox.moe/22k892.mp3" },
    { title: "APT THAILAND - Remix - DJ JEPANG", src: "https://files.catbox.moe/hg09tt.mp3" },
    { title: "UBUR UBUR IKAN LELE X GUCCI GANG - Refa Fvnky Rimex", src: "https://files.catbox.moe/w56thc.mp3" },
    { title: "DJ PAPA MUDA GOYANG GOYANG - Slow - Sahrul Ckn", src: "https://files.catbox.moe/v63slh.mp3" },
    { title: "DJ JUNGLE DUTCH X ULAR 4 - DJ Danz", src: "https://files.catbox.moe/0tsd4a.mp3" },
    { title: "Domba Kuring - DJ Haning", src: "https://files.catbox.moe/i2la0d.mp3" },
    { title: "Mojang Priangan - DJ Apis", src: "https://files.catbox.moe/a7e49e.mp3" },
    { title: "HURUNG GASKEUN - Dirga WG", src: "https://files.catbox.moe/3g3tki.mp3" },
    { title: "GASKEUN ABANGKUH - Dirga WG", src: "https://files.catbox.moe/6ey91n.mp3" },
    { title: "DROP ENAKEUN V2 - Itsmeraley", src: "https://files.catbox.moe/ww75eg.mp3" },
    { title: "DJ GOYANG DAYUNG Instrumental - Maman Fvndy", src: "https://files.catbox.moe/jcayzf.mp3" },
    { title: "DJ ANGKER BREAKBEAT SPEED UP REVEB - IR BREAKBEAT", src: "https://files.catbox.moe/73ohj3.mp3" },
    { title: "Love Story - Instrumental - Alhanii", src: "https://files.catbox.moe/f8sjqc.mp3" },
    { title: "Love Story - Slowed _ Reverb - Lexz", src: "https://files.catbox.moe/v5va2j.mp3" },
    { title: "Danza Kuduro _Slowed _ Reverb_ - Remix - Muppet DJ", src: "https://files.catbox.moe/v4idjb.mp3" },
    { title: "BRAZILIAN DANÇA PHONK - Sped Up - 6YNTHMANE", src: "https://files.catbox.moe/5coq7r.mp3" },
    { title: "TAKEN - Dj Samir", src: "https://files.catbox.moe/861me0.mp3" },
    { title: "NUNCA MUDA_ - Scythermane", src: "https://files.catbox.moe/oovmmo.mp3" },
    { title: "Ultraphunk - Dashie", src: "https://files.catbox.moe/qtopii.mp3" },
    { title: "Immortal - KSLV Noh", src: "https://files.catbox.moe/jlc3m4.mp3" },
    { title: "Life In Rio - Slowboy", src: "https://files.catbox.moe/j0x78t.mp3" }
  ]
    };

    const playlistTitle = document.getElementById('playlist-title');
    const songList = document.getElementById('song-list');
    const audioPlayer = document.getElementById('audio-player');
    const prevBtn = document.getElementById('prev-btn');
    const playBtn = document.getElementById('play-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitle = document.getElementById('song-title');
    const searchInput = document.getElementById('search-input');
    const progress = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-container'); 
    const currentTimeDisplay = document.querySelector('.current-time');
    const durationDisplay = document.querySelector('.duration');
    const repeatLeftBtn = document.getElementById('repeat-left');
    const repeatRightBtn = document.getElementById('repeat-right');
    const searchList = document.getElementById('search-list');
    const searchResultsDiv = document.getElementById('search-results');
    const loadingIndicator = document.getElementById('loading-indicator');
    const loadingText = document.getElementById('loading-text');
    const loadingVideo = document.getElementById('loading-video');
    const playlistItems = document.querySelectorAll('.playlist-item');
    const slider = document.querySelector('.playlist-slider');
    const sliderPrevBtn = document.querySelector('.slider-nav .slider-prev');
    const sliderNextBtn = document.querySelector('.slider-nav .slider-next');

    let selectedIndex = 0;
    let isRepeatActive = false;
    let currentPlaylist = [];
    let currentSongIndex = 0;
    let isPlaying = false;
    let currentSong = null;
    let currentSongTime = 0;
    let searchTimeout;

    const numPlaylists = playlistItems.length;

    searchResultsDiv.style.display = 'none';

    function initPlaylist() {
        playlistItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                selectPlaylist(index);
            });
        });

        sliderPrevBtn.addEventListener('click', goToPreviousPlaylist);
        sliderNextBtn.addEventListener('click', goToNextPlaylist);

        searchInput.addEventListener('input', (event) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                handleSearch(event);
            }, 300);
        });

        setInitialSliderPosition();

        window.addEventListener('resize', setInitialSliderPosition);

        progressContainer.addEventListener('click', setProgressBar);
    }

    function selectPlaylist(index) {
        selectedIndex = index;
        updateSlider();
        loadPlaylist(playlistItems[index].dataset.playlist);
    }

    function updateSlider() {
        playlistItems.forEach((item) => {
            item.querySelector('.playlist-card').classList.remove('active');
        });

        playlistItems[selectedIndex].querySelector('.playlist-card').classList.add('active');

        const itemWidth = playlistItems[0].offsetWidth; 
        const sliderWidth = slider.offsetWidth; 

        let newPosition = (sliderWidth - itemWidth) / 2 - (selectedIndex * itemWidth);

        newPosition = Math.min(0, newPosition);

        slider.style.transform = `translateX(${newPosition}px)`;
    }

    function loadPlaylist(playlistName) {
        if (playlistData[playlistName]) {
            currentPlaylist = playlistData[playlistName];
            renderSongList(currentPlaylist);
            playlistTitle.textContent = playlistName;

            if (currentSong) {
                renderSongList(currentPlaylist);
            } else if (currentPlaylist.length > 0) {
                songTitle.textContent = currentPlaylist[0].title;
                audioPlayer.src = currentPlaylist[0].src;
                audioPlayer.load();

                audioPlayer.onloadeddata = () => {
                    updateDuration();
                }
            }
        } else {
            console.error('Playlist not found:', playlistName);
        }
    }

    function renderSongList(songs) {
        songList.innerHTML = '';
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = song.title;
            li.addEventListener('click', () => {
                loadAndPlaySong(song);
            });
            songList.appendChild(li);
        });
    }

    function showLoading() {
        loadingIndicator.style.display = 'flex';
        loadingText.style.display = 'inline';
        loadingVideo.style.display = 'none';
    }

    function hideLoading() {
        loadingIndicator.style.display = 'flex';
        loadingText.style.display = 'none';
        loadingVideo.style.display = 'inline';
        loadingVideo.play();
    }

    function loadAndPlaySong(song) {
        showLoading();
        audioPlayer.src = song.src;
        songTitle.textContent = song.title;
        currentSong = song;

        audioPlayer.load();

        audioPlayer.onloadeddata = () => {
            updateDuration();
        }

        audioPlayer.oncanplaythrough = () => {
            loadingVideo.src = '/asset/asse.mp4';
            hideLoading();
            audioPlayer.play();
            isPlaying = true;
            playBtn.classList.add('playing');
        };

        audioPlayer.onerror = () => {
            hideLoading();
            console.error('Error loading audio');
        };
    }

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.classList.add('playing');
        } else {
            audioPlayer.pause();
            playBtn.classList.remove('playing');
        }
        isPlaying = !audioPlayer.paused;
    }

    function nextSong() {
        if (!currentPlaylist || currentPlaylist.length === 0) return;
        currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
        loadAndPlaySong(currentPlaylist[currentSongIndex]);
    }

    function prevSong() {
        if (!currentPlaylist || currentPlaylist.length === 0) return;
        currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        loadAndPlaySong(currentPlaylist[currentSongIndex]);
    }

    audioPlayer.addEventListener('ended', () => {
        if (isRepeatActive) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            nextSong();
        }
    });

    function updateProgress() {
        const { duration, currentTime } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        currentTimeDisplay.textContent = formatTime(currentTime);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function updateDuration() {
        const duration = audioPlayer.duration;
        durationDisplay.textContent = formatTime(duration);
    }

    function setProgressBar(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    }

    function toggleRepeat() {
        isRepeatActive = !isRepeatActive;
        if (isRepeatActive) {
            repeatLeftBtn.classList.add('active');
            repeatRightBtn.classList.add('active');
        } else {
            repeatLeftBtn.classList.remove('active');
            repeatRightBtn.classList.remove('active');
        }
    }

    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        searchResultsDiv.style.display = searchTerm ? 'block' : 'none';

        if (!searchTerm) {
            searchResultsDiv.innerHTML = '';
            return;
        }

        const searchResults = [];
        for (const playlistName in playlistData) {
            playlistData[playlistName].forEach(song => {
                if (song.title.toLowerCase().includes(searchTerm)) {
                    searchResults.push({ playlist: playlistName, song: song });
                }
            });
        }

        displaySearchResults(searchResults);
    }

    function displaySearchResults(results) {
        searchResultsDiv.innerHTML = '';

        if (results.length === 0) {
            searchResultsDiv.textContent = 'No results found.';
            return;
        }

        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = `${result.song.title} (Playlist: ${result.playlist})`;
            div.addEventListener('click', () => {
                loadAndPlaySong(result.song);
                searchResultsDiv.style.display = 'none';
                searchInput.value = '';
            });
            searchResultsDiv.appendChild(div);
        });
    }

    function goToPreviousPlaylist() {
        selectedIndex = (selectedIndex - 1 + numPlaylists) % numPlaylists;
        selectPlaylist(selectedIndex);
    }

    function goToNextPlaylist() {
        selectedIndex = (selectedIndex + 1) % numPlaylists;
        selectPlaylist(selectedIndex);
    }

    function setInitialSliderPosition() {
        updateSlider();
    }

    playBtn.addEventListener('click', playPause);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    repeatLeftBtn.addEventListener('click', toggleRepeat);
    repeatRightBtn.addEventListener('click', toggleRepeat);

    initPlaylist();

    selectPlaylist(selectedIndex);
});
