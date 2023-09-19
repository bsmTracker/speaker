import os
 
# play sound
file = "https://rr4---sn-3u-20nr.googlevideo.com/videoplayback?expire=1695042992&ei=UPkHZfXnGumK2roPxMa_-Ao&ip=210.180.194.253&id=o-AALAgZtBkcPcVOglBcuDPczHHMuvaum6Fzxvd9GMJD9w&itag=251&source=youtube&requiressl=yes&mh=Xr&mm=31%2C29&mn=sn-3u-20nr%2Csn-3u-bh2ze&ms=au%2Crdu&mv=m&mvi=4&pl=19&initcwndbps=2067500&spc=UWF9f89mju-vdE0YBXR87UA8ZDzkeJY&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=4804893&dur=310.621&lmt=1663599089905926&mt=1695020956&fvip=7&keepalive=yes&fexp=24007246&beids=24350018&c=ANDROID&txp=6318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgKj4uUAls44VNXJ4dD8IFO-brz3m3KeOHZrpJe4RRHngCIQCi5TyEdimiiTwUDX4ZhW5jB-2FHpW7YI-9OFSg_d1RRQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgTgR03OCw8u_mMuxWX5cx8D0I74aC_JyLWbljFwfhaI4CIH_zP6dMSrD2Zrx_U-5z09r7Jl2gnhj6UQ-AIwy23vh8"
print('playing sound using native player')
os.system("afplay " + file)


