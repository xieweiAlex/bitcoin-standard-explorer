#!/usr/bin/env node

/**
 * Script to automatically translate missing German translations
 * Compares en.json with de.json and identifies missing keys
 * 
 * Usage: node scripts/translate-missing.js
 * 
 * Note: This script requires a translation API. You can integrate:
 * - Google Translate API
 * - DeepL API
 * - Or manually add translations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to translation files
const enPath = path.join(__dirname, '../src/locales/en.json');
const dePath = path.join(__dirname, '../src/locales/de.json');

/**
 * Recursively find all keys in an object
 */
function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys.push(...getAllKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
  }
  return keys;
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Set nested value in object using dot notation
 */
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
}

/**
 * Translate text using placeholder (replace with actual API call)
 * For now, this just returns a placeholder
 */
async function translateText(text, targetLang = 'de') {
  // TODO: Replace with actual translation API
  // Example with Google Translate API:
  // const { Translate } = require('@google-cloud/translate').v2;
  // const translate = new Translate({ projectId: 'your-project-id' });
  // const [translation] = await translate.translate(text, targetLang);
  // return translation;
  
  // Placeholder: returns text with [TRANSLATE] prefix
  return `[TRANSLATE] ${text}`;
}

/**
 * Main function
 */
async function main() {
  try {
    // Read translation files
    const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    const deContent = JSON.parse(fs.readFileSync(dePath, 'utf8'));

    // Get all keys from English file
    const enKeys = getAllKeys(enContent);
    const deKeys = getAllKeys(deContent);

    // Find missing keys
    const missingKeys = enKeys.filter(key => !deKeys.includes(key));

    if (missingKeys.length === 0) {
      console.log('✅ All translations are up to date!');
      return;
    }

    console.log(`\n📝 Found ${missingKeys.length} missing translation(s):\n`);
    
    // Show missing keys
    missingKeys.forEach(key => {
      const enValue = getNestedValue(enContent, key);
      const deValue = getNestedValue(deContent, key);
      console.log(`  Key: ${key}`);
      console.log(`  EN: ${enValue}`);
      console.log(`  DE: ${deValue || 'MISSING'}\n`);
    });

    // Ask if user wants to translate (in a real implementation, this would be automatic)
    console.log('💡 To translate these automatically:');
    console.log('   1. Set up a translation API (Google Translate, DeepL, etc.)');
    console.log('   2. Update the translateText() function in this script');
    console.log('   3. Run this script again\n');

    // For now, create a report file
    const report = {
      missingKeys: missingKeys.map(key => ({
        key,
        en: getNestedValue(enContent, key),
        de: getNestedValue(deContent, key) || null
      })),
      timestamp: new Date().toISOString()
    };

    const reportPath = path.join(__dirname, '../translation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Translation report saved to: ${reportPath}\n`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
main();

export { getAllKeys, getNestedValue, setNestedValue, translateText };

