
// Імпортуємо необхідні бібліотеки
const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const fs = require('fs');
const cors = require('cors');
const { PDFDocument } = require('pdf-lib');
const { exec } = require('child_process');
const util = require('util');
const path = require('path');

// Завантажуємо конфігурацію з .env файлу
dotenv.config();

// Налаштовуємо OpenAI API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Створюємо сервер Express
const app = express()
app.use(cors());
const port = process.env.PORT || 3000;

// Middleware для обробки JSON
app.use(express.json());

// Налаштування multer для завантаження файлів
const upload = multer({ dest: '../uploads' });

async function getTextFromPDF(pdfBuffer) {
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const uint8Array = new Uint8Array(pdfBuffer);

    // Load the PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    // Get the number of pages
    const numPages = pdfDoc.getPageCount();

    // Use pdfjs-dist to extract text
    const loadingTask = pdfjs.getDocument(uint8Array);
    const pdf = await loadingTask.promise;

    let textContent = '';
    let prevY = null;

    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContentItems = await page.getTextContent();

        textContentItems.items.forEach(item => {
            // Add a newline if the vertical position (y) has significantly changed
            if (prevY !== null && Math.abs(prevY - item.transform[5]) > 10) { // Adjust the threshold (10) as needed
                textContent += '\n';
            }

            textContent += item.str + ' ';
            prevY = item.transform[5];
        });
    }

    return textContent.trim();
}

const execPromise = util.promisify(exec);
async function parsePDF(pathPDF, pathOutput) {
    const command = `marker_single "${pathPDF}" --output_dir "${pathOutput}"`;

    try {
        const { stdout, stderr } = await execPromise(command);
        if (stderr) {
            console.error(`Error output: ${stderr}`);
            throw new Error(stderr);
        }
        console.log(`Command output: ${stdout}`);
        return stdout;
    } catch (error) {
        console.error(`Error executing command: ${error.message}`);
        throw error;
    }
}

async function readMarkdownFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        throw error;
    }
}


// Ендпоїнт для завантаження файлів
app.post('/upload', upload.single('pdfFile'), async (req, res) => {

    const { parseType } = req.body;

    try {
        const file = req.file;
        const pdfPath = file.path;

        console.log('file :>> ', file);

        // Перевірка наявності файлу
        if (!file) {
            return res.status(400).json({ error: 'Файл не завантажено' });
        }

        // Перевірка типу файлу
        if (file.mimetype !== 'application/pdf') {
            return res.status(400).json({ error: 'Завантажено неправильний тип файлу. Очікується PDF.' });
        }

        let text = '';

        switch (parseType) {
            case 'MARKER':
                const outputDir = path.join(__dirname, '../OUTPUT');
                const mdPath = path.join(outputDir, `${file.filename}/${file.filename + '.md'}`);

                console.log('mdPath :>> ', mdPath);

                try {
                    await parsePDF(pdfPath, outputDir);
                } catch (error) {
                    console.log('error :>> ', error);
                }

                text = await readMarkdownFile(mdPath);

                break;

            default:
                // Робота з PDF за допомогою pdf-lib
                const pdfBuffer = fs.readFileSync(pdfPath);
                text = await getTextFromPDF(pdfBuffer);
                break;
        }

        // Повернення тексту у відповідь
        res.status(200).send(text);
    } catch (error) {
        console.error('Помилка обробки PDF файлу:', error);
        res.status(500).json({ error: 'Помилка обробки PDF файлу' });
    }
});

// Ендпоїнт для взаємодії з OpenAI API
app.post('/GPT/chat', upload.single(), async (req, res) => {
    try {
        const { text, model } = req.body;
       
        if (!text) {
            return res.status(400).json({ error: 'Повідомлення обов’язкове' });
        }

        const completion = await openai.chat.completions.create({
            model,
            messages: [{ role: 'user', content: text }],
        });

        const reply = completion.choices[0].message.content;
        res.status(200).send(reply);
    } catch (error) {
        console.error('Помилка при взаємодії з OpenAI API:', error);
        res.status(500).json({ error: 'Помилка при взаємодії з OpenAI API' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});
