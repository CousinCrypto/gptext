# gptext
Chrome extension &amp; Openai GPT 3.5 turbo api

Chrome extensions only really need 3 files 

index.html (what you see in the popup, recommend adding CSS)(often named popup.html)
manifest.json
script.js (what you don't see in the popup)(often named popup.js)

To connect to any OpenAi api, create an api key here: https://platform.openai.com/api-keys  
and then swap the dummy api key i added with yours it should look like sk-fgidre565r7fyhfye654rtfgfjhgfhhfjdgjh

for openai chat compeletions the endpoint is https://api.openai.com/v1/chat/completions
for image generation, embeddings and assistants its different see: https://platform.openai.com/docs/models/how-we-use-your-data
