import numpy as np
from scipy.io.wavfile import write

# Configurações do som
sample_rate = 44100  # taxa de amostragem
duration = 0.05      # 50ms, som bem curto
frequency = 300     # frequência aguda para click

# Gerando a onda senoidal com decaimento rápido
t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
audio = np.sin(2 * np.pi * frequency * t) * np.exp(-50 * t)  # decaimento rápido

# Convertendo para 16-bit e salvando
audio_int = np.int16(audio * 32767)
write("click_satisfatorio.wav", sample_rate, audio_int)
