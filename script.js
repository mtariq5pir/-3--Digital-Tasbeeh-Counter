// Comprehensive Supplications Database with search filters & multi-language
const database = {
    // 1. عام اذکار و تسبیحات (General Dhikr)
    general: [
        { id: 1, ar: "سُبْحَانَ اللَّهِ" },
        { id: 2, ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ" },
        { id: 3, ar: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ" },
        { id: 4, ar: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ" },
        { id: 5, ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ" },
        { id: 6, ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ" },
        { id: 7, ar: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ" },
        { id: 8, ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" },
        { id: 9, ar: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ" },
        { id: 10, ar: "أَسْتَغْفِرُ اللَّهَ" },
        { id: 11, ar: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ" },
        { id: 12, ar: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيُّ الْقَيُّومُ، وَأَتُوبُ إِلَيْهِ" },
        { id: 13, ar: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ" },
        { id: 14, ar: "لَا إِلَهَ إِلَّا اللَّهُ" },
        { id: 15, ar: "اللَّهُ أَكْبَرُ" },
        { id: 16, ar: "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي" },
        { id: 17, ar: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ" },
        { id: 18, ar: "اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا" },
        { id: 19, ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ" }
    ],

    // 2. صبح و شام کے اذکار (Morning & Evening Dhikr)
    morning_evening: [
        { id: 20, ar: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ" },
        { id: 21, ar: "قُلْ هُوَ اللَّهُ أَحَدٌ ، اللَّهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُولَدْ ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ" },
        { id: 22, ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِنْ شَرِّ مَا خَلَقَ ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ" },
        { id: 23, ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلَهِ النَّاسِ ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ، مِنَ الْجِنَّةِ وَالنَّاسِ" },
        { id: 24, ar: "آمنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ، لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ" },
        { id: 25, ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ" },
        { id: 26, ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ" },
        { id: 27, ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ" },
        { id: 28, ar: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا" },
        { id: 29, ar: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ" },
        { id: 30, ar: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ" },
        { id: 31, ar: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ" },
        { id: 32, ar: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ" },
        { id: 33, ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ" },
        { id: 34, ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ" },
        { id: 35, ar: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ" },
        { id: 36, ar: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ" },
        { id: 37, ar: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ" },
        { id: 38, ar: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ" },
        { id: 39, ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ" },
        { id: 40, ar: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ" },
        { id: 41, ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ" },
        { id: 42, ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي" },
        { id: 43, ar: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ" },
        { id: 44, ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ" },
        { id: 45, ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا" },
        { id: 46, ar: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ" },
        { id: 47, ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ" },
        { id: 48, ar: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ" },
        { id: 49, ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ" },
        { id: 50, ar: "يَا رَبِّ لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ" },
        { id: 51, ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا" },
        { id: 52, ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ" }
    ],

    // 3. نماز کے بعد کے اذکار (After Prayer Dhikr)
    after_prayer: [
        { id: 53, ar: "أَسْتَغْفِرُ اللَّهَ ، أَسْتَغْفِرُ اللَّهَ ، أَسْتَغْفِرُ اللَّهَ" },
        { id: 54, ar: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ" },
        { id: 55, ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ" },
        { id: 56, ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ" },
        { id: 57, ar: "سُبْحَانَ اللَّهِ" },
        { id: 58, ar: "الْحَمْدُ لِلَّهِ" },
        { id: 59, ar: "اللَّهُ أَكْبَرُ" },
        { id: 60, ar: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ" },
        { id: 61, ar: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ" }
    ],

    // 4. روزمرہ سرگرمیوں کے اذکار (Daily Activities Dhikr)
    daily_activities: [
        { id: 62, ar: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ" }, // گھر سے نکلتے وقت
        { id: 63, ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ" }, // سواری پر بیٹھتے وقت
        { id: 64, ar: "بِسْمِ اللَّهِ" }, // کھانے سے پہلے
        { id: 65, ar: "الْحَمْدُ لِلَّهِ" } // کھانے کے بعد
    ]
};
// State Variables loaded directly from LocalStorage
let currentCategory = 'general';
let currentIndex = 0;
let filteredDatabase = [...database[currentCategory]];
let count = parseInt(localStorage.getItem('tasbeeh_count')) || 0;
let target = parseInt(localStorage.getItem('tasbeeh_target')) || 33;
let todayCount = parseInt(localStorage.getItem('tasbeeh_today')) || 0;
let lifetimeCount = parseInt(localStorage.getItem('tasbeeh_lifetime')) || 0;
let historyLog = JSON.parse(localStorage.getItem('tasbeeh_history')) || [];
let currentLang = localStorage.getItem('tasbeeh_lang') || 'ur';
let activeTheme = localStorage.getItem('tasbeeh_theme') || 'theme-dark';
let activeSoundPack = localStorage.getItem('tasbeeh_sound') || 'classic';

// Web Audio API Setup
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// DOM Selection
const currentCountEl = document.getElementById('current-count');
const targetDisplayEl = document.getElementById('target-display');
const targetInput = document.getElementById('target-input');
const zikrArabicEl = document.getElementById('zikr-arabic');
const zikrTranslationEl = document.getElementById('zikr-translation');
const hadithRefEl = document.getElementById('hadith-ref');
const progressRingCircle = document.querySelector('.progress-ring__circle');
const tapArea = document.getElementById('tap-area');
const historyLogEl = document.getElementById('history-log');

const radius = progressRingCircle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;

// Core Initialization
document.addEventListener("DOMContentLoaded", () => {
    applyTheme(activeTheme);
    document.getElementById('theme-select').value = activeTheme;
    document.getElementById('sound-pack').value = activeSoundPack;
    document.getElementById('language-select').value = currentLang;
    targetInput.value = target;
    
    filterSupplications();
    updateCounterDisplay();
    renderHistory();
    checkAchievements();
});

// Sound Core Generator
function playSound() {
    if (activeSoundPack === 'silent') return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    
    if (activeSoundPack === 'classic') {
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    } else if (activeSoundPack === 'digital') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    }
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
}

function playCelebrationSound() {
    if (activeSoundPack === 'silent') return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.25);
}

// Progress Ring Controller
function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progressRingCircle.style.strokeDashoffset = offset;
}

// App Logic Functions
function doCount() {
    count++;
    todayCount++;
    lifetimeCount++;
    
    if (count === target) {
        playCelebrationSound();
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        logToHistory();
    } else {
        playSound();
        if (navigator.vibrate) navigator.vibrate(15);
    }
    
    saveState();
    updateCounterDisplay();
    checkAchievements();
}

function doUndo() {
    if (count > 0) {
        count--;
        if (todayCount > 0) todayCount--;
        if (lifetimeCount > 0) lifetimeCount--;
        saveState();
        updateCounterDisplay();
    }
}

function logToHistory() {
    const currentZikr = filteredDatabase[currentIndex] || { ar: "عمومی تسبیح" };
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    historyLog.unshift({ text: currentZikr.ar, target: target, time: time });
    if (historyLog.length > 10) historyLog.pop();
    renderHistory();
}

function renderHistory() {
    historyLogEl.innerHTML = historyLog.map(item => `
        <li class="history-item">
            <span>${item.text.substring(0, 25)}...</span>
            <strong>${item.target} (مکمل) <small>${item.time}</small></strong>
        </li>
    `).join('');
}

function checkAchievements() {
    const badgeText = document.getElementById('badge-text');
    if (lifetimeCount >= 1000) badgeText.textContent = "لیول: ڈائمنڈ (💎 Diamond)";
    else if (lifetimeCount >= 500) badgeText.textContent = "لیول: گولڈ (🥇 Gold)";
    else if (lifetimeCount >= 100) badgeText.textContent = "لیول: سلور (🥈 Silver)";
    else badgeText.textContent = "لیول: نوآموز (🥉 Bronze)";
}

function updateCounterDisplay() {
    currentCountEl.textContent = count;
    targetDisplayEl.textContent = `ہدف: ${target}`;
    document.getElementById('stat-today').textContent = todayCount;
    document.getElementById('stat-lifetime').textContent = lifetimeCount;
    
    const progressPercent = Math.min((count / target) * 100, 100);
    setProgress(progressPercent);
}

function filterSupplications() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const catData = database[currentCategory];
    
    filteredDatabase = catData.filter(item => 
        item.ar.toLowerCase().includes(searchVal) || 
        item.ur.toLowerCase().includes(searchVal) || 
        item.en.toLowerCase().includes(searchVal)
    );
    
    currentIndex = 0;
    updateZikrDisplay();
}

function updateZikrDisplay() {
    if (filteredDatabase.length === 0) {
        zikrArabicEl.textContent = "-";
        zikrTranslationEl.textContent = "کوئی ذکر نہیں ملا";
        hadithRefEl.textContent = "";
        return;
    }
    const zikr = filteredDatabase[currentIndex];
    zikrArabicEl.textContent = zikr.ar;
    zikrTranslationEl.textContent = currentLang === 'en' ? zikr.en : zikr.ur;
    hadithRefEl.textContent = zikr.ref;
    
    count = 0;
    updateCounterDisplay();
}

function saveState() {
    localStorage.setItem('tasbeeh_count', count);
    localStorage.setItem('tasbeeh_target', target);
    localStorage.setItem('tasbeeh_today', todayCount);
    localStorage.setItem('tasbeeh_lifetime', lifetimeCount);
    localStorage.setItem('tasbeeh_history', JSON.stringify(historyLog));
}

function applyTheme(theme) {
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
    localStorage.setItem('tasbeeh_theme', theme);
}

// Event Listeners
tapArea.addEventListener('click', (e) => {
    // Avoid double clicks firing native behaviors
    if (e.detail === 1) doCount();
});

tapArea.addEventListener('dblclick', () => {
    doUndo();
});

// Keyboard Gestures
document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        doCount();
    } else if (e.code === "Backspace") {
        doUndo();
    }
});

// Category Switches
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        filterSupplications();
    });
});

// Fast Goals Config
document.querySelectorAll('.goal-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
        target = parseInt(e.target.dataset.goal);
        targetInput.value = target;
        saveState();
        updateCounterDisplay();
    });
});

targetInput.addEventListener('input', (e) => {
    target = parseInt(e.target.value) || 33;
    saveState();
    updateCounterDisplay();
});

document.getElementById('search-input').addEventListener('input', filterSupplications);

document.getElementById('theme-select').addEventListener('change', (e) => applyTheme(e.target.value));

document.getElementById('sound-pack').addEventListener('change', (e) => {
    activeSoundPack = e.target.value;
    localStorage.setItem('tasbeeh_sound', activeSoundPack);
});

document.getElementById('undo-btn').addEventListener('click', doUndo);

document.getElementById('reset-btn').addEventListener('click', () => {
    if(confirm("کیا آپ موجودہ کاؤنٹ ری سیٹ کرنا چاہتے ہیں؟")) {
        count = 0;
        saveState();
        updateCounterDisplay();
    }
});

document.getElementById('next-zikr').addEventListener('click', () => {
    if (filteredDatabase.length > 0) {
        currentIndex = (currentIndex + 1) % filteredDatabase.length;
        updateZikrDisplay();
    }
});

document.getElementById('prev-zikr').addEventListener('click', () => {
    if (filteredDatabase.length > 0) {
        currentIndex = (currentIndex - 1 + filteredDatabase.length) % filteredDatabase.length;
        updateZikrDisplay();
    }
});