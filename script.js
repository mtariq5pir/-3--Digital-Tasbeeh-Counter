// Comprehensive Supplications Database with search filters & multi-language
const database = {
    // 1. عام اذکار و تسبیحات (General Dhikr)
    general: [
        { id: 1, ar: "سُبْحَانَ اللَّهِ" },
        { id: 2, ar: "الْحَمْدُ لِلَّهِ"  },
        { id: 3, ar: "اللَّهُ أَكْبَرُ" },
        { id: 4, ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ" },
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

    // 4. روزمرہ سرگرمیوں کے دعائين (Daily Activities Duaa)
    daily_activities: [
        { id: 62, ar: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ" }, 
        { id: 63, ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ" }, 
        { id: 64, ar: "بِسْمِ اللَّهِ" }, 
        { id: 65, ar: "الْحَمْدُ لِلَّهِ" }, 
 { id: 62, ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ" },
    { id: 63, ar: "رَبَّنَا لا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلا تَحْمِلْ عَلَيْنَا إِصْراً كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلا تُحَمِّلْنَا مَا لا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ" },
    { id: 64, ar: "رَبَّنَا لا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ" },
    { id: 65, ar: "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ" },
    { id: 66, ar: "رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ" },
    { id: 67, ar: "رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِياً يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ * رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَى رُسُلِكَ وَلا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لا تُخْلِفُ الْمِيعَادَ" },
    { id: 68, ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ" },
    { id: 69, ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ" },
    { id: 70, ar: "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَداً" },
    { id: 71, ar: "رَبِّ أَنْزِلْنِي مُنْزَلاً مُبَارَكاً وَأَنْتَ خَيْرُ الْمُنْزِلِينَ" },
    { id: 72, ar: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ * وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ" },
    { id: 73, ar: "ربنا اصرف عنا عذاب جهنم إن عذابها كان غراما" },
    { id: 74, ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَاماً" },
    { id: 75, ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحاً تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ" },
    { id: 76, ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحاً تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ" },
    { id: 77, ar: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلا تَجْعَلْ فِي قُلُوبِنَا غِلّاً لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَؤُوفٌ رَحِيمٌ" },
    { id: 78, ar: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ * رَبَّنَا لا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ" },
    { id: 79, ar: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَاناً نَصِيراً" },

    // الأدعية المأثورة النبوية (جامع احادیث کی دعائیں)
    { id: 80, ar: "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الْأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الْآخِرَةِ." },
    { id: 81, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، وَاحْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَأَعُوذُ بِعَظَمَتِکَ أَنْ أُغْتَالَ مِنْ تَحْتِي." },
    { id: 82, ar: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي إِلَيْهَا مَعَادِي، وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي کُلِّ خَيْرٍ، وَالْمَوْتَ رَاحَةً لِي مِنْ کُلِّ شَرٍّ." },
    { id: 83, ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِکَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِکَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِکَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، اللَّهُمَّ إِنِّي أَعُوذُ بِکَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ." },
    { id: 84, ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِکَ مِنْ زَوَالِ نِعْمَتِکَ، وَتَحُوُّلِ عَافِيَتِکَ، وَمِنْ فُجَاءَةِ نِقْمَتِکَ، وَمِنْ جَمِيعِ سَخَطِکَ." },
    { id: 85, ar: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا، اللَّهُمَّ إِنِّي أَعُوذُ بِکَ مِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا." },
    { id: 86, ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِکَ مِنَ الْهَمِّ وَالْحُزْنِ، وَالْعَجْزِ وَالْکَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَالْهَرَمِ وَعَذَابِ الْقَبْرِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ." },
    { id: 87, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ بِأَنَّ لَکَ الْحَمْدَ لَا إِلَهَ إِلَّا أَنْتَ بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ، يَا ذَا الْجَلَالِ وَالْإِکْرَامِ، يَا حَيُّ يَا قَيُّومُ." },
    { id: 88, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ الثَّبَاتَ فِي الْأَمْرِ، وَالْعَزِيمَةَ عَلَى الرُّشْدِ، وَأَسْأَلُکَ شُكْرَ نِعْمَتِکَ، وَحُسْنِ عِبَادَتِکَ، وَأَسْأَلُکَ قَلْبًا سَلِيمًا، وَلِسَانًا صَادِقًا، وَأَسْأَلُکَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِکَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُکَ لِمَا تَعْلَمُ، إِنَّکَ أَنْتَ عَلَّامُ الْغُيُوبِ." },
    { id: 89, ar: "اللَّهُمَّ قِنِي شَرَّ نَفْسِي، وَاعْزِمْ لِي عَلَى أَرْشَدِ أَمْرِي، اللَّهُمَّ اغْفِرْ لِي مَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَخْطَأْتُ وَمَا تَعَمَّدْتُ، مَا عَلِمْتُ وَمَا جَهِلْتُ." },
    { id: 90, ar: "اللَّهُمَّ فَارِجَ الْهَمِّ، كَاشِفَ الْغَمِّ، مُجِيبَ دَعْوَةِ الْمُضْطَرِّينَ، رَحْمَنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا، أَنْتَ تَرْحَمُنِي فَارْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ." },
    { id: 91, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ خَيْرَ الْمَسْأَلَةِ، وَخَيْرَ الدُّعَاءِ، وَخَيْرَ النَّجَاحِ، وَخَيْرَ الْعَمَلِ، وَخَيْرَ الثَّوَابِ، وَخَيْرَ الْحَيَاةِ، وَخَيْرَ الْمَمَاتِ، وَثَبِّتْنِي وَثَقِّلْ مَوَازِينِي، وَحَقِّقْ إِيمَانِي، وَارْفَعْ دَرَجَتِي، وَتَقَبَّلِ الْخَيْرَ وَخَوَاتِمَهُ وَأَوَّلَهُ وَآخِرَهُ وَظَاهِرَهُ وَبَاطِنَهُ، وَالدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ." },
    { id: 92, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ أَنْ تَرْفَعَ ذِکْرِي، وَتَضَعَ وِزْرِي، وَتُصْلِحَ أَمْرِي، وَتُطَهِّرَ قَلْبِي، وَتُحَصِّنَ فَرْجِي، وَتُنَوِّرَ لِي قَلْبِي، وَتَغْفِرَ لِي ذَنْبِي، وَأَسْأَلُکَ أَنْ تُبَارِکَ لِي فِي نَفْسِي، وَفِي سَمْعِي، وَفِي بَصَرِي، وَفِي رُوحِي، وَفِي خُلُقِي وَأَهْلِي، وَفِي مَحْيَايَ وَفِي مَمَاتِي، وَفِي عَمَلِي، وَتَقَبَّلْ حَسَنَاتِي، وَأَسْأَلُکَ الدَّرَجَاتِ الْعُلَى مِنَ الْجَنَّةِ، آمِينَ." },
    { id: 93, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ الطَّيِّبَاتِ، وَفِعْلَ الْخَيْرَاتِ، وَتَرْکَ الْمُنْکَرَاتِ، وَحُبَّ الْمَسَاکِينِ، وَأَنْ تَتُوبَ عَلَيَّ وَتَغْفِرَ لِي وَتَرْحَمَنِي، وَإِذَا أَرَدْتَ فِي خَلْقِکَ فِتْنَةً فَنَجِّنِي إِلَيْکَ مِنْهَا غَيْرَ مَفْتُونٍ، اللَّهُمَّ وَأَسْأَلُکَ حُبَّکَ، وَحُبَّ مَنْ يُحِبُّکَ، وَحُبَّ عَمَلٍ يُبَلِّغُنِي إِلَى حُبِّکَ." },
    { id: 94, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِکَ مِنَ الشَّرِّ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَسْأَلُکَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِکَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَسْأَلُکَ مِنْ خَيْرِ مَا سَأَلَکَ عَبْدُکَ وَرَسُولُکَ مُحَمَّدٌ، وَأَسْأَلُکَ مَا قَضَيْتَ لِي مِنْ أَمْرٍ أَنْ تَجْعَلَ عَاقِبَتَهُ رُشْدًا." },
    { id: 95, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ صِحَّةً فِي إِيمَانٍ، وَإِيمَانًا فِي حُسْنِ خُلُقٍ، وَنَجَاحًا يَتْبَعُهُ فَلَاحٌ، وَرَحْمَةً مِنْکَ وَعَافِيَةً، وَمَغْفِرَةً مِنْکَ وَرِضْوَانًا." },
    { id: 96, ar: "اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَکَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَکَ شَيْءٌ، أَعُوذُ بِکَ مِنْ شَرِّ كُلِّ دَابَّةٍ نَاصِيَتُهَا بِيَدِکَ، وَأَعُوذُ بِکَ مِنَ الْإِثْمِ وَالْكَسَلِ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْغِنَى، وَمِنْ فِتْنَةِ الْفَقْرِ، وَأَعُوذُ بِکَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ، اللَّهُمَّ نَقِّ قَلْبِي مِنَ الْخَطَايَا کَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ، اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطِيئَتِي كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ." },
    { id: 97, ar: "اللَّهُمَّ بِعِلْمِکَ الْغَيْبَ وَقُدْرَتِکَ عَلَى الْخَلْقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْرًا لِي، اللَّهُمَّ وَأَسْأَلُکَ خَشْيَتَکَ فِي الْغَيْبِ وَالشَّهَادَةِ، وَأَسْأَلُکَ كَلِمَةَ الْحَقِّ فِي الْغَضَبِ وَالرِّضَا، وَأَسْأَلُکَ الْقَصْدَ فِي الْفَقْرِ وَالْغِنَى، وَأَسْأَلُکَ نَعِيمًا لَا يَنْفَدُ، وَأَسْأَلُکَ قُرَّةَ عَيْنٍ لَا تَنْقَطِعُ، وَأَسْأَلُکَ الرِّضَا بَعْدَ الْقَضَاءِ، وَأَسْأَلُکَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَأَسْأَلُکَ لَذَّةَ النَّظَرِ إِلَى وَجْهِکَ، وَأَسْأَلُکَ الشَّوْقَ إِلَى لِقَائِکَ فِي غَيْرِ ضَرَّاءَ مُضِرَّةٍ وَلَا فِتْنَةٍ مُضِلَّةٍ، اللَّهُمَّ زَيِّنَّا بِزِينَةِ الْإِيمَانِ، وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ." },
    { id: 98, ar: "اللَّهُمَّ إِنَّا نَسْأَلُکَ مُوجِبَاتِ رَحْمَتِکَ، وَعَزَائِمَ مَغْفِرَتِکَ، وَالسَّلَامَةَ مِنْ کُلِّ إِثْمٍ، وَالْغَنِيمَةَ مِنْ کُلِّ بِرٍّ، وَالْفَوْزَ بِالْجَنَّةِ، وَالنَّجَاةَ مِنَ النَّارِ." },
    { id: 99, ar: "اللَّهُمَّ احْفَظْنِي بِالْإِسْلَامِ قَائِمًا، وَاحْفَظْنِي بِالْإِسْلَامِ قَاعِدًا، وَاحْفَظْنِي بِالْإِسْلَامِ رَاقِدًا، وَلَا تُشْمِتْ بِي عَدُوًّا حَاسِدًا، اللَّهُمَّ إِنِّي أَسْأَلُکَ مِنْ خَيْرِ خَزَائِنِهِ بِيَدِکَ، وَأَعُوذُ بِکَ مِنْ شَرِّ خَزَائِنِهِ بِيَدِکَ." },
    { id: 100, ar: "اللَّهُمَّ اغْفِر| لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، اللَّهُمَّ ارْزُقْنِي مِنْ طَاعَتِکَ مَا تَحُولُ بِهِ بَيْنِي وَبَيْنَ مَعْصِيَتِکَ، وَارْزُقْنِي مِنْ خَشْيَتِکَ مَا تُبَلِّغُنِي بِهِ رَحْمَتَکَ، وَارْزُقْنِي مِنَ الْيَقِينِ مَا تُهَوِّنُ بِهِ عَلَيَّ مَصَائِبَ الدُّنْيَا، وَبَارِکْ لِي فِي سَمْعِي وَبَصَرِي وَاجْعَلْهُمَا الْوَارِثَ مِنِّي، اللَّهُمَّ اجْعَلْ ثَأْرِي عَلَى مَنْ ظَلَمَنِي، وَانْصُرْنِي عَلَى مَنْ عَادَانِي، وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّي وَلَا مَبْلَغَ عِلْمِي، اللَّهُمَّ لَا تُسَلِّطْ عَلَيَّ مَنْ لَا يَرْحَمُنِي." },
    { id: 101, ar: "رَبِّ أَعِنِّي وَلَا تُعِنْ عَلَيَّ، وَانْصُرْنِي وَلَا تَنْصُرْ عَلَيَّ، وَامْکُرْ لِي وَلَا تَمْکُرْ عَلَيَّ، وَاهْدِنِي وَيَسِّرِ الْهُدَى إِلَيَّ، وَانْصُرْنِي عَلَى مَنْ بَغَى عَلَيَّ، رَبِّ اجْعَلْنِي لَکَ شَکَّارًا، لَکَ ذَکَّارًا، لَکَ رَهَّابًا، لَکَ مِطْوَاعًا، إِلَيْکَ مُخْبِتًا، أَوَّاهًا مُنِيبًا، رَبِّ تَقَبَّلْ تَوْبَتِي، وَاغْسِلْ حَوْبَتِي، وَأَجِبْ دَعْوَتِي، وَثَبِّتْ حُجَّتِي، وَاهْدِ قَلْبِي، وَسَدِّدْ لِسَانِي، وَاسْلُلْ سَخِيمَةَ قَلْبِي." },
    { id: 102, ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ." },
    { id: 103, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ مِنْ خَيْرِ مَا سَأَلَکَ مِنْهُ عَبْدُکَ وَنَبِيُّکَ مُحَمَّدٌ ﷺ وَعِبَادُکَ الصَّالِحُونَ، وَأَعُوذُ بِکَ مِنْ شَرِّ مَا اسْتَعَاذَکَ مِنْهُ عَبْدُکَ وَنَبِيُّکَ مُحَمَّدٌ ﷺ وَعِبَادُکَ الصَّالِحُونَ." },
    { id: 104, ar: "اللَّهُمَّ إِنِّي أَسْأَلُکَ رَحْمَةً مِنْ عِنْدِکَ تَهْدِي بِهَا قَلْبِي، وَتَجْمَعُ بِهَا أَمْرِي، وَتَلُمُّ بِهَا شَعَثِي، وَتُصْلِحُ بِهَا غَائِبِي، وَتَرْفَعُ بِهَا شَاهِدِي، وَتُزَكِّي بِهَا عَمَلِي، وَتُلْهِمُنِي بِهَا رُشْدِي، وَتَرُدُّ بِهَا الْفِتَنَ عَنِّي، وَتَعْصِمُنِي بِهَا مِنْ کُلِّ سُوءٍ." },
    { id: 105, ar: "اللَّهُمَّ رَضِّنِي بِقَضَائِکَ، وَبَارِکْ لِي فِي قَدَرِکَ، حَتَّى لَا أُحِبَّ تَعْجِيلَ مَا أَخَّرْتَ وَلَا تَأْخِيرَ مَا عَجَّلْتَ، وَاکْفِنِي کُلَّ هَوْلٍ دُونَ الْجَنَّةِ." },
    { id: 106, ar: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْکَرِيمِ." },
    { id: 107, ar: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَفِي عَصَبِي نُورًا، وَفِي لَحْمِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَاجْعَلْنِي نُورًا، وَاجْعَلْ لِي نُورًا." }

    ],
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

// Complete Multilingual Dictionary (All UI Text Elements Added)
const translations = {
    ur: {
        levelBronze: "لیول: نوآموز (🥉 Bronze)",
        levelSilver: "لیول: سلور (🥈 Silver)",
        levelGold: "لیول: گولڈ (🥇 Gold)",
        levelDiamond: "لیول: ڈائمنڈ (💎 Diamond)",
        resetText: "ری سیٹ",
        undoText: "انڈو",
        goal: "ہدف",
        history: "حالیہ ریکارڈز (History)",
        noZikr: "کوئی ذکر نہیں ملا",
        resetConfirm: "کیا آپ موجودہ کاؤنٹ ری سیٹ کرنا چاہتے ہیں؟",
        complete: "مکمل",
        searchPlaceholder: "ذکر تلاش کریں...",
        tabGeneral: "عام تسبیح",
        tabME: "صبح و شام",
        tabAP: "بعدِ نماز",
        tabDD: "روزمرة دعائيں",
        tapHint: "ٹیپ کریں (ڈبل ٹیپ سے انڈو کریں)",
        targetLabel: "ہدف سیٹ کریں:",
        statsTitle: "روزانہ کی کارکردگی",
        labelToday: "آج کا ذکر",
        labelLifetime: "کل تسبیحات",
        themeDark: "🌙 ڈارک موڈ", themeLight: "☀️ لائٹ موڈ", themeAmoled: "⚫ ایمولیڈ", themeIslamic: "🕌 اسلامک گرین", themeBlue: "🔹 رائل بلیو",
        soundClassic: "🎵 کلک ساؤنڈ", soundDigital: "📟 ڈیجیٹل", soundSilent: "🔇 خاموش"
    },
    en: {
        levelBronze: "Level: Novice (🥉 Bronze)",
        levelSilver: "Level: Silver (🥈 Silver)",
        levelGold: "Level: Gold (🥇 Gold)",
        levelDiamond: "Level: Diamond (💎 Diamond)",
        resetText: "Reset",
        undoText: "Undo",
        goal: "Goal",
        history: "Recent Records (History)",
        noZikr: "No Zikr found",
        resetConfirm: "Do you want to reset the current count?",
        complete: "Completed",
        searchPlaceholder: "Search Zikr...",
        tabGeneral: "General",
        tabME: "Morning & Evening",
        tabAP: "After Prayer",
        tabDD: "Daily Prayers",
        tapHint: "Tap to count (Double tap to Undo)",
        targetLabel: "Set Target:",
        statsTitle: "Daily Performance Dashboard",
        labelToday: "Today's Count",
        labelLifetime: "Lifetime Count",
        themeDark: "🌙 Dark Mode", themeLight: "☀️ Light Mode", themeAmoled: "⚫ AMOLED", themeIslamic: "🕌 Islamic Green", themeBlue: "🔹 Royal Blue",
        soundClassic: "🎵 Classic Sound", soundDigital: "📟 Digital Beep", soundSilent: "🔇 Mute / Silent"
    },
    ar: {
        levelBronze: "المستوى: مبتدئ (🥉 البرونزي)",
        levelSilver: "المستوى: الفضي (🥈 الفضي)",
        levelGold: "المستوى: الذهبي (🥇 الذهبي)",
        levelDiamond: "المستوى: الماسي (💎 الماسي)",
        resetText: "إعادة تعيين",
        undoText: "تراجع",
        goal: "الهدف",
        history: "السجلات الأخيرة (التاريخ)",
        noZikr: "لم يتم العثور على ذکر",
        resetConfirm: "هل تريد إعادة تعيين العداد الحالي؟",
        complete: "مكتمل",
        searchPlaceholder: "ابحث عن الذكر...",
        tabGeneral: "تسبيح عام",
        tabME: "أذكار الصباح والمساء",
        tabAP: "بعد الصلاة",
        tabDD: "الأدعية اليومية",
        tapHint: "اضغط للعد (انقر مزدوجًا للتراجع)",
        targetLabel: "تحديد الهدف:",
        statsTitle: "لوحة الأداء اليومي",
        labelToday: "أذكار اليوم",
        labelLifetime: "إجمالي التسبيحات",
        themeDark: "🌙 الوضع الداكن", themeLight: "☀️ الوضع الفاتح", themeAmoled: "⚫ شاشة أموليد", themeIslamic: "🕌 الأخضر الإسلامي", themeBlue: "🔹 الأزرق الملكي",
        soundClassic: "🎵 صوت نقرة", soundDigital: "📟 رقمي الكتروني", soundSilent: "🔇 وضع صامت"
    },
    tr: {
        levelBronze: "Seviye: Çaylak (🥉 Bronz)",
        levelSilver: "Seviye: Gümüş (🥈 Gümüş)",
        levelGold: "Seviye: Altın (🥇 Altın)",
        levelDiamond: "Seviye: Elmas (💎 Elmas)",
        resetText: "Sıfırla",
        undoText: "Geri Al",
        goal: "Hedef",
        history: "Geçmiş Kayıtlar",
        noZikr: "Zikir bulunamadı",
        resetConfirm: "Mevcut sayımı sıfırlamak istiyor musunuz?",
        complete: "Tamamlandı",
        searchPlaceholder: "Zikir ara...",
        tabGeneral: "Genel Zikir",
        tabME: "Sabah ve Akşam",
        tabAP: "Namazdan Sonra",
        tabDD: "Günlük Dualar",
        tapHint: "Saymak için tıklayın (Geri almak için çift tıklayın)",
        targetLabel: "Hedef Belirle:",
        statsTitle: "Günlük Performans Paneli",
        labelToday: "Bugünkü Zikir",
        labelLifetime: "Toplam Zikir",
        themeDark: "🌙 Karanlık Mod", themeLight: "☀️ Aydınlık Mod", themeAmoled: "⚫ AMOLED Siyah", themeIslamic: "🕌 İslami Yeşil", themeBlue: "🔹 Kraliyet Mavisi",
        soundClassic: "🎵 Klasik Tık", soundDigital: "📟 Dijital Sinyal", soundSilent: "🔇 Sessiz Mod"
    },
    id: {
        levelBronze: "Tingkat: Pemula (🥉 Perunggu)",
        levelSilver: "Tingkat: Perak (🥈 Perak)",
        levelGold: "Tingkat: Emas (🥇 Emas)",
        levelDiamond: "Tingkat: Berlian (💎 Berlian)",
        resetText: "Atur Ulang",
        undoText: "Batal",
        goal: "Target",
        history: "Catatan Terbaru",
        noZikr: "Zikir tidak ditemukan",
        resetConfirm: "Apakah Anda ingin mengatur ulang hitungan saat ini?",
        complete: "Selesai",
        searchPlaceholder: "Cari zikir...",
        tabGeneral: "Tasbih Umum",
        tabME: "Pagi & Petang",
        tabAP: "Setelah Shalat",
        tabDD: "Doa Sehari-hari",
        tapHint: "Ketuk untuk menghitung (Ketuk dua kali untuk membatalkan)",
        targetLabel: "Atur Target:",
        statsTitle: "Dasbor Kinerja Harian",
        labelToday: "Dzikir Hari Ini",
        labelLifetime: "Total Dzikir",
        themeDark: "🌙 Mode Gelap", themeLight: "☀️ Mode Terang", themeAmoled: "⚫ AMOLED Hitam", themeIslamic: "🕌 Hijau Islami", themeBlue: "🔹 Biru Kerajaan",
        soundClassic: "🎵 Suara Klasik", soundDigital: "📟 Bunyi Digital", soundSilent: "🔇 Mode Senyap"
    }
};

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
    renderHistory();
    
    // زبان کی سیٹنگز پہلی بار لوڈ کریں
    applyLanguageUI();
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

// Full UI Language Controller
function applyLanguageUI() {
    const dict = translations[currentLang] || translations['ur'];

    // 1. سرچ بار اور بٹنز کا ترجمہ
    document.getElementById('search-input').placeholder = dict.searchPlaceholder;
    document.getElementById('reset-text').textContent = dict.resetText;
    document.getElementById('undo-text').textContent = dict.undoText;
    document.getElementById('text-history').innerHTML = `<i class="fas fa-history"></i> ${dict.history}`;
    document.getElementById('tap-hint-text').textContent = dict.tapHint;
    document.getElementById('target-label-text').textContent = dict.targetLabel;
    
    // 2. ڈیش بورڈ سٹیٹس کا ترجمہ
    document.getElementById('stats-title').innerHTML = `<i class="fas fa-chart-line"></i> ${dict.statsTitle}`;
    document.getElementById('label-today').textContent = dict.labelToday;
    document.getElementById('label-lifetime').textContent = dict.labelLifetime;

    // 3. چاروں کیٹیگریز ٹیبز کا ترجمہ
    document.getElementById('tab-general').textContent = dict.tabGeneral;
    document.getElementById('tab-me').textContent = dict.tabME;
    document.getElementById('tab-ap').textContent = dict.tabAP;
    document.getElementById('tab-dd').textContent = dict.tabDD;

    // 4. ڈراپ ڈاؤن آپشنز (تھیم اور ساؤنڈ) کا ترجمہ متحرک طور پر کریں
    document.querySelectorAll('.lang-txt').forEach(el => {
        const key = el.getAttribute('data-key');
        if(dict[key]) el.textContent = dict[key];
    });

    // 5. پیج کی ڈائریکشن بدلو (RTL / LTR)
    if (currentLang === 'ur' || currentLang === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }

    // 6. باقی کمپوننٹس کو ری رینڈر کرو تاکہ نئی زبان لاگو ہو
    checkAchievements();
    updateCounterDisplay();
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

// Do Undo Function
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
    const dict = translations[currentLang] || translations['ur'];
    historyLogEl.innerHTML = historyLog.map(item => `
        <li class="history-item">
            <span>${item.text.substring(0, 25)}...</span>
            <strong>${item.target} (${dict.complete}) <small>${item.time}</small></strong>
        </li>
    `).join('');
}

function checkAchievements() {
    const badgeText = document.getElementById('badge-text');
    if (!badgeText) return;
    
    const dict = translations[currentLang] || translations['ur'];
    
    if (lifetimeCount >= 1000) badgeText.textContent = dict.levelDiamond;
    else if (lifetimeCount >= 500) badgeText.textContent = dict.levelGold;
    else if (lifetimeCount >= 100) badgeText.textContent = dict.levelSilver;
    else badgeText.textContent = dict.levelBronze;
}

function updateCounterDisplay() {
    currentCountEl.textContent = count;
    
    const dict = translations[currentLang] || translations['ur'];
    targetDisplayEl.textContent = `${dict.goal}: ${target}`;
    
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
    const dict = translations[currentLang] || translations['ur'];
    if (filteredDatabase.length === 0) {
        zikrArabicEl.textContent = "-";
        zikrTranslationEl.textContent = dict.noZikr;
        hadithRefEl.textContent = "";
        return;
    }
    const zikr = filteredDatabase[currentIndex];
    zikrArabicEl.textContent = zikr.ar;
    
    // اگر انگریزی منتخب ہو تو ڈیٹا بیس کا انگلش ترجمہ، ورنہ اردو والا
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
    localStorage.setItem('tasbeeh_lang', currentLang);
}

function applyTheme(theme) {
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
    localStorage.setItem('tasbeeh_theme', theme);
}

// Event Listeners
tapArea.addEventListener('click', (e) => {
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
    const dict = translations[currentLang] || translations['ur'];
    if(confirm(dict.resetConfirm)) {
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

// زبان کی تبدیلی کا مین ایونٹ لسٹر
document.getElementById('language-select').addEventListener('change', function() {
    currentLang = this.value;
    saveState();
    applyLanguageUI();
    renderHistory();
    updateZikrDisplay(); 
});