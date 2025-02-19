import os

folder_path = 'PDFs'  # Replace with the actual folder path

# Get a list of all PDF files in the folder
pdf_files = [file for file in os.listdir(folder_path) if file.endswith('.pdf')]

# Sort the list of PDF files
pdf_files.sort()

# Rename the PDF files in ascending order
for i, file in enumerate(pdf_files):
    new_name = str(i + 1) + '.pdf'
    os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_name))