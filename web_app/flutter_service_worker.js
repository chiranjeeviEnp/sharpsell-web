'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cf8b05506c81dcd40c2e2ea0864ba60",
"index.html": "554b5d445b0b6b8ff9359fe1e2260eb6",
"/": "554b5d445b0b6b8ff9359fe1e2260eb6",
"main.dart.js": "71713941f9da94135e92b5590e095877",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "abe5911756c78d17a8b67a113f4a62b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "760958dbc0b47040d528c0c3747fddac",
"assets/AssetManifest.json": "648bf930007a90a5609725871dc84ab2",
"assets/NOTICES": "77fe4b076939075cc1ab1904673e6d8f",
"assets/FontManifest.json": "1d1fd57cd6da2423eb905e09279c8c97",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/sharpsell/assets/images/ic_refresh_new.svg": "f4f66d99aa6965cda5d06a53fd3ce33d",
"assets/packages/sharpsell/assets/images/ic_phone.svg": "9c794e708bc657ff1a87c83492869fbf",
"assets/packages/sharpsell/assets/images/ic_delete.svg": "15d65cd7d2a816a98c5ac1a509edb784",
"assets/packages/sharpsell/assets/images/smartsell_no_content_added.svg": "a83101c83d9914bc5df345a00e83bb8d",
"assets/packages/sharpsell/assets/images/ic_quiz_coin.svg": "cf8f0d07413d6e1f15fcc9ff0f492624",
"assets/packages/sharpsell/assets/images/ic_fullscreen.svg": "c72515d050c6aa1c555777da9e8299b2",
"assets/packages/sharpsell/assets/images/ic_earned_certificate.svg": "40a13d32d26418f3dd3cf36361d3a53a",
"assets/packages/sharpsell/assets/images/ic_launchpad_play.svg": "8526a14ed1a4897c457994779761d567",
"assets/packages/sharpsell/assets/images/ic_camera.svg": "3d31cf865ebc2ad0dabeee6a6748550a",
"assets/packages/sharpsell/assets/images/ic_download_complete.svg": "cc8567a8b0e421c7028b15f6192f8eee",
"assets/packages/sharpsell/assets/images/ic_close.svg": "54f759eebadccff13a6f26ea0d664846",
"assets/packages/sharpsell/assets/images/ic_completed.svg": "20a2331a18f2f715d2a84a38335328b9",
"assets/packages/sharpsell/assets/images/ic_pdf_big.svg": "4dab68a53fa3f9dd247ade6ecd81f40b",
"assets/packages/sharpsell/assets/images/ic_whatsapp.png": "0f5872a1147a1a30a5e82dc9da66eb1d",
"assets/packages/sharpsell/assets/images/ic_certificate.svg": "05a6bb53d915d07a9d437168e5666bfb",
"assets/packages/sharpsell/assets/images/ic_signature_details.svg": "07a930ec7239a3f471d105f0b4f05721",
"assets/packages/sharpsell/assets/images/ss_ic_insert_photo_black_24dp.png": "506290573a0267ef4a905bc49feeb8ff",
"assets/packages/sharpsell/assets/images/ic_padlock.svg": "27abc22250f4fc6301543db648072918",
"assets/packages/sharpsell/assets/images/ic_oh_snap.svg": "8f61595cd6480d727b314de3bce0d229",
"assets/packages/sharpsell/assets/images/ic_translation.svg": "7276eabe141525f1b02d3f87ab3e32e9",
"assets/packages/sharpsell/assets/images/ic_profile_pic_default.svg": "a8065ffcca87efb6c07782628dde96b1",
"assets/packages/sharpsell/assets/images/ic_drop_down_arrow.svg": "5f6d7384704fd1e4241ecff9b2700915",
"assets/packages/sharpsell/assets/images/smartsell_no_search_result.svg": "0c98b50feb8d02672b7f81c8926d76eb",
"assets/packages/sharpsell/assets/images/ic_launchpad_weblink.svg": "857be3d98e2c9e7489418cfe440706c7",
"assets/packages/sharpsell/assets/images/ic_gallery.svg": "738fbe1be01dec40a36357c4a24f7b6c",
"assets/packages/sharpsell/assets/images/ic_launchpad_pause.svg": "ed4dc56f2e13da65178b37bb4447593f",
"assets/packages/sharpsell/assets/images/ic_edit.png": "afd07627f6dd68e22cf5a802c1f88878",
"assets/packages/sharpsell/assets/images/ic_sync.svg": "b480a995315e1fe95bd2febafbf790eb",
"assets/packages/sharpsell/assets/images/ic_failed.svg": "2cdf6495fdb0f5d0bbc31c4c335bdc8e",
"assets/packages/sharpsell/assets/images/ic_launchpad_share.svg": "7e27e2fdb120f7278e296ce6548c2b4a",
"assets/packages/sharpsell/assets/images/ic_warning.svg": "ff6c8873f7870f989b1fc502827e19c8",
"assets/packages/sharpsell/assets/images/ic_email.svg": "219c417d995de496531c83396eef6db6",
"assets/packages/sharpsell/assets/images/ic_privacy_policy.svg": "1fcbeca51eb529124159a1cfe669b3ce",
"assets/packages/sharpsell/assets/images/ic_caution.png": "e695dd657f4038f263617748842b6be0",
"assets/packages/sharpsell/assets/images/ic_verified.png": "ad48f77074ff4920c99789b6b265b72c",
"assets/packages/sharpsell/assets/images/ic_quick_link_1.png": "cff7af760d6f5a0595bd9419577bd1d9",
"assets/packages/sharpsell/assets/images/ic_play.svg": "9e1b55a937be0857be8bfb08590cb198",
"assets/packages/sharpsell/assets/images/ic_back.svg": "eb62945f7bb978589fd1a67dccf4acf9",
"assets/packages/sharpsell/assets/images/ic_download.svg": "a6c2d67f25bd7e69cb328e32fc4df5dd",
"assets/packages/sharpsell/assets/images/ic_quick_link_2.png": "7e04dd908adc82f96cfc46b1564b6d6b",
"assets/packages/sharpsell/assets/images/ic_quick_link_3.png": "0ab98591b8f2e5a7112c439cc9d9f1c2",
"assets/packages/sharpsell/assets/images/ss_content_placeholder.png": "f43a7da88e6c276e5b02d884a650aa7f",
"assets/packages/sharpsell/assets/images/smartsell_no_card_added.svg": "72897c19a0d89062f2ccbf23bd5d8704",
"assets/packages/sharpsell/assets/images/ic_next.svg": "c5651f047a2ff19d342b552180816fe4",
"assets/packages/sharpsell/assets/images/ic_launchpad_close.svg": "994feed64df0879d88351e3ecc682ccb",
"assets/packages/sharpsell/assets/images/ic_star.svg": "e45b9b6775a04946177244239dffaa07",
"assets/packages/sharpsell/assets/images/ic_logout.svg": "1ba2e0f63c79d937ef11cfda47b94688",
"assets/packages/sharpsell/assets/video_challenge/images/vc_category_placeholder.svg": "7c3f2ddac662fd08e356aa88fe9d857f",
"assets/packages/sharpsell/assets/video_challenge/images/vc_time_left.svg": "b88feff090b163144dd45d4d379457e6",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_half_yellow.svg": "7b9449aada698a7115fea272d5fb2727",
"assets/packages/sharpsell/assets/video_challenge/images/uploadStatus_bg.png": "534a092cd313aefe3c70044db712a3fa",
"assets/packages/sharpsell/assets/video_challenge/images/climbing.png": "c3d80c618bff10acd2497826b5a751ea",
"assets/packages/sharpsell/assets/video_challenge/images/upload_success.png": "8feb737ecee1be5151ba84a9cb7176bf",
"assets/packages/sharpsell/assets/video_challenge/images/group.png": "5f302d86842bdea7c497edee2a050b02",
"assets/packages/sharpsell/assets/video_challenge/images/talk.png": "7e6169fa20e9b5126677772a9288d7a0",
"assets/packages/sharpsell/assets/video_challenge/images/vc_refresh.svg": "3562184f84dddfa445b8ab422990f5e3",
"assets/packages/sharpsell/assets/video_challenge/images/vc_ic_hourglass.svg": "eed7cee7b7de71e927ce3ae7c9fb6667",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_half_grey.svg": "4fba04f00e30e62900106ff041ace8ab",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_full_yellow.svg": "029ec3466364740cb3fbb28126a88e83",
"assets/packages/sharpsell/assets/video_challenge/images/ic_quotes.png": "2d41d18f2e1de90ee0e8b13fed0d7296",
"assets/packages/sharpsell/assets/video_challenge/images/ic_small_camera.svg": "d15ff8b7eb6c3470df55b6c126f782a4",
"assets/packages/sharpsell/assets/video_challenge/images/vc_open_videos_bird.webp": "59d87b2d6a5b60e03a5d9dcb50b58556",
"assets/packages/sharpsell/assets/video_challenge/images/timer2.png": "9af646710e0e79f10f6c103f177b90db",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_9.webp": "d3bb97dd89d359d6840a7a0bff5e9efd",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_5.webp": "868d1f42020a0bc42afde72c8e70184f",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_4.webp": "5668501c6f53686600419cd75e05f4f8",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_8.webp": "4842239d772689b40025fac028236800",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_3.webp": "e927951b375ea874b79bd07b04e963ef",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_2.webp": "b8b6452d2cbe4dd4f4010e132e05291a",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_1.webp": "ee6f9bce17fddcf3452b3ece3eaebb6b",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_7.webp": "816462a92e007091923be062edea7ab6",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_6.webp": "781e72d1688ecb0c4c2a597f99fc14b4",
"assets/packages/sharpsell/assets/video_challenge/images/information.png": "4356f4d14e809c27007c35c7aba98cfd",
"assets/packages/sharpsell/assets/video_challenge/images/queue.png": "8c62cef064f88d1acc4cbb17e005f332",
"assets/packages/sharpsell/assets/video_challenge/images/meter.png": "35e78eae8f40df3db76b6112d76d1fa2",
"assets/packages/sharpsell/assets/video_challenge/images/timer.png": "7f5c725ba13a5317d1ebd701d8c4615b",
"assets/packages/sharpsell/assets/video_challenge/images/ic_caution.svg": "07f04f50b2d562ebee95490e291f6253",
"assets/packages/sharpsell/assets/video_challenge/images/delete.png": "ead3c5f888b8362dba3a1263dc9d4cf1",
"assets/packages/sharpsell/assets/video_challenge/images/vc_my_videos_bird.webp": "02ea1966c65b448d9189fdfb39e01aa8",
"assets/packages/sharpsell/assets/video_challenge/images/upload_failed.png": "b1c05e6eda5745db54e211a4ebb73d49",
"assets/packages/sharpsell/assets/video_challenge/images/expired_challenge_banners/vc_expired_challenge_banner_4.webp": "06ece4811e71d86519b9bc2fc515ad89",
"assets/packages/sharpsell/assets/video_challenge/images/expired_challenge_banners/vc_expired_challenge_banner_5.webp": "9520010a61fdace24e87e5dff9c34f94",
"assets/packages/sharpsell/assets/video_challenge/images/expired_challenge_banners/vc_expired_challenge_banner_2.webp": "1d00a99b42a69a0b19586f65be99524b",
"assets/packages/sharpsell/assets/video_challenge/images/expired_challenge_banners/vc_expired_challenge_banner_3.webp": "c3290f8f3304533758aeac4687c06f37",
"assets/packages/sharpsell/assets/video_challenge/images/expired_challenge_banners/vc_expired_challenge_banner_1.webp": "a52be567c074cbe5429ddfabdba5a44e",
"assets/packages/sharpsell/assets/video_challenge/images/expired_challenge_banners/vc_expired_challenge_banner_6.webp": "dd6f90d86ba2944cb9d15c4f69ded6c1",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_empty_grey.svg": "dbdd381b0c5014fd90ee9364b928ef31",
"assets/packages/sharpsell/assets/video_challenge/images/vc_expired_bird.webp": "7d4881216d32212b78ccf816fea6d774",
"assets/packages/sharpsell/assets/video_challenge/images/vc_ic_camera_rotate.svg": "ba278473ea89aff847b57d1c9cfe2639",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_full_grey.svg": "5795df6ffa0a9fbdd69fa31d56fcfa3f",
"assets/packages/sharpsell/assets/video_challenge/images/balloons.png": "2af5fa4c5a1ecf6e9e232bd20f69e293",
"assets/packages/sharpsell/assets/video_challenge/images/lamp.png": "94abad3bd6101b24ff61ba858c3a271e",
"assets/packages/sharpsell/assets/video_challenge/images/ic_closed_quotes.png": "471382fec0c564b5e03622a92ba342dd",
"assets/packages/sharpsell/assets/video_challenge/images/vc_video_card_bg_1.webp": "f4bc76c8e70b41e7f8338d5e7105d58f",
"assets/packages/sharpsell/assets/video_challenge/videos/SampleVideo.mp4": "cbd3a4d6d267026a0e80fb35d6ece07a",
"assets/packages/sharpsell/assets/timer_challenge/icons/no_content_added_2.svg": "2fb23fafcf174dd3461585097915d6d4",
"assets/packages/sharpsell/assets/timer_challenge/icons/no_content_added.svg": "72897c19a0d89062f2ccbf23bd5d8704",
"assets/packages/sharpsell/assets/timer_challenge/icons/fuel.png": "4ece7af09d482aacbf00ae1bd638a53f",
"assets/packages/sharpsell/assets/timer_challenge/icons/questions.png": "bd50996064d023626cb67719232e870d",
"assets/packages/sharpsell/assets/timer_challenge/icons/error-404.svg": "fda7df176131fdbbb3a59e5a94d0c2e1",
"assets/packages/sharpsell/assets/timer_challenge/icons/calendar.png": "de5596b74a67504b9586ca3eaa90a574",
"assets/packages/sharpsell/assets/timer_challenge/icons/close-button.png": "4237b68823ddd23ca021780887f57fa0",
"assets/packages/sharpsell/assets/timer_challenge/icons/clock.png": "bf18221aec4826b2e821680beb5cdf51",
"assets/packages/sharpsell/assets/timer_challenge/icons/delete.png": "5ba429349ad0f3f6c3d02f1400fd282c",
"assets/packages/sharpsell/assets/timer_challenge/icons/coin.png": "0d64d169588ebbb70e5d66cc7b2f6820",
"assets/packages/sharpsell/assets/timer_challenge/icons/close_icon.png": "cd658229527ed965ac7a60973ef89d2d",
"assets/packages/sharpsell/assets/timer_challenge/icons/no_content.svg": "22f97317d55c9c7b448fcccaf44ba946",
"assets/packages/sharpsell/assets/timer_challenge/icons/duration.png": "9fd04bb7426ba77ba3c304a11c0bc52b",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_three.riv": "a998d02bd2e85e7ef838e3f1b24f3ae7",
"assets/packages/sharpsell/assets/timer_challenge/animations/rocket_zoom_in.riv": "09432a333c0bf7e1bfd3f80e667a1bae",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_four.riv": "42b8c21551b6fef32dcf584183f5d64c",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_two.riv": "6caa5a2d4be83e26b1dde1230fc513c7",
"assets/packages/sharpsell/assets/timer_challenge/animations/astronout.riv": "f59ff182e5c108b1afc0f32770c1101f",
"assets/packages/sharpsell/assets/timer_challenge/animations/Bg_Loop.json": "187a35ff97f51c9ff045eccae3ec02ec",
"assets/packages/sharpsell/assets/timer_challenge/animations/astronout2.riv": "fc6eb0fe5f7bb0cb74086d81aa694056",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_bg.riv": "7c673cea12bc149d2e1af7aaa2165524",
"assets/packages/sharpsell/assets/timer_challenge/animations/rocket_hover.riv": "48f36aeb4b6b64f90ff28ec3e520caed",
"assets/packages/sharpsell/assets/leadgen/images/ic_phone.svg": "fbea0c8e73b1033a7d84d28197a0d5db",
"assets/packages/sharpsell/assets/leadgen/images/ic_share.svg": "6e5d6b1135317a149ba1932935ad93bd",
"assets/packages/sharpsell/assets/leadgen/images/ic_back_arrow.svg": "f1abfc9afde0328b07bfcd645c249d23",
"assets/packages/sharpsell/assets/leadgen/images/ic_continue_subtopic_arrow.svg": "0e604ff01e1278e0683c5bec51a2152a",
"assets/packages/sharpsell/assets/leadgen/images/ic_profile.svg": "51952d1cd140cd4f5a7ddfe120f4a0bd",
"assets/packages/sharpsell/assets/leadgen/images/ic_left_arrow.png": "1eaebe6edae8bf6eea1d4c90fd7fc1c0",
"assets/packages/sharpsell/assets/leadgen/images/ic_speaker_new.svg": "36c43a3ef374c9bac6b626e2025fbd14",
"assets/packages/sharpsell/assets/leadgen/images/ic_linkedin.png": "09571b2e203d364bbec93e8548b438f5",
"assets/packages/sharpsell/assets/leadgen/images/ic_whatsapp.svg": "287c71405c7d83feb7aaca5bcb298346",
"assets/packages/sharpsell/assets/leadgen/images/ic_contact_new.png": "e0106106720b6cb39a6bfa1f899e5655",
"assets/packages/sharpsell/assets/leadgen/images/ic_child_future.png": "38a47ac4afadfabe296556629e1782fc",
"assets/packages/sharpsell/assets/leadgen/images/ic_back_new.png": "958b502f7de0095f2f0f88b4bf7d426c",
"assets/packages/sharpsell/assets/leadgen/images/ic_mwpa.png": "9363ee033f2dc911a5f8553caa4a4398",
"assets/packages/sharpsell/assets/leadgen/images/ic_whatsapp_2.png": "2166ccb70c4f570e59b8b37a5021c505",
"assets/packages/sharpsell/assets/leadgen/images/ic_mwpa.svg": "5d4d0fbb47da750948e2e2a139a6b69c",
"assets/packages/sharpsell/assets/leadgen/images/ic_speaker.svg": "a2e8bbbf14cf8650c3b19581ff6f2673",
"assets/packages/sharpsell/assets/leadgen/images/ic_dog.png": "1c42e20928a9f56a667130e20acbd1bb",
"assets/packages/sharpsell/assets/leadgen/images/ic_dialog.png": "67c5122e8b3e69b61776f9d1017a4779",
"assets/packages/sharpsell/assets/leadgen/images/ic_child_future.svg": "fcbf455962e4cd3066ede4b5111758e2",
"assets/packages/sharpsell/assets/leadgen/images/ic_whatsapp.png": "0c7beff5ac6b4b7cd2b777aa3359302a",
"assets/packages/sharpsell/assets/leadgen/images/ic_info.png": "733dcdb8fc03a67dd991ef4f37a910e3",
"assets/packages/sharpsell/assets/leadgen/images/ic_speaker_new.png": "bebae621c73206e11fadcc8e509407b1",
"assets/packages/sharpsell/assets/leadgen/images/ic_twitter.png": "3b41b8e41ee16b1f7908a6a5f1b89911",
"assets/packages/sharpsell/assets/leadgen/images/ic_share.png": "3fe808fcdfe098b01d3a7dd1732b0792",
"assets/packages/sharpsell/assets/leadgen/images/ic_sad.png": "6f2c7ecbc3877cc01a1abb26ce5e0c39",
"assets/packages/sharpsell/assets/leadgen/images/background_image.png": "8791828dc2f9f2267853a1e5d63d4ab4",
"assets/packages/sharpsell/assets/leadgen/images/ic_retirement.png": "a6771fa6d4026e05775e160913109c6c",
"assets/packages/sharpsell/assets/leadgen/images/ic_navigation_logo.svg": "90b89e99c4adfd46a0946c027f6f0cf1",
"assets/packages/sharpsell/assets/leadgen/images/ic_sync.svg": "f3d0ed63e7d8c232e1b28cbee8176e2f",
"assets/packages/sharpsell/assets/leadgen/images/ic_call.svg": "31bac2f9762ac0d3d759be50fb00f469",
"assets/packages/sharpsell/assets/leadgen/images/ic_content_placeholder.png": "f43a7da88e6c276e5b02d884a650aa7f",
"assets/packages/sharpsell/assets/leadgen/images/ic_placeholder.png": "f43a7da88e6c276e5b02d884a650aa7f",
"assets/packages/sharpsell/assets/leadgen/images/ic_financial_health_index.png": "382aeabb03eef2830d256948feb5831d",
"assets/packages/sharpsell/assets/leadgen/images/ic_fb.png": "2f1d4f3783aa035a1a969379c0cd0024",
"assets/packages/sharpsell/assets/leadgen/images/ic_campaign.png": "eaa8732415fa436a97099d5ee3d1a58c",
"assets/packages/sharpsell/assets/leadgen/images/ic_child_future_banner.png": "7859ef42f35789e5c6a6de0c4428cf2d",
"assets/packages/sharpsell/assets/leadgen/images/ic_navigation.svg": "90b89e99c4adfd46a0946c027f6f0cf1",
"assets/packages/sharpsell/assets/leadgen/images/ic_health_cover_planning.png": "d7131230e46e4b723bbf4602495d8bbd",
"assets/packages/sharpsell/assets/leadgen/images/ic_referral_share.svg": "b46ea9aa15c07ef8527a5e0d9567f344",
"assets/packages/sharpsell/assets/leadgen/images/ic_tools.png": "c2d4fb6186d034cb413e929dc2f7d719",
"assets/packages/sharpsell/assets/leadgen/images/ic_financial_protection.svg": "bc65bea94d8bf1f75365b362608eb6e6",
"assets/packages/sharpsell/assets/leadgen/images/ic_help.svg": "3736c41fbac5d09242a54270366fd74b",
"assets/packages/sharpsell/assets/leadgen/images/ic_help.png": "4689e494deb8562fc0e4f580dfd4d628",
"assets/packages/sharpsell/assets/leadgen/images/ic_financial_protection.png": "e41957030b32c0ec8d90b0520df4d45d",
"assets/packages/sharpsell/assets/leadgen/images/ic_health_cover_planning.svg": "2ef471e9d34342b5a82dec8c64c079b9",
"assets/packages/sharpsell/assets/leadgen/images/ic_gift_500.svg": "5752bfc66d7c6e230cab672dd10cb781",
"assets/packages/sharpsell/assets/leadgen/images/ic_financial_health_index.svg": "fa5b1cc2b7b2041d06cad927adddc912",
"assets/packages/sharpsell/assets/leadgen/images/ic_search.svg": "6fd15d20cc104d671fbef1978e4cd5c7",
"assets/packages/sharpsell/assets/leadgen/images/ic_call.png": "b811477e17a0cfb1471cc23a3b82c680",
"assets/packages/sharpsell/assets/leadgen/images/ic_sync.png": "4170e7fd08715549c4f920f673d939a3",
"assets/packages/sharpsell/assets/leadgen/images/ic_edit.svg": "894b85632691a603652d1bb65bffd757",
"assets/packages/sharpsell/assets/leadgen/images/ic_kotak_life.png": "d4f5b53b67f9a182ef1d5b762e94e7b8",
"assets/packages/sharpsell/assets/leadgen/images/ic_name.svg": "3b1d70fa47146e83c671517d66debee2",
"assets/packages/sharpsell/assets/leadgen/images/ic_retirement.svg": "bcb377c80a669e17639d73c6f1f61990",
"assets/packages/sharpsell/assets/company_specific_images/bob_bg.png": "5b81e7585ff4a50fed1d16f274a67e99",
"assets/packages/sharpsell/assets/company_specific_images/login_bg.png": "4f1b2f76f7148fe27b5f979e526adbf8",
"assets/packages/sharpsell/assets/company_specific_images/bob_logo.png": "84702fd051428a21afa05025d6a57856",
"assets/packages/sharpsell/assets/company_specific_images/splash_bg.png": "2d474360c3f6ed4d8a796cc2d4b2cf48",
"assets/packages/sharpsell/assets/exide/exide_bg.png": "5b81e7585ff4a50fed1d16f274a67e99",
"assets/packages/sharpsell/assets/fonts/primary/primary-bold.ttf": "8a743c206b0d21c667864106a9d97e89",
"assets/packages/sharpsell/assets/fonts/primary/primary-regular.ttf": "15db01c5265adb04fd5e691e5ef26009",
"assets/packages/sharpsell/assets/fonts/secondary/secondary-regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/packages/sharpsell/assets/fonts/secondary/secondary-bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/packages/sharpsell/assets/analytics_dashboard/target.svg": "597bab3c513b6312c40623996b9e2d4d",
"assets/packages/sharpsell/assets/analytics_dashboard/trend.svg": "7d36a3488095bbad3ca66b3fd711bc02",
"assets/packages/sharpsell/assets/animations/option_wrong.riv": "823a40d24d2e8cea4ca93154a09394fe",
"assets/packages/sharpsell/assets/animations/option_correct.riv": "dae393555319ab29c42183a2c4fa6a4e",
"assets/packages/sharpsell/assets/animations/pass_completed_background.riv": "4c2c54af3cbbfc5c2d2e987dcd43124e",
"assets/packages/sharpsell/assets/animations/completed_with_without_score.riv": "6a3a63fc21b25a64f7883cb547b444c3",
"assets/packages/sharpsell/assets/animations/pass_and_completed_background.riv": "43f0660556ae349ff63ac85874ba760f",
"assets/packages/sharpsell/assets/animations/pass_icon.riv": "4edd80d99f0ab58dbbf613189a6d3ed0",
"assets/packages/sharpsell/assets/configurable_icons/ic_filter.svg": "952f42b2b0790d9e8cb9d537f60ea209",
"assets/packages/sharpsell/assets/configurable_icons/ic_share.svg": "2f5dc9fca35dd55cf18584cab8c51e9f",
"assets/packages/sharpsell/assets/configurable_icons/ic_profile.svg": "397b7d7b630963566502437dcccc1ae7",
"assets/packages/sharpsell/assets/configurable_icons/ic_dvc.svg": "d8e1d0bfd439bd5e9b30578ae5a73704",
"assets/packages/sharpsell/assets/configurable_icons/ic_marketing_collateral.svg": "ff2a4bf47e4c90bd30336c631fd59758",
"assets/packages/sharpsell/assets/configurable_icons/ic_quick_links.svg": "08a47544d6470fb10739b3944fbab86e",
"assets/packages/sharpsell/assets/configurable_icons/ic_launchpad.svg": "0c9b52a9360fe9e106ed1cda39503e0b",
"assets/packages/sharpsell/assets/configurable_icons/ic_product_presentation.svg": "4f243d15add051ea1d49fb637b375847",
"assets/packages/sharpsell/assets/configurable_icons/ic_potd.svg": "d5a1fcda62a4ffc7da4df74c4eef8851",
"assets/packages/sharpsell/assets/configurable_icons/ic_timer_challenge.svg": "a597a73dc838321e3f227496fbfa4b39",
"assets/packages/sharpsell/assets/configurable_icons/ic_sync.svg": "b480a995315e1fe95bd2febafbf790eb",
"assets/packages/sharpsell/assets/configurable_icons/ic_go_back.svg": "773e6f194626b218b4be2ffc619fe89a",
"assets/packages/sharpsell/assets/configurable_icons/ic_search.svg": "08e4e5dcad1c72d5c01f89b3d253d00d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"sql-wasm.wasm": "9c67691cdfea004dda62090e49940eac",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
