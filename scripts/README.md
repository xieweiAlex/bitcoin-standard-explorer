# Translation Scripts

## translate-missing.js

This script helps identify missing German translations by comparing `en.json` with `de.json`.

### Usage

```bash
npm run translate:check
```

### What it does

1. Reads both `src/locales/en.json` and `src/locales/de.json`
2. Compares all translation keys
3. Identifies missing German translations
4. Creates a `translation-report.json` file with missing keys

### Setting up automatic translation

To enable automatic translation, you need to:

1. **Choose a translation API:**
   - Google Translate API
   - DeepL API
   - Azure Translator
   - Or any other translation service

2. **Update the `translateText()` function** in `translate-missing.js`:
   ```javascript
   async function translateText(text, targetLang = 'de') {
     // Add your API integration here
     const translation = await yourTranslationAPI(text, targetLang);
     return translation;
   }
   ```

3. **Run the script** - it will automatically translate and update `de.json`

### Example with DeepL API

```javascript
const deepl = require('deepl-node');

async function translateText(text, targetLang = 'de') {
  const translator = new deepl.Translator(process.env.DEEPL_API_KEY);
  const result = await translator.translateText(text, null, 'de');
  return result.text;
}
```

### Example with Google Translate API

```javascript
const { Translate } = require('@google-cloud/translate').v2;

async function translateText(text, targetLang = 'de') {
  const translate = new Translate({ projectId: 'your-project-id' });
  const [translation] = await translate.translate(text, targetLang);
  return translation;
}
```

### Manual Translation

If you prefer manual translation:

1. Run `npm run translate:check`
2. Check `translation-report.json` for missing keys
3. Manually add translations to `src/locales/de.json`
4. Run the script again to verify
