# 시도해봄

# import requests
# import pygame
# pygame.mixer.init()

# def getBuffer(url):
#     buffer = b''
#     i = 0
#     with requests.get(url, stream=True) as r:
#         r.raise_for_status()
#         for chunk in r.iter_content(chunk_size=8192):
#             buffer += chunk
#     return buffer

# stream_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'
# audio_data = getBuffer(stream_url)
# a = pygame.mixer.Sound(buffer=audio_data)
# # print(audio_data)
# a.play()



# p = pyaudio.PyAudio()
# stream = p.open(format=p.get_format_from_width(2),  # Adjust accordingly based on your audio data format
#                 channels=2,  # Adjust accordingly based on your audio data channels
#                 rate=44100,  # Adjust accordingly based on your audio data sample rate
#                 output=True)

# chunk_size = 1024
# start_idx = 0

# while start_idx < len(audio_data):
#     end_idx = start_idx + chunk_size
#     chunk = audio_data[start_idx:end_idx]
#     stream.write(chunk)
#     start_idx = end_idx

# stream.stop_stream()
# stream.close()
# p.terminate()


# import requests
# import pygame
# import io

# pygame.mixer.init()

# # 스트리밍 오디오를 받아올 URL
# stream_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'

# # 오디오 버퍼 초기화
# audio_buffer = io.BytesIO()

# # 오디오 스트림을 받아와서 버퍼에 추가하고 동시에 재생
# with requests.get(stream_url, stream=True) as r:
#     r.raise_for_status()
#     for chunk in r.iter_content(chunk_size=8192):
#         audio_buffer.write(chunk)
#         pygame.mixer.music.load(audio_buffer)
#         pygame.mixer.music.play()



# import requests
# import pygame
# # 스트리밍 오디오를 받아올 URL
# stream_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'

# # 오디오 스트림을 받아와서 파일에 저장
# with requests.get(stream_url, stream=True) as r:
#     r.raise_for_status()
#     with open('audio_stream.mp3', 'wb') as audio_file:
#         for chunk in r.iter_content(chunk_size=8192):
#             audio_file.write(chunk)

# # 오디오 파일을 로드하고 재생
# pygame.mixer.music.load('audio_stream.mp3')
# pygame.mixer.music.play()




# from pydub import AudioSegment
# from pydub.playback import play

# # 스트리밍 오디오를 받아올 URL
# stream_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'

# # 오디오 스트림을 받아옵니다.
# audio_stream = AudioSegment.from_mp3(stream_url)

# # 스트리밍 오디오를 무한 반복하여 재생합니다.
# play(audio_stream)


# import requests
# import pygame
# import threading

# pygame.mixer.init()

# # 스트리밍 오디오를 받아올 URL
# stream_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'

# def load_and_play_stream():
#     with requests.get(stream_url, stream=True) as r:
#         r.raise_for_status()
#         for chunk in r.iter_content(chunk_size=8192):
#             pygame.mixer.music.load(buffer=chunk)
#             pygame.mixer.music.play()

# # 다른 스레드에서 스트리밍 오디오를 로드하고 재생
# stream_thread = threading.Thread(target=load_and_play_stream)
# stream_thread.start()

# # 메인 스레드는 여기에서 계속 실행할 수 있습니다.
# while True:
#     pass




# import pyaudio
# # Instantiate PyAudio and initialize PortAudio system resources (1)
# p = pyaudio.PyAudio()

#     # Open stream (2)
# stream = p.open(forma),
#         channels=wf.getnchannels(),
#         rate=wf.getframerate(),
#         output=True)




import pygame
import requests
from time import sleep

test_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'
		
class myfile(object):
	def __init__(self,url):
		self.url = url
		self.file = ''
		self.pos = 0
		self.chunk_gen = self.stream()
		
	def stream(self):
		r = requests.get(self.url, stream=True)
		for chunk in r.iter_content(chunk_size=40972):		
			if chunk:
				self.file+=chunk
				yield

	def read(self,*args):
		size = args[0]	
		while self.pos+size>len(self.file):
			try:
				self.chunk_gen.next()
			except StopIteration:
				break			
			# print 'have %d bytes, wants %d bytes(diff: %d)'%(len(self.file),self.pos+size,len(self.file)-self.pos+size)
		if len(args)>0:
			ret = self.file[self.pos:self.pos+size]
			self.pos+=size
			return ret
			

if __name__ == "__main__":
	pygame.mixer.init()
	fi = myfile(test_url)
    
	pygame.mixer.music.load(filename=fi)
	pygame.mixer.music.play()
	while pygame.mixer.music.get_busy():
		sleep(1)