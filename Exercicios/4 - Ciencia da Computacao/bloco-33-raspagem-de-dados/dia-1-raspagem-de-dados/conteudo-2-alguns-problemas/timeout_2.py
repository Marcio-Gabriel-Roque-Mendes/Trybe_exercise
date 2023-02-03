import requests

# Podemos definir um tempo limite (timeout) para que, após este tempo,
# possamos tomar alguma atitude, como por exemplo, realizar uma nova tentativa.

# Este tempo limite normalmente é definido através de experimentações
# e análise do tempo de resposta normal de uma requisição.

try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)

# No exemplo acima, para efeitos didáticos, modificamos a URI do recurso,
# diminuindo o delay de resposta da requisição através do timeout,
# porém normalmente este valor não muda.
