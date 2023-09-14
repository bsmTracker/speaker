# 시도해봄

import requests
import pyaudio
import vlc

def getBuffer(url):
    buffer = b''
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        for chunk in r.iter_content(chunk_size=8192):
            buffer += chunk
    return buffer

stream_url = 'https://ep256.hostingradio.ru:8052/europaplus256.mp3'
audio_data = getBuffer(stream_url)

p = pyaudio.PyAudio()
stream = p.open(format=p.get_format_from_width(2),  # Adjust accordingly based on your audio data format
                channels=2,  # Adjust accordingly based on your audio data channels
                rate=44100,  # Adjust accordingly based on your audio data sample rate
                output=True)

chunk_size = 1024
start_idx = 0

while start_idx < len(audio_data):
    end_idx = start_idx + chunk_size
    chunk = audio_data[start_idx:end_idx]
    stream.write(chunk)
    start_idx = end_idx

stream.stop_stream()
stream.close()
p.terminate()
