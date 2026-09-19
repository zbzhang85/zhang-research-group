// Content data for Zhang Research Group website
// Source: Curriculum Vitae of Dr. Zhenbo Zhang (updated 2026-09)

export interface Publication {
  n: number;
  text: string;
}

export const stats = [
  { value: '56', label: 'Publications' },
  { value: '2,780+', label: 'Citations' },
  { value: '26', label: 'H-index' },
  { value: '20', label: 'Invited Talks' },
  { value: '10', label: 'PI Grants' },
  { value: '3', label: 'Patents' },
];

export const profileParagraphs = [
  'Our research in physical metallurgy integrates alloy design, additive manufacturing (AM), and multiscale mechanics to develop structural alloys with high strength, damage tolerance, and reliable service performance. We lead the M³ (Manufacturing, Microstructure, Mechanics) laboratory at ShanghaiTech University and focus on the composition and microstructure design of high-performance alloys by additive manufacturing (Materials Design by AM, MDbAM), and on revealing the strengthening and failure mechanisms of alloys under near-service environments through multiscale microstructural and mechanical characterization, which provides the foundation for improving and reliably predicting the service life of structural materials for high-end equipment.',
  'Representative achievements include: (1) developed new titanium alloys designed for AM with fully equiaxed, texture-free microstructures and excellent properties, extended the titanium alloy design space by AM and fabricated novel titanium alloys with ultrahigh strength; (2) established a multiscale microstructure-architecting methodology that exploits the intrinsic solidification features of AM, which has been successfully used to achieve novel heterostructured steels and honeycomb dual-phase cellular alloys; (3) employed multiscale microscopy, in-situ mechanical testing, and high-resolution digital image correlation (HRDIC) to reveal how phase interfaces, grain boundaries, and adjacent precipitates govern strain localization and fracture in titanium alloys and nickel-based superalloys, including under hydrogen exposure and elevated-temperature loading; (4) translated the above experience into practice, such as components in robotic arm, fuel nozzles.',
];

export interface DirectionPaper {
  text: string;
  news?: { label: string; url: string }[];
}

export interface Direction {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images?: { src: string; caption?: string }[];
  papers: DirectionPaper[];
}

export const directions: Direction[] = [
  {
    id: '01',
    title: 'AM-Driven Design of High-Performance Ti Alloys',
    subtitle: 'Materials Design for & by AM',
    description:
      'Exploiting the expanded compositional design space of additive manufacturing to develop high-performance, Fe-rich, cost-affordable Ti. Machine-learning-guided composition design, high-throughput printing iterations, and mechanical-feedback optimization establish a new AM-based alloy design paradigm for aerospace and consumer-electronics applications.',
    images: [
      {
        src: 'images/directions/d1-a.jpg',
        caption: 'In-situ SEM + DIC revealing grain-boundary α lath mediated strain localization and cracking',
      },
      {
        src: 'images/directions/d1-b.jpg',
        caption: 'Fe-rich Ti alloy by directed energy deposition: segregation-free equiaxed β microstructure with isotropic properties',
      },
    ],
    papers: [
      {
        text: 'J. Chang, Y. Ma*, S. Huang, Z. Zhai, Y. Wu, R. Yang, Z.B. Zhang*, On the origin of grain boundary α phase mediated strain localization and crack initiation in metastable β titanium alloy, Acta Materialia 302 (2026) 121602.',
        news: [
          { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2025/1226/c1001a1118430/page.htm' },
          { label: 'ShanghaiTech News (EN)', url: 'https://www.shanghaitech.edu.cn/en/2025/1230/c1419a1118528/page.htm' },
        ],
      },
      {
        text: 'J. Chang, Y. Ma*, S. Huang, M. Qi, Z. Zhai, Y. Wu, R. Yang, Z.B. Zhang*, Additive manufacturing of a new titanium alloy with tunable microstructure and isotropic properties, Additive Manufacturing 95 (2024) 104546.',
        news: [
          { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2024/1129/c1001a1103931/page.htm' },
        ],
      },
      {
        text: 'G. Su, J. Chang, Z. Zhai, Y. Wu, Y. Ma*, R. Yang, Z.B. Zhang*, On the role of grain morphology in the mechanical behavior of laser powder bed fusion metastable β titanium alloy, Materials Science and Engineering: A 909 (2024) 146844.',
      },
      {
        text: 'Y. Li, J. Chang, Y. Xuan, Z. Yang, J. Yue, G. Su, X. Li, Z.B. Zhang*, High-strength TC4 alloy with modified composition and multiscale heterogeneity fabricated by direct energy deposition, Journal of Alloys and Compounds 1026 (2025) 180458.',
      },
    ],
  },
  {
    id: '02',
    title: 'Multiscale Microstructure Architecting by AM',
    subtitle: 'Materials Design by AM (MDbAM)',
    description:
      'Harnessing the intrinsic physical metallurgy of AM — steep thermal gradients, ultra-fast solidification, and cyclic thermal history — to architect microstructures across length scales: melt-pool-scale heterogeneous structures, cellular dual-phase honeycomb alloys, and grain-boundary-engineered superalloys in which deleterious twin boundaries are eliminated by AM to enhance high-temperature fatigue performance.',
    images: [
      {
        src: 'images/directions/d2-a.jpg',
        caption: '3D EBSD tomography of melt-pool-scale heterogeneous structures architected by AM',
      },
      {
        src: 'images/directions/d2-b.jpg',
        caption: 'Material architecting from dual powders: HARD+SOFT domains with gradient interfaces for strength–ductility synergy',
      },
      {
        src: 'images/directions/d2-c.jpg',
        caption: 'Dual-phase (BCC/FCC) cellular structure with Ni/Cr/Mo elemental partitioning',
      },
    ],
    papers: [
      {
        text: 'Y. Xuan, J.Q. Chang, Y. Ou, R. Yang, Z.B. Zhang*, Heterogeneous structure architected by additive manufacturing: facile route towards strong and ductile steel, Materials Research Letters 12(3) (2024) 199-207.',
        news: [
          { label: 'ShanghaiTech SCA News', url: 'https://mp.weixin.qq.com/s/ngf21uauQ9MdS6rgkBC9UQ' },
        ],
      },
      {
        text: 'Z.B. Zhang*, E. Stavroulakis, D. Stewart, M. Preuss*, Architecting new materials with strength-ductility synergy through interphase engineering, Journal of Materials Science & Technology 240 (2026) 225-232.',
        news: [
          { label: 'ShanghaiTech 2026 “Beautiful Science” Calendar', url: 'https://mp.weixin.qq.com/s/iQ9eLxOEMm1dvYGKwZpt0Q' },
        ],
      },
    ],
  },
  {
    id: '03',
    title: 'Multiscale Characterization under Near-Service Conditions',
    subtitle: 'Synchrotron + in-situ SEM/TEM + HRDIC',
    description:
      'Multidimensional, multiscale microstructural and mechanical characterization of titanium alloys and Ni-based superalloys under near-service environments, leveraging the Shanghai Synchrotron Radiation Facility and in-situ HRDIC. Current focus: hydrogen-assisted damage of AM titanium alloys and high-temperature fatigue of AM superalloys, guided by a strain-delocalization design philosophy.',
    images: [
      {
        src: 'images/directions/d3-a.jpg',
        caption: 'Phase boundaries redistribute deformation: from strain localization to strain delocalization in dual-phase Ti alloys',
      },
      {
        src: 'images/directions/d3-b.jpg',
        caption: 'Twin-boundary-associated strain localization and failure in Ni-based superalloys',
      },
    ],
    papers: [
      {
        text: 'Z. Wu, R. Turner, M.J. Qi, L.F.D. Shi, M.S. Wang, F. Wang, Z.H. Gao, Y. Chiu*, Z.B. Zhang*, Effect of phase boundary on the critical resolved shear stress and dislocation behavior of dual-phase titanium alloy, Acta Materialia 275 (2024) 120051.',
        news: [
          { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2024/0718/c1001a1099172/page.htm' },
        ],
      },
      {
        text: 'S. Lei, B. Sun*, Y. Xuan, R. Tian, Y. Ma, M.N. Elkot, H. Cheng, N. Yao, T. Lu, J. Tan, Z.B. Zhang*, X.-C. Zhang*, S.-T. Tu, On the anisotropic deformation behavior of a low-density medium manganese steel, Acta Materialia 292 (2025) 121060.',
      },
      {
        text: 'Z.B. Zhang*, Z.B. Yang, S. Lu, A. Harte, R. Morana, M. Preuss*, Strain localisation and failure at twin-boundary complexions in nickel-based superalloys, Nature Communications 11 (2020) 5541.',
        news: [
          { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2020/1001/c1001a56157/page.htm' },
        ],
      },
      {
        text: 'X. Li, Z. Zhai, W. Lin, Y. Ou, Y. Wu, R. Yang, Z.B. Zhang*, Precipitate mediated plasticity at twin boundary in nickel-based superalloy, Materialia 26 (2022) 101612.',
      },
    ],
  },
  {
    id: '04',
    title: 'Engineering Translation of AM Alloys',
    subtitle: 'From laboratory to real components',
    description:
      'Translating fundamental understanding into engineering practice: AM titanium alloy components for deep-sea exploration robotic arms, ultrahigh-strength AM titanium for aerospace structures and 3C consumer electronics, an AM fuel nozzle for gas turbines, and directed-energy-deposition repair of γ-TiAl aero-engine blades.',
    papers: [
      {
        text: 'P. Dang, J. Chang, Y. Zhang, H. Xu, Z. Zhai, R. Liu*, Y. Wu, Z.B. Zhang*, Tailoring microstructural heterogeneity and strain partitioning for enhanced mechanical properties of additively repaired γ-TiAl alloy, Materials Characterization 239 (2026) 116654.',
      },
      {
        text: 'Y. Zhang, Z.R. Zhai, Z.X. Wu, W.H. Lin, R. Yang, Z.B. Zhang*, Tailoring high-temperature mechanical properties of laser powder bed fusion Ti-6.5Al-2Zr-1Mo-1V alloy via microstructure design, Materials & Design 236 (2023) 112488.',
      },
    ],
  },
];

// Publications in three groups following the order of the CV:
// independent work since 2020 (corresponding-author papers first, then co-authored),
// submitted manuscripts (without journal names), and work prior to ShanghaiTech.
export const independentPubs: Publication[] = [
  { n: 1, text: 'J. Chang, Y. Ma*, S. Huang, Z. Zhai, Y. Wu, R. Yang, Z.B. Zhang*, On the origin of grain boundary α phase mediated strain localization and crack initiation in metastable β titanium alloy, Acta Materialia 302 (2026) 121602.' },
  { n: 2, text: 'J. Chang, Y. Ma*, S. Huang, M. Qi, Z. Zhai, Y. Wu, R. Yang, Z.B. Zhang*, Additive manufacturing of a new titanium alloy with tunable microstructure and isotropic properties, Additive Manufacturing 95 (2024) 104546.' },
  { n: 3, text: 'Y. Xuan, J.Q. Chang, Y. Ou, R. Yang, Z.B. Zhang*, Heterogeneous structure architected by additive manufacturing: facile route towards strong and ductile steel, Materials Research Letters 12(3) (2024) 199-207.' },
  { n: 4, text: 'Z. Wu, R. Turner, M.J. Qi, L.F.D. Shi, M.S. Wang, F. Wang, Z.H. Gao, Y. Chiu*, Z.B. Zhang*, Effect of phase boundary on the critical resolved shear stress and dislocation behavior of dual-phase titanium alloy, Acta Materialia 275 (2024) 120051.' },
  { n: 5, text: 'Z.B. Zhang*, E. Stavroulakis, D. Stewart, M. Preuss*, Architecting new materials with strength-ductility synergy through interphase engineering, Journal of Materials Science & Technology 240 (2026) 225-232.' },
  { n: 6, text: 'S. Lei, B. Sun*, Y. Xuan, R. Tian, Y. Ma, M.N. Elkot, H. Cheng, N. Yao, T. Lu, J. Tan, Z.B. Zhang*, X.-C. Zhang*, S.-T. Tu, On the anisotropic deformation behavior of a low-density medium manganese steel, Acta Materialia 292 (2025) 121060.' },
  { n: 7, text: 'Z.B. Zhang*, Z.B. Yang, S. Lu, A. Harte, R. Morana, M. Preuss*, Strain localisation and failure at twin-boundary complexions in nickel-based superalloys, Nature Communications 11 (2020) 5541.' },
  { n: 8, text: 'G. Su, J. Chang, Z. Zhai, Y. Wu, Y. Ma*, R. Yang, Z.B. Zhang*, On the role of grain morphology in the mechanical behavior of laser powder bed fusion metastable β titanium alloy, Materials Science and Engineering: A 909 (2024) 146844.' },
  { n: 9, text: 'Y. Zhang, W.H. Lin, Z.R. Zhai, Y.N. Wu, R. Yang, Z.B. Zhang*, Enhancing the mechanical property of laser powder bed fusion CoCrMo alloy by tailoring the microstructure and phase constituent, Materials Science and Engineering: A 862 (2023) 144449.' },
  { n: 10, text: 'X. Xue, Y. Ou, H. Chang, W. Wang, Y. Wu, Z.B. Zhang*, Z. Zhai*, R. Yang, Fracture toughness enhancement of a laser powder bed fusion manufactured Ti-55511 alloy with a heat-treatment-tailored hierarchical microstructure, Materials Science and Engineering: A 939 (2025) 148504.' },
  { n: 11, text: 'Z. Huang, Z.R. Zhai, W.H. Lin, H. Chang, Y.N. Wu, R. Yang, Z.B. Zhang*, On the orientation dependent microstructure and mechanical behavior of Hastelloy X superalloy fabricated by laser powder bed fusion, Materials Science and Engineering: A 844 (2022) 143208.' },
  { n: 12, text: 'Y. Li, J. Chang, Y. Xuan, Z. Yang, J. Yue, G. Su, X. Li, Z.B. Zhang*, High-strength TC4 alloy with modified composition and multiscale heterogeneity fabricated by direct energy deposition, Journal of Alloys and Compounds 1026 (2025) 180458.' },
  { n: 13, text: 'Y. Zhang, Z.R. Zhai, Z.X. Wu, W.H. Lin, R. Yang, Z.B. Zhang*, Tailoring high-temperature mechanical properties of laser powder bed fusion Ti-6.5Al-2Zr-1Mo-1V alloy via microstructure design, Materials & Design 236 (2023) 112488.' },
  { n: 14, text: 'W. Wang, W. Lin, R. Yang, Y. Wu, J. Li, Z.B. Zhang*, Z. Zhai*, Mesoscopic evolution of molten pool during selective laser melting of superalloy Inconel 738 at elevating preheating temperature, Materials & Design 13 (2022) 110355.' },
  { n: 15, text: 'Z. Yang, X. Li, J. Chang, Z. Wu, Y. Yang*, Z.B. Zhang*, On the stray grains in single-crystal Ni-based superalloy by additive manufacturing: formation mechanism and elimination strategy, Journal of Materials Research and Technology 36 (2025) 7125-7134.' },
  { n: 16, text: 'J. Jiang, X.C. Li, Z.B. Zhang*, Effect of scanning strategy on the formation of heterostructure and recrystallization behavior of additively manufactured IN718 alloy, Journal of Materials Research and Technology 43 (2026) 2200.' },
  { n: 17, text: 'P. Dang, J. Chang, Y. Zhang, H. Xu, Z. Zhai, R. Liu*, Y. Wu, Z.B. Zhang*, Tailoring microstructural heterogeneity and strain partitioning for enhanced mechanical properties of additively repaired γ-TiAl alloy, Materials Characterization 239 (2026) 116654.' },
  { n: 18, text: 'W. Lin*, F. Li, X. Hua, Z.B. Zhang*, Laser welding Al–Si coated hot stamping steel in conduction mode: weld formation and Al-rich microstructure, Journal of Materials Research and Technology 19 (2022) 4282-4295.' },
  { n: 19, text: 'W. Lin*, Z.B. Zhang*, Cracking reduction and texture control in laser powder bed fusion additive manufactured non-weldable nickel alloy, Journal of Materials Engineering and Performance 34 (2025) 29290.' },
  { n: 20, text: 'X. Li, Z. Zhai, W. Lin, Y. Ou, Y. Wu, R. Yang, Z.B. Zhang*, Precipitate mediated plasticity at twin boundary in nickel-based superalloy, Materialia 26 (2022) 101612.' },
  { n: 21, text: 'X.C. Li, Y.N. Wu, R. Yang, Z.B. Zhang*, Origin of strain localization at twin boundary in Inconel 718 superalloy fabricated by laser powder bed fusion, IOP Conference Series: Materials Science and Engineering 1249(1) (2022) 012016.' },
  { n: 22, text: 'J. Chang, Y. Wu, Z.B. Zhang*, Effect of microstructural heterogeneity and grain morphology on the annealing behavior of additively manufactured metastable β titanium alloy, IOP Conference Series: Materials Science and Engineering 1310(1) (2024) 012033.' },
  { n: 23, text: 'Z.B. Zhang*, Multiscale materials architecting by additive manufacturing: novel structures and mechanical properties, Proceedings of the 44th Risø International Symposium on Materials Science, D. Juul Jensen eds., 205-212.' },
  { n: 24, text: 'Y. Li*, Z. Yang, Y. Chen, Z.B. Zhang, Y.-L. Tang, M. Smith, M. Lindley, X. Cao, A.K. Kleppe, E. Koemets, D.G. Hopkinson, A.J. Bell, S.J. Milne, A. Feteira, S.J. Haigh, A.S. Eggeman, J. Pan, J. Shi, Y. Yang, D.A. Hall*, Bulk Ferroelectric Heterostructures, Science Advances (2026) (Accepted).' },
  { n: 25, text: 'E. Cantergiani, Z.B. Zhang, M. Preuss, P. Withers*, Microstructural evolution during deformation of heterostructured alloy composites, IOP Conference Series: Materials Science and Engineering (2026) (Accepted).' },
  { n: 26, text: 'T. Maziar, D. Du*, A. Dong*, Y. Xu, Z.B. Zhang, B. Sun, Non local crystal plasticity and in-situ EBSD of deformation anisotropy in LPBF-ed Inconel 718, International Journal of Mechanical Sciences 310 (2026) 111136.' },
  { n: 27, text: 'F. Zhang, L. Zhou, X. Xie*, Z.B. Zhang, Q. Chao, G. Fan*, Crack inhibition and crystallographic texture control in an additively manufactured IN738LC Ni-based superalloy, Journal of Materials Research and Technology 33 (2024) 652-666.' },
  { n: 28, text: 'D. Hu*, A.D. Smith, D. Lunt, R. Thomas, M.D. Atkinson, X. Liu, Ö. Koç, J.M. Donoghue, Z.B. Zhang, J.Q. da Fonseca, M. Preuss, Tracking the onset of plasticity in a Ni-base superalloy using in-situ High-Resolution Digital Image Correlation, Materials Characterization 220 (2025) 114654.' },
  { n: 29, text: 'Z. Liu, K. Sun, H. Su, B. Miao, F. Wang, K. Yao, Y. Ma*, H. Wang, Z.B. Zhang, S. Jin, R. Yang, E. Ma*, S. Zheng*, Precipitate-tailored planar slip delivers unprecedented ductility in high-strength β titanium alloys, Acta Materialia 304 (2026) 121744.' },
  { n: 30, text: 'X. Zhang, Y. Yang, R. Hao, Y. Zhang, X. Hu, H. Shi, Z. Yang, J. Yu, X. Chen, C. Zhang, N. Yu, T. Gao, R. Wei, Z.B. Zhang, Y. Yu*, W. Liu*, Textured lithium ceramics prepared by gas-solid reactive sintering, Science Advances 11(9) (2025) eadu4531.' },
  { n: 31, text: 'X. Liu, Z. Huang, J. Chang, H. Chang, S. Huang, Y. Wu, Z.B. Zhang, Y. Ma, Z. Zhai*, R. Yang, Achieving equiaxed grain microstructure and isotropic properties in titanium thin-walled components by laser-directed energy deposition, Journal of Materials Research and Technology 36 (2025) 3620-3633.' },
  { n: 32, text: 'J. Liu, Y. Li, Y. Zhu, Y. Yang, R. Zhang, Z.B. Zhang, A. Huang, K. Zhang*, Enhancing high-temperature strength and ductility in laser powder bed fusion Ti–6.5Al–2Zr–1Mo–1V alloy via heat treatment optimization, Materials Science and Engineering: A 859 (2022) 144201.' },
  { n: 33, text: 'Z. Gao, Z.B. Zhang, X. Zhang, J. Kulczyk-Malecka, H. Liu, P. Kelly, P.J. Withers, P. Xiao*, A conformable high temperature nitride coating for Ti alloys, Acta Materialia 189 (2020) 274.' },
  { n: 34, text: 'H. Li, J. Shen*, Y. Lu, W. Zheng, Z.B. Zhang, Y. Wu, Y. Huang, Effect of V and Hf on the microstructure and properties of a Ni-based superalloy, Foundry 74 (2025) 7 (in Chinese).' },
];

export const submittedPubs: Publication[] = [
  { n: 35, text: 'X. Li, J. Chang, Z.Y. Yang, Z.B. Zhang*, On the role of coherent and incoherent twin boundary in strain heterogeneity and cracking of nickel-based superalloy at high temperature, submitted (2026).' },
  { n: 36, text: 'Z. Yang, X. Li, J. Chang, Y. Yang*, Z.B. Zhang*, Particle-stimulated recrystallization in additively manufactured single-crystal Ni-based superalloy, submitted (2026).' },
  { n: 37, text: 'Y. Xuan, X. Li, Y. Ou, R. Yang, Z.B. Zhang*, On the role of hierarchical structure in microstructural strain evolution of laser powder bed fusion 316L steel: a multiscale digital image correlation study, submitted (2026).' },
  { n: 38, text: 'J. Chang, G. Su, Y. Ma*, Q. Wang, S. Huang, Z. Zhai, Y. Wu, R. Yang*, Z.B. Zhang*, Ultrahigh strength enabled by self-assembled nanotwins in additive-manufactured titanium alloy, submitted (2026).' },
];

export const priorPubs: Publication[] = [
  { n: 39, text: 'Z.B. Zhang*, G. Obasi, R. Morana, M. Preuss, Hydrogen assisted crack initiation and propagation in a nickel-based superalloy, Acta Materialia 113 (2016) 272-283.' },
  { n: 40, text: 'Z.B. Zhang*, W. Pantleon, Response of oxide nanoparticles in an oxide dispersion strengthened steel to dynamic plastic deformation, Acta Materialia 149 (2018) 235-247.' },
  { n: 41, text: 'Z.B. Zhang*, G. Obasi, R. Morana, M. Preuss, In-situ observation of hydrogen induced crack initiation of a nickel-based superalloy, Scripta Materialia 140 (2017) 40-44.' },
  { n: 42, text: 'Z.B. Zhang*, K. Moore, G. McMahon, R. Morana, M. Preuss, On the role of precipitates in hydrogen trapping and hydrogen embrittlement of a nickel-based superalloy, Corrosion Science 146 (2019) 28-69.' },
  { n: 43, text: 'Z.B. Zhang, É. Odor, D. Farkas, B. Jóni, G. Ribárik, G. Tichy, S. Nandam, J. Ivenisenko, M. Preuss, T. Ungár*, Dislocations in grain boundary regions: the origin of heterogeneous microstrains in nanocrystalline materials, Metallurgical and Materials Transactions A 51(1) (2020) 513-530.' },
  { n: 44, text: 'Z.B. Zhang*, W. Pantleon, Oxide nanoparticles in an Al-alloyed ODS steel: crystallographic structure and interface with ferrite matrix, Philosophical Magazine 97 (2017) 1824-1846.' },
  { n: 45, text: 'Z.B. Zhang*, Y.B. Zhang, O.V. Mishin, N.R. Tao, W. Pantleon, D. Juul Jensen, Microstructural analysis of orientation dependent recovery and recrystallization in a modified 9Cr-1Mo steel deformed by compression at a high strain rate, Metallurgical and Materials Transactions A 47 (2016) 4682-4693.' },
  { n: 46, text: 'Z.B. Zhang*, O.V. Mishin, N.R. Tao, W. Pantleon, Oxide dispersion strengthened steel PM2000 processed by dynamic plastic deformation: nanostructure and annealing behaviour, Journal of Materials Science 51 (2016) 5545-5555.' },
  { n: 47, text: 'Z.B. Zhang*, G. Obasi, R. Morana, M. Preuss, Slip localisation and hydrogen embrittlement of Alloy 718, Proceedings of the 13th International Symposium on Superalloys (2016) 917-926.' },
  { n: 48, text: 'Z.B. Zhang*, O.V. Mishin, N.R. Tao, W. Pantleon, Effect of dynamic plastic deformation on the microstructure and annealing behaviour of a modified 9Cr-1Mo steel, Materials Science and Technology 31 (2015) 715-721.' },
  { n: 49, text: 'Z.B. Zhang, O.V. Mishin, N.R. Tao, W. Pantleon*, Microstructure and annealing behaviour of 9Cr-1Mo steel after dynamic plastic deformation to different strains, Journal of Nuclear Materials 458 (2015) 64-69.' },
  { n: 50, text: 'Z.B. Zhang*, O.V. Mishin, N.R. Tao, W. Pantleon, Orientation-dependent recrystallization in an oxide dispersion strengthened steel after dynamic plastic deformation, IOP Conference Series: Materials Science and Engineering 89 (2015) 012059.' },
  { n: 51, text: 'Z.B. Zhang*, O.V. Mishin, N.R. Tao, W. Pantleon, Nanoscale lamellae in an oxide dispersion strengthened steel processed by dynamic plastic deformation, IOP Conference Series: Materials Science and Engineering 63 (2014) 012065.' },
  { n: 52, text: 'Z.B. Zhang, Y.L. Hao*, S.J. Li, R. Yang, Fatigue behaviour of ultrafine-grained Ti-24Nb-4Zr-8Sn multifunctional biomedical titanium alloy, Materials Science and Engineering: A 577 (2013) 225-233.' },
  { n: 53, text: 'X. Lu, D. Wang, D. Wan, Z.B. Zhang, N. Kheradmand, A. Barnoush*, Effect of electrochemical charging on the hydrogen embrittlement susceptibility of alloy 718, Acta Materialia 179 (2019) 36-48.' },
  { n: 54, text: 'Y.Z. Li, Y. Chen, Z.B. Zhang, A. Kleppe, D. Hall*, In-situ XRD study of actuation mechanisms in BiFeO3-K0.5Bi0.5TiO3-PbTiO3 ceramics, Acta Materialia 168 (2019) 411-425.' },
  { n: 55, text: 'Y.Z. Li, Z.B. Zhang, Y. Chen, D. Hall*, Electric field-induced strain in core-shell structured BiFeO3-K0.5Bi0.5TiO3-PbTiO3 ceramics, Acta Materialia 160 (2018) 199-210.' },
  { n: 56, text: 'Y.L. Hao*, Z.B. Zhang, S.J. Li, R. Yang, Microstructure and mechanical behaviour of a Ti-24Nb-4Zr-8Sn alloy processed by warm swaging and warm rolling, Acta Materialia 60 (2012) 2169-2177.' },
  { n: 57, text: 'S.J. Li, L.E. Murr, X.Y. Cheng, Z.B. Zhang, Y.L. Hao*, R. Yang, F. Medina, R.B. Wicker, Compression fatigue behaviour of Ti-6Al-4V mesh arrays fabricated by electron beam melting, Acta Materialia 60 (2012) 793-802.' },
  { n: 58, text: 'G. Obasi*, Z.B. Zhang, R. Morana, R. Akid, M. Preuss, Effect of microstructure and alloy chemistry on hydrogen embrittlement of precipitation hardened Ni-base alloys, Metallurgical and Materials Transactions A 49 (2018) 1167-1181.' },
  { n: 59, text: 'G. Wang, Z. Lu, Z.B. Zhang, A. Feteira, C.C. Tang, D.A. Hall*, Electric field-induced irreversible relaxor to ferroelectric phase transformations in Na0.5Bi0.5TiO3-NaNbO3 ceramics, Journal of the American Ceramic Society 102(12) (2019) 7746-7754.' },
  { n: 60, text: 'X.Y. Cheng, S.J. Li, L.E. Murr, Z.B. Zhang, Y.L. Hao*, R. Yang, F. Medina, R.B. Wicker, Compression deformation behaviour of Ti-6Al-4V alloy with cellular structures fabricated by electron beam melting, Journal of the Mechanical Behavior of Biomedical Materials 16 (2012) 153-162.' },
];

export interface NewsItem {
  date: string;
  text: string;
  image?: string;
  links?: { label: string; url: string }[];
}

export const news: NewsItem[] = [
  {
    date: '2026',
    text: 'Our Journal of Materials Science & Technology work on interphase engineering was selected for the ShanghaiTech 2026 “Beautiful Science” Calendar.',
    links: [
      { label: 'WeChat', url: 'https://mp.weixin.qq.com/s/iQ9eLxOEMm1dvYGKwZpt0Q' },
    ],
  },
  {
    date: '2026.07',
    text: 'Congratulations to Dr. Jiaqiang Chang on earning his Ph.D. and being named an Outstanding Graduate of ShanghaiTech University, and to Puwei Dang and Jie Jiang on earning their Master\'s degrees. Wish you all a bright future!',
    image: 'images/news-2026-07.jpg',
    links: [
      { label: 'WeChat', url: 'https://mp.weixin.qq.com/s/BcmMcsojIpvfRmwKg7BZBg' },
    ],
  },
  {
    date: '2025.12',
    text: 'Our Acta Materialia work on grain-boundary α-phase-mediated strain localization and crack initiation in metastable β titanium alloys was featured by ShanghaiTech News.',
    links: [
      { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2025/1226/c1001a1118430/page.htm' },
      { label: 'English', url: 'https://www.shanghaitech.edu.cn/en/2025/1230/c1419a1118528/page.htm' },
    ],
  },
  {
    date: '2024.11',
    text: 'Our Additive Manufacturing paper on a new titanium alloy with tunable microstructure and isotropic properties was featured by ShanghaiTech News.',
    links: [
      { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2024/1129/c1001a1103931/page.htm' },
    ],
  },
  {
    date: '2024.07',
    text: 'Our Acta Materialia work revealing the strengthening effect of phase boundaries in dual-phase titanium alloys was featured by ShanghaiTech News.',
    links: [
      { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2024/0718/c1001a1099172/page.htm' },
    ],
  },
  {
    date: '2024',
    text: 'Our Materials Research Letters paper on heterostructured steel architected by additive manufacturing was featured by ShanghaiTech SCA News.',
    links: [
      { label: 'SCA News (WeChat)', url: 'https://mp.weixin.qq.com/s/ngf21uauQ9MdS6rgkBC9UQ' },
    ],
  },
  {
    date: '2020.10',
    text: 'Our Nature Communications work on strain localisation and failure at twin-boundary complexions in nickel-based superalloys was featured by ShanghaiTech News.',
    links: [
      { label: 'ShanghaiTech News', url: 'https://www.shanghaitech.edu.cn/2020/1001/c1001a56157/page.htm' },
    ],
  },
];

export const talksIntro =
  'Since 2020, Dr. Zhang has delivered 20 invited talks at renowned domestic and international academic conferences and served as Session Chair 5 times.';

export const internationalTalks: string[] = [
  'Z.B. Zhang, On the role of coherent and incoherent twin boundaries in strain localization and fatigue behavior of nickel-based superalloys, The 20th International Conference on Strength of Materials (Invited talk, Session Chair), June 2–6, 2025, Kyoto, Japan.',
  'Z.B. Zhang, Multiscale materials architecting by additive manufacturing: novel structures and mechanical properties, 44th Risø International Symposium on Materials Science (Invited talk), September 2–6, 2024, Roskilde, Denmark.',
  'Z.B. Zhang, Heterostructured alloys architected by additive manufacturing: novel structures and mechanical properties, The 2nd International Conference on Heterostructured Materials (Invited talk, Session Chair), December 3–6, 2024, Chongqing, China.',
  'Z.B. Zhang, Tuning the microstructure of titanium alloy by manipulating the in-situ grain growth during directed energy deposition, The 8th International Conference on Recrystallization and Grain Growth (Invited talk, Session Chair), May 15–19, 2023, Chongqing, China / Copenhagen, Denmark.',
  'Z.B. Zhang, Precipitate mediated plasticity in Ni-based superalloys: mechanistic origin and practical strategy, 42nd Risø International Symposium on Materials Science (Invited talk), September 5–9, 2022, Suzhou, China / Roskilde, Denmark.',
];

export const domesticTalks: string[] = [
  'Z.B. Zhang, Effect of grain boundary character on environmental fracture of Ni-based superalloys, The 20th National Youth Symposium on Materials Science and Technology (第二十届全国青年材料科学技术研讨会), October 31 – November 2, 2025, Nanjing, China.',
  'Z.B. Zhang, Multiscale microstructure and mechanical characterization of additively manufactured heterostructured alloys, 2025 Annual Academic Conference of the Chinese Electron Microscopy Society (2025年全国电子显微学学术年会), September 26–30, 2025, Wuhan, China.',
  'Z.B. Zhang, In-situ HRDIC study of micro-strain localization and fracture in metallic materials, 2024 Annual Academic Conference of the Chinese Electron Microscopy Society (2024年全国电子显微学学术年会), October 17–20, 2024, Dongguan, China.',
  'Z.B. Zhang, Design and architecting of multifunctional heterostructured materials via additive manufacturing, 2024 Chinese Materials Conference (2024年中国材料大会), July 7–10, 2024, Shenzhen, China.',
  'Z.B. Zhang, Mechanisms of the effect of twin boundaries on the performance of superalloys, 2024 Innovation Forum on Micro/Nano Materials and Surfaces & Interfaces (2024年微纳材料与表界面创新论坛), August 12–15, 2024, Lanzhou, China.',
  'Z.B. Zhang, Grain morphology regulation and mechanical behavior of additively manufactured high-strength titanium alloys, 2024 Chinese Conference on Structural Materials (2024年中国结构材料大会), May 24–26, 2024, Changsha, China.',
  'Z.B. Zhang, Multiscale in-situ study of environmental fracture of Ni-based superalloys, 2023 Chinese Materials Conference (2023年中国材料大会), July 7–10, 2023, Shenzhen, China.',
  'Z.B. Zhang, Application of SEM-based in-situ μ-DIC in fracture mechanism studies of superalloys and titanium alloys, 2022 Technical Forum of the CAS Electron Microscopy Technology Alliance (2022年度中科院电镜技术联盟技术论坛), November 22, 2022, Shenyang, China.',
  'Z.B. Zhang, Application of in-situ high-resolution DIC/EBSD techniques in the study of deformation and fracture behavior of alloys, Oxford Instruments Workshop on In-situ Materials Analysis Solutions (牛津仪器材料原位分析解决方案研讨会), October 26, 2022, Shanghai, China.',
  'Z.B. Zhang, Strain localization mechanism and its regulation in additively manufactured Ni-based superalloys, The 8th National Conference on Preparation, Processing and Application of Nonferrous Structural Materials (第八届全国有色金属结构材料制备加工及应用技术会议), August 5–7, 2022, Nanjing, China.',
  'Z.B. Zhang, Strain localization and hydrogen embrittlement mechanisms of Ni-based superalloys, The 7th National Conference on Preparation, Processing and Application of Nonferrous Structural Materials (第七届全国有色金属结构材料制备加工及应用技术会议), April 16–18, 2021, Zhenjiang, China.',
  'Z.B. Zhang, Mechanisms of the effect of hydrogen on the plasticity and fracture behavior of titanium alloys, The 8th Youth Forum on Materials and Structural Strength (第八届材料与结构强度青年论坛), June 26–27, 2021, Wuxi, China.',
  'Z.B. Zhang, Strain localization and hydrogen embrittlement behavior of titanium alloys, The 2nd National Summit Forum on Technological Innovation and Application of Light Alloys (第二届全国轻合金材料技术创新与应用高峰论坛), May 21–23, 2021, Changsha, China.',
  'Z.B. Zhang, Hydrogen embrittlement mechanism and property regulation of Ni-based superalloys, The 6th National Conference on Preparation, Processing and Application of Nonferrous Structural Materials (第六届全国有色金属结构材料制备加工及应用技术会议), 2020, Changsha, China.',
  'Z.B. Zhang, Multiscale study of strain localization and fracture mechanisms of Ni-based superalloys, The 8th Youth Forum on Materials and Structural Strength (第八届材料与结构强度青年论坛), 2020, Xi\'an, China.',
];

export const groupPhotos = [
  { src: 'images/group-1.jpg', alt: 'Group photo of the Zhang Research Group (M³ Lab)' },
  { src: 'images/group-2.jpg', alt: 'Group photo of the Zhang Research Group (M³ Lab)' },
];

export const journals = [
  'Nature Communications',
  'Acta Materialia',
  'Additive Manufacturing',
  'Materials Research Letters',
  'Journal of Materials Science & Technology',
  'Materials Science and Engineering: A',
  'Journal of Alloys and Compounds',
  'Materials & Design',
  'Journal of Materials Research and Technology',
  'Materials Characterization',
  'Journal of Materials Engineering and Performance',
  'Materialia',
  'IOP Conference Series: Materials Science and Engineering',
  'Proceedings of the 44th Risø International Symposium on Materials Science',
  'Science Advances',
  'International Journal of Mechanical Sciences',
  'International Journal of Plasticity',
  'Foundry',
  'Scripta Materialia',
  'Corrosion Science',
  'Metallurgical and Materials Transactions A',
  'Philosophical Magazine',
  'Journal of Materials Science',
  'Proceedings of the 13th International Symposium on Superalloys',
  'Materials Science and Technology',
  'Journal of Nuclear Materials',
  'Journal of the American Ceramic Society',
  'Journal of the Mechanical Behavior of Biomedical Materials',
];

export interface Member {
  name: string;
  nameZh: string;
  role: string;
  photo?: string;
  cohort?: string;
  school?: string;
  direction?: string;
  note?: string;
}

export const pi = {
  name: 'Dr. Zhenbo Zhang',
  nameZh: '张振波',
  title: 'Assistant Professor / Principal Investigator',
  affiliation: 'Center for Adaptive System Engineering, ShanghaiTech University',
  education: [
    'Ph.D. in Materials Science, Technical University of Denmark (DTU) / Risø National Laboratory, 2014',
    'Postdoctoral Research Associate, University of Manchester, UK, 2014–2019',
    'M.S. in Materials Science, Institute of Metal Research, Chinese Academy of Sciences, 2011',
    'B.S. in Materials Science and Engineering, Chongqing University, 2008',
  ],
};

export const staff: Member[] = [
  { name: 'Dawei Zhang', nameZh: '张大威', role: 'Research Assistant Professor', photo: 'zhang-dawei', school: 'PhD, RWTH Aachen University', direction: 'Mechanical modeling & simulation' },
];

export const phdStudents: Member[] = [
  { name: 'Hansen Xu', nameZh: '徐瀚森', role: 'PhD candidate', photo: 'xu-hansen', cohort: '2023', school: 'ShanghaiTech University', direction: 'Dual-phase cellular structure design and fatigue performance' },
  { name: 'Jinjin Yue', nameZh: '岳津津', role: 'PhD candidate', photo: 'yue-jinjin', cohort: '2024', school: 'Northeastern University', direction: 'Gradient multifunctional alloy architecting and additive manufacturing' },
  { name: 'Zheyu Yang', nameZh: '杨哲宇', role: 'PhD candidate', photo: 'yang-zheyu', cohort: '2025', school: 'University of Science and Technology Beijing', direction: 'Thermal fatigue mechanisms of Ni-based superalloys' },
  { name: 'Zhuoying Li', nameZh: '李卓颖', role: 'PhD candidate', photo: 'li-zhuoying', cohort: '2026', school: 'Shanghai University', direction: 'Multiscale mechanics of high-strength & toughness titanium alloys' },
  { name: 'Xinyu Yang', nameZh: '杨鑫宇', role: 'PhD candidate', photo: 'yang-xinyu', cohort: '2026', school: 'Northeastern University', direction: 'Ultrahigh-strength titanium alloy design by additive manufacturing' },
];

export const masterStudents: Member[] = [
  { name: 'Mingxiang Li', nameZh: '李明祥', role: 'Master candidate', photo: 'li-mingxiang', cohort: '2025', school: 'Northwestern Polytechnical University', direction: 'Design and AM of novel dual-phase high-strength steels' },
  { name: 'Zhaozhao Dong', nameZh: '董朝朝', role: 'Master candidate', photo: 'dong-zhaozhao', cohort: '2025', school: 'Jiangsu University', direction: 'Hydrogen embrittlement of titanium alloys' },
  { name: 'Xiao Liang', nameZh: '梁笑', role: 'Master candidate', photo: 'liang-xiao', cohort: '2026', school: 'Jilin University', direction: 'TBD' },
  { name: 'Libang Lu', nameZh: '陆立邦', role: 'Master candidate', photo: 'lu-libang', cohort: '2026', school: 'Sichuan University', direction: 'TBD' },
];

export interface Alumnus {
  name: string;
  nameZh: string;
  degree: string;
  year: string;
  destination: string;
  photo?: string;
}

export const alumni: Alumnus[] = [
  { name: 'Jiaqiang Chang', nameZh: '常家强', degree: 'PhD', year: '2026', destination: 'Assistant Research Professor, Suzhou National Laboratory · Outstanding Graduate of ShanghaiTech University', photo: 'chang-jiaqiang' },
  { name: 'Yu Xuan', nameZh: '宣宇', degree: 'PhD', year: '2025', destination: 'Researcher, No. 52 Research Institute (Ningbo), NORINCO', photo: 'xuan-yu' },
  { name: 'Guanyang Su', nameZh: '苏冠阳', degree: 'Master', year: '2024', destination: 'PhD candidate, Purdue University, USA', photo: 'su-guanyang' },
  { name: 'Xiaochen Li', nameZh: '李晓晨', degree: 'Master', year: '2023', destination: 'PhD candidate, Zhejiang University', photo: 'li-xiaochen' },
  { name: 'Yu Zhang', nameZh: '张宇', degree: 'Master', year: '2023', destination: 'PhD candidate, Shanghai Jiao Tong University', photo: 'zhang-yu' },
  { name: 'Ziliang Huang', nameZh: '黄子良', degree: 'Master', year: '2022', destination: 'PhD candidate, University of Science and Technology of China', photo: 'huang-ziliang' },
  { name: 'Yixin Li', nameZh: '黎毅馨', degree: 'Master', year: '2025', destination: 'Shenzhen Institute of Advanced Technology, CAS', photo: 'li-yixin' },
  { name: 'Puwei Dang', nameZh: '党普威', degree: 'Master', year: '2026', destination: 'ChangXin Memory Technologies', photo: 'dang-puwei' },
  { name: 'Jie Jiang', nameZh: '蒋杰', degree: 'Master', year: '2026', destination: 'Shanghai Huali Microelectronics', photo: 'jiang-jie' },
  { name: 'Wenhu Lin', nameZh: '林文虎', degree: 'Research Assistant Professor', year: '2020–2023', destination: 'NIO', photo: 'lin-wenhu' },
  { name: 'Zhaoxuan Wu', nameZh: '吴兆轩', degree: 'Postdoctoral Researcher', year: '2023–2025', destination: 'BYD', photo: 'wu-zhaoxuan' },
];

export interface Course {
  code: string;
  name: string;
  level: string;
  credits: string;
}

export const courses: Course[] = [
  { code: 'MSE1325', name: 'Fundamentals of Materials Science II: Phases and Microstructures', level: 'Undergraduate compulsory', credits: '3' },
  { code: 'MSE3001', name: 'Fundamentals of High-Temperature Structural Materials', level: 'Graduate', credits: '2' },
  { code: 'CHEM3001', name: 'Metallic Materials and Structural Design', level: 'Graduate', credits: '3' },
  { code: 'ARTS1431', name: 'Additive Manufacturing', level: 'Undergraduate', credits: '3' },
  { code: 'MECH2002', name: 'Applications of Advanced Materials in High-End Equipment', level: 'Graduate', credits: '2' },
  { code: 'MECH2003', name: 'Additive Manufacturing Technologies and Applications', level: 'Undergraduate & Graduate', credits: '3' },
];

export const honors = [
  { year: '2024', text: '“Elite Talent” title of the Pearl Program, Shanghai (明珠计划“菁英人才”称号)' },
  { year: '2024', text: 'Outstanding Teacher of ShanghaiTech University (上海科技大学优秀教师)' },
  { year: '2023', text: 'Outstanding Teacher of ShanghaiTech University (上海科技大学优秀教师)' },
  { year: '2020', text: 'Shanghai Overseas High-Level Talent Program (上海市海外高层次人才计划)' },
];

export interface Grant {
  zh: string;
  en: string;
  agency: string;
  period: string;
  role: string;
  amount: string;
  status: 'ongoing' | 'completed';
}

export const grants: Grant[] = [
  { zh: '孪晶界对镍基高温合金变形和断裂影响的机制研究', en: 'Mechanistic Study of the Effect of Twin Boundaries on Deformation and Fracture of Ni-based Superalloys', agency: 'Young Scientists Fund, NSFC', period: '2021.01–2023.12', role: 'PI', amount: '240 K RMB', status: 'completed' },
  { zh: '镍基高温合金热疲劳性能的多尺度表征研究', en: 'Multiscale Characterization of Thermal Fatigue Behavior of Ni-based Superalloys', agency: 'National Key R&D Program of China (Sub-project)', period: '2024.04–2027.03', role: 'PI', amount: '770 K RMB', status: 'ongoing' },
  { zh: '基于微观应变演化的选区激光熔化镍基高温合金组织调控与疲劳行为研究', en: 'Microstructure Regulation and Fatigue Behavior of Selective Laser Melted Ni-based Superalloys Based on Micro-strain Evolution', agency: 'Shanghai Natural Science Foundation, General Program', period: '2023.04–2026.03', role: 'PI', amount: '200 K RMB', status: 'completed' },
  { zh: '增材制造用高温合金粉末性能验证', en: 'Performance Validation of Superalloy Powders for Additive Manufacturing', agency: 'Key Deployment Project, Chinese Academy of Sciences', period: '2023.01–2024.12', role: 'PI', amount: '1,000 K RMB', status: 'completed' },
  { zh: '高韧性钛合金强韧化机制及服役性能', en: 'Strengthening-Toughening Mechanisms and Service Performance of High-Toughness Titanium Alloys', agency: 'Key Deployment Project, Chinese Academy of Sciences', period: '2026.01–2027.12', role: 'PI', amount: '900 K RMB', status: 'ongoing' },
  { zh: 'TC4钛合金窄间隙焊接工艺研究', en: 'Narrow-Gap Welding Process of TC4 Titanium Alloy', agency: 'Industry Contract (research institute)', period: '2022.10–2023.06', role: 'PI', amount: '485 K RMB', status: 'completed' },
  { zh: 'GH4022合金选区激光熔化工艺、组织和性能研究', en: 'Selective Laser Melting Process, Microstructure and Properties of GH4022 Alloy', agency: 'Industry Contract (research institute)', period: '2024.05–2025.04', role: 'PI', amount: '420 K RMB', status: 'completed' },
  { zh: '增材制造高强钛合金组织调控与性能优化', en: 'Microstructure Regulation and Property Optimization of Additively Manufactured High-Strength Titanium Alloys', agency: 'Industry Contract (research institute)', period: '2021.09–2022.10', role: 'PI', amount: '450 K RMB', status: 'completed' },
  { zh: '高强钛合金焊接接头分析与评估', en: 'Analysis and Evaluation of Welded Joints of High-Strength Titanium Alloys', agency: 'Industry Contract (research institute)', period: '2022.05–2023.01', role: 'PI', amount: '95 K RMB', status: 'completed' },
  { zh: '层叠结构异种材料激光焊熔池流动的可视化及微观组织构筑', en: 'Visualization of Molten Pool Flow and Microstructure Architecting in Laser Welding of Laminated Dissimilar Materials', agency: 'Shanghai Sailing Program, Shanghai Science and Technology Commission', period: '2021.01–2024.12', role: 'PI', amount: '200 K RMB', status: 'completed' },
  { zh: '增材制造等轴晶高强钛合金材料及部件研制', en: 'Development of Additively Manufactured Equiaxed High-Strength Titanium Alloy Materials and Components', agency: 'National Key R&D Program of China', period: '2022.01–2025.12', role: 'Key Member', amount: '2,800 K RMB', status: 'completed' },
];

export const editorialService = [
  'Young Editorial Board Member, Materials Research Letters (CAS Q1 journal)',
  'Young Editorial Board Member, Acta Metallurgica Sinica (English Letters) (CAS Q2 journal)',
  'Guest Editor, Metals',
  'Reviewer for more than ten renowned international journals, including Acta Materialia, Additive Manufacturing, Journal of Materials Science & Technology, Corrosion Science, Scripta Materialia, Materials & Design, etc.',
];
