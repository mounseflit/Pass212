import os
import PyPDF2

# Directory containing the PDF files
pdf_dir = 'PDFs'

# Output directory for text files
output_dir = 'TEXTs/'

# Iterate over each file in the PDF directory
for filename in os.listdir(pdf_dir):
    if filename.endswith('.pdf'):
        # Open the PDF file
        with open(os.path.join(pdf_dir, filename), 'rb') as pdf_file:
            # Create a PDF reader object
            pdf_reader = PyPDF2.PdfReader(pdf_file)

            # Extract text from each page of the PDF
            text = ''
            for page in pdf_reader.pages:
                text += page.extract_text()

            # Create a text file with the same name as the PDF
            text_filename = os.path.splitext(filename)[0] + '.txt'
            text_filepath = os.path.join(output_dir, text_filename)

            # Write the extracted text to the text file with 'utf-8' encoding
            with open(text_filepath, 'w', encoding='utf-8') as text_file:
                text_file.write(text)