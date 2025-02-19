import csv
import os

# Directory containing the text files
directory = 'Us'

# List to store the data from text files
data = []

# Loop through each file in the directory
for filename in os.listdir(directory):
    if filename.endswith('.txt'):
        file_path = os.path.join(directory, filename)
        with open(file_path, 'r', encoding='utf-8') as file:
            # Read the contents of the text file
            file_data = file.read()
            # Remove line breakers from the file data
            file_data = file_data.replace('\n', '')
            # Append the data to the list
            data.append('Passage: ' + file_data)

# Path to the output CSV file
output_file = 'ZOUTPUT/Output.csv'

# Write the data to the CSV file
with open(output_file, 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    for row in data:
        writer.writerow([row])