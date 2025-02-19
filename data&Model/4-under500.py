import os
import requests

directory = "SUMs"
output_directory = "Us"  # Specify the output directory

# AI API
def send_to_ai_api(prompt):
    api_url = "https://a.picoapps.xyz/ask-ai"
    response = requests.get(api_url, params={'prompt': prompt})
    try:
        return response.json()['response']
    except ValueError:
        return "Error: Invalid response from AI API"
    

for filename in os.listdir(directory):
    if filename.endswith(".txt"):
        file_path = os.path.join(directory, filename)
        with open(file_path, "r", encoding="utf-8") as file:
            contents = file.read()
            
            # Check if the file already exists in the output directory
            output_file_path = os.path.join(output_directory, filename)
            if os.path.exists(output_file_path):
                print(f"File already exists: {output_file_path}")
            else:

                # Summarize the contents using AI API
                summary = send_to_ai_api("Please summarize this and make it less than 450 characters (under 500 is required) : "+ contents)

                # Save the summarized file with the same name in the output directory
                with open(output_file_path, "w") as output_file:
                    output_file.write(summary)
                
                print(f"Summarized file saved as: {output_file_path}")