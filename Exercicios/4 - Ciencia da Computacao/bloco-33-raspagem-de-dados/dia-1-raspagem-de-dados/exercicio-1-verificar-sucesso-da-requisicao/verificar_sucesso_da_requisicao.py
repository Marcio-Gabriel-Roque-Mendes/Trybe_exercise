import requests

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers"
)

print(response.text)

assert "bot detected" not in response.text
