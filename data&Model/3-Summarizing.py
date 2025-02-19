import requests
import os
import time


# AI API
def send_to_ai_api(prompt):
    api_url = "https://a.picoapps.xyz/ask-ai"
    response = requests.get(api_url, params={'prompt': prompt})
    try:
        return response.json()['response']
    except ValueError:
        return "Error: Invalid response from AI API"

# Directory containing the PDF files
pdf_dir = 'TEXTs'

# Output directory for output files
output_dir = 'SUMs/'

# Iterate over each file
for filename in os.listdir(pdf_dir):
    if filename.endswith('.txt'):
        # Open the text file
        with open(os.path.join(pdf_dir, filename), 'r', encoding='utf-8') as text_file:
            # Read the text from the file
            text = text_file.read()

             # Create a summary file with the same name as the text file
            summary_filename = os.path.splitext(filename)[0] + '.txt'
            summary_filepath = os.path.join(output_dir, summary_filename)

            # Check if the summary file already exists
            if not os.path.exists(summary_filepath):

                # Summarize the text
                prompt = '''Please extract only the informations related to hiritage of morocco and ignore the rest ,Clean the text and mention all the important details , and do not forget any main information): {text}'''
                summary = send_to_ai_api(prompt)

                print(f"Summary for {filename}:")
                print(summary)

                # delay
                time.sleep(1)

           
                # Write the summary to the summary file
                with open(summary_filepath, 'w', encoding='utf-8') as summary_file:
                    summary_file.write(summary)
            else:
                print(f"Summary file {summary_filename} already exists. Skipping.")