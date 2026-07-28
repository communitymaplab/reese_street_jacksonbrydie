var config = {
    style: 'mapbox://styles/benen/cml76u3s9003y01qo2tnl1px3/draft',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYmVuZW4iLCJhIjoiY21reDF2bGl5MDVyaTNlcG92ZDE2M2VtdiJ9.YOEuA0FYzMRDxi1hXW1U1A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    //title: 'Reese Street: Following the Jackson-Brydie family',
    //subtitle: 'Learn more about the historic Reese Street neighborhood through the eyes of one family of educators.',
    //byline: 'Created through the <a href="https://www.communitymappinglab.org" target="_blank">Community Mapping Lab</a>',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Reese Street: Following the Jackson-Brydie family, 1851-1956',
            image: 'knox.jpg',
            description: 'The Reese Street neighborhood thrived in the mid-1920s as a cultural hub for Black Athenians, serving as a center of education, business, faith, and community despite ongoing segregation and limited opportunity. Nestled just west of downtown Athens, the historic neighborhood was home to prominent educators, businesspeople, and civic leaders who helped shape the city\'s Black identity and legacy. Home to iconic institutions like Hill First Baptist Church and Athens High & Industrial School, the neighborhood cultivated a strong sense of community, resilience, and achievement. This map will explore the history of Reese Street\'s educational institutions through the lives of three generations of the Jackson-Brydie clan, a family of Black educators with deep roots in the neighborhood.<p> This map was created by Benen Chancey from UGA\'s Community Mapping Lab, with input from Hope Iglehart, Amy Andrews, Dr. Jane McPherson, Dr. Jerry Shannon, Denise Sunta, and Dr. Kayla Anderson.',
            location: {
                center: [-83.38697, 33.95821],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rsboundary',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                     layer: 'rsboundary',
                     opacity: 0.8
                }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Reese Street Neighborhood',
            //image: './assets/washington-dc.jpg',
            description: 'Reese Street is located just west of downtown Athens. Several Black educational institutions called it home, including the Knox Institute and the Reese Street School, along with other community institutions like the Hill First Baptist Church. Click the video below to explore a 360 view of the Hill First Baptist Church (must open video in new tab to use 360 degree functionality).'+
            '\n<div class="video-wrapper">' +
                '<iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/2pAwqvNC_Lg?rel=0&modestbranding=1" title="YouTube video player" frameborder="200" allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; encrypted-media" allowfullscreen></iframe>' +
                '</div>',
            location: {
                center: [-83.38339, 33.95787],
                zoom: 16.44,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'rsboundary',
                    opacity: 0.8
                },
                {
                    layer: 'knox',
                    opacity: 1
                },
                {
                    layer: 'rsschool',
                    opacity: 1
                },
                {
                    layer: 'church',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                     layer: 'rsboundary',
                     opacity: 0
                },
                {
                    layer: 'knox',
                    opacity: 0
                },
                {
                    layer: 'rsschool',
                    opacity: 0
                },
                {
                    layer: 'church',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'The Jackson-Brydie Family',
            image: 'sisters.jpg',
            description: 'The Jackson-Brydies were a family of educators who lived and worked in Reese Street over the course of about 70 years, from 1886 to around 1956. Not only did they work in Reese Street\'s educational institutions and other schools for Black students around Athens, they also owned several properties within the neighborhood. This story begins with the remarkable lives of three sisters who all became educators and landowners in Athens: Camilla, Mary, and Judia.',
            location: {
                center: [-83.38339, 33.95787],
                zoom: 16.44,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'rsboundary',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                     layer: 'rsboundary',
                     opacity: 0
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Homes on North Finley Street',
            image: '223north.jpg',
            description: 'These were the properties owned between the sisters in the neighborhood: 223 North Finley (pictured), 249 North Finley, and 193 North Finley. The sisters owned a fourth home at 101 North Finley, which was likely destroyed when Broad Street was widened in 1938.',
            location: {
                center: [-83.38327, 33.95695],
                zoom: 17.78,
                pitch: 43.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'rsboundary',
                    opacity: 0.8
                },
                {
                    layer: 'northfinley',
                    opacity: 0.2
                },
                {
                    layer: 'homes',
                    opacity: 1
                },
                {
                    layer: '101nfinley',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                     layer: 'rsboundary',
                     opacity: 0
                },
                {
                    layer: 'northfinley',
                    opacity: 0
                },
                {
                    layer: 'homes',
                    opacity: 0
                },
                {
                    layer: '101nfinley',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Camilla Jackson Brydie, 1851-1925',
            image: 'camilla.jpg',
            description: 'Camilla, the eldest of the three Jackson-Brydie sisters, was born in 1851 in the nearby neighborhood of Lickskillet. She was born into slavery, yet still learned to read and write. At the age of 17, she became a teacher at the Knox Institute in Reese Street. She walked between her home in Lickskillet and Reese Street every day, and eventually came to live in the homes that she owned with her sisters on North Finley. On her commute between her then home in Lickskillet and the Knox Institute, she likely would have passed Hot Corner, Athens\'s Black business district, highlighting the interconnectedness of Black communities in Athens. She took on an important role in Reconstruction-era Athens, serving as an educator at a hopeful time for Athens\'s Black residents.',
            location: {
                center: [-83.38359, 33.95850],
                zoom: 15.10,
                pitch: 0.5,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'ls-hc',
                opacity: 1
            },
            {
                layer: 'rsboundary',
                opacity: 0.8
            },
            {
                layer: 'commute',
                opacity: 1
            }
        ],
            onChapterExit: [{
                layer: 'ls-hc',
                opacity: 0
            },
            {
                layer: 'rsboundary',
                opacity: 0
            },
            {
                layer: 'commute',
                opacity: 0
            }
        ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Knox Institute',
            image: 'knox2.jpg',
            description: 'The Knox Institute and Industrial School was founded in 1868 by the Freedmen\'s Bureau at the corner of Reese and Pope streets. Later on, the Knox Institute building would become managed by Athens High and Industrial School (formerly the Reese Street School), which was the first 4-year accredited high school for Black students in the state of Georgia.',
            location: {
                center: [-83.38446, 33.95681],
                zoom: 20.11,
                pitch: 71.63,
                bearing: -73.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'rsboundary',
                    opacity: 0.8
                },
                {
                    layer: 'knoxbldg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                     layer: 'rsboundary',
                     opacity: 0
                },
                {
                    layer: 'knoxbldg',
                    opacity: 0
                }
            ]
        },
          {
            id: 'seventh-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Mary Jackson McCrorey, 1867-1944',
            image: 'mary.jpg',
            description: 'Born in 1867, Mary was the first of the three sisters to be born free. She started teaching in rural schoolhouses around Athens in 1880, at the age of 13 or 14. She would later become the first Black public school principal in Athens.',
            location: {
                center: [-83.37834, 33.96041],
                zoom: 13,
                pitch: 1,
                bearing: -14.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Mary\'s Education at Atlanta University',
            //image: '',
            description: 'Mary was also the first in the family to graduate college. She graduated from Atlanta University (now called Clark Atlanta University) in 1886 and, that same year, scored the highest on the teaching exam -- out of both Black AND white test-takers!',
            location: {
                center: [-84.41205, 33.74795],
                zoom: 18.95,
                pitch: 79.27,
                bearing: -100.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Mary\'s Reese Street Real Estate Purchases',
            image: 'nfinleyhouse.png',
            description: 'Mary was the first family member to purchase land on North Finley Street, including those at 223 and 101 North Finley. Camilla and her husband Eugene, a barber whom she married in the early 1870s, also moved into the house at 101 North Finley, tying the family even more closely to the Reese Street neighborhood. Judia lived with the Brydies there where she was teaching at the West Broad School. ',
            location: {
            center: [-83.38340, 33.95716],
                zoom: 17.79,
                pitch: 0,
                bearing: 9.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'rsboundary',
                opacity: 0.8
            },
            {
                layer: '101nfinley',
                opacity: 1
            },
            {
                layer: 'homes',
                opacity: 1
            }
        ],
            onChapterExit: [
                {
                    layer: 'rsboundary',
                    opacity: 0
                },
                {
                    layer: '101nfinley',
                    opacity: 0
                },
                {
                    layer: 'homes',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Judia Jackson Harris, 1870-1960',
            image: 'judia.jpg',
            description: 'Judia, the youngest of the three sisters, was born in 1870. She went on to attend several educational institutions in her pursuit to become an educator like her sisters. After graduating from the teacher training course at Atlanta University in 1894, she came back to Athens and taught at the East Athens and West Broad schools, eventually becoming principal of the East Athens school in 1902.',
            location: {
                center: [-82.65207, 37.62059],
                zoom: 4.91,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'jjeducation',
                opacity: 1
                }
            ],
            onChapterExit: [
                {layer: 'jjeducation',
                opacity: 0
                }
            ]
        },
        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'J.J. Harris\'s Model Schools',
            image: 'modelschool.png',
            description: 'Around this same time, Judia began working with families in rural Clarke County. In 1903, she left Athens City Schools to establish a Model and Training School on Danielsville Road. Garnering the attention and support of national leaders like W.E.B. DuBois and George Washington Carver, her school combined teacher training with a curriculum in music, theater, literature, blacksmithing, and sewing, altogether providing educational opportunities for underserved, rural Black communities.',
            location: {
                center: [-83.34037, 34.01912],
                zoom: 16.73,
                pitch: 50,
                bearing: -10.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Samuel Harris, 1875-1935',
            image: 'samuelharris.jpg',
            description: 'In 1912, Judia married Samuel F. Harris, who was himself a school principal. Under Samuel’s direction, the Athens Board of Education opened a new school, the Reese Street School, in the neighborhood in 1914. The school extended public education for Black students up through the 10th grade, and would later evolve into the Athens High & Industrial School, the first accredited 4-year high school for Black students in the state of Georgia.',
            location: {
                center: [-83.38400, 33.95737],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'rsschool',
                    opacity: 1
                }],
            onChapterExit: [{
                layer:'rsschool',
                opacity: 0
            }]
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Camilla\'s Daughters',
            //image: 'judia.jpg',
            description: 'Camilla had seven children with her husband Eugene, and several went on to become educators as well. Carolyn, Georgia, Mamie, and Mattie all followed in their family’s footsteps to become teachers, with Mamie and Mattie eventually working at the Reese Street School. Carolyn also entered into a real estate contract to purchase the house at 193 N Finley street, which was just across the street from the house her family occupied.',
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Camilla\'s Granddaughter: Ella Gilbert Brown',
            //image: 'judia.jpg',
            description: 'Camilla soon moved her family across the street into the house at 193 N Finley, including, by then, her granddaughter Ella Gilbert (who was Georgia’s daughter). Ella finished school in 1913, studying under Samuel Harris, her great-uncle, and started as a teacher with Athens Public Schools in 1920. She initially taught sixth grade at the Knox Institute, but following its closure in 1928 and some institutional restructuring, she became principal of the Reese Street School.',
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Changes in the Family',
            image: '249house.png',
            description: 'In 1925, Camilla passed away unexpectedly, and many members of the Jackson-Brydie clan moved away from Reese Street and Athens, leaving only Judia, Georgia, and her daughter, Ella, in the vicinity. Though the family’s physical presence in the area had diminished, their landholdings increased. Georgia bought the house at 249 N Finley (pictured above) and moved there with Ella, where they would remain for many years.',
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'School Closures',
            image: 'rsschool.png',
            description: 'With the 1954 decision in Brown v. Board of Education bringing about school desegregation and the consolidation of Athens City and County Schools into one system, Athens High & Industrial was reloaded outside of Reese Street. The Athens School Board shuttered the Reese Street School soon thereafter in 1955. Then, in 1956, Judia’s model school on Danielsville Road also closed. These closures were a monumental loss for the neighborhood and for Athens’ Black community more broadly. These institutions were tied to Reese Street’s identity and were also important assets for Black Athenians. Ella would finish out her career not at the Reese Street School where she had invested decades of care and support, but at a different school in another part of Athens.',
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventeeth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'A Different Trajectory for Reese Street?',
            //image: 'judia.jpg',
            description: 'It is ironic that the forces of desegregation and racial equality would also lead to the dismantling of Black educational institutions. This fact raises the question of how Reese Street might have evolved differently had there been an investment made into these schools, rather than having them closed. What could have been if the white school board had poured more resources into the Reese Street School or Athens High & Industrial? What new programs could have flourished? What could they have become?',
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Preserving Reese Street\'s Character',
            //image: 'judia.jpg',
            description: 'The Reese Street building still stands today, as do the Jackson-Brydie family\’s houses along North Finley Street. The video below provides a 360 view of their homes. Open it in YouTube, and you can use your mouse or tilt your phone to change your view.' +
            '\n<div class="video-wrapper" style="position: relative; z-index: 9999; pointer-events: auto;">' +
                '<iframe loading="lazy" width="100%" height="500px" src="https://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="pointer-events: auto;"></iframe>' +
                '</div>',
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Credits',
            //image: 'judia.jpg',
            description: 'This map was created by the Community Mapping Lab, in collaboration with Historic Athens and other friends of the Reese Neighborhood. Benen Chancey was responsible for creating the map, and its content is based on Dr. Jane McPherson\'s article, "A Call to Remember", published <a href="https://complexcloth.org/wp-content/uploads/2025/07/McPherson-2025-A-Call-to-Remember-1.pdf" target="_blank">in the 2025 issue of Athens Historian</a>. Hope Iglehart, Amy Andrews, Dr. Jane McPherson, Dr. Jerry Shannon, Denise Sunta, and Dr. Kayla Anderson also advised on this project.', 
            location: {
                center: [-83.38480, 33.95750],
                zoom: 16.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
