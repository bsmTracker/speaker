# 시도해봄
import pygame.mixer

# pygame 초기화
pygame.mixer.init()

# 음악 파일 로드
pygame.mixer.music.load('https://rr2---sn-3u-20nee.googlevideo.com/videoplayback?expire=1694703219&ei=E8oCZcSBIvex1d8Pkv2u8AQ&ip=211.182.230.53&id=o-AJ1kRjTA7Hyyeqt8G3UBkOhq5V_VBlo73teQBVGLA1Q2&itag=251&source=youtube&requiressl=yes&mh=T8&mm=31%2C29&mn=sn-3u-20nee%2Csn-3u-bh2zl&ms=au%2Crdu&mv=m&mvi=2&pl=17&initcwndbps=4177500&spc=UWF9f1X2U8BiCZgiGKpdez9dU8NfWNI&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=3711285&dur=203.481&lmt=1688421392091717&mt=1694681115&fvip=5&keepalive=yes&fexp=24007246&beids=24350018&c=ANDROID&txp=4432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAL54y2ofGoVIZbs0TSKq6wjBKvFka2EMDTFWpzcskOrzAiEA8yogFq_-FPs8RoLgF5bMpxlGMz4-pmo8hmgbHL9Bn_o%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgDeIEHvjZy2Bm6TAgIUXsmfLP77I8j1Er5cou4TnpjOYCICJNmWZOgvQf8scdg4RUq2k6S4H9oTPjMavNcu9vFJhp')

# 음악 재생
pygame.mixer.music.play()